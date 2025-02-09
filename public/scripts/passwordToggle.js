function togglePassword({ target }) {
  const input = target.parentElement.querySelector("input")
  input.type = input.type === "password" ? "text" : "password"
  target.innerText = input.type === "password" ? "Show" : "Hide"
}
