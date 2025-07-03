export default function Section1(){
  return(
    <>
      <div className="  flex  flex-col gap-4 lg:w-[3450px] lg:flex-row  lg:justify-evenly xl:w-[5000px]">
        <div className="flex flex-col justify-evenly m-4 bg-[#F4F4F4] rounded-2xl lg:w-500 lg:h-150 xl:w-700">
          <div className="h-70 lg:h-190">
          <img src="section3_card1.png" alt="Tesla" className=" object-cover object-center rounded-2xl lg:hidden" />
          </div>
          <div className="flex flex-col justify-end p-4 m-4 lg:text-6xl lg:p-8 lg:m-6 lg:gap-4 "> 
            <h1 className="font-bold">Compare Models</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button className="bg-white w-60 p-2 m-2 font-bold border border-b-neutral-950 lg:w-100 lg:p-6">Compare</button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-[#F4F4F4] m-4 rounded-2xl lg:w-500 lg:h-150 xl:w-700">
          <div className="">
          <img src="section3_card2.png" alt="Tesla" className="w-full h-100 bg-cover bg-center rounded-t-lg lg:hidden" />
          </div>
          <div className="flex flex-col justify-end p-4 m-4 lg:text-6xl lg:p-8 lg:m-6 lg:gap-4"> 
            <h1 className="font-bold">Compare Models</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button className="bg-white w-60 p-2 m-2 font-bold border border-b-neutral-950 lg:w-100 lg:p-6">Compare</button>
          </div>
        </div>
      </div>
    </>
  )
}


