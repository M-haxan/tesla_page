import Logo from "./header";
export default function Hero() {
  return (
    <>
      <section
        className="h-100 bg-cover bg-center sm:bg-cover sm:bg-center lg:h-100 lg:bg-cover lg:bg-center text-white text-center px-4 py-16"
        style={{
          backgroundImage: "url('car1.png')",
        }}
      >
        <h1 className="text-4xl font-bold sm:text-4xl lg:text-4xl lg:m-6">
          Model 3
        </h1>
        <p className="mt-2 text-sm sm:text-base lg:text-2xl">
          0% APR Ending June 30
        </p>
        <div className="mt-6 ml-5 flex flex-row sm:flex-row gap-4 lg:flex-row justify-center lg:gap-6">
          <button className="bg-blue-600 px-6 py-2 rounded text-white lg:h-12 lg:w-70 lg:text-2xl ">
            Order Now
          </button>
          <button className="bg-white text-black px-6 py-2 rounded lg:h-12 lg:w-70 lg:text-2xl">
            View Inventory
          </button>
        </div>
      </section>
    </>
  );
}
