const Page2 = () => {
  return (
    <div className="relative h-[200vh] w-full grid grid-cols-3 items-center justify-center gap-12 mt-10  p-10">
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity1 overflow-hidden inline-block cursor-pointer group  shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity1 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (2).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">New York</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity2 overflow-hidden inline-block cursor-pointer group shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity2 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (6).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">Paris</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity3 overflow-hidden inline-block cursor-pointer group shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity3 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (1).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">Maldives</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity4 overflow-hidden inline-block cursor-pointer group shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity4 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (5).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">Tokyo</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity5 overflow-hidden inline-block cursor-pointer group shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity5 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (7).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">Dubai</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity6 overflow-hidden inline-block cursor-pointer group shadow-2xl">
        <div className="h-[100%] w-[100%]">
          <img
            className="h-full w-full object-cover rounded-imgCity6 group-hover:scale-110 transition-transform duration-500"
            src="./assets/img/paysage (3).jpg"
            alt="new york img"
          />
        </div>
        <div className="absolute top-0 left-0 backdrop-blur-[2px] w-full h-full flex items-center justify-center invisible group-hover:visible transition ease-out duration-500">
          <p className="text-5xl text-white">Las Vegas</p>
        </div>
      </div>
    </div>
  );
};
export default Page2;
