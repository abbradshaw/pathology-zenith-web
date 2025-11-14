import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/pathology-solutions-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceItems = [
    { title: "Laboratory Workflow Optimization", href: "#workflow" },
    { title: "Quality Assurance & Accreditation", href: "#quality" },
    { title: "Staff Training & Development", href: "#training" },
    { title: "Technology Integration", href: "#technology" },
    { title: "Process Improvement Consulting", href: "#process" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="flex items-center">
            <img src={logo} alt="Pathology Solutions" className="h-[57.6px] w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 text-base font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 bg-popover">
                      {serviceItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}
                  className="block px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <div className="px-4 py-2 font-medium text-muted-foreground">Services</div>
                <ul className="ml-4 space-y-1">
                  {serviceItems.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
                  className="block px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
