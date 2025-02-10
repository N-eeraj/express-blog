const slugInput = document.getElementById("slug_input")

slugInput.addEventListener("input", ({ target }) => {
  let actualSlug = target.value.replaceAll(" ", "-")
  actualSlug = actualSlug.replaceAll(/[^a-zA-Z0-9-]/g, "")
  slugInput.value = actualSlug
})
