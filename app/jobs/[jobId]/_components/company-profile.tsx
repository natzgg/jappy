"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CompanyProfile = () => {
  const pathname = usePathname();
  return (
    <div className="lg:w-max lg:mx-auto">
      <div className="p-4">
        <div className="bg-graycolor">
          <div className="p-8 space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/facebook.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold">Facebook</h1>
                <Link
                  href={pathname}
                  scroll={true}
                  className="text-xs text-blue-500"
                >
                  View company profile
                </Link>
              </div>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Primary Industry:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                Software
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Company Size:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                501-1000
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Founded In:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                2004
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Phone:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                123-456-7890
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Email:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                facebook@facebook.com
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="font-semibold text-sm">Location:</h1>
              <span className="font-semibold text-muted-foreground text-sm">
                London, UK
              </span>
            </div>

            <Button
              className="text-blue-500 p-6 bg-blue-500/20 w-full hover:bg-blue-600 hover:text-white"
              asChild
            >
              <Link target="_blank" href="https://www.facebook.com">
                https://www.facebook.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
