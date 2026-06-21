document.addEventListener("DOMContentLoaded", () => {
  // بيانات تجريبية للمنتجات (ممكن تربطها بقاعدة البيانات لاحقًا عبر API)
  const products = [
    { id: 1, name: "منتج 1", price: 25.50, currency: "USD", description: "وصف المنتج الأول" },
    { id: 2, name: "منتج 2", price: 40.00, currency: "USD", description: "وصف المنتج الثاني" },
    { id: 3, name: "منتج 3", price: 15.75, currency: "USD", description: "وصف المنتج الثالث" }
  ];

  // دالة لعرض المنتجات داخل التطبيق
  function renderProducts(currency = "USD") {
    const container = document.getElementById("app-products");
    container.innerHTML = ""; // تفريغ المحتوى القديم

    products.forEach(product => {
      let price = product.price;
      if(currency === "AED") price = price * 3.67;
      if(currency === "EUR") price = price * 0.92;

      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h2>${product.name}</h2>
        <p>${price.toFixed(2)} ${currency}</p>
        <p>${product.description}</p>
        <button class="btn">إضافة للسلة 🛒</button>
      `;
      container.appendChild(div);
    });
  }

  // عرض المنتجات عند تحميل الصفحة
  renderProducts();

  // مثال: تغيير العملة (تقدر تربطها بزر أو Dropdown)
  // renderProducts("AED");
});
