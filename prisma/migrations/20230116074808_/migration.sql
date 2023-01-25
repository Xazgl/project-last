/*
  Warnings:

  - The `carModelId` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `carModificationId` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `carComplectationId` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dealerModelId` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carComplectationId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carModelId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carModificationId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_dealerModelId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "carModelId",
ADD COLUMN     "carModelId" INTEGER,
DROP COLUMN "carModificationId",
ADD COLUMN     "carModificationId" INTEGER,
DROP COLUMN "carComplectationId",
ADD COLUMN     "carComplectationId" INTEGER,
DROP COLUMN "dealerModelId",
ADD COLUMN     "dealerModelId" INTEGER;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_dealerModelId_fkey" FOREIGN KEY ("dealerModelId") REFERENCES "DealerModel"("id_1c") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id_1c") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModificationId_fkey" FOREIGN KEY ("carModificationId") REFERENCES "CarModification"("id_1c") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carComplectationId_fkey" FOREIGN KEY ("carComplectationId") REFERENCES "CarComplectation"("id_1c") ON DELETE SET NULL ON UPDATE CASCADE;
