import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
      <img
        src="/images/logo.png" // Corrected path
        alt="Venix Logo"
        className="h-10 w-auto"
        style={{ maxWidth: 160 }}
      />
    </Link>
  );
}