import { ImageResponse } from "next/og";
import { getSite } from "@/lib/getSite";

export const alt = "Gambar pratinjau situs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar Open Graph dibuat otomatis dari data situs (nama, judul, warna).
export default async function Image() {
  const s = await getSite();
  const ink = s.warnaAksen;
  const rows = [["Guru hadir hari ini", "128"], ["Izin menunggu", "7"], ["Honor bulan ini", "Siap"]];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: s.warnaUtama, color: ink }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: 26, background: "#fff", display: "flex" }} />
          <div style={{ fontSize: 46, fontWeight: 800, display: "flex" }}>{s.nama}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 650 }}>
            <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, display: "flex" }}>{s.heroJudul}</div>
            <div style={{ fontSize: 28, marginTop: 22, display: "flex" }}>Absensi, honor, ujian, library, dan perizinan sekolah.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 380, background: "#fff", borderRadius: 36 }}>
            {rows.map(([a, b], i) => (
              <div key={a} style={{ display: "flex", justifyContent: "space-between", padding: "22px 28px", fontSize: 26, borderTop: i ? "2px solid #eeeaf7" : "none" }}>
                <div style={{ display: "flex" }}>{a}</div>
                <div style={{ display: "flex", fontWeight: 800 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}