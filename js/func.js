document.addEventListener("DOMContentLoaded", () => {
    const example = () => {
        document.getElementsByTagName("p")[0].innerText = document.getElementById("example").value;
    }
    document.getElementById("action").addEventListener("click", example);
});