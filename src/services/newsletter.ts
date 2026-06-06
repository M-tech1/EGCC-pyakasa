/**
 * Newsletter service abstraction. Replace the body with a Firestore write
 * or your email provider's API when ready — call sites stay the same.
 */
export async function subscribeToNewsletter(email: string): Promise<{ ok: boolean }> {
  await new Promise((r) => setTimeout(r, 400));
  return { ok: /\S+@\S+\.\S+/.test(email) };
}
