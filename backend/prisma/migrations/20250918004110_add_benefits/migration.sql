-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."ToyType" AS ENUM ('MENINOS', 'MENINAS', 'ARTÍSTICO', 'AVENTURA', 'BONECOS', 'CARRINHOS', 'CARTAS', 'EDUCATIVO', 'ESPORTES', 'ESTRATÉGIA', 'PALAVRAS', 'PARA_BEBÊS', 'QUEBRA_CABEÇAS', 'SIMULAÇÃO', 'TABULEIRO', 'VIDEOGAME');

-- CreateEnum
CREATE TYPE "public"."AgeRange" AS ENUM ('ZERO_A_UM', 'UM_A_TRES', 'TRES_A_SEIS', 'SEIS_A_DOZE', 'DOZE_OU_MAIS');

-- CreateEnum
CREATE TYPE "public"."UserBenefitStatus" AS ENUM ('ACTIVE', 'REDEEMED', 'REVOKED', 'EXPIRED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "parentalControl" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "cpf" TEXT,
    "cnpj" TEXT,
    "pix_key" TEXT,
    "picture" TEXT,
    "addressDistrict" TEXT NOT NULL,
    "addressStreet" TEXT NOT NULL,
    "addressNumber" INTEGER NOT NULL,
    "addressDetail" TEXT,
    "addressCep" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."organizationInfo" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phone_number1" INTEGER NOT NULL,
    "phone_number2" INTEGER,

    CONSTRAINT "organizationInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Toy" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isNew" BOOLEAN NOT NULL,
    "canTrade" BOOLEAN NOT NULL,
    "canLend" BOOLEAN NOT NULL,
    "usageTime" INTEGER NOT NULL,
    "preservation" INTEGER NOT NULL,
    "type" "public"."ToyType"[],
    "ageGroup" "public"."AgeRange" NOT NULL,

    CONSTRAINT "Toy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ToyPicture" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "toyId" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "ToyPicture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HistoryEntry" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT,
    "toyId" TEXT NOT NULL,

    CONSTRAINT "HistoryEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" INTEGER NOT NULL,
    "comment" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chat" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Benefit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "durationDays" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserBenefit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "benefitId" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3),
    "status" "public"."UserBenefitStatus" NOT NULL DEFAULT 'ACTIVE',
    "source" TEXT,
    "metadata" JSONB,

    CONSTRAINT "UserBenefit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "public"."User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "public"."User"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "User_pix_key_key" ON "public"."User"("pix_key");

-- CreateIndex
CREATE UNIQUE INDEX "organizationInfo_organizationId_key" ON "public"."organizationInfo"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Benefit_key_key" ON "public"."Benefit"("key");

-- CreateIndex
CREATE INDEX "UserBenefit_userId_status_startsAt_idx" ON "public"."UserBenefit"("userId", "status", "startsAt");

-- CreateIndex
CREATE INDEX "UserBenefit_userId_endsAt_idx" ON "public"."UserBenefit"("userId", "endsAt");

-- AddForeignKey
ALTER TABLE "public"."organizationInfo" ADD CONSTRAINT "organizationInfo_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Toy" ADD CONSTRAINT "Toy_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ToyPicture" ADD CONSTRAINT "ToyPicture_toyId_fkey" FOREIGN KEY ("toyId") REFERENCES "public"."Toy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HistoryEntry" ADD CONSTRAINT "HistoryEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HistoryEntry" ADD CONSTRAINT "HistoryEntry_toyId_fkey" FOREIGN KEY ("toyId") REFERENCES "public"."Toy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rate" ADD CONSTRAINT "Rate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chat" ADD CONSTRAINT "Chat_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chat" ADD CONSTRAINT "Chat_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserBenefit" ADD CONSTRAINT "UserBenefit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserBenefit" ADD CONSTRAINT "UserBenefit_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "public"."Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
