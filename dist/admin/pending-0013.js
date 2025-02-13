document.addEventListener("DOMContentLoaded", () => {
  // Initialize the counts from localStorage
  let pendingCount = parseInt(localStorage.getItem("pendingCount")) || 1;
  let approvedCount = parseInt(localStorage.getItem("approvedCount")) || 0;
  let declinedCount = parseInt(localStorage.getItem("declinedCount")) || 0;

  // Function to update the UI dynamically
  function updateCounts() {
    localStorage.setItem("pendingCount", pendingCount);
    localStorage.setItem("approvedCount", approvedCount);
    localStorage.setItem("declinedCount", declinedCount);
  }

  // Show Approve Modal
  function showApproveModal() {
    document.getElementById("approvalModal").style.display = "flex";
  }

  // Show Decline Modal
  function showDeclineModal() {
    document.getElementById("cancelBookingModal").style.display = "flex";
  }

  // Close the modal
  function closeModal() {
    document.getElementById("approvalModal").style.display = "none";
    document.getElementById("cancelBookingModal").style.display = "none";
  }

  // Confirm Approval
  function confirmApprove() {
    approvedCount += 1;
    pendingCount -= 1;
    updateCounts();

    // Update Home Page approved count
    localStorage.setItem("approvedCount", approvedCount);

    // Redirect back to admin home
    location.href = "admin-home.html";
  }

  // Confirm Decline
  function confirmDecline() {
    declinedCount += 1;
    pendingCount -= 1;
    updateCounts();

    // Update Home Page declined count
    localStorage.setItem("declinedCount", declinedCount);

    // Redirect back to admin home
    location.href = "admin-home.html";
  }

  // Make functions available globally
  window.showApproveModal = showApproveModal;
  window.showDeclineModal = showDeclineModal;
  window.closeModal = closeModal;
  window.confirmApprove = confirmApprove;
  window.confirmDecline = confirmDecline;
});
