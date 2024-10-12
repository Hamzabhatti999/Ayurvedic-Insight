import backgroundImage from "../assets/rectangle.png";
import homeImage from "../assets/Rectangle 4.png";
import homeImage1 from "../assets/splash.png";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Navbar />

      <div className="container mx-auto mt-20">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="md:w-2/5 text-balance px-20">
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
          <div className="lg:w-1/2 px-10 lg:px-0 flex flex-col lg:flex-row">
            <img src={homeImage} alt="Ayurveda image" className="h-[400px]" />
            <img src={homeImage1} alt="Ayurveda image" className="h-96 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
