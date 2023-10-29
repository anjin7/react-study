import React from "react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface AppForm {
  department: string;
  why: string;
  introduce: string;
  dreams: string;
  email: string;
  errors?: string;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AppForm>();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (_data: AppForm) => {
    setSubmitted(true);
  };

  return (
    <div className="relative pointer-events-auto flex min-h-screen flex-col justify-center overflow-hidden bg-blue-100 font-['Noto_sans']">
      <div className="relative mx-auto my-8 h-[1300px] w-[640px] rounded-3xl bg-white px-10 pt-8 shadow-xl bg-pink-200 border-2 border-b-[6px] border-r-[6px] border-black">
        <h1 className="text-center mt-8 mb-12 text-3xl font-extrabold">
          Job Application Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <div className="flex">
              <h2 className="text-xl font-extrabold">
                What department do you want to work for?
              </h2>
              <span className="font-bold text-red-600 mx-3">
                {errors.department?.message}
              </span>
            </div>
            <div className="my-2">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio"
                name="department"
                value="sales"
                id="sales"
              />
              <label className="font-bold mx-2" htmlFor="sales">
                Sales
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio"
                name="department"
                value="marketing"
                id="marketing"
              />
              <label className="font-bold mx-2" htmlFor="marketing">
                Marketing
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio"
                name="department"
                value="accounting"
                id="accounting"
              />
              <label className="font-bold mx-2" htmlFor="accounting">
                Accounting
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio"
                name="department"
                value="service"
                id="service"
              />
              <label className="font-bold mx-2" htmlFor="service">
                Cunstomer Service
              </label>
            </div>
          </div>

          <div className="my-8">
            <div className="flex">
              <h2 className="text-xl font-extrabold">
                Why do you want to join this company?
              </h2>
              <span className="font-bold text-red-600 mx-3">
                {errors.why?.message}
              </span>
            </div>

            <div className="my-2">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio"
                name="why"
                value="money"
                id="money"
              />
              <label className="font-bold mx-2" htmlFor="money">
                I want money!
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio"
                name="why"
                value="love"
                id="love"
              />
              <label className="font-bold mx-2" htmlFor="love">
                I love this company
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio"
                name="why"
                value="learn"
                id="learn"
              />
              <label className="font-bold mx-2" htmlFor="learn">
                I want to learn
              </label>
            </div>
            <div className="my-2">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio"
                name="why"
                value="why"
                id="why"
              />
              <label className="font-bold mx-2" htmlFor="why">
                I don&#39;t know why
              </label>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-extrabold my-2">Salary</h2>
            <select className="w-full border-black border-[2px] rounded-lg px-3 py-1 font-bold">
              <option value="50K">$50K</option>
              <option value="100K">$100K</option>
              <option value="150K">$150K</option>
              <option value="200K">$200K</option>
            </select>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-extrabold my-2">Introduce your self</h2>
            <input
              {...register("introduce", {
                required: "Please write down your introduction"
              })}
              type="text"
              id="introduce"
              className="w-full border-black border-[2px] rounded-lg px-3 py-1 font-bold"
            />
            <div className="font-bold text-red-600 empty:h-[24px]">
              {errors.introduce?.message}
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-extrabold my-2">
              Tell us what your dreams are
            </h2>
            <textarea
              {...register("dreams", {
                required: "Please tell us your dreams",
                minLength: {
                  message: "Please write more than 10 characters",
                  value: 10
                }
              })}
              id="dreams"
              className="h-40 w-full border-black border-[2px] rounded-lg px-3 py-1 font-bold"
            />
            <div className="font-bold text-red-600 empty:h-[24px]">
              {errors.dreams?.message}
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-extrabold">Email</h2>
            <input
              {...register("email", {
                required: "Please write down your email.",
                validate: {
                  naver: (value) =>
                    value.includes("@naver.com") ||
                    "Only @naver mail is allowed."
                }
              })}
              type="email"
              id="email"
              className="w-full border-black border-[2px] rounded-lg px-3 py-1 font-bold"
            />
            <div className="font-bold text-red-600 empty:h-[24px]">
              {errors.email?.message}
            </div>
          </div>

          <input
            type="submit"
            value="Give me this job"
            className="relative rounded-2xl text-lg font-extrabold w-full 
        px-24 py-6 shadow-xl bg-yellow-300 hover:bg-yellow-200 border-2 
        border-b-[6px] border-r-[6px] border-black active:border-[2px] 
        active:border-t-[6px] active:border-l-[6px] active:bg-sky-100 duration-[60ms]"
          />
        </form>
        <div className="font-bold my-6 text-center">
          {submitted ? "Thank you" : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
