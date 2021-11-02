var submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click", function(e) {
    var required = document.querySelectorAll("input[required]");
    required.forEach(function(element) {
        if (element.value.trim() == "") {
            element.style.borderBottom = "1px solid #FF0000";
            (document.getElementById("label" + element.id)).style.color = "red";
        } else {
            element.style.borderBottom = "1px solid #909090";
            document.getElementById("label" + element.id).style.color = "black";
        }
    });
});

fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'UPN Oddan',
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
        timerProgressBar: true,
    }).then((result) => {
        document.getElementById('fullForm').submit();
    });
});