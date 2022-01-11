import React from "react";
import ViewAnalytics from "../assets/images/view-analytics.svg";
import GetInsight from "../assets/images/account-insights.svg";
import GetSupport from "../assets/images/talk-to-support.svg";
import DashboardImage from "../assets/images/dashboard.webp";

export const Dashboard = () => {
  return (
    <section className="xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] xsm:pt-[5rem] sm:pt-[6.25rem] lg:pt-36">
      <div>
        <div className="max-w-4xl w-full">
          <h2 className="font-Duplicate-Sans sm:leading-[1.15] xsm:text-[1.875rem] sm:text-4xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-[0.9375rem]">
            Manage performance on the Mono Dashboard
          </h2>
          <a
            href="##"
            target="_blank"
            rel="noreferrer"
            className="xsm:text-[0.9375rem] sm:text-base lg:text-lg font-bold flex items-center text-blue-100"
          >
            Create an account{" "}
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

        <div className="xsm:mt-10 sm:mt-[3.75rem] lg:mt-20 flex justify-between flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8">
          <div className="max-w-[500px] md:max-w-[280px]">
            <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4 lg:mb-5">
              <img src={ViewAnalytics} alt="" className="w-full" />
            </div>

            <div>
              <h5 className="mb-4 md:mb-5 font-Duplicate-Sans  xsm:text-[1.25rem] sm:text-2xl lg:text-[2rem] leading-[1.25]">
                View analytics
              </h5>
              <p className="text-white-400 leading-[1.375] xsm:text-[0.9375rem] sm:text-base lg:text-lg">
                Track financial account linking, webhook, and API logs, and view
                success rates all in one place.
              </p>
            </div>
          </div>

          <div className="max-w-[500px] md:max-w-[280px]">
            <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4 lg:mb-5">
              <img src={GetInsight} alt="" className="w-full" />
            </div>

            <div>
              <h5 className="mb-4 md:mb-5 font-Duplicate-Sans xsm:text-[1.25rem] sm:text-2xl lg:text-[2rem] leading-[1.25]">
                Get account insights
              </h5>
              <p className="text-white-400 leading-[1.375] xsm:text-[0.9375rem] sm:text-base lg:text-lg">
                Access detailed balance, transaction, and identity data from
                linked accounts per user.
              </p>
            </div>
          </div>

          <div className="max-w-[500px] md:max-w-[280px]">
            <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4 lg:mb-5">
              <img src={GetSupport} alt="" className="w-full" />
            </div>

            <div>
              <h5 className="mb-4 md:mb-5 font-Duplicate-Sans  xsm:text-[1.25rem] sm:text-2xl lg:text-[2rem] leading-[1.25]">
                Get support
              </h5>
              <p className="text-white-400 leading-[1.375] xsm:text-[0.9375rem] sm:text-base lg:text-lg">
                Get prompt and helpful support right on the dashboard; have an
                instant chat to get assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[3.75rem] lg:mt-20">
          <div className="drop-shadow-[0_-30px_40px_rgba(0,0,0,0.1)]">
            <img src={DashboardImage} alt="Connect" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
};
