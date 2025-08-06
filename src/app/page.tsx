"use client";

import { Button, Input, Card, Badge, Spinner, Form } from "@/ui";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="space-y-8">

        <section>
          <h2 className="font-bold font-mono text-xl mb-4"> Input</h2>
          <Card className="p-6 max-w-xl">
            <Input placeholder="Type something..." />
          </Card>
        </section>


        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          <div>
            <h2 className="font-bold font-mono text-xl mb-4"> Buttons</h2>
            <Card className="p-6 flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Card>
          </div>

          <div>
            <h2 className="font-bold font-mono text-xl mb-4">Loading</h2>
            <Card className="p-6 flex items-center justify-center h-40">
              <Spinner />
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-bold font-mono text-xl mb-4"> Badges</h2>
          <Card className="p-6 flex flex-wrap gap-3">
            <Badge variant="default">default</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="error">error</Badge>
          </Card>
        </section>

        <section>
          <h2 className="font-bold font-mono text-xl mb-4"> Form</h2>
          <Card className="p-6">
            <Form
              title="📨 Contact Us"
              onSubmit={(data) => console.log("Form submitted:", data)}
            />
          </Card>
        </section>
      </div>
    </main>
  );
}
