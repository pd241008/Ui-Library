"use client";

import { Button, Input, Card, Badge, Spinner } from "@/ui";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* Large Input Card */}
        <Card className="p-4 col-span-1 sm:col-span-2 lg:col-span-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="font-semibold mb-2">Input</h2>
          <Input placeholder="Type something..." />
        </Card>

        {/* Tall Spinner */}
        <Card className="p-4 col-span-1 sm:col-span-1 row-span-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex justify-center items-center">
          <Spinner />
        </Card>

        {/* Compact Buttons */}
        <Card className="p-4 col-span-1 sm:col-span-1 lg:col-span-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="font-semibold mb-2">Buttons</h2>
          <div className="flex gap-2 flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>

        {/* Wide Badge Section */}
        <Card className="p-4 col-span-1 sm:col-span-2 lg:col-span-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="font-semibold mb-2">Badges</h2>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">default</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="error">error</Badge>
          </div>
        </Card>
      </div>
    </main>
  );
}
