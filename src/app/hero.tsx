"use client";

import { Button, Typography, Card } from "@material-tailwind/react";
import * as Icon from 'react-feather';


function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('https://www.polyurethaneindonesia.com/wp-content/uploads/2023/05/banner-polyurethane.png')] bg-cover bg-no-repeat">
     {/*   <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat"> */}
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <div>
          <Button className="flex rounded-lg shadow-sm border border-blue-100 hover:bg-white" variant="gradient" color="blue">
             <Icon.ShoppingCart /> 
             <p className="mt-1 ml-1 ">Pesan Sekarang!</p>
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
