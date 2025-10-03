    // 1. Prompt i alert
    function examplePrompt() {
      const name = prompt("Jak masz na imię?");
      alert("Cześć, " + name + "!");
    }

    // 2. Confirm
    function exampleConfirm() {
      const answer = confirm("Czy lubisz JavaScript?");
      if (answer) {
        alert("Super, że lubisz JavaScript!");
      } else {
        alert("Szkoda, może się przekonasz.");
      }
    }

    // 3. parseInt - konwersja na liczbę całkowitą
    function exampleParseInt() {
      const input = prompt("Podaj liczbę całkowitą:");
      const number = parseInt(input);
      alert("Wczytana liczba całkowita to: " + number);
    }

    // 4. parseFloat - konwersja na liczbę zmiennoprzecinkową
    function exampleParseFloat() {
      const input = prompt("Podaj liczbę zmiennoprzecinkową:");
      const number = parseFloat(input);
      alert("Wczytana liczba to: " + number);
    }

    // 5. Number() - konwersja na liczbę
    function exampleNumber() {
      const input = prompt("Podaj coś do konwersji na liczbę:");
      const number = Number(input);
      alert("Wynik konwersji to: " + number);
    }

    // 6. isNaN - sprawdzanie czy wartość nie jest liczbą
    function exampleIsNaN() {
      const input = prompt("Podaj coś do sprawdzenia czy to liczba:");
      if (isNaN(input)) {
        alert("To NIE jest liczba!");
      } else {
        alert("To jest liczba.");
      }
    }

    // 7. Prosta funkcja sumująca dwie liczby
    function exampleSum() {
      const a = parseFloat(prompt("Podaj pierwszą liczbę:"));
      const b = parseFloat(prompt("Podaj drugą liczbę:"));
      if (isNaN(a) || isNaN(b)) {
        alert("Podano nieprawidłową liczbę.");
        return;
      }
      alert("Suma wynosi: " + (a + b));
    }

    // 8. Deklaracja i wyrażenie funkcyjne'

    // Deklaracja funkcji
    function printText() {
      alert("To jest deklaracja funkcji.");
    }

    // Wyrażenie funkcji przypisane do zmiennej
    const printTextExpression = function() {
      alert("To jest wyrażenie funkcji.");
    };
