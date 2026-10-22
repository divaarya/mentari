import "./Phone.css";

export default function Phone({ judul, miring, children }) {
  return (
    <div className={miring ? "phone miring" : "phone"}>
      <div className="layar">
        <div className="status">
          <span>07:02</span>
          <span>{judul}</span>
        </div>
        <div className="layar-isi">{children}</div>
      </div>
    </div>
  );
}
