export const Card = ({ children, className }) => {
  return (
    // Se cambió el color de fondo de bg-beige-100 a bg-gray-100 para mejor compatibilidad con Tailwind
    <div className={`bg-gray-100 p-10 rounded-md ${className}`}>{children}</div>
  );
};



