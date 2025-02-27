import {Button, Input, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import * as Icon from 'react-feather';

const LINKS = [
  {
    title: "Sekilas Kami",
    items: ["CV. Sagara Inovasi berdiri untuk memberikan pelayanan khususnya dibidang pembuatan produk berbasis polyurethane dan rubber."],
  },
  {
    title: "Kontak Kami",
    items: ["0878-2112-5779", "0878-2112-5779", "sagara.inovasi@gmail.com", ],
  },
  {
    title: "Alamat Kami",
    items: ["Perum Lebakwangi Asri Blk. D4 No.28 RT.04 RW.13 Desa: Lebakwangi Kec: Arjasri Kab: Bandung Jawa Barat Indonesia 40379"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-4 pt-24 pb-8 bg-blue-600 text-white text-sm">
      <div className="container flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 !w-full ">
        {/* Card 4 */}
         <div className="m-3">
           <Image width={768} height={768}  src="/image/LogoCompany.png" alt="logocompany" />
            <div className="font-normal mb-4 text-sm flex gap-2 mt-2">
            <a href="https://github.com/reziferdiansyah" className="hover:text-blue-100">
            <Icon.Instagram />
            </a>
            <a href="https://github.com/reziferdiansyah" className="hover:text-blue-100">
            <Icon.Facebook />
            </a>
            <a href="https://github.com/reziferdiansyah" className="hover:text-blue-100">
            <Icon.Twitter />
            </a>
            <a href="https://github.com/reziferdiansyah" className="hover:text-blue-100">
            <Icon.Youtube />
            </a>
            </div>
          </div>
           {/* Card 1 Sekilas Kami */}
          <div className="m-3">
          <div className="font-normal mb-4 text-lg">
             Tentang Kami
             <div className="w-8 border boder-b-2 border-white"><hr /> </div>
            </div>
            <div className="font-normal mb-4 text-sm">
              Sentra Cemerlang didirikan untuk memproduksi dan memperbaiki berbagai jenis roll, roda, bushings, mounting, dan suku cadang lainnya yang terbuat dari berbagai jenis material seperti karet (rubber) dan poliuretan (polyurethane)
            </div>
          </div>
           {/* Card 2 Kontak Kami */}
           <div className="m-3">
           <div className="font-normal mb-4 text-lg">
             Kontak 
            <div className="w-8 border boder-b-2 border-white"><hr /> </div>
            </div>
            <div className="font-normal mb-1 text-sm">
              <div className="ml-1 flex"><i className="fa-brands fa-whatsapp text-2xl" /><p className="ml-1">0878-2112-5779</p></div>
            </div>
            <div className="font-normal mb-1 text-sm">
            <div className="ml-1 flex"><Icon.Phone /><p className="ml-1">0878-2112-5779</p></div>
            </div>
            <div className="font-normal mb-1 text-sm">
            <div className="ml-1 flex"><Icon.Mail /><p className="ml-1">sentra.gemilang@gmail.com</p></div>
            </div>
          </div>
           {/* Card 3 Alamat Kami*/}
           <div className="m-1">
           <div className="font-normal mb-4 text-lg">
              Alamat
              <div className="w-8 border boder-b-2 border-white"><hr /> </div>
            </div>
            <div className="font-normal mb-4 text-sm">
             <div className="flex"><Icon.MapPin /><p className="ml-1"> Jalan Alam Raya </p></div>
             <p className="ml-6">No. 22, Kec. Bojongsoang, Desa Buahbatu, RT 05/RW 01, Samping Komplek Kamarasan, Kabupaten Bandung, Jawa Barat, Indonesia - 40292</p>
            </div>
          </div>
        </div>
        <div
          color="blue-gray"
          className="md:text-center mt-16 font-normal text-white"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          Sentra Cemerlang. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
