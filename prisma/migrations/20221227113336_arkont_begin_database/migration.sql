/*
  Warnings:

  - You are about to drop the `CalcTo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientSales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sales` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FILTER1" AS ENUM ('NEW', 'OLD', 'OWNER');

-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('CHERY', 'EXEED', 'HYUNDAI', 'KIA', 'MITSUBISHI', 'NISSAN', 'RENAULT', 'VOLKSWAGEN', 'UAZ', 'SUBARU', 'JAGUAR', 'LANDROVER', 'SUZUKI', 'JEEP', 'OPEL', 'PEUGEOT', 'FAW', 'HISUN', 'GEELY');

-- CreateEnum
CREATE TYPE "City" AS ENUM ('VLG', 'VLZ');

-- DropTable
DROP TABLE "CalcTo";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "ClientSales";

-- DropTable
DROP TABLE "Sales";

-- CreateTable
CREATE TABLE "ClientParts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "numberSpareParts" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientParts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalcCredit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceCar" TEXT NOT NULL,
    "firstMoney" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalcCredit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "filterMainPeople" "FILTER1" NOT NULL,
    "detailFilterBrand" "Brand" NOT NULL,
    "detailFilterMode" TEXT NOT NULL,
    "detailFilterOffice" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewCar" (
    "id" TEXT NOT NULL,
    "brend" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "carBody" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "engien" TEXT NOT NULL,
    "drive" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "expenditure" TEXT NOT NULL,
    "capacityTank" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "seatsCar" TEXT NOT NULL,
    "lenght" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "trunk" TEXT NOT NULL,
    "volumeTrunk" TEXT NOT NULL,
    "consumptionCombi" TEXT NOT NULL,
    "consumptionCity" TEXT NOT NULL,
    "consumptionTrack" TEXT NOT NULL,
    "speedMax" TEXT NOT NULL,
    "overlocking" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "img" TEXT[],
    "price" TEXT NOT NULL,
    "priceMonth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OldCar" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "brend" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "carBody" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "engien" TEXT NOT NULL,
    "drive" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "expenditure" TEXT NOT NULL,
    "capacityTank" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "seatsCar" TEXT NOT NULL,
    "lenght" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "trunk" TEXT NOT NULL,
    "volumeTrunk" TEXT NOT NULL,
    "consumptionCombi" TEXT NOT NULL,
    "consumptionCity" TEXT NOT NULL,
    "consumptionTrack" TEXT NOT NULL,
    "speedMax" TEXT NOT NULL,
    "overlocking" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "img" TEXT[],
    "price" TEXT NOT NULL,
    "priceMonth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OldCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "exp" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "city" "City" NOT NULL DEFAULT E'VLG',
    "carBrend" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
