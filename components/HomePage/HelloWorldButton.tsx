import React from 'react';
import { HelloWorldService } from '../../lib/helloworld';
import { Button } from '../ui/button';

export const HelloWorldButton: React.FC = () => {
  const handleClick = () => {
    HelloWorldService.setMessage('Hello World!');
    // Force a re-render of components that depend on this message
    window.dispatchEvent(new Event('helloworld'));
  };

  return (
      <Button 
        onClick={handleClick}
        variant="default"
      >
        Click Me!
      </Button>
  );
}; 