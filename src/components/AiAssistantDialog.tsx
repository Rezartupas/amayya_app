// src/components/AiAssistantDialog.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { umrahTravelAssistant } from '@/ai/flows/umrah-travel-assistant';
import type { UmrahTravelAssistantInput, UmrahTravelAssistantOutput } from '@/ai/flows/umrah-travel-assistant';
import { Bot, User, SendHorizonal, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assuming Avatar is available

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AiAssistantDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function AiAssistantDialog({ isOpen, onOpenChange }: AiAssistantDialogProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial-greeting', role: 'assistant', content: 'Assalamualaikum! Ada yang bisa saya bantu terkait perjalanan Umrah Anda?' }
      ]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const input: UmrahTravelAssistantInput = { question: inputValue };
      const result: UmrahTravelAssistantOutput = await umrahTravelAssistant(input);
      const assistantMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: result.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling AI assistant:", error);
      const errorMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px] p-0 flex flex-col max-h-[80vh]">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="flex items-center font-headline text-primary">
            <Bot className="h-6 w-6 mr-2 text-accent" />
            Asisten Perjalanan AI Amàyyà
          </DialogTitle>
          <DialogDescription>
            Tanyakan apa saja seputar Umrah, visa, atau paket kami.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end space-x-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <Avatar className="h-8 w-8 border-2 border-accent">
                    {/* Placeholder, replace with actual image or keep fallback */}
                    {/* <AvatarImage src="https://placehold.co/40x40.png" alt="AI" /> */}
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
                 {msg.role === 'user' && (
                  <Avatar className="h-8 w-8 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end space-x-2">
                 <Avatar className="h-8 w-8 border-2 border-accent">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                <div className="bg-muted text-muted-foreground rounded-lg px-4 py-3">
                  <Loader2 className="h-5 w-5 animate-spin text-accent" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="p-4 border-t flex items-center space-x-2 bg-background">
          <Input
            type="text"
            placeholder="Ketik pertanyaan Anda..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow"
            disabled={isLoading}
            aria-label="Pesan untuk Asisten AI"
          />
          <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading || !inputValue.trim()}>
            <SendHorizonal className="h-5 w-5" />
            <span className="sr-only">Kirim</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
