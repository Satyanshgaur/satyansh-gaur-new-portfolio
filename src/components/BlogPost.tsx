import React from 'react';

import { Layout } from './Layout';

import { Link } from 'react-router-dom';

import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  children: React.ReactNode;
}
export const BlogPost = ({ title, date, readTime, tags, children }: BlogPostProps) => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          {/* Header */}
          <header className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          {/* Content */}
          <article className="prose prose-lg max-w-none animate-slide-up">
            {children}
          </article>
        </div>
      </div>
    </Layout>
  );
};