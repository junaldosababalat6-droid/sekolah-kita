import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
{ to: "/", label: "Beranda" },
{ to: "/profil", label: "Profil" },
{ to: "/akademik", label: "Akademik" },
{ to: "/berita", label: "Berita" },
{ to: "/galeri", label: "Galeri" },
{ to: "/kontak", label: "Kontak" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-narrow flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-foreground">SMA Penabur Berkat Mentawai

            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">BERIMAN, BERKARAKTER,, BERPRESTASI

            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground ${
            location.pathname === link.to ?
            "bg-secondary text-secondary-foreground" :
            "text-muted-foreground"}`
            }>

              {link.label}
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}>

          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open &&
      <nav className="border-t border-border bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary ${
            location.pathname === link.to ?
            "bg-secondary text-secondary-foreground" :
            "text-muted-foreground"}`
            }>

                {link.label}
              </Link>
          )}
          </div>
        </nav>
      }
    </header>);

};

export default Navbar;