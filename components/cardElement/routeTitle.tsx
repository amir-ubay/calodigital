export default function RouteTitle() {
  return (
  <div id="route-title" className="flex">
                <div className="w-9/12 flex flex-col align-middle justify-center">
                  <h2 className="text-2xl font-bold mb-3">Sinar Jaya</h2>
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6 pt-1 text-blue-900">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <p className="text-lg font-light text-gray-800">Jakarta - Bandung</p>
                  </div>
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6 pt-1 text-blue-900">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg font-light text-gray-800">07.30</p>
                  </div>
                </div>
                <figure className="w-3/12">
                  <img
                    className="w-full h-auto object-cover object-center"
                    src="https://arest.web.id/sites/default/files/styles/foto_company_singlepost/public/logo-sinar-jaya-group.png?itok=MMb3lexR"
                    alt="Movie" />
                </figure>
              </div>
  )
}