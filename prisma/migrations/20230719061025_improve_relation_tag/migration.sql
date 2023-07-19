/*
  Warnings:

  - You are about to drop the column `blogId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Tag_blogId_idx` ON `Tag`;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `blogId`;

-- CreateTable
CREATE TABLE `_BlogToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BlogToTag_AB_unique`(`A`, `B`),
    INDEX `_BlogToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
