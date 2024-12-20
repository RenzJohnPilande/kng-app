const FetchProducts = async () => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();

    data.sort((a, b) => {
      // Prioritize "apparel" subcategory
      if (a.subcategory === "apparel" && b.subcategory !== "apparel") return -1;
      if (a.subcategory !== "apparel" && b.subcategory === "apparel") return 1;

      // After prioritizing "apparel", sort alphabetically by name
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export default FetchProducts;
