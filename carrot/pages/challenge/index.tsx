import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative pointer-events-auto flex min-h-screen flex-col justify-center overflow-hidden bg-blue-100 font-['Noto_sans']">
      <div className="relative h-[900px] mx-auto my-8 w-[600px] rounded-3xl bg-white px-10 pt-8 shadow-xl bg-pink-200 border-2 border-b-[6px] border-r-[6px] border-black">
        <h1 className="text-center mt-8 mb-16 text-3xl font-extrabold">
          Job Application Form
        </h1>

        <form>
          <div className="mb-8">
            <h2 className="text-xl font-extrabold">
              What department do you want to work for?
            </h2>
            <div className="my-2">
              <input type="radio" name="department" value="sales" />
              <label className="font-bold mx-2" htmlFor="sales">
                Sales
              </label>
            </div>
            <div className="my-2">
              <input type="radio" name="department" value="marketing" />
              <label className="font-bold mx-2" htmlFor="marketing">
                Marketing
              </label>
            </div>
            <div className="my-2">
              <input type="radio" name="department" value="accounting" />
              <label className="font-bold mx-2" htmlFor="accounting">
                Accounting
              </label>
            </div>
            <div className="my-2">
              <input type="radio" name="department" value="service" />
              <label className="font-bold mx-2" htmlFor="service">
                Cunstomer Service
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-extrabold">
              Why do you want to join this company?
            </h2>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-extrabold">Salary</h2>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-extrabold">Introduce your self</h2>
          </div>
        </form>
        <div className="mb-6">
          <h2 className="text-xl font-extrabold">
            Tell us what your dreams are
          </h2>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-extrabold">Email</h2>
        </div>
        <button
          className="rounded-2xl text-lg font-extrabold w-full 
        px-24 py-6 shadow-xl bg-yellow-300 hover:bg-yellow-100 border-2 
        border-b-[6px] border-r-[6px] border-black focus:border-[2px] 
        focus:border-t-[6px] focus:border-l-[6px] focus:bg-sky-200"
        >
          Give me this job
        </button>
      </div>
    </div>
  );
};

export default Home;
