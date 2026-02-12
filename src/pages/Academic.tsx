import { BookOpen, Calculator, Atom, Globe, Palette, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const departments = [
  { icon: Atom, name: "MIPA", desc: "Matematika dan Ilmu Pengetahuan Alam. Fokus pada sains, teknologi, dan riset." },
  { icon: Globe, name: "IPS", desc: "Ilmu Pengetahuan Sosial. Memahami dinamika sosial, ekonomi, dan geografi." },
  { icon: Palette, name: "Bahasa & Budaya", desc: "Penguasaan bahasa asing dan apresiasi budaya Indonesia dan internasional." },
];

const calendarItems = [
  { month: "Juli 2026", event: "Masa Pengenalan Lingkungan Sekolah (MPLS)" },
  { month: "Agustus 2026", event: "Peringatan HUT RI ke-81" },
  { month: "September 2026", event: "Penilaian Tengah Semester Ganjil" },
  { month: "Oktober 2026", event: "Studi Tour Kelas XI" },
  { month: "November 2026", event: "Pekan Kreativitas & Seni" },
  { month: "Desember 2026", event: "Penilaian Akhir Semester Ganjil" },
  { month: "Januari 2027", event: "Semester Genap Dimulai" },
  { month: "Maret 2027", event: "Ujian Sekolah Kelas XII" },
  { month: "Juni 2027", event: "Wisuda & Pelepasan Kelas XII" },
];

const curriculum = [
  { icon: BookOpen, title: "Kurikulum Merdeka", desc: "Pembelajaran berbasis proyek yang mendorong kreativitas dan kemandirian siswa." },
  { icon: Calculator, title: "Numerasi & Literasi", desc: "Penguatan kemampuan numerasi dan literasi sebagai fondasi pembelajaran." },
  { icon: Code, title: "Digital Literacy", desc: "Penguasaan teknologi informasi dan coding sebagai bekal abad 21." },
];

const Academic = () => {
  return (
    <Layout>
      <section className="bg-primary px-4 py-16 md:px-8 md:py-20">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">Akademik</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Program akademik unggulan untuk mengembangkan potensi siswa secara optimal.
          </p>
        </div>
      </section>

      {/* Jurusan */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Program Jurusan</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {departments.map(({ icon: Icon, name, desc }) => (
              <Card key={name} className="card-hover border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-foreground">{name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Kurikulum</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kalender Akademik */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Kalender Akademik</h2>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-0">
              {calendarItems.map((item, i) => (
                <div key={i} className="flex border-b border-border py-4 last:border-0">
                  <div className="w-36 shrink-0">
                    <span className="text-sm font-semibold text-primary">{item.month}</span>
                  </div>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academic;
