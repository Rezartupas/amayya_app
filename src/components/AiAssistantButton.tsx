// src/components/AiAssistantButton.tsx
"use client";

import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface AiAssistantButtonProps {
  onClick: () => void;
}

export function AiAssistantButton({ onClick }: AiAssistantButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={onClick}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl transition-transform hover:scale-110 z-50"
          aria-label="Buka Asisten AI"
          size="icon"
        >
          <Bot className="h-8 w-8" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-primary text-primary-foreground">
        <p>Tanya Asisten AI</p>
      </TooltipContent>
    </Tooltip>
  );
}
