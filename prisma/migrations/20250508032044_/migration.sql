/*
  Warnings:

  - You are about to drop the column `message` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `chat` table. All the data in the column will be lost.
  - Added the required column `request` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `Chat_receiverId_fkey`;

-- DropIndex
DROP INDEX `Chat_receiverId_fkey` ON `chat`;

-- AlterTable
ALTER TABLE `chat` DROP COLUMN `message`,
    DROP COLUMN `receiverId`,
    ADD COLUMN `request` VARCHAR(191) NOT NULL,
    ADD COLUMN `response` VARCHAR(191) NULL;
