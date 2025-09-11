/*
  Warnings:

  - The values [BOYS,GIRLS] on the enum `ToyType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Lend` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ageGroup` to the `Toy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canLend` to the `Toy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canTrade` to the `Toy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Toy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNew` to the `Toy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Toy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AgeRange" AS ENUM ('ZERO_A_UM', 'UM_A_TRES', 'TRES_A_SEIS', 'SEIS_A_DOZE', 'DOZE_OU_MAIS');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."ToyType_new" AS ENUM ('MENINOS', 'MENINAS', 'ARTÍSTICO', 'AVENTURA', 'BONECOS', 'CARRINHOS', 'CARTAS', 'EDUCATIVO', 'ESPORTES', 'ESTRATÉGIA', 'PALAVRAS', 'PARA_BEBÊS', 'QUEBRA_CABEÇAS', 'SIMULAÇÃO', 'TABULEIRO', 'VIDEOGAME');
ALTER TABLE "public"."Toy" ALTER COLUMN "type" TYPE "public"."ToyType_new"[] USING ("type"::text::"public"."ToyType_new"[]);
ALTER TYPE "public"."ToyType" RENAME TO "ToyType_old";
ALTER TYPE "public"."ToyType_new" RENAME TO "ToyType";
DROP TYPE "public"."ToyType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Lend" DROP CONSTRAINT "Lend_borrowerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lend" DROP CONSTRAINT "Lend_lenderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lend" DROP CONSTRAINT "Lend_toyId_fkey";

-- AlterTable
ALTER TABLE "public"."Toy" ADD COLUMN     "ageGroup" "public"."AgeRange" NOT NULL,
ADD COLUMN     "canLend" BOOLEAN NOT NULL,
ADD COLUMN     "canTrade" BOOLEAN NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isNew" BOOLEAN NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "public"."Lend";

-- CreateTable
CREATE TABLE "public"."ToyPicture" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "toyId" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "ToyPicture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ToyPicture" ADD CONSTRAINT "ToyPicture_toyId_fkey" FOREIGN KEY ("toyId") REFERENCES "public"."Toy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
