import communityImage from "@/assets/community-spirit.jpg";

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Misi Kami: 
              <span className="block bg-gradient-papua bg-clip-text text-transparent">
                Menyatukan Papua
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Petra Football Club bukan hanya tentang sepak bola. Kami adalah gerakan komunitas yang percaya bahwa olahraga memiliki kekuatan untuk menyatukan keluarga, memberdayakan pemuda, dan memperkuat masyarakat Papua.
              </p>
              
              <p>
                Melalui "Dukung Petra FC", kami mengundang setiap individu untuk menjadi bagian dari perjalanan transformatif ini. Setiap kontribusi, dari yang terkecil hingga terbesar, membantu membangun masa depan yang lebih cerah bagi Papua.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-elegant">
                  <div className="text-2xl mb-2">⚽</div>
                  <h3 className="font-semibold mb-2">Pengembangan Talenta</h3>
                  <p className="text-sm text-muted-foreground">
                    Menemukan dan mengembangkan bakat sepak bola muda Papua
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-elegant">
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="font-semibold mb-2">Persatuan Komunitas</h3>
                  <p className="text-sm text-muted-foreground">
                    Membangun jembatan antara keluarga dan masyarakat
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-elegant">
                  <div className="text-2xl mb-2">📈</div>
                  <h3 className="font-semibold mb-2">Pemberdayaan Ekonomi</h3>
                  <p className="text-sm text-muted-foreground">
                    Menciptakan peluang ekonomi berkelanjutan
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-elegant">
                  <div className="text-2xl mb-2">🏆</div>
                  <h3 className="font-semibold mb-2">Prestasi Olahraga</h3>
                  <p className="text-sm text-muted-foreground">
                    Mengharumkan nama Papua di kancah nasional
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={communityImage} 
              alt="Komunitas Papua" 
              className="rounded-lg shadow-glow w-full"
            />
            <div className="absolute inset-0 bg-gradient-papua opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;