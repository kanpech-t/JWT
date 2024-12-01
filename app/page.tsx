import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { featuredWorks } from "./data/work";

export default function Home() {
  return (
    <div className="p-6">
      <div className=" flex justify-center items-center flex-col">
        <div className="flex gap-28 lg:w-[842px]  my-20 lg:flex-row flex-col-reverse items-center lg:items-start">
          {/* left block */}
          <div className="flex flex-col gap-10 lg:w-[506px] text-center lg:text-start">
            <h1 className="flex flex-col text-[44px] font-bold">
              {`Hi, I'm Kanpech, a Software Developer`}
            </h1>
            <span>
              {`Welcome to my portfolio! . Here, you'll find my projects,
              experiences and the skills I’ve honed through years of coding,
              problem-solving, and collaboration.`}
            </span>
            <button className="w-[208px] h-[47px] bg-[#FF6464] text-white text-xl font-medium lg:self-start self-center">
              Download Resume
            </button>
          </div>
          {/* picture profile */}
          <div className="relative">
            <div className="size-56 rounded-full overflow-hidden bg-slate-500  ">
              <AspectRatio ratio={1}>
                <Image
                  src={"/kanpech-profile.png"}
                  layout="fill"
                  alt="picture profile"
                  className="z-[2]"
                />
              </AspectRatio>
            </div>
            <div className="size-56 rounded-full top-3 right-1.5 z-[1] bg-[#FF6464] absolute" />
          </div>
        </div>
        <div className="lg:w-[842px] w-full flex flex-col gap-10">
          <h3 className=" text-[22px]">Featured works</h3>
          {/* work card */}
          {featuredWorks.map((work) => (
            <>
              <Link href={"work/line-cakepop"}>
                <div
                  className="flex gap-6  cursor-pointer lg:flex-row flex-col "
                  key={work.name}
                >
                  <div className="lg:w-[246px]">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={work.coverImg}
                        layout="fill"
                        className="rounded-md object-cover"
                        alt="project image"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex flex-col gap-4 overflow-hidden flex-1 ">
                    <h3 className="text-[30px] font-bold">{work.name}</h3>
                    <Badge className="w-fit rounded-full">{work.year}</Badge>
                    <span className=" break-words">{work.description}</span>
                  </div>
                </div>
              </Link>
              <div className={"border"} key={work.name + "border"} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
