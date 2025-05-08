const menuButton = document.getElementById("menu-button");
const dialog = document.getElementById("dialog");
const dialogButton = document.getElementById("dialog-button");
const dialogNav = document.getElementById("dialog-nav");
const dialogLinks = dialogNav.querySelectorAll(".dialog__link");

const handleMenuPress = () => {
    dialog.showModal();
};

const handleDialogPress = () => {
    dialog.close();
};

const handleDialogLink = () => {
    dialog.close();
};

menuButton.addEventListener("click", handleMenuPress);
dialogButton.addEventListener("click", handleDialogPress);
dialogLinks.forEach((link) => {
    link.addEventListener("click", handleDialogLink);
});
