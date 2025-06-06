import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import { cn } from '../../lib/utils';

interface NavLink {
  title: string;
  path: string;
  dropdown?: { title: string; path: string }[];
}

const navLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' },
  { 
    title: 'Platforms', 
    path: '/platforms', 
    dropdown: [
      { title: 'Mesaj', path: 'https://mesaj.cloud' },
      { title: 'Turnaj', path: 'https://turnaj.mobi' },
      { title: 'Billmagic', path: 'https://billmagic.xyz' },
      { title: 'Bingebay', path: 'https://bingebay.tv/' },
      { title: 'Finsight', path: 'https://finsightngr.online/' },
      { title: 'Pocket Legal', path: 'http://pocketlegal.ai' },
    ]
  },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (path: string) => {
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="nav-link flex items-center"
                    onClick={() => toggleDropdown(link.path)}
                  >
                    {link.title}
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform", 
                        activeDropdown === link.path && "rotate-180"
                      )} 
                    />
                  </button>
                ) : (
                  <Link 
                    to={link.path} 
                    className={cn(
                      "nav-link",
                      location.pathname === link.path && "text-primary-500"
                    )}
                  >
                    {link.title}
                  </Link>
                )}

                {link.dropdown && (
                  <div 
                    className={cn(
                      "absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 transform origin-top-left",
                      activeDropdown === link.path 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    {link.dropdown.map((item) =>
                      item.path.startsWith('http') ? (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* <Link to="/login" className="btn-secondary btn py-2 px-4">Log In</Link> */}
            <Link to="/careers" className="btn-primary btn py-2 px-4">Careers</Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden z-10 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 flex flex-col bg-white p-6 space-y-6 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-16" /> {/* Spacer for the toggle button */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-gray-100 pb-2">
                {link.dropdown ? (
                  <div>
                    <button 
                      className="nav-link flex items-center justify-between w-full py-2"
                      onClick={() => toggleDropdown(link.path)}
                    >
                      {link.title}
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 transition-transform", 
                          activeDropdown === link.path && "rotate-180"
                        )} 
                      />
                    </button>
                    {activeDropdown === link.path && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary-100">
                        {link.dropdown.map((item) =>
                          item.path.startsWith('http') ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-gray-600 hover:text-primary-500"
                            >
                              {item.title}
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 text-gray-600 hover:text-primary-500"
                            >
                              {item.title}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={cn(
                      "block py-2 nav-link",
                      location.pathname === link.path && "text-primary-500"
                    )}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto space-y-4">
            {/* <Link to="/login" className="btn-secondary btn w-full justify-center">Log In</Link> */}
            <Link to="/careers" className="btn-primary btn w-full justify-center">Careers</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}