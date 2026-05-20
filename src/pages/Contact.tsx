import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Pendidikan No. 1, Kebayoran Baru, Jakarta Selatan 12345" },
  { icon: Phone, label: "Telepon", value: "(021) 1234-5678" },
  { icon: Mail, label: "Email", value: "" },
  { icon: Clock, label: "Jam Operasional", value: "Senin - Jumat, 07:00 - 16:00 WIB" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Mohon lengkapi semua field yang wajib diisi");
      return;
    }
    toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-primary px-4 py-16 md:px-8 md:py-20">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">Hubungi Kami</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Kami siap membantu menjawab pertanyaan Anda seputar SMA Penabur Berkat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              <div>
                <div className="gold-bar mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground">Informasi Kontak</h2>
              </div>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Lokasi SMA Penabur Berkat"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMjQuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <Card className="border-0 bg-card lg:col-span-3" style={{ boxShadow: "var(--card-shadow)" }}>
              <CardContent className="p-8">
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Nama *</label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Subjek</label>
                    <Input
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Perihal pesan"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Pesan *</label>
                    <Textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Send className="mr-2 h-4 w-4" /> Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
