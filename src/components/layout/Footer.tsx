import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Office Cleaning", href: "/services#office" },
  { label: "Deep Cleaning", href: "/services#deep-cleaning" },
  { label: "Facility Maintenance", href: "/services#facility" },
  { label: "Post-Construction Cleaning", href: "/services#post-construction" },
  { label: "Janitorial Services", href: "/services#janitorial" },
  { label: "Junk Removal", href: "/services#junk-removal" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries Served", href: "/industries" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                Ready for a Cleaner Space?
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                Get a free, no-obligation quote for your commercial cleaning needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link 
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5" />
                  (123) 456-7890
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-3 mb-6"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img 
                src="/logo.png" 
                alt="Remove It Services" 
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Remove It</span>
                <span className="text-xs text-primary-foreground/60 leading-tight">Services</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Professional commercial cleaning services across the state. Reliable, thorough, and hassle-free.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:aweaver@removeitservices.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  aweaver@removeitservices.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Delaware County PA, Delaware, Cecil & Harford County MD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Remove It Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
