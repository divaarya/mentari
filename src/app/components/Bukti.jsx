import { bukti, logo } from "@/data/konten";
import "./Bukti.css";

export default function Bukti() {
  return (
    <section className="bukti">
      <div className="wrap">
        <div className="bukti-angka">
          {bukti.map(([a, b]) => (
            <div key={b}>
              <b>{a}</b>
              <span>{b}</span>
            </div>
          ))}
        </div>
        <p className="bukti-judul">Dipercaya tim pengajar di berbagai kota:</p>
        <div className="bukti-logo">
          {logo.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <p className="bukti-catatan">
          Nama lembaga di atas bersifat ilustratif untuk kebutuhan peragaan.
        </p>
      </div>
    </section>
  );
}
