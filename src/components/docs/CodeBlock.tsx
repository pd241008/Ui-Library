import { useState } from 'react';
import { Button } from '@/ui/button/Button';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock = ({ code, language = 'tsx', title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {title && (
        <div className="px-4 py-2 bg-muted rounded-t-lg border-b">
          <span className="text-sm font-medium">{title}</span>
        </div>
      )}
      <div className="relative bg-docs-code-bg rounded-lg overflow-hidden">
        <Button
          variant="ghost"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 h-8 w-8 text-zinc-400 hover:text-zinc-100"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <pre className="p-4 text-sm text-zinc-100 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};