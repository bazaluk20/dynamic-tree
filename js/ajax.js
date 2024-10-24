// Function to get all tree nodes
function getTree() {
  // Request to the server to get all tree nodes
  fetch("./functions/treeHandler.php", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length) {
        // Drawing the tree
        renderTree(data);
        // Hide the add root button
        document.querySelector("#createRoot").style.display = "none";
      } else {
        // If the tree is empty, show the add root button
        document.querySelector("#createRoot").style.display = "block";
      }
    })
    .catch((error) => console.error("Error fetching tree data:", error));
}

// Function to create a new node via AJAX
function createNode(name, parentId = null) {
  const formData = new FormData();
  formData.append("action", "add");
  formData.append("name", name);
  formData.append("parentId", parentId);

  fetch("./functions/treeHandler.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // alert(data.message);
        // Call the appendNode function after successfully adding a node
        appendNode(name, parentId, data.nodeId);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
}

// Function to delete a node via AJAX
function deleteNode(id) {
  const formData = new FormData();
  formData.append("action", "delete");
  formData.append("id", id);

  fetch("./functions/treeHandler.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // alert(data.message);
        // Call the removeNode function after successfully removing a node.
        removeNode(id);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
}
