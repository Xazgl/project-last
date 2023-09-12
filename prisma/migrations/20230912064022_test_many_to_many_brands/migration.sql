/*
  Warnings:

  - You are about to drop the `_BrandsToYandexGeo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brandsId` to the `YandexGeo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BrandsToYandexGeo" DROP CONSTRAINT "_BrandsToYandexGeo_A_fkey";

-- DropForeignKey
ALTER TABLE "_BrandsToYandexGeo" DROP CONSTRAINT "_BrandsToYandexGeo_B_fkey";

-- AlterTable
ALTER TABLE "BrandNews" ADD COLUMN     "brandsId" TEXT;

-- AlterTable
ALTER TABLE "YandexGeo" ADD COLUMN     "brandsId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BrandsToYandexGeo";

-- CreateTable
CREATE TABLE "YandexGeoToBrands" (
    "brandId" TEXT NOT NULL,
    "yandexId" TEXT NOT NULL,

    CONSTRAINT "YandexGeoToBrands_pkey" PRIMARY KEY ("brandId","yandexId")
);

-- AddForeignKey
ALTER TABLE "BrandNews" ADD CONSTRAINT "BrandNews_brandsId_fkey" FOREIGN KEY ("brandsId") REFERENCES "Brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YandexGeoToBrands" ADD CONSTRAINT "YandexGeoToBrands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YandexGeoToBrands" ADD CONSTRAINT "YandexGeoToBrands_yandexId_fkey" FOREIGN KEY ("yandexId") REFERENCES "YandexGeo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YandexGeo" ADD CONSTRAINT "YandexGeo_brandsId_fkey" FOREIGN KEY ("brandsId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
