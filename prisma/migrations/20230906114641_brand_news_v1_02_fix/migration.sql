/*
  Warnings:

  - You are about to drop the column `brandName` on the `BrandNews` table. All the data in the column will be lost.
  - You are about to drop the column `carModelId` on the `BrandNews` table. All the data in the column will be lost.
  - You are about to drop the `_BrandNewsToNews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `BrandNews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BrandNews" DROP CONSTRAINT "BrandNews_carModelId_fkey";

-- DropForeignKey
ALTER TABLE "_BrandNewsToNews" DROP CONSTRAINT "_BrandNewsToNews_A_fkey";

-- DropForeignKey
ALTER TABLE "_BrandNewsToNews" DROP CONSTRAINT "_BrandNewsToNews_B_fkey";

-- AlterTable
ALTER TABLE "BrandNews" DROP COLUMN "brandName",
DROP COLUMN "carModelId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "img" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BrandNewsToNews";
