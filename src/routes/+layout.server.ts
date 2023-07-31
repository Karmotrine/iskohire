import { role_id, roleid } from "$lib/stores/auth";

export const load = async ({ locals: { supabase, getSession } }) => {
    console.log(role_id)  
    return {
      session: await getSession(),
    }
  }