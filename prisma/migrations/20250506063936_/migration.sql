/*
  Warnings:

  - The primary key for the `plantcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `plantcategory` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `plantgallery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `plantgallery` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `plantId` on the `plantgallery` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `plant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantcare` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantconditions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantfeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantpest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `plant` DROP FOREIGN KEY `Plant_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `plantcare` DROP FOREIGN KEY `PlantCare_plantId_fkey`;

-- DropForeignKey
ALTER TABLE `plantconditions` DROP FOREIGN KEY `PlantConditions_plantId_fkey`;

-- DropForeignKey
ALTER TABLE `plantfeature` DROP FOREIGN KEY `PlantFeature_plantId_fkey`;

-- DropForeignKey
ALTER TABLE `plantgallery` DROP FOREIGN KEY `PlantGallery_plantId_fkey`;

-- DropForeignKey
ALTER TABLE `plantpest` DROP FOREIGN KEY `PlantPest_plantId_fkey`;

-- DropIndex
DROP INDEX `PlantGallery_plantId_fkey` ON `plantgallery`;

-- AlterTable
ALTER TABLE `plantcategory` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `plantgallery` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `plantId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `plant`;

-- DropTable
DROP TABLE `plantcare`;

-- DropTable
DROP TABLE `plantconditions`;

-- DropTable
DROP TABLE `plantfeature`;

-- DropTable
DROP TABLE `plantpest`;

-- CreateTable
CREATE TABLE `PlantInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `genus` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlantInfo` ADD CONSTRAINT `PlantInfo_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `PlantCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlantGallery` ADD CONSTRAINT `PlantGallery_plantId_fkey` FOREIGN KEY (`plantId`) REFERENCES `PlantInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
