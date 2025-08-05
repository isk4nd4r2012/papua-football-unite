import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bapak Samuel Wenda",
      role: "Ketua RT 05 Jayapura",
      content: "Petra FC telah mengubah dinamika lingkungan kami. Anak-anak yang dulu main game online sekarang aktif berlatih sepak bola. Keluarga kami semakin dekat karena sering menonton bareng pertandingan tim.",
      avatar: "👨🏽"
    },
    {
      name: "Maria Kogoya",
      role: "Ibu Rumah Tangga & Pendukung Setia",
      content: "Sebagai ibu, saya melihat bagaimana Petra FC membentuk karakter anak saya. Dia belajar disiplin, kerja sama, dan pantang menyerah. Investasi terbaik untuk masa depan keluarga Papua.",
      avatar: "👩🏽"
    },
    {
      name: "David Tekege",
      role: "Pemuda Papua & Pemain",
      content: "Petra FC memberikan saya kesempatan yang tidak pernah saya bayangkan. Dari lapangan tanah merah di kampung, sekarang saya bermain di level yang lebih tinggi. Mimpi kami semua bisa terwujud!",
      avatar: "⚽"
    },
    {
      name: "Ibu Yustina Magai",
      role: "Guru SD & Relawan",
      content: "Program pendidikan karakter melalui sepak bola sangat efektif. Siswa-siswa jadi lebih fokus belajar dan punya tujuan hidup yang jelas. Petra FC bukan hanya klub, tapi sekolah kehidupan.",
      avatar: "📚"
    },
    {
      name: "Jhon Wambrauw",
      role: "Pengusaha Lokal & Kontributor",
      content: "Bergabung dengan Petra FC sebagai kontributor adalah keputusan terbaik. Tidak hanya mendukung olahraga, tapi juga membangun ekonomi lokal. ROI-nya bukan uang, tapi masa depan Papua yang lebih cerah.",
      avatar: "💼"
    },
    {
      name: "Sarah Numberi",
      role: "Mahasiswa & Aktivis Sosial",
      content: "Petra FC membuktikan bahwa perubahan sosial bisa dimulai dari hal sederhana seperti sepak bola. Komunitas kami jadi lebih solid, dan semangat persatuan Papua semakin menguat. Luar biasa!",
      avatar: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Suara 
            <span className="bg-gradient-papua bg-clip-text text-transparent">
              Keluarga Petra
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dengarkan langsung dari mereka yang telah merasakan dampak transformatif Petra FC dalam kehidupan mereka dan komunitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Bergabunglah dengan 1000+ Keluarga Papua
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Yang telah merasakan dampak positif Petra FC dalam hidup mereka
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Keluarga Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Testimoni Positif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;