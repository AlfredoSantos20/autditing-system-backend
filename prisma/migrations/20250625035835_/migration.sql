/*
  Warnings:

  - You are about to drop the column `personalInfoId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notif` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personalinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantcategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantgallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `support` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `Chat_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `notif` DROP FOREIGN KEY `notif_userId_fkey`;

-- DropForeignKey
ALTER TABLE `plantgallery` DROP FOREIGN KEY `PlantGallery_plantId_fkey`;

-- DropForeignKey
ALTER TABLE `plantinfo` DROP FOREIGN KEY `PlantInfo_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `support` DROP FOREIGN KEY `Support_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_personalInfoId_fkey`;

-- DropIndex
DROP INDEX `User_personalInfoId_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `personalInfoId`;

-- DropTable
DROP TABLE `chat`;

-- DropTable
DROP TABLE `notif`;

-- DropTable
DROP TABLE `personalinfo`;

-- DropTable
DROP TABLE `plantcategory`;

-- DropTable
DROP TABLE `plantgallery`;

-- DropTable
DROP TABLE `plantinfo`;

-- DropTable
DROP TABLE `support`;

-- CreateTable
CREATE TABLE `Section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
