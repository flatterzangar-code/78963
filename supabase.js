import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl =
'https://hdgwdhdegazenavghqch.supabase.co'

const supabaseKey =
'sb_publishable_XNk_VH-3PadrqG_bNhCkZQ_Trejbz87'

export const supabase =
createClient(
supabaseUrl,
supabaseKey
)