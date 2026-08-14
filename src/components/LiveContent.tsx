import React, { useEffect, useState } from "react";

type LiveContentProps = {
  url?: string;
};

export default function LiveContent({ url }: LiveContentProps) {
  const contentUrl = url ?? import.meta.env.VITE_CONTENT_URL;
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!contentUrl) {
      setErr("No content URL configured (VITE_CONTENT_URL)");
      setLoading(false);
      return;
    }
    let mounted = true;
    fetch(contentUrl, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        const ct = res.headers.get("content-type") || "";
        if (ct.includes("application/json")) return res.json();
        return res.text().then((t) => ({ text: t }));
      })
      .then((data) => {
        if (!mounted) return;
        setContent(data);
        setLoading(false);
      })
      .catch((e) => {
        if (!mounted) return;
        setErr(String(e));
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [contentUrl]);

  if (loading) return <div>Loading content…</div>;
  if (err) return <div style={{ color: "#b00" }}>Error loading content: {err}</div>;
  if (!content) return null;

  if (content.html) return <div dangerouslySetInnerHTML={{ __html: content.html }} />;
  if (content.text) return <pre>{content.text}</pre>;
  return <pre>{JSON.stringify(content, null, 2)}</pre>;
}
