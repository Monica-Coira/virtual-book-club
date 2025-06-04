const loadReviews = () => {
    console.log("loading reviews");
    const container = document.querySelector('#reviews-list');
    for (const review of reviews){
        const elements = createReviewElement(review);
        container.appendChild(elements);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadReviews();
    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', handleReviewSubmit);
});

const handleReviewSubmit = (event) => {
    console.log("handleReviewSubmit called!");
    event.preventDefault();

    const reviewInput = document.querySelector("#review-text");
    const reviewText = reviewInput.value;
    const rating = document.querySelector("#rating").value;
    const title = document.querySelector("#book-title").value;
    let review = {
        rating,
        reviewText,
        title,
        likes: 0,
        reposts: 0
    };
    const newReviewElement = createReviewElement(review);

    const reviewsList = document.querySelector('#reviews-list');
    reviewsList.insertBefore(newReviewElement, reviewsList.firstChild);
    event.target.reset();
}

const createReviewElement = (review) => {
    console.log(review);
    const reviewElement = document.createElement('div');
    reviewElement.className = "review-item";
    reviewElement.innerHTML = `
        <p class="book-title">${review.title}</h1>
        <p>${review.reviewText}</p>
        <p>Rating: ${review.rating}</p>
        <button>Likes (${review.likes})</button>
        <button>Reposts (${review.reposts})</button>
    `;
    return reviewElement;
}

function toggleLike() {
    console.log('Like button clicked');
}

function repostReview() {
    console.log('Repost button clicked');
}