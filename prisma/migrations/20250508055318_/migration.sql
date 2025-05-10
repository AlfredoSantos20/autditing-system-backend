/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[personalInfoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `Customer_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `personalInfoId` INTEGER NULL;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `customer`;

-- CreateTable
CREATE TABLE `PersonalInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_personalInfoId_key` ON `User`(`personalInfoId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_personalInfoId_fkey` FOREIGN KEY (`personalInfoId`) REFERENCES `PersonalInfo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
