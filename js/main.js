// 手機版導覽列開合
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // 案例頁：類別篩選
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      caseCards.forEach((card) => {
        const show = cat === "all" || card.dataset.category === cat;
        card.style.display = show ? "" : "none";
      });
    });
  });

  // 聯絡表單：目前僅示意，尚未串接後端
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("已收到您的訊息，我們將盡快與您聯繫。\n（此為示範表單，尚未串接寄信功能）");
      form.reset();
    });
  }
});
