(function () {
  var link = document.querySelector(".js-write-us");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector(".message-form");
  var fields = {
    name: form.querySelector("[name='name']"),
    email: form.querySelector("[name='email']"),
    message: form.querySelector("[name='message']")
  };

  var storage = {
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    text: localStorage.getItem("message")
  };

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
      fields.name.value = storage.name;
      fields.email.value = storage.email;
      fields.message.value = storage.text;
      fields.email.focus();
    }
    else {
      fields.name.focus();
    }
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (event) {
    if (!fields.name.value || !fields.email.value || !fields.message.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("name", fields.name.value);
      localStorage.setItem("email", fields.email.value);
      localStorage.setItem("message", fields.message.value);
    }
  });

})();
