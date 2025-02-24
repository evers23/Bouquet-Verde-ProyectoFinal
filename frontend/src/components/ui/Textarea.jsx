import { forwardRef } from "react";
/* eslint-disable */
export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      className="bg-white-800 px-3 py-2 block my-2 w-full"
      ref={ref}
      {...props}
    >
      {props.children}
    </textarea>
  );
});
