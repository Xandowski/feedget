/*
  Warnings:

  - You are about to drop the `feedbackVotes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "feedbackVotes" DROP CONSTRAINT "feedbackVotes_feedbackId_fkey";

-- AlterTable
ALTER TABLE "feedbacks" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "voters" TEXT[];

-- DropTable
DROP TABLE "feedbackVotes";
