import MainHero from "@/components/mainHero";
import NavTabs from "@/components/navTabs";
import OperatorData from "@/components/operatorData";

export default function Home() {
  return (
    <div>
      <MainHero />
      <NavTabs />
      <div id="search-result" className="mx-5 my-10">
        <div id='route-data-list' className="flex flex-col mt-10">
          <OperatorData />
        </div>
      </div>
    </div>
  );
}
