var seats = [[false, true, false, true, true, true, false, true, false],
            [false, true, false, false, true, false, true, true, true],
            [true, true, true, true, true, true, false, true, false],
            [true, true, true, false, true, false, false, true, false]];
var selSeat = -1;

function setSeat(seatNum, status, description) {
    document.getElementById("seat" + seatNum).src = "seat_" + status + ".png";
    document.getElementById("seat" + seatNum).alt = description;
}

function initSeats() {
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {

            if (seats[i][j]) {
               setSeat(i * (seats[i].length + j, "dispon", "Poltrona disponivel"));

            }
            else {
                setSeat(i * (seats[i].length) + j, "indisp", "Poltrona indisponivel" );
            }
        }
    }
}



function findSeats() {
    if (selSeat >= 0) {
        selSeat = -1;
        initSeats();
    }


    var i = 0, finished = false;
    while (i < seats.length && !finished) {

        for (var j = 0; j < seats[i].length; j++) {
            if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
                selSeat = i * seats[i].length + j;
                setSeat(i * seats[i].length + j, "marque", "sua Poltrona");
                setSeat(i * seats[i].length + j + 1, "marque", "sua Poltrona");
                setSeat(i * seats[i].length + j + 2, "marque", "sua Poltrona");

                var accept = confirm("As Poltronas de " + (j + 1) + " a " + (j + 3) + " na fileira " + (i + 1) + " estão disponiveis , aceita?");

                if (accept) {
                    finished = true;
                    break;
                }
                else {
                    selSeat = -1;
                    setSeat(i * seats[i] + j, "avail", "Poltrona disponivel");
                    setSeat(i * seats[i] + j + 1, "dispon", "Poltrona disponivel");
                    setSeat(i * seats[i] + j + 2, "dispon", "Poltrona disponivel");
                }
            }
        }
        i++;
    }
}
console.log(seats[0].length);