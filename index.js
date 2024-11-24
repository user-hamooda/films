let darkmode = localStorage.getItem("darkmode");
const themS = document.getElementById("them");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themS.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});



// --------------------



let show = localStorage.getItem("show");
const responsive_linkS = document.getElementById("responsive_link");

const enableshow = () => {
    document.body.classList.add("show");
    localStorage.setItem("show", "active");
};

const disableshow = () => {
    document.body.classList.remove("show");
    localStorage.setItem("show", null);
};

if (show === "active") enableshow();

responsive_linkS.addEventListener("click", () => {
    show = localStorage.getItem("show");
    show !== "active" ? enableshow() : disableshow();
});