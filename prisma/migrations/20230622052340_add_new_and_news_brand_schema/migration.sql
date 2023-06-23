-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandNews" (
    "id" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "carModelId" TEXT NOT NULL,

    CONSTRAINT "BrandNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandNewsToNews" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BrandNewsToNews_AB_unique" ON "_BrandNewsToNews"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandNewsToNews_B_index" ON "_BrandNewsToNews"("B");

-- AddForeignKey
ALTER TABLE "BrandNews" ADD CONSTRAINT "BrandNews_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandNewsToNews" ADD CONSTRAINT "_BrandNewsToNews_A_fkey" FOREIGN KEY ("A") REFERENCES "BrandNews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandNewsToNews" ADD CONSTRAINT "_BrandNewsToNews_B_fkey" FOREIGN KEY ("B") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;
