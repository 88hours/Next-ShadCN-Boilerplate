import React, { useState, useEffect } from 'react';
import { HelloWorldService } from '../../lib/helloworld';
import { Label } from '@/components/ui/label';

export const HelloWorldLabel: React.FC = () => {
  const [message, setMessage] = useState(HelloWorldService.getMessage());

  useEffect(() => {
    const handleMessageChange = () => {
      setMessage(HelloWorldService.getMessage());
    };

    window.addEventListener('helloworld', handleMessageChange);
    return () => window.removeEventListener('helloworld', handleMessageChange);
  }, []);

  return (
      <Label className="text-xl font-bold">{message}</Label>
  );
}; 