/*
  Warnings:

  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contentType` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "contentType" TEXT NOT NULL,
ALTER COLUMN "author" SET DEFAULT 'DM';

-- DropTable
DROP TABLE "Class";
