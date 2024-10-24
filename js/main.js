document.addEventListener("DOMContentLoaded", function () {
  // Creating a tree
  getTree();

  // Handler for the root node creation button
  document.querySelector("#createRoot").addEventListener("click", function () {
    const name = "Root"; // Name of the root element
    createNode(name); // Function to create an element
    this.style.display = "none"; // Hide the button after creating the root element
  });

  // Delegating events to a parent (treeRoot)
  document
    .querySelector("#treeRoot")
    .addEventListener("click", function (event) {
      // Check that the click was on the add button
      if (event.target.classList.contains("branchAdd")) {
        let branch = event.target.closest(".branchTitle");
        let parentId = branch.getAttribute("data-id");
        openAddNodeModal(parentId); // Open a popup to add a new node and pass the parent ID
      }

      // Check that the click was on the delete button
      if (event.target.classList.contains("branchRemove")) {
        let branch = event.target.closest(".branchTitle");
        let branchId = branch.getAttribute("data-id");

        openDeleteNodeModal(branchId); // Open a popup to confirm deletion and pass the element ID
        autoCloseDeleteModal(); // Starting the auto close timer
      }
    });
});

// Function for rendering a tree when the page loads
function renderTree(treeData) {
  const parentElement = document.querySelector("#treeRoot");
  parentElement.innerHTML = ""; // Cleaning the tree container

  // We iterate over each element of the tree and create nodes
  treeData.forEach((node) => {
    appendNode(node.name, node.parent_id, node.id);
  });
}

// Function to add a new element
function appendNode(name, parentId, nodeId) {
  // Find the parent element where the new node will be added
  let parentElement;
  if (parentId === null) {
    // If parent is root node
    parentElement = document.querySelector("#treeRoot");
  } else {
    // Find parent by identifier
    parentElement = document.querySelector(
      `[data-id='${parentId}']`
    ).parentElement;
  }

  // Create a new node element
  const newBranch = document.createElement("div");
  newBranch.classList.add("branch");

  // Add an identifier to manage this node
  const branchTitle = document.createElement("div");
  branchTitle.classList.add("branchTitle", "branch__title");
  branchTitle.setAttribute("data-id", nodeId);

  // Adding a node name
  const nameParagraph = document.createElement("p");
  nameParagraph.classList.add("branch__name");
  nameParagraph.textContent = name;

  // Button to add a new child node
  const addButton = document.createElement("button");
  addButton.classList.add("branchAdd", "branch__btn", "branch__btn--add");

  // Button to delete a node and all its children
  const removeButton = document.createElement("button");
  removeButton.classList.add(
    "branchRemove",
    "branch__btn",
    "branch__btn--remove"
  );

  // Adding elements to a new branch
  branchTitle.appendChild(nameParagraph);
  branchTitle.appendChild(addButton);
  branchTitle.appendChild(removeButton);
  newBranch.appendChild(branchTitle);

  // Add a new branch to the parent
  parentElement.appendChild(newBranch);
}

// Function to delete an element and its children
function removeNode(nodeId) {
  // Find an element by data-id
  const nodeElement = document.querySelector(`[data-id='${nodeId}']`);

  // Let's check if the element exists
  if (nodeElement) {
    // Delete the entire node element (along with its children)
    nodeElement.parentElement.remove();

    // After deleting, check if there are any nodes left.
    checkTreeStatus();
  } else {
    console.error(`Node with ID ${nodeId} not found.`);
  }
}

// Checking for element presence to show creation of root element
function checkTreeStatus() {
  // Checking if there are tree elements
  const tree = document.querySelectorAll(".branch");

  // If there are no nodes, we show the button to create a root node
  if (tree.length === 0) {
    document.getElementById("createRoot").style.display = "block";
  } else {
    // If there are nodes, hide the button for creating the root node
    document.getElementById("createRoot").style.display = "none";
  }
}
