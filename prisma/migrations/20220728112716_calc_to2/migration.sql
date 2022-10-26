/*
  Warnings:

  - Added the required column `model` to the `CalcTo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CalcTo" ADD COLUMN     "model" TEXT NOT NULL;
