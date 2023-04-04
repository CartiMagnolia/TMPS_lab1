const mysql = require('mysql');

class Database {
    constructor() {
        this.connection = null;
        this.connected = false;
    }

    connect() {
        return new Promise((resolve, reject) => {
            if (this.connected) {
                resolve(this.connection);
            } else {
                const mysql = require('mysql');
                this.connection = mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: 'admin',
                    database: 'rezervarea_ta'
                });
                this.connection.connect((err) => {
                    if (err) {
                        console.error('Error connecting to database:', err);
                        reject(err);
                    } else {
                        console.log('Connected to database');
                        this.connected = true;
                        resolve(this.connection);
                    }
                });
            }
        });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

module.exports = Database;
