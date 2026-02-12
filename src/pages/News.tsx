import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { toast } from "sonner";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
}

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "Siswa SMA Nusantara Raih Medali Emas Olimpiade Sains Nasional",
    content: "Prestasi membanggakan kembali diraih oleh siswa-siswi SMA Nusantara dalam ajang Olimpiade Sains Nasional 2026. Tiga siswa berhasil meraih medali emas di bidang Fisika, Kimia, dan Matematika. Pencapaian ini merupakan bukti nyata dari kualitas pendidikan dan pembinaan yang dilakukan oleh SMA Nusantara.",
    date: "2026-02-10",
    category: "Prestasi",
  },
  {
    id: 2,
    title: "Pendaftaran Peserta Didik Baru Tahun Ajaran 2026/2027 Dibuka",
    content: "SMA Nusantara membuka pendaftaran peserta didik baru untuk tahun ajaran 2026/2027. Pendaftaran dimulai tanggal 1 Maret 2026 secara online melalui website sekolah. Kuota yang tersedia sebanyak 320 siswa yang terbagi dalam 10 rombongan belajar.",
    date: "2026-02-05",
    category: "Pengumuman",
  },
  {
    id: 3,
    title: "Workshop Pengembangan Kurikulum Merdeka Belajar",
    content: "Para guru SMA Nusantara mengikuti workshop intensif selama 3 hari untuk pengembangan kurikulum merdeka belajar. Workshop ini menghadirkan narasumber dari Kemendikbudristek dan bertujuan untuk meningkatkan kualitas pembelajaran di sekolah.",
    date: "2026-02-01",
    category: "Kegiatan",
  },
  {
    id: 4,
    title: "Tim Basket SMA Nusantara Juara Tingkat Provinsi",
    content: "Tim basket putra SMA Nusantara berhasil meraih juara 1 dalam kompetisi basket antar SMA tingkat Provinsi DKI Jakarta. Kemenangan ini diraih setelah mengalahkan 15 tim dari berbagai sekolah di Jakarta.",
    date: "2026-01-25",
    category: "Prestasi",
  },
];

const categories = ["Semua", "Pengumuman", "Prestasi", "Kegiatan"];

const News = () => {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [filter, setFilter] = useState("Semua");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({ title: "", content: "", category: "Pengumuman" });

  const filtered = filter === "Semua" ? news : news.filter((n) => n.category === filter);

  const openCreate = () => {
    setEditItem(null);
    setForm({ title: "", content: "", category: "Pengumuman" });
    setDialogOpen(true);
  };

  const openEdit = (item: NewsItem) => {
    setEditItem(item);
    setForm({ title: item.title, content: item.content, category: item.category });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("Judul dan konten wajib diisi");
      return;
    }
    if (editItem) {
      setNews((prev) =>
        prev.map((n) => (n.id === editItem.id ? { ...n, ...form } : n))
      );
      toast.success("Berita berhasil diperbarui");
    } else {
      const newItem: NewsItem = {
        id: Date.now(),
        ...form,
        date: new Date().toISOString().split("T")[0],
      };
      setNews((prev) => [newItem, ...prev]);
      toast.success("Berita berhasil ditambahkan");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
    toast.success("Berita berhasil dihapus");
  };

  return (
    <Layout>
      <section className="bg-primary px-4 py-16 md:px-8 md:py-20">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Berita & Pengumuman
          </h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Informasi terbaru seputar kegiatan dan pengumuman SMA Nusantara.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Controls */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreate} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Plus className="mr-2 h-4 w-4" /> Tambah Berita
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    {editItem ? "Edit Berita" : "Tambah Berita Baru"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <Input
                    placeholder="Judul berita"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pengumuman">Pengumuman</SelectItem>
                      <SelectItem value="Prestasi">Prestasi</SelectItem>
                      <SelectItem value="Kegiatan">Kegiatan</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Isi berita..."
                    rows={5}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
                    <Button onClick={handleSave}>Simpan</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <p className="py-10 text-center text-muted-foreground">Belum ada berita.</p>
            )}
            {filtered.map((item) => (
              <Card key={item.id} className="card-hover border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                          {item.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(item.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">{item.content}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
