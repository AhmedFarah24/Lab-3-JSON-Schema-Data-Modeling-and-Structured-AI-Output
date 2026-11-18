
import { getValidatedProperties } from "../lib/validatedProperties";

const houseImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
];

export default function Home() {
  const properties = getValidatedProperties();

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <h1 className="mb-6 text-3xl font-bold">
        Neighborhood Listing Platform
      </h1>

      <p className="mb-8">
        Browse our fictional property listings.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <div
            key={property.property_id}
            className="rounded-xl bg-white p-6 shadow-md"
          >
            <img
              src={houseImages[index % houseImages.length]}
              alt={`Illustrative house photo for ${property.address.street}`}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />

            <h2 className="text-xl font-bold">
              {property.address.street}
            </h2>

            <p>
              {property.address.city}, {property.address.state}
            </p>

            <p className="mt-3 text-2xl font-bold text-green-700">
              ${property.price.toLocaleString()}
            </p>

            <p className="mt-3">
              {property.bedrooms} Beds | {property.bathrooms} Baths
            </p>

            <p>{property.square_feet} sq. ft.</p>

            <p className="mt-3 text-sm">
              Amenities: {property.amenities.join(", ")}
            </p>

            <p className="mt-2 text-sm">
              ZIP: {property.zip_code}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        All listings are fictional. House photos are illustrative
        and do not represent the listed addresses.
      </p>
    </main>
  );
}
