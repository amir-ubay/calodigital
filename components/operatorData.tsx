import Image from "next/image";
import OperatorTitle from "./cardElement/operatorTitle";
import AgentListCity from "./cardElement/agentListCity";
import DividerDotBlue from "./dividerDotBlue";
import SocialMediaList from "./cardElement/socialMediaList";
import OnlineTicketList from "./cardElement/onlineTicketList";
import FullRoute from "./cardElement/fullRoute";
import RouteTitle from "./cardElement/routeTitle";

export default function OperatorData() {
  return (
    <div>
      <div id="route-data-item">
        <div className="bg-white shadow-xl p-5 rounded-4xl border border-gray-200">
          <OperatorTitle />
          <DividerDotBlue />
          <p>Daftar Agen per Kota</p>
          <AgentListCity />
          <DividerDotBlue />
          <p>Rute Layanan Bus</p>
          <FullRoute />
          <FullRoute />
          <DividerDotBlue />
          <p>Akun Sosial Media Resmi</p>
          <SocialMediaList />
          <DividerDotBlue />
          <OnlineTicketList />
          <DividerDotBlue />
        </div>
      </div>
    </div>
  )
}