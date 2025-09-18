import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import book2 from "@/assets/book2.jpg";

const NonFiction = () => {
  const nonFictionBooks = [
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      rating: 4.7,
      description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
      image: book2,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      rating: 4.8,
      description: "A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge.",
      image: book2,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      rating: 4.6,
      description: "An easy and proven way to build good habits and break bad ones through tiny changes.",
      image: book2,
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      genre: "Spirituality",
      rating: 4.4,
      description: "A guide to spiritual enlightenment through living in the present moment.",
      image: book2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Non-Fiction</h1>
          <p className="text-muted-foreground">
            Expand your knowledge with insightful books on history, science, personal development, and more.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {nonFictionBooks.map((book, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NonFiction;