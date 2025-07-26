import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quick Random Password Generator",
    description: "Protect your accounts with randomly generated, ultra secure passwords.",
    image: "/projects/project4.png",
    tags: ["React js", "Custom CSS","Interative UI"],
    demoUrl: "#",
    githubUrl: "https://random-password-generator-two-red.vercel.app/",
  
  },
  {
    id: 2,
    title: "Quick StopWatch",
    description:
      "Interactive UserInterface for Time with Precession",
    image: "/projects/project5.png",
    tags: ["TypeScript", "React.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohammedwasiulla/QuickStopwatch2.0",
  },
  {
    id: 3,
    title: "All Finance Calculator",
    description:
      "Full-featured platform with for calculating car loan,home,personal loan and payment processing.",
    image: "/projects/project6.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://all-finance-calculator.vercel.app/",
  },
   {
    id: 4,
    title: "TravelX Website",
    description:
      "A Ecommerce travel advance booking with this website.",
    image: "/projects/project1.png",
    tags: ["React js", "Custom CSS","Interative UI"],
    demoUrl: "#",
    githubUrl: "https://rainbow-tarsier-b653b8.netlify.app/",
  },
  {
    id: 5,
    title:"EduSupply-React-App",
    description:
      "Ecommerce Website to connect with school products",
    image: "/projects/project7.png",
    tags: ["React js", "Custom CSS","Interative UI"],
    demoUrl: "https://effervescent-douhua-53d70c.netlify.app/",
    githubUrl: "https://effervescent-douhua-53d70c.netlify.app/",
  },
  {
    id: 6,
    title:"Weather-React-App",
    description:
      "Prior Weather Notification through api of india",
    image: "/projects/project8.png",
    tags: ["React js", "Api","Interative UI"],
    demoUrl: "https://weatherapp2-one-bice.vercel.app/",
    githubUrl: "https://weatherapp2-one-bice.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mohammedwasiulla?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
