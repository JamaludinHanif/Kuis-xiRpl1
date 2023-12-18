import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsXLg, BsCheckLg } from "react-icons/bs";
import { HashLoader, ClipLoader } from "react-spinners";
import { Modal } from "antd";
import "./style.css";
import Loading from "../../components/Loading/Loading";

const Hasil = () => {
  // Modal Ant Desain
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 60000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  // react-router dom
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const location = useLocation();
  console.log("ini location use", location);

  // session storage
  const Nama = sessionStorage.getItem("nama");
  const Kelas = sessionStorage.getItem("kelas");

  //   variable uselocation
  const Akurasi = location.state.akurasi;
  const Skor = location.state.skor;
  const Level = location.state.level;

  //   state
  const [IsLoading, setIsLoading] = useState(false);
  const [IsLoading2, setIsLoading2] = useState(false);
  const [IsLoading3, setIsLoading3] = useState(false);
  const [Hidden, setHidden] = useState(true);
  const [Hidden2, setHidden2] = useState(true);

  const Loading2 = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
      setHidden(false);
    }, 2000);
  };

  const Loading3 = () => {
    setIsLoading3(true);
    setTimeout(() => {
      setIsLoading3(false);
      setHidden2(false);
    }, 3000);
  };

  const Restart = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/`);
      sessionStorage.clear();
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="body h-screen py-10">
        {IsLoading ? (
          <>
            <Loading IsLoading={IsLoading} />
          </>
        ) : (
          <>
            <div className="w-10/12 m-auto">
              <div className="font-Silkscreen text-white">
                <p className="text-3xl text-center">
                  Selamat {Nama}, karena telah menyelesaikan Kuis {Level}
                </p>
                <p className="text-2xl text-center mt-5">
                  Semoga bermanfaat bagi kita semua
                </p>
              </div>

              {/* akurasi */}
              {Hidden ? (
                <>
                  <div
                    onClick={() => Loading2()}
                    className="w-2/12 m-auto rounded-lg py-3 mt-10 bg-kotak cursor-pointer hover:opacity-80"
                  >
                    <p className="text-white font-semibold text-center">
                      Lihat Akurasi
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => Loading2()}
                    className="w-2/12 m-auto rounded-lg py-3 mt-10 cursor-pointer hover:opacity-80"
                  >
                    <p className="text-white text-lg font-semibold text-center">
                      Nilai Akurasi Kamu :
                    </p>
                  </div>
                </>
              )}
              {IsLoading2 ? (
                <>
                  <div className="flex justify-center mt-10">
                    <HashLoader color="#36d7b7" />
                  </div>
                </>
              ) : (
                <>
                  {Hidden ? (
                    <></>
                  ) : (
                    <>
                      <div className="flex w-1/2 m-auto mt-7 flex-row justify-evenly font-semibold text-white text-lg">
                        <div className="bg-purple-500 py-2 rounded-xl px-4 ">
                          <p className="text-center mb-2">Benar :</p>
                          <div className="flex flex-row items-center">
                            <p className="">
                              <BsCheckLg color="green" size={25} />
                            </p>
                            <p className="ml-7">{Akurasi}/20</p>
                          </div>
                        </div>
                        <div className="bg-purple-500 py-2 rounded-xl px-4">
                          <p className="text-center mb-2">Salah :</p>
                          <div className="flex flex-row items-center">
                            <p className="">
                              <BsXLg color="red" size={25} />
                            </p>
                            <p className="ml-7">{20 - Akurasi}/20</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* skor kamu */}
              <div className="mt-20">
                <div className="font-Silkscreen text-3xl text-center font-semibold text-white">
                  <p className="">Skor Kamu : {Skor}</p>
                </div>
                {Hidden2 ? (
                  <>
                    <div
                      onClick={() => Loading3()}
                      className="w-2/12 m-auto rounded-lg py-3 mt-7 bg-kotak cursor-pointer hover:opacity-80 flex flex-row justify-center items-center"
                    >
                      <p className="text-white font-semibold text-center">
                        Tukarkan
                      </p>
                      {IsLoading3 ? (
                        <>
                          <div className="ml-7">
                            <ClipLoader color="#36d7b7" size={20} />
                          </div>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {Hidden2 ? (
                  <></>
                ) : (
                  <>
                    <p className="w-2/12 m-auto font-semibold text-white font-Silkscreen mt-7 mb-2">
                      Hadiah Kamu :
                    </p>
                    <div className="bg-white border border-blue-600 w-2/12 m-auto rounded-lg py-2">
                      <p className="font-semibold text-blue-600 text-lg text-center">
                        {Skor < 50 ? (
                          <>Yawdah sihh 🤓🤏</>
                        ) : Skor < 60 ? (
                          <>Cihuyyy 😁🤟</>
                        ) : Skor > 70 ? (
                          <>Gacor Kang 😎👍</>
                        ) : null}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* option button */}
              {Hidden == false && Hidden2 == false ? (
                <>
                  <div className="w-1/2 m-auto mt-16 flex flex-row font-semibold text-white justify-between">
                    <div
                      onClick={() => showModal()}
                      className="bg-ping py-2 px-6 cursor-pointer rounded-lg hover:opacity-80"
                    >
                      <p className="">Selesai ?</p>
                    </div>
                    <div
                      onClick={() => Restart()}
                      className="bg-biru py-2 px-6 cursor-pointer rounded-lg hover:opacity-80"
                    >
                      <p className="">Mulai Ulang</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>

      <Modal
        open={open}
        title={``}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={400}
      >
        <div className="">
          <div className="mt-7">
            <p className="text-blue-600 text-center text-3xl font-semibold">
              Akhir Kata
            </p>
          </div>
          <div
            // onClick={() => Navigasi()}
            className="bg-blue-600 py-2 rounded-lg mt-10 hover:opacity-80 cursor-pointer"
          >
            <p className="text-white font-semibold text-center text-lg">
              Lanjutkan
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hasil;
