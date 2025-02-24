export const Label = ({ children, htmlFor }) => {
  return (
    <label
      className="black text-sm font-medium text-grey-400"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
