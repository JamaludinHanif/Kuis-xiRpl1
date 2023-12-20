import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./style.css";
import { message } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 16,

      color: "white",
    }}
    spin
  />
);

const Login = () => {
  // react router dom
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //   STATE
  const [Nama, setNama] = useState();
  const [Kelas, setKelas] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const [IsLoading2, setIsLoading2] = useState(false);

  const getUser = () => {
    fetch("https://sheetdb.io/api/v1/i5ndj7belunji")
      .then((response) => response.json())
      .then((data) => console.log("ini user", data));
  };

  const createUser = () => {
    fetch("https://sheetdb.io/api/v1/i5ndj7belunji", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            nama: `${Nama}`,
            kelas: `${Kelas}`,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  //   function login
  const login = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
      if (
        Nama == undefined ||
        Nama == "" ||
        Kelas == undefined ||
        Kelas == ""
      ) {
        message.warning("Silahkan isi data dengan lengkap");
      } else {
        sessionStorage.setItem("nama", Nama);
        sessionStorage.setItem("kelas", Kelas);
        createUser();
        setIsLoading(true);
        setTimeout(() => {
          navigate("/rules");
          setIsLoading(false);
        }, 2000);
      }
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUser();
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
              <p className="text-center font-bold lg:text-4xl text-2xl text-white">
                Masukan Data Kalian
              </p>
            </div>
            <div className="w-full m-auto lg:w-10/12 bg-kotak rounded-xl pt-6 pb-6 px-6">
              <p className="text-center w-16 m-auto font-semibold text-white mb-9 pb-0.5 border-b-4 border-white">
                Login
              </p>
              <form onSubmit={() => login()}>
                <div className="">
                  <input
                    type="text"
                    // required
                    placeholder="Masukan Nama Lengkap Kamu"
                    value={Nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full bg-ungu text-sm rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
                  />
                </div>{" "}
                <div className="mt-3">
                  <input
                    type="text"
                    // required
                    placeholder="Masukan Kelas Kamu"
                    value={Kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    className="w-full bg-ungu text-sm rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
                  />
                </div>{" "}
                <div className="w-32 mx-auto">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      login();
                    }}
                    type="submit"
                    className="bg-blue-600 w-full hover:opacity-80 rounded-lg cursor-pointer mt-10 py-2 flex justify-center items-center flex-row"
                  >
                    <p className="text-center font-semibold text-white">
                      Login
                    </p>
                    {IsLoading2 ? (
                      <>
                        <Spin indicator={antIcon} className="ml-7" />
                      </>
                    ) : null}
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
