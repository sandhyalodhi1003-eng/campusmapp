import { createClient } from '@supabase/supabase-js';

// Default to user's provided Supabase credentials or environment variables
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://quglxuuijgbgorjqnomr.supabase.co';

export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_q90IgC_JSVVqqeS65IFe7w_KATeYdvx';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const isSupabaseConfigured = () => {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
};
