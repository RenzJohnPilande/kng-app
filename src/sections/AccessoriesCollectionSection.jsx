export const AccessoriesCollectionSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center min-h-screen p-6">
      <div className="flex justify-center text-center items-center flex-col flex-wrap w-full p-2">
        <h1 className="text-3xl font-bold capitalize my-1">Style and Comfort for Your Game</h1>
        <p className="max-w-[500px] my-1">
          Discover our fashionable accessories designed to improve your game while keeping you
          comfortable on and off the course.
        </p>
      </div>
      <div className="flex flex-wrap justify-center container p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px]">
          <div className="flex flex-wrap justify-center items-center p-5 border w-full bg-black text-white rounded m-2 min-h-[200px]">
            <span className="text-2xl uppercase font-semibold">Caps</span>
          </div>
          <div className="flex flex-wrap justify-center items-center p-5 border w-full bg-black text-white rounded m-2 min-h-[200px]">
            <span className="text-2xl uppercase font-semibold">Gloves</span>
          </div>
          <div className="flex flex-wrap justify-center items-center p-5 border w-full bg-black text-white rounded m-2 min-h-[200px]">
            <span className="text-2xl uppercase font-semibold">Belts</span>
          </div>
          <div className="flex flex-wrap justify-center items-center p-5 border w-full bg-black text-white rounded m-2 min-h-[200px]">
            <span className="text-2xl uppercase font-semibold">Arm Sleeves</span>
          </div>
        </div>
      </div>
    </div>
  );
};
