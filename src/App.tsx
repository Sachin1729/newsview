import Home from './pages/Home';

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 flex flex-col">
        <header className="p-4 text-right">
        </header>

        <main className="flex-grow px-4">
          <Home />
        </main>

        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} By Sachin. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;