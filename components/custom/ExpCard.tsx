import Image from "next/image";

type Props = {
  title: string;
  company: string;
  date: string;
  summary: string[];
  srcArr?: string[];
};

const ExpCard = ({ title, company, date, summary, srcArr }: Props) => {
  return (
    <article className="p-10 w-[270px] md:w-[600px] xl:w-[900px] xl:h-[470px] text-xs xl:text-lg flex flex-col flex-shrink-0 rounded-lg items-center space-y-7 bg-gray-900 snap-center hover:bg-opacity-70 cursor-pointer transition-opacity duration-150">
      <div className="px-0 md:px-10">
        <h4 className=" font-light text-xs xl:text-3xl">{title}</h4>
        <p className="font-bold mt-1 text-xs xl:text-2xl">{company}</p>
        <div className="flex space-x-2 my-2">
          {srcArr &&
            srcArr.map((srcImg, index) => (
              <Image
                key={index}
                src={srcImg.toString()}
                alt="react logo"
                width={30}
                height={30}
              />
            ))}
        </div>
        <p className="uppercase py-5 text-cyan-200 text-xs 2xl:text-lg">
          {date}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summary &&
            summary.map((point, index) => (
              <li className="text-xs 2xl:text-md" key={index}>
                {point}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExpCard;
