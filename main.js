document.addEventListener("DOMContentLoaded", () => {
  // Comment submission (local)
  const commentForm = document.getElementById("comment-form");
  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentInput = document.getElementById("comment");
      if (commentInput.value.trim() === "") return;

      const commentList = document.getElementById("comments-list");
      const newComment = document.createElement("li");
      newComment.textContent = commentInput.value;
      commentList.appendChild(newComment);
      commentInput.value = "";
    });
  }

  // Social share buttons
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = window.location.href;
      const platform = btn.dataset.platform;
      let shareUrl = "";

      switch(platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
          break;
        case "whatsapp":
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
          break;
      }
      window.open(shareUrl, "_blank");
    });
  });
});