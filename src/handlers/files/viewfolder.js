//assuming that there will only be folders at the top level because i dont know how to write the endpoint properly
import files from "../../../files/files.json";

function findRelevantPath(currentFolder, nameToFind) {
    let position = null;
    let ok = false;
    let count = 0; 
    if (currentFolder[0] == files[0]) { //root folder
        currentFolder.forEach(file => {
            if (ok) return;
            if (file.name == nameToFind) {
                position = count;
                ok = true;
            }
    
            count++;
        })
    }
    else {
        currentFolder.files.forEach(file => {
            if (ok) return;
            if (file.name == nameToFind) {
                position = count;
                ok = true;
            }
    
            count++;
        })
    }

    console.log(nameToFind, position);
    return position;
}

const ViewFolder = ({ params }) => {
    let body = JSON.stringify({error: "not found/not a folder"});
    let ok = false;

    //todo: check for null
    if (params?.folder == "" || params?.folder == "." || params?.folder == "root") {
        body = JSON.stringify(files);
    }
    else {
        // /Expenses/Extended ["Expenses", "Extended"]
        let splitPath = params.folder.split("/");
        let currentJSONPath = files;

        splitPath.forEach(pathSegment => {
            // console.log(findRelevantPath(currentJSONPath, pathSegment));
            if (currentJSONPath[0] == files[0]) {// check for root
                currentJSONPath = currentJSONPath[findRelevantPath(currentJSONPath, pathSegment)];
            }
            else {
                currentJSONPath = currentJSONPath.files[findRelevantPath(currentJSONPath, pathSegment)];
            }
           
            console.log(currentJSONPath);
            console.log(currentJSONPath.type);
            // console.log(currentJSONPath.toString());
        });

        // console.log(currentJSONPath.toString());

        if (currentJSONPath.type == "folder") {
            body = JSON.stringify(currentJSONPath.files);
        };

        // files.forEach(file => {
        //     if (ok) return;
        //     if (file.name == params?.folder && file.type == "folder") {
        //         body = JSON.stringify(file.files);
        //         ok = true;
        //     }
        // })
    }

    return new Response(body, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Max-Age": "86400",
        }
    })
}

export default ViewFolder;