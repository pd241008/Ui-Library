
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs/Tabs';
import { Eye, Code } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
}

export const ComponentPreview = ({ children, code, title }: ComponentPreviewProps) => {
  return (
    <div className="my-6">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="preview">
          <div className="rounded-lg border bg-card p-8">
            <div className="flex items-center justify-center min-h-[200px]">
              {children}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
};