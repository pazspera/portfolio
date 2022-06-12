const d = document,
  $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");

$inputs.forEach((input) => {
  const $span = d.createElement("span");
  $span.id = input.name;
  $span.textContent = input.title;
  $span.classList.add("contact-form-error", "none");
  input.insertAdjacentElement("afterend", $span);
});

d.addEventListener("keyup", (e) => {
  if (e.target.matches(".contact-form [required]")) {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

    if (pattern && $input.value !== "") {
      let regex = new RegExp(pattern);
      return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
    }
  }
});

d.addEventListener("submit", (e) => {
  const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $loader.classList.remove("d-none");

  setTimeout(() => {
    $loader.classList.add("d-none");
    $response.classList.remove("d-none");
    $form.reset();

    setTimeout(() => {
      $response.classList.add("d-none");
    }, 3000);
  }, 3000);
});
