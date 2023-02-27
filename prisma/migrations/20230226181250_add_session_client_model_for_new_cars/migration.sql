-- AlterTable
ALTER TABLE "SessionClient" ADD COLUMN     "carId" TEXT;

-- CreateTable
CREATE TABLE "FavoriteCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "FavoriteCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- CreateTable
CREATE TABLE "WatchedCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "WatchedCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- CreateTable
CREATE TABLE "CompareCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "CompareCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- AddForeignKey
ALTER TABLE "SessionClient" ADD CONSTRAINT "SessionClient_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCar" ADD CONSTRAINT "FavoriteCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCar" ADD CONSTRAINT "FavoriteCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedCarsToCar" ADD CONSTRAINT "WatchedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedCarsToCar" ADD CONSTRAINT "WatchedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareCarsToCar" ADD CONSTRAINT "CompareCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareCarsToCar" ADD CONSTRAINT "CompareCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
