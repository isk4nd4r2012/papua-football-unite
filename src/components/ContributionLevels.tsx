import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContributionLevels = () => {
  const levels = [
    {
      name: "Pendukung Komunitas",
      amount: "300.000",
      badge: "Basic",
      color: "bg-slate-100",
      benefits: [
        "Sertifikat digital sebagai pendukung resmi",
        "Update rutin perkembangan tim",
        "Akses grup WhatsApp pendukung"
      ]
    },
    {
      name: "Sahabat Petra",
      amount: "500.000",
      badge: "Popular",
      color: "bg-blue-50",
      benefits: [
        "Semua benefit Pendukung Komunitas",
        "Undangan acara meet & greet",
        "Merchandise eksklusif (stiker & pin)"
      ]
    },
    {
      name: "Keluarga Petra",
      amount: "1.000.000",
      badge: "Community",
      color: "bg-green-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Jersey resmi Petra FC",
        "Prioritas tiket pertandingan kandang"
      ]
    },
    {
      name: "Duta Petra",
      amount: "2.500.000",
      badge: "Ambassador",
      color: "bg-yellow-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Sesi latihan eksklusif dengan tim",
        "Hak rekomendasi pemain muda"
      ]
    },
    {
      name: "Pelindung Petra",
      amount: "5.000.000",
      badge: "Shareholder",
      color: "bg-orange-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Eligible sebagai calon shareholders PT MSM",
        "Partisipasi dalam keputusan strategis tim"
      ]
    },
    {
      name: "Guardian Petra",
      amount: "10.000.000",
      badge: "Guardian",
      color: "bg-red-50",
      benefits: [
        "Semua benefit sebelumnya",
        "VIP seating setiap pertandingan",
        "Meet & greet pribadi dengan manajemen"
      ]
    },
    {
      name: "Patron Petra",
      amount: "25.000.000",
      badge: "Patron",
      color: "bg-purple-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Nama tercetak di jersey tim",
        "Akses ruang VIP stadion"
      ]
    },
    {
      name: "Legenda Petra",
      amount: "100.000.000",
      badge: "Legend",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Status lifetime supporter",
        "Hak veto dalam transfer pemain"
      ]
    },
    {
      name: "Investor Kehormatan",
      amount: "250.000.000",
      badge: "Honorary",
      color: "bg-gradient-to-br from-red-50 to-purple-50",
      benefits: [
        "Semua benefit sebelumnya",
        "Co-ownership recognition",
        "Permanent board advisory position"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sistem Kontribusi
            <span className="block bg-gradient-papua bg-clip-text text-transparent">
              "Dukung Petra FC"
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih level kontribusi yang sesuai dengan kemampuan Anda. Setiap level memberikan manfaat eksklusif dan kesempatan untuk terlibat langsung dalam perjalanan Petra FC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:scale-105 ${level.color}`}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {level.badge}
                  </Badge>
                  {level.badge === "Shareholder" && (
                    <div className="text-xs bg-gradient-papua text-white px-2 py-1 rounded-full">
                      Future Shareholder
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {level.name}
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">
                  Rp {level.amount}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {level.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
                >
                  Pilih Level Ini
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-papua p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Kontributor 5 Juta+ = Calon Shareholders</h3>
            <p className="text-lg mb-6">
              Bergabung dengan level Pelindung Petra atau lebih tinggi membuat Anda eligible sebagai calon shareholders di PT Mitra Sport Management - perusahaan induk yang mengelola Petra FC.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
            >
              Mulai Kontribusi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionLevels;