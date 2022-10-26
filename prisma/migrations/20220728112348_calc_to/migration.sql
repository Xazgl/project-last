-- CreateTable
CREATE TABLE "CalcTo" (
    "id" TEXT NOT NULL,
    "brendName" TEXT NOT NULL,
    "complectation" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "carAge" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalcTo_pkey" PRIMARY KEY ("id")
);
