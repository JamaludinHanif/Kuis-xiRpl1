import { useState, useEffect } from "react";
import { Progress, Spin, message, notification } from "antd";
import { Data1 } from "../../API/Data1";
import { Data2 } from "../../API/Data2";
import { Data3 } from "../../API/Data3";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";
import "./style.css";
import CountdownApp from "../../components/CountDown/CountDown";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 16,

      color: "white",
    }}
    spin
  />
);

const Kuis = () => {
  // react rouer dom
  const navigate = useNavigate();
  const { level } = useParams();
  console.log("ini param", level);
  const { pathname } = useLocation();

  // notif pas
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Mau Nyerah / PAS ?`,
      description: 'ketik "Gak tau" atau "Pas", kalau mau Nyerah/Pas',
      placement,
    });
  };

  // session storage
  const name = sessionStorage.getItem("nama");
  const kelas = sessionStorage.getItem("kelas");

  // state
  const [Progres, setProgres] = useState(0);
  const [IsLoading2, setIsLoading2] = useState(false);
  const [Minus, setMinus] = useState(0);
  const [Array, setArray] = useState(0);
  const [Akurasi, setAkurasi] = useState(0);
  const [Nomor, setNomor] = useState(1);
  const [Point, setPoint] = useState(0);
  const [Jawaban, setJawaban] = useState("");
  const [Timer, setTimer] = useState(0);

  const [Data, setData] = useState([]);

  const getLevel = (param) => {
    if (param == "level-1") {
      setData(Data1);
      setMinus(2);
      setPoint(5);
      setTimer(360);
    } else if (param == "level-2") {
      setData(Data2);
      setMinus(2);
      setPoint(8);
      setTimer(300);
    } else if (param == "level-3") {
      setData(Data3);
      setMinus(3);
      setPoint(8);
      setTimer(300);
    } else {
      console.error("gagal");
    }
  };

  console.warn("ini contoh ", Data);
  console.log("ini jawaban", Jawaban);
  console.log("ini Progres", Progres);
  console.log("ini Point", Point);
  console.log("ini Array", Array);
  console.log("ini Nomor", Nomor);

  // function
  const kirim = (response) => {
    const answer = response.replace(/\s/g, "").trim().toLowerCase();

    if (Jawaban == undefined || Jawaban == "") {
      message.warning("silahkan isi jawaban kamu");
    } else {
      setIsLoading2(true);
      setTimeout(() => {
        setIsLoading2(false);
        if (
          answer == Data?.[Array]?.jawaban ||
          answer == Data?.[Array]?.jawaban2
        ) {
          setProgres(Progres + 7);
          setArray(Array + 1);
          setAkurasi(Akurasi + 1);
          setNomor(Nomor + 1);
          setPoint(Point + Data?.[Array]?.point);
          setJawaban("");
          console.warn("benar");
          Swal.fire({
            title: `Jawaban Kamu Benar`,
            html: `Skor kamu + ${Data?.[Array]?.point} <br><br> Jawaban yang Benar adalah <b>${Data?.[Array]?.jawaban}</b>`,
            width: 500,
            timer: 2500,
            timerProgressBar: true,
            padding: "2em",
            showConfirmButton: false,
            color: "#198754",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("")
              left top
              no-repeat
            `,
          });
        } else if (answer == "gaktau" || answer == "pas") {
          setProgres(Progres + 7);
          setArray(Array + 1);
          setAkurasi(Akurasi + 0);
          setNomor(Nomor + 1);
          setPoint(Point - 1);
          setJawaban("");
          console.warn("pasrah");
          Swal.fire({
            title: `Kok nyerah ??`,
            html: `Skor kamu - 1 <br><br> Jawaban yang Benar adalah <b>${Data?.[Array]?.jawaban}</b>`,
            width: 500,
            timer: 2500,
            timerProgressBar: true,
            padding: "2em",
            showConfirmButton: false,
            color: "#ffc107",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("")
              left top
              no-repeat
            `,
          });
        } else {
          setProgres(Progres + 7);
          setArray(Array + 1);
          setAkurasi(Akurasi + 0);
          setNomor(Nomor + 1);
          setPoint(Point - Minus);
          setJawaban("");
          console.warn("salah");
          Swal.fire({
            title: `Jawaban Kamu Salah`,
            html: `Skor kamu - ${Minus} <br><br> Jawaban yang Benar adalah <b>${Data?.[Array]?.jawaban}</b>`,
            width: 500,
            timer: 2500,
            timerProgressBar: true,
            padding: "2em",
            showConfirmButton: false,
            color: "#dc3545",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("")
              left top
              no-repeat
            `,
          });
        }
      }, 1000);
    }

    console.log("ini jawabn yang benar", Data?.[Array]?.jawaban);
    console.log("ini point dari Data", Data?.[Array]?.point);
    // console.log("ini level soal", level1?.[0]?.soal);
  };

  // navigate function
  const done = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
      navigate("/hasil", {
        state: {
          akurasi: Akurasi,
          skor: Point,
          level: level,
        },
      });
    }, 2000);
  };

  console.log("ini", Data);

  useEffect(() => {
    getLevel(level);
    openNotification("topLeft");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="body h-screen lg:py-14 pt-5">
        <div className="lg:w-9/12 w-11/12 m-auto">
          {contextHolder}
          <div className="lg:flex flex flex-col w-full lg:flex-row justify-center items-center">
            <div className="bg-primary3 font-Silkscreen lg:w-1/3 w-full lg:text-xl text-white font-semibold p-4">
              <p className="">Nama : {name}</p>
              <p className="">Kelas : {kelas}</p>
              <p className="">Skor Kamu : {Point}</p>
            </div>

            <div className="w-1/3 font-Silkscreen lg:flex hidden flex-col items-center justify-center mx-auto">
              <p className="text-white font-semibold text-xl mb-4">Progress</p>
              <Progress
                type="circle"
                style={{ color: "white" }}
                trailColor="black"
                className="text-white"
                percent={Progres}
              />
            </div>

            <div className="flex lg:hidden flex-row w-full justify-between mt-8 items-center">
              <div className="w-1/3 font-Silkscreen flex lg:hidden flex-col items-center justify-center mx-auto">
                <p className="text-white font-semibold text-xl mb-4">
                  Progress
                </p>
                <Progress
                  type="circle"
                  style={{ color: "white" }}
                  trailColor="white"
                  percent={Progres}
                  size={60}
                />
              </div>
              <div className="w-1/3 flex lg:hidden items-center mx-auto">
                {/* <p className="text-white font-Silkscreen font-semibold text-xl mb-4">
                  Selesaikan Dalam :
                </p> */}
                <CountdownApp Akurasi={Akurasi} Point={Point} Level={level} />
              </div>
            </div>

            <div className="w-1/3 lg:flex hidden flex-col items-center justify-end mx-auto">
              <p className="text-white font-Silkscreen font-semibold text-xl mb-4">
                Selesaikan Dalam :
              </p>
              <CountdownApp Akurasi={Akurasi} Point={Point} Level={level} />
            </div>
          </div>

          <div className="flex justify-center items-center">
            {Nomor > 15 ? (
              <>
                <div className="lg:w-4/12 w-11/12 mt-20 bg-kotak rounded-lg p-6">
                  <p className="font-semibold text-white text-center text-xl">
                    Kuis Selesai
                  </p>
                  <p className="text-center text-slate-100 my-2 text-lg">
                    Terimakasih Sudah Mengikuti Kuis Ini
                  </p>
                  <div
                    onClick={() => done()}
                    className="bg-blue-600 hover:opacity-80 cursor-pointer mt-10 rounded-lg py-2 flex flex-row justify-center items-center"
                  >
                    <p className="text-center font-semibold text-white">
                      Lihat Hasil
                    </p>
                    {IsLoading2 ? (
                      <>
                        <Spin indicator={antIcon} className="ml-7" />
                      </>
                    ) : null}
                  </div>{" "}
                </div>
              </>
            ) : (
              <>
                <div className="lg:w-4/12 w-11/12 lg:mt-20 mt-10 bg-kotak opacity-95 text-white p-6">
                  <p className="font-semibold text-white mb-4 border-b-4 inline-block">
                    {Data?.[Array]?.type == 1 ? (
                      <>Pertanyaan Pengetahuan Umum :</>
                    ) : Data?.[Array]?.type == 2 ? (
                      <>Pertanyaan Teka Teki :</>
                    ) : Data?.[Array]?.type == 3 ? (
                      <>Pertanyaan Doang :</>
                    ) : null}
                  </p>
                  <div className="flex flex-row justify-between">
                    <div className="h-7 w-1/12 px-3 lg:px-0 border border-white rounded-full mb-3 flex items-center justify-center">
                      <p className="font-semibold text-sm">
                        {Data?.[Array]?.id}
                      </p>
                    </div>
                    <p className="w-10/12 font-semibold">
                      <>{Data?.[Array]?.soal}</>
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      kirim(Jawaban);
                    }}
                  >
                    <div className="mt-5">
                      <input
                        type="text"
                        // required
                        placeholder="Masukan Jawaban Yang Menurut Kamu Benar.."
                        value={Jawaban}
                        onChange={(e) => setJawaban(e.target.value)}
                        className="w-full text-sm bg-ungu rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs lg:placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
                      />
                    </div>{" "}
                    <button
                      onClick={() => kirim(Jawaban)}
                      type="submit"
                      className="bg-blue-600 w-full hover:opacity-80 rounded-lg cursor-pointer mt-5 py-3 flex flex-row justify-center items-center"
                    >
                      <p className="text-center font-semibold text-white">
                        Kirim
                      </p>
                      {IsLoading2 ? (
                        <>
                          <Spin indicator={antIcon} className="ml-7" />
                        </>
                      ) : null}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kuis;
