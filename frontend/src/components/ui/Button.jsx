export const Button = ({ children, className, ...props }) => {
  return (
    <button className="relative inline-flex items-center gap-x-1.5 rounded-md
    bg-red-700 px-3 py-1.5 text-sm font-semibold text-white shadow-sm
    hover:bg-red-600 focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-red-500
    disabled:opacity-50 disabled:cursor-not-allowed ${className}">
    {children}
  </button>
  

  );
};
