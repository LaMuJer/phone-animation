import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className="grid xl:grid-cols-3 md:grid-cols-4 w-full h-full">
        {/* left side - multiple phones animation */}
        <div className="col-span-2">
          <div className="w-full h-full overflow-hidden relative">
            <div className="grid grid-cols-5 md:gap-5 gap-2 md:w-[100vw] w-[150vw] h-full tile-box">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="col-span-1 tiles">
                  <div className="w-full h-full flex flex-col md:gap-5 gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        src={`${Math.ceil(Math.random() * 5)}.png`}
                        alt="home"
                        className="md:rounded-3xl rounded-lg border shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right side - forms */}
        <div className="xl:col-span-1 md:col-span-2">
          <div className="w-full h-full bg-[#000000] text-white px-10 font-sora">
            <div className="grid grid-rows-9 h-full">
              <div className="row-span-1">
                <div className="flex flex-col justify-center h-full">
                  <div className="flex justify-between items-center">
                    <a href="mailto:hsuwinlat2910@gmail.com">
                      hsuwinlat2910@gmail.com
                    </a>
                    <p className="text-end text-neutral-600 text-xs">
                      Hsu Win Lat
                    </p>
                  </div>
                </div>
              </div>
              <div className="row-span-7">
                <div className="h-full flex flex-col justify-center">
                  <h1 className="text-5xl font-bold">
                    Welcome to Weekly Issue Number 3
                  </h1>
                  <p className="text-neutral-500 font-light mt-5">
                    Multiple Phones Animation
                  </p>
                  <button className="w-full h-10 bg-[#8E6CEF] text-white rounded-md mt-20">
                    <a target="_blank" href="https://github.com/LaMuJer">
                      Follow
                    </a>
                  </button>
                </div>
              </div>
              <div className="row-span-1 flex items-center">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3 text-neutral-500 font-light">
                    <a
                      target="_blank"
                      className="underline"
                      href="https://github.com/LaMuJer"
                    >
                      github
                    </a>
                    <a
                      target="_blank"
                      className="underline"
                      href="https://www.facebook.com/staphy.staphy.9/"
                    >
                      facebook
                    </a>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      href="https://marquee-zeta.vercel.app/"
                      className="bg-[#8E6CEF] rounded-md p-2 hover:bg-white hover:text-black active:scale-95 transition-all"
                    >
                      Previous Issue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
