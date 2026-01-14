import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS, APP_NAME } from '../../lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavHref = (href: string) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-forest-500 flex items-center justify-center text-white group-hover:bg-forest-600 transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">{APP_NAME}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="text-gray-600 hover:text-forest-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={getNavHref('#signup')} size="sm">
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-forest-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-cream-200">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="text-gray-600 hover:text-forest-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={getNavHref('#signup')} className="w-full">
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
