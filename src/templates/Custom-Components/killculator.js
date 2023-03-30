var g_kills = [0, 0];

function h_rank(name, n, k) {

    if (n == 0) {
        document.getElementById("rankInsert").innerHTML = name;
    }

    if (n == 1) {
        document.getElementById("rankInsert1").innerHTML = name;
    }

    g_kills[0] = k;

    killculator();

}

function y_rank(name, n, k) {

    if (n == 0) {
        document.getElementById("rankInsert").innerHTML = name;
    }

    if (n == 1) {
        document.getElementById("rankInsert1").innerHTML = name;
    }

    g_kills[1] = k;

    killculator();
}

function killculator(k) {

    var resultat = g_kills[1] - g_kills[0]
    if (resultat <= 0) {
        document.getElementById("output").innerHTML = "Du skal have " + (resultat * 2) * -1 + " mindre kills end højeste rank";
    } else if (resultat >= 0) {
        document.getElementById("output").innerHTML = "Du skal have " + resultat * 2 + " flere kills";
    }
}