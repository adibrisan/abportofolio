import { useState, FormEvent } from "react";
import { TbMapPin } from "react-icons/tb";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useTranslation } from "next-i18next";

type Props = {};

const Contact = (props: Props) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = `mailto:adrianbrisan.dev@gmail.com?body=Hi, my name is ${name}. 
     ${message} (${email})`;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="lg:text-3xl text-md font-medium title-font mb-4 text-cyan-200">
              {t("common:contactMe")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-cyan-200">
              {t("common:contactMeSubtitle")}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="flex w-[100%] xsm:flex-col">
                <div className="p-2 w-1/2 xsm:w-[100%]">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm smm:text-xs text-cyan-200"
                    >
                      {t("common:name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 xsm:w-[100%]">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm smm:text-xs text-cyan-200"
                    >
                      {t("common:email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm smm:text-xs text-cyan-200"
                  >
                    {t("common:message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 smm:h-[70px] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gray-600 border-0 py-2 px-8 smm:py-1 smm:px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg smm:text-sm">
                  {t("common:send")}
                </button>
              </div>
              <div className="flex smm:flex-col smm:items-center justify-center p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <div className="flex justify-center items-center mr-[200px] smm:mr-0">
                  <AiOutlineMail
                    className="mr-[5px]"
                    color="#66BFBF"
                    size={20}
                  />
                  <span className="text-cyan-200">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:adrianbrisan.dev@gmail.com"
                    >
                      adrianbrisan.dev@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="smm:flex smm:items-center">
                    <div className="flex smm:mr-[10px]">
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
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="tel: +40770260451"
                        >
                          +40&ensp;770&ensp;260&ensp;451
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
