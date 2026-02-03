import { Users, BookOpen, Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Teaching = () => {
  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'BCA Student',
      content: 'Devanshi\'s teaching style is amazing! She explains complex concepts in such a simple way that anyone can understand.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Beginner Developer',
      content: 'Thanks to her guidance, I built my first React project. Her patience and clear explanations made all the difference.',
      rating: 5
    },
    {
      name: 'Raj Mehta',
      role: 'Career Changer',
      content: 'Switching careers felt overwhelming, but Devanshi\'s structured approach helped me land my first developer job!',
      rating: 5
    }
  ];

  const topics = [
    'HTML & CSS Fundamentals',
    'JavaScript Essentials',
    'React Development',
    'Responsive Design',
    'Git & Version Control',
    'UI/UX Principles'
  ];

  return (
    <section id="teaching" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Teaching & <span className="text-gradient">Mentoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and empowering the next generation of developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Topics Covered */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">
              Topics I Teach
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic, index) => (
                <Card key={index} className="card-hover group">
                  <CardContent className="p-4 flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {topic}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">
              My Teaching Philosophy
            </h3>
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    💻 <strong>Industry-Relevant Skills:</strong> I focus on teaching technologies and practices that are actively used in the industry so students can immediately contribute to real projects.
                  </p>
                  <p>
                    🎯 <strong>Build Real Projects:</strong> Hands-on learning with actual applications, portfolios, and GitHub-ready projects that reflect real-world developer experience.
                  </p>
                  <p>
                    🤝 <strong>Collaborative Approach:</strong> Encouraging teamwork, code reviews, and collaborative problem-solving to mimic professional development environments.
                  </p>
                  <p>
                    💡 <strong>Practical Problem Solving:</strong> Teaching students to break down complex problems, debug effectively, and implement efficient solutions like a professional developer.
                  </p>
                  <p>
                    🌱 <strong>Growth Mindset:</strong> Emphasizing continuous learning, curiosity, and adaptability to keep up with evolving technologies.
                  </p>
                  <p>
                    🛠️ <strong>Tool Mastery:</strong> Guidance on using essential developer tools like Git, VS Code, npm, browser dev tools, and deployment practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            What Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Want to Learn Together?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a complete beginner or looking to advance your skills,
            I'd love to help you on your coding journey.
          </p>
          <Button
            className="btn-hero group"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
            <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
