import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = 'https://picsum.photos/1200/630?random=100', // Default brand image
  schema
}) => {
  const siteName = "Nikah Photography";
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = window.location.href;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    updateMeta('description', description);
    updateMeta('keywords', 'Nikah Photography, Wedding Photography Chittagong, Wedding Cinematography Bangladesh, Bridal Photography, Wedding Films, Chittagong Wedding');

    // Open Graph
    updateMeta('og:site_name', siteName, 'property');
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:url', canonical || currentUrl, 'property');
    updateMeta('og:image', image, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical || currentUrl);

    // JSON-LD Schema Injection
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // Cleanup isn't strictly necessary for SPAs as we overwrite, 
    // but good for ensuring we don't duplicate if logic changes.
  }, [fullTitle, description, type, image, canonical, schema]);

  return null;
};

export default SEO;