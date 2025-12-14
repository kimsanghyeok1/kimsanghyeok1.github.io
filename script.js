const btn = document.getElementById("darkModeBtn");

// 이전 모드 기억
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    btn.innerText = "☀️ 라이트모드";
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️ 라이트모드";
        localStorage.setItem("mode", "dark");
    } else {
        btn.innerText = "🌙 다크모드";
        localStorage.setItem("mode", "light");
    }
});
