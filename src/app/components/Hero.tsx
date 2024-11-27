import next from 'next'
import React from 'react'
import Image from "next/image";
const Hero = () => {
  return (
    <>
    <div className="bg-[#ffffff] h-screen flex flex-col">
      
      <div className="flex flex-col justify-center items-start md:flex-row h-60% px-4 md:px-10 pl- 171px pt-[120px]">

      <div className="flex flex-col justify-center items-start md:max-w-[548px] w-full mb-6 md:mb-0 md:pr-8 flex-grow">
        <h1 className=" text-[32px] md:text-[40px] font-bold - text-center mt-6 md:mt-0 md:text-left text-[#000000]"  style={{ fontFamily: 'Libre Bodoni' , fontWeight: 600 }}>IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className=" w-full text-[15px] md:text-xl text-[#7d765c]- font-medium - text-center md:text-left mt-4" style={{ fontFamily: 'Libre Bodoni', fontWeight: 500 }} >
        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className="mt-8 lg:mt-10 text-white md:text-[22px] font-serif bg-[#A29875]  w-[200px] md:w-[250px] lg:w-[288px] h-[50px] rounded-lg">Explore Now</button>
        
      </div>
      <div className="w-full md:w-[400px] mt-4 md:mt-0 flex justify-center">
          <Image
          src="/images/picture.jpg"
          alt="picture"
          width={490}
          height={667}
          className="object-contain w-[300px] h-[200px] md:w-[300px] md:h-[300px] mt-6 md:mt-0 " />
        
       </div>
      </div>
    </div>
    </>

  );
}

export default Hero