const d = document,
  $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");

function contactForm() {
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
    e.preventDefault();
    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/spera.paz@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      })
      .finally(() => {
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 3000);
      });
  });
}

d.addEventListener("DOMContentLoaded", contactForm);
