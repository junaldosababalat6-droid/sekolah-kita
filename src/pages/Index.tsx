import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-school.jpg";
import principalImage from "@/assets/principal.jpg";

const newsItems = [
{
  id: 1,
  title: "Siswa SMA Nusantara Raih Medali Emas Olimpiade Sains Nasional",
  date: "10 Februari 2026",
  excerpt: "Prestasi membanggakan kembali diraih oleh siswa-siswi SMA Nusantara dalam ajang Olimpiade Sains Nasional 2026.",
  category: "Prestasi"
},
{
  id: 2,
  title: "Pendaftaran Peserta Didik Baru Tahun Ajaran 2026/2027 Dibuka",
  date: "5 Februari 2026",
  excerpt: "SMA Nusantara membuka pendaftaran peserta didik baru untuk tahun ajaran 2026/2027 mulai tanggal 1 Maret 2026.",
  category: "Pengumuman"
},
{
  id: 3,
  title: "Workshop Pengembangan Kurikulum Merdeka Belajar",
  date: "1 Februari 2026",
  excerpt: "Para guru SMA Nusantara mengikuti workshop intensif untuk pengembangan kurikulum merdeka belajar.",
  category: "Kegiatan"
}];


const stats = [
{ icon: Users, value: "1.200+", label: "Siswa Aktif" },
{ icon: BookOpen, value: "85+", label: "Tenaga Pendidik" },
{ icon: Trophy, value: "150+", label: "Prestasi" },
{ icon: Calendar, value: "35+", label: "Tahun Berdiri" }];


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kampus SMA Nusantara"
            className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-narrow relative px-4 py-24 md:px-8 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="gold-bar mb-6" />
            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">SMA Penabur Berkat

            </h1>
            <p className="mb-2 font-display text-xl text-primary-foreground/90 md:text-2xl">
              Unggul dalam Prestasi, Berkarakter dalam Kehidupan
            </p>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-primary-foreground/70 md:text-base">Membangun generasi muda Indonesia yang cerdas, kreatif, dan berakhlak mulia sejak tahun 2012

            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/profil">Kenali Kami</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-narrow grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-8">
          {stats.map(({ icon: Icon, value, label }) =>
          <div key={label} className="text-center">
              <Icon className="mx-auto mb-2 h-6 w-6 text-accent" />
              <div className="font-display text-2xl font-bold text-foreground md:text-3xl">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          )}
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={principalImage}
                  alt="Kepala Sekolah SMA Nusantara"
                  className="aspect-square w-full object-cover" />

              </div>
              <div className="mt-4 text-center">
                <p className="font-display text-lg font-semibold text-foreground">Dr. H. Ahmad Suryadi, M.Pd.</p>
                <p className="text-sm text-muted-foreground">Kepala Sekolah</p>
              </div>
            </div>
            <div className="space-y-4 md:col-span-3">
              <div className="gold-bar" />
              <h2 className="font-display text-3xl font-bold text-foreground">
                Sambutan Kepala Sekolah
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi SMA Nusantara. 
                Sebagai lembaga pendidikan yang telah berpengalaman lebih dari tiga dekade, kami berkomitmen 
                untuk memberikan pendidikan berkualitas yang tidak hanya mengembangkan kecerdasan intelektual, 
                tetapi juga membentuk karakter dan akhlak mulia.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Kami percaya bahwa setiap siswa memiliki potensi unik yang perlu dikembangkan. Melalui 
                kurikulum yang inovatif, tenaga pendidik profesional, dan fasilitas modern, kami berupaya 
                menciptakan lingkungan belajar yang kondusif dan menyenangkan bagi seluruh peserta didik.
              </p>
              <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
                <Link to="/profil" className="inline-flex items-center gap-1">
                  Selengkapnya tentang kami <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="gold-bar mb-4" />
              <h2 className="font-display text-3xl font-bold text-foreground">Berita Terbaru</h2>
            </div>
            <Button asChild variant="ghost" className="hidden text-muted-foreground md:flex">
              <Link to="/berita" className="inline-flex items-center gap-1">
                Lihat Semua <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((item) =>
            <Card key={item.id} className="card-hover overflow-hidden border-0 bg-card">
                <CardContent className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {item.category}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/berita">Lihat Semua Berita</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Index;