
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const BlogPreview = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  slug,
}: BlogPreviewProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block group animate-fade-in">
      <article className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <time>{date}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
};
