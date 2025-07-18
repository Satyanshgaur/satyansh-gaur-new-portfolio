
import React from 'react';
import { Layout } from '../components/Layout';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Linux'] },
    { category: 'Learning', items: ['Machine Learning', 'Blockchain', 'AWS', 'Docker'] },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Started Programming',
      description: 'Began my journey with Python, building small projects and learning fundamentals.',
    },
    {
      year: '2024',
      title: 'Learning DSA',
      description: 'Focused on Data Structures and Algorithms to strengthen problem-solving skills.',
    },
    {
      year: '2025',
      title: 'Machine Learning, Blockchain & Beyond',
      description: 'Exploring machine learning algorithms, blockchain technologies, and expanding into new domains.',
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate self-taught developer and machine learning enthusiast on a mission to build meaningful software
              and contribute to the tech community.
            </p>
          </div>

          {/* Personal Story */}
          <section className="mb-16 animate-slide-up">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">My Story</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hey there! I'm Satyansh, a machine learning enthusiast from Delhi with an insatiable
                  curiosity for technology. My programming journey began in 2023 when I wrote my first
                  "Hello, World!" in Python, and I haven't looked back since.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as casual experimentation quickly turned into a passionate pursuit.
                  I love the problem-solving aspect of programming and the endless possibilities
                  it offers. From building web applications to exploring machine learning algorithms,
                  I'm always eager to learn and implement new technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me reading, writing, or exploring philosophy,
                  psychology, theology or tech. This site is made to sharw my knowledge
                  with the community through my blog and open-source contributions.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16 animate-slide-up animate-delay-100">
            <h2 className="text-2xl font-semibold mb-8">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4 text-primary">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16 animate-slide-up animate-delay-200">
            <h2 className="text-2xl font-semibold mb-8">Learning Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section className="animate-slide-up animate-delay-300">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold mb-6">Quick Facts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Currently Learning</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advanced React patterns</li>
                    <li>• Machine Learning with Python</li>
                    <li>• Blockchain fundamentals</li>
                    <li>• System design concepts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-primary">Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open source contributions</li>
                    <li>• Tech community building</li>
                    <li>• Gaming and esports</li>
                    <li>• Music production</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
