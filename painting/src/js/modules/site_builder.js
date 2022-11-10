import { modelRecomendation } from "./model.js";
import { Site } from "./class.js";

const rcm = new Site("#site", modelRecomendation);
rcm.build();
