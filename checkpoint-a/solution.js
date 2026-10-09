// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. loadOrders()
 * async. Returns every order from the database, as an array.
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * 2. myOrders(orders)
 * Takes an array of orders. Returns only the ones that are both:
 * - from Giza
 * - with status pending
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "pending"
  );
}

/**
 * 3. summarize(orders)
 * Takes an array of orders. Returns total number of items (sum of quantity).
 */
export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

/**
 * 4. describeOrder(id)
 * async. Looks up one order by id.
 * Returns: "{item} x{quantity} ordered by {student}"
 * If not found / rejects, returns: "Missing order: {id}"
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

/**
 * 5. toJsonLines(orders)
 * Takes an array of orders.
 * Returns JSON text for an array of objects keeping only item and price.
 */
export function toJsonLines(orders) {
  const simplified = orders.map((order) => ({
    item: order.item,
    price: order.price,
  }));
  return JSON.stringify(simplified);
}