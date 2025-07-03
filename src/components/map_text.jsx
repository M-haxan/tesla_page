export default function FindYourCharge() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto my-8  lg:p-12 lg:max-w-5xl ">
      <h2 className="text-2xl font-bold text-black mb-2">
        <span className="text-black">Find </span>
        <span className="text-red-600">Your Charge</span>
      </h2>
      <p className="text-gray-600 mb-6">
        View the network of Tesla Superchargers and Destination Chargers
        available near you.
      </p>
      <div className="flex justify-center items-center gap-8 mb-6">
        {/* Superchargers */}
        <div>
          <div className="flex items-center justify-center text-3xl font-bold text-black">
            4,879
            <img src="bolt_icon.png" alt="bolt" className="w-6 h-6 ml-2" />
          </div>
          <p className="text-sm text-gray-600 mt-1">Superchargers</p>
        </div>
        {/* Destination Chargers */}
        <div>
          <div className="flex items-center justify-center text-3xl font-bold text-black">
            1,542
            <img src="plug_icon.png" alt="plug" className="w-6 h-6 ml-2" />
          </div>
          <p className="text-sm text-gray-600 mt-1">Destination Chargers</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition">
          View Network
        </button>
        <button className="bg-gray-100 text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
