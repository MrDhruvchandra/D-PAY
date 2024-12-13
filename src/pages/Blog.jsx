import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'The Future of Digital Payments',
    excerpt: 'Explore how emerging technologies are shaping the future of digital payments and financial services.',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Security in Digital Transactions',
    excerpt: 'Understanding the importance of security measures in digital payment systems.',
    date: 'March 10, 2024',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Making Finance Accessible',
    excerpt: 'How digital payment solutions are bringing financial services to underserved communities.',
    date: 'March 5, 2024',
    author: 'Priya Patel',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80'
  }
];

const Blog = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">D-Pay Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, updates, and stories from the D-Pay team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <Link
                  to="/coming-soon"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;