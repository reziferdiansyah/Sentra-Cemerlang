"use client";
import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import Image from "next/image";
        
export function FixedPlugin() {
  /* const [activeSection, setActiveSection] = useState('home') */
 const [isVisible, setIsVisible] = useState(false);

 // Show button when page is scrolled up to given distance
 const toggleVisibility = () => {
   if (window.pageYOffset > 300) {
     setIsVisible(true);
   } else {
     setIsVisible(false);
   }
 };

 // Scroll to top smoothly
 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth',
   });
 };

 useEffect(() => {
   window.addEventListener('scroll', toggleVisibility);

   // Clean up the event listener
   return () => {
     window.removeEventListener('scroll', toggleVisibility);
   };
 }, []);

  return (
    <div>
    {/* Button scroll up */}
    {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <Icon.ArrowUp />
        </button>
      )}
         {/* WhatsApp */}
         <button
          className="fixed bottom-20 right-4 text-white rounded-full z-50 bg-white hover:bg-blue-500"
          aria-label="WhatsApp"
        >
           <Image
            width={50}
            height={50}
            src="/image/WhatsApp.png"
            alt="online course"
          />
        </button>

         {/* Phone */}
         <button
          className="fixed bottom-36 right-4 bg-blue-200 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Phone"
        >
          <Icon.Phone />
        </button>
    </div>
  );
}
