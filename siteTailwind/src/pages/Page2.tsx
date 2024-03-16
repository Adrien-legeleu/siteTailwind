const Page2 = () => {
  return (
    <div className=" relative h-[200vh] w-full grid grid-cols-3 items-center justify-center gap-12  p-10">
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity1 overflow-hidden">
        <img
          className=" h-full w-full  shadow-2xl object-cover"
          src="./assets/img/paysage (2).jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center invisible">
          <p className="text-5xl text-white">New York</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity2 overflow-hidden">
        <img
          className=" h-full w-full  shadow-2xl object-cover"
          src="./assets/img/paysage (6).jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center">
          <p className="text-5xl text-white">Paris</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity3 overflow-hidden">
        <img
          className=" h-full w-full  shadow-2xl object-cover"
          src="./assets/img/paysage (1).jpg"
          alt=""
        />
        <div  className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center">
          <p className="text-5xl text-white">Maldives</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity4 overflow-hidden">
        <img
          className=" h-full w-full  shadow-2xl object-cover"
          src="./assets/img/paysage (7).jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center">
          <p className="text-5xl text-white">Dubai</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity5 overflow-hidden">
        <img
          className=" h-full w-full shadow-2xl object-cover"
          src="./assets/img/paysage (5).jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center">
          <p className="text-5xl text-white">Tokyo</p>
        </div>
      </div>
      <div className="relative left-[0] top-[10px] h-[85%] w-[85%] rounded-imgCity6 overflow-hidden">
        <img
          className=" h-full w-fulL shadow-2xl object-cover"
          src="./assets/img/paysage (3).jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full flex items-center justify-center">
          <p className="text-5xl text-white">Las Vegas</p>
        </div>
      </div>
    </div>
  );
};
export default Page2;
