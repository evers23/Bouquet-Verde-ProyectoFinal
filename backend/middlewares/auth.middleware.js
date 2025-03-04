import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estas autorizado",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No estas autorizado",
      });

    req.userId = decoded.id; // Store the decoded user ID
    next();
  });
};
