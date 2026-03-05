CREATE TABLE "products" (
	"product_id" serial PRIMARY KEY NOT NULL,
	"product_name" varchar(50) NOT NULL,
	"price" integer,
	"brand" varchar(50),
	"category" varchar(50),
	"sub_category" varchar(50)
);
