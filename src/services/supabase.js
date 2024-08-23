import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uijyprqgzikpgwadgzpl.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpanlwcnFnemlrcGd3YWRnenBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTUyOTYsImV4cCI6MjAzMjU3MTI5Nn0.IIP52FF-RobEwLdpDXKK9T2OLG5cscIkF1PiSUjqUy8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
