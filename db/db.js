import pg from "pg";
const { Pool } = pg;
import express from 'express'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const health = pool.connect();

export default function databaseConnect() {
  const { usuario, senha } = req.body;

  const { query } = pool.query(`SELECT * FROM user WHERE name = ${usuario}`);
  if (!health) {
    console.log("erro");
    return;
  }
  console.log("deu bom");
  return query
}
