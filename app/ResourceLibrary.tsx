'use client';

import { useEffect, useMemo, useState } from 'react';

export type ResourceItem = { slug: string; category: string; title: string; excerpt: string; time: string; image: string; theme?: string };
const pageSize = 6;
const categoryHeadings: Record<string, string> = {
  'Career clarity': 'Questions and reflections for seeing what matters next.',
  'Career change': 'Explore a new direction without forcing a dramatic answer.',
  'Expat careers': 'Navigate work, identity and belonging across cultures.',
  'Job search': 'Build a focused search that protects your energy.',
  'LinkedIn visibility': 'Tell a clearer professional story and create useful conversations.',
  'Confidence at work': 'Reconnect with your value in a grounded, credible way.',
};

export default function ResourceLibrary({ articles }: { articles: ResourceItem[] }) {
  const categories = ['All resources', ...Array.from(new Set(articles.map(article => article.category)))];
  const [category, setCategory] = useState('All resources');
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => category === 'All resources' ? articles : articles.filter(article => article.category === category), [articles, category]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    const selected = new URLSearchParams(location.search).get('category');
    if (selected && categories.includes(selected)) setCategory(selected);
  }, []);

  const selectCategory = (next: string) => {
    setCategory(next); setPage(1);
    const url = new URL(location.href);
    if (next === 'All resources') url.searchParams.delete('category'); else url.searchParams.set('category', next);
    history.replaceState({}, '', url);
  };
  const go = (next: number) => { setPage(Math.min(pageCount, Math.max(1, next))); document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  return <>
    <div className="topic-filter" role="tablist" aria-label="Resource topics">{categories.map(item => <button role="tab" aria-selected={category === item} className={category === item ? 'is-active' : ''} onClick={() => selectCategory(item)} key={item}>{item}</button>)}</div>
    <section className="resources-editorial" id="latest"><header><p className="eyebrow">{category === 'All resources' ? 'Latest resources' : category}</p><h2>{category === 'All resources' ? 'Start with the question closest to yours.' : categoryHeadings[category]}</h2></header><div className="resource-card-grid">{visible.map((article, index) => <a href={'/resources/' + article.slug} className={'resource-card visual-' + (article.theme || (index % 6))} key={article.slug}><figure><img src={article.image} alt="" loading="lazy"/><span aria-hidden="true">{String((page - 1) * pageSize + index + 1).padStart(2, '0')}</span><i aria-hidden="true"/></figure><span>{article.category} · {article.time}</span><h3>{article.title}</h3><p>{article.excerpt}</p><b>Read article ↗</b></a>)}</div></section>
    <nav className="resource-pagination" aria-label="Resource pages"><button onClick={() => go(page - 1)} disabled={page === 1}>← Previous</button>{Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <button className={page === number ? 'is-active' : ''} aria-current={page === number ? 'page' : undefined} onClick={() => go(number)} key={number}>{number}</button>)}<button onClick={() => go(page + 1)} disabled={page === pageCount}>Next →</button></nav>
  </>;
}
