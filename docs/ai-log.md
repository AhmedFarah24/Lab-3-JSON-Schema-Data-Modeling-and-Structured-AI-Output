
# Lab 3 AI Collaboration Log

## ChatGPT
I used ChatGPT to help develop a JSON Schema,
create five fictional property listings, and
write validation tests.

## Google AI Studio
I asked Google AI Studio to generate five
fictional California property listings in JSON.

I saved the generated response in:
data/generated/ai-studio-raw.json

## Verification
I tested the original five property records
and four invalid examples.

The invalid tests checked:
- Missing property ID
- Negative price
- Invalid ZIP code
- Unknown property field

All five validation tests passed.

I also checked the five AI-generated records
against my JSON Schema.

Result: 5 passed, 0 failed.

I asked Gemini to review my property data model.

Gemini suggested separating Property, Sponsor, and
PropertySponsor into different database tables.

It also recommended using controlled amenity values
instead of free text to prevent spelling errors.

I agree with separating sponsors and properties
because it avoids repeated information.

For now, I will keep amenities as controlled values
in my JSON Schema. In the future, I can use
separate Amenity and PropertyAmenity database tables.

I decided not to create separate city and ZIP code
tables because this project is still small.

I reviewed these suggestions alongside my data model.
My JSON validation tests passed, but they do not
test database normalization.


## Privacy
I used fictional property listings.
No real client information was included.

## Final Data Model Decision

After reviewing Gemini's feedback, I decided to
keep Property, Sponsor, and PropertySponsor as
separate database tables.

This helps prevent duplicate sponsor information
and makes the database easier to manage.

I also decided to use controlled amenity values
like parking, pool, garage, laundry, and balcony.

For now, amenities will stay as an array in JSON.
In the future, I can use Amenity and PropertyAmenity
tables to improve database searches.

I will keep street, city, state, and ZIP code
together in the JSON response, but use separate
columns when storing them in a relational database.
