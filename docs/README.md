
# Instalar y Habilitar Sequelize y Sequelize-CLI
- Para migraciones, modelos, seeders y conexion con BD

## 1. Instalar sequelize
```
npm i sequelize 
```
## 2. Instalar sequelize - cli  
```
npm install --save-dev sequelize-cli
```
### 3. Configurar .sequelizerc
```
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'database.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```
## 4. Iniciar un nuevo proyecto con sequelize-cli
```
npx sequelize-cli init
```
# Comandos de GIT 
## Descargar e Instalar GIT 

- Para configurar agregar usuario y correo 
```
git config --global user.name "nombre"
git config --global user.email "micorreo@mail.com"
```
- Inicializar crear un nuevo repositorio local o clonar
```
git init
```
- Para clonar un repositorio existente
```
git clone 
```
- para ignorar archivos y o carpetas
- creamos un archivo (.gitignore) y registramos los archivos o carpetas
```
/node_modules
/dist
.env
```
- Registrar el repositorio remoto (GITHUB,GITLAB,BITBUCKET)
```
git remote add origin https://github.com/jvictorguzman/backend_app_node_Ministerio.git
```
-------------------------

## Para agregar todos los archivos

```
git add .
```
## Para agregar o registrar los cambios agregamos un mensaje (commit)
```
git commit -m "mensaje o descripcion"
```

## Para subir todos lo cambios al repositorio remoto
```
git push -u origin master
```