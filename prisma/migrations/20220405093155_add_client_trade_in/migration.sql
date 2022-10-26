-- CreateTable
CREATE TABLE "ClientTradeIn" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "carYear" TEXT NOT NULL,
    "carModal" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientTradeIn_pkey" PRIMARY KEY ("id")
);
