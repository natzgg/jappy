import { Separator } from "./ui/separator";
import Socials from "./socials";
import { Copyright } from "lucide-react";
import Image from "next/image";
import FooterLinks from "./footer-links";

const Footer = () => {
  return (
    <div className="bg-graycolor h-max">
      <div className="p-4">
        <div className="mb-5">
          <div className="flex items-center gap-x-3 hover:opacity-75 transition px-0">
            <div className="rounded-xl bg-blue-500">
              <Image
                src="/jappy_logo.svg"
                height={48}
                width={48}
                alt="jappy logo"
              />
            </div>
            <p className="text-xl lg:text-2xl font-semibold">Jappy</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl">Call us</h1>
          <span className="font-semibold text-blue-600">090 6361 0105</span>
          <div className="mt-5 font-medium text-sm">
            <p className="text-muted-foreground">Aichi Ken, Gamagori Japan</p>
            <span>natzcunanan@gmail.com</span>
          </div>
        </div>
      </div>
      <FooterLinks />
      <Separator />
      <Socials />
      <div className="flex justify-center items-center">
        <Copyright className="w-5 h-5 mr-2 text-muted-foreground" />
        <p className="text-muted-foreground text-xs">
          2024 Jappy by Nathaniel Cunanan. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
