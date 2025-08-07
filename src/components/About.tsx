import { Code, Users, Heart, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', items: ['GitHub', 'VS Code', 'Figma', 'Vite'] }
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, elegant solutions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-First',
      description: 'Designing with empathy and accessibility'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Teaching',
      description: 'Sharing knowledge and mentoring others'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Love for both coding and education'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Merging creativity with logic for better user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-card">
                <img 
                  src={profilePhoto} 
                  alt="Devanshi Shah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl animate-bounce">
                👩‍💻
              </div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hi! I'm Devanshi, a passionate web developer from Jamnagar pursuing my BCA at H.J. Doshi. 
                I love the intersection where creativity meets logic, crafting digital experiences that 
                users genuinely enjoy.
              </p>
              <p>
                Beyond coding, I'm deeply passionate about teaching and sharing knowledge. I believe 
                the best way to master something is to teach it, and I love helping others discover 
                the joy of programming.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-6">Skills & Technologies</h3>
            
            {skills.map((skillGroup, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Fun Fact */}
            <Card className="card-hover bg-gradient-to-r from-coral/10 to-teal/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  🌟 Currently Learning
                </h4>
                <p className="text-muted-foreground">
                  Exploring advanced React patterns and diving deeper into UI/UX design principles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;