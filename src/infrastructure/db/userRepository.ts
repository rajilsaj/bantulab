import { supabase } from "./supabase";

/**
 * Insert a user into the database
 * Infrastructure layer only (no business logic)
 */
export async function insertUser(email: string) {
  const { data, error } = await supabase
    .from("users")
    .insert({ email })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

