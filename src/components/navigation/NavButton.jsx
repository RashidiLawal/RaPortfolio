import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
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
        className="flex items-center justify-center text-foreground rounded-full"
        aria-label={label}
        name={label}
      >
        <span className="w-14 h-14 relative p-4">{getIcon(icon)}</span>
      </Link>
    </div>
  );
};

export default NavButton;
