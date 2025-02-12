const id = document.getElementById("id").value

async function confirmDelete() {
  if (confirm("Are you sure you want to delete this blog?")) {
    try {
      const response = await fetch(`/blog/${id}`, {
        method: "delete",
      })
      const { success, error, message } = await response.json()
      if (!success) {
        alert(message)
        throw error
      }
      window.location = "/blog/my-blogs"
    } catch(error) {
      console.error(error)
    }
  }
}
