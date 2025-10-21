import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug helper: do NOT leave verbose secret logging in production
console.log('VITE env presence:', {
  VITE_SUPABASE_URL: !!supabaseUrl,
  VITE_SUPABASE_ANON_KEY: !!supabaseAnonKey,
})

if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL is missing from import.meta.env. Ensure .env is in project root, variables are prefixed with VITE_, and restart the dev server (npm run dev).'
  )
}

export const supabase = createClient(
  supabaseUrl as string,
  (supabaseAnonKey ?? '') as string
)