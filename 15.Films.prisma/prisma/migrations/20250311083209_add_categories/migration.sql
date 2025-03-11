/*
  Warnings:

  - You are about to drop the `_categoriestofilm` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_categoriestofilm` DROP FOREIGN KEY `_CategoriesToFilm_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categoriestofilm` DROP FOREIGN KEY `_CategoriesToFilm_B_fkey`;

-- DropTable
DROP TABLE `_categoriestofilm`;

-- CreateTable
CREATE TABLE `review_user_film` (
    `review_id` VARCHAR(191) NOT NULL,
    `film_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `review_user_film_film_id_user_id_key`(`film_id`, `user_id`),
    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoryToFilm` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CategoryToFilm_AB_unique`(`A`, `B`),
    INDEX `_CategoryToFilm_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_key` ON `categories`(`name`);

-- AddForeignKey
ALTER TABLE `review_user_film` ADD CONSTRAINT `review_user_film_film_id_fkey` FOREIGN KEY (`film_id`) REFERENCES `films`(`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review_user_film` ADD CONSTRAINT `review_user_film_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToFilm` ADD CONSTRAINT `_CategoryToFilm_A_fkey` FOREIGN KEY (`A`) REFERENCES `categories`(`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToFilm` ADD CONSTRAINT `_CategoryToFilm_B_fkey` FOREIGN KEY (`B`) REFERENCES `films`(`film_id`) ON DELETE CASCADE ON UPDATE CASCADE;
