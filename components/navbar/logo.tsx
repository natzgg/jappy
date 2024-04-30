import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className: string }) => {
  return (
    <Link href="/">
      <div
        className={cn(
          "flex items-center gap-x-3 hover:opacity-75 transition px-2",
          className
        )}
      >
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
    </Link>
  );
};

export default Logo;
