const SUPABASE_URL =
    "https://ptvbrhlwnajazxdqwkro.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_ACZKtHE4Wm-FDNfaHD9hzw_Bhb_6Opl";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
