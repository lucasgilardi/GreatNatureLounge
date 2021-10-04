class Appointment{
    constructor(fname, lname, tel, date, time){
        this.fname = fname;
        this.lname = lname;
        this.tel = tel;
        this.date = date;
        this.time = time;
    }
}

function validateAppointment(){
    let ok = true;

    if(document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("tel").value == "" || document.getElementById("date").value == "" || document.getElementById("time").value == ""){

        alert("please complete all the requested fields");
        ok = false;
    }else{
        let newAppointment = new Appointment(document.getElementById("fname").value, document.getElementById("lname").value, document.getElementById("tel").value, document.getElementById("date").value, document.getElementById("time").value);

        showAppointmentDom();
        }
        return ok;
}

function showAppointmentDom(){
    $(`#appointmentData`).append($(`<div class="div-datos-reserva" id="sub-div-reserva" style="display: none">
                                    <h6>appointment booked!</h6>
                                    <p>the appointment was made for <b>${document.getElementById("fname").value} ${document.getElementById("lname").value}</p></b>
                                    <p>just in case, we can call you at <b>${document.getElementById("tel").value}</p></b>
                                    <p>we will see you in <b>${document.getElementById("date").value} at ${document.getElementById("time").value}</p></b>
                                    
                                    <button id="btn-aceptar-reserva">got it!</button>
                                   </div>`).fadeIn(200));

    $(`#btn-aceptar-reserva`).on("click", function(){
        $(`#sub-div-reserva`).fadeOut(200, function(){
            $(`#sub-div-reserva`).remove();
        });
    });
}

let formAppointment = document.getElementById("form");
formAppointment.addEventListener("submit", function(e){
    e.preventDefault();
    validateAppointment();
    formAppointment.reset();
});