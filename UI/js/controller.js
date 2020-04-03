var counter;

function login_to_website() {
    var email = $("#email").val();
    var password = $("#password").val();
    var timeout = $("#timeout").val();
    if (email == "" || password == "" || timeout == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email,Password & Timeout can\'t be empty'
        })
    } else {
        $("#loading").removeAttr("hidden");
        $("#content").attr("hidden", true);
        eel.login_to_website(email, password, timeout);
    }
}

eel.expose(startTimer)
function startTimer(time) {
    var second = time;
    $("#selectPage").removeAttr("hidden");
    $("#loading").attr("hidden", true);
    $("#time").html(second);
    setTimeout(timeDone, time * 1000);
    counter = window.setInterval(function () {
        $("#time").html(--second);
    }, 1000);
}

function timeDone(){
    clearInterval(counter);
    $("#message").html("Download data to Excel..");   
}

eel.expose(download_complete)
function download_complete(){
    $("#complete").removeAttr("hidden");
    $("#selectPage").attr("hidden", true);
}

eel.expose(download_timeout)
function download_timeout(){
    $("#failed").removeAttr("hidden");
    $("#selectPage").attr("hidden", true);
}