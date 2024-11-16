import { products } from "@/data/products";

export async function GET(request) {
  // Return a JSON response with the list of products
  return new Response(JSON.stringify(products), {
    status: 200, // HTTP status code for success
    headers: {
      "Content-Type": "application/json", // Indicate the response is JSON
    },
  });
}
