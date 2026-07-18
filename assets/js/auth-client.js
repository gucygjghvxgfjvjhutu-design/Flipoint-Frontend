// FLIPOINT — Auth client helper
// Menyimpan sesi login di localStorage dan menyesuaikan tampilan nav "Profile" di semua halaman.

const FLIPOINT_API_BASE = window.FLIPOINT_API_BASE || 'http://localhost:4000/api';
const TOKEN_KEY = 'flipoint_token';
const USER_KEY = 'flipoint_user';

function flipointGetToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function flipointGetUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function flipointSaveSession(token, user) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function flipointClearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

function flipointIsLoggedIn() {
  return !!flipointGetToken();
}

async function flipointApiFetch(path, options = {}) {
  const token = flipointGetToken();
  const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${FLIPOINT_API_BASE}${path}`, { ...options, headers });
  let data = null;
  try { data = await res.json(); } catch (e) { /* respons kosong */ }
  if (!res.ok) {
    const message = (data && data.error) || 'Terjadi kesalahan pada server.';
    throw new Error(message);
  }
  return data;
}

// Menyesuaikan seluruh elemen nav ".js-profile-link" berdasarkan status login
function flipointDecorateNav() {
  const links = document.querySelectorAll('.js-profile-link');
  if (!links.length) return;
  const loggedIn = flipointIsLoggedIn();
  const user = flipointGetUser();

  links.forEach((link) => {
    if (loggedIn && user) {
      link.setAttribute('href', 'profile.html');
      const label = (user.fullName || 'Profil').split(' ')[0];
      const lastSpan = link.querySelector('span:last-child');
      if (lastSpan && link.children.length > 1) {
        lastSpan.textContent = label;
      } else {
        link.textContent = label;
      }
    } else {
      link.setAttribute('href', 'login.html');
    }
  });
}

document.addEventListener('DOMContentLoaded', flipointDecorateNav);
