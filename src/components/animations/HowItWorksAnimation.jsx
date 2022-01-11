import React, { useState } from "react";

import styled from "styled-components";

import phoneScreen from "../assets/images/phone-screen.png";
import connectApiScreen from "../assets/images/connect-api-screen.png";
import connectApiScreen1b from "../assets/images/connect-api-screen-1b.png";
import connectApiScreen2b from "../assets/images/connect-api-screen-2b.png";
import connectApiScreen3 from "../assets/images/connect-api-screen-3.png";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const data = [
  {
    num: 1,
    title: "Integrate the Connect Widget",
    content: `
            const connect = new Connect({
            key: 'mono_public_key',
            onSuccess: ({code}) => console.log("code", code),
            onEvent: (eventName, data) => {
                console.log({
                eventName,
                data
                })
            }
            });

            connect.setup();
            connect.open();
        `,
    imgUrl: connectApiScreen,
  },
  {
    num: 2,
    title: "User initiates account linking",
    content: `
            // Incoming event
            {
            eventName: "OPENED",
            data: {
                reference: "ref-code-xyz",
                timestamp: 1234567890
            }
            }
        `,
    imgUrl: connectApiScreen1b,
  },
  {
    num: 3,
    title: "User selects bank and securely logs in",
    content: `
            // Incoming event
            {
            eventName: "INSTITUTION_SELECTED",
            data: {
                reference: "ref-code-xyz",
                authMethod: "internet_banking",
                institution: {
                id: "66059eO033be88012",
                name: "GTBank"
                },
                timestamp: 1234567890,
            }
            }
            
            // Incoming event
            {
            eventName: "SUBMIT_CREDENTIALS",
            data: {
                reference: "ref-code-xyz",
                timestamp: 1234567890
            }
            }
        `,
    imgUrl: connectApiScreen2b,
  },
  {
    num: 4,
    title: "User's account is successfully connected",
    content: `
        // Next event
        {
          eventName: "ACCOUNT_LINKED",
          data: {
            reference: "ref-code-xyz",
            timestamp: 1234567890
          }
        }
        `,
    imgUrl: connectApiScreen3,
  },
];

export const WorksAnimation = () => {
  const [pos, setPos] = useState(0);

  return (
    <WorksAnimationSlider>
      <div className="heading flex-wrap xsm:text-[1.5rem]">
        <div className="title">
          <div className="num xsm:text-[1.25rem] xsm:h-10 xsm:w-10 sm:h-[2.8125rem] sm:w-[2.8125rem] lg:h-[3.125rem] lg:w-[3.125rem] font-Duplicate-Sans rounded-full">
            {data[pos].num}
          </div>
          <div className="title-text xsm:text-[1.5rem] sm:text-[1.875rem] lg:text-[2rem] xl:text-[2.25rem] font-Duplicate-Sans">
            {data[pos].title}
          </div>
        </div>

        <div className="buttons  my-2 md:my-5">
          <button
            className="rounded-full xsm:h-10 xsm:w-10 sm:h-[2.8125rem] sm:w-[2.8125rem] lg:h-[3.125rem] lg:w-[3.125rem]"
            disabled={pos <= 0}
            onClick={() => {
              if (pos > 0) {
                setPos(pos - 1);
              }
            }}
          >
            <svg
              className="xsm:ml-2 xsm:w-5 sm:w-6 lg:w-7 transform -rotate-180"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 10H14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6L14 10L10 14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="flex items-center xsm:h-10 sm:h-[2.8125rem] lg:h-[3.125rem] rounded-full xsm:px-4 md:px-5 xsm:text-base"
            disabled={pos === 3}
            onClick={() => {
              if (pos < 3) {
                setPos(pos + 1);
              }
            }}
          >
            Next{" "}
            <svg
              className="xsm:w-5 sm:w-6 lg:w-7"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 10H14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6L14 10L10 14"
                stroke="currentColor"
                strokeWidth="1.2"
                strokelinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="codebox xsm:rounded-[.625rem] sm:rounded-[1.875rem] xsm:text-[0.5626rem] sm:text-[0.81rem] xl:text-[1rem] mt-20 font-DM-Mono">
        <div className="text-content xsm:h-[180px] sm:h-[300px] md:h-[400px] xl:h-[550px] font-DM-Mono">
          <SyntaxHighlighter language="javascript" style={dark}>
            {data[pos].content}
          </SyntaxHighlighter>
        </div>

        <img
          className="placeholder xsm:h-[130%] sm:h-[115%] absolute xsm:top-[-1.3rem] sm:top-[-1.4rem] md:top-[-1.7rem]"
          src={phoneScreen}
          alt="phone-screen"
        />
        <div className="placeholder-content h-full w-full xsm:w-[103px] xsm:h-[122%] sm:h-[109%] sm:w-[29%] xsm:right-[1.5rem] md:right-[2rem] xl:right-[2.52rem] md:w-[32%] md:h-[108%] lg:w-[25%] xl:w-[25.9%] xl:h-[107.5%] xl:top-[-0.5rem] xsm:top-[-0.9rem] lg:top-[-0.5rem] xsm:rounded-[0.6rem] xl:rounded-[1.5rem]">
          <img
            className="active absolute"
            src={connectApiScreen}
            alt="connect api screen"
          />
          <img
            className={pos >= 1 ? "active" : ""}
            src={connectApiScreen1b}
            alt="connect api screen"
          />
          <img
            className={pos >= 2 ? "active" : ""}
            src={connectApiScreen2b}
            alt="connect api screen"
          />
          <img
            className={pos >= 3 ? "active" : ""}
            src={connectApiScreen3}
            alt="connect api screen"
          />
        </div>
      </div>

      <div className="dots">
        <div className={pos === 0 ? "dot active" : "dot"} />
        <div className={pos === 1 ? "dot active" : "dot"} />
        <div className={pos === 2 ? "dot active" : "dot"} />
        <div className={pos === 3 ? "dot active" : "dot"} />
      </div>
    </WorksAnimationSlider>
  );
};

const WorksAnimationSlider = styled.section`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  margin-top: 5rem;
  box-sizing: border-box;

  .dots {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .dot {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #e5e5e5;
      margin-right: 1rem;

      &.active {
        background: #000;
      }
    }
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;

      .num {
        background: #0055ba;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }

      .title-text {
        color: #0055ba;
        margin-left: 1rem;
      }
    }

    .buttons {
      display: flex;
      align-items: center;

      button {
        background: #0055ba;
        color: #fff;
        outline: none;
        border: none;
        margin-right: 1rem;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &:disabled {
          background: #f5f5f5cc;
          color: #000;
          opacity: 0.5;

          &:hover {
            background: #0055ba;
            color: #fff;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
          }
        }
      }
    }
  }

  .codebox {
    position: relative;
    background: #000;
    width: 100%;
    height: 90%;
    margin-top: 2rem;

    color: #fff;
    box-sizing: border-box;

    .text-content {
      max-width: 600px;
      overflow: hidden;

      pre {
        background: none !important;
        text-shadow: none !important;
        padding: 0 !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
    }

    .placeholder {
      right: 1rem;
      width: auto;
    }

    .placeholder-content {
      position: absolute;
      background: rgba(255, 0, 0, 0.3);
      overflow: hidden;

      img {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        height: auto;

        &.active {
          top: 0;
          transition: top ease-in-out 0.3s;
        }
      }
    }
  }
`;
