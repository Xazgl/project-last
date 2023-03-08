-- CreateTable
CREATE TABLE "CalcInsurance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "carNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "carBrendName" TEXT NOT NULL,
    "carModel" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "officeName" TEXT NOT NULL,
    "insuranceTypeKASKO" BOOLEAN NOT NULL,
    "insuranceTypeOSAGO" BOOLEAN NOT NULL,
    "alarmSystem" BOOLEAN NOT NULL,
    "carDeposit" BOOLEAN NOT NULL,
    "installmentPlan" BOOLEAN NOT NULL,
    "drivers" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalcInsurance_pkey" PRIMARY KEY ("id")
);
