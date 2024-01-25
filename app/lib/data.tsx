import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function checkIfEmailExists(email: string) {
  try {
    const data = await sql`
    SELECT ${email} FROM users LIMIT 1
    `;
    return data.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to check for emails");
  }
}
