
const loadSingleBlogData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
        cache: "no-cache"
    });
    return res.json();
};

export default loadSingleBlogData;