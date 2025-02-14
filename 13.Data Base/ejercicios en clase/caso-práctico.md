# Caso Práctico:

## Lista de entidades y atributos

### Entidades y Atributos:

- Alumno: id_alumno, nombre, apellidos, fecha_nacimiento, dirección, teléfono, email
- Asignatura: id_asignatura, nombre, curso, horas_semana
- Grupo: id_grupo, nombre, curso, letra
- Profesor: id_profesor, nombre, apellidos, fecha_nacimiento, dirección, teléfono, email
- Departamento: id_departamento, nombre, teléfono, email
- Aula: id_aula, capacidad, ubicación
-

## Identificación de relaciones entre entidades

       Relación        |         Entidades           |          Cardinalidad          |        Opcionalidad        |                          Atributos                          |

     se_matricula          alumno, asignatura                       M:N                             1:1                          fecha_matriculación, calificación
     enseña                profesor, asignatura                     M:N                             1:1
     pertenece             profesor, departamento                   N:1                             1:1                          es_director

## Diagrama E/R
