import { Badge } from "../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const ProjectCard = ({ title, description, image, techStack, repoLink, liveLink }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Badge asChild variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </Badge>
          {liveLink && (
          <Badge asChild variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Badge>
        )}
        </div>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "ToBeHonest: A Blogging Platform",
      description: "A Blogging Platform that allows users to create, read, edit and delete blogs. ",
      image: "/mernblog.png",
      techStack: ["React", "Tailwind", "Shadcn UI", "MongoDB", "Appwrite", "NodeJS", "Express"],
      repoLink: "https://github.com/Pratham211101/ToBeHonest",
      liveLink: "https://the-blog-hub-tau.vercel.app/"
    },
    {
      title: "CrowdFunding Platform: Using Web3",
      description: "This project aims to create a secure and user-friendly crowdfunding platform leveraging the power of Web3 and blockchain technology.",
      image: "/crowdfunding.png",
      techStack: ["NextJS", "Tailwind", "Solidity", "Hardhat", "React", "NodeJS", "Blockchain"],
      repoLink: "https://github.com/Pratham211101/crowdfunding-web3-app",
    },
    {
      title: "MediaVault",
      description: "A media management application that allows users to upload, manage, compress, and share their media files. It provides a user-friendly interface for organizing and accessing media content.",
      image: "/mediavault.png",
      techStack: ["NextJS" , "Tailwind" , "Node.js" , "NeonDB" , "Express" , "Cloudinary" , "Prisma"],
      repoLink: "https://github.com/Pratham211101/MediaVault",
      liveLink: "https://media-vault-dusky.vercel.app"
    },
    {
      title: "StreamFlix",
      description: "A video streaming application that allows users to watch and manage their favorite videos using plalylists. Users can like ,subscribe and comment on videos. It also provides a user-friendly interface for browsing, searching, history and watching content.",
      image: "/streamflix.png",
      techStack: ["React", "Tailwind","Node.js", "Express", "MongoDB", "Shadcn UI"],
      repoLink: "https://github.com/Pratham211101/frontend-stream-flix",
      liveLink: "https://frontend-stream-flix.vercel.app/"
    }
    
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <p className="text-muted-foreground mb-8">
        Check out my latest work. I've worked on a variety of projects, from simple websites to complex applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
