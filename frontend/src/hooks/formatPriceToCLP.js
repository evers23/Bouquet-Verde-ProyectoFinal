export const formatPriceToCLP = (price) => {
    if (price == null) {
      return "Precio no disponible";
    }
    const roundedPrice = Math.floor(price);
    return `$${roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };