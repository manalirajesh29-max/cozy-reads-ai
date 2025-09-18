import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import book2 from "@/assets/book2.jpg";

const Mystery = () => {
  const mysteryBooks = [
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      genre: "Psychological Thriller",
      rating: 4.5,
      description: "A twisted tale of a marriage gone wrong when Amy Dunne disappears on her fifth wedding anniversary.",
      image: book2,
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Nordic Noir",
      rating: 4.6,
      description: "A journalist and a hacker investigate a wealthy family's dark secrets in Sweden.",
      image: book2,
    },
    {
      title: "Big Little Lies",
      author: "Liane Moriarty",
      genre: "Domestic Thriller",
      rating: 4.4,
      description: "Three women's seemingly perfect lives unravel to the point of murder at a school fundraiser.",
      image: book2,
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Psychological Mystery",
      rating: 4.3,
      description: "A woman refuses to speak after allegedly murdering her husband, and a psychotherapist is determined to treat her.",
      image: book2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mystery & Thriller</h1>
          <p className="text-muted-foreground">
            Dive into suspenseful stories filled with twists, turns, and mysteries waiting to be solved.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {mysteryBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mystery;