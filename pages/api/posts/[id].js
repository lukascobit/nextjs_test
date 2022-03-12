import { posts } from "../../../data";

function Handler({ query: { id } }, res) {
    const post = posts[id - 1];
    res.status(post ? 200 : 404).json(post || { message: "Not found." });
}

export default Handler;
