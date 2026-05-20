import { Target, Eye, Building2, BookOpen, FlaskConical, Dumbbell, Monitor, Library } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const facilities = [
  { icon: BookOpen, name: "Ruang Kelas Modern", desc: "32 ruang kelas ber-AC dengan smart board" },
  { icon: FlaskConical, name: "Laboratorium", desc: "Lab Fisika, Kimia, Biologi, dan Komputer" },
  { icon: Library, name: "Perpustakaan", desc: "Koleksi 15.000+ buku dan digital library" },
  { icon: Dumbbell, name: "Fasilitas Olahraga", desc: "Lapangan futsal, basket, dan kolam renang" },
  { icon: Monitor, name: "Lab Multimedia", desc: "Studio rekaman dan ruang editing video" },
  { icon: Building2, name: "Masjid", desc: "Masjid sekolah dengan kapasitas 500 orang" },
];

const orgStructure = [
  { role: "Kepala Sekolah", name: "Dr. H. Ahmad Suryadi, M.Pd." },
  { role: "Wakasek Kurikulum", name: "Dra. Siti Nurhaliza, M.Si." },
  { role: "Wakasek Kesiswaan", name: "H. Bambang Pamungkas, S.Pd." },
  { role: "Wakasek Sarpras", name: "Ir. Dewi Lestari, M.T." },
  { role: "Wakasek Humas", name: "Drs. Rudi Hartono, M.M." },
];

const Profile = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary px-4 py-16 md:px-8 md:py-20">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Profil Sekolah
          </h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Mengenal lebih dekat SMA Penabur Berkat, sekolah unggulan yang telah mencetak ribuan lulusan berkualitas.
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl">
            <div className="gold-bar mb-4" />
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground">Sejarah Singkat</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SMA Penabur Berkat didirikan pada tahun 1990 oleh Yayasan Pendidikan Nusantara dengan visi 
                menciptakan lembaga pendidikan menengah atas yang berkualitas dan terjangkau. Bermula dari 
                3 ruang kelas dengan 90 siswa, sekolah ini terus berkembang menjadi salah satu SMA 
                terkemuka di Jakarta.
              </p>
              <p>
                Selama lebih dari tiga dekade, SMA Nusantara telah meluluskan lebih dari 10.000 alumni 
                yang kini tersebar di berbagai sektor, dari akademisi hingga pengusaha sukses. Banyak 
                alumni yang melanjutkan pendidikan ke universitas-universitas ternama di dalam dan luar negeri.
              </p>
              <p>
                Pada tahun 2020, SMA Nusantara mendapatkan akreditasi A dari BAN-S/M dan terus 
                berkomitmen untuk meningkatkan mutu pendidikan sesuai dengan perkembangan zaman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 bg-card card-hover">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">Visi</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Menjadi sekolah menengah atas unggulan yang menghasilkan lulusan beriman, berilmu, 
                  berkarakter, dan berdaya saing global pada tahun 2030.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-card card-hover">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">Misi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Menyelenggarakan pendidikan berkualitas berbasis kurikulum merdeka
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Mengembangkan potensi siswa secara holistik
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Membentuk karakter berbasis nilai-nilai Pancasila
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Mempersiapkan siswa menghadapi tantangan global
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Struktur Organisasi</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orgStructure.map((item) => (
              <Card key={item.role} className="border bg-card">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.role}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-foreground">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Fasilitas Sekolah</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ icon: Icon, name, desc }) => (
              <Card key={name} className="card-hover border-0 bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{name}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
