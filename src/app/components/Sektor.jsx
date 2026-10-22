import { sektor } from "@/data/konten";
import "./Sektor.css";

export default function Sektor() {
  return (
    <section id="lembaga" className="seksi">
      <div className="wrap">
        <div className="kepala">
          <span className="label">Dipakai di lembaga pendidikan</span>
          <h2>Dibuat untuk jam mengajar yang tidak seragam.</h2>
          <p>
            Dari guru mapel SMP, praktik bengkel SMK, ustaz piket, sampai tutor
            bimbel yang jadwalnya berubah tiap minggu.
          </p>
        </div>
        <div className="sektor-grid">
          {sektor.map((s) => (
            <article key={s.nama} className={`sektor-kartu ${s.warna}`}>
              <span className="sektor-chip">{s.chip}</span>
              <h3>{s.nama}</h3>
              <p>{s.teks}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
