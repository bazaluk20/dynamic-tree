const deleteNodeModal = document.getElementById("deleteNodeModal");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

let nodeIdToDelete = null; // To track the node being deleted

// Open the delete modal window
function openDeleteNodeModal(nodeId) {
  nodeIdToDelete = nodeId; // Save the node ID
  deleteNodeModal.style.display = "flex"; // Showing a modal window
}

// Close the delete modal window
function closeDeleteNodeModal() {
  deleteNodeModal.style.display = "none";
}

// Confirm node deletion
confirmDeleteBtn.addEventListener("click", function () {
  if (nodeIdToDelete !== null) {
    deleteNode(nodeIdToDelete); // Delete Node Function
    closeDeleteNodeModal(); // Close the modal window
  }
});

// Cancel node deletion
cancelDeleteBtn.addEventListener("click", closeDeleteNodeModal);

let countdown; // Variable for interval
// Automatically close modal window after 20 seconds
function autoCloseDeleteModal() {
  const timerElement = document.getElementById("timer");
  let timeLeft = 20; // Set the initial value of the timer

  // Reset previous timers if they exist
  clearInterval(countdown); // Clearing the previous interval

  countdown = setInterval(() => {
    timeLeft--; // Decrease by 1 every second
    timerElement.textContent = timeLeft; // Update the display in the modal window

    if (timeLeft <= 0) {
      clearInterval(countdown); // Stop the timer
      closeDeleteNodeModal(); // Close the modal window
    }
  }, 1000); // Interval of 1 second (1000 ms)
}
