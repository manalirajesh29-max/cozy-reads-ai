import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import book1 from "@/assets/book1.jpg";

const Fiction = () => {
  const fictionBooks = [
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Contemporary Fiction",
      rating: 4.8,
      description: "A reclusive Hollywood icon finally tells her story to a young journalist, revealing shocking secrets.",
      image: book1,
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Literary Fiction",
      rating: 4.6,
      description: "A mystery and coming-of-age story set in the marshlands of North Carolina.",
      image: book1,
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Philosophical Fiction",
      rating: 4.5,
      description: "Between life and death, Nora finds a library containing infinite lives she could have lived.",
      image: book1,
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      genre: "Mythological Fiction",
      rating: 4.7,
      description: "The story of Circe, the Greek goddess of magic, and her journey of self-discovery.",
      image: book1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Fiction</h1>
          <p className="text-muted-foreground">
            Discover captivating stories that transport you to different worlds and explore the human experience.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {fictionBooks.map((book, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Fiction;