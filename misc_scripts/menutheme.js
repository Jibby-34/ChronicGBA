document.addEventListener("DOMContentLoaded", function () {
    const menuElement = document.getElementById("menu");
    const darkThemeOption = document.getElementById("dark_theme");
    const lightThemeOption = document.getElementById("light_theme");
    const pinkThemeOption = document.getElementById("pink_theme");

    darkThemeOption.addEventListener("click", () => {
        console.log("Dark theme clicked");
        menuElement.classList.remove("light", "pink");
        menuElement.classList.add("dark");
    });

    lightThemeOption.addEventListener("click", () => {
        menuElement.classList.remove("dark", "pink");
        menuElement.classList.add("light");
    });

    pinkThemeOption.addEventListener("click", () => {
        menuElement.classList.remove("dark", "light");
        menuElement.classList.add("pink");
    });
});
