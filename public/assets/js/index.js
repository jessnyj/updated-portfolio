$(document).ready(function () {
    function getBlog() {
        $.ajax({
            method: "POST",
            url: "/blog"
        }).then((response) => {
            console.log(response);
    });
    }
    getBlog();
});



