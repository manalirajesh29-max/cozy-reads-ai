import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import book1 from "@/assets/book1.jpg";

const SciFi = () => {
  const sciFiBooks = [
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Space Opera",
      rating: 4.8,
      description: "Set in a distant future, Paul Atreides navigates politics, religion, and ecology on the desert planet Arrakis.",
      image: book1,
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "Hard Science Fiction",
      rating: 4.7,
      description: "An astronaut is stranded on Mars and must use his ingenuity to survive until rescue arrives.",
      image: book1,
    },
    {
      title: "Neuromancer",
      author: "William Gibson",
      genre: "Cyberpunk",
      rating: 4.3,
      description: "A washed-up computer hacker is hired for one last job in cyberspace.",
      image: book1,
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      genre: "Dystopian Fiction",
      rating: 4.5,
      description: "In a totalitarian future, women are subjugated and used solely for reproduction.",
      image: book1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Science Fiction</h1>
          <p className="text-muted-foreground">
            Explore futuristic worlds, advanced technology, and the possibilities of tomorrow.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {sciFiBooks.map((book, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SciFi;