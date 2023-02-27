-- CreateTable
CREATE TABLE "SessionClient" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionClient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SessionClient_sessionToken_key" ON "SessionClient"("sessionToken");
