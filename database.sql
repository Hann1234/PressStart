
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "profile_image" VARCHAR (1000),
    "profile_description" TEXT,
    "user_play_style" VARCHAR (80),
    "active_game" VARCHAR (80),
    "active_game_rank" VARCHAR (80),
    "discord_link" VARCHAR (80),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE "games" (
	"id" SERIAL PRIMARY KEY,
	"game_title" VARCHAR (80),
	"game_cover" VARCHAR (1000),
	"game_description" TEXT
	);
	
CREATE TABLE "user_game" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"game_id" INT REFERENCES "games" ON DELETE CASCADE NOT NULL,
	"time_start" TIMESTAMP NOT NULL,
	"time_end" TIMESTAMP,
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
	
CREATE TABLE "matches" (
	"id" SERIAL PRIMARY KEY,
	"primary_user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"secondary_user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"invite_status" VARCHAR (80) DEFAULT 'pending',
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
