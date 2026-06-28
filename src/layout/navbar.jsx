import { Button } from "@/Components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5 text-foreground">
      <nav className="container mx-auto flex items-center justify-between px-5 relative">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          Manas Mishra
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:bg-surface rounded-full transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact Me</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden p-2 text-foreground">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`absolute top-full left-5 right-5 mt-4 md:hidden glass-strong rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-4 pointer-events-none invisible"
            }`}
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button size="sm" onClick={() => { setIsMobileMenuOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>Contact Me</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};