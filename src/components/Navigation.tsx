import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Moon, Sun, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-glass border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            TrustVC
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {/* Ecosystem Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Ecosystem
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/95 backdrop-blur-glass border border-border/50">
                  <DropdownMenuItem asChild>
                    <Link to="/tradetrust" className="cursor-pointer">
                      TradeTrust
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/opencerts" className="cursor-pointer">
                      OpenCerts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled className="cursor-not-allowed">
                    E-Apostilles
                    <span className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/gallery"
                className={cn(
                  "hover:text-primary transition-colors",
                  isActive("/gallery") ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Gallery
              </Link>

              <Link
                to="/support"
                className={cn(
                  "hover:text-primary transition-colors",
                  isActive("/support") ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                Support
              </Link>

              <Link
                to="/news"
                className={cn(
                  "hover:text-primary transition-colors",
                  isActive("/news") ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                News & Updates
              </Link>
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  {theme === "light" ? (
                    <Sun className="h-4 w-4" />
                  ) : theme === "dark" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Monitor className="h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-glass border border-border/50">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact CTA */}
            <Button asChild variant="default" className="bg-gradient-trust hover:opacity-90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;