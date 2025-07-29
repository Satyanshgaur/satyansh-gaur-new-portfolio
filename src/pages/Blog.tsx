
import React from 'react';
import { Layout } from '../components/Layout';
import { BlogPreview } from '../components/BlogPreview';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Vectors in C++: Dynamic Arrays Made Easy',
      excerpt: 'A comprehensive guide to understanding and using vectors in C++. Learn about dynamic arrays, memory management, and practical examples.',
      date: 'July 30, 2025',
      readTime: '12 min read',
      tags: ['C++', 'Programming', 'Basics', 'Learning'],
      slug: 'vectors-in-cpp',
    },
     {


      title: 'CPP: level zero',
      excerpt: 'A comprehensive beginner\'s guide to C++ programming fundamentals. Covering essential libraries, operators, data structures, and modern C++ features with practical examples and code snippets.',
      date: 'July 17, 2025',
      readTime: '8 min read',
      tags: ['C++', 'Programming', 'Basics', 'Learning'],
      slug: 'cpp-level-zero',
    },
    {
      
      title: 'Building My Portfolio: A Developer\'s Journey',
      excerpt: 'A deep dive into the process of creating a modern portfolio website, from initial design concepts to technical implementation. Learn about the tools, frameworks, and design decisions that went into building this site.',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      tags: ['Web Development', 'Portfolio', 'React', 'Design'],
      slug: 'building-my-portfolio',
    },
    {
      title: 'Learning Machine Learning: My 2025 Roadmap',
      excerpt: 'Sharing my structured approach to learning ML fundamentals, from Python basics to building real projects. Includes resources, timelines, and practical project ideas for beginners.',
      date: 'Jan 10, 2025',
      readTime: '8 min read',
      tags: ['Machine Learning', 'Python', 'Learning', 'Career'],
      slug: 'ml-learning-roadmap',
    },
    {
      title: 'From Python to Full-Stack: My Development Journey',
      excerpt: 'How I transitioned from a complete beginner to building full-stack applications. Lessons learned, mistakes made, and advice for aspiring developers starting their journey.',
      date: 'Jan 5, 2025',
      readTime: '6 min read',
      tags: ['Career', 'Full-Stack', 'Python', 'JavaScript'],
      slug: 'python-to-fullstack-journey',
    },
    {
      title: 'Understanding Blockchain: Beyond the Hype',
      excerpt: 'A beginner-friendly explanation of blockchain technology, its practical applications, and why it matters for developers. Exploring smart contracts, DeFi, and Web3 development.',
      date: 'Dec 28, 2024',
      readTime: '7 min read',
      tags: ['Blockchain', 'Web3', 'Ethereum', 'Technology'],
      slug: 'understanding-blockchain',
    },
    {
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'Tips and tricks for creating beautiful, responsive user interfaces using Tailwind CSS. From utility-first principles to advanced techniques and best practices.',
      date: 'Dec 20, 2024',
      readTime: '4 min read',
      tags: ['CSS', 'Tailwind', 'UI/UX', 'Frontend'],
      slug: 'responsive-uis-tailwind',
    },
    {
      title: 'The Art of Clean Code: Lessons from a Student',
      excerpt: 'What I\'ve learned about writing maintainable, readable code during my learning journey. Practical tips for beginners on code organization, naming conventions, and best practices.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      tags: ['Clean Code', 'Best Practices', 'Programming', 'Learning'],
      slug: 'art-of-clean-code',
    },
  ];

  const tags = ['All', 'Web Development','c++', 'Machine Learning', 'Blockchain', 'Career', 'Learning'];
  const [selectedTag, setSelectedTag] = React.useState('All');

  const filteredPosts = selectedTag === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sharing my learning journey, thoughts on technology, and insights
              from building projects as a self-taught developer.
            </p>
          </div>

          {/* Tag Filter */}
          <div className="mb-12 animate-slide-up">
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.slug}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogPreview {...post} />
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Want to follow my learning journey? I share updates about new projects,
                learning resources, and insights from the tech world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
