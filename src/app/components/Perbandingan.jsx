import { Check, X } from "lucide-react";
import { chatLama, bandingan } from "@/data/konten";
import "./Perbandingan.css";

export default function Perbandingan() {
  return (
    <section className="seksi banding">
      <div className="wrap">
        <div className="kepala tengah">
          <span className="label">Sebelum dan sesudah</span>
          <h2>Jadwal dan izin guru tidak seharusnya hidup di grup chat.</h2>
          <p>
            Menghilangkan kelas kosong tanpa kabar, surat dokter tercecer, dan
            rekap honor yang menumpuk di akhir bulan.
          </p>
        </div>
        <div className="banding-grid">
          <div className="banding-kartu lama">
            <h3>Cara lama: grup WhatsApp guru</h3>
            <div className="chat">
              {chatLama.map(([n, t, j]) => (
                <div key={t} className="gelembung">
                  <b>{n}</b>
                  {t}
                  <small>{j}</small>
                </div>
              ))}
            </div>
            <p className="banding-akhir">
              Pesan tenggelam, perubahan jadwal tidak tercatat, kelas kosong
              tanpa guru.
            </p>
          </div>
          <div className="banding-kartu baru">
            <h3>Dengan Mentari: tercatat dan terverifikasi</h3>
            <div className="jadwal">
              <div>
                <span>Rabu, 14 Okt · Jam 1 sampai 2</span>
                <b>Kelas 7A · Bu Sari</b>
              </div>
              <div>
                <span>Rabu, 14 Okt · Jam 3 sampai 4</span>
                <b>Kelas 8B · Pak Dimas menggantikan</b>
              </div>
              <div>
                <span>Kamis, 15 Okt · Jam 1 sampai 3</span>
                <b>Kelas 9C · Pak Rudi</b>
              </div>
            </div>
            <p className="banding-akhir ok">
              Izin disetujui, guru pengganti ditunjuk, jam tercatat ✓
            </p>
          </div>
        </div>
        <ul className="banding-daftar">
          {bandingan.map(([a, b]) => (
            <li key={a}>
              <span className="lama">
                <X size={18} /> {a}
              </span>
              <span className="baru">
                <Check size={18} /> {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
