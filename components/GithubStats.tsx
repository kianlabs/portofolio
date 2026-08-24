"use client";

import { useEffect, useState } from "react";
import SystemField from "./SystemField";
import SectionHeader from "./SectionHeader";

const USERNAME = "kianlabs";

interface GhUser {
  public_repos: number;
  followers: number;
  created_at: string;
}

export default function GithubStats() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((r) => {
        if (!r.ok) throw new Error("github api error");
        return r.json();
      })
      .then((data: GhUser) => setUser(data))
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  return (
    <section aria-label="GitHub statistics" style={{ marginBottom: "14px" }}>
      <SectionHeader label="GITHUB" meta={`api.github.com/${USERNAME}`} />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "560px" }}>
        {user ? (
          <>
            <SystemField label="REPOS" value={String(user.public_repos)} />
            <SystemField label="FOLLOWERS" value={String(user.followers)} />
            <SystemField
              label="MEMBER SINCE"
              value={new Date(user.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            />
            <SystemField
              label="PROFILE"
              value={
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-sec)", textDecoration: "none" }}
                >
                  github.com/{USERNAME} ↗
                </a>
              }
            />
          </>
        ) : (
          <div style={{ fontSize: "13px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>
            <span className="cursor-blink" /> fetching from api.github.com...
          </div>
        )}
      </div>
    </section>
  );
}
