function handleNameInput() {
    var _a;
    var nameInput = document.getElementById("name-input");
    var container = document.getElementById("secret-container");
    (_a = document.getElementById("name-submit-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
        e.preventDefault();
        var name = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim();
        if (name) {
            container === null || container === void 0 ? void 0 : container.classList.add("hidden");
            var secretMessage = document.getElementById("secret-message");
            var p = secretMessage === null || secretMessage === void 0 ? void 0 : secretMessage.querySelector("p");
            secretMessage === null || secretMessage === void 0 ? void 0 : secretMessage.classList.remove("hidden");
            if (p) {
                var msg = "".concat(name, " is awesome and I hope you have a great day :)");
                p.textContent = msg;
            }
        }
    });
}
function main() {
    handleNameInput();
}
main();
