// "use client"

import Link from "next/link";
import loadBlogsData from "../../utils/loadBlogsData";
// import { useRouter } from "next/navigation";

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'Next Hero',
}


const BlogsPage = async () => {
    // const router = useRouter()
    const blogs = await loadBlogsData()
    return (
        <div className="container mx-auto">
            {
                blogs.map(({ id, title }) =>
                    <div key={id} className="border border-blue-500 p-2 my-2" >
                        <h3>{id}. {title}</h3>
                        <Link className="inline-block mt-5" href={`/blogs/${id}`}>
                            <button className="btn text-white px-2 py-1 bg-blue-500"> Details</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default BlogsPage;