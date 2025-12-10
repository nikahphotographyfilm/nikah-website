import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import SEO from '../components/utils/SEO';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';
import { getAllPosts } from '../utils/blogLoader';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await getAllPosts();
      setPosts(loadedPosts);
      setIsLoading(false);
    };
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    try {
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-charcoal transition-colors duration-300">
      <SEO 
        title="Wedding Tips & Blog"
        description="Expert wedding tips, photography guides, and inspiration for your big day in Bangladesh."
      />

      <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="font-serif text-5xl mb-6 text-charcoal dark:text-white">Journal</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Stories, tips, and insights from behind the lens.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading ? (
           <div className="col-span-full text-center text-gray-400">Loading articles...</div>
        ) : (
          posts.map((post, idx) => (
            <Section key={post.slug} delay={idx * 0.1} className="group cursor-pointer flex flex-col h-full">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-sm mb-6 aspect-[4/3] bg-gray-100 dark:bg-white/10">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </Link>
              
              <div className="flex items-center gap-4 text-xs text-gray-400 uppercase tracking-widest mb-3 font-subheading">
                <span className="flex items-center gap-1"><Calendar size={12}/> {formatDate(post.date)}</span>
                <span className="w-px h-3 bg-gray-300 dark:bg-white/20"></span>
                <span className="flex items-center gap-1 text-gold font-medium"><User size={12}/> {post.author}</span>
              </div>
              
              <Link to={`/blog/${post.slug}`}>
                <h2 className="font-serif text-2xl mb-3 text-charcoal dark:text-white group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-sans">
                {post.summary}
              </p>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-charcoal dark:text-white group-hover:underline decoration-gold underline-offset-4 mt-auto font-subheading"
              >
                Read Full Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Section>
          ))
        )}
        
        {!isLoading && posts.length === 0 && (
          <div className="col-span-full text-center py-20 text-gray-400">
            <p>No posts found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;