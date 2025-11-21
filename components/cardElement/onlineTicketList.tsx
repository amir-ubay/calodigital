export default function OnlineTicketList() {
  return (
    <div id="online-ticket-list" className="mt-8">
      <p className="font-normal mb-2">Tiket Online</p>
      <div className="flex gap-2 flex-wrap">
        <OnlineTicketItem />
        <div className="bg-sky-500 text-white py-2 px-4 rounded-4xl shadow-md">
          <p>Tiket.com</p>
        </div>
        <div className="bg-red-700 text-white py-2 px-4 rounded-4xl shadow-md">
          <p>Redbus.id</p>
        </div>
      </div>
    </div>
  )
}

export function OnlineTicketItem() {
  return (
    <div className="bg-blue-700 text-white py-2 px-4 rounded-4xl shadow-md">
      <p>Traveloka</p>
    </div>
  )
}