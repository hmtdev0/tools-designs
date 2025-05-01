document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("tools-toggle").addEventListener("click", function () {
        let tools_list = document.getElementById("tools-lists");
        tools_list.style.marginTop = tools_list.style.marginTop === "0px" ? "-100%" : "0px";
        tools_list.style.opacity = tools_list.style.opacity === "1" ? "0" : "1";
    });

});