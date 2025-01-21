'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HelloWorldService } from '@/lib/helloworld';

export const HelloWorldLabel: React.FC = () => {
  const [message, setMessage] = useState<string>(HelloWorldService.getMessage());

  useEffect(() => {
    const handleMessageChange = (): void => {
      setMessage(HelloWorldService.getMessage());
    };

    window.addEventListener('helloworld', handleMessageChange);
    return () => window.removeEventListener('helloworld', handleMessageChange);
  }, []);

  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-xl font-semibold text-center">
          {message || 'Click the button above!'}
        </p>
      </CardContent>
    </Card>
  );
}; 