import React from "react";
import ConnectImage from "../assets/images/connect-image.webp"

export const Connected = () => {
  return (
    <section className="bg-white-500 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] xsm:py-[5rem] sm:py-[6.25rem] lg:py-36">
      <div className="">
        <div className="max-w-3xl w-full">
          <h2 className="font-Duplicate-Sans leading-[1.15] xsm:text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            We've securely connected over 400k+ accounts
          </h2>
          <p className="max-w-lg lg:max-w-full mt-5  md:mt-[1.875rem] lg:mt-8 sm:leading-[1.375] xsm:text-base sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.625rem] mb-[0.9375rem] text-white-400">
            With Mono Connect, your users can securely link their financial
            accounts to your app in seconds. You get real-time account
            information on balances, transactions, and identity.
          </p>
          <a
            href="##"
            target="_blank"
            rel="noreferrer"
            className="xsm:text-[0.9375rem] sm:text-base lg:text-lg font-bold flex items-center text-blue-100"
          >
            See a demo{" "}
            <svg viewBox="0 0 25 25" fill="none" className="xsm:w-5 lg:w-6">
              <path
                d="M8 18L18 8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 8H18V18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>

        <div className="mt-10 sm:mt-[3.75rem] lg:mt-20">
          <div className="xsm:mx-[-1.5625rem] sm:mx-[-2.8125rem] lg:mx-[-6.25rem] xl:mx-[-9.375rem]">
            <img src={ConnectImage} alt="Connect" />
          </div>
        </div>
      </div>
    </section>
  );
};
