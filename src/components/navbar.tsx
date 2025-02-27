import React from "react";
import {
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";


interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 z-50 border-0 bg-white w-full shadow-xl"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="m-2">
         <Image width={125} height={125}  src="/image/LogoCompany.png" alt="logocompany" />
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex text-black font-bold`}
        >
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <IconButton
            variant="text"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-whatsapp text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color="gray"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color="gray"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton 
             placeholder=""
             onPointerEnterCapture={() => {}}
             onPointerLeaveCapture={() => {}}
             variant="text" color="gray"  size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton 
             placeholder=""
             onPointerEnterCapture={() => {}}
             onPointerLeaveCapture={() => {}}
             variant="text" color="gray" size="sm">
              <i className="fa-brands fa-whatsapp text-base" />
            </IconButton>
            <IconButton 
             placeholder=""
             onPointerEnterCapture={() => {}}
             onPointerLeaveCapture={() => {}}
             variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton 
             placeholder=""
             onPointerEnterCapture={() => {}}
             onPointerLeaveCapture={() => {}}
             variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Navbar;
