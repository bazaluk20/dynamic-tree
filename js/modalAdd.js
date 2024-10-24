const addNodeModal = document.getElementById("addNodeModal");
const nodeNameInput = document.getElementById("nodeNameInput");
const confirmAddBtn = document.getElementById("confirmAddBtn");
const cancelAddBtn = document.getElementById("cancelAddBtn");

let currentParentId = null; // To keep track of the parent when adding a new node

// Open modal add window
function openAddNodeModal(parentId) {
  currentParentId = parentId; // Save the parent ID
  addNodeModal.style.display = "flex"; // Showing a modal window
}

// Close modal window
function closeAddNodeModal() {
  nodeNameInput.value = ""; // Clearing the input field
  addNodeModal.style.display = "none";
}

// Confirm node addition
confirmAddBtn.addEventListener("click", function () {
  const nodeName = nodeNameInput.value.trim();
  if (nodeName) {
    createNode(nodeName, currentParentId); // Call the function to add a node
    closeAddNodeModal(); // Close the modal window
  }
});

// Cancel adding a node
cancelAddBtn.addEventListener("click", closeAddNodeModal);
