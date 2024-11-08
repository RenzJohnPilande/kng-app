const FetchProducts = async () => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    data = data.sort(() => Math.random() - 0.5);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export default FetchProducts;
