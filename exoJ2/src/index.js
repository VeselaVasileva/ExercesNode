import app from "expressSrv.js";

import "dotenv/config";

const port = process.env.PORT || 3000;

console.log(process.cwd());
app.listen(port, () => {
  console.log("test port " + port);
});
