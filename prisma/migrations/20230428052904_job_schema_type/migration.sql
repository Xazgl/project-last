/*
  Warnings:

  - Changed the type of `exp` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `office` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "exp",
ADD COLUMN     "exp" TEXT NOT NULL,
DROP COLUMN "office",
ADD COLUMN     "office" TEXT NOT NULL;
