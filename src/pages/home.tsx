import backgroundImage from "../assets/bg1.png"; // Import your image
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div
      className="bg-cover min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <Navbar />
      </div>
    </div>
  );
}
