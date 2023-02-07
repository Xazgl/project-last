/*
  Warnings:

  - You are about to drop the column `firstMoney` on the `CalcCredit` table. All the data in the column will be lost.
  - You are about to drop the column `priceCar` on the `CalcCredit` table. All the data in the column will be lost.
  - Added the required column `firstPrice` to the `CalcCredit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `CalcCredit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalcCredit" DROP COLUMN "firstMoney",
DROP COLUMN "priceCar",
ADD COLUMN     "firstPrice" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
