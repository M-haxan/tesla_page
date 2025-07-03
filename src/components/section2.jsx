import { useRef, useState } from "react";
export default function Section2() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div
      className=" flex flex-col w-full max-w-md mx-auto p-2 lg:h-100 lg:max-w-250 my-2  relative rounded-xl
     overflow-hidden lg:flex lg:flex-row lg:justify-end lg:gap-4"
    >
      {/* Video with play/pause overlay */}
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-[420px] lg:w-150  object-cover"
          src="tesla_car_vid.mp4"
          autoPlay
          muted
          loop
        ></video>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 text-xl"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg md:text-2xl font-bold tracking-widest">
            Full Self-Driving
          </h3>
          <p className="text-xs md:text-sm">
            0% APR With Purchase of FSD <br />
          </p>
          <div className="mt-2 flex gap-2">
            <button className="bg-blue-600 text-sm px-3 py-1 rounded text-white">
              Demo Drive
            </button>
            <button className="bg-white text-black text-sm px-3 py-1 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[360px] max-w-[360px] py-2 rounded-xl overflow-hidden  relative transform transition-transform duration-300">
        <img
          src="card2.png"
          alt="Tesla"
          className="w-full h-100 object-cover"
        />
        {/* Top Left Text */}
        <div className="absolute top-4 left-3 text-white font-semibold text-sm md:text-xl">
          Utility Truck
        </div>

        {/* Bottom Left Text */}
        <div className="absolute bottom-4 left-3 text-white">
          <h3 className="text-lg md:text-2xl font-bold tracking-widest">
            CYBERTRUCK
          </h3>
          <p className="text-xs md:text-sm">
            0% APR With Purchase of FSD <br />
          </p>
          <div className="mt-2 flex flex-row w-60  gap-2 lg:flex-row lg:gap-2   ">
            <button className="bg-blue-600 text-sm p-2 rounded text-white lg:h-8 lg:w-30 lg:text-1xl ">
              Order Now
            </button>
            <button className="bg-white text-black text-sm p-2 rounded lg:h-8 lg:w-30 lg:text-1xl">
              learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
