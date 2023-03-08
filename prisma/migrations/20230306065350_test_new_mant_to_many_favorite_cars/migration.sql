-- CreateTable
CREATE TABLE "FavoriteCarsToCarNew" (
    "sessionToken" TEXT NOT NULL,
    "vin" TEXT NOT NULL,

    CONSTRAINT "FavoriteCarsToCarNew_pkey" PRIMARY KEY ("sessionToken","vin")
);

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCarNew" ADD CONSTRAINT "FavoriteCarsToCarNew_sessionToken_fkey" FOREIGN KEY ("sessionToken") REFERENCES "SessionClient"("sessionToken") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCarsToCarNew" ADD CONSTRAINT "FavoriteCarsToCarNew_vin_fkey" FOREIGN KEY ("vin") REFERENCES "Car"("vin") ON DELETE RESTRICT ON UPDATE CASCADE;
