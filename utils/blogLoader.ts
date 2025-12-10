import { BlogPost } from '../types';
import yaml from 'js-yaml';

// In a real Vite build, we would use import.meta.glob. 
// For this environment, we explicitly list the files to fetch them at runtime.
const BLOG_FILES = [
  '/content/blog/capture-the-moment.md',
  '/content/blog/confident-camera.md'
];

const parseFrontmatter = (fileContent: string): { attributes: any, body: string } => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---([\s\S]*)/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { attributes: {}, body: fileContent };
  }

  const frontmatterBlock = match[1];
  const body = match[2];
  
  try {
    const attributes = yaml.load(frontmatterBlock);
    return { attributes, body };
  } catch (e) {
    console.error("Error parsing YAML frontmatter", e);
    return { attributes: {}, body };
  }
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts: BlogPost[] = [];

  for (const filePath of BLOG_FILES) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        console.warn(`Failed to fetch blog post: ${filePath}`);
        continue;
      }
      
      const text = await response.text();
      const { attributes, body } = parseFrontmatter(text);

      if (attributes) {
        posts.push({
          slug: attributes.slug || filePath.split('/').pop()?.replace('.md', '') || '',
          title: attributes.title || 'Untitled',
          date: attributes.date || new Date().toISOString(),
          author: attributes.author || 'Nikah Team',
          coverImage: attributes.coverImage || 'https://picsum.photos/800/600',
          summary: attributes.summary || '',
          body: body
        });
      }
    } catch (error) {
      console.error(`Error loading blog post ${filePath}:`, error);
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
};