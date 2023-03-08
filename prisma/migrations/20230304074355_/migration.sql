/*
  Warnings:

  - The `drivers` column on the `CalcInsurance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CalcInsurance" DROP COLUMN "drivers",
ADD COLUMN     "drivers" JSONB[];
