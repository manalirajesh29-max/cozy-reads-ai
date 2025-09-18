import { Link, useLocation } from "react-router-dom";
import { BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/fiction", label: "Fiction" },
    { path: "/non-fiction", label: "Non-Fiction" },
    { path: "/mystery", label: "Mystery" },
    { path: "/romance", label: "Romance" },
    { path: "/sci-fi", label: "Sci-Fi" },
    { path: "/chatbot", label: "Ask AI", icon: MessageCircle },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <BookOpen className="h-6 w-6 text-primary" />
            BookWise
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "secondary" : "ghost"}
                  asChild
                  className="text-sm"
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/chatbot">
                <MessageCircle className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.slice(0, -1).map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "secondary" : "outline"}
                  size="sm"
                  asChild
                >
                  <Link to={item.path}>{item.label}</Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;