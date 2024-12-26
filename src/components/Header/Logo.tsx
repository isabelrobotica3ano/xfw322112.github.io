import { Bot } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <Bot className="h-8 w-8 text-blue-400" />
      <span className="text-white text-xl font-bold">Isabel Robotica</span>
    </div>
  );
}