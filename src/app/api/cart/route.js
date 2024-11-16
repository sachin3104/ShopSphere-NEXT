// src/app/api/cart/route.js

// In-memory cart array
let cart = [];

// Handle GET requests: Return all cart items
export async function GET(request) {
  return new Response(JSON.stringify(cart), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Handle POST requests: Add a new item to the cart
export async function POST(request) {
  try {
    const body = await request.json(); // Parse the request body
    const { id, name, price, quantity } = body;

    // Validate required fields
    if (!id || !name || !price || !quantity) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the item already exists in the cart
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      // If the item exists, update its quantity
      existingItem.quantity += quantity;
    } else {
      // Add the new item to the cart
      cart.push({ id, name, price, quantity });
    }

    return new Response(JSON.stringify({ message: "Item added to cart" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle invalid request data
    return new Response(JSON.stringify({ error: "Invalid request data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle DELETE requests: Remove an item from the cart
export async function DELETE(request) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get("id")); // Extract the item ID from query params

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing item ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Remove the item with the given ID from the cart
  const initialLength = cart.length;
  cart = cart.filter((item) => item.id !== id);

  if (cart.length === initialLength) {
    return new Response(JSON.stringify({ error: "Item not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Item removed from cart" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
