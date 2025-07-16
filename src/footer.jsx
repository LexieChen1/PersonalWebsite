export default function Footer() {
    return (
      <footer className="bg-background text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white">Lexie C.</h1>
            <p>Building meaningful tech with a heart for people and creativity in design ♡ </p>
          </div>
  
          <div className="flex items-center gap-6 text-sm">
            <p>© 2025 Lexie Chen | Built with React and Tailwind</p>
          </div>
        </div>
      </footer>
    );
  }