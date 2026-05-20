import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop", caption: "Upacara Bendera" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", caption: "Kegiatan Belajar Mengajar" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop", caption: "Perpustakaan Sekolah" },
  { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop", caption: "Wisuda Kelas XII" },
  { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop", caption: "Pertandingan Basket" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop", caption: "Laboratorium Sains" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", caption: "Pentas Seni" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop", caption: "Study Tour" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop", caption: "Kegiatan Ekstrakulikuler" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-primary px-4 py-16 md:px-8 md:py-20">
        <div className="container-narrow">
          <div className="gold-bar mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">Galeri Foto</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Dokumentasi kegiatan dan momen berharga di SMA Penabur Berkat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden rounded-xl bg-card card-hover"
                onClick={() => setSelected(i)}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-foreground">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-primary-foreground transition-colors hover:bg-card/40"
            onClick={() => setSelected(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={galleryImages[selected].src.replace("w=600&h=400", "w=1200&h=800")}
            alt={galleryImages[selected].caption}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
