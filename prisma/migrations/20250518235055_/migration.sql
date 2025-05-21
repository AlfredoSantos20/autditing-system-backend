/*
  Warnings:

  - You are about to drop the column `response` on the `chat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `chat` DROP COLUMN `response`,
    ADD COLUMN `ai_response` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Support` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `concern_msg` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Support` ADD CONSTRAINT `Support_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
