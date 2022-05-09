/*
  Warnings:

  - Added the required column `feedbackVoteId` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedbacks" ADD COLUMN     "feedbackVoteId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "feedbackVotes" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "voters" TEXT[],

    CONSTRAINT "feedbackVotes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_feedbackVoteId_fkey" FOREIGN KEY ("feedbackVoteId") REFERENCES "feedbackVotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
