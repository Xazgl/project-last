/*
  Warnings:

  - Added the required column `comment` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberSpareParts` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vin` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "numberSpareParts" TEXT NOT NULL,
ADD COLUMN     "vin" TEXT NOT NULL;
