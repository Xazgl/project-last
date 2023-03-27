-- DropForeignKey
ALTER TABLE "CompareCarsToCar" DROP CONSTRAINT "CompareCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "CompareCarsToCar" DROP CONSTRAINT "CompareCarsToCar_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "CompareUsedCarsToCar" DROP CONSTRAINT "CompareUsedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "CompareUsedCarsToCar" DROP CONSTRAINT "CompareUsedCarsToCar_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteCarsToCar" DROP CONSTRAINT "FavoriteCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteCarsToCar" DROP CONSTRAINT "FavoriteCarsToCar_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" DROP CONSTRAINT "FavoriteUsedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" DROP CONSTRAINT "FavoriteUsedCarsToCar_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "WatchedCarsToCar" DROP CONSTRAINT "WatchedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "WatchedCarsToCar" DROP CONSTRAINT "WatchedCarsToCar_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "WatchedUsedCarsToCar" DROP CONSTRAINT "WatchedUsedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "WatchedUsedCarsToCar" DROP CONSTRAINT "WatchedUsedCarsToCar_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCar" ADD CONSTRAINT "FavoriteCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCar" ADD CONSTRAINT "FavoriteCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" ADD CONSTRAINT "FavoriteUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" ADD CONSTRAINT "FavoriteUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedCarsToCar" ADD CONSTRAINT "WatchedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedCarsToCar" ADD CONSTRAINT "WatchedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedUsedCarsToCar" ADD CONSTRAINT "WatchedUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedUsedCarsToCar" ADD CONSTRAINT "WatchedUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareCarsToCar" ADD CONSTRAINT "CompareCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareCarsToCar" ADD CONSTRAINT "CompareCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareUsedCarsToCar" ADD CONSTRAINT "CompareUsedCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareUsedCarsToCar" ADD CONSTRAINT "CompareUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
