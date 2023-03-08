/*
  Warnings:

  - You are about to drop the column `carId` on the `SessionClient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SessionClient" DROP CONSTRAINT "SessionClient_carId_fkey";

-- AlterTable
ALTER TABLE "SessionClient" DROP COLUMN "carId";
