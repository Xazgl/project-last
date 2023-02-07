/*
  Warnings:

  - Changed the type of `month` on the `CalcCredit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CalcCredit" DROP COLUMN "month",
ADD COLUMN     "month" INTEGER NOT NULL;
