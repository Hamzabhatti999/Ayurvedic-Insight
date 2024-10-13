import homeImage from "../assets/Rectangle 4.png";
import homeImage1 from "../assets/splash.png";
import homeImage2 from "../assets/Ellipse.png";
export default function Home() {
  return (
    <div>
      <div className="pt-20">
        <div className="flex flex-col px-8 sm:px-20 gap-4 md:flex-row justify-between items-center">
          <div className="md:w-2/5 text-balance ">
            <h1 className="text-5xl font-extrabold text-black">
              Discover Harmony and Healing with{" "}
              <span className="text-lime-500">Ayurveda</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 font-medium">
              Ayurveda views health and well-being as a delicate balance between
              the body, mind, and spirit. It emphasizes the importance of
              maintaining this balance to achieve optimal health.
            </p>
          </div>
          <div className="xl:w-1/2 flex flex-col mt-10 lg:mt-0 lg:gap-8 lg:flex-row">
            <img src={homeImage} alt="Ayurveda image" className=" h-[400px]" />
            <img src={homeImage1} alt="Ayurveda image" className="h-96 mt-8" />
            <div className="absolute">
              <img
                src={homeImage2}
                alt="Ayurveda image"
                className="relative h-64 top-80 lg:top-20 lg:right-0 lg:left-2/3 lg:bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
