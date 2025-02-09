const accesKey = "W1qwWo4IACpJbzZwHt5jqh9Rv0UpcQ5JAnweev7bFoc";
const apiUrl = "https://api.unsplash.com/photos/random";
const imageContainer = document.getElementById("imageContainer");

document.getElementById("searchImages").addEventListener("click", () => {
    const searchQuery = document.getElementById("imageNameInput").value.trim();

    if (searchQuery === "") {
        alert('Please enter image name here');
        return;
    }

    fetch(`${apiUrl}?query=${searchQuery}&count=20&client_id=${accesKey}`)

    .then(response => response.json())
    .then(data => {
        imageContainer.innerHTML = "";

        data.forEach(photoData => {
            const photoUrl = photoData.urls.regular;

            const imageElement = document.createElement('img');
            imageElement.src = photoUrl;
            imageElement.className = "img-thumbnail";
            imageElement.style.height = "200px";
            imageElement.style.width = "200px";

            imageContainer.appendChild(imageElement);
        });
    })
})
