/*
  Warnings:

  - You are about to drop the column `brandId` on the `CarModel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[modelId_1c]` on the table `CarModel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carModelId_fkey";

-- DropIndex
DROP INDEX "CarModel_id_1c_key";

-- AlterTable
ALTER TABLE "CarModel" DROP COLUMN "brandId";

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_modelId_1c_key" ON "CarModel"("modelId_1c");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("modelId_1c") ON DELETE SET NULL ON UPDATE CASCADE;
