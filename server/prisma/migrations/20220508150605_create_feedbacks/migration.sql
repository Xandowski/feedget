-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT,
    "username" TEXT NOT NULL,
    "profilepic" TEXT,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);
