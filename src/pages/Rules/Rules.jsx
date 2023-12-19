import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { notification } from "antd";

const Rules = () => {
  // react router dom
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //   STATE
  const [IsLoading, setIsLoading] = useState(false);

  //   function login
  const Navigasi = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/pilih-level");
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-screen body py-10 flex justify-center items-center">
      {IsLoading ? (
        <>
          <Loading IsLoading={IsLoading} />
        </>
      ) : (
        <>
          <div className="w-11/12 lg:w-5/12 bg-white p-4 lg:p-6">
            <div className="">
              <p className="text-red-600 font-semibold text-2xl mb-5">
                Peraturan :
              </p>
              <div className="text-sm">
                <p className="">1. Tidak boleh typo saat menjawab pertanyaan</p>
                <p className="mt-2">
                  2. Kumpulkan Skor sebanyak-banyaknya dan tukarkan dengan
                  hadiah yang tertera
                </p>
                <p className="mt-2">
                  3. Terdapat 3 level soal, setiap level mempunyai tingkat
                  kesulitanya masing-masing
                </p>
                <p className="mt-2">
                  4. Semakin Tinggi level, Semakin sulit pula tingkat soalnya
                </p>
                <p className="mt-2">
                  5. Setiap soal yang dijawab dengan benar, Kalian akan
                  mendapatkan penambahan Skor *tergantung soalnya
                </p>
                <p className="mt-2">
                  6. Setiap soal yang dijawab dengan salah, kalian akan
                  mendapatkan pengurangan Skor *tergantung soalnya
                </p>
                <p className="mt-2">
                  7. Jangan liat google (opsional), tapi sebaiknya jangan biar seruuu 😁👍
                </p>
                <p className="mt-2">
                  8. Soal terdiri dari soal Pengetahuan umum, dan Pertanyaan menjebak
                </p>
                <p className="mt-2">
                  9. Jawab pertanyaan dengan sebaik mungkin, dan teliti
                </p>
                <p className="mt-2">
                  10. Selesaikan Kuis Sebelum waktu Habis
                </p>
                <p className="mt-2">
                  11. Kalau kamu gak tau / nyerah, cukup ketik <span className="font-semibold">Gak tau</span> atau <span className="font-semibold">Pas</span>
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-7">
              <div
                onClick={() => Navigasi()}
                className="bg-green-600 cursor-pointer hover:opacity-90 rounded-md py-1 w-20"
              >
                <p className="text-white cursor-pointer font-semibold text-center">
                  Next
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Rules;
