-- CreateTable
CREATE TABLE "ClientNeedCall" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientNeedCall_pkey" PRIMARY KEY ("id")
);
