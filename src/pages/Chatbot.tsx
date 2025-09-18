import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, BookOpen, HelpCircle } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your book recommendation assistant. I can help you find books based on your preferences, answer questions about genres, authors, or provide reading suggestions. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const suggestedQuestions = [
    "Recommend me a mystery book",
    "What's a good romance novel for beginners?",
    "Tell me about science fiction classics",
    "I want a book similar to Harry Potter",
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    // Simple response logic (in a real app, this would connect to an AI service)
    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputMessage),
      isUser: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage("");
  };

  const getBotResponse = (question: string): string => {
    const lowercaseQuestion = question.toLowerCase();
    
    if (lowercaseQuestion.includes("mystery") || lowercaseQuestion.includes("thriller")) {
      return "For mystery lovers, I'd recommend 'Gone Girl' by Gillian Flynn for psychological suspense, or 'The Girl with the Dragon Tattoo' by Stieg Larsson for Nordic noir. Both are page-turners with complex plots!";
    }
    
    if (lowercaseQuestion.includes("romance")) {
      return "For romance, 'Pride and Prejudice' by Jane Austen is a timeless classic, while 'The Hating Game' by Sally Thorne offers a modern enemies-to-lovers story. Both are perfect for different moods!";
    }
    
    if (lowercaseQuestion.includes("science fiction") || lowercaseQuestion.includes("sci-fi")) {
      return "'Dune' by Frank Herbert is the ultimate space opera classic, while 'The Martian' by Andy Weir offers hard science fiction with humor. Both are excellent entry points to sci-fi!";
    }
    
    if (lowercaseQuestion.includes("harry potter")) {
      return "If you loved Harry Potter, try 'The Name of the Wind' by Patrick Rothfuss for fantasy with a school setting, or 'Percy Jackson' series by Rick Riordan for mythological adventures!";
    }
    
    return "That's an interesting question! I'd be happy to help you find the perfect book. Could you tell me more about what genres you enjoy or what mood you're in for reading?";
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Book Recommendation Assistant
          </h1>
          <p className="text-muted-foreground">
            Ask me anything about books, genres, authors, or get personalized recommendations!
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Try asking:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left justify-start h-auto py-2 px-3 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex animate-fade-in ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Input
            placeholder="Ask me about books, genres, or get recommendations..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!inputMessage.trim()} className="hover-scale">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;