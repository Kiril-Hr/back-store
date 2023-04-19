import jwt from "jsonwebtoken";

export default function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({
          message: "Has not auth",
        });
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({
          message: "You have no access",
        });
      }
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({
        message: "Has not auth",
      });
    }
  };
}
