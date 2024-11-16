import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Work() {
  const featuredWorks = [
    {
      year: 2002,
      name: "project",
      description:
        "dadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdass",
      coverImg:
        "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
    },
    {
      year: 2002,
      name: "project",
      description:
        "dadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdass",
      coverImg:
        "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
    },
    {
      year: 2002,
      name: "project",
      description:
        "dadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdass",
      coverImg:
        "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
    },
    {
      year: 2002,
      name: "project",
      description:
        "dadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdassdadasdass",
      coverImg:
        "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
    },
  ];

  return (
    <div className="p-6">
      <div className=" flex justify-center items-center flex-col">
        <div className="lg:w-[842px] w-full flex flex-col gap-10">
          <h3 className=" text-[44px] font-black">Works</h3>
          {/* work card */}
          {featuredWorks.map((work) => (
            <>
              <Link href={"work/line-cakepop"}>
                <div
                  className="flex gap-6 hover:bg-gray-100 cursor-pointer lg:flex-row flex-col "
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
