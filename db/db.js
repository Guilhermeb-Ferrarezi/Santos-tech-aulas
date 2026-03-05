import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const health = pool.connect();

export default function databaseConnect() {
  if (!health) {
    console.log("erro");
    return;
  }
  console.log("deu bom");
}



