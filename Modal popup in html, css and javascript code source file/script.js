
// Confirmation Modal
const shareButton = document.getElementById("shareButton");
const confirmationModal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");
const cancelButton = document.getElementById("cancelButton");

shareButton.addEventListener("click", () => {
  confirmationModal.classList.add("active");
  confirmationModal.classList.add("open");
  confirmationModal.style.display = "block";
});




closeModal.addEventListener("click", () => {
  confirmationModal.classList.add("slideOut");
  setTimeout(() => {
    confirmationModal.classList.remove("active", "slideOut");
    confirmationModal.style.display = "none";
  }, 500); // Wait for the animation to complete (500ms)
});

cancelButton.addEventListener("click", () => {
  confirmationModal.classList.add("slideOut");
  setTimeout(() => {
    confirmationModal.classList.remove("open", "slideOut");
    confirmationModal.style.display = "none";
  }, 500); // Wait for the animation to complete (300ms)
});


window.addEventListener("click", (event) => {
  if (event.target === confirmationModal) {
    confirmationModal.classList.remove("open");
    setTimeout(() => {
      confirmationModal.classList.remove("active");
      confirmationModal.style.display = "none";
    }, 500); // Wait for the animation to complete (500ms)
  }
});





// Subscription Modal
const subscribeButton = document.getElementById("subscribeButton");
const subscriptionModal = document.getElementById("subscriptionModal");
const closeSubscriptionModal = document.getElementById("closeSubscriptionModal");


subscribeButton.addEventListener("click", () => {
  subscriptionModal.style.display = "block";
  subscriptionModal.classList.add("active");
  subscriptionModal.classList.add("open");
});

closeSubscriptionModal.addEventListener("click", () => {
	subscriptionModal.classList.add("slideIns");
  setTimeout(() => {
    subscriptionModal.classList.remove("active", "slideIns");
    subscriptionModal.style.display = "none";
  }, 500); 

});

window.addEventListener("click", (event) => {
  if (event.target === subscriptionModal) {
    subscriptionModal.classList.remove("open");
    setTimeout(() => {
      subscriptionModal.classList.remove("active");
      subscriptionModal.style.display = "none";
    }, 500); 
  }
});
