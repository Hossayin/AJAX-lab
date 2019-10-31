fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    for (const peoplesPhotos of data.data.children) {
      const mainEl = document.querySelector("main");
      let boxEl = document.createElement("div");
      mainEl.appendChild(boxEl);
      boxEl.classList.add("main");
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("content");
      contentContainer.appendChild(mainEl);

      //   let photoContainerEl = document.createElement("div");
      //   photoContainerEl.classList.add("photoContainer");
      //   boxEl.appendChild(photoContainerEl);

      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", peoplesPhotos.data.thumbnail);
      imgEl.addEventListener("click", () => {
        document.location.href =
          "https://www.reddit.com" + peoplesPhotos.data.permalink;
      });
      boxEl.appendChild(imgEl);
    }
  });
//
