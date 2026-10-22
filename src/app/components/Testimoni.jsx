import { testimoni } from "@/data/konten";
import "./Testimoni.css";

const inisial = (n) =>
  n
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("");

export default function Testimoni() {
  return (
    <section className="seksi testi">
      <div className="wrap">
        <div className="kepala tengah">
          <span className="label">Cerita pengguna</span>
          <h2>Kata tim pengajar yang jadwalnya selalu berubah.</h2>
        </div>
        <div className="testi-grid">
          {testimoni.map((t) => (
            <figure key={t.nama} className="testi-kartu">
              <blockquote>“{t.teks}”</blockquote>
              <figcaption>
                <span className="avatar">{inisial(t.nama)}</span>
                <div>
                  <b>{t.nama}</b>
                  <small>{t.jabatan}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="testi-catatan">
          Nama dan persona di atas bersifat ilustratif untuk kebutuhan peragaan.
        </p>
      </div>
    </section>
  );
}
