import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

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
    <div className="h-screen body flex justify-center items-center">
      {IsLoading ? (
        <>
          <Loading IsLoading={IsLoading} />
        </>
      ) : (
        <>
          <div className="w-10/12 lg:w-5/12 bg-white p-6">
            <div className="">
              <p className="text-red-600 font-semibold text-2xl mb-5">
                Peraturan :
              </p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita optio libero modi nulla, quos minima nostrum voluptate
                reprehenderit rerum sunt similique. Impedit, perferendis
                voluptatibus. Reprehenderit quia distinctio maxime perspiciatis
                dolore veritatis quas, ea mollitia quaerat deserunt repellat
                debitis corrupti sequi, tempora in consequuntur excepturi eius
                quibusdam necessitatibus sed nemo sunt numquam error veniam.
                Culpa nulla quasi veniam dolor cupiditate iusto corporis
                voluptatibus, facilis ea iste explicabo ullam quibusdam maxime,
                voluptatem laborum atque repellat. In animi magni quod, ab nobis
                ad veniam, architecto odio blanditiis excepturi ex sint libero
                quae molestiae molestias id recusandae quam consequatur
                voluptate consequuntur voluptatibus illum quos!
              </p>
            </div>

            <div className="flex justify-end mt-7">
                <div onClick={() => Navigasi()} className="bg-green-600 cursor-pointer hover:opacity-90 rounded-md py-1 w-20">
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
