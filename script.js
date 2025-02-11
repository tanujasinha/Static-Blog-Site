const newPostForm = document.getElementById("new-post-form");
const postTitle = document.getElementById("post-title");
const postDescription = document.getElementById("post-description");
const postImage = document.getElementById("post-image");
const authorName = document.getElementById("author-name");
const main = document.querySelector("main");

function createPost() {
    newPostForm.style.display = "block";
}

newPostForm.addEventListener("submit", function (event) {
    event.preventDefault();

    newPostForm.style.display = "none";

    //create a new blog post
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    //create title with author
    const title = document.createElement("h3");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = postTitle.value;

    const authorSpan = document.createElement("span");
    authorSpan.textContent = authorName.value;
    authorSpan.classList.add("italic");

    title.append(titleSpan);
    title.appendChild(document.createTextNode(" by "));
    title.appendChild(authorSpan);
    blogPost.appendChild(title);

    //create image if file is selected
    if (postImage.files && postImage.files[0]) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(postImage.files[0]);
        image.classList.add("image-resize");
        blogPost.append(image);
    }

//create description
    const description = document.createElement("p");
    description.textContent = postDescription.value;

    blogPost.appendChild(description);
    main.prepend(blogPost);
});
