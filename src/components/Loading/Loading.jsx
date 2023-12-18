import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
  // const [visible, setVisible] = useState(IsLoading);

  // useEffect(() => {
  //   setVisible(IsLoading);

  //   const timeout = setTimeout(() => {
  //     setVisible(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [IsLoading]);

  return (
    <>
      <div className="fixed inset-0 z-50 text-xl font-Silkscreen text-white flex flex-col items-center justify-center bg-transparent bg-opacity-50">
        <PacmanLoader color="#36d7b7"  />{" "}
        <p className="mt-16 mb-4">
          Loading ...
        </p>
        <p className="">
          Harap tunggu sebentar
        </p>
      </div>
    </>
  );
};

export default Loading;
