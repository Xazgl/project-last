/*
  Warnings:

  - You are about to drop the column `brandsId` on the `BrandNews` table. All the data in the column will be lost.
  - You are about to drop the column `brandsId` on the `YandexGeo` table. All the data in the column will be lost.
  - You are about to drop the `BrandNewsToBrands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YandexGeoToBrands` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BrandNews" DROP CONSTRAINT "BrandNews_brandsId_fkey";

-- DropForeignKey
ALTER TABLE "BrandNewsToBrands" DROP CONSTRAINT "BrandNewsToBrands_brandId_fkey";

-- DropForeignKey
ALTER TABLE "BrandNewsToBrands" DROP CONSTRAINT "BrandNewsToBrands_newsId_fkey";

-- DropForeignKey
ALTER TABLE "YandexGeo" DROP CONSTRAINT "YandexGeo_brandsId_fkey";

-- DropForeignKey
ALTER TABLE "YandexGeoToBrands" DROP CONSTRAINT "YandexGeoToBrands_brandId_fkey";

-- DropForeignKey
ALTER TABLE "YandexGeoToBrands" DROP CONSTRAINT "YandexGeoToBrands_yandexId_fkey";

-- AlterTable
ALTER TABLE "BrandNews" DROP COLUMN "brandsId";

-- AlterTable
ALTER TABLE "YandexGeo" DROP COLUMN "brandsId";

-- DropTable
DROP TABLE "BrandNewsToBrands";

-- DropTable
DROP TABLE "YandexGeoToBrands";

-- CreateTable
CREATE TABLE "_BrandNewsToBrands" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BrandsToYandexGeo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandNewsToBrands_AB_unique" ON "_BrandNewsToBrands"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandNewsToBrands_B_index" ON "_BrandNewsToBrands"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandsToYandexGeo_AB_unique" ON "_BrandsToYandexGeo"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandsToYandexGeo_B_index" ON "_BrandsToYandexGeo"("B");

-- AddForeignKey
ALTER TABLE "_BrandNewsToBrands" ADD CONSTRAINT "_BrandNewsToBrands_A_fkey" FOREIGN KEY ("A") REFERENCES "BrandNews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandNewsToBrands" ADD CONSTRAINT "_BrandNewsToBrands_B_fkey" FOREIGN KEY ("B") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToYandexGeo" ADD CONSTRAINT "_BrandsToYandexGeo_A_fkey" FOREIGN KEY ("A") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToYandexGeo" ADD CONSTRAINT "_BrandsToYandexGeo_B_fkey" FOREIGN KEY ("B") REFERENCES "YandexGeo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
