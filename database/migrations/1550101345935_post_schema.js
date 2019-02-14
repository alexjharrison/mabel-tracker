"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
  up() {
    this.create("posts", table => {
      table.increments();
      table
        .integer("drug_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("drugs");
      table
        .integer("event_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("events");
      table
        .integer("food_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("foods");
      table
        .integer("memo_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("memos");
      table
        .integer("symptom_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("symptoms");
      table
        .integer("user_id")
        .nullable()
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("notes");
      table.dateTime("started_at");
      table.dateTime("ended_at");
      table.dateTime("occurred_once_at");
      table.timestamps();
    });
  }

  down() {
    this.drop("posts");
  }
}

module.exports = PostSchema;
