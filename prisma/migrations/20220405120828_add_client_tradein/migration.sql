/*
  Warnings:

  - You are about to drop the `ClientTradeIn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ClientTradeIn";

-- CreateTable
CREATE TABLE "ClientTradein" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "carYear" TEXT NOT NULL,
    "carModal" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientTradein_pkey" PRIMARY KEY ("id")
);
