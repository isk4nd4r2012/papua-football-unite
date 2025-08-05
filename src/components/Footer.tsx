const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-papua bg-clip-text text-transparent">
              PETRA FC
            </h3>
            <p className="text-white/80 mb-4">
              Menyatukan keluarga, pemuda, dan masyarakat Papua melalui sepak bola.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                📘
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                📷
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                🐦
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                ▶️
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-white/80">
              <li>Pengembangan Pemain</li>
              <li>Pembinaan Komunitas</li>
              <li>Turnamen Lokal</li>
              <li>Program Beasiswa</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontribusi</h4>
            <ul className="space-y-2 text-white/80">
              <li>9 Level Kontribusi</li>
              <li>Benefit Eksklusif</li>
              <li>Shareholders Program</li>
              <li>Cara Bergabung</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-white/80">
              <li>📧 info@petrafc.id</li>
              <li>📱 +62 xxx-xxxx-xxxx</li>
              <li>📍 Jayapura, Papua</li>
              <li>🌐 bit.ly/DukungPetra</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 mb-4 md:mb-0">
              © 2024 Petra Football Club. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Dikelola oleh PT Mitra Sport Management - Membangun Masa Depan Sepak Bola Papua
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;