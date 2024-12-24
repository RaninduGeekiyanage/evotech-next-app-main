import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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

      <div className="container mt-8 mx-auto pt-5">
        <div className="h-4 my-5">
          <hr className="border-gray-300" />
        </div>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-4 md:gap-24 px-12 mx-auto max-w-screen-xl">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div
                key={movie._id}
                className="h-[320px] w-[180px] border-4 border-gray-400 rounded-sm "
              >
                <CardHeader>
                  <CardTitle className="text-gray-300">
                    {movie?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full">
                    <Image
                      src={movie?.poster}
                      alt="poster"
                      height={120}
                      width={150} // Makes the image fill the parent container
                      className="object-cover" // Ensures uniform scaling and cropping
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
