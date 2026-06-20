// src/data/mapData.ts

export const MAP_DATA: Record<string, {title:string;hint:string;pins:{id:string;x:number;y:number;lat:number;lng:number;emoji:string;name:string;desc:string}[]}> = {
  haram: {
    title:"🕋 Masjidil Haram", hint:"Ketuk penanda untuk detail lokasi.",
    pins:[
      {id:"kaabah",  x:152,y:208,lat:21.42251,lng:39.82616,emoji:"🕋",name:"Ka'bah",          desc:"Kiblat seluruh umat Islam. Titik pusat tawaf — mengelilingi Ka'bah 7× berlawanan jarum jam."},
      {id:"hajar",   x:173,y:227,lat:21.42253,lng:39.82637,emoji:"⚫",name:"Hajar Aswad",      desc:"Batu hitam dari surga di sudut tenggara Ka'bah. Istilam setiap awal putaran tawaf."},
      {id:"hijr",    x:131,y:186,lat:21.42328,lng:39.82569,emoji:"🌙",name:"Hijr Ismail",      desc:"Bagian Ka'bah yang tidak terdinding. Shalat 2 rakaat di sini = shalat di dalam Ka'bah."},
      {id:"multazam",x:174,y:210,lat:21.42241,lng:39.82637,emoji:"🤲",name:"Multazam",         desc:"Dinding antara Hajar Aswad & pintu Ka'bah. Tempelkan dada & tangan, berdoa — sangat mustajab."},
      {id:"maqam",   x:172,y:182,lat:21.42286,lng:39.82641,emoji:"🪨",name:"Maqam Ibrahim",    desc:"Bekas pijakan Nabi Ibrahim AS. Shalat 2 rakaat di belakangnya setelah selesai tawaf."},
      {id:"zamzam",  x:188,y:206,lat:21.42294,lng:39.82665,emoji:"💧",name:"Sumur Zamzam",     desc:"Air suci yang terus mengalir. Minum berdiri menghadap kiblat dengan doa niat yang baik."},
      {id:"shafa",   x:275,y:315,lat:21.42193,lng:39.82785,emoji:"🏁",name:"Bukit Shafa",      desc:"Titik awal sa'i. Naiki bukit, hadap Ka'bah, baca doa pembuka, lalu berjalan ke Marwah."},
      {id:"marwah",  x:275,y:110,lat:21.42396,lng:39.82787,emoji:"🏁",name:"Bukit Marwah",     desc:"Titik akhir sa'i. Perjalanan ke-7 berakhir di sini, lalu lanjut ke tahallul."},
      {id:"bab",     x:30, y:212,lat:21.42319,lng:39.82491,emoji:"🚪",name:"Bab As-Salam",     desc:"Pintu masuk utama. Masuk kaki kanan, baca: Allāhummaftaḥ lī abwāba raḥmatik."},
    ]
  },
  nabawi: {
    title:"🕌 Masjid Nabawi", hint:"Ketuk penanda untuk detail lokasi.",
    pins:[
      {id:"makam",  x:260,y:100,lat:24.46731,lng:39.61110,emoji:"🌿",name:"Makam Rasulullah ﷺ",desc:"Makam Nabi ﷺ, Abu Bakar RA & Umar RA di bawah kubah hijau. Ucapkan salam dengan adab."},
      {id:"raudhah",x:215,y:128,lat:24.46721,lng:39.61082,emoji:"⭐",name:"Raudhah",            desc:"Taman surga (karpet hijau). Sangat mustajab berdoa. Booking slot via aplikasi Nusuk."},
      {id:"mimbar", x:173,y:128,lat:24.46710,lng:39.61068,emoji:"📖",name:"Mimbar Nabawi",      desc:"Mimbar asli Rasulullah ﷺ. Perbanyak shalawat saat berada di dekat sini."},
      {id:"bab2",   x:162,y:350,lat:24.46651,lng:39.61083,emoji:"🚪",name:"Bab As-Salam",       desc:"Pintu masuk utama dari selatan. Masuk kaki kanan, salam kepada Nabi ﷺ saat mendekati makam."},
      {id:"baqi",   x:330,y:195,lat:24.46613,lng:39.61219,emoji:"🪦",name:"Makam Baqi'",        desc:"Di luar masjid (timur). Pemakaman sahabat, istri & keluarga Nabi. Buka pagi & sore."},
      {id:"dome",   x:258,y:72, lat:24.46738,lng:39.61113,emoji:"🟢",name:"Kubah Hijau",        desc:"Kubah ikonik di atas makam Rasulullah ﷺ. Landmark utama Masjid Nabawi."},
    ]
  },
  makkah: {
    title:"🗺️ Kota Makkah", hint:"Peta radial — angka menunjukkan jarak dari Haram.",
    pins:[
      {id:"haram",  x:152,y:220,lat:21.42251,lng:39.82616,emoji:"🕋",name:"Masjidil Haram",     desc:"Pusat ibadah umroh. 100.000× pahala shalat. Terdapat Ka'bah, Zamzam, Shafa-Marwah."},
      {id:"mualla", x:163,y:196,lat:21.42534,lng:39.82832,emoji:"🪦",name:"Janatul Mu'alla",    desc:"Makam Siti Khadijah RA & leluhur Nabi. ±500m utara Haram. Buka pagi & sore."},
      {id:"jabnur", x:210,y:148,lat:21.45841,lng:39.86363,emoji:"⛰️",name:"Jabal Nur (Gua Hira)",desc:"Wahyu pertama Al-Qur'an turun di sini. ±4.5km NNE. Pendakian 45 menit, ±1.700 anak tangga."},
      {id:"jabtsur",x:172,y:295,lat:21.37564,lng:39.83582,emoji:"⛰️",name:"Jabal Tsur",         desc:"Nabi bersembunyi saat hijrah. ±4km selatan. Pendakian lebih terjal dari Jabal Nur."},
      {id:"jiranah",x:283,y:150,lat:21.51012,lng:39.92814,emoji:"🕌",name:"Masjid Ji'ranah",    desc:"Titik miqat umroh sunnah. ±24km NE. Rasulullah ﷺ berihram dari sini setelah Perang Hunain."},
      {id:"mina",   x:255,y:220,lat:21.41330,lng:39.89334,emoji:"🏕️",name:"Mina",               desc:"Area lempar jumrah saat haji. ±7km timur Haram."},
      {id:"muzdal", x:295,y:245,lat:21.39193,lng:39.93674,emoji:"🌙",name:"Muzdalifah",         desc:"Mabit & kumpul batu jumrah saat haji. ±12km timur Haram."},
      {id:"arafah", x:325,y:285,lat:21.35492,lng:39.98422,emoji:"🌅",name:"Padang Arafah",      desc:"Puncak ibadah haji — wukuf 9 Dzulhijjah. ±22km dari Haram."},
      {id:"hhr-makkah", x:310,y:318,lat:21.38131,lng:39.88357,emoji:"🚄",name:"Stasiun HHR Makkah", desc:"Haramain High Speed Railway — stasiun Makkah. ±4km tenggara Haram via taksi/Uber ±10 menit. Tiket kereta cepat ke Madinah (±2 jam, SAR 65–150) beli via aplikasi Haramain Train atau loket."},
    ]
  },
  madinah: {
    title:"🗺️ Kota Madinah", hint:"Peta radial — angka menunjukkan jarak dari Nabawi.",
    pins:[
      {id:"nabawi",   x:152,y:212,lat:24.46728,lng:39.61109,emoji:"🕌",name:"Masjid Nabawi",   desc:"Pusat ziarah. 1.000× pahala shalat. Terdapat Raudhah & makam Rasulullah ﷺ."},
      {id:"baqimd",   x:202,y:207,lat:24.46613,lng:39.61219,emoji:"🪦",name:"Makam Baqi'",     desc:"Tepat di timur Nabawi. Makam sahabat & keluarga Nabi. ±200m. Pria boleh masuk."},
      {id:"quba",     x:100,y:298,lat:24.44028,lng:39.61720,emoji:"🕌",name:"Masjid Quba",     desc:"Masjid pertama Islam. 2 rakaat = 1 umroh (HR. Tirmidzi). ±3.5km barat daya."},
      {id:"qiblatayn",x:62, y:197,lat:24.47440,lng:39.59510,emoji:"🕌",name:"Masjid Qiblatayn",desc:"Tempat kiblat berpindah saat Shalat Dzuhur. ±5km barat."},
      {id:"uhud",     x:168,y:95, lat:24.50682,lng:39.61942,emoji:"⛰️",name:"Jabal Uhud",      desc:"Perang Uhud & makam 70 syuhada termasuk Hamzah RA. ±5km utara."},
      {id:"ghamamah", x:147,y:232,lat:24.46551,lng:39.60978,emoji:"🕌",name:"Masjid Ghamamah", desc:"Tempat Rasulullah ﷺ shalat Ied. ±300m selatan Nabawi."},
      {id:"hhr-madinah", x:32,y:312,lat:24.46165,lng:39.49568,emoji:"🚄",name:"Stasiun HHR Madinah", desc:"Haramain High Speed Railway — stasiun Madinah. ±14km barat daya Masjid Nabawi. Gunakan taksi/Uber ±20 menit dari pusat kota. Kereta ke Makkah ±2 jam (SAR 65–150). Booking tiket via aplikasi Haramain Train atau di loket stasiun."},
    ]
  },
};