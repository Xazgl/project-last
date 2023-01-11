/*
  Warnings:

  - Added the required column `salary` to the `Vacancy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vacancy" ADD COLUMN     "salary" TEXT NOT NULL;
