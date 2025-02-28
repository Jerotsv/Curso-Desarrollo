# Proyecto básico de node y typescript

Aqui tenemos los archivos basicos que debemos tener con su configuracion para proyectos basicos con node y ts

## Instalamos Prisma

Instalamos prisma para hacer ejercicios de Select en la tabla world:
 
 - npm i -D prisma
 - npx prisma init --datasource-provider mysql
  
Cogemos mundo de la base de datos(en el archivo de prisma y en el .env) y para traernos la base de datos usamos:

 - npx prisma db pull
