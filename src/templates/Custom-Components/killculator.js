var g_kills = [21, 0];

function h_rank(name, n, k) {

    if (n == 0) {
        document.getElementById("rankInsert").innerHTML = '<img class="max-w-[100%] mx-auto align-middle" src="/assets/rankIkons/' + name + '.png">'
    }

    if (n == 1) {
        document.getElementById("rankInsert").innerHTML = '<img class="max-w-[100%] mx-auto align-middle" src="/assets/rankIkons/' + name + '.png">'
    }

    g_kills[0] = k;

    killculator();

}

function y_rank(name, n, k) {

    if (n == 0) {
        document.getElementById("rankInsert").innerHTML = '<img class="max-w-[100%] mx-auto align-middle" src="/assets/rankIkons/' + name + '.png">'
    }

    if (n == 1) {
        document.getElementById("rankInsert1").innerHTML = '<img class="max-w-[100%] mx-auto align-middle" src="/assets/rankIkons/' + name + '.png">'

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

