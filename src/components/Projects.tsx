import { ExternalLink, Github, Code, Palette } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'Responsive portfolio website showcasing creative design and smooth animations with modern web technologies.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: <Palette className="w-6 h-6" />,
      githubUrl: 'https://devanshishah2710.github.io/',
      image: '🎨',
    },
    {
      title: 'E-Medicine services',
      description:
        'A digital e-medicine management system designed for medical stores to manage medicine stock, customer orders, billing, and customer details online, replacing manual record-keeping.',
      tags: ['React', 'Node.js', 'Medical Store'],
      icon: <Code className="w-6 h-6" />,
      image: '💊',
      downloadUrl: '/3464a63d-638f-4fdd-b900-442cecc4daec.zip',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my passion for creating meaningful digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group flex flex-col h-full">
              <CardContent className="p-6 flex flex-col flex-1">
                {/* Image / Icon */}
                <div className="flex items-center justify-between mb-4 h-20">
                  <div className="text-6xl flex items-center justify-center w-20 h-20">
                    {project.image}
                  </div>
                  <div className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground text-xs transition-colors hover:bg-accent/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter className="pt-0 mt-4 flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-white bg-indigo-500 py-2 rounded-md hover:bg-indigo-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Visit Site
                  </a>
                )}

                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    download="E-Medicine Services.zip"
                    className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-white bg-indigo-500 py-2 rounded-md hover:bg-indigo-600 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    Download
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating on a project?
          </p>
          <Button
            className="btn-hero group"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
            <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
