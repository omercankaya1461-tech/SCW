const CAR_DATA = {
  "ferrari-296": {
    brand: "Ferrari", name: "296 GTB", year: "2022–",
    engine: "3.0 L çift turbolu V6 + elektrik motoru",
    power: "830 CV", torque: "740 Nm",
    transmission: "8 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.470 kg",
    zero: "2,9 sn", speed: "330 km/sa",
    description: "Ferrari'nin V6 hibrit süper otomobili. Elektrik desteğiyle yüksek performansı günlük sürüş kabiliyetiyle birleştirir.",
    fact: "Plug-in hibrit sistem sayesinde kısa mesafelerde elektrikle sürüş yapabilir."
  },
  "ferrari-sf90": {
    brand: "Ferrari", name: "SF90 Stradale", year: "2019–",
    engine: "4.0 L çift turbolu V8 + 3 elektrik motoru",
    power: "1.000 CV", torque: "800 Nm",
    transmission: "8 ileri çift kavramalı",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.570 kg",
    zero: "2,5 sn", speed: "340 km/sa",
    description: "Ferrari'nin şarj edilebilir hibrit süper otomobili. Güçlü V8 motorunu üç elektrik motoruyla birleştirir.",
    fact: "Ferrari'nin ilk seri üretim plug-in hibrit spor otomobili olarak tanıtıldı."
  },
  "ferrari-f8": {
    brand: "Ferrari", name: "F8 Tributo", year: "2019–2023",
    engine: "3.9 L çift turbolu V8",
    power: "720 CV", torque: "770 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.435 kg",
    zero: "2,9 sn", speed: "340 km/sa",
    description: "Hafif yapısı ve güçlü çift turbolu V8 motoruyla öne çıkan orta motorlu Ferrari.",
    fact: "Adındaki Tributo, Ferrari'nin V8 motor geleneğine bir saygı duruşudur."
  },
  "ferrari-812-competizione": {
    brand: "Ferrari", name: "812 Competizione", year: "2021–",
    engine: "6.5 L atmosferik V12",
    power: "830 CV", torque: "692 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.480 kg",
    zero: "2,85 sn", speed: "340 km/sa üzeri",
    description: "Yüksek devir çevirebilen atmosferik V12 motoruyla özel bir Ferrari modeli.",
    fact: "Motoru yaklaşık 9.500 dev/dak seviyesine ulaşabilir."
  },
  "ferrari-daytona-sp3": {
    brand: "Ferrari", name: "Daytona SP3", year: "2022–",
    engine: "6.5 L atmosferik V12",
    power: "840 CV", torque: "697 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.485 kg",
    zero: "2,85 sn", speed: "340 km/sa üzeri",
    description: "Ferrari Icona serisinin retro yarış otomobillerinden esinlenen sınırlı üretim modeli.",
    fact: "Tasarımında markanın geçmişteki spor prototiplerinden izler bulunur."
  },
  "lamborghini-revuelto": {
    brand: "Lamborghini", name: "Revuelto", year: "2023–",
    engine: "6.5 L V12 + 3 elektrik motoru",
    power: "1.015 CV", torque: "Versiyona göre değişir",
    transmission: "8 ileri çift kavramalı",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.772 kg kuru",
    zero: "2,5 sn", speed: "350 km/sa üzeri",
    description: "Lamborghini'nin V12 motoru hibrit teknolojiyle birleştiren yeni nesil amiral gemisi.",
    fact: "Üç elektrik motoru, hızlanmaya ve dört tekerlekten çekiş sistemine katkı sağlar."
  },
  "lamborghini-huracan-sto": {
    brand: "Lamborghini", name: "Huracán STO", year: "2021–2024",
    engine: "5.2 L atmosferik V10",
    power: "640 CV", torque: "565 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.339 kg kuru",
    zero: "3,0 sn", speed: "310 km/sa",
    description: "Yol kullanımına uygun, pist odaklı aerodinamik özelliklere sahip Huracán.",
    fact: "STO adı Super Trofeo Omologata ifadesinden gelir."
  },
  "lamborghini-aventador-svj": {
    brand: "Lamborghini", name: "Aventador SVJ", year: "2018–2021",
    engine: "6.5 L atmosferik V12",
    power: "770 CV", torque: "720 Nm",
    transmission: "7 ileri ISR",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.525 kg kuru",
    zero: "2,8 sn", speed: "350 km/sa",
    description: "Büyük V12 motoru ve aktif aerodinamik sistemiyle tanınan Aventador versiyonu.",
    fact: "Aktif aerodinamik sistemi Lamborghini ALA 2.0 olarak adlandırılır."
  },
  "lamborghini-temerario": {
    brand: "Lamborghini", name: "Temerario", year: "2024–",
    engine: "4.0 L çift turbolu V8 + 3 elektrik motoru",
    power: "920 CV", torque: "Versiyona göre değişir",
    transmission: "8 ileri çift kavramalı",
    drive: "Dört tekerlekten çekiş", weight: "Resmî versiyona göre değişir",
    zero: "2,7 sn", speed: "340 km/sa üzeri",
    description: "Lamborghini'nin V10 motorlu Huracán'ın yerini alan hibrit V8 süper otomobili.",
    fact: "Yeni V8 motoru yüksek devir çevirecek şekilde tasarlanmıştır."
  },
  "lamborghini-sian": {
    brand: "Lamborghini", name: "Sián FKP 37", year: "2019–",
    engine: "6.5 L V12 + 48 volt hafif hibrit sistem",
    power: "819 CV", torque: "758 Nm",
    transmission: "7 ileri ISR",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.595 kg",
    zero: "2,8 sn", speed: "350 km/sa üzeri",
    description: "Lamborghini'nin sınırlı üretim V12 süper otomobili.",
    fact: "Hafif hibrit sisteminde geleneksel lityum iyon batarya yerine süper kapasitör kullanılır."
  },
  "mclaren-750s": {
    brand: "McLaren", name: "750S", year: "2023–",
    engine: "4.0 L çift turbolu V8",
    power: "750 PS", torque: "800 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.277 kg kuru",
    zero: "2,8 sn", speed: "332 km/sa",
    description: "Hafif gövde, hızlı tepki veren V8 motor ve sürüş hassasiyetine odaklanır.",
    fact: "McLaren 720S'in geliştirilmiş halidir."
  },
  "mclaren-765lt": {
    brand: "McLaren", name: "765LT", year: "2020–2021",
    engine: "4.0 L çift turbolu V8",
    power: "765 PS", torque: "800 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.229 kg kuru",
    zero: "2,8 sn", speed: "330 km/sa",
    description: "Longtail ailesinin hafiflik ve pist performansı odaklı sınırlı üretim modeli.",
    fact: "LT, Longtail anlamına gelir."
  },
  "mclaren-artura": {
    brand: "McLaren", name: "Artura", year: "2021–",
    engine: "3.0 L çift turbolu V6 + elektrik motoru",
    power: "700 PS", torque: "Versiyona göre değişir",
    transmission: "8 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Versiyona göre değişir",
    zero: "Yaklaşık 3,0 sn", speed: "330 km/sa",
    description: "Karbon fiber gövde yapısını plug-in hibrit V6 güç sistemiyle birleştirir.",
    fact: "McLaren'in hibrit süper otomobil teknolojisinde yeni bir platformu temsil eder."
  },
  "mclaren-p1": {
    brand: "McLaren", name: "P1", year: "2013–2015",
    engine: "3.8 L çift turbolu V8 + elektrik motoru",
    power: "916 PS", torque: "900 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.490 kg",
    zero: "2,8 sn", speed: "350 km/sa",
    description: "McLaren'in hibrit hiper otomobil üçlemesinin önemli üyelerinden biri.",
    fact: "Aktif arka kanadı ve aerodinamik sistemleri yüksek hızda yere basma kuvvetine katkı sağlar."
  },
  "mclaren-senna": {
    brand: "McLaren", name: "Senna", year: "2018–2019",
    engine: "4.0 L çift turbolu V8",
    power: "800 PS", torque: "800 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.198 kg kuru",
    zero: "2,8 sn", speed: "335 km/sa",
    description: "Pist kullanımına ve yüksek aerodinamik performansa odaklanan hafif hiper otomobil.",
    fact: "Adını Formula 1 efsanesi Ayrton Senna'dan alır."
  },
  "porsche-911-gt3-rs": {
    brand: "Porsche", name: "911 GT3 RS", year: "2022–",
    engine: "4.0 L atmosferik boxer 6 silindir",
    power: "525 PS", torque: "465 Nm",
    transmission: "7 ileri PDK",
    drive: "Arkadan itiş", weight: "Yaklaşık 1.450 kg",
    zero: "3,2 sn", speed: "296 km/sa",
    description: "Pistte tur zamanlarına odaklanan, büyük kanatlı ve gelişmiş aerodinamikli 911.",
    fact: "DRS benzeri sürücü kontrollü sürüklenme azaltma sistemi bulunur."
  },
  "porsche-911-turbo-s": {
    brand: "Porsche", name: "911 Turbo S", year: "Versiyona göre",
    engine: "3.8 L çift turbolu boxer 6 silindir",
    power: "650 PS (992.1)", torque: "800 Nm",
    transmission: "8 ileri PDK",
    drive: "Dört tekerlekten çekiş", weight: "Versiyona göre değişir",
    zero: "2,7 sn", speed: "330 km/sa",
    description: "Günlük kullanım rahatlığıyla çok yüksek hızlanmayı birleştiren 911 versiyonu.",
    fact: "Turbo S modelleri güçlü kalkış ve dört tekerlekten çekişleriyle bilinir."
  },
  "porsche-918-spyder": {
    brand: "Porsche", name: "918 Spyder", year: "2013–2015",
    engine: "4.6 L atmosferik V8 + 2 elektrik motoru",
    power: "887 PS", torque: "1.280 Nm sistem torku",
    transmission: "7 ileri PDK",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.674 kg",
    zero: "2,6 sn", speed: "345 km/sa",
    description: "Porsche'nin sınırlı üretim plug-in hibrit hiper otomobili.",
    fact: "Benzinli motoru ve elektrik motorları farklı akslara güç aktarabilir."
  },
  "bugatti-chiron": {
    brand: "Bugatti", name: "Chiron", year: "2016–2024",
    engine: "8.0 L dört turbolu W16",
    power: "1.500 PS", torque: "1.600 Nm",
    transmission: "7 ileri çift kavramalı",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.995 kg",
    zero: "Yaklaşık 2,4 sn", speed: "420 km/sa (sınırlı)",
    description: "W16 motoru ve yüksek hız kapasitesiyle tanınan Bugatti hiper otomobili.",
    fact: "Özel Super Sport versiyonları standart Chiron'dan daha yüksek hız hedefleri için geliştirildi."
  },
  "bugatti-tourbillon": {
    brand: "Bugatti", name: "Tourbillon", year: "2024 tanıtımı",
    engine: "8.3 L atmosferik V16 + 3 elektrik motoru",
    power: "1.800 PS", torque: "Versiyona göre açıklanır",
    transmission: "8 ileri çift kavramalı",
    drive: "Dört tekerlekten çekiş", weight: "Yaklaşık 1.995 kg",
    zero: "2,0 sn (0–100 km/sa iddiası)", speed: "445 km/sa",
    description: "Bugatti'nin V16 motor ve elektrik motorlarını birleştiren yeni nesil hiper otomobili.",
    fact: "Gösterge tasarımında geleneksel saatçilikten esinlenilmiştir."
  }
};

const slug = document.body.dataset.slug;
const car = CAR_DATA[slug];
const app = document.getElementById("app");

if (!car || !app) {
  if (app) app.textContent = "Araba bilgisi bulunamadı.";
} else {
  document.title = `${car.brand} ${car.name} | Supercar World`;

  const rows = [
    ["Model yılı", car.year],
    ["Motor", car.engine],
    ["Güç", car.power],
    ["Tork", car.torque],
    ["Şanzıman", car.transmission],
    ["Çekiş", car.drive],
    ["Ağırlık", car.weight],
    ["0–100 km/sa", car.zero],
    ["Azami hız", car.speed]
  ];

  app.innerHTML = `
    <a href="../index.html">← Ana sayfaya dön</a>
    <p class="eyebrow">${car.brand}</p>
    <h1>${car.name}</h1>
    <p class="intro">${car.description}</p>

    <section>
      <h2>Fotoğraf galerisi</h2>
      <p>Fotoğraflar yüklenirken birkaç saniye bekle.</p>
      <div id="gallery" class="gallery">Fotoğraflar yükleniyor...</div>
    </section>

    <section>
      <h2>Teknik özellikler</h2>
      <div class="specs">
        ${rows.map(([label, value]) => `
          <div class="spec">
            <span>${label}</span><strong>${value}</strong>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="fact">
      <h2>Bu arabayı özel yapan ne?</h2>
      <p>${car.fact}</p>
    </section>

    <p class="disclaimer">
      Teknik değerler versiyona, model yılına ve ölçüm yöntemine göre değişebilir.
      Bu sayfadaki bilgiler genel tanıtım amaçlıdır.
    </p>
  `;

  loadGallery(car);
}

async function loadGallery(car) {
  const gallery = document.getElementById("gallery");
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `${car.brand} ${car.name}`,
    gsrnamespace: "6",
    gsrlimit: "8",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "1000",
    format: "json",
    origin: "*"
  });

  try {
    const response = await fetch(
      `https://commons.wikimedia.org/w/api.php?${params}`
    );
    if (!response.ok) throw new Error("Görseller yüklenemedi");

    const data = await response.json();
    const images = Object.values(data.query?.pages || {})
      .map(page => ({
        title: page.title,
        url: page.imageinfo?.[0]?.thumburl,
        source: page.imageinfo?.[0]?.descriptionurl
      }))
      .filter(item => item.url && item.source);

    if (!images.length) throw new Error("Görsel bulunamadı");

    gallery.innerHTML = images.map(item => `
      <a class="gallery-item"
         href="${item.source}"
         target="_blank" rel="noopener noreferrer">
        <img src="${item.url}" alt="${item.title}" loading="lazy">
        <span>${item.title.replace("File:", "")}</span>
      </a>
    `).join("");
  } catch {
    const search = new URL(
      "https://commons.wikimedia.org/wiki/Special:MediaSearch"
    );
    search.searchParams.set("type", "image");
    search.searchParams.set("search", `${car.brand} ${car.name}`);

    gallery.innerHTML = `
      <p>Galeri şu anda yüklenemedi.</p>
      <a href="${search.href}" target="_blank" rel="noopener noreferrer">
        ${car.brand} ${car.name} fotoğraflarını aç
      </a>
    `;
  }
}
