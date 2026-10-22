"use client";
import { useEffect, useState } from "react";
import Phone from "./Phone";
import "./Demo.css";

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

function Saklar({ aktif, onKlik, children }) {
  return (
    <button
      className="saklar"
      role="switch"
      aria-checked={aktif}
      onClick={onKlik}
    >
      {children}
      <i />
    </button>
  );
}

export function DemoHero() {
  const [sudah, setSudah] = useState(false);
  return (
    <Phone judul="Absen Guru" miring>
      <div className="d-sapa">
        <small>Selamat pagi</small>
        <b>Bu Sari Wulandari</b>
      </div>
      <div className="d-jam">
        07:02 <span>WIB</span>
      </div>
      <div className="d-kartu">
        <b>SMP Mentari Bandung</b>
        <small>Jam 1 · 07:00 WIB · radius gerbang 50 m</small>
        <span className="chip ok">12 m dari gerbang</span>
      </div>
      {sudah && (
        <div className="d-hasil ok">
          Absen masuk 07:02 WIB tercatat. Wajah cocok, lokasi asli.
        </div>
      )}
      <button className="d-tombol kuning" onClick={() => setSudah(!sudah)}>
        {sudah ? "Ulangi simulasi" : "Absen Masuk"}
      </button>
    </Phone>
  );
}

export function DemoAbsensi() {
  const [palsu, setPalsu] = useState(false);
  const [hasil, setHasil] = useState(null);
  const ulang = () => {
    setHasil(null);
    setPalsu(false);
  };
  return (
    <Phone judul="Absen Guru">
      <div className="d-sapa">
        <small>Guru aktif</small>
        <b>Pak Rudi Hartono</b>
      </div>
      <div className="radar" aria-hidden="true">
        <span className="sekolah">Sekolah</span>
        <i className={palsu ? "pin jauh" : "pin"} />
      </div>
      <span className={palsu ? "chip bad" : "chip ok"}>
        {palsu ? "41 km dari sekolah" : "12 m dari gerbang · radius 50 m"}
      </span>
      <Saklar
        aktif={palsu}
        onKlik={() => {
          setPalsu(!palsu);
          setHasil(null);
        }}
      >
        Simulasi lokasi palsu
      </Saklar>
      {hasil === "ok" && (
        <div className="d-hasil ok">
          Absen masuk 07:02 WIB tercatat. Wajah cocok, lokasi asli.
        </div>
      )}
      {hasil === "tolak" && (
        <div className="d-hasil bad">
          Ditolak: lokasi palsu terdeteksi. Dicatat untuk ditinjau kepala
          sekolah.
        </div>
      )}
      {hasil ? (
        <button className="d-tombol" onClick={ulang}>
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol kuning"
          onClick={() => setHasil(palsu ? "tolak" : "ok")}
        >
          Absen Masuk
        </button>
      )}
    </Phone>
  );
}

export function DemoPerizinan() {
  const jenis = ["Sakit", "Dinas luar", "Cuti"];
  const alur = ["Diajukan", "Wakasek menyetujui", "Kepala sekolah menyetujui"];
  const [j, setJ] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= 1 && step < 3) {
      const t = setTimeout(() => setStep((s) => s + 1), 900);
      return () => clearTimeout(t);
    }
  }, [step]);
  return (
    <Phone judul="Pusat Izin">
      <div className="d-sapa">
        <small>Pengajuan untuk</small>
        <b>Rabu, 14 Okt · Jam 1 sampai 4</b>
      </div>
      <div className="pilih">
        {jenis.map((x, i) => (
          <button
            key={x}
            aria-pressed={j === i}
            disabled={step > 0}
            onClick={() => setJ(i)}
          >
            {x}
          </button>
        ))}
      </div>
      <ul className="alur">
        {alur.map((x, i) => (
          <li key={x} className={step > i ? "on" : ""}>
            {x}
          </li>
        ))}
      </ul>
      {step === 3 && (
        <div className="d-hasil ok">
          Disetujui. Kelas 8B jam 3 sampai 4 digantikan Pak Dimas (guru piket).
          <br />
          Terkirim ke: Absensi · Gaji
        </div>
      )}
      {step === 0 && (
        <button className="d-tombol kuning" onClick={() => setStep(1)}>
          Ajukan izin {jenis[j].toLowerCase()}
        </button>
      )}
      {step > 0 && step < 3 && (
        <button className="d-tombol" disabled>
          Menunggu persetujuan...
        </button>
      )}
      {step === 3 && (
        <button className="d-tombol" onClick={() => setStep(0)}>
          Ulangi simulasi
        </button>
      )}
    </Phone>
  );
}

export function DemoGaji() {
  const [jam, setJam] = useState(24);
  const [wali, setWali] = useState(true);
  const honor = jam * 4 * 40000;
  const tunj = wali ? 350000 : 0;
  const bruto = honor + tunj;
  const bpjs = Math.round(bruto * 0.03);
  return (
    <Phone judul="Slip Gaji">
      <div className="d-sapa">
        <small>Periode Oktober 2026</small>
        <b>Bu Sari Wulandari</b>
      </div>
      <label className="geser-label">
        Jam mengajar per minggu: <b>{jam} jam</b>
        <input
          className="geser"
          type="range"
          min="12"
          max="40"
          value={jam}
          onChange={(e) => setJam(+e.target.value)}
        />
      </label>
      <Saklar aktif={wali} onKlik={() => setWali(!wali)}>
        Tunjangan wali kelas
      </Saklar>
      <div className="slip">
        <div>
          <span>Honor ({jam} jam × 4 minggu × Rp 40.000)</span>
          <b>{rp(honor)}</b>
        </div>
        <div>
          <span>Tunjangan wali kelas</span>
          <b>{rp(tunj)}</b>
        </div>
        <div>
          <span>Iuran BPJS (ilustrasi 3%)</span>
          <b>−{rp(bpjs)}</b>
        </div>
        <div className="total">
          <span>Dibawa pulang</span>
          <b>{rp(bruto - bpjs)}</b>
        </div>
      </div>
      <small className="catatan">
        Simulasi ilustratif, bukan nasihat pajak.
      </small>
    </Phone>
  );
}

const soal = [
  {
    t: "Ibu kota Provinsi Jawa Tengah adalah...",
    o: ["Semarang", "Surakarta", "Magelang"],
    b: 0,
  },
  { t: "Hasil dari 12 × 8 adalah...", o: ["86", "96", "108"], b: 1 },
  {
    t: "Planet terdekat dari Matahari adalah...",
    o: ["Venus", "Merkurius", "Mars"],
    b: 1,
  },
];

export function DemoExam() {
  const [i, setI] = useState(0);
  const [skor, setSkor] = useState(0);
  const [pilih, setPilih] = useState(null);
  const [tab, setTab] = useState(false);
  const selesai = i >= soal.length;
  const ulang = () => {
    setI(0);
    setSkor(0);
    setPilih(null);
    setTab(false);
  };
  const jawab = (k) => {
    if (pilih !== null) return;
    setPilih(k);
    if (k === soal[i].b) setSkor((s) => s + 1);
  };
  return (
    <Phone judul="Ujian Online">
      <div className="d-sapa">
        <small>Ulangan Harian · IPA dan Umum</small>
        <b>{selesai ? "Ujian selesai" : `Soal ${i + 1} dari ${soal.length}`}</b>
      </div>
      <div className="prog">
        <i
          style={{
            width: `${(Math.min(i + (pilih !== null ? 1 : 0), soal.length) / soal.length) * 100}%`,
          }}
        />
      </div>
      {selesai ? (
        <div className="d-hasil ok">
          Nilai kamu: {skor} dari {soal.length} benar. Nilai langsung masuk
          rekap kelas.
        </div>
      ) : (
        <>
          <p className="soal">{soal[i].t}</p>
          <div className="opsi">
            {soal[i].o.map((x, k) => (
              <button
                key={x}
                onClick={() => jawab(k)}
                className={
                  pilih === null
                    ? ""
                    : k === soal[i].b
                      ? "benar"
                      : k === pilih
                        ? "salah"
                        : ""
                }
              >
                {x}
              </button>
            ))}
          </div>
        </>
      )}
      {tab && (
        <div className="d-hasil bad">
          Pindah tab terdeteksi 1×. Dicatat untuk pengawas ujian.
        </div>
      )}
      {!selesai && (
        <Saklar aktif={tab} onKlik={() => setTab(!tab)}>
          Simulasi pindah tab
        </Saklar>
      )}
      {selesai ? (
        <button className="d-tombol" onClick={ulang}>
          Ulangi simulasi
        </button>
      ) : (
        <button
          className="d-tombol kuning"
          disabled={pilih === null}
          onClick={() => {
            setI(i + 1);
            setPilih(null);
          }}
        >
          {i === soal.length - 1 ? "Selesai" : "Soal berikutnya"}
        </button>
      )}
    </Phone>
  );
}

const dok = [
  ["Modul Ajar Matematika Kelas 8", "Modul", true],
  ["Jadwal Piket Semester Ganjil", "Arsip", true],
  ["Peraturan Kepegawaian 2026", "Arsip", true],
  ["Pelatihan Kurikulum (video)", "E-learning", false],
  ["Katalog Buku Perpustakaan", "Katalog", false],
];

export function DemoLibrary() {
  const [pesawat, setPesawat] = useState(false);
  const [q, setQ] = useState("");
  const daftar = dok.filter(([n]) => n.toLowerCase().includes(q.toLowerCase()));
  return (
    <Phone judul="Library">
      <input
        className="cari"
        placeholder="Cari modul atau dokumen"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Cari dokumen"
      />
      <Saklar aktif={pesawat} onKlik={() => setPesawat(!pesawat)}>
        Mode pesawat
      </Saklar>
      <div className="daftar-dok">
        {daftar.map(([n, jenis, offline]) => (
          <div key={n} className={pesawat && !offline ? "dok mati" : "dok"}>
            <div>
              {n}
              <small>{jenis}</small>
            </div>
            <span className={offline ? "chip ok" : "chip"}>
              {offline ? "Offline siap" : "Perlu internet"}
            </span>
          </div>
        ))}
        {daftar.length === 0 && (
          <p className="catatan">Tidak ada dokumen yang cocok.</p>
        )}
      </div>
      <small className="catatan">
        3 dari 5 dokumen tersimpan lokal di ponsel.
      </small>
    </Phone>
  );
}
