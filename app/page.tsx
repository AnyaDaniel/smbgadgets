import Calc from "./components/main/Calc";
import Core from "./components/main/Core";
import Hero from "./components/main/Hero";
import Types from "./components/main/Types";
import Usage from "./components/main/Usage";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Usage/>
      <Core/>
      <Types/>
      <Calc/>
    </div>
  );
}
