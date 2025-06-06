import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MapPin,
  Phone,
  Mail,
  Linkedin
} from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Socials */}
          <div>
            <Logo />
            <p className="mt-4 mb-6 text-gray-400 max-w-md font-semibold">
              VENIX PARTNERS LIMITED
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          {/* Contact Numbers & Email */}
          <div>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div>+234 812 445 7343</div>
                  <div>+234 909 999 1491</div>
                  <div>+234 813 283 1347</div>
                  <div>+234 905 587 0986</div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <Mail size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <span>hello@venixpartners.com</span>
              </div>
            </div>
            <div className="mt-8">
              <span className="block font-semibold">Hours</span>
              <span>Open today</span>
              <span className="block">09:00 am – 05:00 pm</span>
            </div>
          </div>
          {/* Address */}
          <div>
            <div className="flex items-start mt-2 text-gray-400 text-sm">
              <MapPin size={18} className="mr-2 text-primary-400 mt-1 flex-shrink-0" />
              <span>
                989 Workspaces, 10th Floor, Standard Chartered Building,<br />
                142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria.
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Venix Partners Limited. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}