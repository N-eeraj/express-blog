const slugInput = document.getElementById("slug_input")
const tagsInput = document.getElementById("tags_input")
const tagsList = document.getElementById("tags_list")

// Alphanumeric slug with - separation
slugInput.addEventListener("input", ({ target }) => {
  let actualSlug = target.value.replaceAll(" ", "-")
  actualSlug = actualSlug.replaceAll(/[^a-zA-Z0-9-]/g, "")
  slugInput.value = actualSlug
})

function removeTag({ target }) {
  target.parentElement.remove()
}

function addTag() {
  if (!tagsInput.value) return

  // Create tag list item
  const tagListItem = document.createElement("li")
  tagListItem.classList.add("tag")
  
  // Create span to show the tag
  const tagText = document.createElement("span")
  tagText.innerText = tagsInput.value
  tagListItem.appendChild(tagText)
  
  // Create hidden input to send data in form submission
  const tagHiddenInput = document.createElement("input")
  tagHiddenInput.setAttribute("type", "hidden")
  tagHiddenInput.setAttribute("name", "tags[]")
  tagHiddenInput.setAttribute("value", tagsInput.value)
  tagListItem.appendChild(tagHiddenInput)
  
  // Create button to delete tag
  const tagDeleteButton = document.createElement("button")
  tagDeleteButton.setAttribute("type", "button")
  tagDeleteButton.classList.add("delete-tag-btn", "btn-primary")
  tagDeleteButton.innerHTML = "&times;"
  tagDeleteButton.addEventListener("click", removeTag)
  tagListItem.appendChild(tagDeleteButton)

  tagsList.appendChild(tagListItem)
  tagsInput.value = ""
}

tagsInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    addTag()
  }
})

// Alphanumeric tag with _ separation
tagsInput.addEventListener("input", () => {
  let actualTag = tagsInput.value.replaceAll(" ", "_")
  actualTag = actualTag.replaceAll(/[^a-zA-Z0-9_]/g, "")
  tagsInput.value = actualTag
})
