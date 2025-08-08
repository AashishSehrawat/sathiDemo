import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo.png";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="pt-2 pl-2 w-fit">
        <Link href="/">
          <Image src={logo} alt="Logo" width={200} />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default layout;
