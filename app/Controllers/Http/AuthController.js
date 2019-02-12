"use strict";
const User = use("App/Models/User");

class AuthController {
  async login({ request, auth }) {
    const { password, email } = request.post();
    const token = await auth.attempt(email, password);
    return token;
  }
  async register({ request, auth }) {
    const { username, password, email } = request.post();
    const newUser = await User.create({ username, password, email });
    try {
      await newUser.save();
    } catch (e) {
      return e;
    }
    const token = await auth.generate(newUser);
    return token;
  }
}

module.exports = AuthController;
