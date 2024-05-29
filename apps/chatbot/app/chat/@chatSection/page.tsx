import { Card } from "@chatbot-components/ui/card";
import { Textarea } from "@chatbot-components/ui/textarea";
import React from "react";

export default function ChatSection() {
  return (
    <Card className="p-2 h-full bg-background relative">
      <div className="absolute bottom-10 right-10 left-10">
        <Textarea
          className="w-full border-2 border-foreground max-h-36"
          placeholder="Ask a question"
        />
      </div>
    </Card>
  );
}
