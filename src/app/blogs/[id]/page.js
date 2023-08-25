import loadSingleBlogData from "../../../utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);
    return {
        title: title,
    };
}

const SingleBlog = async ({ params }) => {
    const { id, title, content } = await loadSingleBlogData(params.id);
    return (
        <div className="container mx-auto">
            <div className="border border-blue-500 p-2 my-2" >
                <h3>{id}. {title}</h3>
                <p><small> {content}</small></p>
            </div>

        </div>
    )
}

export default SingleBlog;