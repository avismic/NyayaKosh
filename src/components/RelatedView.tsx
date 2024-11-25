import Link from "next/link";
import Image from "next/image";

const RelatedCard = () => {
  return (
    <div className="flex flex-col md:flex-row shadow-lg p-4 items-start w-full">
      <div className="relative md:w-[50%] w-full h-[150px] sm:h-[300px] md:h-[150px] lg:h-[100px] mr-2">
        <Image src="/test.jpg" className="" alt="kuch bhi" fill={true} />
      </div>
      <div className="md:w-[50%] w-full mt-6 md:mt-0">
        <Link
          href="/"
          className="line-clamp-3 hover:underline md:text-sm lg:text-base font-semibold"
        >
          The Impact of Generative AI on Intellectual Property Rights in India
        </Link>
        <p className="text-gray-600">by avi</p>
      </div>
    </div>
  );
};
const RelatedCardView = () => {
  return (
    <>
      <div className="">
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
      </div>
    </>
  );
};

export default RelatedCardView;
