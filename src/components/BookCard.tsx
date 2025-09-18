import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  rating: number;
  description: string;
  image: string;
  featured?: boolean;
}

const BookCard = ({ title, author, genre, rating, description, image, featured = false }: BookCardProps) => {
  return (
    <Card className={`group card-hover-effect card-glow-border overflow-hidden ${featured ? 'border-primary/20 ring-1 ring-primary/10' : 'border-border'}`}>
      <div className="card-shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <CardContent className="p-4 relative z-10">
        <div className="flex gap-4">
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={image}
              alt={`${title} book cover`}
              className="w-20 h-28 object-cover rounded-md shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 relative z-10"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {featured && (
                <Badge variant="secondary" className="text-xs animate-bounce-subtle group-hover:bg-primary/10 transition-colors duration-300">
                  Featured
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">{author}</p>
            
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="text-xs group-hover:border-primary/30 group-hover:text-primary/80 transition-all duration-300">
                {genre}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground/70 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;