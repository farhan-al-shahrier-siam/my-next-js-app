import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "Blogs page of the website",
};

const BlogsPage = () => {
    
    const blogs = [
  {
    id: 1,
    title: "Understanding React Basics",
    author: "John Doe",
    date: "2026-04-10",
    category: "Web Development",
    content: "This blog explains the fundamentals of React including components, props, and state."
  },
  {
    id: 2,
    title: "Getting Started with Node.js",
    author: "Jane Smith",
    date: "2026-04-08",
    category: "Backend",
    content: "Learn how to build a server using Node.js and Express with simple examples."
  },
  {
    id: 3,
    title: "CSS Flexbox Guide",
    author: "Alex Johnson",
    date: "2026-04-05",
    category: "Design",
    content: "A complete guide to mastering Flexbox layout in CSS for responsive design."
  },
  {
    id: 4,
    title: "JavaScript ES6 Features",
    author: "Emily Davis",
    date: "2026-04-02",
    category: "Programming",
    content: "Explore modern JavaScript features like arrow functions, destructuring, and modules."
  }
];

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-3 bg-pink-400">Blogs</h2>
            {
                blogs.map(blog => <div key={blog.id}>
                    <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
                    <Link href={`/blogs/${blog.id}`} className="hover:bg-amber-300 p-2">Show details</Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;