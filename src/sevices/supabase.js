import { createClient } from "@supabase/supabase-js";

const API_URL = "https://fltqhtyomklwsnzynajt.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdHFodHlvbWtsd3NuenluYWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NDA5MDAsImV4cCI6MTk5NDAxNjkwMH0.UckaIIMwPclhtwerRV98nrygxWwROegn9BpEFGPQLzc";

const supabase = createClient(API_URL, API_KEY);

export default supabase;
