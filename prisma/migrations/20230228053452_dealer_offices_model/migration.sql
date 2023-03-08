/*
  Warnings:

  - You are about to drop the column `img` on the `Offices` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Offices` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Offices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Offices" DROP COLUMN "img",
DROP COLUMN "logo",
DROP COLUMN "type",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "label" TEXT,
ADD COLUMN     "photo" TEXT;
