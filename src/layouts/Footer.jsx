import React from "react";
import FooterLogo from "../components/assets/images/footer-logo.svg";
import TwitterIcon from "../components/assets/images/twitter.svg";
import LinkedInIcon from "../components/assets/images/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black-100 text-white-100 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] pt-44 lg:pt-[12.5rem] pb-20 lg:pb-[6.25rem]">
      <div>
        <div className="flex flex-col items-center pb-[6.25rem]">
          <h2 className="mb-[0.9375rem] leading-[1.15] font-Duplicate-Sans font-semibold text-center xsm:text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] xsm:tracking-[-2px] sm:tracking-[-1px]">
            Start building with Mono
          </h2>
          <p className="text-center max-w-[420px] lg:max-w-lg xl:max-w-2xl sm:leading-[1.375] xsm:text-base sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.625rem]">
            Access high-quality financial data and start processing payments
            directly from bank accounts in minutes.
          </p>

          <div className="flex justify-between items-center mt-[3.125rem]">
            <a
              href="##"
              className="flex items-center justify-center font-medium bg-blue-100 text-white-100 xsm:text-[0.875rem] sm:text-[0.9375rem] py-[0.875rem] xsm:px-[0.875rem] sm:px-5 mr-[0.9375rem] rounded-[0.625rem] cursor-pointer font-DM-Sans transition-all group"
            >
              Start now for free{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 ml-[0.3125rem] transition-transform duration-75 transform group-hover:translate-x-0.5"
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
              className="flex items-center justify-center font-medium bg-black-300 text-white-100 xsm:text-[0.875rem] sm:text-[0.9375rem] py-[0.875rem] xsm:px-[0.875rem] sm:px-5 rounded-[0.625rem] cursor-pointer font-DM-Sans group"
            >
              Talk to Sales{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 ml-[0.3125rem] transition-transform duration-75 transform group-hover:translate-x-0.5"
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

        <div className="border border-x-transparent border-y-[rgba(48,48,48,1)] py-[3.75rem] lg:py-20 flex flex-wrap gap-x-[4.5rem] md:gap-x-[2.9rem] lg:gap-x-[6.2rem] xl:gap-x-[9rem] gap-y-10">
          <div>
            <h6 className="xsm:text-[.875rem] sm:text-[0.9375rem] font-medium text-white-600 mb-[0.9375rem]">
              Products
            </h6>
            <ul className="space-y-3 ">
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Connect
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Statement Pages
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  DirectPay
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  DirectPay Pages
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Portal
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Transactions
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Income
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Information
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Data Sync
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="xsm:text-[.875rem] sm:text-[0.9375rem] font-medium text-white-600 mb-[0.9375rem]">
              Resources
            </h6>
            <ul className="space-y-3">
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Developers
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Documentation
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  API Reference
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  SDKs
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Demo
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Join Slack
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Consumers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="xsm:text-[.875rem] sm:text-[0.9375rem] font-medium text-white-600 mb-[0.9375rem]">
              Company
            </h6>
            <ul className="space-y-3">
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  About us
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Partner stories
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Blog
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Coverage
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Careers
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="xsm:text-[.875rem] sm:text-[0.9375rem] font-medium text-white-600 mb-[0.9375rem]">
              Legal
            </h6>
            <ul className="space-y-3">
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  End-User Policy
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Developer Policy
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Cookies
                </a>
              </li>
              <li>
                <a className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem]" href="##">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-9 flex-col md:flex-row flex-wrap">
          <div className="flex flex-col md:flex-row items-center my-1 mb-8 md:mb-0">
            <div className="h-3.75 -mt-1 mb-8 md:mb-0">
              <img src={FooterLogo} alt="Footer Logo" />
            </div>
            <span className="xsm:text-[.875rem] sm:text-base l-10 font-medium">© Mono Technologies Nigeria Limited</span>
          </div>

          <div className="flex items-center">
            <a
              target="_blank"
              href="##"
              rel="noreferrer"
              className="font-medium xsm:text-[.875rem] sm:text-[0.9375rem] text-white-600 hover:text-white-100 flex items-center mr-10 after:absolute after:h-[4px] after:w-[4px] after:rounded-full after:bg-[#8c8fa3] after:left-[90px] first:relative after:top-2/4 after:-translate-y-2/4"
            >
              <img src={TwitterIcon} alt="" className="h-[0.875rem] mr-1.5" />
              Twitter
            </a>
            <a
              target="_blank"
              href="##"
              rel="noreferrer"
              className="xsm:text-[.875rem] sm:text-[0.9375rem] text-white-600 hover:text-white-100 transition-colors font-medium flex items-center"
            >
              <img src={LinkedInIcon} alt="" className="h-[0.875rem] mr-1.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
