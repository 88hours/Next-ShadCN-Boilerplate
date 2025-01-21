import React from 'react';
import { HelloWorldButton } from '../components/HomePage/HelloWorldButton';
import { HelloWorldLabel } from '../components/HomePage/HelloWorldLabel';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello World App</h1>
      <HelloWorldButton />
      <Separator />
      <HelloWorldLabel />
    </div>
  );
}
