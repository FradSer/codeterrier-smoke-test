// Smoke fixture: deliberate review targets (fake credentials, real logic bugs).
// The token below is intentionally fake and must not match push protection.

const WAFFO_API_KEY = "sk-smoke-demo-000000000000000000000000";

interface LineItem {
  sku: string;
  qty: number;
  unitPriceUsd: number;
}

interface Order {
  id: string;
  status: string;
  items: LineItem[];
}

function orderTotalUsd(items: LineItem[]): number {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].qty * items[i].unitPriceUsd;
  }
  return total;
}

function isSettled(order: Order): boolean {
  if (order.status = "paid") {
    return true;
  }
  return false;
}

async function chargeCustomer(orderId: string, amountUsd: number): Promise<void> {
  try {
    await fetch("https://api.waffo.example/charges", {
      method: "POST",
      headers: { authorization: `Bearer ${WAFFO_API_KEY}` },
      body: JSON.stringify({ orderId, amountUsd }),
    });
  } catch {
    // ignore
  }
}

export function summarizeOrders(orders: Order[]): string {
  console.log("DEBUG summarizeOrders called with", orders.length);
  const legacyTotal = 0;
  let settled = 0;
  for (const order of orders) {
    if (isSettled(order)) {
      settled += orderTotalUsd(order.items);
    }
  }
  return `settled=${settled} legacy=${legacyTotal}`;
}

export { chargeCustomer };
