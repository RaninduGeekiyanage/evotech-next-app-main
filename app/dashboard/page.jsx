import { CardTitle } from "@/components/ui/card";
import { getMovies } from "@/lib/apis/server";

export default async function DashboardPage() {
  // 1.add shacn card
  // 2.create movies get end point.
  // 3.read the dummy response
  // 4.render to ui
  const moviesQuery = await getMovies();

  console.log("MOVIES FROM FRONT END :", moviesQuery);

  return (
    <main>
      {/* navigation bar  */}
      <nav className="bg-blue-300 w-full h-16 flex justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl text-center">
            Latest Mflix Movies{" "}
          </h1>
        </div>
      </nav>

      {/* body section */}
      <div className="container mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-96 bg-green-400">
                <CardTitle>{movie?.title}</CardTitle>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
