import jwt from "jsonwebtoken";

export const isAuth = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "xyz123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
