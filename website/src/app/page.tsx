import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="my-6 max-w-[1200px] mx-auto px-6">
      <div className="flex w-full justify-between">
        <div>
          <Image
            src={"/full-logo.svg"}
            height={150}
            width={150}
            alt="logo"
            className="me-2"
          />
        </div>
        <Button className="font-semibold">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png"
            }
            height={20}
            width={20}
            alt="logo"
            className="me-2"
          />
          Add Extension
        </Button>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="relative">
          <h1 className="text-4xl font-bold  bg-gradient-to-bl from-gray-500 to-white bg-clip-text text-transparent">
            Job Searching
          </h1>
          <h2 className="text-2xl bg-gradient-to-bl from-gray-500 to-white bg-clip-text text-transparent leading-normal text-center">
            without{" "}
            <span className="font-bold text-5xl bg-gradient-to-bl from-yellow-700 to-yellow-600 bg-clip-text text-transparent">
              404
            </span>{" "}
            Error
          </h2>
          <hr className="absolute  bottom-[calc(100%-14em)] translate-y-full rotate-90 w-full -z-10" />
        </div>
        <Button className="font-semibold bg-[#011627] text-white border border-[#2EC4B6] hover:bg-[#031728] z-10 mt-6">
          Start Job Hunting
          <ArrowRight className="ms-2" />
        </Button>
      </div>
      <div></div>
    </div>
  );
}
