import {useState} from 'react';

import styled from 'styled-components';

import step1 from '../assets/images/sp-step-1.webp';
import step2 from '../assets/videos/sp-step-2.mp4';
import step3 from '../assets/videos/sp-step-3.mp4';
import step4 from '../assets/videos/sp-step-4.mp4';

const data = [
  {
    num: 1,
    title: 'Create and share a Statement Page link',
    imgUrl: step1,
  },
  {
    num: 2,
    title: 'The user clicks and shares contact details',
    imgUrl: step2,
  },
  {
    num: 3,
    title: 'The user selects bank and securely logs in',
    imgUrl: step3,
  },
  {
    num: 4,
    title: 'Statements are instantly fetched and shared',
    imgUrl: step4,
  },
];

export const StatementAnimation = () => {
  const [pos, setPos] = useState (0);

  return (
    <StatementAnimationSlider>
      <div className="heading flex-wrap xsm:text-[1.5rem]">
        <div className="title">
          <div className="num xsm:text-[1.25rem] xsm:h-10 xsm:w-10 sm:h-[2.8125rem] sm:w-[2.8125rem] lg:h-[3.125rem] lg:w-[3.125rem] font-Duplicate-Sans rounded-full">
            {data[pos].num}
          </div>
          <div className="title-text xsm:text-[1.5rem] sm:text-[1.875rem] lg:text-[2rem] xl:text-[2.25rem] font-Duplicate-Sans">
            {data[pos].title}
          </div>
        </div>

        <div className="buttons my-2 md:my-5">
          <button
            className="rounded-full xsm:h-10 xsm:w-10 sm:h-[2.8125rem] sm:w-[2.8125rem] lg:h-[3.125rem] lg:w-[3.125rem]"
            disabled={pos <= 0}
            onClick={() => {
              if (pos > 0) {
                setPos (pos - 1);
              }
            }}
          >
            <svg
              className="xsm:ml-2 lg:ml-[0.6rem] xsm:w-5 sm:w-6 lg:w-7 transform -rotate-180"
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
                setPos (pos + 1);
              }
            }}
          >
            Next{' '}
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="codebox">
        <img className="active" src={step1} alt="step one" />

        <video className={pos >= 1 ? 'active' : ''} loop autoPlay muted>
          <source src={step2} type="video/mp4" />
        </video>

        <video className={pos >= 2 ? 'active' : ''} loop autoPlay muted>
          <source src={step3} type="video/mp4" />
        </video>

        <video className={pos >= 3 ? 'active' : ''} loop autoPlay muted>
          <source src={step4} type="video/mp4" />
        </video>
      </div>

      <div className="dots">
        <div className={pos === 0 ? 'dot active' : 'dot'} />
        <div className={pos === 1 ? 'dot active' : 'dot'} />
        <div className={pos === 2 ? 'dot active' : 'dot'} />
        <div className={pos === 3 ? 'dot active' : 'dot'} />
      </div>
    </StatementAnimationSlider>
  );
};

const StatementAnimationSlider = styled.section`
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
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    margin-top: 2rem;
    color: #fff;
    box-sizing: border-box;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }

    video {
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: auto;

      &.active {
        left: 0;
        transition: top ease-in-out 0.3s;
      }
    }
  }
`;
