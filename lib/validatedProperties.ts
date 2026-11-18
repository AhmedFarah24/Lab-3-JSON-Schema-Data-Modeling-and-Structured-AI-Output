
import Ajv2020 from "ajv/dist/2020";
import schema from "../schemas/property.schema.json";
import properties from "../data/generated/properties.json";
import type { PropertyListing } from "../types/property";

const ajv = new Ajv2020({ allErrors: true });
const validate = ajv.compile(schema);

export function getValidatedProperties(): PropertyListing[] {
  return properties.filter((property) => {
    const valid = validate(property);

    if (!valid) {
      console.error("Invalid property:", validate.errors);
    }

    return valid;
  }) as PropertyListing[];
}
