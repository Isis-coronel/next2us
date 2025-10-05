
import React from 'react';
import { ChatIcon } from './IconComponents';

export default function ChatbotButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-teal text-navy p-4 rounded-full shadow-lg hover:bg-amber focus:outline-none focus:ring-2 focus:ring-amber focus:ring-opacity-50 transition-all transform hover:scale-110">
      <ChatIcon />
      <span className="sr-only">Ask Nex2us</span>
    </button>
  );
}
