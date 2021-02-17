$(document).ready(function () {
    // function getBlog() {
    //     $.ajax({
    //         method: "POST",
    //         url: "/blog"
    //     }).then((response) => {
    //         console.log(response);
    // });
    // }
    // getBlog();
    fetch('/blog', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});



