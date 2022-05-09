/*
  Warnings:

  - You are about to drop the column `feedbackVoteId` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `feedbackId` to the `feedbackVotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "feedbacks" DROP CONSTRAINT "feedbacks_feedbackVoteId_fkey";

-- AlterTable
ALTER TABLE "feedbackVotes" ADD COLUMN     "feedbackId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "feedbacks" DROP COLUMN "feedbackVoteId";

-- AddForeignKey
ALTER TABLE "feedbackVotes" ADD CONSTRAINT "feedbackVotes_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedbacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
