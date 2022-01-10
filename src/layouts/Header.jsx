import React from "react";
import HeaderLogo from "../components/assets/images/header-logo.svg";
import NavIconWhy from "../components/assets/images/nav_icon_why_mono.svg";
import NavIconPricing from "../components/assets/images/pricing.svg";
import NavIconDemo from "../components/assets/images/nav_icon_demo.svg";
import Connect from "../components/assets/images/connect.svg";
import DirectPay from "../components/assets/images/directpay.svg";
import Portal from "../components/assets/images/portal.svg";
import StatementPages from "../components/assets/images/statement-pages.svg";
import DirectPages from "../components/assets/images/direct-pay-pages.svg";
import Percept from "../components/assets/images/percept.svg";
import About from "../components/assets/images/about-us-icon.svg";
import Blog from "../components/assets/images/blog-icon.svg";
import Tutorial from "../components/assets/images/tutorials-icon.svg";
import Coverage from "../components/assets/images/product-icon.svg";
import Overview from "../components/assets/images/overview-icon.svg";
import Documentation from "../components/assets/images/docs-icon.svg";

const Header = () => {
  return (
    <div>
      <nav className="py-6 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem]">
        <div className="flex items-center justify-between">
          <a href="##" className="h-5">
            <img
              className="xsm:h-4 sm:h-5 lg:h-[20px]"
              src={HeaderLogo}
              alt="Header Logo"
            />
          </a>

          <ul className="hidden lg:flex justify-between items-center">
            <li className="flex items-center mx-3 py-3 font-medium cursor-pointer font-DM-Sans text-[0.9375rem] text-black-200 relative navbar">
              Why Mono{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 ml-1.5 mt-0.5"
              >
                <path
                  d="M5 7L10 12L15 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="border border-solid border-[hsla(0,0%,89.8%,.75)] drop-shadow-[0_25px_30px_rgba(0,0,0,0.13)] bg-white-100 p-7 absolute top-full left-[47%] -translate-x-1/2 w-full min-w-[420px] pointer-events-none rounded-[0.9375rem] opacity-0 transition-opacity duration-[0.4s] z-[999] ease-out before:absolute before:left-1/2 before:bottom-full before:border-l-[10px] before:border-solid before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-white-100 before:-translate-x-2/4">
                <ul>
                  <li className="min-w-[300px] max-w-[350px]">
                    <a href="##" className="flex items-start">
                      <div className="mr-5 shrink-0">
                        <img src={NavIconWhy} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem] font-Duplicate-Sans font-semibold">
                          Why Choose Mono
                        </h6>
                        <span class="text-white-300 text-sm mt-1.25">
                          Here's why 250+ Businesses &amp; Developers use Mono
                          APIs
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[300px] max-w-[350px] py-8">
                    <a href="##" className="flex items-start">
                      <div className="mr-5 shrink-0">
                        <img src={NavIconPricing} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                          Pricing
                        </h6>
                        <span class="text-white-300 text-sm mt-1.25">
                          Affordable pricing for developers, SMEs, and
                          enterprises
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[300px] max-w-[350px]">
                    <a href="##" className="flex items-start">
                      <div className="mr-5 shrink-0">
                        <img src={NavIconDemo} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                          See a demo
                        </h6>
                        <span class="text-white-300 text-sm mt-1.25">
                          Experience Mono APIs in action
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-center mx-3 py-3 font-medium cursor-pointer font-DM-Sans text-[0.9375rem] text-black-200 relative navbar">
              Products{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 ml-1.5 mt-0.5"
              >
                <path
                  d="M5 7L10 12L15 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="border border-solid border-[hsla(0,0%,89.8%,.75)] drop-shadow-[0_25px_30px_rgba(0,0,0,0.13)] bg-white-100 p-7 absolute top-full left-[45%] -translate-x-1/2 min-w-[810px] z-[99999999999] pointer-events-none rounded-[0.9375rem] opacity-0 transition-opacity duration-[0.4s] ease-out before:absolute before:left-1/2 before:bottom-full before:border-l-[10px] before:border-solid before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-white-100 before:-translate-x-2/4">
                <ul>
                  <div className="flex justify-between item-center mr-20">
                    <div>
                      <li className="min-w-[300px] max-w-[350px]">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img src={Connect} alt="" className="w-full" />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem] font-Duplicate-Sans font-semibold">
                              Connect
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              Financial account linking
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="min-w-[300px] max-w-[350px] py-8">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img src={DirectPay} alt="" className="w-full" />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                              DirectPay
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              Direct bank payment collection
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="min-w-[300px] max-w-[350px]">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img src={Portal} alt="" className="w-full" />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                              Portal
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              Linked account management
                            </span>
                          </div>
                        </a>
                      </li>
                    </div>
                    <div>
                      <li className="min-w-[300px] max-w-[350px]">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img
                              src={StatementPages}
                              alt=""
                              className="w-full"
                            />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem] font-Duplicate-Sans font-semibold">
                              Statement Pages
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              No-code bank statement collection
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="min-w-[300px] max-w-[350px] py-8">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img src={DirectPages} alt="" className="w-full" />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                              DirectPay
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              No-code bank payment collection
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="min-w-[300px] max-w-[350px]">
                        <a href="##" className="flex items-start">
                          <div className="mr-5 shrink-0">
                            <img src={Percept} alt="" className="w-full" />
                          </div>

                          <div>
                            <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                              Percept
                            </h6>
                            <span class="text-white-300 text-sm mt-1.25">
                              Corporate finance management
                            </span>
                          </div>
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </li>

            <li className="flex items-center mx-3 py-3 font-medium cursor-pointer font-DM-Sans text-[0.9375rem] text-black-200 relative navbar">
              Learn{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 ml-1.5 mt-0.5"
              >
                <path
                  d="M5 7L10 12L15 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="border border-solid border-[hsla(0,0%,89.8%,.75)] drop-shadow-[0_25px_30px_rgba(0,0,0,0.13)] bg-white-100 p-7 absolute top-full left-[47%] -translate-x-1/2 w-full min-w-[300px] pointer-events-none rounded-[0.9375rem] opacity-0 transition-opacity duration-[0.4s] ease-out before:absolute before:left-1/2 before:bottom-full before:border-l-[10px] before:border-solid before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-white-100 before:-translate-x-2/4">
                <ul>
                  <li className="min-w-[240px] max-w-[80px]">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={About} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem] font-Duplicate-Sans font-semibold">
                        About us
                        </h6>
                        
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[240px] max-w-[80px] py-8">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={Blog} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                        Blog
                        </h6>
                        
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[240px] max-w-[80px]">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={Tutorial} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                          Tutorials
                        </h6>
                        
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[240px] max-w-[80px] pt-8">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={Coverage} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                          Coverage
                        </h6>
                        
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex items-center mx-3 py-3 font-medium cursor-pointer font-DM-Sans text-[0.9375rem] text-black-200 relative navbar">
              Developers{" "}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 ml-1.5 mt-0.5"
              >
                <path
                  d="M5 7L10 12L15 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="border border-solid border-[hsla(0,0%,89.8%,.75)] drop-shadow-[0_25px_30px_rgba(0,0,0,0.13)] bg-white-100 p-7 absolute top-full left-[47%] -translate-x-1/2 w-full min-w-[300px] pointer-events-none rounded-[0.9375rem] opacity-0 transition-opacity duration-[0.4s] ease-out before:absolute before:left-1/2 before:bottom-full before:border-l-[10px] before:border-solid before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-white-100 before:-translate-x-2/4">
                <ul>
                  <li className="min-w-[240] max-w-[80]">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={Overview} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem] font-Duplicate-Sans font-semibold">
                          Overview
                        </h6>
                      </div>
                    </a>
                  </li>
                  <li className="min-w-[240] max-w-[80] pt-8">
                    <a href="##" className="flex items-center">
                      <div className="mr-5 shrink-0">
                        <img src={Documentation} alt="" className="w-full" />
                      </div>

                      <div>
                        <h6 class="text-black-100 text-[0.85rem]  font-Duplicate-Sans font-semibold">
                          Documentation
                        </h6>
                      </div>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </li>
          </ul>

          <div>
            <a
              href="##"
              className="hidden lg:block items-center justify-center font-medium bg-blue-100 text-white-100 text-[0.9375rem] py-3 px-4 rounded-[0.625rem] cursor-pointer font-DM-Sans"
            >
              Create free account
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
