import Image from "next/image";
import RouteTitle from "./cardElement/routeTitle";
import AgentList from "./cardElement/agentList";
import DividerDotBlue from "./dividerDotBlue";
import SocialMediaList from "./cardElement/socialMediaList";
import OnlineTicketList from "./cardElement/onlineTicketList";
export default function RouteData() {
  return (
    <div id="route-data-item">
            <div className="bg-white shadow-xl p-5 rounded-4xl border border-gray-200">
              <RouteTitle />
              <AgentList />
              <DividerDotBlue />
              <SocialMediaList />
              <OnlineTicketList />
              <DividerDotBlue />
            </div>
          </div>
  )
}