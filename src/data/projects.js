import { Cpu, Database, Layers } from 'lucide-react';

// Add verified URLs here when available. Empty links are intentionally not rendered.
export const projects = [
  { id: 'seven-brothers', title: '7 Brothers Seafood', type: 'Full-Stack E-Commerce', description: 'A comprehensive digital storefront and admin platform for a seafood business. Features include robust inventory management, secure authentication, and a responsive customer-facing ordering system.', tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Cloudinary'], links: {}, icon: Database },
  { id: 'smart-queue', title: 'Smart Queue System', type: 'Automation / Utility', description: 'An intelligent queue management architecture designed to optimize waiting times and resource allocation in high-traffic environments.', tech: ['Python', 'React', 'WebSockets', 'Redis'], links: {}, icon: Layers },
  { id: 'ai-interview', title: 'AI Interview Practice', type: 'AI Application', description: 'A specialized RAG-powered application simulating technical interviews. Evaluates responses in real-time and provides structured feedback based on domain-specific knowledge bases.', tech: ['Python', 'LangChain', 'OpenAI API', 'React'], links: {}, icon: Cpu },
];
