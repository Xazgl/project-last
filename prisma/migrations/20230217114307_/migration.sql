/*
  Warnings:

  - A unique constraint covering the columns `[offersId]` on the table `UsedCars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `offersId` to the `UsedCars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsedCars" ADD COLUMN     "offersId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UsedCars_offersId_key" ON "UsedCars"("offersId");
