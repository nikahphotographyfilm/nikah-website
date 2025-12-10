import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import Section from '../components/ui/Section';
import SEO from '../components/utils/SEO';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import { getPostBySlug } from '../utils/blogLoader';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const foundPost = await getPostBySlug(slug);
        if (foundPost) {
          setPost(foundPost);
        } else {
          // Post not found logic could go here
          console.warn(`Post with slug "${slug}" not found.`);
        }
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen pt-32 text-center text-gray-500">Loading article...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center container mx-auto px-6">
        <h1 className="font-serif text-4xl mb-6 text-charcoal dark:text-white">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans">The article you are looking for does not exist.</p>
        <Link to="/blog" className="text-gold underline underline-offset-4 font-subheading">Back to Blog</Link>
      </div>
    );
  }

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
        title={post.title}
        description={post.summary}
        image={post.coverImage}
        type="article"
      />

      {/* Hero Header */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-12">
        <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-6 font-subheading">
          <span className="flex items-center gap-2"><Calendar size={14}/> {formatDate(post.date)}</span>
          <span className="w-px h-3 bg-gray-300 dark:bg-white/20"></span>
          <span className="flex items-center gap-2 text-gold font-medium"><User size={14}/> {post.author}</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-charcoal dark:text-white">
          {post.title}
        </h1>

        <Link to="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-gold transition-colors mb-12 font-sans">
          <ArrowLeft size={16} className="mr-2" /> Back to Journal
        </Link>

        {/* Cover Image */}
        <div className="w-full aspect-video rounded-sm overflow-hidden shadow-sm mb-16">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:text-charcoal dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-loose prose-p:font-sans prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-gold prose-blockquote:bg-surface/50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-charcoal dark:prose-blockquote:text-white prose-img:rounded-sm prose-li:text-gray-600 dark:prose-li:text-gray-300 marker:text-gold max-w-none">
          <Markdown>{post.body}</Markdown>
        </div>
        
        {/* Footer of Article */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10">
           <Link to="/contact">
             <Section className="bg-surface dark:bg-white/5 p-8 md:p-12 text-center rounded-sm transition-colors">
                <h3 className="font-serif text-2xl mb-4 text-charcoal dark:text-white">Planning your own wedding?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-sans">We would love to tell your story.</p>
                <span className="inline-block bg-charcoal dark:bg-white text-white dark:text-charcoal px-6 py-3 text-sm tracking-wide rounded-lg hover:bg-gold dark:hover:bg-gold dark:hover:text-white transition-colors font-subheading">
                  Get in Touch
                </span>
             </Section>
           </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;