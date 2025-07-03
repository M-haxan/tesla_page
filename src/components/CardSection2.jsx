import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Tesla Model S",
    description: "Electric performance with cutting-edge tech.",
    image: "solar.png",
    right_h3: "Solar Panels",
    rightp: "Use Solar Energy to Power Your Home and Charge Your Tesla",
  },
  {
    id: 2,
    title: "Ford Mustang",
    description: "Classic muscle with a modern twist.",
    image: "powershell.png",
    right_h3: "Power Shell",
    rightp: "Keep lights on with Power Shell",
  },
  {
    id: 3,
    title: "Lamborghini Aventador",
    description: "Supercar with aggressive styling and speed.",
    image: "Solarroof.png",
    right_h3: "Solar Roof",
    rightp: "Generate Clean Energy with Solar Roof",
  },
  {
    id: 4,
    title: "Porsche 911",
    description: "Precision engineering and timeless design.",
    image: "megapack.png",
    right_h3: "Megapack",
    rightp: "Massive Energy Storage for Your Home",
  },
];

const CardSlider = () => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="px-4 py-6">
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto cursor-grab snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[400px] max-w-[400px] lg:min-w-[800px] lg:max-w-[800px] bg-white rounded-xl overflow-hidden shadow-lg relative transform transition-transform duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-100 lg:h-150 object-cover"
            />
            {/* Top Left Text */}
            <div className="absolute top-4 left-3 text-white font-semibold text-sm md:text-xl">
              {card.left_text}
            </div>
            {/* Bottom Left Text */}
            <div className="absolute bottom-4 left-3 text-white">
              <h3 className="text-lg md:text-2xl font-bold tracking-widest">
                {card.right_h3}
              </h3>
              <p className="text-xs md:text-sm">
                {card.rightp}
              </p>
              <div className="mt-2 flex flex-row w-60 gap-2 lg:flex-row lg:gap-2">
                <button className="bg-blue-600 text-sm p-2 rounded text-white lg:h-8 lg:w-30 lg:text-1xl">
                  Order Now
                </button>
                <button className="bg-white text-black text-sm p-2 rounded lg:h-8 lg:w-30 lg:text-1xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardSlider;
