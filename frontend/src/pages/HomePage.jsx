import { AuthContext } from "../context/AuthProvider";
import { Carrusel } from "../components/ui";
import { useContext } from "react";


export const HomePage = () => {
  const data = useContext(AuthContext);
  console.log(data)

  return (
    <div>

      <div className="hero-section">
      <div className="content">
        <h1 className="text-4xl font-bold">Bouquet Verde</h1>
        <p className="text-lg">Flores para toda ocasión</p>
        {/* <button className="btn-primary">Ver más</button> */}
      </div>
    </div>

    <br></br>

      <br></br>

      <Carrusel />
    </div>

  );
};
