import React from "react";
import Section from "../shared/Section";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ProjectCard from "../project/ProjectCard";
import DEFAULT_PROJECTS from "@/constants/default-projects";

export const FeaturedProject = () => {
  return (
    <Section className="py-20 space-y-4">
      <h2 className="text-2xl md:text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Featured Projects
      </h2>
      <p className="text-muted-foreground text-lg">
        Some projects that I&apos;m proud of
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEFAULT_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div>
        <Link href={"/project"} aria-label="see more post">
          <span className={buttonVariants({ variant: "outline", size: "lg" })}>
            See more project
          </span>
        </Link>
      </div>
    </Section>
  );
};
