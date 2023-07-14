import DEFAULT_PROJECTS from "@/constants/default-projects";
import Section from "@/components/shared/Section";
import { Suspense, lazy } from "react";

const ProjectCard = lazy(() => import("@/components/project/ProjectCard"));

export default function ProjectPage() {
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
      <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Projects
      </h2>
      <p className="text-muted-foreground">
        Showcase of my works on frontend development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={"loading..."}>
          {DEFAULT_PROJECTS.map((project) => (
            <ProjectCard key={project?.id} {...project} />
          ))}
        </Suspense>
      </div>
    </Section>
  );
}
