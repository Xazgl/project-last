-- AlterTable
ALTER TABLE "CarModification" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "engineType" DROP NOT NULL,
ALTER COLUMN "engineVolume" DROP NOT NULL,
ALTER COLUMN "enginePower" DROP NOT NULL,
ALTER COLUMN "gearboxType" DROP NOT NULL,
ALTER COLUMN "driveType" DROP NOT NULL,
ALTER COLUMN "bodyType" DROP NOT NULL,
ALTER COLUMN "bodyDoorCount" DROP NOT NULL,
ALTER COLUMN "steeringWheel" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyPosition" TEXT NOT NULL,
    "startData" TEXT NOT NULL,
    "endData" TEXT NOT NULL,
    "text" TEXT,
    "textTwo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);
