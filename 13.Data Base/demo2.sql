-- show databases;
drop database if exists demo2;
create database demo2;
use demo2;
create table animals(
id char(18) primary key default (uuid()),
name varchar(255) NOT null unique,
englishName varchar(255) NOT null unique,
sciName
diet
lifestyle
location
slogan
group
image
created_at TIMESTAMP DEFAULT (NOW()),
updated_at  TIMESTAMP DEFAULT (NOW()),
);

: "57293b41-e896-4a7d-a006-74cc8e5c2506",
            : "Guepardo",
            : "Cheetah",
            : "Acinonyx jubatus",
            : "Carnívoro",
            : "Diurno",
            : "Asia y Africa",
            : "¡El mamífero terrestre más rápido del mundo!",
            : "Mamíferos",
            