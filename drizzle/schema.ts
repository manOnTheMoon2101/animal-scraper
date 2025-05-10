import {
  text,
  boolean,
  pgTable,
  timestamp,
  serial,
  integer,
} from "drizzle-orm/pg-core";

export const animals = pgTable("animals", {
  id: text("id").primaryKey(),
  name: text("name"),
  type: text("type"),
  animalType: text("animalType"),
  details: text("details"),
  age: integer("age"),
  ageDate: text("ageDate"),
  image: text("image"),
  adopted: boolean("adopted").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
