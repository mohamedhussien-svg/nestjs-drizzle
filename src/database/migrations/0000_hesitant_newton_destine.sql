CREATE TABLE "cm"."posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"lastChangeDate" timestamp,
	"deletedAt" timestamp,
	"comment" text,
	"content" text,
	"published" boolean DEFAULT false,
	"userId" integer
);
--> statement-breakpoint
CREATE TABLE "cm"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"lastChangeDate" timestamp,
	"deletedAt" timestamp,
	"comment" text,
	"email" text,
	"password" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "cm"."posts" ADD CONSTRAINT "posts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "cm"."users"("id") ON DELETE no action ON UPDATE no action;