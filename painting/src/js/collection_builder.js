import { modelCollection } from "./modules/model.js";
import { Site } from "./classes/Site.js";

const coltn = new Site("#site", modelCollection);
coltn.build();
