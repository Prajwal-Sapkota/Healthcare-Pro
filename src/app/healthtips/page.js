import HealthTipsGrid from "./health-tips-grid";

export const metadata = {
  title: "Health Tips | Your Clinic",
  description: "Browse our collection of health tips, articles, and videos",
};

export default function HealthTipsPage() {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">

        <HealthTipsGrid />
      </main>
    </div> 
  );
}