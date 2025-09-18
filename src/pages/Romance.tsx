import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import book3 from "@/assets/book3.jpg";

const Romance = () => {
  const romanceBooks = [
    {
      title: "It Ends with Us",
      author: "Colleen Hoover",
      genre: "Contemporary Romance",
      rating: 4.7,
      description: "A heart-wrenching story about a woman who must choose between her first love and her husband.",
      image: book3,
    },
    {
      title: "The Hating Game",
      author: "Sally Thorne",
      genre: "Enemies to Lovers",
      rating: 4.5,
      description: "Two office rivals discover there's a thin line between hate and love in this witty romance.",
      image: book3,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic Romance",
      rating: 4.8,
      description: "The timeless story of Elizabeth Bennet and Mr. Darcy's journey from prejudice to love.",
      image: book3,
    },
    {
      title: "Beach Read",
      author: "Emily Henry",
      genre: "Contemporary Romance",
      rating: 4.4,
      description: "Two rival writers challenge each other to write outside their comfort zones during a summer by the lake.",
      image: book3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Romance</h1>
          <p className="text-muted-foreground">
            Fall in love with heartwarming stories of passion, connection, and happily ever afters.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {romanceBooks.map((book, index) => (
            <div 
              key={index} 
              className="animate-card-entrance opacity-0" 
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Romance;