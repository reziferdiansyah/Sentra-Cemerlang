import { Typography, Button, Input, IconButton } from "@material-tailwind/react";
import Image from "next/image";

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
    <footer className="px-4 pt-24 pb-8 bg-blue-500 text-white">
      <div className="container flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 !w-full ">

           {/* Card 1 Sekilas Kami */}
          <div className="m-1 bg-yellow-500">
          <Typography className="font-normal mb-4 text-base">
             Sekilas Kami
            </Typography>
            <Typography className="font-normal mb-4 text-base">
             CV. Sagara Inovasi berdiri untuk memberikan pelayanan khususnya dibidang pembuatan produk berbasis polyurethane dan rubber.
            </Typography>
          </div>
           {/* Card 2 Kontak Kami */}
           <div className="m-1 bg-red-500">
           <Typography className="font-normal mb-4 text-base">
             Kontak Kami
            </Typography>
            <Typography className="font-normal mb-1 text-base">
              <span className="ml-1">0878-2112-5779</span>
            </Typography>
            <Typography className="font-normal mb-1 text-base">
            <span className="ml-1">0878-2112-5779</span>
            </Typography>
            <Typography className="font-normal mb-1 text-base">
             <span className="ml-1"> sagara.inovasi@gmail.com</span>
            </Typography>
          </div>
           {/* Card 3 Alamat Kami*/}
           <div className="m-1 bg-green-500">
           <Typography className="font-normal mb-4 text-base">
              Alamat Kami
            </Typography>
            <Typography className="font-normal mb-4 text-base">
              Perum Lebakwangi Asri Blk. D4 No.28 RT.04 RW.13 Desa: Lebakwangi Kec: Arjasri Kab: Bandung Jawa Barat Indonesia 40379
            </Typography>
          </div>
           {/* Card 4 */}
           <div className="m-1 bg-gray-500">
           <Image width={768} height={768}  src="https://www.polyurethaneindonesia.com/wp-content/uploads/2023/05/logo-polyurethane.png" alt="logocompany" />
            <Typography className="font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal text-white"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          Sentra Gemilang. All Rights Reserved
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
