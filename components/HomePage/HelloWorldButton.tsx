'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { HelloWorldService } from '@/lib/helloworld';

export const HelloWorldButton: React.FC = () => {
  const handleClick = (): void => {
    HelloWorldService.setMessage('Hello World!');
    // Force a re-render of components that depend on this message
    window.dispatchEvent(new Event('helloworld'));
  };

  return (
    <Button 
      onClick={handleClick}
      variant="default"
      className="w-full max-w-xs"
    >
      Click Me!
    </Button>
  );
}; 