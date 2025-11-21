import Image from "next/image";
import MainHero from "@/components/mainHero";
import NavTabs from "@/components/navTabs";
import RouteSearch from "@/components/routeSearch";
import SearchResultInfo from "@/components/searchResultInfo";
import RouteData from "@/components/routeData";

export default function Home() {
  return (
    <div>
      <MainHero />
      <NavTabs />
      <RouteSearch />

      <div id="search-result" className="mx-5 my-10">
        <SearchResultInfo />
        <div id='route-data-list' className="flex flex-col mt-10">
          <RouteData />
        </div>
      </div>
    </div>
  );
}
