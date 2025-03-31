import { Badge } from "../ui/badge"

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TailwindCSS",
    "ReactJS",
    "Node.js",
    "Express.js",
    "ShadCN UI",
    "MongoDB",
    "Python",
    "C++",
    "Git/GitHub",
    "REST APIs",
    "Data Structures",
    "Algorithms",
  ]

  return (
    <section className="px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills
