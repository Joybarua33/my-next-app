const blogs = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in Web Development",
        slug: "future-of-ai-in-web-development",
        description:
        "Explore how artificial intelligence is transforming web development through automation, smart coding assistants, and improved user experiences.",
        author: "John Smith",
        category: "Technology",
        publishedDate: "2026-10-15",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        tags: ["AI", "Web Development", "Technology"],
        featured: true
    },
    {
        id: 2,
        title: "10 Essential React Tips Every Developer Should Know",
        slug: "essential-react-tips",
        description:
        "Learn practical React techniques that can help you write cleaner components, improve performance, and build scalable applications.",
        author: "Sarah Johnson",
        category: "Web Development",
        publishedDate: "2026-10-18",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        tags: ["React", "JavaScript", "Frontend"],
        featured: false
    },
    {
        id: 3,
        title: "Mastering CSS Grid and Flexbox",
        slug: "mastering-css-grid-and-flexbox",
        description:
        "A beginner-friendly guide to understanding modern CSS layouts and creating responsive designs using Grid and Flexbox.",
        author: "Michael Brown",
        category: "CSS",
        publishedDate: "2026-10-22",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
        tags: ["CSS", "Responsive Design", "Frontend"],
        featured: false
    },
    {
        id: 4,
        title: "Why Every Developer Should Learn Next.js",
        slug: "why-developers-should-learn-nextjs",
        description:
        "Discover how Next.js simplifies routing, server-side rendering, data fetching, and full-stack application development.",
        author: "David Wilson",
        category: "Next.js",
        publishedDate: "2026-10-25",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        tags: ["Next.js", "React", "Full Stack"],
        featured: true
    }
];

const BlogDetailPage = async ({params}) => {
    const {blogId} = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId))
    return (
        <div>
            <h4 className="text-3xl">Blog Detail Coming soon</h4>
            {blog && <div>
                <h2 className="text-4xl">{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
            
            }
        </div>
    );
};

export default BlogDetailPage;