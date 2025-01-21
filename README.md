# Next.js/ Tailwind/ Shadcn/ React Hello World Boilerplate

A simple Hello World application demonstrating component communication using a service pattern in Next.js with TypeScript.

## Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

## Project Structure

```
├── components/
│   └── HomePage/
│       ├── HelloWorldButton.tsx   # Button component that triggers message
│       └── HelloWorldLabel.tsx    # Label component that displays message
├── lib/
│   └── helloworld.ts             # Shared service for state management
├── pages/
│   ├── _app.tsx                  # Next.js app entry point
│   └── index.tsx                 # Main page combining components
├── contexts/
│   └── AppContext.tsx            # Global context (minimal setup)
└── styles/
    └── globals.css               # Global styles
```

## Component Communication

The application demonstrates a simple communication pattern between two components:

1. **HelloWorldButton**: A button component that sets a message
2. **HelloWorldLabel**: A label component that displays the message

### How Components Communicate

- Components communicate through the `HelloWorldService` in `lib/helloworld.ts`
- The service maintains a static message variable
- When the button is clicked:
  1. `HelloWorldButton` calls `HelloWorldService.setMessage()`
  2. It dispatches a custom 'helloworld' event
  3. `HelloWorldLabel` listens for this event and updates its display

### Code Example

```typescript
// When button is clicked
HelloWorldService.setMessage('Hello World!');
window.dispatchEvent(new Event('helloworld'));

// Label component listens for changes
useEffect(() => {
  const handleMessageChange = () => {
    setMessage(HelloWorldService.getMessage());
  };
  window.addEventListener('helloworld', handleMessageChange);
  return () => window.removeEventListener('helloworld', handleMessageChange);
}, []);
```

## Getting Started

1. Install pnpm (if not already installed):
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm type-check # Run TypeScript compiler check
```

## Technologies Used

- Next.js
- TypeScript
- React
- Tailwind CSS
- Shadcn/ui

## Features

- Simple state management using a service pattern
- Event-based component communication
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Modern UI components with Shadcn

## Future
- https://github.com/react-boilerplate/react-boilerplate/tree/master/app
