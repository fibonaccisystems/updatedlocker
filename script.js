let completedOffers = 0;
const requiredOffers = 2;  // Minimum offers to complete
let clickedOffers = [false, false, false]; // Track if offers were opened in new tab

// Mark an offer as completed
function completeOffer(offerNumber) {
  const offerElement = document.getElementById(`offer${offerNumber}`);
  if (!offerElement.classList.contains('completed')) {
    offerElement.classList.add('completed');
    completedOffers++;
    updateRedirectButton();
  }
}

// Track if an offer was opened in a new tab
function openInNewTab(event, offerNumber) {
  event.preventDefault(); // Prevent default behavior
  clickedOffers[offerNumber - 1] = true; // Mark offer as clicked
  window.open(event.target.href, '_blank'); // Open in a new tab
  updateRedirectButton(); // Update the button if conditions are met
}

// Update the button state based on completed offers
function updateRedirectButton() {
  const redirectButton = document.getElementById("redirectButton");
  let activeCount = clickedOffers.filter(clicked => clicked).length;  // Count how many offers were clicked

  if (activeCount >= requiredOffers) {
    document.getElementById("completeMessage").style.display = "block";
    redirectButton.classList.add("active");
    redirectButton.style.opacity = 1;
  }
}

// Redirect to the final page (Zara 500€ URL)
function redirectToFinalPage() {
  window.location.href = "https://www.zara.com"; // Replace with the actual link
}

// Reset the page on load
window.onload = function () {
  completedOffers = 0;
  updateRedirectButton();
};