import HealthTipsGrid from "./health-tips-grid";

export const metadata = {
  title: "Health Tips | Your Clinic",
  description: "Browse our collection of health tips, articles, and videos",
};

export default function HealthTipsPage() {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Health Tips</h1>
        <p className="text-muted-foreground mb-8 text-black">
          Browse our collection of health tips, articles, and videos to help you maintain a healthy lifestyle.
        </p>

        <HealthTipsGrid />
      </main>
    </div> 
  );
}