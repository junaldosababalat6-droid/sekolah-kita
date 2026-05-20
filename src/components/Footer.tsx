import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-narrow px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <GraduationCap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-display text-lg font-bold">SMA Penabur Berkat</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Mendidik generasi yang beriman, berkarakter, dan berprestasi.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Navigasi</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/profil", label: "Profil Sekolah" },
                { to: "/akademik", label: "Akademik" },
                { to: "/berita", label: "Berita" },
                { to: "/galeri", label: "Galeri" },
                { to: "/kontak", label: "Kontak" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Kontak</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Jl. Pendidikan No. 1, Jakarta Selatan, 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(021) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span></span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Media Sosial</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} SMA Penabur Berkat. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
