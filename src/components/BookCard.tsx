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
    <Card className={`group hover-lift animate-fade-in cursor-pointer ${featured ? 'border-primary/20' : ''}`}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={`${title} book cover`}
              className="w-20 h-28 object-cover rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              {featured && (
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{author}</p>
            
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className="text-xs">
                {genre}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs text-muted-foreground">{rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;