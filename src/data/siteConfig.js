// Data bawaan. Nanti diganti oleh data dari API admin panel (lewat lib/getSite.js).
export const siteConfig = {
  nama: "Mentari",
  warnaUtama: "#ffc81e",
  warnaAksen: "#1b1740",
  heroJudul: "Guru absen dari ponsel. Honor terhitung sendiri.",
  heroDeskripsi:
    "Mentari menyatukan absensi guru, honor, ujian, perpustakaan, dan perizinan dalam satu aplikasi sekolah yang rapi dan mudah dipakai.",
  ctaTeks: "Minta Demo",
  // Nomor asli cukup ditulis di .env.local, bukan di file ini.
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan:
    "Halo Mentari, saya ingin meminta demo sistem HRIS untuk sekolah kami.",
  email: "halo@mentari.gmail",
  kota: "Bandung, Jawa Barat",
  seo: {
    metaTitle:
      "Mentari - HRIS untuk Sekolah: Absensi Guru, Honor, Ujian, Library, Perizinan",
    metaDescription:
      "Absensi guru dengan selfie dan GPS, honor per jam mengajar, ujian online, perpustakaan, dan perizinan dalam satu aplikasi sekolah.",
    ogImage: "",
  },
};
