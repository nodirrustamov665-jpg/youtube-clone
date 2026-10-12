import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CategoryBar from "@/components/CategoryBar";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />

      <Sidebar />

      <CategoryBar />

      <main className="ml-[240px] pt-[128px] px-5 pb-10">
        <VideoGrid />
      </main>
    </div>
  );
}
