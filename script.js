const loadReviews = () => {
    console.log("loading reviews");
    const container = document.querySelector('#reviews-list');
    for (const review of reviews){
        const elements = createReviewElement(review);
        container.appendChild(elements);
    }
}

document.addEventListener("DOMContentLoaded", loadReviews);

const handleReviewSubmit = () => {
    console.log("handleReviewSubmit called!");
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