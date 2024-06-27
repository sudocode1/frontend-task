import files from "../../../files/files.json";
// import {readFileSync} from "node:fs";

// const web = readFileSync("web.html", "utf-8");

const Files = ({ params }) => {
    return new Response(atob("PGJvZHk+CiAgICA8c3BhbiBpZD0iZmlsZUxpc3QiPjwvc3Bhbj4KICAgIDxzY3JpcHQ+CiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9sZGVyKGZvbGRlcikgewogICAgICAgICAgICBsZXQgZmlsZXMgPSBhd2FpdCBmZXRjaChgL2FwaS92aWV3Zm9sZGVyLyR7Zm9sZGVyfWApOwogICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gewogICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PSAiZm9sZGVyIikKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZmlsZUxpc3QiKS5pbm5lckhUTUwgKz0gYDxhPiR7ZmlsZS5uYW1lfTwvYT4gJHtmaWxlLnR5cGV9ICR7ZmlsZS5maWxlcy5sZW5ndGh9IGZpbGVzYDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGVsc2UKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZmlsZUxpc3QiKS5pbm5lckhUTUwgKz0gYCR7ZmlsZS5uYW1lfSAke2ZpbGUudHlwZX0gJHtmaWxlLmFkZGVkfWA7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pOwogICAgICAgIH07CgogICAgICAgIGdldEZvbGRlcigiRXhwZW5zZXMiKTsKICAgIDwvc2NyaXB0Pgo8L2JvZHk+"), {
        headers: {
            "Content-Type": "text/html"
        }
    })
}

export default Files;