/*
  Warnings:

  - You are about to drop the `GameRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_roomId_fkey";

-- DropTable
DROP TABLE "GameRoom";

-- DropTable
DROP TABLE "Player";

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Dungeon Master',
    "content" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_key" ON "Class"("id");
