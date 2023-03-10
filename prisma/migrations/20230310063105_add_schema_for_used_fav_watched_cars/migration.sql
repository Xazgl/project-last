-- CreateTable
CREATE TABLE "FavoriteUsedCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "FavoriteUsedCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- CreateTable
CREATE TABLE "WatchedUsedCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "WatchedUsedCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- CreateTable
CREATE TABLE "CompareUsedCarsToCar" (
    "sessionId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "CompareUsedCarsToCar_pkey" PRIMARY KEY ("sessionId","carId")
);

-- AddForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" ADD CONSTRAINT "FavoriteUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" ADD CONSTRAINT "FavoriteUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedUsedCarsToCar" ADD CONSTRAINT "WatchedUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedUsedCarsToCar" ADD CONSTRAINT "WatchedUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareUsedCarsToCar" ADD CONSTRAINT "CompareUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareUsedCarsToCar" ADD CONSTRAINT "CompareUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
