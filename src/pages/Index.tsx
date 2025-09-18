import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";

const Index = () => {
  const featuredBooks = [
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Contemporary Fiction",
      rating: 4.8,
      description: "A reclusive Hollywood icon finally tells her story to a young journalist, revealing shocking secrets.",
      image: book1,
      featured: true,
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      rating: 4.7,
      description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
      image: book2,
      featured: true,
    },
    {
      title: "It Ends with Us",
      author: "Colleen Hoover",
      genre: "Contemporary Romance",
      rating: 4.7,
      description: "A heart-wrenching story about a woman who must choose between her first love and her husband.",
      image: book3,
      featured: true,
    },
  ];

  const genres = [
    { name: "Fiction", path: "/fiction", description: "Captivating stories and literary masterpieces" },
    { name: "Non-Fiction", path: "/non-fiction", description: "Knowledge, memoirs, and real-world insights" },
    { name: "Mystery", path: "/mystery", description: "Thrilling mysteries and suspenseful stories" },
    { name: "Romance", path: "/romance", description: "Heartwarming love stories and relationships" },
    { name: "Sci-Fi", path: "/sci-fi", description: "Futuristic worlds and technological wonders" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-beige to-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Discover Your Next Great Read
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
              Explore curated book recommendations across all genres, from timeless classics to contemporary bestsellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
              <Button size="lg" asChild className="text-lg px-8 hover-scale">
                <Link to="/chatbot">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get AI Recommendations
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 hover-scale">
                <Link to="/fiction">Browse Books</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Featured Books */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
            <h2 className="text-3xl font-bold text-foreground">Featured Recommendations</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((book, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </section>

        {/* Genres */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Explore by Genre</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {genres.map((genre, index) => (
              <Link
                key={genre.name}
                to={genre.path}
                className="group p-6 rounded-lg border border-border bg-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors story-link">
                  {genre.name}
                </h3>
                <p className="text-muted-foreground">{genre.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-warm-beige to-cream rounded-lg animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Help Finding the Perfect Book?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our AI-powered chatbot can provide personalized recommendations based on your preferences, 
            reading history, and mood. Get started with a simple conversation!
          </p>
          <Button size="lg" asChild className="hover-scale">
            <Link to="/chatbot">
              <BookOpen className="mr-2 h-5 w-5" />
              Chat with BookWise AI
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;
