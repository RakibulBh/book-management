import MainContent from "@/components/main-content";
import Navbar from "@/components/navbar";
import ReadingBooks from "@/components/reading-books";
import ReccommendedBooks from "@/components/reccommended-books";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#18181B] flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <MainContent />
      </div>
    </main>
  );
}
