/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Extras` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Extras_name_key" ON "Extras"("name");
