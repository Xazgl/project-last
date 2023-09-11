/*
  Warnings:

  - You are about to drop the `NewsBrands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BrandsToNewsBrands` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BrandsToNewsBrands" DROP CONSTRAINT "_BrandsToNewsBrands_A_fkey";

-- DropForeignKey
ALTER TABLE "_BrandsToNewsBrands" DROP CONSTRAINT "_BrandsToNewsBrands_B_fkey";

-- DropTable
DROP TABLE "NewsBrands";

-- DropTable
DROP TABLE "_BrandsToNewsBrands";

-- CreateTable
CREATE TABLE "_BrandNewsToBrands" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandNewsToBrands_AB_unique" ON "_BrandNewsToBrands"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandNewsToBrands_B_index" ON "_BrandNewsToBrands"("B");

-- AddForeignKey
ALTER TABLE "_BrandNewsToBrands" ADD CONSTRAINT "_BrandNewsToBrands_A_fkey" FOREIGN KEY ("A") REFERENCES "BrandNews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandNewsToBrands" ADD CONSTRAINT "_BrandNewsToBrands_B_fkey" FOREIGN KEY ("B") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
