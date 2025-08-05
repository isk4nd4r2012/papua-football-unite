import { Card, CardContent } from "@/components/ui/card";

const SocialImpact = () => {
  const impacts = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Mempersatukan Keluarga",
      description: "Sepak bola menjadi jembatan yang menyatukan anggota keluarga dari berbagai generasi, menciptakan momen kebersamaan yang tak terlupakan.",
      stats: "500+ Keluarga Terlibat"
    },
    {
      icon: "🌟",
      title: "Memberdayakan Pemuda",
      description: "Memberikan platform bagi pemuda Papua untuk mengembangkan bakat, membangun karakter, dan meraih mimpi melalui sepak bola.",
      stats: "200+ Pemuda Terlatih"
    },
    {
      icon: "🏘️",
      title: "Memperkuat Masyarakat",
      description: "Membangun rasa kebersamaan dan identitas komunitas yang kuat, menjadikan sepak bola sebagai katalis perubahan sosial positif.",
      stats: "50+ Komunitas Aktif"
    },
    {
      icon: "💼",
      title: "Menciptakan Peluang Ekonomi",
      description: "Membuka lapangan kerja dan peluang usaha di sekitar ekosistem sepak bola, dari merchandise hingga layanan pendukung.",
      stats: "100+ Peluang Kerja"
    },
    {
      icon: "🎓",
      title: "Program Pendidikan",
      description: "Mengintegrasikan pendidikan karakter dan life skills dalam setiap aktivitas sepak bola untuk pembentukan generasi yang berkualitas.",
      stats: "300+ Siswa Terprogram"
    },
    {
      icon: "🌱",
      title: "Pembangunan Berkelanjutan",
      description: "Membangun infrastruktur olahraga dan sosial yang berkelanjutan untuk jangka panjang, menciptakan legacy untuk generasi mendatang.",
      stats: "15+ Fasilitas Dibangun"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Dampak Sosial 
            <span className="block bg-gradient-papua bg-clip-text text-transparent">
              Yang Nyata
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Setiap kontribusi Anda menciptakan gelombang perubahan positif yang menyentuh berbagai aspek kehidupan masyarakat Papua. Inilah bukti nyata dampak yang telah kita ciptakan bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {impact.description}
                </p>
                <div className="bg-gradient-papua text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {impact.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Kehidupan Tersentuh</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25</div>
              <div className="text-sm text-muted-foreground">Desa Terjangkau</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Tahun Konsisten</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Harapan Terbangun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;