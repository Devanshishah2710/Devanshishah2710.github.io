import { ExternalLink, Github, Code, Palette, Smartphone } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, cart functionality, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: <Smartphone className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '🛍️'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      icon: <Code className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '📋'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing creative design and smooth animations with modern web technologies.',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      icon: <Palette className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '🎨'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform for online courses with video streaming, quizzes, and progress tracking for students.',
      tags: ['React', 'Express', 'PostgreSQL', 'AWS'],
      icon: <Code className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '📚'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, charts, and beautiful UI components.',
      tags: ['Vue.js', 'Chart.js', 'API Integration'],
      icon: <Smartphone className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '🌤️'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments system, and social media integration.',
      tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
      icon: <Palette className="w-6 h-6" />,
      demoUrl: '#',
      githubUrl: '#',
      image: '✍️'
    }
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
            <Card key={index} className="card-hover group">
              <CardContent className="p-6">
                {/* Project Icon/Image */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl">{project.image}</div>
                  <div className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.icon}
                  </div>
                </div>

                {/* Project Details */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-accent/20 hover:bg-accent/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button 
                  size="sm" 
                  className="flex-1 group/btn"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Live Demo
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 group/btn"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
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