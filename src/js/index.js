const processSalesCoffee = async () => {
  try {
    const xml = await getSalesCoffee();
    const rows = xml.querySelectorAll("row");

    const tableBody = document.querySelector("#example tbody");
    tableBody.innerHTML = "";

    rows.forEach((row) => {
      const get = (tag) => row.querySelector(tag)?.textContent ?? "";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-4 py-2">${get("Date")}</td>
        <td class="border px-4 py-2">${get("Time")}</td>
        <td class="border px-4 py-2">${get("coffee_name")}</td>
        <td class="border px-4 py-2">${get("cash_type")}</td>
        <td class="border px-4 py-2">$${get("money")}</td>
        <td class="border px-4 py-2">${get("Time_of_Day")}</td>
        <td class="border px-4 py-2">${get("Weekday")}</td>
        <td class="border px-4 py-2">${get("Month_name")}</td>
      `;
      tableBody.appendChild(tr);
    });

    $("#example").DataTable();
  } catch (error) {
    console.error("Error al procesar ventas de café:", error);
  }
};

document.addEventListener("DOMContentLoaded", processSalesCoffee);