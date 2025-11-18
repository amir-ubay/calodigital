import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex w-full my-15">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">Trayek Bus AKAP</div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">PO Bus AKAP</div>
      </div>

      <div className="card bg-base-200 rounded-box place-items-center">
        <div className="card-body">
          <h2 className="card-title">Welcome to CaloDigital!</h2>
          <p>Your one-stop solution for intercity bus routes and operators.</p>
        </div>
      </div>
    </div>
  );
}
