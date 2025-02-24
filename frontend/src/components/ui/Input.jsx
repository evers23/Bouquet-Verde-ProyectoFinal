import { forwardRef } from "react";
/* eslint-disable */
export const Input = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      className="bg-white px-3 py-2 block my-2 w-full"
      ref={ref}
      {...props}
    />
  );
});