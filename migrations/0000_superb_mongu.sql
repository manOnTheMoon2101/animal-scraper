CREATE TABLE "animals" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" text,
	"animalType" text,
	"details" text,
	"age" integer,
	"ageDate" text,
	"image" text NOT NULL,
	"adopted" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
