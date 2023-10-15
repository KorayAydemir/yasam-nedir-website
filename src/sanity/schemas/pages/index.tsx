import { SchemaTypeDefinition } from "sanity";
import { altBolum } from "./alt-bolum";
import { birim } from "./birim";
import { bolum } from "./bolum";
import { tooltips } from "./tooltips";
import { generalSettings } from "./general-settings";
import { denemeler } from "./denemeler";
import { evrimKurami } from "./evrim-kurami";
import { comments } from "./comments";

export const pages: SchemaTypeDefinition[] = [
    birim,
    bolum,
    altBolum,
    tooltips,
    generalSettings,
    denemeler,
    evrimKurami,
    comments,
];
