-- DropForeignKey
ALTER TABLE "FavoriteCarsToCar" DROP CONSTRAINT "FavoriteCarsToCar_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCar" ADD CONSTRAINT "FavoriteCarsToCar_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
