import { Router } from "itty-router";

import Absences from "./handlers/absences";
import Conflict from "./handlers/conflicts";
import FilesWeb from "./handlers/files/web";
import GetAllFiles from "./handlers/files/all-files";
import ViewFolder from "./handlers/files/viewfolder";

const router = Router();

router
  .get("/api/absences", Absences)
  .get("/api/conflict/:id", Conflict)
  .get("/api/allfiles", GetAllFiles)
  .get("/api/viewfolder/:folder+", ViewFolder) //todo:recursive with greedy pattern
  .get("/files/", FilesWeb)
  .get("*", () => new Response("Not found", { status: 404 }));

export default {
  async fetch(request, env, ctx) {
    return router.handle(request);
  },
};
