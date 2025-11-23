export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="ml-4 text-gray-500">Middleware routing failed to rewrite the URL.</p>
    </div>
  );
}
