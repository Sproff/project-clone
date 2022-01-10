import React from "react";
import GettingStartedBg from "../assets/images/getting-started-bg.jpg";
import PowerfulApis from "../assets/images/powerful-apis.svg";
import ApiResponse from "../assets/images/api-response-frame.png";
import Sdks from "../assets/images/plug-and-play-sdks.svg";
import BeautifulUx from "../assets/images/beautiful-ux.svg";
import Slack from "../assets/images/slack.svg";

export const GettingStarted = () => {
  return (
    <section
      className="xsm:px-[1.25rem] sm:px-[2.8125rem] py-[7.5rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem]"
      style={{ backgroundImage: `url(${GettingStartedBg})` }}
    >
      <div>
        <h2 className="text-white-100 font-Duplicate-Sans font-semibold xsm:text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.15] tracking-[-1px]">
          Getting started
        </h2>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="bg-white-100 mt-[3.75rem] lg:mt-20 rounded-[0.9375rem] xsm:px-6 sm:px-10 lg:px-[3.75rem] pt-[3.75rem] lg:pt-20 flex flex-col lg:flex-row gap-[2.5rem]">
          <div className="pb-6 lg:pb-24 flex flex-col items-center lg:items-start">
            <img src={PowerfulApis} alt="" className="mb-5" />
            <h2 className="xsm:text-[1.875rem] sm:text-[2.1rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-Duplicate-Sans font-semibold leading-tight mb-[2.1875rem] text-center lg:text-left">
              Powerful APIs and easy integrations
            </h2>
            <a
              href="##"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-bold flex items-center text-blue-100"
            >
              Read our API Docs{" "}
              <svg viewBox="0 0 25 25" fill="none" className="w-6">
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

          <div className="max-w-lg w-full md:mx-auto lg:relative">
            <img src={ApiResponse} alt="" className="w-full lg:absolute bottom-0" />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-[20px]">
          <div>
            <div className="xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem] bg-white-100 flex flex-col items-center lg:items-start rounded-[0.9375rem]">
              <img src={Sdks} alt="" className="mb-5" />
              <h4 className="leading-[1.25] mb-[2.1875rem] xsm:text-[1.5rem] sm:text-[1.875rem] lg:text-4xl font-semibold font-Duplicate-Sans text-center lg:text-left">
                Plug-and-play SDKs
              </h4>
              <a
                href="##"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold flex items-center text-blue-100"
              >
                Explore SDKs{" "}
                <svg viewBox="0 0 25 25" fill="none" className="w-6">
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
          </div>

          <div>
            <div className="xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem] bg-white-100 flex flex-col items-center lg:items-start rounded-[0.9375rem]">
              <img src={BeautifulUx} alt="" className="mb-5" />
              <h4 className="leading-[1.25] mb-[2.1875rem] xsm:text-[1.5rem] sm:text-[1.875rem] lg:text-4xl font-semibold font-Duplicate-Sans text-center lg:text-left">
                Beautiful, seamless UX
              </h4>
              <a
                href="##"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold flex items-center text-blue-100"
              >
                See a demo{" "}
                <svg viewBox="0 0 25 25" fill="none" className="w-6">
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
          </div>

          <div>
            <div className="xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem] bg-white-100 flex flex-col items-center lg:items-start rounded-[0.9375rem]">
              <img src={Slack} alt="" className="mb-5" />
              <h4 className="leading-[1.25] mb-[2.1875rem] xsm:text-[1.5rem] sm:text-[1.875rem] lg:text-4xl font-semibold font-Duplicate-Sans text-center lg:text-left">
                Always-on support
              </h4>
              <a
                href="##"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold flex items-center text-blue-100"
              >
                Join us on Slack{" "}
                <svg viewBox="0 0 25 25" fill="none" className="w-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};
