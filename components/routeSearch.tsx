export default function RouteSearch() {
  return (
    <div id="search-form" className="card bg-white border-2 border-gray-200 rounded-2xl m-5 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-5 text-xl border-b-4 border-b-blue-500 w-fit">Rute Bus</h2>
          <div className="flex flex-row gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6 pt-1 text-blue-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
            <p className="text-lg text-gray-800 font-light">Kota Asal</p>
          </div>
          <select defaultValue="Pick a text editor" className="select select-primary w-full mb-4 text-base">
            <option disabled={true}>Kota Asal</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Yogyakarta</option>
          </select>

          <div className="flex flex-row gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6 pt-1 text-blue-900">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
            <p className="text-lg text-gray-800 font-light">Kota Tujuan</p>
          </div>
          <select defaultValue="Pick a text editor" className="select select-primary w-full mb-4 text-base">
            <option disabled={true}>Kota Tujuan</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Yogyakarta</option>
          </select>

          <div className="mt-3 text-center">
            <button className="btn btn-primary w-40 rounded-4xl">Cari</button>
          </div>
        </div>
      </div>
  )
}