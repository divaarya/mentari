import "./Kontak.css";

export default function Kontak({ site, wa }) {
  return (
    <section id="kontak" className="kontak-seksi">
      <div className="wrap">
        <div className="kontak">
          <span className="label">Mulai uji coba</span>
          <h2>Coba lihat jadwal guru sekolahmu di ponsel.</h2>
          <p>
            Minta demo sekarang. Tim kami menyiapkan satu sekolah contoh yang
            disesuaikan dengan jam pelajaran dan pola piketmu.
          </p>
          <div className="kontak-aksi">
            <a className="btn" href={wa} target="_blank" rel="noreferrer">
              {site.ctaTeks} {site.nama}
            </a>
            <a className="btn putih" href="#harga">
              Lihat Pilihan Harga
            </a>
          </div>
          <small>
            Tanpa komitmen jangka panjang. Cukup pilot satu sekolah selama 14
            hari.
          </small>
        </div>
      </div>
    </section>
  );
}
