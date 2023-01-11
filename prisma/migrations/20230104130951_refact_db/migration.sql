/*
  Warnings:

  - You are about to drop the column `numberSpareParts` on the `ClientParts` table. All the data in the column will be lost.
  - You are about to drop the `NewCar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OldCar` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `IntSpareParts` to the `ClientParts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientParts" DROP COLUMN "numberSpareParts",
ADD COLUMN     "IntSpareParts" TEXT NOT NULL;

-- DropTable
DROP TABLE "NewCar";

-- DropTable
DROP TABLE "OldCar";

-- CreateTable
CREATE TABLE "DealerModel" (
    "id" TEXT NOT NULL,
    "id_1c" INTEGER NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "phone" TEXT,

    CONSTRAINT "DealerModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" TEXT NOT NULL,
    "id_1c" INTEGER NOT NULL,
    "brandId" TEXT NOT NULL,
    "modelId_1c" INTEGER NOT NULL,
    "brandName" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "categoryId_1c" INTEGER NOT NULL,
    "categoryIdName" TEXT NOT NULL,
    "generationId_1c" INTEGER NOT NULL,
    "generationIName" TEXT NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModification" (
    "id" TEXT NOT NULL,
    "id_1c" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "engineType" TEXT NOT NULL,
    "engineVolume" TEXT NOT NULL,
    "enginePower" TEXT NOT NULL,
    "gearboxType" TEXT NOT NULL,
    "driveType" TEXT NOT NULL,
    "bodyType" TEXT NOT NULL,
    "bodyDoorCount" INTEGER NOT NULL,
    "steeringWheel" TEXT NOT NULL,
    "length" TEXT,
    "width" TEXT,

    CONSTRAINT "CarModification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarComplectation" (
    "id" TEXT NOT NULL,
    "id_1c" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "seatsCar" TEXT,

    CONSTRAINT "CarComplectation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extras" (
    "id" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,
    "groupName" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Extras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "id_1c" TEXT NOT NULL,
    "usedOrNew" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "bodyColorMetallic" TEXT NOT NULL,
    "mileage" TEXT,
    "mileageUnit" TEXT,
    "vin" TEXT NOT NULL,
    "year" TEXT,
    "img" TEXT[],
    "priceMonth" DOUBLE PRECISION,
    "price" DOUBLE PRECISION,
    "special_price" DOUBLE PRECISION,
    "specialOffer" DOUBLE PRECISION,
    "tradeinDiscount" DOUBLE PRECISION,
    "creditDiscount" DOUBLE PRECISION,
    "insuranceDiscount" DOUBLE PRECISION,
    "desc" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "carModelId" TEXT,
    "carModificationId" TEXT,
    "carComplectationId" TEXT,
    "dealerModelId" TEXT,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CarToExtras" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DealerModel_id_1c_key" ON "DealerModel"("id_1c");

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_id_1c_key" ON "CarModel"("id_1c");

-- CreateIndex
CREATE UNIQUE INDEX "CarModification_id_1c_key" ON "CarModification"("id_1c");

-- CreateIndex
CREATE UNIQUE INDEX "CarComplectation_id_1c_key" ON "CarComplectation"("id_1c");

-- CreateIndex
CREATE UNIQUE INDEX "Car_id_1c_key" ON "Car"("id_1c");

-- CreateIndex
CREATE UNIQUE INDEX "Car_vin_key" ON "Car"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "_CarToExtras_AB_unique" ON "_CarToExtras"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToExtras_B_index" ON "_CarToExtras"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_dealerModelId_fkey" FOREIGN KEY ("dealerModelId") REFERENCES "DealerModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModificationId_fkey" FOREIGN KEY ("carModificationId") REFERENCES "CarModification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carComplectationId_fkey" FOREIGN KEY ("carComplectationId") REFERENCES "CarComplectation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToExtras" ADD FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToExtras" ADD FOREIGN KEY ("B") REFERENCES "Extras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
