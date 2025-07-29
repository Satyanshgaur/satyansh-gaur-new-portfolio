
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you want to collaborate on a project, discuss opportunities,
              or just have a chat about tech, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h2 className="text-2xl font-semibold mb-8 text-center">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:satyanshgaur1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    satyanshgaur1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a
                    href="https://github.com/satyanshgaur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @satyanshgaur
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/satyansh-gaur-2b1b05370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    /in/satyansh-gaur-2b1b05370
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-6 border border-primary/20 text-center">
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                I typically respond to emails within 24-48 hours. For urgent matters,
                feel free to reach out on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;