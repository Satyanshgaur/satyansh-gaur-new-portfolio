
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { BlogPreview } from '../components/BlogPreview';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good morning!';
      if (hour < 17) return 'Good afternoon!';
      return 'Good evening!';
    };

    setGreeting(getTimeBasedGreeting());
  }, []);

  const featuredProjects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, minimalistic portfolio built with React and Tailwind CSS. Features dynamic content, smooth animations, and responsive design.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/portfolio',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'A full-stack productivity app with real-time updates, user authentication, and collaborative features. Built with modern web technologies.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/task-manager',
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    },
  ];

  const recentPosts = [
     {
      title: 'CPP: level zero',
      excerpt: 'A comprehensive beginner\'s guide to C++ programming fundamentals. Covering essential libraries, operators, data structures, and modern C++ features with practical examples and code snippets.',
      date: 'Jan 20, 2025',
      readTime: '8 min read',
      tags: ['C++', 'Programming', 'Basics', 'Learning'],
      slug: 'cpp-level-zero',
    },
    {
      title: 'Vectors in C++: Dynamic Arrays Made Easy',
      excerpt: 'A comprehensive guide to understanding and using vectors in C++. Learn about dynamic arrays, memory management, and practical examples.',
      date: 'July 30, 2025',
      readTime: '2 min read',
      tags: ['C++', 'Programming', 'Basics', 'Learning'],
      slug: 'vectors-in-cpp',
    },
    
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-in">{greeting}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up animate-delay-100">
            I'm{' '}
            <span className="text-gradient">Satyansh Gaur</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animate-delay-200">
            Machine learning enthusiast and aspiring software developer from Delhi
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
            I build web applications, explore machine learning, and dabble with blockchain.
            Currently learning, creating, and sharing my journey in tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium glow-effect"
            >
              View My Work
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-medium">View All</span>
              <ArrowUp className="w-4 h-4 rotate-45" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Posts</h2>
              <p className="text-muted-foreground">My learning journey and thoughts</p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-medium">Read All</span>
              <ArrowUp className="w-4 h-4 rotate-45" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <BlogPreview key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium glow-effect"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
