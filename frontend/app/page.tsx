import Sidebar from "@/components/sidebar";
import TopBar from "@/components/top-bar";

export default function Home() {
  return (
    <main className="bg-white h-screen flex">
      <Sidebar />
      <div className="flex-1  p-6">
        <div className="h-full rounded-xl bg-[#FEF8F2] shadow-inner p-4">
          <TopBar />
        </div>
      </div>
    </main>
  );
}
