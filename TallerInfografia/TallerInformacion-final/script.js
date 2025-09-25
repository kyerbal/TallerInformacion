const root = document.querySelector("#como");

if (root) {
  const inicio = root.querySelector("#s3-inicio");
  const detalle = root.querySelector("#s3-detalle");
  const openBt = root.querySelector("#s3-open");
  const closeBt = root.querySelector("#s3-close");

  const abrir = () => {
    detalle.hidden = false;
    inicio.hidden = true;
    root.classList.add("is-open");
    openBt?.setAttribute("aria-expanded", "true");
    closeBt?.focus({ preventScroll: true });
  };
  const cerrar = () => {
    inicio.hidden = true ? false : true;
    inicio.hidden = false;
    detalle.hidden = true;
    root.classList.remove("is-open");
    openBt?.setAttribute("aria-expanded", "false");
    openBt?.focus({ preventScroll: true });
  };

  openBt?.addEventListener("click", abrir);
  closeBt?.addEventListener("click", cerrar);
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrar();
  });
} // 👈 nada de return suelto
