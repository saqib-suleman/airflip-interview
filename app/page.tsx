"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { ImageDisplay } from "./components/ImageDisplay";
import { Specs } from "./components/Specs";
import { useState } from "react";

const price = 499;

export default function Home() {
  const [total, setTotal] = useState<number>(0);

  return (
    <main>
      <div className="container mx-auto mt-10">
        {/* header */}
        <Header />

        <section className="grid grid-cols-2 gap-5 mt-10">
          <ImageDisplay />

          <div className="flex flex-col justify-between p-4 pt-0">
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-sm">Starting at</span>
                <div className="text-4xl font-extrabold">$1,799</div>
              </div>
              <div className="text-sm">
                The KEMPER PROFILER™ is the leading-edge digital guitar
                amplifier and all-in-one effects processor.
              </div>

              <div className="text-sm text-slate-400">
                Hailed as a game-changer by guitarists the world over, the
                PROFILER™ is the first digital guitar amp to really nail the
                full and dynamic sound of a guitar or bass amp.
              </div>

              <div className="text-sm text-slate-400">
                This is made possible by a radical, patented technology and
                concept which we call PROFILING.
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <div className="font-bold ">Form Factor</div>
              <div className="border-2 border-slate-200 hover:border-black p-3 rounded-lg">
                <span className="text-sm font-bold">Profile Head</span>
                <div className="text-[.7rem]">
                  Compact amplifier head, perfect for a speaker cabinet or desk.
                </div>
              </div>
              <div className="border-2 border-slate-200 hover:border-black p-3 rounded-lg">
                <span className="text-sm font-bold">Profile Head</span>
                <div className="text-[.7rem]">
                  Compact amplifier head, perfect for a speaker cabinet or desk.
                </div>
              </div>{" "}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div className="font-bold mb-3">Foot controller</div>
              <div className="border-2 border-slate-200 hover:border-black rounded-lg p-3">
                <div className="text-[0.9rem] font-bold">None</div>
              </div>
              <div className="border-2 border-slate-200 hover:border-black rounded-lg p-3">
                <div className="text-[0.9rem] font-bold">None</div>
              </div>
            </div>

            {/* This would be extracted to a component called PowerAmp set from tehre */}
            <div className="mt-5 flex flex-col gap-5">
              <div className="font-bold ">Power Amp</div>
              <div className="border-2 border-slate-200 hover:border-black rounded-lg p-4">
                <div className="text-[0.9rem] font-bold">None</div>
                <span className="text-[.7rem]">
                  {" "}
                  Use in the studio or with your own power amp.
                </span>
              </div>
              <div className="border-2 flex justify-between items-center border-slate-200 hover:border-black rounded-lg p-4">
                <div onClick={() => setTotal(price)}>
                  <div className="text-[0.9rem] font-bold">Price</div>
                  <span className="text-[.7rem]">
                    {" "}
                    Use in the studio or with your own power amp.
                  </span>
                </div>{" "}
                <div className="text-sm">+ ${price}</div>
              </div>
            </div>

            <Specs />
          </div>
        </section>
      </div>

      <section className="px-6 w-full h-[10rem] flex items-center bg-slate-100 border-t-2">
        {/* footer */}
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="mx-2">
              <Image src={"/shield.png"} alt="shield" width={30} height={30} />
            </div>
            <div>
              <div className="text-md font-semibold">Free Shipping </div>
              <span className="text-sm text-slate-300">
                Get 2-day free shipping anywhere in North America.
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="mx-2">
              <Image src={"/shield.png"} alt="shield" width={30} height={30} />
            </div>
            <div>
              <div className="text-md font-semibold">Free Shipping </div>
              <span className="text-sm text-slate-300">
                Get 2-day free shipping anywhere in North America.
              </span>
            </div>
          </div>
          <div className=" text-end">
            <h2 className="text-3xl font-extrabold pl-32">${total}</h2>
            <span className="text-sm text-slate-300">
              Need financing? Learn more{" "}
            </span>
          </div>
        </div>
        <button className="w-32 h-10 mx-8 rounded-lg  bg-black text-white">
          Buy now
        </button>
      </section>
    </main>
  );
}
