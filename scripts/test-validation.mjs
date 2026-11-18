
import assert from "node:assert/strict";
import fs from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";

const schema = JSON.parse(
  fs.readFileSync("schemas/property.schema.json", "utf8")
);

const properties = JSON.parse(
  fs.readFileSync("data/generated/properties.json", "utf8")
);

const ajv = new Ajv2020({ allErrors: true });
const validate = ajv.compile(schema);

const original = properties[0];

assert.equal(validate(original), true);
console.log("PASS: Valid property");

function testInvalid(name, change, errorType) {
  const record = structuredClone(original);
  change(record);

  assert.equal(validate(record), false, name);
  assert.ok(
    validate.errors.some(error => error.keyword === errorType),
    `Expected ${errorType} error for ${name}`
  );

  console.log(`PASS: Rejected ${name}`);
}

testInvalid("missing ID", record => {
  delete record.property_id;
}, "required");

testInvalid("negative price", record => {
  record.price = -500;
}, "minimum");

testInvalid("bad ZIP code", record => {
  record.zip_code = "ABC";
}, "pattern");

testInvalid("unknown field", record => {
  record.unknown_field = "test";
}, "additionalProperties");

console.log("All 5 tests passed!");
