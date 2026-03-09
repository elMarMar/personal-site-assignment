
function handleNameInput(): void {
    const nameInput = document.getElementById("name-input") as HTMLInputElement;
    const container = document.getElementById("secret-container")
    document.getElementById("name-submit-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        const name = nameInput?.value.trim();
        if (name) {
            container?.classList.add("hidden");
            const secretMessage = document.getElementById("secret-message");
            const p = secretMessage?.querySelector("p");
            secretMessage?.classList.remove("hidden");
            if(p){
                const msg = `${name} is awesome and I hope you have a great day :)`;
                p.textContent = msg;
            }
            
        }
    });

}

function main(): void {
    handleNameInput();

}

main()