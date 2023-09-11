-- AlterTable
ALTER TABLE "Offices" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Brands" (
    "id" TEXT NOT NULL,
    "brand" TEXT,
    "banner" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsBrands" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "desc" TEXT,
    "img" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsBrands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YandexGeo" (
    "id" TEXT NOT NULL,
    "nameDc" TEXT,
    "imgDC" TEXT,
    "linkToYandex" TEXT,
    "iframeMapSrc" TEXT,
    "phone" TEXT,
    "adress" TEXT,
    "email" TEXT,
    "brandId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YandexGeo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BrandsToNewsBrands" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "YandexGeo_brandId_key" ON "YandexGeo"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "_BrandsToNewsBrands_AB_unique" ON "_BrandsToNewsBrands"("A", "B");

-- CreateIndex
CREATE INDEX "_BrandsToNewsBrands_B_index" ON "_BrandsToNewsBrands"("B");

-- AddForeignKey
ALTER TABLE "YandexGeo" ADD CONSTRAINT "YandexGeo_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToNewsBrands" ADD CONSTRAINT "_BrandsToNewsBrands_A_fkey" FOREIGN KEY ("A") REFERENCES "Brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BrandsToNewsBrands" ADD CONSTRAINT "_BrandsToNewsBrands_B_fkey" FOREIGN KEY ("B") REFERENCES "NewsBrands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
