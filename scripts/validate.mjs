
import fs from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const schema = JSON.parse(
  fs.readFileSync("schemas/property.schema.json", "utf8")
);

const properties = JSON.parse(
  fs.readFileSync("data/generated/properties.json", "utf8")
);

const ajv = new Ajv2020({ allErrors: true });
addFormats(ajv);

const validate = ajv.compile(schema);
let failed = 0;

for (const property of properties) {
  if (validate(property)) {
    console.log(`PASS: ${property.property_id}`);
  } else {
    failed++;
    console.log(`FAIL: ${property.property_id ?? "missing ID"}`);
    console.log(validate.errors);
  }
}

console.log(
  `Results: ${properties.length - failed} passed, ${failed} failed`
);

if (failed > 0) {
  process.exitCode = 1;
}
