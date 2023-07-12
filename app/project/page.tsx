import ProjectCard from "@/components/project/ProjectCard";


export default function ProjectPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}
