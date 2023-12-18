import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gambar from './../../assets/images/bg-landing.png';
import "./style.css";

const LandingPage = () => {
  // react roueter dom
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="body dark:bg-Second">
        {/* content page */}
        <div className="h-full w-11/12 lg:pl-10 m-auto flex items-center justify-between">
          <div className="lg:w-1/2 w-full">
            <p className="font-semibold lg:text-2xl text-white text-lg">
              Selamat Datang di Website <span className="text-black">Kuis</span>{" "}
              <span className="text-red-600">xi Rpl 1</span>
            </p>

            <p className="my-7 font-bold lg:text-4xl text-xl text-white">
              Ayo, Selesaikan Kuis dan Dapatkan Hadiah nya
            </p>

            <div className="font-semibold my-7">
              Jika ada masalah silahkan,{" "}
              <a
                href="https://wa.me/+62%2085161310017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-blue-600 cursor-pointer">
                  Hubungi Kami
                </span>
              </a>
            </div>

            <div className="flex flex-row justify-start">
              <div
                onClick={() => navigate("/login")}
                className="bg-kotak lg:w-48 w-32 mr-10 hover:opacity-80 rounded-lg py-3 px-4 cursor-pointer"
              >
                <p className="text-white font-semibold text-center">
                  Ayo Mulai
                </p>
              </div>
              <div
                onClick={() => navigate("/login")}
                className="bg-white lg:w-48 w-32 hover:opacity-80 border border-black rounded-lg py-3 px-4 cursor-pointer"
              >
                <p className="font-semibold text-center">Lets Gooo</p>
              </div>{" "}
            </div>
          </div>

          <div className="lg:w-1/3 lg:block hidden">
            <img src={gambar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
