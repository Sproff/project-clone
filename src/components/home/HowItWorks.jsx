import React from "react";
import { WorksAnimation } from "../animations/HowItWorksAnimation";

export const HowItWorks = () => {
  return (
    <section className="bg-white-100 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] xsm:py-[5rem] sm:py-[6.25rem] lg:py-36">
      <div>
        <div className="max-w-2xl">
          <h2 className="font-Duplicate-Sans leading-[1.15] xsm:text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            How it works
          </h2>
          <p className="font-DM-Sans sm:leading-[1.375] xsm:text-base sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.625rem] mt-5 md:mt-8 max-w-lg lg:max-w-full">
            Through a swift SDK and API integration, you can start retrieving
            verified data on account information, identity, real-time
            transactions, balances, and income.
          </p>
        </div>

        <div>
          <WorksAnimation />
        </div>
      </div>
    </section>
  );
};
