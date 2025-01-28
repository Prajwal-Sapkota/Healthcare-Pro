export default function Footer() {
  return (
    <footer className="bg-[#fcfff9] text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
          <div className="mb-4 sm:mb-0">
            <span className="text-[#1b2565]">© 2024 HealthCare Theme. All rights reserved.</span>
          </div>

          <div className="flex flex-row space-x-6">
            <a href="#" className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">Privacy</a>
            <a href="#" className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">Terms</a>
            <a href="#" className="text-[#375bc7] hover:text-[#6dc5f1] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
