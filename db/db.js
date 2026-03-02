import mysql from 'mysql'

class db {
    constructor(){
        if (!db.dbInstance){
            return db.dbInstance
        }
    }
    connection(){
        return this.pool;
    }
    insertStudent(_student){
        async function existentId(){ 
            await this.pool.query(`SELECT * FROM student WHERE id = ${_student.id}`)
        }

        if (rows){
            return false 
        }
        if (typeof(_student) === "student"){
            let  sql = `INSERT INTO student ( id, name, age, email, password, admin_id) VALUES(${_student.id }, ${_student.name}, ${_student.age}, ${_student.email}, ${_student.password}, ${_student.admin_id})`
            this.pool.query(sql)
            return true
        }
        return false
    }
}

export const dbInstance = database()

Object.freeze(dbInstance)