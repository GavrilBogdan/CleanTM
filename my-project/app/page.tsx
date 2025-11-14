export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tailwind funcționează! 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Aceasta este o pagină simplă creată cu Next.js și Tailwind CSS.
      </p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Buton Verde
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Buton Roșu
        </button>
      </div>
      <div className="mt-8 p-4 bg-white shadow rounded w-full max-w-md text-center">
        <p className="text-gray-600">
          Testează Tailwind modificând culorile, marginile și fonturile!
        </p>
      </div>
    </main>
  );
}
