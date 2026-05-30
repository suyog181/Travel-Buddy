const capabilities = [
  ["Network inventory visibility", "Track stock across warehouses, stores, branches, vans, and field teams with low, excess, slow-moving, near-expiry, and blocked alerts."],
  ["Category-aware operations", "Classify each SKU as chemical, consumable, office supply, PPE, equipment, spare part, dispenser, bundle, or other facility supply."],
  ["Verified sourcing", "Request inventory, place private bids, buy, transfer, or sell excess stock with verified franchisees, partners, and sellers."],
  ["Smart recommendations", "Rank buy-from options by urgency, price, distance, availability, trust badges, category, delivery feasibility, and contract constraints."],
  ["Enterprise customer accounts", "Manage sites, recurring orders, approved products, contract pricing, quotes, invoices, delivery schedules, returns, and disputes."],
  ["Forecasting and safety stock", "Predict future orders from historical demand and recommend safety stock by product, warehouse, customer, and route."],
  ["Managed delivery", "Plan white-glove routes, proof of delivery, route status, customer acceptance, claims, returns, and service fees."],
  ["Profitability control", "Analyze revenue, costs, margins, discounts, delivery expense, commissions, holding cost, write-off risk, and net contribution."],
  ["Privacy-first exchange", "Avoid exposing sensitive competitor-wide pricing and inventory while supporting private, governed stock movement."],
];

const hierarchy = [
  "Parent company / franchisor",
  "Regional master franchise",
  "Local franchise owner",
  "Warehouse",
  "Store / branch",
  "Sales representative",
  "Delivery driver",
  "Customer account",
  "Customer location / site",
];

const categories = [
  {
    name: "Cleaning Chemical",
    summary: "Compliance-heavy SKUs with batch, expiry, transport, storage, and safety requirements.",
    fields: ["SDS/MSDS", "CAS number if applicable", "Hazard classification", "Concentration/purity", "Expiry date", "Storage condition", "Spill handling instructions", "PPE requirement", "Transport caution", "Chemical compatibility notes"],
  },
  {
    name: "Janitorial Consumable",
    summary: "High-frequency replenishment items such as tissue rolls, garbage bags, mops, liners, and cleaning tools.",
    fields: ["Pack size", "Units per case", "Brand", "Material", "Reorder frequency", "Customer usage rate"],
  },
  {
    name: "Office Supply",
    summary: "Contract-priced office products that should replenish on predictable account schedules.",
    fields: ["Brand", "Pack size", "Unit of measure", "Reorder frequency", "Contract price if applicable"],
  },
  {
    name: "PPE / Safety Product",
    summary: "Safety items where size, certification, quality grade, pack size, and expiry may matter.",
    fields: ["Certification if applicable", "Size", "Expiry date if applicable", "Quality grade", "Pack size"],
  },
  {
    name: "Equipment",
    summary: "Machines, devices, and durable assets requiring lifecycle, service, warranty, and rental/sale tracking.",
    fields: ["Serial number", "Warranty start/end date", "Maintenance schedule", "Service history", "Spare parts linked", "Rental or sale status"],
  },
  {
    name: "Spare Part",
    summary: "Replacement parts linked to equipment service workflows, compatibility, and availability planning.",
    fields: ["Compatible equipment", "Part number", "Warranty terms", "Stock location", "Reorder threshold"],
  },
  {
    name: "Dispenser / Fixture",
    summary: "Installed or supplied fixtures with account-specific placement, service, and replenishment implications.",
    fields: ["Fixture type", "Installation location", "Compatible consumables", "Service schedule", "Customer ownership status"],
  },
  {
    name: "Customer Bundle / Kit",
    summary: "Customer-specific supply kits composed of multiple products and substitution rules.",
    fields: ["Bundle name", "Included products", "Quantity of each product", "Target customer type", "Recommended reorder cycle", "Bundle margin", "Substitution rules"],
  },
  {
    name: "Other Facility Supply",
    summary: "A flexible category for additional facility products that do not need chemical-only compliance.",
    fields: ["Product family", "Unit of measure", "Pack size", "Supplier", "Reorder rule", "Contract constraint"],
  },
];

const badges = {
  "Company-level badges": ["Verified Business", "GST Verified", "Trusted Franchise", "Governance Verified", "Low Dispute Rate", "Fast Fulfillment", "White-Glove Eligible", "Contract Supplier", "Enterprise Ready"],
  "Chemical-specific badges": ["SDS/MSDS Verified", "Chemical Handling Verified", "Storage Safety Verified", "Hazardous Material Review Passed", "Transport Ready", "Expiry Controlled", "Batch Traceable"],
  "Equipment-specific badges": ["Warranty Verified", "Service Support Available", "Serial Number Verified", "Installation Support Available"],
  "PPE-specific badges": ["Quality Verified", "Certification Verified", "Expiry Controlled if applicable"],
};

const quoteFlow = [
  "Quote request",
  "Quote creation",
  "Customer approval",
  "Purchase order upload",
  "Order confirmation",
  "Delivery scheduling",
  "Invoice generation",
  "Payment status",
  "Reorder recommendation",
];

const pnl = [
  ["Revenue", "Sales generated by franchise, account, product, route, and service line."],
  ["Product cost", "Cost basis for chemicals, consumables, PPE, equipment, supplies, bundles, and parts."],
  ["Gross margin", "Margin after product cost by customer, category, product, warehouse, order, and rep."],
  ["Discount", "Contract and quote-level discounts tied to approved price lists."],
  ["Delivery cost", "Vehicle, driver, route, capacity, and handling costs for standard or managed delivery."],
  ["White-glove service fee", "Premium service revenue and costs for platform/company-managed delivery."],
  ["Platform commission", "Marketplace or exchange commission on eligible transactions."],
  ["Holding and write-off risk", "Inventory holding cost plus expiry, damage, slow-moving, blocked, and write-off exposure."],
  ["Returns, claims, net contribution", "Returns, disputes, customer claims, and final contribution after all costs."],
];

const capabilityGrid = document.querySelector("#capabilityGrid");
capabilities.forEach(([title, text]) => {
  capabilityGrid.insertAdjacentHTML("beforeend", `<article class="capability-card"><strong>${title}</strong><p>${text}</p></article>`);
});

const hierarchyList = document.querySelector("#hierarchyList");
hierarchy.forEach((item) => hierarchyList.insertAdjacentHTML("beforeend", `<li>${item}</li>`));

const categoryTabs = document.querySelector("#categoryTabs");
const categoryPanel = document.querySelector("#categoryPanel");

function renderCategory(index) {
  const category = categories[index];
  document.querySelectorAll(".category-tab").forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", String(tabIndex === index));
  });
  categoryPanel.innerHTML = `
    <p class="eyebrow">${category.name}</p>
    <h3>${category.summary}</h3>
    <ul>${category.fields.map((field) => `<li>${field}</li>`).join("")}</ul>
  `;
}

categories.forEach((category, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-tab";
  button.textContent = category.name;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", String(index === 0));
  button.addEventListener("click", () => renderCategory(index));
  categoryTabs.appendChild(button);
});
renderCategory(0);

const badgeColumns = document.querySelector("#badgeColumns");
Object.entries(badges).forEach(([title, badgeList]) => {
  badgeColumns.insertAdjacentHTML("beforeend", `<article class="badge-group"><h3>${title}</h3><ul>${badgeList.map((badge) => `<li>${badge}</li>`).join("")}</ul></article>`);
});

document.querySelector("#quoteFlow").innerHTML = quoteFlow.map((step) => `<li>${step}</li>`).join("");

const pnlGrid = document.querySelector("#pnlGrid");
pnl.forEach(([title, text]) => {
  pnlGrid.insertAdjacentHTML("beforeend", `<article class="pnl-card"><strong>${title}</strong><p>${text}</p></article>`);
});
