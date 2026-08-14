export function getContentUrl(override?: string) {
  return override ?? import.meta.env.VITE_CONTENT_URL ?? "";
}

export async function fetchContent(url?: string) {
  const u = getContentUrl(url);
  if (!u) throw new Error("No content URL configured (VITE_CONTENT_URL)");
  const res = await fetch(u, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return res.json();
  return { text: await res.text() };
}
