const translations = {
  ar: { title: "مرحبًا بكم في Mayora Foods", desc: "موقع إلكتروني متعدد اللغات والعملة لعرض منتجاتنا." },
  en: { title: "Welcome to Mayora Foods", desc: "A multilingual and multi-currency website to showcase our products." },
  fr: { title: "Bienvenue chez Mayora Foods", desc: "Un site multilingue et multi-devises pour présenter nos produits." },
  es: { title: "Bienvenidos a Mayora Foods", desc: "Un sitio web multilingüe y multimoneda para mostrar nuestros productos." },
  zh: { title: "欢迎来到 Mayora Foods", desc: "一个多语言和多货币的网站，用于展示我们的产品。" },
  th: { title: "ยินดีต้อนรับสู่ Mayora Foods", desc: "เว็บไซต์หลายภาษาและหลายสกุลเงินเพื่อแสดงผลิตภัณฑ์ของเรา" },
  ur: { title: "Mayora Foods میں خوش آمدید", desc: "ہمارے مصنوعات کو دکھانے کے لئے ایک کثیر زبان اور کثیر کرنسی ویب سائٹ۔" }
};
function setLanguage(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("desc").innerText = translations[lang].desc;
}
