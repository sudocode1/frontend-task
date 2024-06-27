import files from "../../../files/files.json";
const GetAllFiles = () => {
    const body = JSON.stringify(files);
    return new Response(body, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Max-Age": "86400"
        }
    })
}

export default GetAllFiles;