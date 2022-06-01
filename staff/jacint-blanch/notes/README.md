# Apertura


# Notes

# TODO

- forma de trabajo, primero spec, luego logic, luego handler y luego enrutar

1- Encender motor: ./bin/mongod --dbpath data

1.1- Correr Base de Datos
    - ./bin/mongo
    - use notes-db
    - show collections
    - db.users.find().pretty()

2- Levantar servidor: npm run start-watch src/    --- desde notes
3- Tests bien o no npx mocha src/logic(o carpeta que queramos)
4- Idex.js global (post/get/path....)
5- Insomnia/url

-- debugger: npx mocha --inspect-brk src/logic/retrieveUser.js


-createNote/retrieveNotes/updateNote/deleteNote