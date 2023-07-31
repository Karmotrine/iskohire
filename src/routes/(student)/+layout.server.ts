import { log_id, role_id, roleid } from "$lib/stores/auth";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();

  const { data, error } = await supabase
  .from('user_login')
  .select('*')
  .eq('user_id', session?.user?.id)
  .single()

  if (data.is_approved == false) {
    throw redirect(303, "/error")
  }

  if (!session || (role_id != 1 && role_id != 4)) {
    throw redirect(303, "/login")
  }
  log_id.set(session?.user?.id)
  return {
    session: await getSession(),
  }
}