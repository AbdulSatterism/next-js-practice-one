

const loadBlogsData = async () => {
    const res = await fetch("https://jsonplaceholder.org/posts", {
        cache: "force-cache"
    })
    return res.json();
};

export default loadBlogsData;