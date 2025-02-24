import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Carrusel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    "https://img.freepik.com/free-photo/woman-florist-her-own-floral-shop-taking-care-flowers_1303-15614.jpg?t=st=1738310968~exp=1738314568~hmac=5123c95da470c2124780a0c30856b2cda4bcc5a3328e56f0fe3e4e1d29d064ba&w=1380",
    "https://img.freepik.com/free-photo/woman-gardner-greenhouse_1303-14062.jpg?t=st=1738311070~exp=1738314670~hmac=e82944dc291257d15451aaa30f1d57348a98bd3424d848ea0560ca2cb0eeae08&w=1380",
    "https://img.freepik.com/free-photo/man-florist-working-green-house_1303-29992.jpg?t=st=1738311207~exp=1738314807~hmac=b9a8ffaab8948c1c9f12b4c0e46fde8a761785371b7d3578274329ed97195097&w=1380",
    "https://img.freepik.com/free-photo/close-up-beautiful-florist-woman_23-2149215305.jpg?t=st=1738311317~exp=1738314917~hmac=a93f8ca05832d28af10b6d63fc5e5830747c3206fb85843daa3fd77d0062f5b5&w=1380",
    "https://img.freepik.com/free-photo/asian-elderly-couple-making-bouquet-flowers-wooden-table-kitchen-home_7861-1578.jpg?t=st=1738311356~exp=1738314956~hmac=8b278454a4fb715925a084eff7a1dd3ac01ae6fba86d67b4ddc8b1ba3904c106&w=1380",
  ];

  return (
    <div>
      <Carousel responsive={responsive}>
      {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carrusel item ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
