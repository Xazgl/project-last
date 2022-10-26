/*
  Warnings:

  - Added the required column `phone` to the `ClientNeedCall` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientNeedCall" ADD COLUMN     "phone" TEXT NOT NULL;
