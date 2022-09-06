function message(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}

// header

const header = document.querySelector("header");

header.innerHTML = `<nav class="navigation">
        <ul>
            <li class="nav_item_main"><a href="index.html">Characters</a></li>
            <li class="nav_item_contact"><a href="contact.html">Contact</a></li>
        </ul>`;

// footer

const footer = document.querySelector("footer");

footer.innerHTML = `API powered by <a href="https://rickandmortyapi.com/" target="_blank">The Rick and Morty API</a>`;
