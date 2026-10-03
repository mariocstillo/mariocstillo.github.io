/*

  PANDUAN SINGKAT UNTUK MENAMBAH DATA (CARI DATA SETELAH TANDA "START")
  -----------------------------------
  1. File ini adalah satu-satunya tempat untuk menambah data website.
  2. Ganti isi teks di dalam tanda kutip, lalu simpan file ini.
  3. upload gambar anda di folder  "upload".
     Contoh path gambar: 'upload/nama-file.jpg'
  4. nama file tersebut dapat dipakai atau dipanggil di berbagai halaman, jika link vidio anda cukup menempelkan saja.

  PENANDA =
                 "TAMBAH DATA DI ATAS SINI".

   #anda dapat mememanfaatkan fitur cari dengan keyword "tambah data" untuk menemukan bagian yang ingin diubah.
   */


const testimonialData = [];
const behindLensImages = [];
const creativeImages = [];
const serviceData = [
  {
    title: 'Editing',
    description: 'Motion Graphics, VFX, Speedramp, Dokumenter, Style, Reels Content Instagram, Real Estate promotion.',
    imageUrl: 'upload/editing.png',
    slug: 'video-editing'
  },
  {
    title: 'Videography Projects',
    description: 'Dari konsep hingga eksekusi visual, kami siap mewujudkan visi kreatifmu.',
    imageUrl: 'upload/jumbotron2.jpg',
    slug: 'videography-projects'
  },
  {
    title: 'Photography Sessions',
    description: 'Wisuda, Wedding, Event, Family Gathering, Real estate.',
    imageUrl: 'upload/fotography.jpg',
    slug: 'photography-sessions'
  }
];

const videoEditingData = [];
const videographyData = [];
const photoData = [];

function addTestimonial(initials, name, role, quote) {
  testimonialData.push({ initials, name, role, quote });
}

function addBehindLensImage(source, alt) {
  behindLensImages.push({ source, alt });
}

function addCreativeImage(source, alt) {
  creativeImages.push({ source, alt });
}

function addVideo(target, title, link, description = '') {
  target.push({ title, link, description });
}

function addPhoto(title, source, alt, description = '') {
  photoData.push({ title, source, alt, description });
}


// START
// UNTUK MEMOFIDIFIKASI HALAMAN, SILAHKAN TAMBAH DATA DI BAGIAN DIBAWAH SESUAI DENGAN PETUNJUK DI ATAS. JANGAN MENGUBAH BAGIAN LAINNYA.



// ====================================================DIBAWAH INI ADALAH BEHIND THE LENS===================================================================

/* A. GAMBAR CAROUSEL BEHIND THE LENS DI HALAMAN UTAMA*/

addBehindLensImage('upload/masasih.jpg', 'Pengalaman proyek visual Mario');
addBehindLensImage('upload/iyakah.jpg', 'Dokumentasi proyek fotografi Mario');


// TAMBAH DATA DI ATAS SINI - BEHIND THE LENS




// ====================================================DIBAWAH INI ADALAH TESTIMONIAL===================================================================

/* B. TESTIMONIAL / KOMENTAR KLIEN*/

addTestimonial('AR', 'Andi Ramadhan', 'Koordinator Event Kampus',
  'Dokumentasi acara dies natalis kami terasa hidup. Momen penting dan suasana acaranya berhasil ditangkap dengan baik.');
addTestimonial('NS', 'Nisa Safitri', 'Pemilik Brand Kuliner',
  'Foto produk yang dibuat terlihat lebih menggugah dan membantu kami menyiapkan konten promosi untuk media sosial.');
addTestimonial('FA', 'Fajar Akbar', 'Ketua Panitia Seminar',
  'Proses koordinasinya mudah dan hasil video after movie kami selesai sesuai jadwal dengan alur cerita yang jelas.');
addTestimonial('RM', 'Rina Maharani', 'Marketing UMKM',
  'Mario memahami kebutuhan brand kami dan memberikan arahan saat proses pengambilan gambar sehingga hasilnya lebih terarah.');

addTestimonial('JL', 'ZULHAM ABIDIN', 'Anggota Komunitas Fotografi',
  'Proses koordinasinya mudah dan hasil video after movie kami selesai sesuai jadwal');



// TAMBAH DATA DI ATAS SINI - TESTIMONIAL









// =========================================================DIBAWAH INI ADALAH Ready to bring your vision to life?==============================================================

/* C. GAMBAR CREATIVE STORIES DI HALAMAN UTAMA (Ready to bring your vision to life)*/

    addCreativeImage('upload/jumbotron3.jpg', 'Dokumentasi proyek videografi Mario');

    addCreativeImage('upload/jumbotron2.jpg', 'Dokumentasi proyek videografi Mario');


// TAMBAH DATA DI ATAS SINI - CREATIVE STORIES










// ===========================================================DIBAWAH INI ADALAH HALAMAN VIDEO EDITING============================================================

/* D. VIDEO PADA HALAMAN VIDEO EDITING*/

    addVideo(
      // keterangan nya tidak perlu diubah
      videoEditingData,
      "Profil S2 KPI UIN Alauddin Makassar",
      "https://youtu.be/GTCqeAZhLdU?si=wf3OK1quHORgM52A",
      "Program Magister Komunikasi dan Penyiaran Islam UIN Alauddin Makassar. Program ini dirancang untuk mencetak lulusan yang kritis, komunikatif, dan berintegritas dalam membangun peradaban Islam melalui media dan komunikasi. Saksikan profil lengkapnya di video ini!.",
    );

    addVideo(
      videoEditingData,
      "SPEEDRAMP",
      "https://youtube.com/shorts/BrOmyGBo4ug?si=xSuusLeKua6MMeoq",
      "Video pendek speed ramp yang menampilkan Porsche putih, dengan perubahan tempo untuk menonjolkan detail bodi dan velgnya.",
    );

    addVideo(
      videoEditingData,
      "SPEEDRAMP",
      "https://youtube.com/shorts/dZPZ1QJy93A?si=BRDDZQ4M4UbTszQ-",
      "Truk tambang berukuran besar menjadi fokus video speed ramp ini, dengan aksen efek visual pada bagian roda.",
    );

    addVideo(
      videoEditingData,
      "RING PORTAL",
      "https://youtu.be/q0vUPK2toT0?si=ML-pYhovb0pEDFr5",
      "Eksperimen efek visual ring portal bercahaya merah yang menjadi pusat perhatian dalam adegan.",
    );

    addVideo(
      videoEditingData,
      "Teleport VFX",
      "https://youtu.be/xCAEMtsF5LQ?si=iAgqGBmK1Eh-he-6",
      "Efek teleport diterapkan pada adegan di lingkungan sekolah untuk memberi kesan perpindahan secara instan.",
    );

// TAMBAH DATA DI ATAS SINI - VIDEO EDITING




// ========================================================DIBAWAH INI ADALAH HALAMAN VIDEOGRAPHY PROJECTS===============================================================

/* E. VIDEO PADA HALAMAN VIDEOGRAPHY PROJECTS*/

    addVideo(
      videographyData,
      "Pesanteren Darul Aman Gombara",
      "https://youtu.be/cM0ueRelGx0?si=XrpwuYeXV6AGdFJq",
      "Suasana kegiatan para santri Darul Aman Gombara dipadukan dengan efek crowd glitch sebagai aksen visual.",
    );
    

    addVideo(
      videographyData,
      "OPENING VISUAL",
      "https://youtu.be/3QjieHpYMsQ?si=qrna19s8nhCCfhsy",
      "Opening visual sekolah dengan tampilan udara area sekolah, identitas generasi, dan montase berbagai kegiatan.",
    );

    addVideo(
      videographyData,
      "CLEAN WALK EFFECT",
      "https://youtu.be/3QjieHpYMsQ?si=qrna19s8nhCCfhsy",
      "Tautan ini saat ini mengarah ke video OPENING VISUAL yang sama: montase udara sekolah dan kegiatan siswa.",
    );
  


// TAMBAH DATA DI ATAS SINI - VIDEOGRAPHY PROJECTS

// ===============================================DIBAWAH INI ADALAH HALAMAN PHOTOGRAPHY SESSIONS========================================================================

/* F. FOTO PADA HALAMAN PHOTOGRAPHY SESSIONS*/
addPhoto(
  "Photography Session Showcase",
  "upload/iyakah.jpg",
  "Contoh hasil photography session Mario",
  "Dokumentasi suasana acara outdoor dengan pengunjung dan fotografer di area kegiatan.",
);
    
    
    addPhoto(
    'Photography Session Showcase',
    'upload/fotography.jpg',
    'Contoh hasil photography session Mario',
    'Momen candid di tepi pantai, menangkap gerak dan suasana liburan yang santai.'
    );

    addPhoto(
      "Photography Session Showcase",
      "upload/asik.png",
      "Contoh hasil photography session Mario",
      "Portrait close-up dengan pencahayaan dramatis untuk menonjolkan ekspresi dan karakter.",
    );

    addPhoto(
      "Photography Session Showcase",
      "upload/jackie.jpg",
      "Contoh hasil photography session Mario",
      "Portrait full-body di tepi pantai dengan cahaya alami dan latar laut terbuka.",
    );


    addPhoto(
      "Photography Session Showcase",
      "upload/ramenih.jpg",
      "Contoh hasil photography session Mario",
      "Foto bersama selepas acara dengan pencahayaan panggung yang meriah.",
    );

    addPhoto(
      "Photography Session Showcase",
      "upload/yayaya.jpg",
      "Contoh hasil photography session Mario",
      "Potret dua orang di area perkotaan pada malam hari dengan suasana cahaya kota.",
    );


// TAMBAH DATA DI ATAS SINI - PHOTOGRAPHY SESSIONS
