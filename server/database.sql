CREATE TABLE "pet_owners" (
id SERIAL PRIMARY KEY,
    first_name VARCHAR(60),
    last_name VARCHAR(80)
);

INSERT INTO "pet_owners" ("first_name", "last_name")
VALUES ('Dan', 'Zera'), ('Lisa', 'Schoofs'), ('Betsy', 'Rowley'),
('Anisa', 'Abdulkadir'), ('Olga', 'Engels');

CREATE TABLE "pets" (
id SERIAL PRIMARY KEY,
"pet_owner_id" integer REFERENCES "pet_owners",
"petname" VARCHAR(60),
"breed" VARCHAR(60),
"color" VARCHAR(60)
);

CREATE TABLE "visits" (
	id SERIAL PRIMARY KEY,
	"checkin_date" DATE,
	"checkout_date" DATE,
	"pets_id" integer REFERENCES "pets"
);
