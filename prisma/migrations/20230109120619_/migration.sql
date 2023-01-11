/*
  Warnings:

  - Changed the type of `filterMainPeople` on the `Offer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `detailFilterBrand` on the `Offer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "filterMainPeople",
ADD COLUMN     "filterMainPeople" TEXT NOT NULL,
DROP COLUMN "detailFilterBrand",
ADD COLUMN     "detailFilterBrand" TEXT NOT NULL;
