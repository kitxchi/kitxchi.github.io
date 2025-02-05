function oblicz() {
    let rodzajPaliwa = +document.getElementById("rodzaj").value;
    let iloscLitrow = +document.getElementById("ilosc").value;
    const kolor = document.getElementById("kolor").value;
    const marka = document.getElementById("marka").value;
    const wynik = document.getElementById("wynik");

    if (rodzajPaliwa !== 1 && rodzajPaliwa !== 2) {
        wynik.innerHTML = "Proszę wybrać poprawny rodzaj paliwa: 1 (benzyna) lub 2 (olej napędowy).";
        return;
    }

    if (iloscLitrow > 40) {
        wynik.innerHTML = "Maksymalna ilość paliwa to 40 litrów. Proszę wprowadzić mniejszą liczbę.";
        return;
    }

    if (iloscLitrow < 1) {
        wynik.innerHTML = "Minimalna ilość paliwa to 1 litr. Proszę wprowadzić większą liczbę.";
        return;
    }

    let cena;
    if (rodzajPaliwa == 1) {
        cena = 4;
    } else if (rodzajPaliwa == 2) {
        cena = 3.5;
    } else {
        cena = 0;
    }

    const koszt = cena * iloscLitrow;

    wynik.innerHTML = `
        <strong>Podsumowanie:</strong><br>
        Rodzaj paliwa: ${rodzajPaliwa == 1 ? 'Benzyna' : 'Olej napędowy'}<br>
        Ilość litrów: ${iloscLitrow} litrów<br>
        Marka samochodu: ${marka.charAt(0).toUpperCase() + marka.slice(1)}<br>
        Kolor: <span style="color:${kolor};">${kolor.charAt(0).toUpperCase() + kolor.slice(1)}</span><br>
        Koszt paliwa: ${koszt.toFixed(2)} zł
    `;

    wynik.innerHTML += '<br><br><br>';
}
