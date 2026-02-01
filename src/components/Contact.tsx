import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://devanshishah2710.github.io',
      color: 'hover:text-gray-900'
    },
   
  ];

  const contactInfo = [
   
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Contact',
    value: '6355533422',
    action: 'tel:6355533422'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'shahdevanshi2710@gmail.com',
    action: 'mailto:shahdevanshi2710@gmail.com'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Jamnagar, Gujarat, India',
    action: null
  }
];

  

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send me a message
              </h3>
              
              <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd6R5moG49SKTqBPd-TUDanj6RieM4VFmjXyH7chwCwGxjt0Q/viewform?embedded=true"
                    width="100%"
                    height={900}            // number in JSX
                    frameBorder={0}         // camelCase
                    marginHeight={0}        // camelCase
                    marginWidth={0}         // camelCase
                    scrolling="yes"
                    title="Contact Form"
                  />
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold mb-6">
                  Follow me on social media
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => window.open(social.url, '_blank')}
                      className="group p-4 h-auto flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
                    >
                      <div className={`transition-colors ${social.color}`}>
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="card-hover bg-gradient-to-r from-coral/10 to-teal/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Quick Question?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out directly via email for quick questions or collaborations.
                </p>
                <Button 
                  className="btn-secondary group"
                  onClick={() => window.open('mailto:devanshi.shah@email.com', '_blank')}
                >
                  <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Quick Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;