"use strict";
const User = use("App/Models/User");

class UserController {
  userInfo({ auth }) {
    return auth.user;
  }
}

module.exports = UserController;
