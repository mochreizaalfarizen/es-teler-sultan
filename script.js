// ===== Pengaturan =====
const NOMOR_WA = "6281234567890"; // ganti dengan nomor WhatsApp asli (format 62, tanpa + / 0)
const PESAN = "Halo EXO Drinks, saya mau pesan";

// Tombol WhatsApp
const wa = document.getElementById("wa");
if (wa) {
  wa.href = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(PESAN)}`;
  wa.target = "_blank";
  wa.rel = "noopener";
}

// Menandai menu navigasi yang aktif saat scroll
const links = document.querySelectorAll("nav div a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

function setActive() {
  const y = window.scrollY + 80;
  let idx = 0;
  sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) idx = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === idx));
}
window.addEventListener("scroll", setActive);
setActive();
