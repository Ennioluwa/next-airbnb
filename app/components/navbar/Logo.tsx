"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="contents">
      <Image
        priority
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      />
      <Image
        priority
        onClick={() => router.push("/")}
        alt="Logo"
        className="md:hidden block cursor-pointer"
        height={30}
        width={30}
        src="/images/airbnb.png"
      />
    </div>
  );
};

export default Logo;
