import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, message } from "antd";
import "./style.css";
import Loading from "../../components/Loading/Loading";

const PilihLevel = () => {
  // state
  const [IsLoading, setIsLoading] = useState(false);

  // Modal Ant Desain
  const [open, setOpen] = useState(false);
  const [Jenis, setJenis] = useState(0);
  const showModal = (jenis) => {
    setOpen(true);
    setJenis(jenis);
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

  //   react router dom
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Navigasi = () => {
    if (Jenis == 2 || Jenis == 3) {
      message.info("Level masih dalam tahap pengembangan");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        navigate(`/kuis/level-${Jenis}`);
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {IsLoading ? (
        <>
          <div className="body">
            <Loading IsLoading={IsLoading} />
          </div>
        </>
      ) : (
        <>
          <div className="h-screen body flex items-center justify-center">
            <div className="">
              <p className="lg:text-5xl text-xl text-center font-bold text-white font-Silkscreen">
                Silahkan Pilih Level Kuis
              </p>
              <div className="lg:flex lg:flex-row lg:justify-between sm:flex-col lg:mt-24 mt-14">
                <div
                  onClick={() => showModal(1)}
                  className="w-40 h-36 m-auto mt-8 rounded-xl shadow-lg bg-ping flex hover:opacity-75 cursor-pointer items-center justify-center"
                >
                  <p className="text-3xl font-Silkscreen text-white">1</p>
                </div>
                <div
                  onClick={() => showModal(2)}
                  className="w-40 h-36 m-auto mt-8 rounded-xl shadow-lg bg-blue-800 flex hover:opacity-75 cursor-pointer items-center justify-center"
                >
                  <p className="text-3xl font-Silkscreen text-white">2</p>
                </div>
                <div
                  onClick={() => showModal(3)}
                  className="w-40 h-36 m-auto mt-8 rounded-xl shadow-lg bg-red-600 flex hover:opacity-75 cursor-pointer items-center justify-center"
                >
                  <p className="text-3xl font-Silkscreen text-white">3</p>
                </div>
              </div>
            </div>
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
                  {Jenis == 1 ? (
                    <>Level 1</>
                  ) : Jenis == 2 ? (
                    <>Level 2</>
                  ) : Jenis == 3 ? (
                    <>Level 3</>
                  ) : null}
                </p>
                <p className="text-blue-600 text-center text-3xl font-semibold">
                  {Jenis == 1 ? (
                    <>( Gampang )</>
                  ) : Jenis == 2 ? (
                    <>( Sulit )</>
                  ) : Jenis == 3 ? (
                    <>( Sulit Banget )</>
                  ) : null}
                </p>
              </div>
              <div
                onClick={() => Navigasi()}
                className="bg-blue-600 py-2 rounded-lg mt-10 hover:opacity-80 cursor-pointer"
              >
                <p className="text-white font-semibold text-center text-lg">
                  Lanjutkan
                </p>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default PilihLevel;
