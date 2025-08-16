import { Button } from "@/components/ui/button";
import heroImage from "@/assets/petra-fc-hero.jpg";
const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Petra FC Heroes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">PETRA</span>
            <span className="block bg-gradient-papua bg-clip-text text-yellow-400">FOOTBALL CLUB</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Menyatukan Keluarga, Pemuda, dan Masyarakat Papua Melalui Sepak Bola
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            Bergabunglah dengan gerakan sepak bola yang mengubah hidup. Dari lapangan hijau Papua hingga hati setiap pendukung - bersama kita membangun masa depan yang lebih cerah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="papua" size="lg" className="text-lg px-8 py-4 h-auto" onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}>
              🏆 DUKUNG PETRA FC SEKARANG
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white hover:bg-white text-slate-950">
              Pelajari Lebih Lanjut
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary">9</div>
              <div className="text-sm text-white/80">Level Kontribusi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary">300K+</div>
              <div className="text-sm text-white/80">Kontribusi Mulai Dari</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary">∞</div>
              <div className="text-sm text-white/80">Dampak Sosial</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;