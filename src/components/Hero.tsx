import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically link to an actual resume file
    console.log('Download resume clicked');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-animation absolute top-20 left-10 w-8 h-8 text-coral opacity-60">
          &lt;/&gt;
        </div>
        <div className="float-animation absolute top-40 right-20 w-6 h-6 text-teal opacity-60">
          🎓
        </div>
        <div className="float-animation absolute bottom-40 left-20 w-10 h-10 text-primary opacity-60">
          ⚛️
        </div>
        <div className="float-animation absolute bottom-20 right-10 w-8 h-8 text-secondary opacity-60">
          📚
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Hi, I'm <span className="text-gradient">Devanshi</span> 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Web Developer & Educator passionate about creating{' '}
            <span className="text-primary font-semibold">elegant user-first experiences</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="btn-secondary group"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          <div className="text-sm text-muted-foreground animate-bounce">
            Scroll to explore ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;