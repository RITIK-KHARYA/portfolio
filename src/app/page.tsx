import Header from "@/components/Header";
import About from "@/components/about";
import Career from "@/components/career";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <Header />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
