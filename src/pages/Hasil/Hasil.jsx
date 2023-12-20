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
      <div className="body h-screen">
        {IsLoading ? (
          <>
            <Loading IsLoading={IsLoading} />
          </>
        ) : (
          <>
            <div className="lg:w-10/12 w-11/12 m-auto">
              <div className="font-Silkscreen text-white pt-6">
                <p className="lg:text-3xl text-lg text-center">
                  Selamat {Nama}, karena telah menyelesaikan Kuis {Level}
                </p>
                <p className="lg:text-3xl text-lg text-center mt-5">
                  Semoga bermanfaat bagi kita semua
                </p>
              </div>

              {/* akurasi */}
              {Hidden ? (
                <>
                  <div
                    onClick={() => Loading2()}
                    className="lg:w-2/12 w-1/2 m-auto rounded-lg py-3 mt-7 bg-kotak cursor-pointer hover:opacity-80"
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
                    className="lg:w-2/12 w-1/2 m-auto rounded-lg py-3 mt-7 cursor-pointer hover:opacity-80"
                  >
                    <p className="text-white text-base font-semibold text-center">
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
                      <div className="flex lg:w-1/2 w-full m-auto mt-5 flex-row justify-evenly font-semibold text-white text-lg">
                        <div className="bg-purple-500 py-2 rounded-xl px-4 ">
                          <p className="text-center mb-2">Benar :</p>
                          <div className="flex flex-row items-center">
                            <p className="">
                              <BsCheckLg color="green" size={25} />
                            </p>
                            <p className="ml-7">{Akurasi}/15</p>
                          </div>
                        </div>
                        <div className="bg-purple-500 py-2 rounded-xl px-4">
                          <p className="text-center mb-2">Salah :</p>
                          <div className="flex flex-row items-center">
                            <p className="">
                              <BsXLg color="red" size={25} />
                            </p>
                            <p className="ml-7">{15 - Akurasi}/15</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* skor kamu */}
              <div className="lg:mt-20 mt-10">
                <div className="font-Silkscreen lg:text-3xl text-lg text-center font-semibold text-white">
                  <p className="">Skor Kamu : {Skor}</p>
                </div>
                {Hidden2 ? (
                  <>
                    <div
                      onClick={() => Loading3()}
                      className="lg:w-2/12 w-1/2 m-auto rounded-lg py-3 lg:mt-7 mt-6 bg-kotak cursor-pointer hover:opacity-80 flex flex-row justify-center items-center"
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
                    <p className="lg:w-2/12 w-1/2 m-auto text-sm font-semibold text-white font-Silkscreen lg:mt-7 mt-3 mb-2">
                      Hadiah Kamu :
                    </p>
                    <div className="bg-white border border-blue-600 lg:w-2/12 w-1/2 m-auto rounded-lg py-2">
                      <p className="font-semibold text-blue-600 text-lg text-center">
                        {Skor < 40 ? (
                          <>Skor Terendah 🤓🤏</>
                        ) : Skor < 65 ? (
                          <>Skor Menengah 😁🤟</>
                        ) : Skor > 65 ? (
                          <>Skor Tertinggi 😎👍</>
                        ) : null}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* option button */}
              {Hidden == false && Hidden2 == false ? (
                <>
                  <div className="lg:w-1/2 w-4/5 m-auto mt-16 flex flex-row font-semibold text-white justify-between">
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
            <p className="text-blue-600 text-center text-2xl font-semibold">
              Akhir Kata
            </p>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            molestias error doloribus, minima, sequi sapiente nostrum earum
            assumenda debitis, non atque natus cumque voluptates. Error possimus
            eos alias officiis in.
          </p>
          <div
            onClick={() => {Restart(), setOpen(!open)}}
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
