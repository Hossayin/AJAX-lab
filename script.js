async function getPosts() {
  try {
    const data = await fetch("https://www.reddit.com/r/aww/.json");

    if (data.ok) {
      const json = await data.json();

      const posts = json.data.children;

      return posts.map(post => {
        const data = post.data;

        const { thumbnail, title, url } = data;

        return {
          thumbnail,
          title,
          url
        };
      });
    }
  } catch (e) {
    console.error(e);
  }
}

async function displayPosts() {
  const posts = await getPosts();

  const body = document.querySelector(".content");

  posts.map(post => {
    // Create post element
    const postElement = document.createElement("a");
    postElement.className = "post";
    postElement.href = post.url;

    const postImage = document.createElement("img");
    postImage.src = post.thumbnail;

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;

    postElement.appendChild(postImage);
    postElement.appendChild(postTitle);

    body.appendChild(postElement);
  });
}

displayPosts();
