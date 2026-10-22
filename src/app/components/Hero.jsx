import { DemoHero } from "./Demo";
import "./Hero.css";

export default function Hero({ site, wa }) {
  // Kalimat pertama biasa, kalimat berikutnya diberi sorotan stabilo.
  const [awal, ...sisa] = site.heroJudul.split(/(?<=\.)\s+/);
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="label">
            HRIS untuk sekolah dan lembaga pendidikan
          </span>
          <h1>
            {awal}
            {sisa.length > 0 && (
              <>
                {" "}
                <span className="sorot">{sisa.join(" ")}</span>
              </>
            )}
          </h1>
          <p className="hero-desk">{site.heroDeskripsi}</p>
          <div className="hero-aksi">
            <a className="btn" href={wa} target="_blank" rel="noreferrer">
              {site.ctaTeks}
            </a>
            <a className="btn putih" href="#modul">
              Lihat 5 Modul
            </a>
          </div>
          <ul className="hero-poin">
            <li>Selfie dan GPS gerbang mencegah titip absen</li>
            <li>Jam mengajar langsung masuk ke honor</li>
            <li>Ujian dan perangkat ajar dalam satu aplikasi</li>
          </ul>
        </div>
        <div className="hero-ponsel" id="simulasi">
          <div className="hero-blob" aria-hidden="true" />
          <span className="stiker s1">Wajah cocok ✓</span>
          <span className="stiker s2">Lokasi asli ✓</span>
          <DemoHero />
        </div>
      </div>
    </section>
  );
}
