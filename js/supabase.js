const SUPABASE_URL =
    "https://ptvbrhlwnajazxdqwkro.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "YOUR_PUBLISHABLE_KEY_HERE";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
