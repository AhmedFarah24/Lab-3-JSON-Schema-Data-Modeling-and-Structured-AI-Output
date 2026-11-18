
# ADR 001: Property Data Contract

## Context
Our Neighborhood Listing Platform needs accurate
property information before displaying listings.

The data supports property cards, detail pages,
local sponsors, and voice responses.

## Decision
We use JSON Schema to validate our property data.

Each property requires:
- Property ID
- Address
- Price
- Bedrooms and bathrooms
- Square footage
- Amenities
- ZIP code
- Local sponsors

We reject missing fields, negative prices,
invalid ZIP codes, and unknown fields.

## Database Relationships
Property has a unique property_id.
Sponsor has a unique sponsor_id.

PropertySponsor connects properties with sponsors.
It uses property_id and sponsor_id as a combined key.

This prevents repeating sponsor details
in every property record.

## Amenities
We chose controlled values for amenities,
such as parking, pool, garage, and laundry.

## Alternatives
We considered free-text amenities, but that
could cause inconsistent spelling.

We also considered storing complete sponsor
information inside each property record.

## Consequences
Our data is more consistent and easier to validate.

However, changes to the schema may require
updates to our records and application.

## TypeScript
We plan to generate TypeScript types from the
JSON Schema to keep the rules consistent.

## Verification
We created five fictional property records
and tested four invalid cases:
missing ID, negative price, bad ZIP code,
and unknown field.
