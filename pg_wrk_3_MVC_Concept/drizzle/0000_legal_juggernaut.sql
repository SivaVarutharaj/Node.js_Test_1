CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"age" integer NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(50) NOT NULL,
	CONSTRAINT "users_phone_unique" UNIQUE("phone"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
