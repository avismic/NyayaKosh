import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { legalMaximType } from "./legalMaximType"; // <-- Import your new schema
import { caseAnalysisType } from "./caseAnalysisType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, legalMaximType, caseAnalysisType], // <-- Add it here
};
