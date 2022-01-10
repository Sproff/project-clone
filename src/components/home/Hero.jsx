import React from "react";
import Autochek from "../assets/images/autochek.svg"
import Quidax from "../assets/images/quidax.svg"
import Aella from "../assets/images/aella.svg"
import Renmoney from "../assets/images/renmoney.svg"
import { HeroAnimation } from "../animations/HeroAnimation";

export const Hero = () => {
  return (
    <div className="bg-white xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem]">
      <div className="flex items-center">
        <div className="mt-[6.25rem] overflow-hidden">
          <h1 className="font-semibold font-Duplicate-Sans xsm:text-[2.25rem] sm:text-[3rem] md:text-[3.85rem] lg:text-[4.5625rem] xl:text-[5.75rem] max-w-[320px] sm:max-w-full leading-[1.15] xsm:tracking-[-2px] sm:tracking-[-4px]">
            Access real-time financial data
          </h1>

          <p className="font-DM-Sans xsm:text-base sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.625rem] sm:leading-[1.375] mt-5 lg:mt-[1.875rem] lg:pr-8">
            Securely access your customers' bank statements, transactions,
            income, identity, and much more.
          </p>

          <div className="flex flex-wrap items-center mt-6">
            <a
              href="##"
              className="flex items-center justify-center font-medium bg-blue-100 text-white-100 text-[0.9375rem] py-3.5 px-5 my-2 mr-[0.9375rem] rounded-[0.625rem] cursor-pointer font-DM-Sans transition-all group"
            >
              Get started with Connect{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 ml-1.5 transition-transform duration-75 transform group-hover:translate-x-0.5"
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>

            <a
              href="##"
              className="flex items-center justify-center font-medium bg-white-200 text-black-100 text-[0.9375rem] py-3.5 px-5 my-2 rounded-[0.625rem] cursor-pointer font-DM-Sans group"
            >
              Contact sales{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 ml-1.5 transition-transform duration-75 transform group-hover:translate-x-0.5"
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="h-full hidden lg:block lg:w-full lg:mr-[-12.375rem]">
          <HeroAnimation />
        </div>
      </div>

      <section className="my-32">
        <div className="mb-10 text-white-400 text-[0.9375rem]">
          <h6>Businesses building with Mono Connect</h6>
        </div>
        <div className="xsm:block sm:flex flex-wrap gap-x-[2.5rem] gap-y-[2.5rem] md:gap-x-[4rem] lg:gap-x-[4.4rem] xl:gap-x-[7rem] md:gap-y-[2rem]">
          <div className="h-8">
            <img src={Autochek} alt="" className="h-full xsm:mt-6 sm:mt-0"/>
          </div>
          <div className="h-8">
            <img src={Quidax} alt="" className="h-full xsm:mt-6 sm:mt-0"/>
          </div>
          <div className="h-8">
            <img src={Aella} alt="" className="h-full xsm:mt-6 sm:mt-0"/>
          </div>
          <div className="h-8">
            <img src={Renmoney} alt="" className="h-full xsm:mt-6 sm:mt-0"/>
          </div>

        </div>
      </section>
    </div>
  );
};
