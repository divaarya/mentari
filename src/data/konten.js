export const bukti = [
  ["120+", "sekolah dan lembaga"],
  ["9.500+", "guru dan staf"],
  ["0", "buku absen tersisa"],
  ["1 hari", "pasang untuk satu sekolah"],
];

export const logo = [
  "SMP Cahaya Bangsa",
  "SMK Nusa Teknik",
  "Ponpes Al-Hikmah",
  "Bimbel Pelita",
  "SMA Harapan Kita",
];

export const sektor = [
  {
    nama: "SD, SMP, dan SMA",
    teks: "Guru mapel dan wali kelas absen per jam pelajaran. Honor guru tidak tetap dihitung dari jam mengajar nyata.",
    chip: "Per jam pelajaran",
    warna: "w1",
  },
  {
    nama: "SMK",
    teks: "Guru produktif, praktik bengkel, dan izin dinas ke industri tercatat rapi tanpa surat tugas tercecer.",
    chip: "Dinas industri",
    warna: "w2",
  },
  {
    nama: "Pesantren dan madrasah",
    teks: "Jadwal piket ustaz, kegiatan mengaji, dan honor per kegiatan terekap otomatis.",
    chip: "Honor per kegiatan",
    warna: "w3",
  },
  {
    nama: "Bimbel dan kursus",
    teks: "Tutor lepas dengan jadwal berubah tiap minggu dibayar per sesi, bukan per bulan.",
    chip: "Honor per sesi",
    warna: "w4",
  },
];

export const modul = [
  {
    id: "absensi",
    no: "01",
    nama: "Absensi",
    warna: "w1",
    judul: "Absen guru yang tidak bisa dititipkan.",
    desk: "Selfie mencocokkan wajah, GPS memeriksa gerbang sekolah, dan jam mengajar tercatat otomatis.",
    fitur: [
      [
        "Selfie biometrik",
        "Wajah dicocokkan dengan foto referensi guru dan staf.",
      ],
      ["Geofence sekolah", "Absen hanya sah di dalam radius gedung sekolah."],
      [
        "Deteksi lokasi palsu",
        "Aplikasi lokasi palsu dan lompatan posisi ditandai.",
      ],
      [
        "Jadwal mengajar",
        "Jam pelajaran per kelas tercatat sebagai jam hadir.",
      ],
      [
        "Rekap real-time",
        "Kepala sekolah melihat siapa hadir, terlambat, atau di luar radius.",
      ],
      [
        "Piket dan ekstrakurikuler",
        "Jadwal piket dan pembina ekskul ikut terekap.",
      ],
    ],
  },
  {
    id: "perizinan",
    no: "02",
    nama: "Perizinan",
    warna: "w2",
    judul: "Izin guru dan jam pengganti, selesai dari ponsel.",
    desk: "Ajukan izin, pantau persetujuan, dan kelas yang kosong langsung dapat guru pengganti.",
    fitur: [
      [
        "Izin sakit + surat dokter",
        "Foto surat dari ponsel, langsung tercatat sebagai izin sakit.",
      ],
      [
        "Dinas luar dan pelatihan",
        "Surat tugas dan pelatihan tercatat tanpa kertas.",
      ],
      [
        "Guru pengganti otomatis",
        "Jam kosong ditawarkan ke guru piket yang tersedia.",
      ],
      [
        "Persetujuan berjenjang",
        "Dari wakil kepala sekolah sampai kepala sekolah.",
      ],
      [
        "Saldo cuti jelas",
        "Sisa kuota cuti terlihat tanpa bertanya ke tata usaha.",
      ],
      [
        "Izin siswa lewat wali",
        "Wali murid mengajukan izin anak dari ponselnya.",
      ],
    ],
  },
  {
    id: "gaji",
    no: "03",
    nama: "Gaji",
    warna: "w3",
    judul: "Honor guru dihitung per jam mengajar.",
    desk: "Jam mengajar, tunjangan, dan potongan masuk ke slip tanpa input ulang di Excel.",
    fitur: [
      [
        "Honor per jam pelajaran",
        "Dihitung dari jam hadir nyata, bukan perkiraan.",
      ],
      [
        "Tunjangan jabatan",
        "Wali kelas, kepala lab, dan pembina ekskul terhitung otomatis.",
      ],
      ["Tunjangan sertifikasi", "Tercatat terpisah dan jelas di slip."],
      ["BPJS dan PPh 21", "Iuran dan pajak dihitung otomatis tiap periode."],
      ["Honor kegiatan", "Pengawas ujian dan lembur kegiatan ikut masuk slip."],
      ["Slip gaji digital", "Guru melihat rincian honor langsung dari ponsel."],
    ],
  },
  {
    id: "exam",
    no: "04",
    nama: "Exam",
    warna: "w4",
    judul: "Ujian siswa dan uji kompetensi guru, satu sistem.",
    desk: "Soal acak, timer, dan nilai otomatis. Pindah tab saat ujian langsung tercatat.",
    fitur: [
      [
        "Ujian online siswa",
        "Soal pilihan ganda dengan urutan acak tiap siswa.",
      ],
      ["Penilaian otomatis", "Nilai muncul begitu ujian selesai."],
      ["Anti-kecurangan", "Pindah aplikasi atau tab dicatat untuk pengawas."],
      ["Uji kompetensi guru", "Evaluasi berkala untuk guru dan staf."],
      ["Tes rekrutmen", "Calon guru mengerjakan tes situasional dari ponsel."],
      ["Rekap nilai", "Nilai per kelas dan per mapel terkumpul rapi."],
    ],
  },
  {
    id: "library",
    no: "05",
    nama: "Library",
    warna: "w5",
    judul: "Perangkat ajar dan perpustakaan, tetap terbuka tanpa sinyal.",
    desk: "Modul ajar, arsip, dan e-learning tersimpan di ponsel dan bisa dibuka offline.",
    fitur: [
      [
        "Modul ajar offline",
        "Perangkat ajar tetap terbaca saat sinyal hilang.",
      ],
      ["Arsip peraturan", "Surat edaran dan kebijakan sekolah tersimpan aman."],
      ["E-learning guru", "Pelatihan dan progres belajar guru terpantau."],
      ["Katalog perpustakaan", "Koleksi buku sekolah bisa dicari dari ponsel."],
      ["Peminjaman buku", "Pinjam dan kembali tercatat dengan tenggat jelas."],
      ["Pencarian cepat", "Temukan dokumen dalam hitungan detik."],
    ],
  },
];

export const chatLama = [
  [
    "Pak Dimas (Matematika)",
    "Bu, kelas 8B jam ke-3 kosong, ada yang bisa gantikan?",
    "07:10",
  ],
  [
    "Bu Sari (Bahasa)",
    "Saya izin sakit besok ya, surat dokter menyusul.",
    "19:42",
  ],
  [
    "Tata Usaha",
    "Mohon rekap jam mengajar bulan ini dikirim hari ini.",
    "20:05",
  ],
  ["Wakasek", "Honor belum bisa dicairkan, rekap belum lengkap.", "20:31"],
];

export const bandingan = [
  [
    "Absen tanda tangan di buku, bisa dititipkan",
    "Selfie dan GPS gerbang, tidak bisa dititipkan",
  ],
  [
    "Kelas kosong baru ketahuan saat siswa ramai",
    "Izin disetujui, guru pengganti langsung ditunjuk",
  ],
  [
    "Rekap honor dihitung manual tiap akhir bulan",
    "Jam mengajar langsung masuk ke slip gaji",
  ],
];

export const langkah = [
  {
    judul: "Impor guru dan kelas",
    teks: "Unggah daftar guru dan staf dari Excel, lalu tandai titik GPS dan radius sekolah.",
    chip: ["Excel", "CSV", "Titik GPS"],
    warna: "w1",
  },
  {
    judul: "Susun jadwal dan tarif",
    teks: "Atur jam pelajaran, jadwal piket, tarif honor per jam, dan alur persetujuan izin.",
    chip: ["Jam pelajaran", "Honor", "Piket"],
    warna: "w2",
  },
  {
    judul: "Guru absen dari ponsel",
    teks: "Guru merekam foto referensi sekali, lalu langsung absen dengan selfie dan GPS di sekolah.",
    chip: ["Selfie", "GPS", "Siap pakai"],
    warna: "w3",
  },
];

export const testimoni = [
  {
    nama: "Intan Permata",
    jabatan: "Kepala Sekolah, SMP Cahaya Bangsa",
    teks: "Buku absen sudah kami tinggalkan. Rekap kehadiran guru selesai tanpa saya mengejar laporan tata usaha.",
  },
  {
    nama: "Hendra Wijaya",
    jabatan: "Wakasek Kurikulum, SMK Nusa Teknik",
    teks: "Kelas kosong dulu baru ketahuan saat siswa ramai. Sekarang guru pengganti ditunjuk begitu izin disetujui.",
  },
  {
    nama: "Made Arta",
    jabatan: "Bendahara Yayasan, Bimbel Pelita",
    teks: "Honor tutor per sesi sudah ada di slip. Tutor berhenti bertanya hitungan di akhir bulan.",
  },
];

export const harga = [
  {
    nama: "Sekolah Kecil",
    batas: "Hingga 40 guru dan staf",
    harga: "Rp 10.000",
    satuan: "/ guru / bulan",
    teks: "Untuk satu sekolah atau lembaga kursus.",
    fitur: [
      "Modul Absensi (selfie dan geofence)",
      "Modul Perizinan dan guru pengganti",
      "Modul Library offline",
      "Dukungan WhatsApp",
    ],
  },
  {
    nama: "Sekolah",
    batas: "40 sampai 200 guru dan staf",
    harga: "Rp 8.000",
    satuan: "/ guru / bulan",
    teks: "Untuk sekolah negeri dan swasta dengan jadwal padat.",
    populer: true,
    fitur: [
      "Semua fitur Sekolah Kecil",
      "Modul Gaji dan slip digital",
      "Modul Exam dan ujian online",
      "Persetujuan berjenjang",
    ],
  },
  {
    nama: "Yayasan",
    batas: "200+ guru dan staf",
    harga: "Hubungi kami",
    satuan: "",
    teks: "Untuk yayasan dengan banyak sekolah.",
    fitur: [
      "Semua fitur Sekolah",
      "Banyak sekolah dalam satu akun",
      "Ekspor laporan bank dan payroll",
      "Pendamping khusus",
    ],
  },
];

export const faq = [
  {
    t: "Apakah guru harus memasang aplikasi?",
    j: "Guru membuka Mentari dari ponselnya. Akun dibuat dari daftar guru yang kamu impor, jadi tidak perlu mendaftar satu per satu.",
  },
  {
    t: "Bagaimana honor per jam mengajar dihitung?",
    j: "Honor dihitung dari jam pelajaran yang benar-benar dihadiri, ditambah tunjangan dan dikurangi potongan sesuai tarif yang kamu atur.",
  },
  {
    t: "Apakah selfie dan GPS aman untuk data pribadi?",
    j: "Lokasi hanya diambil saat guru menekan tombol absen, tidak ada pelacakan di luar itu. Akses data dibatasi per peran.",
  },
  {
    t: "Bagaimana kalau sinyal di sekolah lemah?",
    j: "Modul ajar dan arsip yang sudah diunduh tetap bisa dibuka offline. Absensi memerlukan koneksi saat tombol ditekan.",
  },
  {
    t: "Bisa dipakai untuk beberapa sekolah dalam satu yayasan?",
    j: "Bisa. Paket Yayasan menggabungkan banyak sekolah dalam satu akun dengan laporan per sekolah.",
  },
  {
    t: "Berapa lama pemasangan untuk satu sekolah?",
    j: "Biasanya satu sampai dua hari, termasuk impor guru, penentuan radius, dan pengaturan jadwal.",
  },
];

export const privasi = [
  "Lokasi hanya diambil saat tombol absen ditekan",
  "Foto referensi dipakai khusus untuk mencocokkan wajah",
  "Akses data dibatasi per peran dan tercatat",
];
