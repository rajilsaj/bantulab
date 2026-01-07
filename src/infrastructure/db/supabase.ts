import { createClient } from "@supabase/supabase-js";
import { env } from "@/config/env";

// 🔍 TEMPORARY DEBUG LOG (remove after check)
// console.log("SUPABASE_URL:", env.SUPABASE_URL ? "LOADED" : "MISSING");

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

