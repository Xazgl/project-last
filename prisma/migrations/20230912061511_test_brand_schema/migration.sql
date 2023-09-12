/*
  Warnings:

  - You are about to drop the `_BrandNewsToBrands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BrandNewsToNews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BrandNewsToBrands" DROP CONSTRAINT "_BrandNewsToBrands_A_fkey";

-- DropForeignKey
ALTER TABLE "_BrandNewsToBrands" DROP CONSTRAINT "_BrandNewsToBrands_B_fkey";

-- DropForeignKey
ALTER TABLE "_BrandNewsToNews" DROP CONSTRAINT "_BrandNewsToNews_A_fkey";

-- DropForeignKey
ALTER TABLE "_BrandNewsToNews" DROP CONSTRAINT "_BrandNewsToNews_B_fkey";

-- DropTable
DROP TABLE "_BrandNewsToBrands";

-- DropTable
DROP TABLE "_BrandNewsToNews";

-- CreateTable
CREATE TABLE "BrandNewsToBrands" (
    "brandId" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,

    CONSTRAINT "BrandNewsToBrands_pkey" PRIMARY KEY ("brandId","newsId")
);

-- AddForeignKey
ALTER TABLE "BrandNewsToBrands" ADD CONSTRAINT "BrandNewsToBrands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandNewsToBrands" ADD CONSTRAINT "BrandNewsToBrands_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "BrandNews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
