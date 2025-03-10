export const Container = ({ children, className }) => {
  return <div className={"max-w-7xl px-4 mx-auto " + className}>{children}</div>;
};
