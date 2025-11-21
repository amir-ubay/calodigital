export default function DataSource() {
  return (
    <div id="sumber-data" className="mt-8">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Sumber Data</div>
        <div className="collapse-content text-sm">Data diambil dan dikurasi dari akun instagram resmi, website resmi dan platform tiket online.</div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Ada data yang tidak sesuai?</div>
        <div className="collapse-content text-sm">Laporkan jika ada data yang tidak sesuai di halaman <a className="link link-primary">Laporan</a>.</div>
      </div>
    </div>
  )
}