import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import {RagBot} from "@/components/RagBot"

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* (Profile and Skills) Sidebar Section */}
          <Sidebar />
          {/* Main Section */}
          <main className="md:col-span-2">
            {/* About Me Section */}
            <AboutMe />
             {/* Rag Bot Section */}
             <RagBot />
            {/* Projects Section */}
        
            <Projects />
            {/* Experience Section */}
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}
