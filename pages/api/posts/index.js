import { posts } from "../../../data";

function handler(req, res) {
    res.status(200).json(posts);
}

export default handler;
