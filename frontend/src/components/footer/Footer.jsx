import { Link } from "react-router-dom";
import { Container } from "../ui";
import { FaInstagram, FaFacebookF  } from "react-icons/fa"; // importar el ícono de Instagram y Facebook

export const Footer = () => {
  return (
    <nav className="bg-green-200 border-t-2 mt-6">
      <Container className="flex flex-col items-center py-4">
        <Link to="/">
          <ul className="text-center space-y-1">
            <li className="font-bold text-2xl text-black hover:text-green-600 transition-colors duration-300">
              Bouquet Verde
            </li>
            <li className="font-light text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
              contacto@bouquetverde.com
            </li>
            <li className="font-light text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
              Desarrollo: Ever Salinas
            </li>
          </ul>
        </Link>
        {/* Sección de Síguenos */}
        <div className="text-center mt-4">
          <p className="font-medium text-sm text-gray-700">SÍGUENOS:</p>
          <div className="flex gap-4 mt-2 justify-center">
            {/* Íconos de Redes Sociales */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-pink-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};