export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-300 text-gray-700 py-8"> 
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
            <div className="mb-4 sm:mb-0">
              <span>© 2024 HealthCare Theme. All rights reserved.</span>
            </div>

            <div className="flex flex-row space-x-6">
              <a href="#" className="hover:text-blue-500 text-gray-700">Privacy</a> 
              <a href="#" className="hover:text-blue-500 text-gray-700">Terms</a>
              <a href="#" className="hover:text-blue-500 text-gray-700">Sitemap</a> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
