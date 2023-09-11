/*
  Warnings:

  - You are about to drop the column `brandId` on the `YandexGeo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "YandexGeo" DROP CONSTRAINT "YandexGeo_brandId_fkey";

-- DropIndex
DROP INDEX "YandexGeo_brandId_key";

-- AlterTable
ALTER TABLE "YandexGeo" DROP COLUMN "brandId";

-- CreateTable
CREATE TABLE "_BrandsToYandexGeo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandsToYandexGeo_AB_unique" ON "_BrandsToYandexGeo"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandsToYandexGeo_B_index" ON "_BrandsToYandexGeo"("B");

-- AddForeignKey
ALTER TABLE "_BrandsToYandexGeo" ADD CONSTRAINT "_BrandsToYandexGeo_A_fkey" FOREIGN KEY ("A") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToYandexGeo" ADD CONSTRAINT "_BrandsToYandexGeo_B_fkey" FOREIGN KEY ("B") REFERENCES "YandexGeo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
