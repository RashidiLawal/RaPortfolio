import React from "react";
import Link from "next/link";
import { Home, Palette, User, Phone, Github, Linkedin, Twitter, NotebookText } from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
        return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
        return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="flex items-center justify-center text-foreground rounded-full bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
        aria-label={label}
        name={label}
      >
        <span className="w-14 h-14 relative p-4 animate-spin-slow-reverse">{getIcon(icon)}</span>
      </Link>
    </div>
  );
};

export default NavButton;
