"use client";

import { useEffect, useState } from "react";

const links = [
  ["listen", "Listen before solving"],
  ["patterns", "Find the useful pattern"],
  ["experiment", "Choose an experiment"],
  ["reflect", "Reflect and adjust"],
] as const;

export default function ArticleTOC() {
  const [active, setActive] = useState("listen");

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.2, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="article-toc" aria-label="In this article">
      <b>In this article</b>
      {links.map(([id, label]) => (
        <a
          className={active === id ? "is-active" : ""}
          aria-current={active === id ? "location" : undefined}
          href={"#" + id}
          key={id}
        >
          {label}
        </a>
      ))}
    </aside>
  );
}
