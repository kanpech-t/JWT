import Image from "next/image";
import fb from "../../public/fb.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";

export function Footer() {
  return (
    <div className="h-[182px] flex items-center flex-col justify-center gap-2 mt-6">
      <div className="flex gap-4 ">
        <Image src={fb} alt="facebook icon" />
        <Image src={insta} alt="instagram icon" />
        <Image src={linkedin} alt="linkedin icon" />
      </div>
      <span className="text-[14px]">Copyright ©2020 All rights reserved</span>
    </div>
  );
}
