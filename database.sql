
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
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
	
CREATE TABLE "matches" (
	"id" SERIAL PRIMARY KEY,
	"primary_user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"secondary_user_id" INT REFERENCES "user" ON DELETE CASCADE NOT NULL,
	"invite_status" VARCHAR (80) DEFAULT 'pending',
	"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

INSERT INTO "games" ("game_title", "game_cover", "game_description")
VALUES
('Apex Legends', 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg', 'Show ''em what you''re made of in Apex Legends, a free-to-play hero shooter where contenders from across the Frontier team up to battle for glory, fame, and fortune. Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend. Apex Legends is always evolving. Play in classic 60-person Battle Royale matches, 3v3 Arenas battles, and limited-time modes and takeovers!'),
('Call of Duty: Warzone', 'https://upload.wikimedia.org/wikipedia/en/0/0a/Call_of_Duty_Warzone_Season_Four_Cover_art.jpg', 'Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players. The game features both cross-platform play and cross-platform progression between three games. The game features three main modes: Plunder, Resurgence, and Battle Royale.'),
('Tom Clancy''s Rainbow Six Siege', 'https://cdn.akamai.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1617836257', 'At its heart, Rainbow Six Siege is a high-precision, tactical shooter that prioritises careful planning teamwork and finely tuned tactical play. Since its release in 2015, the game has radically expanded, adding extra maps, new operators, weapons, and themed seasonal events. The game has even undergone major technical overhauls, allowing for more diverse character designs.'),
('Overwatch', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg', 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as "heroes", with unique abilities.');
