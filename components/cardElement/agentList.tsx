export default function AgentList() {
  return (
    <div id="agent-list" className="p-4 text-center bg-blue-100 rounded-2xl my-4">
      <p className="font-semibold">Agen Resmi</p>
      <AgentListDivided />
    </div>
  )
}

export function AgentListDivided() {
  return (
    <div className="flex justify-between bg-white p-4 mt-2 rounded-4xl shadow-md text-left align-middle items-center">
      <p><span className="text-base font-semibold">Terminal Pulo Gebang</span><br /><a href="tel:0819-5555-6666" className="text-gray-500 text-base">0819-5555-6666</a></p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block w-6 h-6 mr-2 text-blue-900">
        <a href="https://wa.me/6281955556666" target="_blank" rel="noopener noreferrer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </a>
      </svg>

    </div>
  )
}

export function AgentListInline() {
  return (
    <div className="flex justify-between bg-white p-4 mt-2 rounded-4xl shadow-md">
      <p className="text-base font-semibold">Terminal Pulo Gebang</p>
      <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block w-5 h-5 mr-2 text-blue-900">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
        <a href="tel:0819-5555-6666" className="text-gray-500 text-base">0819-5555-6666</a></p>
    </div>
  )
}