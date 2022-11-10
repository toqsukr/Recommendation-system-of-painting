import { modelRecomendation } from "./modules/model.js";
import { Site } from "./classes/Site.js";

const rcm = new Site("#site", modelRecomendation);
rcm.build();
