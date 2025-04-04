-- MySQL Script generated by MySQL Workbench
-- Sun Feb 16 12:23:23 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Club_de_padel
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Club_de_padel
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Club_de_padel` DEFAULT CHARACTER SET utf8 ;
USE `Club_de_padel` ;

-- -----------------------------------------------------
-- Table `Club_de_padel`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `teléfono` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `fecha_alta` DATETIME NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `teléfono_UNIQUE` (`teléfono` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`pista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`pista` (
  `id_pista` INT NOT NULL AUTO_INCREMENT,
  `número` INT NOT NULL,
  `tipo` ENUM('cubierta', 'exterior') NOT NULL,
  `precio_hora` DECIMAL(2,2) NOT NULL,
  `estado` ENUM('disponible', 'ocupada') NOT NULL,
  PRIMARY KEY (`id_pista`),
  UNIQUE INDEX `número_UNIQUE` (`número` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`empleado` (
  `id_empleado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `teléfono` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `cargo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  UNIQUE INDEX `teléfono_UNIQUE` (`teléfono` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DECIMAL(3,2) NOT NULL,
  `stock` INT NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`club`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`club` (
  `id_club` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `dirección` VARCHAR(100) NOT NULL,
  `teléfono` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `empleado_id_empleado` INT NOT NULL,
  `pista_id_pista` INT NOT NULL,
  `producto_id_producto` INT NOT NULL,
  PRIMARY KEY (`id_club`, `empleado_id_empleado`, `pista_id_pista`, `producto_id_producto`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `teléfono_UNIQUE` (`teléfono` ASC) VISIBLE,
  INDEX `fk_club_empleado1_idx` (`empleado_id_empleado` ASC) VISIBLE,
  INDEX `fk_club_pista1_idx` (`pista_id_pista` ASC) VISIBLE,
  INDEX `fk_club_producto1_idx` (`producto_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_club_empleado1`
    FOREIGN KEY (`empleado_id_empleado`)
    REFERENCES `Club_de_padel`.`empleado` (`id_empleado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_club_pista1`
    FOREIGN KEY (`pista_id_pista`)
    REFERENCES `Club_de_padel`.`pista` (`id_pista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_club_producto1`
    FOREIGN KEY (`producto_id_producto`)
    REFERENCES `Club_de_padel`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`venta` (
  `cliente_id_cliente` INT NOT NULL,
  `producto_id_producto` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `total` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`cliente_id_cliente`, `producto_id_producto`),
  INDEX `fk_cliente_has_producto_producto1_idx` (`producto_id_producto` ASC) VISIBLE,
  INDEX `fk_cliente_has_producto_cliente_idx` (`cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_producto_cliente`
    FOREIGN KEY (`cliente_id_cliente`)
    REFERENCES `Club_de_padel`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_has_producto_producto1`
    FOREIGN KEY (`producto_id_producto`)
    REFERENCES `Club_de_padel`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Club_de_padel`.`reservar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Club_de_padel`.`reservar` (
  `cliente_id_cliente` INT NOT NULL,
  `pista_id_pista` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `hora_inicio` DATETIME NOT NULL,
  `hora_fin` DATETIME NOT NULL,
  `total` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`cliente_id_cliente`, `pista_id_pista`),
  INDEX `fk_cliente_has_pista_pista1_idx` (`pista_id_pista` ASC) VISIBLE,
  INDEX `fk_cliente_has_pista_cliente1_idx` (`cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_pista_cliente1`
    FOREIGN KEY (`cliente_id_cliente`)
    REFERENCES `Club_de_padel`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_has_pista_pista1`
    FOREIGN KEY (`pista_id_pista`)
    REFERENCES `Club_de_padel`.`pista` (`id_pista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
