import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMovies } from "@/lib/apis/server";
import { CardWithForm } from "../components/card";

const moviesQuery = await getMovies();

export default async function CustomCard() {
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
        {moviesQuery?.length &&
          moviesQuery.map((movie) => (
            <div key={movie._id} className="h-96 bg-green-400">
              {movie?.title}
            </div>
          ))}
      </div>
    </div>
  );
}
