import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Tesla Model S",
    description: "Electric performance with cutting-edge tech.",
    image: "card1.png",
  },
  {
    id: 2,
    title: "Ford Mustang",
    description: "Classic muscle with a modern twist.",
    image: "card2.png",
  },
  {
    id: 3,
    title: "Lamborghini Aventador",
    description: "Supercar with aggressive styling and speed.",
    image: "card3.png",
  },
  {
    id: 4,
    title: "Porsche 911",
    description: "Precision engineering and timeless design.",
    image: "https://source.unsplash.com/2048x1160/?porsche,car",
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
    <div className=" py-6 px-4 overflow-x-auto w-full lg:w-[3456px] lg:h-[2500px] xl:w-[3456px] xl:h-[2500px] 2xl:w-full ">
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
            className="min-w-[400px] max-w-[2000px] lg:min-w-[2000px] lg:max-w-[800px] bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-100 lg:h-600 object-cover"
            />

            {/* Top Left Text */}
            <div className="absolute top-6 left-2 text-white font-semibold text-sm lg:text-8xl xl:text-9xl">
              Utility Truck
            </div>

            {/* Bottom Left Text */}
            <div className="absolute bottom-4 left-2 text-white">
              <h3 className="text-xl lg:text-8xl xl:text-9xl font-bold tracking-widest">CYBERTRUCK</h3>
              <p className="text-xs lg:text-6xl xl:text-7xl">
                0% APR With Purchase of FSD
                <br />
                (Supervised)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
