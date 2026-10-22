import { Check } from "lucide-react";
import { harga } from "@/data/konten";
import "./Harga.css";

export default function Harga({ wa }) {
  return (
    <section id="harga" className="seksi">
      <div className="wrap">
        <div className="kepala tengah">
          <span className="label">Paket dan biaya</span>
          <h2>Bayar hanya untuk guru yang aktif.</h2>
          <p>Tanpa biaya pemasangan awal dan tanpa biaya server tersembunyi.</p>
        </div>
        <div className="harga-grid">
          {harga.map((p) => (
            <div
              key={p.nama}
              className={p.populer ? "harga-kartu populer" : "harga-kartu"}
            >
              {p.populer && (
                <span className="harga-lencana">Paling dipilih</span>
              )}
              <h3>{p.nama}</h3>
              <small>{p.batas}</small>
              <p className="harga-angka">
                {p.harga}
                <span>{p.satuan}</span>
              </p>
              <p className="harga-teks">{p.teks}</p>
              <ul>
                {p.fitur.map((f) => (
                  <li key={f}>
                    <Check size={18} strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
              <a
                className={p.populer ? "btn kuning" : "btn"}
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Minta Demo {p.nama}
              </a>
            </div>
          ))}
        </div>
        <p className="harga-catatan">
          Harga bersifat simulasi ilustratif. Hubungi kami untuk penawaran
          sesuai jumlah guru.
        </p>
      </div>
    </section>
  );
}
