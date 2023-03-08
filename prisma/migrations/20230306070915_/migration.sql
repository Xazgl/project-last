/*
  Warnings:

  - You are about to drop the `FavoriteCarsToCarNew` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteCarsToCarNew" DROP CONSTRAINT "FavoriteCarsToCarNew_sessionToken_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteCarsToCarNew" DROP CONSTRAINT "FavoriteCarsToCarNew_vin_fkey";

-- DropTable
DROP TABLE "FavoriteCarsToCarNew";
