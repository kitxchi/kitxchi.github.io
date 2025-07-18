async function updateLastFM() {
  const username = "kitachiii07";
  const apiKey = "593fabf32092080ee2b6fad842570c30";
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const track = data.recenttracks.track[0];

    const isNowPlaying = track['@attr']?.nowplaying === "true";
    const artist = track.artist['#text'];
    const name = track.name.replace(/\s*[\(\[].*?[\)\]]/g, '').trim();
    const link = track.url;
    const image = track.image?.find(img => img.size === "extralarge")?.['#text'] || '';
    const uts = track.date?.uts;

    const songEl = document.getElementById("song");
    const statusEl = document.getElementById("status");
    const coverEl = document.getElementById("cover");
    const lastfmProfileUrl = "http://last.fm/user/kitachiii07";
    const artistUrl = `https://www.last.fm/music/${encodeURIComponent(artist.replace(/ /g, '+'))}`;
    
songEl.innerHTML = `
  <a href="${link}" target="_blank" class="song-link song-name nav">${name}</a>
  <br><br>
  <a href="${artistUrl}" target="_blank" class="song-link artist-name nav">${artist}</a>
`;


if (isNowPlaying) {
  statusEl.innerHTML = `<span class="shimmer">Song currently listening</span> <a href="${lastfmProfileUrl}" target="_blank" rel="noopener noreferrer"></a>`;
} else if (uts) {
  const secondsAgo = Math.floor(Date.now() / 1000) - parseInt(uts);
  const minutes = Math.floor(secondsAgo / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeAgo = "";
  if (days > 0) timeAgo = `${days} day${days > 1 ? "s" : ""}`;
  else if (hours > 0) timeAgo = `${hours} hour${hours > 1 ? "s" : ""}`;
  else if (minutes > 0) timeAgo = `${minutes} minute${minutes > 1 ? "s" : ""}`;
  else timeAgo = `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""}`;

  statusEl.innerHTML = `Song listened ${timeAgo} ago <a href="${lastfmProfileUrl}" target="_blank" rel="noopener noreferrer"></a>`;
}

    if (image) {
      coverEl.src = image;
      coverEl.alt = `${name} cover`;
    } else {
      coverEl.src = "";
    }
  } catch (error) {
    console.error("failed to fetch last.fm data:", error);
    document.getElementById("song").textContent = "fetch error";
    document.getElementById("cover").src = "";
  }
}

updateLastFM();
setInterval(updateLastFM, 60 * 1000);

function formatSongLink() {
  const songLink = document.querySelector(".song-link");
  if (!songLink) return;

  if (window.innerWidth <= 600) {
    songLink.innerHTML = songLink.textContent.replace(/ *[–\-•] */g, "<br>");
  } else {
    songLink.innerHTML = songLink.textContent.replace(/\n/g, " - ");
  }
}
formatSongLink()

// === perspective hover ===
document.querySelectorAll('.perspective-hover').forEach(el => {
  let isPressed = false;
  let currentRotateX = 0;
  let currentRotateY = 0;

  const updateTransform = () => {
    const scale = isPressed ? 0.85 : 1.15;
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    const shadowColor = theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)';
    el.style.transform = `perspective(600px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${scale})`;
    el.style.boxShadow = `${-currentRotateY}px ${currentRotateX}px 25px ${shadowColor}`;
    el.style.filter = `brightness(1.3) drop-shadow(0 0 10px ${shadowColor})`;
  };

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    currentRotateX = ((y - centerY) / centerY) * 15;
    currentRotateY = ((x - centerX) / centerX) * -15;
    updateTransform();
  });

  el.addEventListener('mouseleave', () => {
    currentRotateX = 0;
    currentRotateY = 0;
    isPressed = false;
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.boxShadow = 'none';
    el.style.filter = 'none';
  });

  el.addEventListener('mousedown', () => {
    isPressed = true;
    updateTransform();
  });

  el.addEventListener('mouseup', () => {
    isPressed = false;
    updateTransform();
  });
});

/* home */

  const home = document.querySelector('.home');

  home.addEventListener('mousemove', (e) => {
    const rect = home.getBoundingClientRect();
    
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // mocniejszy efekt – ale nadal płynny i kontrolowany
    const rotateX = (-y / 8).toFixed(2);  // góra/dół
    const rotateY = (x / 12).toFixed(2);  // lewo/prawo

    home.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  home.addEventListener('mouseleave', () => {
    home.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  });

/* nav */

  const nav = document.querySelector('.nav');

  nav.addEventListener('mousemove', (e) => {
    const rect = nav.getBoundingClientRect();
    
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // mocniejszy efekt – ale nadal płynny i kontrolowany
    const rotateX = (-y / 8).toFixed(2);  // góra/dół
    const rotateY = (x / 12).toFixed(2);  // lewo/prawo

    nav.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  nav.addEventListener('mouseleave', () => {
    nav.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  });

  