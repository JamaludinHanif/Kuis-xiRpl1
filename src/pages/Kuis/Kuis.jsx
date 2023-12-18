import { useState, useEffect } from "react";
import { Progress, Spin, message } from "antd";
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

  // session storage
  const name = sessionStorage.getItem("nama");
  const kelas = sessionStorage.getItem("kelas");

  // state
  const [Progres, setProgres] = useState(0);
  const [IsLoading2, setIsLoading2] = useState(false);
  const [Array, setArray] = useState(0);
  const [Akurasi, setAkurasi] = useState(0);
  const [Nomor, setNomor] = useState(1);
  const [Point, setPoint] = useState(0);
  const [Jawaban, setJawaban] = useState("");

  const [Data, setData] = useState([]);

  const getLevel = (param) => {
    if (param == "level-1") {
      setData(Data1);
    } else if (param == "level-2") {
      setData(Data2);
    } else if (param == "level-3") {
      setData(Data3);
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
        setProgres(Progres + 6.7);
        setArray(Array + 1);
        setAkurasi(Akurasi + 1);
        setNomor(Nomor + 1);
        setPoint(Point + Data?.[Array]?.point);
        setJawaban("");
        console.warn("benar");
        Swal.fire({
          title: `Jawaban Kamu Benar`,
          html: `Skor kamu + ${Data?.[Array]?.point} <br><br> Jawaban yang Benar adalah ${Data?.[Array]?.jawaban}`,
          width: 600,
          timer: 2000,
          timerProgressBar: true,
          padding: "2em",
          showConfirmButton: false,
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWFzMGFkamF3NHh2Z3Zmd3R4OTFocDY4MXJ0OGdibTAyZ2NwazgyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Jen9ZDvhrJabcI8ppu/giphy.gif")
              left top
              no-repeat
            `,
        });
      } else {
        setProgres(Progres + 6.7);
        setArray(Array + 1);
        setAkurasi(Akurasi + 0);
        setNomor(Nomor + 1);
        setPoint(Point - 3);
        setJawaban("");
        console.warn("salah");
        Swal.fire({
          title: `Jawaban Kamu Salah`,
          html: `Skor kamu - ${3} <br><br> Jawaban yang Benar adalah ${Data?.[Array]?.jawaban}`,
          width: 600,
          timer: 3000,
          timerProgressBar: true,
          padding: "2em",
          showConfirmButton: false,
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXB4b2ZncDZiOHR5aWtidG16cXJiNHJsejg3Mm9taWU5a2NkdWkydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iHWzgA65wDpNOq9sK7/giphy.gif")
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
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="body h-screen py-14">
        <div className="w-9/12 m-auto">
          <div className="flex w-full flex-row justify-center items-center">
            <div className="bg-primary3 font-Silkscreen w-1/3 text-xl text-white font-semibold p-4">
              <p className="">Nama : {name}</p>
              <p className="">Kelas : {kelas}</p>
              <p className="">Skor Kamu : {Point}</p>
            </div>

            <div className="w-1/3 font-Silkscreen flex flex-col items-center justify-center mx-auto">
              <p className="text-white font-semibold text-xl mb-4">Progress</p>
              <Progress
                type="circle"
                style={{ color: "white" }}
                trailColor="black"
                percent={Progres}
              />
            </div>

            <div className="w-1/3 flex flex-col items-center justify-end mx-auto">
              <p className="text-white font-Silkscreen font-semibold text-xl mb-4">
                Selesaikan Dalam :
              </p>
              <CountdownApp Akurasi={Akurasi} Point={Point} Level={level} />
            </div>
          </div>

          <div className="flex justify-center items-center">
            {Nomor > 15 ? (
              <>
                <div className="w-4/12 mt-20 bg-ping p-6">
                  <p className="font-semibold text-biru text-center text-xl">
                    Kuis Selesai
                  </p>
                  <p className="text-center my-2 text-lg">
                    Terimakasih Sudah Mengikuti Kuis Ini, Bahagia selalu yaa
                  </p>
                  <div
                    onClick={() => done()}
                    className="bg-blue-600 hover:opacity-80 cursor-pointer mt-5 py-2 flex flex-row justify-center items-center"
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
                <div className="w-4/12 mt-20 bg-kotak opacity-95 text-white p-6">
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
                    <div className="h-7 w-1/12 border border-white rounded-full mb-3 flex items-center justify-center">
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
                        required
                        placeholder="Masukan Jawaban Yang Menurut Kamu Benar.."
                        value={Jawaban}
                        onChange={(e) => setJawaban(e.target.value)}
                        className="w-full text-sm bg-ungu rounded-lg outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm disabled:bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 py-3 px-2 lg:p-3"
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
