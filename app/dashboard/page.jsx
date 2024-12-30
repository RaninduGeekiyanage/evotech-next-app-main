import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getMovies } from "@/lib/apis/server";
import Image from "next/image";

export default async function DashboardPage() {
  // 1.add shacn card
  // 2.create movies get end point.
  // 3.read the dummy response
  // 4.render to ui
  const moviesQuery = await getMovies();

  console.log("MOVIES FROM FRONT END :", moviesQuery);

  return (
    <main className="bg-gray-800">
      {/* navigation bar  */}
      <nav className="bg-gray-900 w-full h-16 flex justify-start items-center py-10">
        <div className="container">
          <h1 className="text-gray-200 font-bold text-3xl text-center">
            Download Latest Mflix Movies..
          </h1>
        </div>
      </nav>

      {/* body section */}

      <div className="container mt-8">
        <div className="h-4 my-5">
          <hr className="border-gray-300" />
        </div>
        <div className="grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:px-16">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div
                key={movie._id}
                className="border-4 border-gray-500 rounded-lg "
              >
                <Card className="w-full h-full bg-slate-800 border-none">
                  <CardHeader>
                    <CardTitle className="text-gray-300">
                      {movie?.title}
                      <span className="text-xs text-neutral-400 font-normal pl-2">
                        {parseInt(movie?.year, 10)}
                      </span>
                    </CardTitle>
                    <div className="text-gray-400 font-bold"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative flex justify-center items-center w-full h-[276px] rounded bg-gray-900">
                      {movie?.poster ? (
                        <Image
                          src={movie?.poster}
                          alt={movie?.title}
                          width={150}
                          height={266} // Makes the image fill the parent container
                          className="h-full w-auto object-contain" // Ensures uniform scaling and cropping
                          priority={true}
                        />
                      ) : (
                        <div className="text-gray-500 absolute text-center">
                          No Image Available
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <div>
                      <div className="text-gray-500 pb-1">
                        {movie?.languages}
                      </div>
                      <div className="text-gray-400 line-clamp-3 text-sm pb-1">
                        {movie?.plot ?? "N/A"}
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <Badge variant="success" className="font-medium">
                            Rated: {movie.rated ?? "N/A"}
                          </Badge>
                        </div>
                        <div className="text-gray-400 text-sm pl-5">
                          IMDB: {movie.imdb.rating ?? "N/A"}
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
