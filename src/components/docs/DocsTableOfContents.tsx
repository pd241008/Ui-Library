import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export const DocsTableOfContents = () => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the current page
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4'))
      .map((heading) => ({
        id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }))
      .filter(item => item.id && item.title);

    setToc(headings);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-20">
      <h4 className="mb-4 text-sm font-semibold text-foreground">On This Page</h4>
      <nav className="space-y-1">
        {toc.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={cn(
              'block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors',
              'border-l-2 border-transparent hover:border-border',
              item.level === 1 && 'pl-0',
              item.level === 2 && 'pl-4',
              item.level === 3 && 'pl-8',
              item.level === 4 && 'pl-12',
              activeId === item.id && 'text-foreground border-primary font-medium'
            )}
          >
            <span className="py-1 block">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};