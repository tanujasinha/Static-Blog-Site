const newPostForm = document.getElementById("new-post-form");

function createPost(){
    newPostForm.style.display = "block";
}

newPostForm.addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(newPostForm);
    
    //create a new blog post
    newPostForm.style.display = "none";
    const blogPost=document.createElement("div");
    blogPost.textContent="This is a new blog post";
    blogPost.classList.add("blog-post");
    document.body.appendChild(blogPost);
});