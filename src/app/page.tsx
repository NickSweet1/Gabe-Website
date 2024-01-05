"use client";
import NavBar from "./components/navbar";
import { HeartIcon } from "@heroicons/react/24/outline";
import heroBackgroundImage from "../../public/gabe_building.jpg";
import Image from "next/image";
import IndustriesCard from "./components/card";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div>
        <div className="relative bg-cover bg-center">
          <Image
            src={heroBackgroundImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
          <NavBar />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex items-center justify-center">
                  Hey there, friend! <HeartIcon className="h-10 w-10 ml-2" />
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                  The name's Gabe, and making buildings is my game. Let's make
                  some big towers!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            ></div>
          </div>
        </div>
        <div className="pt-5 pl-5 pr-5">
        <IndustriesCard />
        </div>
      </div>
    </NextUIProvider>
  );
}
