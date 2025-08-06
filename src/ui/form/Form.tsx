"use client";
import React from "react";
import { Button, Card, Input } from "../";

interface FormProps {
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  title?: string;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  title = " Fill the Form",
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSubmit?.(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-4 p-4 border-2 border-black rounded bg-neutral-100 shadow-md"
    >
      <h2 className="text-xl font-bold font-mono text-center">{title}</h2>

      <div className="space-y-2">
        <label className="block font-mono text-sm text-black" htmlFor="name">
          Name
        </label>
        <Input id="name" name="name" placeholder="Enter your name" required />
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-sm text-black" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-sm text-black" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Write your message"
          className="w-full px-3 py-2 border-2 border-black rounded shadow-sm font-mono bg-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>
       <Card>  <Button  variant="ghost">Submit</Button></Card>
    
    </form>
  );
};
