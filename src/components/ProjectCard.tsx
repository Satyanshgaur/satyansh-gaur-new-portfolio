
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 animate-fade-in">
      {imageUrl && (
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium">Live Demo</span>
              <ArrowUp className="w-4 h-4 rotate-45" />
            </a>
          )}
          
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
