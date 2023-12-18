import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./style.css";
import { message } from "antd";

const Login = () => {
  // react router dom
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //   STATE
  const [Nama, setNama] = useState();
  const [Kelas, setKelas] = useState();
  const [IsLoading, setIsLoading] = useState(false);

  //   function login
  const login = () => {
    if (Nama == undefined || Nama == "" || Kelas == undefined || Kelas == "") {
      message.warning("Silahkan isi data dengan lengkap");
    } else {
      sessionStorage.setItem("nama", Nama);
      sessionStorage.setItem("kelas", Kelas);
      setIsLoading(true);
      setTimeout(() => {
        navigate("/rules");
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-screen body flex justify-center items-center">
      {IsLoading ? (
        <>
          <Loading IsLoading={IsLoading} />
        </>
      ) : (
        <>
          <div className="text-white">
            <div className="font-Silkscreen mb-16">
              <p className="text-center font-bold text-4xl text-white">
                Masukan Data Kalian
              </p>
            </div>
            <div className="w-10/12 m-auto lg:w-10/12 bg-kotak rounded-xl pt-6 pb-6 px-6">
              <p className="text-center w-16 m-auto font-semibold text-white mb-9 pb-0.5 border-b-4 border-white">
                Login
              </p>
              <form onSubmit={() => login()}>
                <div className="">
                  <input
                    type="text"
                    required
                    placeholder="Masukan Nama Lengkap Kamu"
                    value={Nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full bg-ungu text-sm rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
                  />
                </div>{" "}
                <div className="mt-3">
                  <input
                    type="text"
                    required
                    placeholder="Masukan Kelas Kamu"
                    value={Kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    className="w-full bg-ungu text-sm rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
                  />
                </div>{" "}
                <div className="w-24 mx-auto">
                  <button
                    onClick={() => login()}
                    type="submit"
                    className="bg-blue-600 w-full hover:opacity-80 rounded-lg cursor-pointer mt-10 py-2"
                  >
                    <p className="text-center font-semibold text-white">
                      Login
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
