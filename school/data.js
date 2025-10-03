    function aktualizujCzas() {
    const teraz = new Date();

    const opcje = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/Warsaw'
    };

    const formatowanyCzas = teraz.toLocaleString('pl-PL', opcje);
    document.getElementById('czas').textContent = formatowanyCzas;
  }

  setInterval(aktualizujCzas, 1000);

  aktualizujCzas();