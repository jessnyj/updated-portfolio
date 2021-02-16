$(document).ready(function() {
    $("#saveBtn").on("click", function (event) {
        event.preventDefault();

        fetch("/api/user", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            
            // body: JSON.stringify(updateProf),
        }).then((response) => {
                console.log(response);
                location.reload('/contact');
        });
    });
});
