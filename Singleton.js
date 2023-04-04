const Database = require('./Database');

// Obține instanța singleton a clasei Database
const db = Database.getInstance();

db.connect()
    .then((connection) => {
        console.log('Hello world!');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
