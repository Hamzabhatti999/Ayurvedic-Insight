import backgroundImage from "../assets/rectangle.png";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container"></div>
    </div>
  );
}
