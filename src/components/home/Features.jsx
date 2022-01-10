import React from "react";
import Customizable from "../assets/images/customizable.svg";
import Secure from "../assets/images/secure.svg";
import EnrichedData from "../assets/images/enriched-data.svg";

export const Features = () => {
  return (
    <div className="bg-white-500 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] py-[6.25rem] lg:py-36">
      <div className="mb-[3.75rem] lg:mb-20">
        <h2 className="font-Duplicate-Sans leading-[1.15] font-semibold xsm:text-[1.875rem] sm:text-4xl lg:text-[3.5rem] xl:text-[4rem] tracking-[-2px]">
          Features
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-8">
        <div className="max-w-[500px] md:max-w-[189px] lg:max-w-[280px]">
          <div className="xsm:h-8 sm:h-10 lg:h-12 w-12 mb-5">
            <img src={Customizable} alt="" className="w-full" />
          </div>
          <div>
            <h5 className="leading-[1.25] font-Duplicate font-semibold xsm:text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4 md:mb-5">
              Customizable
            </h5>
            <p className="xsm:text-[.9375rem] sm:text-base lg:text-lg text-white-400 lg:mr-[-0.8rem] xl:mr-[1rem]">
              Customize the Mono Connect widget and features to match your brand
              and user journeys.
            </p>
          </div>
        </div>
        
        <div className="max-w-[500px] md:max-w-[189px] lg:max-w-[280px]">
          <div className="xsm:h-8 sm:h-10 lg:h-12 w-12 mb-5">
            <img src={Secure} alt="" className="w-full" />
          </div>
          <div>
            <h5 className="leading-[1.25] font-Duplicate font-semibold xsm:text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4">
              Secure
            </h5>
            <p className="xsm:text-[.9375rem] sm:text-base lg:text-lg text-white-400">
              Mono connect uses bank-grade security encryption to safeguard your
              customer's information.
            </p>
          </div>
        </div>
        
        <div className="max-w-[500px] md:max-w-[189px] lg:max-w-[280px]">
          <div className="xsm:h-8 sm:h-10 lg:h-12 w-12 mb-5">
            <img src={EnrichedData} alt="" className="w-full" />
          </div>
          <div>
            <h5 className="leading-[1.25] font-Duplicate font-semibold xsm:text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4">
              Enriched Data
            </h5>
            <p className="xsm:text-[.9375rem] sm:text-base lg:text-lg text-white-400">
              Retrieve cleaned and categorized financial data so you can extract
              insights and value in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
