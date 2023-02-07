/*
  Warnings:

  - Added the required column `carName` to the `CalcCredit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalcCredit" ADD COLUMN     "carName" TEXT NOT NULL;
