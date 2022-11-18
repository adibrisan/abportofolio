import { TbMapPin } from "react-icons/tb";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-200">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-cyan-200">
              Let&apos;s create something great&ensp;!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="flex w-[100%] xsm:flex-col">
                <div className="p-2 w-1/2 xsm:w-[100%]">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 xsm:w-[100%]">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-cyan-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-cyan-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send Email
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <div className="flex justify-center items-center">
                  <AiOutlineMail
                    className="mr-[5px]"
                    color="#66BFBF"
                    size={20}
                  />
                  <span className="text-cyan-200">adi.brisan@yahoo.com</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex">
                    <TbMapPin
                      className="mt-[20px] mr-[5px]"
                      color="#66BFBF"
                      size={20}
                    />
                    <p className="leading-normal my-5 text-cyan-100">
                      Timisoara
                      <br />
                      Romania
                    </p>
                  </div>
                  <div className="flex">
                    <AiOutlinePhone
                      className="mt-[20px] mr-[5px]"
                      color="#66BFBF"
                      size={20}
                    />
                    <p className="leading-normal my-5 text-cyan-100">
                      +40&ensp;770260451
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
