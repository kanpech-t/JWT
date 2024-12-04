"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { featuredWorks } from "./data/work";
import { createPlayboardMagicRedeemLinkUrl } from "./action/test";
import { useState } from "react";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState("");
  const [userRefCode, setUserRefCode] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [redeemCode, setRedeemCode] = useState("");
  const [magicLink, setMagicLink] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const link = await createPlayboardMagicRedeemLinkUrl({
        userRefCode,
        userDisplayName,
        redeemCode,
      });
      setMagicLink(baseUrl + link);
    } catch (error) {
      console.error("Error generating magic link:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="baseUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Base URL
          </label>
          <input
            type="text"
            id="baseUrl"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="Enter base URL"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="userRefCode"
            className="block text-sm font-medium text-gray-700"
          >
            User Reference Code
          </label>
          <input
            type="text"
            id="userRefCode"
            value={userRefCode}
            onChange={(e) => setUserRefCode(e.target.value)}
            placeholder="Enter user reference code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="userDisplayName"
            className="block text-sm font-medium text-gray-700"
          >
            User Display Name
          </label>
          <input
            type="text"
            id="userDisplayName"
            value={userDisplayName}
            onChange={(e) => setUserDisplayName(e.target.value)}
            placeholder="Enter user display name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="redeemCode"
            className="block text-sm font-medium text-gray-700"
          >
            Redeem Code
          </label>
          <input
            type="text"
            id="redeemCode"
            value={redeemCode}
            onChange={(e) => setRedeemCode(e.target.value)}
            placeholder="Enter redeem code"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
            isPending ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isPending ? "Generating..." : "Generate Magic Link"}
        </button>
      </form>

      {magicLink && (
        <div className="mt-4">
          <p>
            Magic Link:{" "}
            <a
              href={magicLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              {magicLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );

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
            <button
              className="w-[208px] h-[47px] bg-[#FF6464] text-white text-xl font-medium lg:self-start self-center"
              onClick={async () => {
                await createPlayboardMagicRedeemLinkUrl({
                  redeemCode: "1231",
                  userDisplayName: "2313",
                  userRefCode: "213312",
                });
              }}
            >
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
