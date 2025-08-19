import { useState } from 'react';
import { Button } from '@/ui/button/Button';
import { Menu, X, Sun, Moon } from 'lucide-react';

// Temporary stubs
const DocsNavigation = ({ currentSection }: { currentSection?: string }) => (
  <nav className="p-4">Docs Nav Placeholder ({currentSection})</nav>
);
const DocsTableOfContents = () => (
  <div className="p-4">TOC Placeholder</div>
);

interface DocsLayoutProps {
  children: React.ReactNode;
  currentSection?: string;
}

export const DocsLayout = ({ children, currentSection }: DocsLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
           
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                UI
              </div>
              <h1 className="text-xl font-bold">UI Library</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost"  onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-200 ease-in-out
          md:relative md:translate-x-0 md:w-72
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          bg-muted border-r pt-16 md:pt-0
        `}>
          <DocsNavigation currentSection={currentSection} />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="flex">
            {/* Content */}
            <div className="flex-1 px-6 py-8 max-w-4xl">
              {children}
            </div>
            
            {/* Table of Contents */}
            <aside className="hidden xl:block w-64 flex-shrink-0 px-4 py-8">
              <DocsTableOfContents />
            </aside>
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
