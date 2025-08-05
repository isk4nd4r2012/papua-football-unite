import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-papua text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">⚽</div>
        <div className="absolute top-32 right-20 text-4xl">🏆</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">⭐</div>
        <div className="absolute bottom-32 right-10 text-4xl">❤️</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">🏟️</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Saatnya Menjadi Bagian dari
            <span className="block text-secondary">Sejarah Papua!</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Jangan hanya jadi penonton. Jadilah bagian dari perubahan yang akan dikenang selamanya.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Mengapa Harus Sekarang?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Momentum Terbaik</h4>
                <p className="text-sm text-white/80">
                  Petra FC sedang dalam fase pertumbuhan eksplosif. Bergabung sekarang berarti mendapat manfaat maksimal.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">💎</div>
                <h4 className="font-semibold mb-2">Benefit Eksklusif</h4>
                <p className="text-sm text-white/80">
                  Early supporters mendapat akses dan privilese yang tidak akan tersedia untuk kontributor di masa depan.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold mb-2">ROI Jangka Panjang</h4>
                <p className="text-sm text-white/80">
                  Investasi Anda hari ini akan berkembang seiring pertumbuhan Petra FC dan PT Mitra Sport Management.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto font-bold text-primary hover:text-primary transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
            >
              🚀 DUKUNG PETRA FC SEKARANG
            </Button>
            
            <p className="text-sm text-white/80">
              Klik tombol di atas untuk mengakses formulir kontribusi resmi
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="font-bold mb-3">💳 Metode Pembayaran Aman</h4>
              <p className="text-sm text-white/80">
                Transfer bank, e-wallet, dan berbagai metode pembayaran yang aman dan terpercaya.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="font-bold mb-3">📞 Dukungan 24/7</h4>
              <p className="text-sm text-white/80">
                Tim support kami siap membantu Anda dalam proses kontribusi dan menjawab pertanyaan.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8">
            <p className="text-lg font-semibold mb-2">
              Bergabunglah dengan 1000+ Keluarga Papua yang telah mempercayai kami
            </p>
            <p className="text-sm text-white/80">
              Setiap hari tertunda adalah kesempatan yang terlewat untuk mengubah Papua menjadi lebih baik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;