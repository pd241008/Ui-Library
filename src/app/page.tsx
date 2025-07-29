import { Button, Input, Card, Badge, Spinner } from "@/ui";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Test UI Library</h1>
        <Input placeholder="Type something..." />
        <div className="space-x-2 mt-4">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="mt-4 space-x-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
        </div>
        <div className="mt-4">
          <Spinner />
        </div>
      </Card>
    </main>
  );
}
