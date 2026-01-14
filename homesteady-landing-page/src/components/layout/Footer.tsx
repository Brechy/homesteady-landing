import { Link } from 'react-router-dom';
import { Leaf, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '../../lib/constants';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:info@brechy.com', label: 'Email' },
];

const supportLinks = [
  { label: 'Help Center', href: '#', isExternal: true },
  { label: 'Contact Us', href: '#', isExternal: true },
  { label: 'Privacy Policy', href: '/privacy-policy', isExternal: false },
  { label: 'Terms of Service', href: '/terms-of-service', isExternal: false },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-forest-500 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-serif text-xl font-semibold">{APP_NAME}</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              The complete mobile app for modern homesteaders. Track livestock, plan gardens, and stay organized — even offline.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-forest-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            {currentYear} Brechy.com All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ in Vermont
          </p>
        </div>
      </div>
    </footer>
  );
}
