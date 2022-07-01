const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if(message) {
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;

}


document.querySelector("form").addEventListener("submit", event => {
//    prevent default browser behavior of sending info to back end dB and clearing out form/refreshing
    event.preventDefault();

    // toggle visibility
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    const input = document.querySelector("#message-input");
    // base 64 Ascii encryption
    const encypted = btoa(input.value);

    const linkInput = document.querySelector("#link-input");
    // create link using window.location
    linkInput.value = `${window.location}#${encypted}`;
    // highlights text for easy copy & paste
    linkInput.select();

});