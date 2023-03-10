-- DropForeignKey
ALTER TABLE "CompareUsedCarsToCar" DROP CONSTRAINT "CompareUsedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" DROP CONSTRAINT "FavoriteUsedCarsToCar_carId_fkey";

-- DropForeignKey
ALTER TABLE "WatchedUsedCarsToCar" DROP CONSTRAINT "WatchedUsedCarsToCar_carId_fkey";

-- AddForeignKey
ALTER TABLE "FavoriteUsedCarsToCar" ADD CONSTRAINT "FavoriteUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedUsedCarsToCar" ADD CONSTRAINT "WatchedUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareUsedCarsToCar" ADD CONSTRAINT "CompareUsedCarsToCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "UsedCars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
