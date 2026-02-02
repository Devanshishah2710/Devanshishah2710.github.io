import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value
   }); 
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSd6R5moG49SKTqBPd-TUDanj6RieM4VFmjXyH7chwCwGxjt0Q/formResponse";
  const formDataToSend = new URLSearchParams();
  formDataToSend.append("entry.215113095", formData.name);
  formDataToSend.append("entry.555009309", formData.email);
  formDataToSend.append("entry.1015730987", formData.message);
  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    });
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
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
          <CardContent className="p-4">
            <h3 className="text-2xl font-display font-semibold mb-2">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
                rows={5}
              ></textarea>
              <Button type="submit" className="mt-2">
                <Send className="mr-2 w-5 h-5" /> Send Message
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
                onClick={() => window.open('mailto:shahdevanshi2710@gmail.com', '_blank')}
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
