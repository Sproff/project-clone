import React from "react";

export const Account = () => {
  return (
    <section className="bg-white-500 xsm:px-[1.25rem] sm:px-[2.8125rem] md:px-[3.75rem] lg:px-[6.25rem] xl:px-[9.375rem] xsm:py-[5rem] sm:py-[6.25rem] lg:py-36">
      <div className="w-full max-w-[725px]">
        <h2 className="leading-[1.15] font-Duplicate-Sans  xsm:text-[1.875rem] sm:text-[2rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
          Fetching financial data after account linking
        </h2>
        <p className="max-w-lg lg:max-w-full text-white-400 mt-5 md:mt-[1.875rem] mb-[0.9375rem] xsm:text-base sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.625rem] sm:leading-[1.375]">
          We've built comprehensive API endpoints to retrieve financial data
          from your customers' bank accounts
        </p>
        <a
          href="##"
          target="_blank"
          rel="noreferrer"
          className="xsm:text-[0.9375rem] sm:text-base lg:text-lg font-bold flex items-center text-blue-100"
        >
          See API Docs{" "}
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

      <div>
        <div className="mt-[3.75rem] lg:mt-20 grid gap-5 grid-cols-1 sm:grid-cols-2">
          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Accounts
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve account holder's full name, account type, account number,
              balance, currency, and more.
            </p>
          </div>

          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Transactions
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve real-time transaction data from connected financial
              accounts with the Transactions endpoint.
            </p>
          </div>

          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Balance
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve real-time account balances and currency information from
              connected financial accounts.
            </p>
          </div>

          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Statements
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve bank statements from 1 to 12 months from connected
              accounts using the Statements endpoint.
            </p>
          </div>

          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Income
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve account holder income values and type from connected
              accounts in real-time.
            </p>
          </div>

          <div className="bg-white-100 rounded-[0.9375rem] xsm:p-6 sm:p-10 lg:p-[2.8125rem] xl:p-[3.75rem]">
            <h4 className="text-center lg:text-left xsm:text-[1.5rem] sm:text-3xl lg:text-4xl  font-Duplicate-Sans ">
              Identity
            </h4>
            <p className="text-white-300 leading-snug text-center lg:text-left xsm:text-[.9375rem] sm:text-base lg:text-lg font-DM-Sans mt-3.5 md:mt-4 lg:mt-5">
              Retrieve account holder's identity information like full name,
              BVN, date of birth, phone number and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
