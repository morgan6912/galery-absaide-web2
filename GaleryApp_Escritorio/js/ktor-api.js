/* ============================================================
   KTOR API — Galery Absaide
   Conecta la app web al backend Ktor (MySQL)
   Sin Supabase — 100% backend propio
   ============================================================ */

const KTOR_BASE = window.KTOR_BASE_URL || 'http://192.168.100.32:8080';

/* ── Sesión ───────────────────────────────────────────────── */
let _token   = localStorage.getItem('ktor_token') || null;
let _dbUser  = JSON.parse(localStorage.getItem('ktor_db_user') || 'null');

function saveSession(token, user) {
  _token  = token;
  _dbUser = user;
  localStorage.setItem('ktor_token',   token);
  localStorage.setItem('ktor_db_user', JSON.stringify(user));
}

function clearSession() {
  _token  = null;
  _dbUser = null;
  localStorage.removeItem('ktor_token');
  localStorage.removeItem('ktor_db_user');
}

function getToken() { return _token; }

/* ── Fetch helper ─────────────────────────────────────────── */
async function api(path, options = {}) {
  const res  = await fetch(KTOR_BASE + path, options);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || 'Error ' + res.status);
  return json;
}

function authHeaders(extra = {}) {
  return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + _token, ...extra };
}

/* ============================================================
   AUTH
   ============================================================ */
async function ktorLogin(email, password) {
  const data = await api('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  saveSession(data.token, data.user);
  return data;
}

async function ktorRegister(name, email, password, role) {
  const roleMap = { user: 'USER', artist: 'ARTIST', admin: 'ADMIN' };
  const data = await api('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role: roleMap[role] || 'USER' })
  });
  saveSession(data.token, data.user);
  return data;
}

/* ============================================================
   ARTWORKS
   ============================================================ */
async function ktorGetArtworks() {
  if (!_token) return [];
  const data = await api('/artworks', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorCreateArtwork(title, description, imageUrl) {
  return await api('/artworks', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ title, description, imageUrl })
  });
}

async function ktorDeleteArtwork(id) {
  await api('/artworks/' + id, { method: 'DELETE', headers: authHeaders() });
}

/* ============================================================
   USUARIOS
   ============================================================ */
async function ktorGetUsers() {
  if (!_token) return [];
  const data = await api('/users', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorDeleteUser(id) {
  await api('/users/' + id, { method: 'DELETE', headers: authHeaders() });
}

async function ktorGetAllArtists() {
  if (!_token) return [];
  try {
    const data = await api('/artists', { headers: authHeaders() });
    if (Array.isArray(data)) return data;
  } catch (e) {
    console.warn('KTOR /artists fallback:', e.message);
  }
  const users = await ktorGetUsers();
  return Array.isArray(users)
    ? users.filter(function (u) {
        var role = (u.role || '').toString().toUpperCase();
        return role === 'ARTIST' || role === 'ARTISTA';
      }).map(function (u) {
        return {
          id: u.id,
          name: u.name,
          bio: u.bio || '',
          artworkCount: Array.isArray(artworks) ? artworks.filter(function (a) { return a.artist === u.name; }).length : 0,
          followerCount: 0,
          isFollowing: false
        };
      })
    : [];
}

async function ktorGetSentMessages() {
  if (!_token) return [];
  const data = await api('/messages/sent', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorGetRequests() {
  if (!_token) return [];
  const data = await api('/requests', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorGetExpos() {
  if (!_token) return [];
  const data = await api('/expos', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorCreateExpo(payload) {
  return await api('/expos', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload)
  });
}

async function ktorUpdateExpo(id, payload) {
  return await api('/expos/' + id, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(payload)
  });
}

async function ktorVoteEmerging(id) {
  return await api('/emerging/' + id + '/vote', {
    method: 'POST',
    headers: authHeaders()
  });
}

async function ktorUnvoteEmerging(id) {
  return await api('/emerging/' + id + '/vote', {
    method: 'DELETE',
    headers: authHeaders()
  });
}

async function ktorSubmitRequest(payload) {
  return await api('/requests', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload)
  });
}

async function ktorProcessRequest(id, status) {
  return await api('/requests/' + id, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ status })
  });
}

async function ktorFollowArtist(artistId) {
  return await api('/artists/' + artistId + '/follow', {
    method: 'POST',
    headers: authHeaders()
  });
}

async function ktorUnfollowArtist(artistId) {
  return await api('/artists/' + artistId + '/follow', {
    method: 'DELETE',
    headers: authHeaders()
  });
}

/* ============================================================
   FAVORITOS
   ============================================================ */
async function ktorGetFavorites() {
  if (!_token) return [];
  const data = await api('/favorites', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

async function ktorAddFavorite(artworkId) {
  return await api('/favorites', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ artworkId })
  });
}

async function ktorRemoveFavorite(artworkId) {
  await api('/favorites/' + artworkId, { method: 'DELETE', headers: authHeaders() });
}

/* ============================================================
   MENSAJES
   ============================================================ */
async function ktorSendMessage(receiverId, artworkId, content) {
  return await api('/messages', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ receiverId, artworkId, content })
  });
}

async function ktorGetMessages() {
  if (!_token) return [];
  const data = await api('/messages/received', { headers: authHeaders() });
  return Array.isArray(data) ? data : [];
}

/* ============================================================
   UPLOAD IMAGEN
   ============================================================ */
async function ktorUploadImage(file) {
  const CLOUD_NAME    = 'dkn0uaome';
  const UPLOAD_PRESET = 'galery_absaide';
  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', UPLOAD_PRESET);
  const res  = await fetch('https://api.cloudinary.com/v1_1/' + CLOUD_NAME + '/image/upload', {
    method: 'POST',
    body: form
  });
  const json = await res.json();
  if (!json.secure_url) throw new Error('Error al subir imagen a Cloudinary');
  return json.secure_url;
}

/* ============================================================
   MAPEO — formato Ktor → formato app web
   ============================================================ */
function mapArtwork(item) {
  return {
    id:       item.id,
    title:    item.title     || '',
    desc:     item.description || '',
    img:      item.imageUrl  || item.image_url || item.image_path || '',
    cat:      'digital',
    artist:   item.artistName || item.artist_name || '',
    featured: false,
    likes:    0,
    views:    0,
    comments: []
  };
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

function syncMyWorksFromArtworks() {
  if (!Array.isArray(artworks)) {
    myWorksData = [];
    save('myworks', myWorksData);
    return;
  }

  var currentArtistName = currentUser && currentUser.id === 'artist'
    ? normalizeText(currentUser.name || (_dbUser && _dbUser.name) || '')
    : '';

  myWorksData = currentArtistName
    ? artworks
        .filter(function (art) {
          return normalizeText(art.artist) === currentArtistName;
        })
        .map(function (art) {
          return {
            id: art.id,
            title: art.title,
            desc: art.desc,
            cat: art.cat || 'digital',
            img: art.img,
            views: art.views || 0,
            reactions: art.likes || art.reactions || 0
          };
        })
    : [];

  save('myworks', myWorksData);
}

function mapUser(item) {
  const roleMap = { ADMIN: 'Admin', ARTIST: 'Artista', USER: 'Usuario' };
  return {
    id:        item.id,
    name:      item.name,
    email:     item.email,
    role:      roleMap[item.role] || 'Usuario',
    status:    item.status || 'Activo',
    createdAt: item.createdAt || new Date().toISOString()
  };
}

function roleCode(dbRole) {
  if (!dbRole) return 'user';
  const r = dbRole.toUpperCase();
  if (r === 'ADMIN')  return 'admin';
  if (r === 'ARTIST') return 'artist';
  return 'user';
}

/* ============================================================
   CARGAR DATOS TRAS LOGIN
   ============================================================ */
async function loadAllData() {
  try {
    const [rawWorks, rawUsers] = await Promise.allSettled([
      ktorGetArtworks(),
      ktorGetUsers()
    ]);

    // Obras: SOLO del backend, sin mezclar datos locales de ejemplo
    if (rawWorks.status === 'fulfilled') {
      artworks = rawWorks.value.map(mapArtwork);
      save('artworks', artworks);
    }

    syncMyWorksFromArtworks();

    if (rawUsers.status === 'fulfilled' && rawUsers.value.length > 0) {
      usersData = rawUsers.value.map(mapUser);
      save('users', usersData);
    }

    // Cargar mensajes recibidos y enviados
    try {
      const [inbox, sent] = await Promise.allSettled([
        ktorGetMessages(),
        ktorGetSentMessages()
      ]);
      if (typeof messagesData !== 'undefined') {
        messagesData = {
          inbox: inbox.status === 'fulfilled' ? inbox.value : [],
          sent:  sent.status  === 'fulfilled' ? sent.value  : []
        };
        // Badge de mensajes no leídos
        if (typeof updateMessageBadge === 'function') {
          updateMessageBadge(messagesData.inbox.length);
        }
      }
    } catch(e) {}

    // Cargar solicitudes de artista (solo admin)
    if (_dbUser && _dbUser.role === 'ADMIN') {
      try {
        const rawReqs = await ktorGetRequests();
        if (rawReqs.length > 0) {
          requestsData = rawReqs.map(mapRequest);
          save('requests', requestsData);
        }
      } catch(e) {}
    }

    // Cargar artistas con info de follows del backend
    try {
      const rawArtists = await ktorGetAllArtists();
      if (rawArtists.length > 0) {
        // Mapear al formato que usa la app web
        artistsData = rawArtists.map(function(a) {
          return {
            id:          a.id,
            name:        a.name,
            role:        'Artista Oficial',
            bio:         a.bio || '',
            obras:       a.artworkCount || 0,
            reacciones:  a.followerCount || 0,
            av:          'https://picsum.photos/seed/' + a.id + '/200/200',
            isFollowing: a.isFollowing || false
          };
        });
        save('artists', artistsData);
        // Actualizar favArtists con los que ya seguimos
        rawArtists.forEach(function(a) {
          if (a.isFollowing) favArtists.add(a.id);
          else favArtists.delete(a.id);
        });
        saveUserSet('fav_artists', favArtists);
      }
    } catch(e) { console.warn('Error cargando artistas:', e); }

    // Cargar exposiciones del artista
    try {
      const rawExpos = await ktorGetExpos();
      if (rawExpos.length > 0) {
        myExposData = rawExpos.map(mapExpo);
        save('myexpos', myExposData);
      }
    } catch(e) {}

    if (typeof renderGallery   === 'function') renderGallery();
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof renderMyWorks   === 'function') renderMyWorks();
    if (typeof renderUsers     === 'function') renderUsers();
    if (typeof renderEmerging  === 'function') renderEmerging();
    if (typeof renderMessages  === 'function') renderMessages();
    if (typeof renderRequests  === 'function' && currentUser && currentUser.id === 'admin') renderRequests();

  } catch (e) {
    console.warn('Error cargando datos:', e.message);
  }
}

/* ============================================================
   REEMPLAZA FUNCIONES CLAVE DE LA APP
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── LOGIN con email/password real ───────────────────────── */
  var origLoginAs = window.loginAs;

  window.loginAs = async function (role) {
    var emailEl = document.getElementById('login-email');
    var passEl  = document.getElementById('login-pass');
    var email   = emailEl ? emailEl.value.trim() : '';
    var pass    = passEl  ? passEl.value.trim()  : '';

    if (!email || !pass) {
      toast('Ingresa tu correo y contraseña', 'error');
      return;
    }

    try {
      const data    = await ktorLogin(email, pass);
      const code    = roleCode(data.user.role);
      const profile = {
        id:     code,
        name:   data.user.name,
        email:  data.user.email,
        role:   code === 'admin'  ? 'Administrador'
               : code === 'artist' ? 'Artista' : 'Coleccionista',
        bio:    '',
        avatar: ''
      };
      save('profile_' + code, profile);
      origLoginAs(code);
      await loadAllData();
    } catch (err) {
      toast(err.message || 'Credenciales incorrectas', 'error');
    }
  };

  /* ── REGISTRO con backend real ───────────────────────────── */
  window.register = async function () {
    var name  = (document.getElementById('reg-name')  || {}).value?.trim();
    var email = (document.getElementById('reg-email') || {}).value?.trim();
    var pass  = (document.getElementById('reg-pass')  || {}).value?.trim();
    var role  = (document.getElementById('reg-role')  || {}).value || 'user';

    if (!name || !email || !pass) {
      toast('Completa todos los campos', 'error');
      return;
    }

    try {
      const data    = await ktorRegister(name, email, pass, role);
      const code    = roleCode(data.user.role);
      const profile = {
        id:     code,
        name:   data.user.name,
        email:  data.user.email,
        role:   code === 'admin'  ? 'Administrador'
               : code === 'artist' ? 'Artista' : 'Coleccionista',
        bio:    '',
        avatar: ''
      };
      save('profile_' + code, profile);
      origLoginAs(code);
      await loadAllData();
      toast('¡Cuenta creada! Bienvenido, ' + name, 'success');
    } catch (err) {
      toast(err.message || 'No se pudo registrar', 'error');
    }
  };

  /* ── LOGOUT limpia sesión Ktor ───────────────────────────── */
  var origLogout = window.logout;
  window.logout = function () {
    clearSession();
    if (typeof origLogout === 'function') origLogout();
  };

  /* ── SUBIR OBRA con imagen real ──────────────────────────── */
  window.submitUpload = async function () {
    var title   = (document.getElementById('up-title') || {}).value?.trim();
    var desc    = (document.getElementById('up-desc')  || {}).value?.trim();
    var fileInput = document.getElementById('up-file');
    var file    = fileInput && fileInput.files && fileInput.files[0];

    if (!title || !desc) { toast('Completa título y descripción', 'error'); return; }
    if (!file)           { toast('Selecciona una imagen', 'error'); return; }

    try {
      toast('Subiendo imagen...', 'info');
      var imageUrl = await ktorUploadImage(file);
      await ktorCreateArtwork(title, desc, imageUrl);
      await loadAllData();
      closeModal('upload-modal');
      ['up-title', 'up-desc'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.value = '';
      });
      if (fileInput) fileInput.value = '';
      var prev = document.getElementById('up-preview');
      if (prev) prev.innerHTML = '';
      renderMyWorks && renderMyWorks();
      renderDashboard && renderDashboard();
      renderGallery && renderGallery();
      toast('Obra subida', 'success');
    } catch (e) {
      toast(e.message || 'No se pudo subir la obra', 'error');
    }
  };

  /* ── ELIMINAR OBRA ───────────────────────────────────────── */
  window.deleteWork = async function (id) {
    try {
      await ktorDeleteArtwork(id);
      await loadAllData();
      renderMyWorks   && renderMyWorks();
      renderDashboard && renderDashboard();
      renderGallery   && renderGallery();
      toast('Obra eliminada', 'success');
    } catch (e) {
      toast(e.message || 'No se pudo eliminar', 'error');
    }
  };

  /* ── ELIMINAR USUARIO (admin) ────────────────────────────── */
  window.deleteUserKtor = async function (id) {
    try {
      await ktorDeleteUser(id);
      await loadAllData();
      renderUsers     && renderUsers();
      renderDashboard && renderDashboard();
      toast('Usuario eliminado', 'success');
    } catch (e) {
      toast(e.message || 'No se pudo eliminar', 'error');
    }
  };

  /* ── FAVORITOS ───────────────────────────────────────────── */
  window.toggleLike = async function (id) {
    if (!_token) { toast('Inicia sesión para dar me gusta', 'error'); return; }
    var wasLiked = likedArtworks.has(id);
    // Actualizar UI inmediatamente (optimistic)
    if (wasLiked) { likedArtworks.delete(id); } else { likedArtworks.add(id); }
    if (typeof saveUserSet === 'function') saveUserSet('liked_artworks', likedArtworks);
    renderGallery && renderGallery();
    if (currentUser && currentUser.id === 'user') renderDashboard && renderDashboard();
    // Sincronizar con backend
    try {
      if (wasLiked) {
        await ktorRemoveFavorite(id);
      } else {
        await ktorAddFavorite(id);
      }
    } catch (e) {
      // Revertir si falla
      if (wasLiked) { likedArtworks.add(id); } else { likedArtworks.delete(id); }
      if (typeof saveUserSet === 'function') saveUserSet('liked_artworks', likedArtworks);
      renderGallery && renderGallery();
      toast('Error al guardar favorito', 'error');
    }
  };

  /* ── CHAT / MENSAJE AL ARTISTA ───────────────────────────── */
  window.openChat = async function (artist, obra) {
    if (!currentUser) { toast('Inicia sesión para contactar al artista', 'error'); return; }
    document.getElementById('chat-artist').textContent = artist;
    document.getElementById('chat-obra').textContent   = obra;
    document.getElementById('chat-key').value = artist + '|' + obra;
    document.getElementById('chat-input').value = '';
    document.getElementById('chat-av-letter').textContent = artist[0].toUpperCase();
    openModal('chat-modal');
    setTimeout(function () { document.getElementById('chat-input').focus(); }, 200);
  };

  window.sendChatMessage = async function () {
    var key   = document.getElementById('chat-key').value;
    var input = document.getElementById('chat-input');
    var text  = input.value.trim();
    if (!text) return;
    var parts      = key.split('|');
    var artistName = parts[0] || '';
    var obraName   = parts[1] || '';
    var artworkId  = 0;
    var receiverId = 0;

    var artworkFound = artworks.find(function (a) { return a.title === obraName; });
    if (artworkFound) artworkId = artworkFound.id;

    // Buscar receptor por nombre en usersData
    var artistFound = usersData.find(function (u) {
      return u.name === artistName || u.name.toLowerCase() === artistName.toLowerCase();
    });
    if (artistFound) receiverId = artistFound.id;

    try {
      if (receiverId > 0) {
        // Enviar al backend
        await ktorSendMessage(receiverId, artworkId, text);
      }
      // Guardar localmente también para mostrar en Enviados
      if (typeof messagesData !== 'undefined') {
        messagesData.sent = messagesData.sent || [];
        messagesData.sent.unshift({
          id:           Date.now(),
          senderName:   currentUser ? currentUser.name : 'Yo',
          receiverName: artistName,
          artworkTitle: obraName,
          content:      text,
          createdAt:    new Date().toISOString()
        });
      }
      input.value = '';
      toast('✉️ Mensaje enviado a ' + artistName, 'success');
      closeModal('chat-modal');
      // Recargar mensajes
      setTimeout(function() {
        if (typeof loadAllData === 'function') loadAllData();
      }, 500);
    } catch (e) {
      toast(e.message || 'No se pudo enviar el mensaje', 'error');
    }
  };

  /* ── Cargar datos si ya hay sesión guardada ──────────────── */
  if (_token) {
    loadAllData();
  }

  /* ── Exponer API globalmente ─────────────────────────────── */
  window.ktorCreateExpo     = ktorCreateExpo;
  window.ktorUpdateExpo     = ktorUpdateExpo;
  window.ktorDeleteExpo     = ktorDeleteExpo;
  window.ktorGetExpos       = ktorGetExpos;
  window.ktorVoteEmerging   = ktorVoteEmerging;
  window.ktorUnvoteEmerging = ktorUnvoteEmerging;
  window.ktorFollowArtist   = ktorFollowArtist;
  window.ktorUnfollowArtist = ktorUnfollowArtist;
  window.ktorGetAllArtists  = ktorGetAllArtists;

  window.ktorApi = {
    login:          ktorLogin,
    register:       ktorRegister,
    getArtworks:    ktorGetArtworks,
    getUsers:       ktorGetUsers,
    getFavorites:   ktorGetFavorites,
    sendMessage:    ktorSendMessage,
    getMessages:    ktorGetMessages,
    uploadImage:    ktorUploadImage,
    getRequests:    ktorGetRequests,
    submitRequest:  ktorSubmitRequest,
    processRequest: ktorProcessRequest,
    loadAllData:    loadAllData,
    token:          getToken,
    clearSession:   clearSession
  };

  window.ktorSubmitRequest  = ktorSubmitRequest;
  window.ktorProcessRequest = ktorProcessRequest;
  window.ktorGetRequests    = ktorGetRequests;
  window.mapRequest         = mapRequest;
});