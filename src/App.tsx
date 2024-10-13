import backgroundImage from "./assets/rectangle.png";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <AppRoutes />
    </div>
  );
}

export default App;
