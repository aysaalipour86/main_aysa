const buttons =
    document.getElementById(".cart-btn");

buttons.forEach(button => {
    button.addEventListerner("click", function () {
        this.classList.toggle("active");
        if
            (this.classList.contains("active")) {
            this.textConttent = "Add this to cart✅";
        }
        else {
            this.textConttent = "remove from  cart 🛒";
        }
    });
});