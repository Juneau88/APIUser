export const UserAuth = (req, res, next) => {
    if (!req.body.username ||!req.body.age ||!req.body.email ||!req.body.password) {
      return res.status(400).json({ error: "Invalid user data" });
    }
    next();
  };