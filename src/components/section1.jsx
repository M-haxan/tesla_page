import Section2 from "./section2";
export default function Section1(){
  return(
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly lg:gap-2 my-8">
        <div className="flex flex-col justify-evenly m-4 bg-[#F4F4F4] rounded-2xl">
          <div className="h-70 lg:h-10 lg:w-20">
          <img src="section3_card1.png" alt="Tesla" className=" object-cover object-center rounded-2xl lg:hidden" />
          </div>
          <div className="flex flex-col justify-end p-4 m-4 lg:text-2xl lg:p-8 lg:m-2 lg:gap-4 "> 
            <h1 className="font-bold">Compare Models</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button className="bg-white w-60 p-2 m-2 font-bold border border-b-neutral-950 lg:w-50 lg:p-2">Compare</button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-[#F4F4F4] m-4 rounded-2xl  ">
          <div className="lg:h-10">
          <img src="section3_card2.png" alt="Tesla" className="w-full h-100 bg-cover bg-center rounded-t-lg lg:hidden" />
          </div>
          <div className="flex flex-col justify-end p-4 m-4 lg:text-2xl lg:p-8 lg:m-2 lg:gap-4"> 
            <h1 className="font-bold">Compare Models</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button className="bg-white w-60 p-2 m-2 font-bold border border-b-neutral-950 lg:w-50 lg:p-2">Compare</button>
          </div>
        </div>
      </div>
    </>
  )
}


