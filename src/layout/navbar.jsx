import{button} from "@/Components/Button";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5 text-foreground">
      <nav className="container mx-auto flex items-center justify-between px-5">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          Manas
        </a>

        <div className=" flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

            {navlinks.map((link , index) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*CTA button */}
        <div><Button> Contact Me</Button></div>
      </nav>
    </header>
  );
};