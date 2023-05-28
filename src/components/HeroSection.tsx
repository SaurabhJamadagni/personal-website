import Socials from "./Socials";

function HeroSection() {
  return (
    <div className="max-w-[50%] font-poppins">
      <p className="text-2xl">Hey 👋</p>
      <h1 className="text-2xl">
        I am a <span className="font-bold">developer</span> interested in
      </h1>
      <div className="grid grid-cols-2">
        <div className="w-4 h-4 shadow-lg rounded-full border float-left m-x-2"></div>
        <p>mobile computation</p>
        <div className="w-4 h-4 shadow-lg rounded-full border float-left"></div>
        <p>open-source</p>
        <div className="w-4 h-4 shadow-lg rounded-full border float-left"></div>
        <p>data-science</p>
      </div>
      <h2 className="text-2xl font-bold">technologies</h2>
      <Socials />
    </div>
  );
}

export default HeroSection;
