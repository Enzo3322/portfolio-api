-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "executionDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT[],
    "projectBanner" TEXT[],
    "projectStack" TEXT[],
    "principalStack" TEXT NOT NULL,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
