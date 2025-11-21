import Image from "next/image";

export default function MainHero() {
  return (
    <div id="hero" className="card rounded-box homeHero">
        <div className="card-body">
          <div className="flex gap-2">
            <Image src="/ticket.png" alt="Calo Digital Logo" width={40} height={40} />
            <h2 className="card-title">Calo Digital</h2>
          </div>
          <p>Cari rute dan agen resmi bus</p>
        </div>
      </div>
  )
}