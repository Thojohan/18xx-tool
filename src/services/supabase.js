import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zhvvdmdaupswylpofnba.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodnZkbWRhdXBzd3lscG9mbmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjM0OTMsImV4cCI6MjAyODIzOTQ5M30.daJFjADResBHuZ5k-ODQkz_9LnSAE2fYs-3UWnqo77g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
