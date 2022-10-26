/*
  Warnings:

  - Added the required column `detailFilter` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filterMain` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDesc` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "detailFilter" TEXT NOT NULL,
ADD COLUMN     "filterMain" TEXT NOT NULL,
ADD COLUMN     "shortDesc" TEXT NOT NULL;
