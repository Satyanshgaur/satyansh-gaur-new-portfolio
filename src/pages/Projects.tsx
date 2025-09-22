
import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, minimalistic portfolio built with React and Tailwind CSS. Features dynamic content, smooth animations, and responsive design that adapts to all screen sizes.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/portfolio',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    },
    {
      title: 'SAHAI - Your mental health and lifestyle one stop solution',
      description: 'A comprehensive mental health and lifestyle platform offering resources, self-assessment tools, and community support. Built with a focus on accessibility and user engagement.',
      techStack: ['React', 'Fast api', 'Django', 'RAG', 'JWT', 'FIASST', 'PostgreSQL'],
      demoUrl: 'currently not deployed',
      githubUrl: 'https://github.com/clone891/Sahai_Project.git',
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    },
    {
      title: 'ML Price Predictor',
      description: 'A machine learning project that predicts cryptocurrency prices using historical data and technical indicators. Features data visualization and model performance metrics.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/crypto-predictor',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    },
    {
      title: 'Blockchain Voting System',
      description: 'A decentralized voting application built on Ethereum blockchain. Ensures transparency, security, and immutability in the voting process with a user-friendly interface.',
      techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/blockchain-voting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current conditions, forecasts, and weather maps. Features location-based services and multiple city tracking.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Charts.js'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/weather-dashboard',
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with content management, user authentication, and markdown support. Includes admin dashboard and SEO optimization.',
      techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'MDX'],
      demoUrl: '#',
      githubUrl: 'https://github.com/satyanshgaur/blog-platform',
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for building
              meaningful software solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                These are just a few highlights from my portfolio. Check out my GitHub
                for more projects, experiments, and contributions to open source.
              </p>
              <a
                href="https://github.com/satyanshgaur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium glow-effect"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
