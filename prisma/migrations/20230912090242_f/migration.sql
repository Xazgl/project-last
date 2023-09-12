/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `BrandNews` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `YandexGeo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BrandNews_id_key" ON "BrandNews"("id");

-- CreateIndex
CREATE UNIQUE INDEX "YandexGeo_id_key" ON "YandexGeo"("id");
