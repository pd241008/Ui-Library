'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  children: React.ReactNode;
  code: string;
  className?: string;
}

export const FlipCard = ({ children, code, className }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={cn('relative w-full h-full perspective', className)}>
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-500 transform-style-preserve-3d',
          flipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white p-4 rounded-xl shadow">
          {children}
          <button
            onClick={() => setFlipped(true)}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-xs px-2 py-1 rounded shadow"
          >
            {'</>'}
          </button>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 text-white p-4 rounded-xl shadow overflow-auto">
          <pre className="whitespace-pre-wrap text-sm">
            <code>{code}</code>
          </pre>
          <button
            onClick={() => setFlipped(false)}
            className="absolute top-2 right-2 bg-gray-100 text-black text-xs px-2 py-1 rounded shadow"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
