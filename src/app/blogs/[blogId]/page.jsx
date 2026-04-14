const blogs = [
    {
        id: 1,
        title: "Understanding React Basics",
        author: "John Doe",
        date: "2026-04-10",
        category: "Web Development",
        content: "This blog explains the fundamentals of React including components, props, and state.",
    },
    {
        id: 2,
        title: "Getting Started with Node.js",
        author: "Jane Smith",
        date: "2026-04-08",
        category: "Backend",
        content: "Learn how to build a server using Node.js and Express with simple examples.",
    },
    {
        id: 3,
        title: "CSS Flexbox Guide",
        author: "Alex Johnson",
        date: "2026-04-05",
        category: "Design",
        content: "A complete guide to mastering Flexbox layout in CSS for responsive design.",
    },
    {
        id: 4,
        title: "JavaScript ES6 Features",
        author: "Emily Davis",
        date: "2026-04-02",
        category: "Programming",
        content: "Explore modern JavaScript features like arrow functions, destructuring, and modules.",
    },
];

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));
    // console.log(blog);
    return (
        <div>
            {/* <h4 className="text-4xl bg-red-200">Blog details comming soon</h4> */}
            {blog && <div>
                <h3 className="text-3xl font-semibold ">{blog.title}</h3>
                <p>{blog.content}</p>

                </div>}
        </div>
    );
};

export default BlogDetailPage;
