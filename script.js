const newPostForm = document.getElementById("new-post-form");

function createPost(){
    newPostForm.style.display = "block";
}
function addPost(){
    newPostForm.style.display = "none";
    const blogPost=document.createElement("div");
    blogPost.textContent="This is a new blog post";
    blogPost.classList.add("blog-post");
    document.body.appendChild(blogPost);
}