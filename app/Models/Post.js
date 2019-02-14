"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Post extends Model {
  drug() {
    return this.hasOne("App/Models/Drug");
  }
  event() {
    return this.hasOne("App/Models/Event");
  }
  food() {
    return this.hasOne("App/Models/Food");
  }
  Memo() {
    return this.hasOne("App/Models/Memo");
  }
  symptom() {
    return this.hasOne("App/Models/symptom");
  }
  user() {
    return this.hasOne("App/Models/user");
  }
}

module.exports = Post;
