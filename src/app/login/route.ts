import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export const GET = async () => {
  const { user } = await withAuth();

  if (user) {
    return redirect("/home");
  }

  const signInUrl = await getSignInUrl();

  return redirect(signInUrl);
};
