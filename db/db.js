import mysql from 'mysql'

class db {
    constructor(){
        if (!db.dbInstance){
            
        }
    }
}

export const dbInstance = database()

Object.freeze(dbInstance)