import { useState } from "react";
import { CalendarDays, FileText, GraduationCap, CheckCircle2, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const timeline = [
  { date: "1 Maret – 30 April 2026", title: "Pendaftaran Online", desc: "Calon siswa mengisi formulir dan mengunggah berkas." },
  { date: "5 Mei 2026", title: "Tes Seleksi", desc: "Tes akademik, wawancara, dan psikotes." },
  { date: "15 Mei 2026", title: "Pengumuman", desc: "Hasil seleksi diumumkan di website resmi." },
  { date: "20 – 30 Mei 2026", title: "Daftar Ulang", desc: "Pembayaran dan pengambilan seragam." },
];

const syarat = [
  "Fotokopi ijazah / SKL SMP (legalisir)",
  "Fotokopi rapor SMP semester 1–5",
  "Fotokopi akta kelahiran & KK",
  "Pas foto berwarna 3x4 (4 lembar)",
  "Surat keterangan sehat dari dokter",
  "Fotokopi KTP orang tua/wali",
];

const biaya = [
  { item: "Uang Pendaftaran", nominal: "Rp 250.000" },
  { item: "Uang Pangkal", nominal: "Rp 3.500.000" },
  { item: "SPP Bulanan", nominal: "Rp 450.000" },
  { item: "Seragam & Buku", nominal: "Rp 1.200.000" },
];

const PPDB = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Pendaftaran terkirim!", {
        description: "Tim PPDB akan menghubungi Anda dalam 1x24 jam via WhatsApp/Email.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10" style={{ background: "var(--gold-gradient)" }} />
        <div className="container-narrow relative px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <GraduationCap className="h-4 w-4" /> PPDB Tahun Ajaran 2026/2027
            </span>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Penerimaan Peserta Didik Baru
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              Bergabunglah bersama SMA Penabur Berkat Mentawai — sekolah unggulan yang membentuk siswa
              <span className="font-semibold text-accent"> Beriman, Berkarakter, Berprestasi</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-foreground">Jadwal PPDB</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Card key={i} className="card-hover border-0">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-accent/20 inline-block px-2 py-0.5 rounded">
                    {t.date}
                  </p>
                  <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syarat + Biaya */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          <Card className="border-0">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Syarat Pendaftaran</h2>
              </div>
              <ul className="space-y-3">
                {syarat.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Rincian Biaya</h2>
              </div>
              <div className="divide-y divide-border">
                {biaya.map((b) => (
                  <div key={b.item} className="flex items-center justify-between py-3">
                    <span className="text-sm text-muted-foreground">{b.item}</span>
                    <span className="font-display font-semibold text-foreground">{b.nominal}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Tersedia beasiswa prestasi & program cicilan. Hubungi panitia untuk info lebih lanjut.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Pendaftaran */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <div className="mb-8 text-center">
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-foreground">Formulir Pendaftaran Online</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Isi data berikut. Panitia akan menghubungi Anda untuk verifikasi & tahap selanjutnya.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nama">Nama Lengkap *</Label>
                    <Input id="nama" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nisn">NISN *</Label>
                    <Input id="nisn" required maxLength={20} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tempat">Tempat Lahir *</Label>
                    <Input id="tempat" required maxLength={50} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tgl">Tanggal Lahir *</Label>
                    <Input id="tgl" type="date" required />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="jk">Jenis Kelamin *</Label>
                    <Select required>
                      <SelectTrigger id="jk"><SelectValue placeholder="Pilih" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">Laki-laki</SelectItem>
                        <SelectItem value="P">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jurusan">Pilihan Jurusan *</Label>
                    <Select required>
                      <SelectTrigger id="jurusan"><SelectValue placeholder="Pilih jurusan" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IPA">MIPA</SelectItem>
                        <SelectItem value="IPS">IPS</SelectItem>
                        <SelectItem value="BAHASA">Bahasa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smp">Asal SMP/MTs *</Label>
                  <Input id="smp" required maxLength={150} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="hp">No. HP/WhatsApp *</Label>
                    <Input id="hp" type="tel" required maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required maxLength={150} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ortu">Nama Orang Tua / Wali *</Label>
                  <Input id="ortu" required maxLength={100} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alamat">Alamat Lengkap *</Label>
                  <Textarea id="alamat" required maxLength={500} rows={3} />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {loading ? "Mengirim..." : "Kirim Pendaftaran"}
                  </Button>
                  <Button type="button" variant="outline" size="lg" asChild>
                    <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Brosur akan segera tersedia."); }}>
                      <Download className="mr-2 h-4 w-4" /> Unduh Brosur
                    </a>
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  Butuh bantuan? Hubungi panitia PPDB:{" "}
                  <a href="tel:+6281234567890" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    <Phone className="h-3 w-3" /> 0812-3456-7890
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PPDB;
