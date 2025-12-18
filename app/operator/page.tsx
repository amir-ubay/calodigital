import Image from "next/image";
import MainHero from "@/components/mainHero";
import NavTabs from "@/components/navTabs";
import BusSearch from "@/components/busSearch";
import OperatorCard from "@/components/operatorCard";
import SearchResultInfo from "@/components/searchResultInfo";

export default function Home() {
  return (
    <div>
      <MainHero />
      <NavTabs />
      <BusSearch />
      <div id="search-result" className="mx-5 my-10">
        <div id='route-data-list' className="flex flex-col mt-10">
          <SearchResultInfo />
          <OperatorCard />
          <OperatorCard />
        </div>
      </div>
    </div>
  );
}
