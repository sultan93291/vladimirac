"use client";
import React from "react";

const Cube = () => {
  return (
    <div className="scene w-48 h-48 mx-auto my-10">
      <div className="cube">
        <div className="face face-front bg-[#C83C7C] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          Specialized transport
        </div>
        <div className="face face-back bg-[#13213C] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          Urgent Transport
        </div>
        <div className="face face-right bg-[#D14F8A] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          LTL Transport
        </div>
        <div className="face face-left bg-[#891C50] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          FTL Transport
        </div>
        <div className="face face-top bg-[#E269A8] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          Out OF EU
        </div>
        <div className="face face-bottom bg-[#5D164B] text-white flex items-center text-center justify-center text-xl font-bold rounded-lg">
          Storage
        </div>
      </div>
      <style jsx>{`
        .scene {
          perspective: 800px;
        }
        .cube {
          width: 12rem;
          height: 12rem;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 20s infinite linear;
          margin: 0 auto;
        }
        .face {
          position: absolute;
          width: 12rem;
          height: 12rem;
          border: 2px solid white;
          box-sizing: border-box;
        }
        .face-front {
          transform: translateZ(6rem);
        }
        .face-back {
          transform: rotateY(180deg) translateZ(6rem);
        }
        .face-right {
          transform: rotateY(90deg) translateZ(6rem);
        }
        .face-left {
          transform: rotateY(-90deg) translateZ(6rem);
        }
        .face-top {
          transform: rotateX(90deg) translateZ(6rem);
        }
        .face-bottom {
          transform: rotateX(-90deg) translateZ(6rem);
        }
        @keyframes rotateCube {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Cube;
