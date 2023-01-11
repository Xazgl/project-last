/*
  Warnings:

  - You are about to drop the column `detailFilterOffice` on the `Offer` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Brand" ADD VALUE 'allCar';

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "detailFilterOffice";
