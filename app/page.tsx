import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id="hero" className="card bg-base-200 rounded-box">
        <div className="card-body">
          <h2 className="card-title">Calo Digital</h2>
          <p>Trayek dan operator bus di rute akap pulau Jawa</p>
        </div>
      </div>

      <div id="type-select" className="flex w-full my-10 p-5">
        <div className="card bg-blue-600 rounded-box grid h-20 grow place-items-center">
          <p className="font-semibold text-base text-white">Trayek Bus</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-orange-600 rounded-box grid h-20 grow place-items-center">
          <p className="font-semibold text-base text-white">Operator Bus</p>
        </div>
      </div>

      <div id="search-form" className="card bg-base-300 rounded-box m-5">
        <div className="card-body">
          <h2 className="card-title mb-5 text-xl border-b-4 border-b-blue-600 w-fit">Cari rute bus</h2>
          <label className="text-sm text-gray-800 font-semibold">Kota Asal</label>
          <select defaultValue="Pick a text editor" className="select select-neutral w-full border-gray-300 mb-4">
            <option disabled={true}>Kota Asal</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Yogyakarta</option>
          </select>

          <label className="text-sm text-gray-800 font-semibold">Kota Tujuan</label>
          <select defaultValue="Pick a text editor" className="select select-neutral w-full border-gray-300 mb-4">
            <option disabled={true}>Kota Tujuan</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Yogyakarta</option>
          </select>

          <button className="btn btn-primary w-40">Cari</button>
        </div>
      </div>

      <div id="search-result" className="mx-5 my-10">
        <p className="text-base font-semibold">Hasil pencarian</p>
        <p className="text-sm">5 trayek bus ditemukan</p>
        <div id='bus-list' className="flex flex-col mt-10">
          <div id="bus-item">
            <div className="card bg-gray-50 shadow-sm p-4">
              <div className="flex">
                <figure className="w-3/12">
                  <img
                    className="w-full h-auto object-cover object-center"
                    src="https://arest.web.id/sites/default/files/styles/foto_company_singlepost/public/logo-sinar-jaya-group.png?itok=MMb3lexR"
                    alt="Movie" />
                </figure>
                <div className="card-body w-9/12 flex flex-col">
                  <h2 className="card-title">Sinar Jaya</h2>
                  <p>Trayek: Jakarta - Yogyakarta</p>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="w-1/3 text-left">Agen Resmi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/3">Terminal Pulo Gebang</td>
                    <td className="w-2/3">0819-0090-0090</td>
                  </tr>
                  <tr>
                    <td className="w-1/3">Terminal Lebak Bulus</td>
                    <td className="w-2/3">0819-0090-0090</td>
                  </tr>
                </tbody>
              </table>

              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="w-1/3 text-left">Social Media</th>
                    <th className="w-1/3 text-left">Market Place</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/3">
                      <a href="https://www.instagram.com/sinarjayagroup/" target="_blank" rel="noopener noreferrer">
                        <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_logo_2016.svg" alt="Instagram" />
                      </a>
                    </td>
                    <td className="w-1/3">
                      <a href="https://www.tokopedia.com/sinarjayagroup" target="_blank" rel="noopener noreferrer">
                        <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Tokopedia_Logo.svg" alt="Tokopedia" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3">
                      <a href="https://www.facebook.com/sinarjayagroup" target="_blank" rel="noopener noreferrer">
                        <img className="w-10 h-10" src="https://www.svgrepo.com/show/508844/instagram.svg" alt="Facebook" />
                      </a>
                    </td>
                    <td className="w-1/3 flex">
                      <a href="https://www.shopee.com/sinarjayagroup" target="_blank" rel="noopener noreferrer">
                        <img className="w-10 h-10" src="https://www.svgrepo.com/show/508844/instagram.svg" alt="Shopee" />
                        Instagram
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
