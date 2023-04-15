import { User } from "../models/models.js";
import ApiError from "../error/ApiError.js";

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Has not set ID"));
    }
    res.json(id);
  }
}

export default new UserController();
