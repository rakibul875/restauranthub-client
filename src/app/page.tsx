import Banner from "@/components/pageUi/home/Banner";
import Choose from "@/components/pageUi/home/Choose";
import HomeCard from "@/components/pageUi/home/HomeCard";
import Rhythm from "@/components/pageUi/home/Rhythm";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <HomeCard/>
      <Choose/>
      <Rhythm/>
    </div>
  );
}
