/*
  Warnings:

  - The values [VLG,VLZ] on the enum `City` will be removed. If these variants are still used in the database, this will fail.
  - The `exp` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `office` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Office" AS ENUM ('ГК Арконт', 'Renault Арконт Волжский', 'KIA Арконт', 'Nissan Арконт');

-- CreateEnum
CREATE TYPE "Exp" AS ENUM ('Без опыта', 'от 1 года', 'от 3 лет');

-- AlterEnum
BEGIN;
CREATE TYPE "City_new" AS ENUM ('Волгоград', 'Волжский');
ALTER TABLE "Job" ALTER COLUMN "city" DROP DEFAULT;
ALTER TABLE "Job" ALTER COLUMN "city" TYPE "City_new" USING ("city"::text::"City_new");
ALTER TYPE "City" RENAME TO "City_old";
ALTER TYPE "City_new" RENAME TO "City";
DROP TYPE "City_old";
ALTER TABLE "Job" ALTER COLUMN "city" SET DEFAULT 'Волгоград';
COMMIT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "exp",
ADD COLUMN     "exp" "Exp" NOT NULL DEFAULT E'Без опыта',
DROP COLUMN "office",
ADD COLUMN     "office" "Office" NOT NULL DEFAULT E'ГК Арконт',
ALTER COLUMN "city" SET DEFAULT E'Волгоград';
