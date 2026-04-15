/* ============================================================
   DATOS BASE
   ============================================================ */
const BASE_ARTWORKS = [
  { id:1,  title:'Neón Futuro',          desc:'Una exploración de la luz y el color en el entorno urbano del mañana.',   img:'assets/obra1.jpg',  cat:'digital',    artist:'Alex Rivera',  featured:true,  likes:42, comments:[] },
  { id:2,  title:'Abstracción Digital',  desc:'Formas geométricas que desafían la percepción de la realidad.',           img:'assets/obra2.jpg',  cat:'digital',    artist:'Marta Sol',    featured:false, likes:28, comments:[] },
  { id:3,  title:'Ciber-Naturaleza',     desc:'La fusión entre lo orgánico y lo sintético en un nuevo ecosistema.',      img:'assets/obra3.jpg',  cat:'fotografia', artist:'Carlos V.',    featured:false, likes:19, comments:[] },
  { id:4,  title:'Paisaje Onírico',      desc:'Un viaje visual a través de mundos imaginarios y sueños cristalizados.',  img:'assets/obra4.jpg',  cat:'pintura',    artist:'Elena M.',     featured:false, likes:35, comments:[] },
  { id:5,  title:'Reflexiones Urbanas',  desc:'La ciudad como espejo de emociones y movimiento constante.',             img:'assets/obra5.jpg',  cat:'fotografia', artist:'Alex Rivera',  featured:false, likes:51, comments:[] },
  { id:6,  title:'Colores Contemplativos', desc:'Paletas de colores que transmiten calma, profundidad y misterio.',      img:'assets/obra6.jpg',  cat:'pintura',    artist:'Lucía G.',     featured:false, likes:17, comments:[] },
  { id:7,  title:'Texturas Inesperadas', desc:'Combinaciones de texturas que crean nuevas dimensiones visuales.',        img:'assets/obra7.jpg',  cat:'escultura',  artist:'Marta Sol',    featured:true,  likes:63, comments:[] },
  { id:8,  title:'Movimiento Eterno',    desc:'Captura de la energía, el dinamismo y el flujo de la existencia.',       img:'assets/obra8.jpg',  cat:'digital',    artist:'Carlos V.',    featured:false, likes:22, comments:[] },
  { id:9,  title:'Fragmentos de Luz',    desc:'Intersección de luz, sombra y perspectiva en el espacio.',               img:'assets/obra9.jpg',  cat:'fotografia', artist:'Elena M.',     featured:false, likes:38, comments:[] },
  { id:10, title:'Identidad Digital',    desc:'Reflexión sobre quiénes somos en el mundo virtual y conectado.',         img:'assets/obra10.jpg', cat:'digital',    artist:'Lucía G.',     featured:false, likes:29, comments:[] },
  { id:11, title:'Horizonte Infinito',   desc:'Donde termina la realidad conocida y comienza la imaginación.',          img:'assets/obra11.jpg', cat:'pintura',    artist:'Alex Rivera',  featured:false, likes:44, comments:[] },
  { id:12, title:'Síntesis Perfecta',    desc:'La culminación de arte, tecnología y emoción en una sola expresión.',    img:'assets/obra12.jpg', cat:'digital',    artist:'Marta Sol',    featured:true,  likes:77, comments:[] },
  { id:13, title:'Materia Expandida',    desc:'Una composición vibrante que mezcla estructura, textura y pulso contemporáneo.', img:'assets/obra13.png', cat:'digital',    artist:'Juan Creativo', featured:true,  likes:31, comments:[] },
  { id:14, title:'Pulso Sensorial',      desc:'Un juego visual de ritmo y contraste que propone una experiencia inmersiva.',   img:'assets/obra14.png', cat:'escultura',  artist:'Sara Talento',  featured:false, likes:26, comments:[] },
];

const BASE_ARTISTS = [
  { id:'a1', name:'Alex Rivera', role:'Artista Oficial', bio:'Especialista en arte generativo y paisajes algorítmicos.',      obras:15, reacciones:240, av:'https://picsum.photos/seed/a1/200/200' },
  { id:'a2', name:'Marta Sol',   role:'Artista Oficial', bio:'Explorando la identidad humana a través de retratos digitales.', obras:8,  reacciones:190, av:'https://picsum.photos/seed/m1/200/200' },
  { id:'a3', name:'Carlos V.',   role:'Artista Oficial', bio:'Arte conceptual que fusiona lo clásico con lo contemporáneo.',    obras:12, reacciones:152, av:'https://picsum.photos/seed/c1/200/200' },
  { id:'a4', name:'Elena M.',    role:'Artista Oficial', bio:'Fotografía que capta la esencia efímera de los momentos.',       obras:10, reacciones:135, av:'https://picsum.photos/seed/e1/200/200' },
  { id:'a5', name:'Lucía G.',    role:'Artista Oficial', bio:'Esculturas virtuales que desafían la percepción del espacio.',   obras:7,  reacciones:118, av:'https://picsum.photos/seed/l1/200/200' },
];

const BASE_EMERGING = [
  { id:'e1', title:'Obra Emergente 13', img:'assets/obra13.png', artist:'Juan Creativo', bio:'Apasionado por el color y la forma digital.', likes:24 },
  { id:'e2', title:'Obra Emergente 14', img:'assets/obra14.png', artist:'Sara Talento',  bio:'Exploración de texturas visuales únicas.',    likes:18 },
];

const BASE_USERS = [
  { id:1, name:'Juan Pérez',      email:'juan@mail.com',   role:'Usuario', status:'Activo'  },
  { id:2, name:'Ana García',      email:'ana@mail.com',    role:'Artista', status:'Activo'  },
  { id:3, name:'Carlos López',    email:'carlos@mail.com', role:'Usuario', status:'Baneado' },
  { id:4, name:'María Rodríguez', email:'maria@mail.com',  role:'Artista', status:'Activo'  },
  { id:5, name:'Pedro Sánchez',   email:'pedro@mail.com',  role:'Admin',   status:'Activo'  },
  { id:6, name:'Sofía Torres',    email:'sofia@mail.com',  role:'Usuario', status:'Activo'  },
];

const BASE_MYWORKS = [
  { id:1, title:'Paisaje Digital',   cat:'digital',   img:'assets/obra1.jpg', desc:'Mi primera obra digital.',        views:150, reactions:24 },
  { id:2, title:'Retrato Abstracto', cat:'pintura',   img:'assets/obra4.jpg', desc:'Exploración del retrato moderno.', views:89,  reactions:12 },
  { id:3, title:'Escultura Virtual', cat:'escultura', img:'assets/obra7.jpg', desc:'Forma tridimensional imaginaria.', views:67,  reactions:8  },
];

const BASE_EXPOS = [
  { id:1, name:'Neón Futuro',      desc:'Exploración de luz y color',     start:'2024-01-15', end:'2024-02-15', works:[1,2], status:'finalizada' },
  { id:2, name:'Abstracción Dig.', desc:'Formas geométricas desafiantes', start:'2024-03-01', end:'2024-12-31', works:[2,3], status:'activa'     },
];

const BASE_REQUESTS = [
  { id:1, name:'Diego Mora', email:'diego@mail.com', desc:'Pintor digital con 3 años de experiencia.',     web:'',                       date:'2024-12-01', status:'pendiente' },
  { id:2, name:'Laura Vega', email:'laura@mail.com', desc:'Fotógrafa artística y manipulación digital.',   web:'https://lauravega.art',   date:'2024-12-05', status:'pendiente' },
];

const DEFAULT_USERS = {
  admin:  { id:'admin',  name:'Admin Principal', role:'Administrador', bio:'Gestiona y supervisa la plataforma Absaide.', avatar:'' },
  artist: { id:'artist', name:'Artista Absaide', role:'Artista',       bio:'Comparto mi arte con el mundo.',              avatar:'' },
  user:   { id:'user',   name:'Coleccionista',   role:'Coleccionista', bio:'Explorando el arte digital.',                 avatar:'' },
};

/* ============================================================
   ESTADO
   ============================================================ */
let currentUser   = null;
let artworks      = [];
let usersData     = [];
let myWorksData   = [];
let myExposData   = [];
let emergingData  = [];
let artistsData   = [];
let requestsData  = [];
let likedArtworks = new Set();
let likedEmerging = new Set();
let favArtists    = new Set();
let galleryFilter = 'all';
let messagesData  = { inbox: [], sent: [] };
let currentMsgTab = 'inbox';
let lightboxIndex = 0;
let lightboxItems = [];
let accessibilityPrefs = {
  fontScale: 1,
  uiScale: 1,
  readableFont: false,
  highContrast: false,
  colorblindMode: false,
  reduceMotion: false,
  readingSpacing: false,
};
let galleryControls = {
  artist: 'all',
  sort: 'featured',
  favoritesOnly: false,
  featuredOnly: false,
  emotion: 'all',
};

/* ---- Persistencia ---- */
function save(key, val) {
  try { localStorage.setItem('absaide_' + key, JSON.stringify(val)); } catch(e) {}
}
function load(key, fallback) {
  try { var s = localStorage.getItem('absaide_' + key); return s ? JSON.parse(s) : fallback; }
  catch(e) { return fallback; }
}
function loadAll() {
  // Artworks: solo cargar desde BD, no datos base
  artworks     = load('artworks',  []);
  usersData    = load('users',     JSON.parse(JSON.stringify(BASE_USERS)));
  myWorksData  = load('myworks',   []);
  myExposData  = load('myexpos',   []);
  emergingData = load('emerging',  []);
  artistsData  = load('artists',   JSON.parse(JSON.stringify(BASE_ARTISTS)));
  requestsData = load('requests',  JSON.parse(JSON.stringify(BASE_REQUESTS)));
  likedArtworks= new Set();
  likedEmerging= new Set();
  favArtists   = new Set();
  accessibilityPrefs = Object.assign({}, accessibilityPrefs, load('accessibility', {}));
  loadUserScopedState();
}

function syncArtworkCatalog() {
  // Solo artworks reales del backend — no mezclar datos base
  save('artworks', artworks);
}

function getScopedStorageKey(base) {
  var scope = 'guest';
  if (currentUser) {
    scope = currentUser.email || currentUser.name || currentUser.id;
  }
  return base + '_' + String(scope).toLowerCase().replace(/[^a-z0-9]+/g, '_');
}

function loadUserScopedState() {
  likedArtworks = new Set(load(getScopedStorageKey('liked_artworks'), currentUser ? [] : load('liked_artworks', [])));
  likedEmerging = new Set(load(getScopedStorageKey('liked_emerging'), currentUser ? [] : load('liked_emerging', [])));
  favArtists = new Set(load(getScopedStorageKey('fav_artists'), currentUser ? [] : load('fav_artists', [])));
}

function saveUserSet(base, set) {
  save(getScopedStorageKey(base), Array.from(set));
}

function saveAccessibilityPrefs() {
  save('accessibility', accessibilityPrefs);
}

function applyAccessibilityPrefs() {
  document.body.classList.toggle('accessibility-readable-font', !!accessibilityPrefs.readableFont);
  document.body.classList.toggle('accessibility-high-contrast', !!accessibilityPrefs.highContrast);
  document.body.classList.toggle('accessibility-colorblind', !!accessibilityPrefs.colorblindMode);
  document.body.classList.toggle('accessibility-reduced-motion', !!accessibilityPrefs.reduceMotion);
  document.body.classList.toggle('accessibility-reading-spacing', !!accessibilityPrefs.readingSpacing);
  document.documentElement.style.setProperty('--font-scale', accessibilityPrefs.fontScale);
  document.documentElement.style.setProperty('--ui-scale', accessibilityPrefs.uiScale || accessibilityPrefs.fontScale || 1);
  updateAccessibilityUI();
}

function updateAccessibilityUI() {
  setAccessibilityActive('font-size-small-btn', accessibilityPrefs.fontScale === 0.9);
  setAccessibilityActive('font-size-normal-btn', accessibilityPrefs.fontScale === 1);
  setAccessibilityActive('font-size-large-btn', accessibilityPrefs.fontScale === 1.2);
  setAccessibilityActive('font-size-xlarge-btn', accessibilityPrefs.fontScale === 1.4);
  setAccessibilityActive('font-default-btn', !accessibilityPrefs.readableFont);
  setAccessibilityActive('font-readable-btn', !!accessibilityPrefs.readableFont);
  setAccessibilityActive('contrast-default-btn', !accessibilityPrefs.highContrast);
  setAccessibilityActive('contrast-high-btn', !!accessibilityPrefs.highContrast);
  setAccessibilityActive('color-default-btn', !accessibilityPrefs.colorblindMode);
  setAccessibilityActive('colorblind-btn', !!accessibilityPrefs.colorblindMode);
  setAccessibilityActive('motion-default-btn', !accessibilityPrefs.reduceMotion);
  setAccessibilityActive('motion-reduced-btn', !!accessibilityPrefs.reduceMotion);
  setAccessibilityActive('spacing-default-btn', !accessibilityPrefs.readingSpacing);
  setAccessibilityActive('spacing-wide-btn', !!accessibilityPrefs.readingSpacing);
}

function setAccessibilityActive(id, active) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('active', !!active);
  el.setAttribute('aria-pressed', active ? 'true' : 'false');
}

function toggleAccessibilityPanel() {
  var panel = document.getElementById('accessibility-panel');
  var btn = document.getElementById('accessibility-toggle');
  if (!panel || !btn) return;
  var open = !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  panel.setAttribute('aria-hidden', open ? 'false' : 'true');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('accessibility-open', open);
}

function closeAccessibilityPanel() {
  var panel = document.getElementById('accessibility-panel');
  var btn = document.getElementById('accessibility-toggle');
  if (!panel || !btn) return;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  btn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('accessibility-open');
}

function setFontScalePreset(scale) {
  accessibilityPrefs.fontScale = scale;
  accessibilityPrefs.uiScale = scale;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function setReadableFont(enabled) {
  accessibilityPrefs.readableFont = !!enabled;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function setHighContrast(enabled) {
  accessibilityPrefs.highContrast = !!enabled;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function setColorblindMode(enabled) {
  accessibilityPrefs.colorblindMode = !!enabled;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function setReduceMotion(enabled) {
  accessibilityPrefs.reduceMotion = !!enabled;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function setReadingSpacing(enabled) {
  accessibilityPrefs.readingSpacing = !!enabled;
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function resetAccessibilityPrefs() {
  accessibilityPrefs = {
    fontScale: 1,
    uiScale: 1,
    readableFont: false,
    highContrast: false,
    colorblindMode: false,
    reduceMotion: false,
    readingSpacing: false,
  };
  stopSpeech();
  saveAccessibilityPrefs();
  applyAccessibilityPrefs();
}

function getCurrentViewText() {
  var activeView = document.querySelector('.view.active');
  if (!activeView) return '';
  var texts = Array.from(activeView.querySelectorAll('h1, h2, h3, h4, p, .art-card-title, .art-card-desc, .profile-section-title, .stat-box-label, .stat-box-num'))
    .map(function(el){ return (el.textContent || '').trim(); })
    .filter(Boolean);
  return texts.join('. ');
}

function readCurrentViewAloud() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    toast('Tu navegador no soporta lectura por voz', 'error');
    return;
  }
  var text = getCurrentViewText();
  if (!text) {
    toast('No hay contenido disponible para leer', 'error');
    return;
  }
  stopSpeech();
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-MX';
  utterance.rate = accessibilityPrefs.reduceMotion ? 0.9 : 1;
  window.speechSynthesis.speak(utterance);
  toast('Leyendo la vista actual', 'success');
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function normalizeArtworkFromApi(item) {
  return {
    id: item.id,
    title: item.title,
    desc: item.description || '',
    img: item.image_path || '',
    cat: item.category,
    artist: item.artist_name,
    featured: !!item.featured,
    likes: item.likes || 0,
    comments: []
  };
}

function requireSupabase() { return null; }

async function fetchArtworksFromApi() {
  // Implementado por ktor-api.js
}

async function createUserInApi(payload) {
  // Implementado por ktor-api.js
  return {};
}

async function createArtworkInApi(payload) {
  // Implementado por ktor-api.js
  return {};
}

/* ============================================================
   NAVEGACIÓN
   ============================================================ */
var PAGES_BY_ROLE = {
  user:   ['dashboard','gallery','profile','artists','emerging','messages'],
  artist: ['dashboard','gallery','profile','myworks','expos','messages','emerging'],
  admin:  ['dashboard','gallery','profile','users','stats','requests','emerging','messages'],
};
var PUBLIC_PAGES = ['landing','login','register'];

function goTo(page) {
  stopSpeech();
  if (currentUser && PUBLIC_PAGES.indexOf(page) === -1) {
    var allowed = PAGES_BY_ROLE[currentUser.id] || [];
    if (allowed.indexOf(page) === -1) { toast('No tienes acceso a esa sección', 'error'); return; }
  }
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
  var el = document.getElementById('view-' + page);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
  updateActiveNav(page);
  if (page === 'gallery')   renderGallery();
  if (page === 'artists')   renderArtists();
  if (page === 'emerging')  renderEmerging();
  if (page === 'myworks')   renderMyWorks();
  if (page === 'expos')     renderExpos();
  if (page === 'users')     renderUsers();
  if (page === 'stats')     renderStats();
  if (page === 'dashboard') renderDashboard();
  if (page === 'profile')   renderProfileView();
  if (page === 'requests')  renderRequests();
  if (page === 'messages')  renderMessages();
}

function updateActiveNav(page) {
  var labels = { gallery:'Galería', artists:'Artistas', emerging:'Emergentes',
    dashboard:'Panel', profile:'Perfil', myworks:'Mis Obras',
    expos:'Exposiciones', users:'Usuarios', stats:'Estadísticas', requests:'Solicitudes', messages:'✉️ Mensajes' };
  document.querySelectorAll('.nav-item').forEach(function(i){
    i.classList.toggle('active', i.textContent.trim() === (labels[page]||''));
  });
}

/* ============================================================
   NAV POR ROL
   ============================================================ */
var NAV_BY_ROLE = {
  user:   ['nav-artists-li','nav-emerging-li'],
  artist: ['nav-myworks-li','nav-expos-li','nav-emerging-li'],
  admin:  ['nav-users-li','nav-stats-li','nav-requests-li','nav-emerging-li'],
};
var MOB_BY_ROLE = {
  user:   ['mob-artists-li','mob-emerging-li'],
  artist: ['mob-myworks-li','mob-expos-li','mob-emerging-li'],
  admin:  ['mob-users-li','mob-stats-li','mob-requests-li','mob-emerging-li'],
};
var ALL_ROLE_NAV = ['nav-artists-li','nav-emerging-li','nav-myworks-li','nav-expos-li','nav-users-li','nav-stats-li','nav-requests-li'];
var ALL_ROLE_MOB = ['mob-artists-li','mob-emerging-li','mob-myworks-li','mob-expos-li','mob-users-li','mob-stats-li','mob-requests-li'];

function showRoleNav(role) {
  // Ocultar todos los ítems opcionales primero
  ALL_ROLE_NAV.forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-visible');
    el.classList.add('role-hidden');
  });
  ALL_ROLE_MOB.forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-visible');
    el.classList.add('role-hidden');
  });
  // Mostrar solo los del rol actual
  (NAV_BY_ROLE[role]||[]).forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-hidden');
    el.classList.add('role-visible');
  });
  (MOB_BY_ROLE[role]||[]).forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-hidden');
    el.classList.add('role-visible');
  });
}

function hideRoleNav() {
  ALL_ROLE_NAV.forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-visible');
    el.classList.add('role-hidden');
  });
  ALL_ROLE_MOB.forEach(function(id){
    var el = document.getElementById(id);
    el.classList.remove('role-visible');
    el.classList.add('role-hidden');
  });
}

/* ============================================================
   AUTH
   ============================================================ */
function loginAs(role) {
  var stored = load('profile_' + role, null);
  currentUser = stored || JSON.parse(JSON.stringify(DEFAULT_USERS[role]));
  loadUserScopedState();
  document.body.classList.add('is-logged');
  updateNavUser();
  showRoleNav(role);
  save('last_role', role);
  toast('¡Bienvenido, ' + currentUser.name + '! 👋', 'success');
  goTo('dashboard');
}

async function register() {
  var name  = document.getElementById('reg-name').value.trim();
  var email = document.getElementById('reg-email').value.trim();
  var pass  = document.getElementById('reg-pass').value.trim();
  var role  = document.getElementById('reg-role').value;
  if (!name || !email) { toast('Completa nombre y correo', 'error'); return; }
  try {
    await createUserInApi({
      name: name,
      email: email,
      password: pass,
      role: role
    });
    var base = JSON.parse(JSON.stringify(DEFAULT_USERS[role]));
    base.name  = name;
    base.email = email;
    save('profile_' + role, base);
    loginAs(role);
  } catch (e) {
    toast(e.message || 'No se pudo registrar', 'error');
  }
}

function logout() {
  currentUser = null;
  loadUserScopedState();
  document.body.classList.remove('is-logged');
  hideRoleNav();
  save('last_role', null);
  toast('Sesión cerrada. ¡Hasta pronto!');
  goTo('landing');
}

function storeUser() {
  if (!currentUser) return;
  save('profile_' + currentUser.id, currentUser);
}

function updateNavUser() {
  if (!currentUser) return;
  document.getElementById('nav-name').textContent = currentUser.name;
  var av = document.getElementById('nav-avatar');
  av.innerHTML = currentUser.avatar
    ? '<img src="' + currentUser.avatar + '" alt="">'
    : currentUser.name[0].toUpperCase();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  if (!currentUser) return;
  document.getElementById('dash-sub').textContent = 'Bienvenido de vuelta, ' + currentUser.name;
  var statsEl = document.getElementById('dash-stats');
  var actEl   = document.getElementById('dash-actions');
  var extraEl = document.getElementById('dash-extra');

  if (currentUser.id === 'admin') {
    var pending = requestsData.filter(function(r){ return r.status === 'pendiente'; }).length;
    statsEl.innerHTML =
      '<div class="stat-box"><div class="stat-box-num">'+usersData.length+'</div><div class="stat-box-label">Usuarios</div><div class="stat-box-trend">↑ +12%</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+artworks.length+'</div><div class="stat-box-label">Obras</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+myExposData.length+'</div><div class="stat-box-label">Exposiciones</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+pending+'</div><div class="stat-box-label">Solicitudes Pendientes</div><div class="stat-box-trend" style="color:var(--accent)">Revisar</div></div>';
    actEl.innerHTML =
      '<button class="btn btn-primary" onclick="goTo(\'users\')">👥 Gestionar Usuarios</button>'+
      '<button class="btn btn-outline" onclick="goTo(\'stats\')">📊 Estadísticas</button>'+
      '<button class="btn btn-outline" onclick="goTo(\'requests\')">📋 Solicitudes '+(pending>0?'<span class="badge badge-featured">'+pending+'</span>':'')+'</button>'+
      '<button class="btn btn-ghost"   onclick="goTo(\'gallery\')">🖼️ Ver Galería</button>';
    var topRows = [...artistsData].sort(function(a,b){return b.reacciones-a.reacciones;}).slice(0,5).map(function(a,i){
      return '<tr><td style="color:var(--accent);font-weight:700">#'+(i+1)+'</td><td><strong>'+a.name+'</strong></td><td>'+a.obras+'</td><td style="color:#00e5a0;font-weight:600">'+a.reacciones+'</td></tr>';
    }).join('');
    extraEl.innerHTML =
      '<h3 style="font-size:1.2rem;font-weight:700;margin-bottom:18px">Top Artistas</h3>'+
      '<div class="table-wrap"><table class="modern-table"><thead><tr><th>#</th><th>Artista</th><th>Obras</th><th>Reacciones</th></tr></thead><tbody>'+topRows+'</tbody></table></div>';

  } else if (currentUser.id === 'artist') {
    var totalLikes = myWorksData.reduce(function(s,w){return s+w.reactions;},0);
    var totalViews = myWorksData.reduce(function(s,w){return s+w.views;},0);
    statsEl.innerHTML =
      '<div class="stat-box"><div class="stat-box-num">'+myWorksData.length+'</div><div class="stat-box-label">Mis Obras</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+myExposData.length+'</div><div class="stat-box-label">Exposiciones</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+totalLikes+'</div><div class="stat-box-label">Reacciones</div><div class="stat-box-trend">↑ +8%</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+totalViews+'</div><div class="stat-box-label">Vistas Totales</div></div>';
    actEl.innerHTML =
      '<button class="btn btn-primary" onclick="openModal(\'upload-modal\')">🎨 Subir Obra</button>'+
      '<button class="btn btn-outline" onclick="openModal(\'expo-modal\')">📅 Nueva Exposición</button>'+
      '<button class="btn btn-outline" onclick="goTo(\'myworks\')">📁 Mis Obras</button>'+
      '<button class="btn btn-ghost"   onclick="goTo(\'gallery\')">🖼️ Ver Galería</button>';
    var top = [...myWorksData].sort(function(a,b){return b.reactions-a.reactions;})[0];
    extraEl.innerHTML = top
      ? '<h3 style="font-size:1.2rem;font-weight:700;margin-bottom:18px">Tu obra más popular</h3>'+
        '<div class="art-card" style="max-width:320px" onclick="goTo(\'myworks\')">'+
        '<div class="art-card-img-wrap"><img src="'+top.img+'" alt="'+top.title+'"></div>'+
        '<div class="art-card-body"><div class="art-card-title">'+top.title+'</div>'+
        '<div class="art-card-desc">'+top.views+' vistas · '+top.reactions+' reacciones</div></div></div>'
      : '';

  } else {
    statsEl.innerHTML =
      '<div class="stat-box"><div class="stat-box-num">'+likedArtworks.size+'</div><div class="stat-box-label">Obras Favoritas</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+favArtists.size+'</div><div class="stat-box-label">Artistas Siguiendo</div></div>'+
      '<div class="stat-box"><div class="stat-box-num">'+likedEmerging.size+'</div><div class="stat-box-label">Votos Emergentes</div></div>';
    actEl.innerHTML =
      '<button class="btn btn-primary" onclick="goTo(\'gallery\')">🖼️ Explorar Galería</button>'+
      '<button class="btn btn-outline" onclick="goTo(\'artists\')">🎨 Ver Artistas</button>'+
      '<button class="btn btn-outline" onclick="goTo(\'emerging\')">⭐ Votar Emergentes</button>'+
      '<button class="btn btn-ghost"   onclick="openModal(\'artist-req-modal\')">✋ Quiero ser Artista</button>';
    var favList = artworks.filter(function(a){ return likedArtworks.has(a.id); }).slice(0,3);
    extraEl.innerHTML = favList.length
      ? '<h3 style="font-size:1.2rem;font-weight:700;margin-bottom:18px">Tus obras favoritas</h3>'+
        '<div class="cards-grid">'+favList.map(function(a,i){ return buildArtCard(a,i,favList); }).join('')+'</div>'
      : '<div class="empty-state"><div class="icon">💝</div><h4>Aún no tienes favoritos</h4><p>Dale ❤️ a las obras que más te gusten en la Galería</p></div>';
  }
}

/* ============================================================
   GALERÍA
   ============================================================ */
function buildArtCard(a, i, list) {
  var liked = likedArtworks.has(a.id);
  var listStr = JSON.stringify(list).replace(/"/g,'&quot;');
  var isOwn = currentUser && currentUser.id === 'artist' && a.artist === currentUser.name;
  return '<div class="art-card" onclick="openLightbox('+i+',this)" data-list="'+listStr+'">' +
    '<div class="art-card-img-wrap">' +
    '<img src="'+a.img+'" alt="'+a.title+'" loading="lazy">' +
    '<div class="art-card-overlay">' +
    '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openArtworkDetail('+a.id+')">Ver detalle</button>' +
    '</div></div>' +
    '<div class="art-card-body">' +
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">' +
    '<div class="art-card-title">'+a.title+'</div>' +
    (a.featured ? '<span class="badge badge-featured">Destacada</span>' : '') +
    '</div>' +
    '<div class="art-card-desc">'+a.desc+'</div>' +
    '<div class="art-card-footer">' +
    '<span style="font-size:0.78rem;color:var(--muted)">Por <b style="color:var(--text)">'+a.artist+'</b></span>' +
    '<div style="display:flex;gap:8px;align-items:center">' +
    '<span style="font-size:0.78rem;color:var(--muted)">💬 '+((a.comments||[]).length)+'</span>' +
    '<div class="like-btn '+(liked?'liked':'')+'" onclick="event.stopPropagation();toggleLike('+a.id+')">' +
    '<span>'+(liked?'❤️':'🤍')+'</span><span>'+(a.likes+(liked?1:0))+'</span>' +
    '</div></div></div>' +
    /* Botón Me interesa — solo si no es tu propia obra */
    (!isOwn
      ? '<button class="btn btn-outline btn-sm" style="width:100%;margin-top:12px" onclick="event.stopPropagation();openChat(\''+a.artist+'\',\''+a.title+'\')">💬 Me interesa esta obra</button>'
      : '<div style="margin-top:12px;font-size:0.75rem;color:var(--muted);text-align:center">Tu obra</div>'
    ) +
    '</div></div>';
}

function getGalleryItems() {
  var search = (document.getElementById('gallery-search').value || '').toLowerCase().trim();
  var items = artworks.filter(function(a){
    var matchCat = galleryFilter === 'all' || a.cat === galleryFilter;
    var matchQ = !search || a.title.toLowerCase().indexOf(search) > -1 || a.artist.toLowerCase().indexOf(search) > -1 || (a.desc || '').toLowerCase().indexOf(search) > -1;
    var matchArtist = galleryControls.artist === 'all' || a.artist === galleryControls.artist;
    var matchFavorites = !galleryControls.favoritesOnly || likedArtworks.has(a.id);
    var matchFeatured = !galleryControls.featuredOnly || a.featured;
    return matchCat && matchQ && matchArtist && matchFavorites && matchFeatured;
  });

  items.sort(function(a, b){
    if (galleryControls.sort === 'popular') {
      return (b.likes + (likedArtworks.has(b.id) ? 1 : 0)) - (a.likes + (likedArtworks.has(a.id) ? 1 : 0));
    }
    if (galleryControls.sort === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
    return (b.likes + (likedArtworks.has(b.id) ? 1 : 0)) - (a.likes + (likedArtworks.has(a.id) ? 1 : 0));
  });

  return items;
}

function renderGallerySummary(items) {
  var summary = document.getElementById('gallery-summary');
  if (!summary) return;
  var artistsCount = {};
  items.forEach(function(item){ artistsCount[item.artist] = true; });
  var activeFlags = [
    galleryFilter !== 'all',
    galleryControls.artist !== 'all',
    galleryControls.favoritesOnly,
    galleryControls.featuredOnly,
    !!(document.getElementById('gallery-search').value || '').trim()
  ].filter(Boolean).length;

  summary.innerHTML =
    '<div class="gallery-summary-card"><span class="gallery-summary-label">Resultados</span><div class="gallery-summary-value">'+items.length+'</div><div class="gallery-summary-note">Obras visibles con tu filtro actual</div></div>' +
    '<div class="gallery-summary-card"><span class="gallery-summary-label">Artistas</span><div class="gallery-summary-value">'+Object.keys(artistsCount).length+'</div><div class="gallery-summary-note">Autores dentro de esta selección</div></div>' +
    '<div class="gallery-summary-card"><span class="gallery-summary-label">Favoritas</span><div class="gallery-summary-value">'+likedArtworks.size+'</div><div class="gallery-summary-note">'+(activeFlags ? activeFlags + ' filtros activos' : 'Sin filtros extra aplicados')+'</div></div>';
}

function renderGalleryTrends(items) {
  var wrap = document.getElementById('gallery-trending');
  if (!wrap) return;
  var source = items.length ? items : artworks;
  var trends = source.slice().sort(function(a, b){
    return (b.likes + (likedArtworks.has(b.id) ? 1 : 0)) - (a.likes + (likedArtworks.has(a.id) ? 1 : 0));
  }).slice(0, 3);

  if (!trends.length) {
    wrap.innerHTML = '';
    return;
  }

  wrap.innerHTML =
    '<div class="gallery-trending-head"><div><h3>Tendencias de la galería</h3><p>Las piezas con más interés para descubrir rápido lo mejor de la colección.</p></div></div>' +
    '<div class="gallery-trending-grid">' +
    trends.map(function(a, i){
      return '<div class="trend-card" onclick="openArtworkDetail('+a.id+')" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();openArtworkDetail('+a.id+')}">' +
        '<img src="'+a.img+'" alt="'+a.title+'" loading="lazy">' +
        '<div class="trend-card-body">' +
        '<span class="trend-rank">Top ' + (i + 1) + '</span>' +
        '<h4>' + a.title + '</h4>' +
        '<p>' + a.artist + ' · ' + (a.likes + (likedArtworks.has(a.id) ? 1 : 0)) + ' me gusta</p>' +
        '</div></div>';
    }).join('') +
    '</div>';
}

function renderGallerySpotlight(items) {
  var wrap = document.getElementById('gallery-spotlight');
  if (!wrap) return;
  var source = items.length ? items : artworks;
  if (!source.length) {
    wrap.innerHTML = '';
    return;
  }
  var featured = source.slice().sort(function(a, b){
    var scoreA = (a.featured ? 30 : 0) + a.likes;
    var scoreB = (b.featured ? 30 : 0) + b.likes;
    return scoreB - scoreA;
  })[0];
  wrap.innerHTML =
    '<div class="gallery-spotlight-card">' +
      '<div class="gallery-spotlight-media"><img src="'+featured.img+'" alt="'+featured.title+'" loading="lazy"></div>' +
      '<div class="gallery-spotlight-copy">' +
        '<div class="gallery-spotlight-kicker">Obra destacada del recorrido</div>' +
        '<h3>'+featured.title+'</h3>' +
        '<p>'+featured.desc+'</p>' +
        '<div class="gallery-spotlight-meta">' +
          '<span>Artista: '+featured.artist+'</span>' +
          '<span>Categoría: '+featured.cat+'</span>' +
          '<span>Likes: '+(featured.likes + (likedArtworks.has(featured.id) ? 1 : 0))+'</span>' +
        '</div>' +
        '<div class="card-actions">' +
          '<button class="btn btn-primary" onclick="openArtworkDetail('+featured.id+')">Ver detalle</button>' +
          '<button class="btn btn-outline" onclick="openGallerySpotlight('+featured.id+')">Abrir imagen</button>' +
        '</div>' +
      '</div>' +
    '</div>';
}

function openGallerySpotlight(id) {
  var index = lightboxItems.findIndex(function(item){ return item.id === id; });
  if (index === -1) return openArtworkDetail(id);
  openLightboxDirect(index);
}

function renderGalleryFiltersUI() {
  var artist = document.getElementById('gallery-artist-filter');
  var sort = document.getElementById('gallery-sort');
  var favBtn = document.getElementById('gallery-favorites-toggle');
  var featuredBtn = document.getElementById('gallery-featured-toggle');
  if (artist) artist.value = galleryControls.artist;
  if (sort) sort.value = galleryControls.sort;
  if (favBtn) favBtn.classList.toggle('active', !!galleryControls.favoritesOnly);
  if (featuredBtn) featuredBtn.classList.toggle('active', !!galleryControls.featuredOnly);
}

function populateGalleryArtistFilter() {
  var select = document.getElementById('gallery-artist-filter');
  if (!select) return;
  var current = galleryControls.artist;
  var artists = artworks.map(function(a){ return a.artist; }).filter(function(value, index, arr){ return arr.indexOf(value) === index; }).sort();
  select.innerHTML = '<option value="all">Todos los artistas</option>' + artists.map(function(name){
    return '<option value="'+name.replace(/"/g, '&quot;')+'">'+name+'</option>';
  }).join('');
  if (artists.indexOf(current) > -1 || current === 'all') select.value = current;
  else galleryControls.artist = 'all';
}

function renderGallery() {
  var search = (document.getElementById('gallery-search').value||'').toLowerCase();
  var items  = artworks.filter(function(a){
    var matchCat = galleryFilter === 'all' || a.cat === galleryFilter;
    var matchQ   = !search || a.title.toLowerCase().indexOf(search)>-1 || a.artist.toLowerCase().indexOf(search)>-1;
    return matchCat && matchQ;
  });
  lightboxItems = items;
  var grid = document.getElementById('gallery-grid');
  grid.innerHTML = items.length
    ? items.map(function(a,i){ return buildArtCard(a,i,items); }).join('')
    : '<div class="empty-state"><div class="icon">🖼️</div><h4>No se encontraron obras</h4><p>Prueba con otro filtro</p></div>';
}

function filterGallery() { renderGallery(); }

function setFilter(el, type) {
  el.parentElement.querySelectorAll('.chip').forEach(function(c){ c.classList.remove('active'); });
  el.classList.add('active');
  if (type === 'gallery') { galleryFilter = el.dataset.filter; renderGallery(); }
}

function toggleLike(id) {
  if (!currentUser) { toast('Inicia sesión para dar me gusta', 'error'); return; }
  if (likedArtworks.has(id)) {
    likedArtworks.delete(id);
    toast('Like retirado');
  } else {
    likedArtworks.add(id);
    toast('¡Le diste me gusta! ❤️', 'success');
  }
  // Guardar por usuario para persistencia real
  saveUserSet('liked_artworks', likedArtworks);
  renderGallery();
  if (currentUser && currentUser.id === 'user') renderDashboard();
}

/* Detalle de obra con comentarios */
function openArtworkDetail(id) {
  var a = artworks.find(function(x){ return x.id === id; });
  if (!a) return;
  document.getElementById('detail-img').src            = a.img;
  document.getElementById('detail-title').textContent  = a.title;
  document.getElementById('detail-artist').textContent = 'Por ' + a.artist;
  document.getElementById('detail-desc').textContent   = a.desc;
  document.getElementById('detail-cat').textContent    = a.cat;
  document.getElementById('detail-likes').textContent  = a.likes + (likedArtworks.has(a.id)?1:0);
  document.getElementById('detail-id').value           = a.id;
  renderComments(a);
  openModal('detail-modal');
}

function renderComments(a) {
  var wrap = document.getElementById('detail-comments');
  var list = a.comments || [];
  wrap.innerHTML = list.length
    ? list.map(function(c){
        return '<div class="comment-item">' +
          '<div class="comment-header"><span class="comment-author">'+c.author+'</span><span class="comment-date">'+c.date+'</span></div>' +
          '<div class="comment-text">'+c.text+'</div></div>';
      }).join('')
    : '<p style="color:var(--muted);font-size:0.85rem">Sé el primero en comentar.</p>';
}

function submitComment() {
  if (!currentUser) { toast('Inicia sesión para comentar', 'error'); return; }
  var input = document.getElementById('comment-input');
  var text  = input.value.trim();
  if (!text) return;
  var id  = parseInt(document.getElementById('detail-id').value);
  var art = artworks.find(function(a){ return a.id === id; });
  if (!art) return;
  art.comments = art.comments || [];
  art.comments.push({ author: currentUser.name, text: text, date: new Date().toLocaleDateString('es-MX') });
  save('artworks', artworks);
  input.value = '';
  renderComments(art);
  document.getElementById('detail-comments').scrollTop = 9999;
  toast('Comentario publicado ✓', 'success');
}

/* ============================================================
   ARTISTAS — seguir / dejar de seguir
   ============================================================ */
function renderArtists(filter) {
  var list = filter
    ? artistsData.filter(function(a){ return a.name.toLowerCase().indexOf(filter.toLowerCase()) > -1; })
    : artistsData;

  if (!list.length && typeof ktorGetAllArtists === 'function' && _token) {
    document.getElementById('artists-grid').innerHTML =
      '<div style="text-align:center;padding:40px;color:var(--muted)">⏳ Cargando artistas...</div>';
    ktorGetAllArtists().then(function(data) {
      if (data && data.length > 0) {
        artistsData = data.map(function(a) {
          return { id: a.id, name: a.name, role: 'Artista Oficial', bio: a.bio || '',
            obras: a.artworkCount || 0, reacciones: a.followerCount || 0,
            av: 'https://picsum.photos/seed/' + a.id + '/200/200', isFollowing: a.isFollowing || false };
        });
        data.forEach(function(a) {
          if (a.isFollowing) favArtists.add(a.id); else favArtists.delete(a.id);
        });
        save('artists', artistsData);
        saveUserSet('fav_artists', favArtists);
      }
      renderArtists(filter);
    });
    return;
  }

  document.getElementById('artists-grid').innerHTML = list.length
    ? list.map(function(a){
        var following = favArtists.has(a.id) || a.isFollowing;
        return '<div class="artist-card">' +
          '<div class="artist-av"><img src="'+a.av+'" alt="'+a.name+'" onerror="this.parentElement.textContent=this.alt[0]">'  +
          '</div><h3>'+a.name+'</h3>' +
          '<p class="role-tag">'+a.role+'</p>' +
          '<p>'+a.bio+'</p>' +
          '<div class="artist-card-stats" style="margin-bottom:16px">' +
          '<span><strong>'+a.obras+'</strong> obras</span>' +
          '<span><strong>'+(favArtists.has(a.id)?'<span style="color:var(--accent)">Siguiendo</span>':a.reacciones+' seguidores')+'</strong></span>' +
          '</div>' +
          '<button class="btn '+(following?'btn-primary':'btn-outline')+' btn-sm" onclick="toggleFollowArtist('+a.id+',this)">' +
          (following ? '✓ Siguiendo' : '+ Seguir') + '</button>' +
          '</div>';
      }).join('')
    : '<div class="empty-state"><div class="icon">🎨</div><h4>No se encontraron artistas</h4></div>';
}

function filterArtists(val) { renderArtists(val); }

function toggleFollowArtist(id, btn) {
  if (!currentUser) { toast('Inicia sesión para seguir artistas', 'error'); return; }
  var isFollowing = favArtists.has(id);

  // Actualizar UI inmediatamente
  if (isFollowing) {
    favArtists.delete(id);
    if (btn) { btn.className = 'btn btn-outline btn-sm'; btn.textContent = '+ Seguir'; }
    toast('Dejaste de seguir al artista');
  } else {
    favArtists.add(id);
    if (btn) { btn.className = 'btn btn-primary btn-sm'; btn.textContent = '✓ Siguiendo'; }
    toast('¡Ahora sigues a este artista! 🎨', 'success');
  }
  saveUserSet('fav_artists', favArtists);

  // Sincronizar con backend
  var artistId = typeof id === 'number' ? id : parseInt(id);
  if (!isNaN(artistId) && artistId > 0) {
    if (isFollowing && typeof ktorUnfollowArtist === 'function') {
      ktorUnfollowArtist(artistId).catch(function(e) {
        console.warn('Error dejar de seguir:', e);
      });
    } else if (!isFollowing && typeof ktorFollowArtist === 'function') {
      ktorFollowArtist(artistId).catch(function(e) {
        console.warn('Error seguir artista:', e);
      });
    }
  }

  // Actualizar artistsData local
  var artist = artistsData.find(function(a){ return a.id == id; });
  if (artist) {
    artist.isFollowing = !isFollowing;
    save('artists', artistsData);
  }

  // Re-renderizar vistas relevantes
  if (document.getElementById('view-artists') &&
      document.getElementById('view-artists').classList.contains('active')) {
    renderArtists();
  }
  if (document.getElementById('view-profile') &&
      document.getElementById('view-profile').classList.contains('active')) {
    renderProfileView();
  }
  if (currentUser && currentUser.id === 'user') renderDashboard();
}

/* ============================================================
   EMERGENTES
   ============================================================ */
var PROMO_THRESHOLD = 20; // votos mínimos para que admin pueda promover

function renderEmerging() {
  var isAdmin  = currentUser && currentUser.id === 'admin';
  var isArtist = currentUser && currentUser.id === 'artist';
  var sorted  = [...emergingData].sort(function(a,b){ return (b.likes+(likedEmerging.has(b.id)?1:0)) - (a.likes+(likedEmerging.has(a.id)?1:0)); });

  // Subtítulo y barra de criterio según rol
  var subEl = document.getElementById('emerging-subtitle');
  var barEl = document.getElementById('emerging-admin-bar');
  if (subEl) subEl.textContent = isAdmin ? 'Revisa los votos y decide quién merece ser Artista Oficial' : 'Vota por los nuevos talentos de la comunidad';
  if (barEl) barEl.style.display = isAdmin ? 'block' : 'none';

  document.getElementById('emerging-grid').innerHTML = sorted.map(function(e){
    var totalVotes = e.likes + (likedEmerging.has(e.id) ? 1 : 0);
    var pct        = Math.min(100, Math.round((totalVotes / PROMO_THRESHOLD) * 100));
    var canPromote = totalVotes >= PROMO_THRESHOLD;
    var promoted   = e.promoted || false;

    if (isAdmin) {
      /* ---- VISTA ADMIN: criterio de promoción ---- */
      return '<div class="art-card">' +
        '<div class="art-card-img-wrap" onclick="openEmLightbox(\''+e.img+'\',\''+e.title+'\')">' +
        '<img src="'+e.img+'" alt="'+e.title+'" loading="lazy">' +
        '<div class="art-card-overlay">' +
        '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openEmLightbox(\''+e.img+'\',\''+e.title+'\')">Ver obra</button>' +
        '</div></div>' +
        '<div class="art-card-body">' +
        '<div class="art-card-title">'+e.title+'</div>' +
        '<div style="font-size:0.8rem;color:var(--muted);margin:4px 0">Por <b style="color:var(--text)">'+e.artist+'</b></div>' +
        '<div style="font-size:0.8rem;color:var(--muted);margin-bottom:12px">'+e.bio+'</div>' +

        /* Barra de progreso de votos */
        '<div style="margin-bottom:12px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
        '<span style="font-size:0.78rem;color:var(--muted)">❤️ '+totalVotes+' votos de '+PROMO_THRESHOLD+' requeridos</span>' +
        '<span style="font-size:0.78rem;font-weight:700;color:'+(canPromote?'#00e5a0':'var(--accent)')+'">'+pct+'%</span>' +
        '</div>' +
        '<div style="height:6px;background:rgba(255,255,255,0.08);border-radius:10px;overflow:hidden">' +
        '<div style="height:100%;width:'+pct+'%;background:'+(canPromote?'linear-gradient(90deg,#00e5a0,#00c980)':'var(--gradient)')+';border-radius:10px;transition:width 0.5s"></div>' +
        '</div></div>' +

        /* Estado y acciones admin */
        (promoted
          ? '<div style="display:flex;align-items:center;gap:8px">' +
            '<span class="badge badge-new">✓ Promovido a Artista Oficial</span>' +
            '</div>'
          : '<div class="card-actions">' +
            '<button class="btn '+(canPromote?'btn-primary':'btn-ghost')+' btn-sm" '+(canPromote?'':'style="opacity:0.5;cursor:not-allowed" title="Necesita '+PROMO_THRESHOLD+' votos"')+' onclick="'+(canPromote?'promoteArtist(\''+e.id+'\')':'void 0')+'">' +
            (canPromote ? '⭐ Promover a Oficial' : '🔒 Faltan '+(PROMO_THRESHOLD-totalVotes)+' votos') +
            '</button>' +
            '<button class="btn btn-danger btn-sm" onclick="removeEmerging(\''+e.id+'\')">🗑️ Eliminar</button>' +
            '</div>'
        ) +
        '</div></div>';
    } else {
      /* ---- VISTA COLECCIONISTA: votar ---- */
      var voted = likedEmerging.has(e.id);
      return '<div class="art-card">' +
        '<div class="art-card-img-wrap" onclick="openEmLightbox(\''+e.img+'\',\''+e.title+'\')">' +
        '<img src="'+e.img+'" alt="'+e.title+'" loading="lazy">' +
        '<div class="art-card-overlay">' +
        '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openEmLightbox(\''+e.img+'\',\''+e.title+'\')">Ver obra</button>' +
        '</div></div>' +
        '<div class="art-card-body">' +
        '<div class="art-card-title">'+e.title+'</div>' +
        '<div style="font-size:0.8rem;color:var(--muted);margin:4px 0">Por <b style="color:var(--text)">'+e.artist+'</b></div>' +
        '<div style="font-size:0.8rem;color:var(--muted);margin-bottom:14px">'+e.bio+'</div>' +
        '<div class="art-card-footer">' +
        '<span class="badge '+(promoted?'badge-new':'badge-featured')+'">'+(promoted?'Artista Oficial':'Emergente')+'</span>' +
        '<button class="btn '+(voted?'btn-primary':'btn-outline')+' btn-sm" onclick="toggleLikeEm(\''+e.id+'\')">' +
        (voted?'❤️ Votado ('+totalVotes+')':'🤍 Votar ('+totalVotes+')')+
        '</button>' +
        '</div></div></div>';
    }
  }).join('');
}

function promoteArtist(id) {
  var e = emergingData.find(function(x){ return x.id === id; });
  if (!e) return;
  var totalVotes = e.likes + (likedEmerging.has(e.id) ? 1 : 0);
  if (totalVotes < PROMO_THRESHOLD) { toast('No tiene suficientes votos todavía', 'error'); return; }
  if (!confirm('¿Promover a "'+e.artist+'" como Artista Oficial? Se cambiará su rol en el sistema.')) return;

  e.promoted = true;
  save('emerging', emergingData);

  // Añadir a artistas oficiales
  var alreadyArtist = artistsData.find(function(a){ return a.name === e.artist; });
  if (!alreadyArtist) {
    artistsData.push({
      id:          'promoted_' + id,
      name:        e.artist,
      role:        'Artista Oficial',
      bio:         e.bio,
      obras:       0,
      reacciones:  totalVotes,
      av:          'https://picsum.photos/seed/' + id + '/200/200'
    });
    save('artists', artistsData);
  }

  // Cambiar rol en usersData local
  var existingUser = usersData.find(function(u){
    return u.name === e.artist || u.email === e.artistEmail;
  });
  if (existingUser) {
    existingUser.role = 'Artista';
    save('users', usersData);
  } else {
    usersData.push({
      id:        Date.now(),
      name:      e.artist,
      email:     e.artistEmail || (e.artist.toLowerCase().replace(/ /g,'') + '@absaide.com'),
      role:      'Artista',
      status:    'Activo',
      createdAt: new Date().toISOString()
    });
    save('users', usersData);
  }

  // Cambiar rol en el backend Ktor
  if (typeof ktorApi !== 'undefined' && ktorApi.token() && existingUser && existingUser.id) {
    fetch((window.KTOR_BASE_URL || 'http://localhost:8080') + '/users/' + existingUser.id + '/role', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ktorApi.token()
      },
      body: JSON.stringify({ role: 'ARTIST' })
    }).then(function(){
      toast('¡' + e.artist + ' es ahora Artista Oficial en el sistema! ⭐', 'success');
    }).catch(function(){
      toast('¡' + e.artist + ' promovido a Artista Oficial! ⭐', 'success');
    });
  } else {
    toast('¡' + e.artist + ' promovido a Artista Oficial! ⭐', 'success');
  }

  renderEmerging();
  renderUsers();
  renderDashboard();
}

function removeEmerging(id) {
  if (!confirm('¿Eliminar este artista emergente de la plataforma?')) return;
  emergingData = emergingData.filter(function(e){ return e.id !== id; });
  save('emerging', emergingData);
  toast('Artista emergente eliminado', 'error');
  renderEmerging();
}

function openEmLightbox(img, title) {
  lightboxItems = [{ img:img, title:title, desc:'Obra de artista emergente', artist:'' }];
  openLightboxDirect(0);
}

function toggleLikeEm(id) {
  if (!currentUser) { toast('Inicia sesión para votar', 'error'); return; }
  if (currentUser.id === 'admin')  { toast('El administrador no puede votar', 'error'); return; }
  if (currentUser.id === 'artist') { toast('Los artistas no pueden votar por emergentes', 'error'); return; }

  var wasVoted = likedEmerging.has(id);
  if (wasVoted) {
    likedEmerging.delete(id);
    toast('Voto retirado');
  } else {
    likedEmerging.add(id);
    toast('¡Votaste por este artista! 🌟', 'success');
  }
  saveUserSet('liked_emerging', likedEmerging);

  // Actualizar conteo local
  var e = emergingData.find(function(x){ return x.id === id; });
  if (e) {
    e.likes = Math.max(0, (e.likes || 0) + (wasVoted ? -1 : 1));
    save('emerging', emergingData);
  }

  // Sincronizar con backend si el id es numérico (artworkId real)
  var artworkId = typeof id === 'number' ? id : parseInt(id);
  if (!isNaN(artworkId) && artworkId > 0) {
    if (wasVoted && typeof ktorUnvoteEmerging === 'function') {
      ktorUnvoteEmerging(artworkId).catch(function(err) {
        console.warn('Error al quitar voto en backend:', err);
      });
    } else if (!wasVoted && typeof ktorVoteEmerging === 'function') {
      ktorVoteEmerging(artworkId).catch(function(err) {
        console.warn('Error al votar en backend:', err);
      });
    }
  }

  renderEmerging();
  if (currentUser && currentUser.id === 'user') renderDashboard();
}

/* ============================================================
   MIS OBRAS — CRUD completo
   ============================================================ */
function renderMyWorks() {
  var grid = document.getElementById('myworks-grid');
  grid.innerHTML = myWorksData.length
    ? myWorksData.map(function(w){
        return '<div class="art-card">' +
          '<div class="art-card-img-wrap"><img src="'+w.img+'" alt="'+w.title+'" loading="lazy"></div>' +
          '<div class="art-card-body">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">' +
          '<div class="art-card-title">'+w.title+'</div>' +
          '<span class="badge badge-artist">'+w.cat+'</span></div>' +
          '<div class="art-card-desc">'+w.desc+'</div>' +
          '<div style="font-size:0.78rem;color:var(--muted);margin-top:8px">👁️ '+w.views+' · ❤️ '+w.reactions+'</div>' +
          '<div class="card-actions">' +
          '<button class="btn btn-ghost btn-sm" onclick="openEditWork('+w.id+')">✏️ Editar</button>' +
          '<button class="btn btn-danger btn-sm" onclick="deleteWork('+w.id+')">🗑️ Eliminar</button>' +
          '</div></div></div>';
      }).join('')
    : '<div class="empty-state"><div class="icon">🎨</div><h4>Aún no tienes obras</h4><p>Sube tu primera obra para comenzar</p></div>';
}

function submitUpload() {
  var title = document.getElementById('up-title').value.trim();
  var desc  = document.getElementById('up-desc').value.trim();
  var cat   = document.getElementById('up-cat').value;
  if (!title || !desc) { toast('Completa título y descripción', 'error'); return; }
  var newId  = Date.now();
  var imgs   = ['assets/obra2.jpg','assets/obra5.jpg','assets/obra9.jpg','assets/obra11.jpg'];
  var img    = imgs[Math.floor(Math.random()*imgs.length)];
  myWorksData.unshift({ id:newId, title:title, desc:desc, cat:cat, img:img, views:0, reactions:0 });
  save('myworks', myWorksData);
  artworks.unshift({ id:newId+1000, title:title, desc:desc, img:img, cat:cat, artist:currentUser.name, featured:false, likes:0, comments:[] });
  save('artworks', artworks);
  toast('Obra "'+title+'" subida 🎨', 'success');
  closeModal('upload-modal');
  ['up-title','up-desc'].forEach(function(id){ document.getElementById(id).value=''; });
  document.getElementById('up-preview').innerHTML = '';
  renderMyWorks();
  renderDashboard();
}

function openEditWork(id) {
  var w = myWorksData.find(function(x){ return x.id === id; });
  if (!w) return;
  document.getElementById('edit-work-id').value    = id;
  document.getElementById('edit-work-title').value = w.title;
  document.getElementById('edit-work-desc').value  = w.desc;
  document.getElementById('edit-work-cat').value   = w.cat;
  openModal('edit-work-modal');
}

function saveEditWork() {
  var id    = parseInt(document.getElementById('edit-work-id').value);
  var title = document.getElementById('edit-work-title').value.trim();
  var desc  = document.getElementById('edit-work-desc').value.trim();
  var cat   = document.getElementById('edit-work-cat').value;
  if (!title) { toast('El título es obligatorio', 'error'); return; }
  var w = myWorksData.find(function(x){ return x.id === id; });
  if (w) { w.title=title; w.desc=desc; w.cat=cat; save('myworks', myWorksData); }
  toast('Obra actualizada ✓', 'success');
  closeModal('edit-work-modal');
  renderMyWorks();
}

function deleteWork(id) {
  if (!confirm('¿Eliminar esta obra? No se puede deshacer.')) return;
  myWorksData = myWorksData.filter(function(w){ return w.id !== id; });
  save('myworks', myWorksData);
  toast('Obra eliminada', 'error');
  renderMyWorks();
  renderDashboard();
}

/* ============================================================
   EXPOSICIONES — CRUD completo
   ============================================================ */
function renderExpos() {
  var list = document.getElementById('expos-list');
  list.innerHTML = myExposData.length
    ? myExposData.map(function(e){
        return '<div class="expo-item">' +
          '<div class="expo-item-header">' +
          '<div><h3>'+e.name+'</h3><div class="expo-dates">📅 '+e.start+' → '+e.end+'</div></div>' +
          '<span class="badge '+(e.status==='activa'?'badge-new':'badge-artist')+'">'+e.status+'</span>' +
          '</div>' +
          '<p style="color:var(--muted);font-size:0.85rem;margin:10px 0">'+e.desc+'</p>' +
          '<div class="expo-stats">🖼️ '+((e.works||[]).length)+' obras incluidas</div>' +
          '<div class="expo-actions">' +
          '<button class="btn btn-ghost btn-sm"   onclick="openEditExpo('+e.id+')">✏️ Editar</button>' +
          '<button class="btn btn-danger btn-sm"  onclick="deleteExpo('+e.id+')">🗑️ Eliminar</button>' +
          '<button class="btn btn-outline btn-sm" onclick="openExpoStats('+e.id+')">📊 Estadísticas</button>' +
          '</div></div>';
      }).join('')
    : '<div class="empty-state"><div class="icon">📅</div><h4>No tienes exposiciones</h4><p>Crea tu primera exposición</p></div>';
}

function submitExpo() {
  var name  = document.getElementById('expo-name').value.trim();
  var desc  = document.getElementById('expo-desc').value.trim();
  var start = document.getElementById('expo-start').value;
  var end   = document.getElementById('expo-end').value;
  if (!name || !start || !end) { toast('Completa todos los campos obligatorios', 'error'); return; }
  if (start > end) { toast('La fecha inicio no puede ser mayor al fin', 'error'); return; }

  var localId = Date.now();
  var expoLocal = { id: localId, name: name, desc: desc, start: start, end: end, works: [], status: 'activa' };
  myExposData.unshift(expoLocal);
  save('myexpos', myExposData);

  // Sincronizar con backend
  if (typeof ktorCreateExpo === 'function') {
    ktorCreateExpo(name, desc, start, end).then(function(data) {
      var backendId = data.id || (data.data && data.data.id);
      if (backendId) {
        var idx = myExposData.findIndex(function(e){ return e.id === localId; });
        if (idx >= 0) { myExposData[idx].id = backendId; myExposData[idx].backendId = backendId; }
        save('myexpos', myExposData);
        renderExpos();
      }
    }).catch(function(e){ console.warn('Error creando expo en backend:', e); });
  }

  toast('Exposición "'+name+'" creada 📅', 'success');
  closeModal('expo-modal');
  ['expo-name','expo-desc','expo-start','expo-end'].forEach(function(id){ document.getElementById(id).value=''; });
  renderExpos();
  renderDashboard();
}

function openEditExpo(id) {
  var e = myExposData.find(function(x){ return x.id === id; });
  if (!e) return;
  document.getElementById('edit-expo-id').value    = id;
  document.getElementById('edit-expo-name').value  = e.name;
  document.getElementById('edit-expo-desc').value  = e.desc;
  document.getElementById('edit-expo-start').value = e.start;
  document.getElementById('edit-expo-end').value   = e.end;
  openModal('edit-expo-modal');
}

function saveEditExpo() {
  var id    = parseInt(document.getElementById('edit-expo-id').value);
  var name  = document.getElementById('edit-expo-name').value.trim();
  var desc  = document.getElementById('edit-expo-desc').value.trim();
  var start = document.getElementById('edit-expo-start').value;
  var end   = document.getElementById('edit-expo-end').value;
  if (!name) { toast('El nombre es obligatorio', 'error'); return; }
  var e = myExposData.find(function(x){ return x.id === id; });
  if (e) { e.name=name; e.desc=desc; e.start=start; e.end=end; save('myexpos', myExposData); }

  // Sincronizar con backend
  var backendId = e ? (e.backendId || e.id) : id;
  if (typeof ktorUpdateExpo === 'function' && backendId) {
    ktorUpdateExpo(backendId, name, desc, start, end)
      .catch(function(err){ console.warn('Error actualizando expo en backend:', err); });
  }

  toast('Exposición actualizada ✓', 'success');
  closeModal('edit-expo-modal');
  renderExpos();
}

function deleteExpo(id) {
  if (!confirm('¿Eliminar esta exposición?')) return;
  var expo = myExposData.find(function(e){ return e.id === id; });
  myExposData = myExposData.filter(function(e){ return e.id !== id; });
  save('myexpos', myExposData);

  // Sincronizar con backend
  var backendId = expo ? (expo.backendId || expo.id) : id;
  if (typeof ktorDeleteExpo === 'function' && backendId) {
    ktorDeleteExpo(backendId)
      .catch(function(err){ console.warn('Error eliminando expo en backend:', err); });
  }

  toast('Exposición eliminada', 'error');
  renderExpos();
  renderDashboard();
}

function openExpoStats(id) {
  var e = myExposData.find(function(x){ return x.id === id; });
  if (!e) return;
  var views  = Math.floor(Math.random()*500+50);
  var unique = Math.floor(views*0.7);
  document.getElementById('expostats-name').textContent = e.name;
  document.getElementById('expostats-body').innerHTML =
    '<div class="stats-row" style="margin-bottom:0">' +
    '<div class="stat-box"><div class="stat-box-num">'+views+'</div><div class="stat-box-label">Visitas</div></div>' +
    '<div class="stat-box"><div class="stat-box-num">'+unique+'</div><div class="stat-box-label">Visitantes únicos</div></div>' +
    '<div class="stat-box"><div class="stat-box-num">'+((e.works||[]).length)+'</div><div class="stat-box-label">Obras</div></div>' +
    '</div>';
  openModal('expostats-modal');
}

/* ============================================================
   USUARIOS — Admin CRUD
   ============================================================ */
function renderUsers(filter) {
  var list = filter
    ? usersData.filter(function(u){ return u.name.toLowerCase().indexOf(filter.toLowerCase())>-1 || u.email.toLowerCase().indexOf(filter.toLowerCase())>-1; })
    : usersData;
  document.getElementById('users-tbody').innerHTML = list.length
    ? list.map(function(u){
        return '<tr>' +
          '<td><strong>'+u.name+'</strong></td>' +
          '<td style="color:var(--muted)">'+u.email+'</td>' +
          '<td><select onchange="changeRole('+u.id+',this.value)" '+(u.id===5?'disabled':'')+'>' +
          '<option value="Usuario" '+(u.role==='Usuario'||u.role==='USER'||u.role==='Coleccionista'?'selected':'')+'>Usuario</option>' +
          '<option value="Artista" '+(u.role==='Artista'||u.role==='ARTIST'?'selected':'')+'>Artista</option>' +
          '<option value="Admin"   '+(u.role==='Admin'||u.role==='ADMIN'||u.role==='Administrador'?'selected':'')+'>Admin</option>' +
          '</select></td>' +
          '<td><span class="badge '+(u.status==='Activo'?'badge-new':'badge-featured')+'">'+u.status+'</span></td>' +
          '<td style="display:flex;gap:8px;flex-wrap:wrap">' +
          '<button class="btn '+(u.status==='Activo'?'btn-danger':'btn-outline')+' btn-sm" onclick="toggleBan('+u.id+')">'+(u.status==='Activo'?'🚫 Banear':'✅ Desbanear')+'</button>' +
          '<button class="btn btn-ghost btn-sm" onclick="viewUserDetail('+u.id+')">👁️ Ver</button>' +
          '</td></tr>';
      }).join('')
    : '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:30px">Sin resultados</td></tr>';
}

function changeRole(id, newRole) {
  var u = usersData.find(function(x){ return x.id === id; });
  if (!u) return;
  u.role = newRole;
  save('users', usersData);

  var roleMap   = { 'Usuario': 'USER', 'Artista': 'ARTIST', 'Admin': 'ADMIN' };
  var backendRole = roleMap[newRole] || 'USER';
  var base  = window.KTOR_BASE_URL || 'http://localhost:8080';

  // Obtener token de múltiples fuentes
  var token = null;
  try { token = localStorage.getItem('ktor_token'); } catch(e) {}
  if (!token && typeof ktorApi !== 'undefined') {
    try { token = ktorApi.token(); } catch(e) {}
  }

  if (!token) {
    toast('⚠️ No hay sesión activa con el backend. Cierra sesión y vuelve a entrar.', 'error');
    return;
  }

  fetch(base + '/users/' + id + '/role', {
    method: 'PUT',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ role: backendRole })
  }).then(function(res) {
    if (res.ok) {
      toast('✅ Rol de ' + u.name + ' cambiado a ' + newRole + '. Se refleja en la móvil al reiniciar sesión.', 'success');
    } else {
      return res.json().then(function(d){
        toast('❌ Error: ' + (d.message || 'No se pudo cambiar el rol'), 'error');
      });
    }
  }).catch(function(e){
    toast('❌ Error de conexión: ' + e.message, 'error');
  });
}

function toggleBan(id) {
  var u = usersData.find(function(x){ return x.id === id; });
  if (!u) return;
  if (u.id === 5) { toast('No puedes banear al administrador principal', 'error'); return; }
  u.status = u.status === 'Activo' ? 'Baneado' : 'Activo';
  save('users', usersData);
  toast(u.name + ' ' + (u.status === 'Baneado' ? 'baneado' : 'desbaneado') + ' ✓',
    u.status === 'Baneado' ? 'error' : 'success');

  // Sincronizar con backend
  var _banToken = null;
  try { _banToken = localStorage.getItem('ktor_token'); } catch(e) {}
  if (!_banToken && typeof ktorApi !== 'undefined') { try { _banToken = ktorApi.token(); } catch(e) {} }
  if (_banToken) {
    fetch((window.KTOR_BASE_URL || 'http://localhost:8080') + '/users/' + id + '/status', {
      method: 'PUT',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + _banToken
      },
      body: JSON.stringify({ status: u.status })
    }).catch(function(e){ console.warn('Error actualizando estado en backend:', e); });
  }

  renderUsers();
  renderDashboard();
}

function viewUserDetail(id) {
  var u = usersData.find(function(x){ return x.id === id; });
  if (!u) return;
  document.getElementById('user-detail-body').innerHTML =
    '<div style="display:flex;align-items:center;gap:18px;margin-bottom:24px">' +
    '<div style="width:60px;height:60px;border-radius:50%;background:var(--gradient);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;color:#fff">'+u.name[0]+'</div>' +
    '<div><h4 style="font-size:1.1rem">'+u.name+'</h4><p style="color:var(--muted);font-size:0.85rem">'+u.email+'</p></div></div>' +
    '<div class="stats-row" style="margin-bottom:0">' +
    '<div class="stat-box"><div class="stat-box-num">'+u.role+'</div><div class="stat-box-label">Rol</div></div>' +
    '<div class="stat-box"><div class="stat-box-num">'+u.status+'</div><div class="stat-box-label">Estado</div></div>' +
    '</div>';
  openModal('user-detail-modal');
}

function filterUsers(val) { renderUsers(val); }

/* ============================================================
   SOLICITUDES — Admin
   ============================================================ */
function renderRequests() {
  var wrap = document.getElementById('requests-list');
  if (!wrap) return;

  // Si no hay datos locales y hay backend, intentar cargar
  if (!requestsData.length && typeof ktorGetRequests === 'function') {
    wrap.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)">⏳ Cargando solicitudes...</div>';
    ktorGetRequests().then(function(data) {
      if (data && data.length > 0) {
        requestsData = data.map(function(item) {
          return {
            id:        item.id,
            backendId: item.id,
            name:      item.name,
            email:     item.email,
            desc:      item.description || '',
            web:       item.website || '',
            obraTitle: '',
            obraImg:   '',
            date:      item.createdAt ? new Date(item.createdAt).toLocaleDateString('es-MX') : '',
            status:    item.status || 'pendiente'
          };
        });
        save('requests', requestsData);
      }
      renderRequests();
    }).catch(function() { renderRequests(); });
    return;
  }

  var pending   = requestsData.filter(function(r){ return r.status === 'pendiente'; });
  var processed = requestsData.filter(function(r){ return r.status !== 'pendiente'; });

  if (!requestsData.length) {
    wrap.innerHTML = '<div class="empty-state"><div class="icon">📋</div><h4>No hay solicitudes</h4><p>Cuando un coleccionista quiera ser artista aparecerá aquí</p></div>';
    return;
  }
  wrap.innerHTML =
    (pending.length ? '<h3 style="font-size:1rem;font-weight:700;color:var(--accent);margin-bottom:16px;text-transform:uppercase;letter-spacing:1px">⏳ Pendientes ('+pending.length+')</h3>' : '') +
    pending.map(buildRequestCard).join('') +
    (processed.length ? '<h3 style="font-size:1rem;font-weight:700;color:var(--muted);margin:28px 0 16px;text-transform:uppercase;letter-spacing:1px">✓ Procesadas</h3>' : '') +
    processed.map(buildRequestCard).join('');
}

function buildRequestCard(r) {
  return '<div class="expo-item">' +
    '<div class="expo-item-header">' +
    '<div><h3>'+r.name+'</h3><div class="expo-dates">📧 '+r.email+' · 🗓️ '+r.date+'</div></div>' +
    '<span class="badge '+(r.status==='pendiente'?'badge-featured':r.status==='aprobada'?'badge-new':'badge-artist')+'">'+r.status+'</span>' +
    '</div>' +
    '<p style="color:var(--muted);font-size:0.85rem;margin:10px 0">'+r.desc+'</p>' +
    (r.web?'<a href="'+r.web+'" target="_blank" style="color:var(--accent);font-size:0.82rem">🌐 '+r.web+'</a>':'') +
    (r.status==='pendiente'?
      '<div class="expo-actions">' +
      '<button class="btn btn-primary btn-sm" onclick="processRequest('+r.id+',\'aprobada\')">✅ Aprobar</button>' +
      '<button class="btn btn-danger btn-sm"  onclick="processRequest('+r.id+',\'rechazada\')">❌ Rechazar</button>' +
      '</div>' : '') +
    '</div>';
}

function processRequest(id, status) {
  var r = requestsData.find(function(x){ return x.id === id; });
  if (!r) return;
  r.status = status;

  if (status === 'aprobada') {
    // Pasar a emergentes con la obra que subió el usuario
    var yaEmerge = emergingData.find(function(e){
      return e.artist === r.name || e.artistEmail === r.email;
    });
    if (!yaEmerge) {
      emergingData.push({
        id:          'em_' + Date.now(),
        title:       r.obraTitle || ('Obra de ' + r.name),
        img:         r.obraImg   || 'assets/obra13.png',
        artist:      r.name,
        artistEmail: r.email,
        bio:         r.desc || 'Artista emergente aprobado.',
        likes:       0,
        promoted:    false
      });
      save('emerging', emergingData);
    }
    toast('✅ ' + r.name + ' aprobado — su obra "' + (r.obraTitle || 'Sin título') + '" ya aparece en Emergentes.', 'success');
  } else {
    toast('Solicitud de ' + r.name + ' rechazada ❌', 'error');
  }

  save('requests', requestsData);

  // Sincronizar con backend usando backendId o id
  var backendId = r.backendId || r.id;
  if (typeof ktorProcessRequest === 'function' && backendId) {
    var backendStatus = status === 'aprobada' ? 'aprobada' : 'rechazada';
    ktorProcessRequest(backendId, backendStatus)
      .then(function() {
        console.log('Solicitud procesada en backend');
      })
      .catch(function(e) {
        console.warn('Error procesando en backend:', e);
      });
  }

  renderRequests();
  renderDashboard();
  if (typeof renderEmerging === 'function') renderEmerging();
}

function submitArtistReq() {
  var desc      = document.getElementById('req-desc').value.trim();
  var web       = document.getElementById('req-web').value.trim();
  var obraTitle = document.getElementById('req-obra-title').value.trim();
  var fileInput = document.getElementById('req-obra-img');
  var file      = fileInput && fileInput.files && fileInput.files[0];

  if (!desc)      { toast('Describe tu estilo artístico', 'error'); return; }
  if (!obraTitle) { toast('Escribe el título de tu obra', 'error'); return; }
  if (!file)      { toast('Sube una imagen de tu obra', 'error'); return; }

  var reader = new FileReader();
  reader.onload = function(e) {
    var imgData = e.target.result;

    // Guardar localmente primero
    var reqLocal = {
      id:        Date.now(),
      name:      currentUser.name,
      email:     currentUser.email || '',
      desc:      desc,
      web:       web,
      obraTitle: obraTitle,
      obraImg:   imgData,
      date:      new Date().toLocaleDateString('es-MX'),
      status:    'pendiente'
    };
    requestsData.push(reqLocal);
    save('requests', requestsData);

    // Enviar al backend
    if (typeof ktorSubmitRequest === 'function') {
      ktorSubmitRequest(
        currentUser.name,
        currentUser.email || '',
        desc + (obraTitle ? ' | Obra: ' + obraTitle : ''),
        web
      ).then(function(data) {
        // Actualizar el id local con el del backend
        if (data && (data.id || (data.data && data.data.id))) {
          var backendId = data.id || data.data.id;
          var idx = requestsData.findIndex(function(r){ return r.id === reqLocal.id; });
          if (idx >= 0) {
            requestsData[idx].id        = backendId;
            requestsData[idx].backendId = backendId;
            save('requests', requestsData);
          }
        }
      }).catch(function(e) {
        console.warn('Error enviando al backend, guardado solo localmente:', e);
      });
    }

    toast('✅ Solicitud enviada. El admin la revisará pronto 📩', 'success');
    closeModal('artist-req-modal');
    document.getElementById('req-desc').value       = '';
    document.getElementById('req-web').value        = '';
    document.getElementById('req-obra-title').value = '';
    fileInput.value = '';
    var preview = document.getElementById('req-obra-preview');
    if (preview) preview.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   ESTADÍSTICAS — Admin
   ============================================================ */
/* ============================================================
   MENSAJES — Vista para todos los roles
   ============================================================ */
function showMsgTab(tab) {
  currentMsgTab = tab;
  var inboxBtn = document.getElementById('msg-tab-inbox');
  var sentBtn  = document.getElementById('msg-tab-sent');
  if (inboxBtn) { inboxBtn.className = tab === 'inbox' ? 'btn btn-outline btn-sm' : 'btn btn-ghost btn-sm'; inboxBtn.style.fontWeight = tab === 'inbox' ? '700' : '400'; }
  if (sentBtn)  { sentBtn.className  = tab === 'sent'  ? 'btn btn-outline btn-sm' : 'btn btn-ghost btn-sm'; sentBtn.style.fontWeight  = tab === 'sent'  ? '700' : '400'; }
  renderMessages();
}

function renderMessages() {
  var list = document.getElementById('messages-list');
  if (!list) return;
  var msgs = currentMsgTab === 'inbox' ? messagesData.inbox : messagesData.sent;
  if (!msgs || msgs.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="icon">✉️</div>' +
      '<h4>' + (currentMsgTab === 'inbox' ? 'No tienes mensajes recibidos' : 'No has enviado mensajes') + '</h4>' +
      '<p>' + (currentMsgTab === 'inbox' ? 'Cuando alguien te escriba sobre una obra aparecerá aquí' : 'Tus mensajes enviados sobre obras aparecerán aquí') + '</p>' +
      '</div>';
    return;
  }
  list.innerHTML = msgs.map(function(m) {
    var isInbox = currentMsgTab === 'inbox';
    var other   = isInbox ? (m.senderName || m.sender || 'Usuario') : (m.receiverName || m.receiver || 'Artista');
    var artwork  = m.artworkTitle || m.obra || '';
    var date     = m.createdAt ? new Date(m.createdAt).toLocaleDateString('es-MX') : (m.date || '');
    return '<div class="expo-item" style="margin-bottom:12px">' +
      '<div class="expo-item-header">' +
      '<div style="display:flex;align-items:center;gap:12px">' +
      '<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:#fff;font-weight:700;flex-shrink:0">' +
      (other[0] || '?').toUpperCase() + '</div>' +
      '<div>' +
      '<div style="font-weight:700">' + (isInbox ? 'De: ' : 'Para: ') + other + '</div>' +
      (artwork ? '<div style="font-size:0.8rem;color:var(--accent)">🖼️ ' + artwork + '</div>' : '') +
      '</div></div>' +
      '<div style="font-size:0.78rem;color:var(--muted)">' + date + '</div>' +
      '</div>' +
      '<p style="margin:10px 0;color:var(--text);line-height:1.5">' + (m.content || m.text || '') + '</p>' +
      '<div style="display:flex;gap:8px;margin-top:10px">' +
      '<button class="btn btn-outline btn-sm" onclick="openChatFromMessage(' + JSON.stringify(m).replace(/"/g,'&quot;') + ')">💬 ' + (isInbox ? 'Ver conversación y responder' : 'Ver conversación') + '</button>' +
      '</div>' +
      '</div>';
  }).join('');
}

function replyToMessage(m) {
  closeModal && closeModal('any');
  openChatFromMessage(m);
}

function updateMessageBadge(count) {
  var badge = document.getElementById('nav-msg-badge');
  if (!badge) return;
  if (count > 0) { badge.style.display = 'inline'; badge.textContent = count; }
  else { badge.style.display = 'none'; }
}

var statsPeriodDays = 30;

function setStatsPeriod(days) {
  statsPeriodDays = days;
  ['7','30','90','365'].forEach(function(d){
    var btn = document.getElementById('period-'+d);
    if (!btn) return;
    btn.className = 'btn btn-sm ' + (parseInt(d) === days ? 'btn-primary' : 'btn-outline');
  });
  renderStats();
}

function renderStats() {
  // Tarjetas resumen
  document.getElementById('stat-users').textContent     = usersData.length;
  document.getElementById('stat-artworks').textContent  = artworks.length;
  document.getElementById('stat-expos').textContent     = myExposData.length;
  document.getElementById('stat-reactions').textContent = artworks.reduce(function(s,a){return s+a.likes;},0);

  // Usuarios por período
  var now = new Date();
  var cutoff = new Date(now.getTime() - statsPeriodDays * 24 * 60 * 60 * 1000);
  var filtered = usersData.filter(function(u){
    if (!u.createdAt) return statsPeriodDays >= 365; // sin fecha = antiguos
    return new Date(u.createdAt) >= cutoff;
  });
  var usersTbody = document.getElementById('stats-users-tbody');
  if (usersTbody) {
    usersTbody.innerHTML = filtered.length
      ? filtered.map(function(u){
          return '<tr>' +
            '<td style="color:var(--muted);font-size:0.8rem">' + (u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-MX') : 'Anterior') + '</td>' +
            '<td><strong>'+u.name+'</strong></td>' +
            '<td style="color:var(--muted)">'+u.email+'</td>' +
            '<td><span class="badge '+(u.role==='Admin'?'badge-featured':u.role==='Artista'?'badge-new':'badge-artist')+'">'+u.role+'</span></td>' +
            '</tr>';
        }).join('')
      : '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:24px">Sin registros en este período</td></tr>';
  }

  // Top artistas con más obras
  var artistsWithWorks = usersData.filter(function(u){ return u.role === 'Artista'; }).map(function(u){
    var worksCount = artworks.filter(function(a){ return a.artist === u.name; }).length;
    var reactions  = artworks.filter(function(a){ return a.artist === u.name; }).reduce(function(s,a){ return s+(a.likes||0); },0);
    return { name: u.name, obras: worksCount, reacciones: reactions };
  }).concat(
    artistsData.filter(function(ad){
      return !usersData.find(function(u){ return u.name === ad.name; });
    }).map(function(ad){ return { name: ad.name, obras: ad.obras, reacciones: ad.reacciones }; })
  ).sort(function(a,b){ return b.obras - a.obras; });

  var topTbody = document.getElementById('top-tbody');
  if (topTbody) {
    topTbody.innerHTML = artistsWithWorks.length
      ? artistsWithWorks.map(function(a,i){
          return '<tr>' +
            '<td style="color:var(--accent);font-weight:700">#'+(i+1)+'</td>' +
            '<td><strong>'+a.name+'</strong></td>' +
            '<td>'+a.obras+'</td>' +
            '<td style="color:#00e5a0;font-weight:600">'+a.reacciones+'</td>' +
            '<td><button class="btn btn-ghost btn-sm" onclick="filterGalleryByArtist(&quot;'+a.name+'&quot;)">Ver obras</button></td>' +
            '</tr>';
        }).join('')
      : '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:24px">Sin artistas</td></tr>';
  }

  // Gestión de obras (admin puede eliminar)
  var artworksTbody = document.getElementById('stats-artworks-tbody');
  if (artworksTbody) {
    artworksTbody.innerHTML = artworks.length
      ? artworks.map(function(a){
          return '<tr>' +
            '<td><strong>'+a.title+'</strong></td>' +
            '<td style="color:var(--muted)">'+a.artist+'</td>' +
            '<td><span class="badge badge-artist">'+a.cat+'</span></td>' +
            '<td style="color:#00e5a0">'+a.likes+'</td>' +
            '<td><button class="btn btn-danger btn-sm" onclick="adminDeleteArtwork('+a.id+')">🗑️ Eliminar</button></td>' +
            '</tr>';
        }).join('')
      : '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:24px">Sin obras</td></tr>';
  }
}

function filterGalleryByArtist(name) {
  galleryControls.artist = name;
  goTo('gallery');
}

function adminDeleteArtwork(id) {
  if (!confirm('¿Eliminar esta obra? No se puede deshacer.')) return;
  artworks = artworks.filter(function(a){ return a.id !== id; });
  save('artworks', artworks);
  // También eliminar del backend si hay token
  if (typeof ktorApi !== 'undefined' && ktorApi.token()) {
    fetch((window.KTOR_BASE_URL || 'http://localhost:8080') + '/artworks/' + id, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + ktorApi.token() }
    }).catch(function(e){ console.warn('Error eliminando del backend:', e); });
  }
  toast('Obra eliminada ✓', 'success');
  renderStats();
  renderGallery();
  renderDashboard();
}

/* ============================================================
   PERFIL
   ============================================================ */
function renderProfileView() {
  if (!currentUser) return;

  // Datos comunes
  document.getElementById('profile-name').textContent  = currentUser.name;
  document.getElementById('profile-role').textContent  = currentUser.role;
  document.getElementById('profile-bio').textContent   = currentUser.bio   || 'Sin biografía';
  document.getElementById('profile-email').textContent = currentUser.email || 'Sin correo registrado';
  var av = document.getElementById('profile-av');
  av.innerHTML = currentUser.avatar
    ? '<img src="'+currentUser.avatar+'" alt="">'
    : currentUser.name[0].toUpperCase();

  // Subtítulo personalizado
  var subs = { user:'Tu espacio de coleccionista', artist:'Tu portafolio artístico', admin:'Panel del administrador' };
  document.getElementById('profile-subtitle').textContent = subs[currentUser.id] || 'Gestiona tu información';

  // Sección extra según rol
  var section = document.getElementById('profile-role-section');

  if (currentUser.id === 'user') {
    /* ---- COLECCIONISTA: favoritos y artistas seguidos ---- */
    var favWorks   = artworks.filter(function(a){ return likedArtworks.has(a.id); });
    var favArtList = artistsData.filter(function(a){ return favArtists.has(a.id); });

    section.innerHTML =
      /* Stats rápidos */
      '<div style="margin-top:40px">' +
      '<h3 class="profile-section-title">📊 Tu actividad</h3>' +
      '<div class="stats-row">' +
      '<div class="stat-box"><div class="stat-box-num">'+favWorks.length+'</div><div class="stat-box-label">Obras favoritas</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+favArtList.length+'</div><div class="stat-box-label">Artistas siguiendo</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+likedEmerging.size+'</div><div class="stat-box-label">Votos emergentes</div></div>' +
      '</div>' +

      /* Obras favoritas */
      '<h3 class="profile-section-title" style="margin-top:36px">❤️ Mis obras favoritas</h3>' +
      (favWorks.length
        ? '<div class="cards-grid">'+favWorks.slice(0,6).map(function(a,i){ return buildArtCard(a,i,favWorks); }).join('')+'</div>'
        : '<div class="empty-state"><div class="icon">🤍</div><h4>Aún no tienes favoritos</h4><p>Explora la galería y dale ❤️ a las obras que te gusten</p><button class="btn btn-outline" style="margin-top:12px" onclick="goTo(\'gallery\')">Ir a la Galería</button></div>'
      ) +

      /* Artistas seguidos */
      '<h3 class="profile-section-title" style="margin-top:36px">🎨 Artistas que sigo</h3>' +
      (favArtList.length
        ? '<div class="cards-grid">'+favArtList.map(function(a){
            return '<div class="artist-card">' +
              '<div class="artist-av"><img src="'+a.av+'" alt="'+a.name+'" onerror="this.parentElement.textContent=\''+a.name[0]+'\'"></div>' +
              '<h3>'+a.name+'</h3><p class="role-tag">'+a.role+'</p><p>'+a.bio+'</p>' +
              '<button class="btn btn-danger btn-sm" style="margin-top:12px" onclick="toggleFollowArtist(\''+a.id+'\',this)">Dejar de seguir</button>' +
              '</div>';
          }).join('')+'</div>'
        : '<div class="empty-state"><div class="icon">🎨</div><h4>No sigues a ningún artista</h4><p>Ve a la sección Artistas y pulsa "+ Seguir"</p><button class="btn btn-outline" style="margin-top:12px" onclick="goTo(\'artists\')">Ver Artistas</button></div>'
      ) +
      '</div>';

  } else if (currentUser.id === 'artist') {
    /* ---- ARTISTA: portafolio y exposiciones ---- */
    var totalViews    = myWorksData.reduce(function(s,w){return s+w.views;},0);
    var totalReact    = myWorksData.reduce(function(s,w){return s+w.reactions;},0);
    var topWork       = myWorksData.length ? [...myWorksData].sort(function(a,b){return b.reactions-a.reactions;})[0] : null;
    var activeExpos   = myExposData.filter(function(e){return e.status==='activa';});

    section.innerHTML =
      /* Stats */
      '<div style="margin-top:40px">' +
      '<h3 class="profile-section-title">📊 Estadísticas de tu portafolio</h3>' +
      '<div class="stats-row">' +
      '<div class="stat-box"><div class="stat-box-num">'+myWorksData.length+'</div><div class="stat-box-label">Obras publicadas</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+totalViews+'</div><div class="stat-box-label">Vistas totales</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+totalReact+'</div><div class="stat-box-label">Reacciones</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+activeExpos.length+'</div><div class="stat-box-label">Exposiciones activas</div></div>' +
      '</div>' +

      /* Obra más popular */
      (topWork
        ? '<h3 class="profile-section-title" style="margin-top:36px">🏆 Tu obra más popular</h3>' +
          '<div class="art-card" style="max-width:360px;cursor:default">' +
          '<div class="art-card-img-wrap"><img src="'+topWork.img+'" alt="'+topWork.title+'"></div>' +
          '<div class="art-card-body">' +
          '<div class="art-card-title">'+topWork.title+'</div>' +
          '<div class="art-card-desc" style="margin-top:6px">👁️ '+topWork.views+' vistas · ❤️ '+topWork.reactions+' reacciones</div>' +
          '</div></div>'
        : '') +

      /* Todas las obras */
      '<h3 class="profile-section-title" style="margin-top:36px">🖼️ Mis obras <span style="font-size:0.85rem;color:var(--muted);font-weight:400">('+myWorksData.length+')</span></h3>' +
      (myWorksData.length
        ? '<div class="cards-grid">'+myWorksData.map(function(w){
            return '<div class="art-card" style="cursor:default">' +
              '<div class="art-card-img-wrap"><img src="'+w.img+'" alt="'+w.title+'" loading="lazy"></div>' +
              '<div class="art-card-body">' +
              '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">' +
              '<div class="art-card-title">'+w.title+'</div><span class="badge badge-artist">'+w.cat+'</span></div>' +
              '<div class="art-card-desc">'+w.desc+'</div>' +
              '<div style="font-size:0.78rem;color:var(--muted);margin-top:8px">👁️ '+w.views+' · ❤️ '+w.reactions+'</div>' +
              '</div></div>';
          }).join('')+'</div>'
        : '<div class="empty-state"><div class="icon">🎨</div><h4>Aún no tienes obras</h4><button class="btn btn-outline" style="margin-top:12px" onclick="openModal(\'upload-modal\')">Subir primera obra</button></div>'
      ) +

      /* Exposiciones */
      '<h3 class="profile-section-title" style="margin-top:36px">📅 Mis exposiciones <span style="font-size:0.85rem;color:var(--muted);font-weight:400">('+myExposData.length+')</span></h3>' +
      (myExposData.length
        ? myExposData.map(function(e){
            return '<div class="expo-item">' +
              '<div class="expo-item-header">' +
              '<div><h3>'+e.name+'</h3><div class="expo-dates">📅 '+e.start+' → '+e.end+'</div></div>' +
              '<span class="badge '+(e.status==='activa'?'badge-new':'badge-artist')+'">'+e.status+'</span>' +
              '</div><p style="color:var(--muted);font-size:0.85rem;margin-top:8px">'+e.desc+'</p></div>';
          }).join('')
        : '<div class="empty-state"><div class="icon">📅</div><h4>No tienes exposiciones</h4><button class="btn btn-outline" style="margin-top:12px" onclick="openModal(\'expo-modal\')">Crear exposición</button></div>'
      ) +
      '</div>';

  } else if (currentUser.id === 'admin') {
    /* ---- ADMIN: resumen del sistema ---- */
    var pendingReqs  = requestsData.filter(function(r){return r.status==='pendiente';});
    var bannedUsers  = usersData.filter(function(u){return u.status==='Baneado';});
    var totalLikesAll= artworks.reduce(function(s,a){return s+a.likes;},0);

    section.innerHTML =
      '<div style="margin-top:40px">' +
      '<h3 class="profile-section-title">📊 Resumen del sistema</h3>' +
      '<div class="stats-row">' +
      '<div class="stat-box"><div class="stat-box-num">'+usersData.length+'</div><div class="stat-box-label">Usuarios registrados</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+artworks.length+'</div><div class="stat-box-label">Obras en galería</div></div>' +
      '<div class="stat-box"><div class="stat-box-num">'+totalLikesAll+'</div><div class="stat-box-label">Total reacciones</div></div>' +
      '<div class="stat-box"><div class="stat-box-num" style="color:var(--accent)">'+pendingReqs.length+'</div><div class="stat-box-label">Solicitudes pendientes</div></div>' +
      '</div>' +

      /* Solicitudes pendientes */
      '<h3 class="profile-section-title" style="margin-top:36px">📋 Solicitudes pendientes' +
      (pendingReqs.length ? ' <span class="badge badge-featured" style="font-size:0.7rem">'+pendingReqs.length+'</span>' : '') +
      '</h3>' +
      (pendingReqs.length
        ? pendingReqs.map(buildRequestCard).join('')
        : '<div class="empty-state"><div class="icon">✅</div><h4>No hay solicitudes pendientes</h4></div>'
      ) +

      /* Usuarios baneados */
      '<h3 class="profile-section-title" style="margin-top:36px">🚫 Usuarios baneados' +
      (bannedUsers.length ? ' <span class="badge badge-featured" style="font-size:0.7rem">'+bannedUsers.length+'</span>' : '') +
      '</h3>' +
      (bannedUsers.length
        ? '<div class="table-wrap"><table class="modern-table"><thead><tr><th>Nombre</th><th>Correo</th><th>Acción</th></tr></thead><tbody>' +
          bannedUsers.map(function(u){
            return '<tr>' +
              '<td><strong>'+u.name+'</strong></td>' +
              '<td style="color:var(--muted)">'+u.email+'</td>' +
              '<td><button class="btn btn-outline btn-sm" onclick="toggleBan('+u.id+');renderProfileView()">✅ Desbanear</button></td>' +
              '</tr>';
          }).join('') +
          '</tbody></table></div>'
        : '<div class="empty-state"><div class="icon">🙌</div><h4>No hay usuarios baneados</h4></div>'
      ) +

      /* Accesos rápidos */
      '<h3 class="profile-section-title" style="margin-top:36px">⚡ Acciones rápidas</h3>' +
      '<div class="dash-actions">' +
      '<button class="btn btn-primary" onclick="goTo(\'users\')">👥 Gestionar Usuarios</button>' +
      '<button class="btn btn-outline" onclick="goTo(\'requests\')">📋 Ver Solicitudes</button>' +
      '<button class="btn btn-outline" onclick="goTo(\'stats\')">📊 Estadísticas</button>' +
      '</div>' +
      '</div>';
  }
}

function toggleEdit(show) {
  document.getElementById('profile-edit').classList.toggle('hidden', !show);
  document.getElementById('profile-display').classList.toggle('hidden', show);
  if (show) {
    document.getElementById('ed-name').value   = currentUser.name;
    document.getElementById('ed-bio').value    = currentUser.bio   || '';
    document.getElementById('ed-email').value  = currentUser.email || '';
    document.getElementById('ed-avatar').value = currentUser.avatar|| '';
  }
}

function saveProfile() {
  var name   = document.getElementById('ed-name').value.trim();
  var bio    = document.getElementById('ed-bio').value.trim();
  var email  = document.getElementById('ed-email').value.trim();
  var avatar = document.getElementById('ed-avatar').value.trim();
  if (!name) { toast('El nombre no puede estar vacío', 'error'); return; }
  currentUser.name   = name;
  currentUser.bio    = bio;
  currentUser.email  = email;
  currentUser.avatar = avatar;
  storeUser();
  updateNavUser();
  renderProfileView();
  toggleEdit(false);
  toast('Perfil actualizado ✓', 'success');
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openLightbox(i, cardEl) {
  if (cardEl && cardEl.dataset && cardEl.dataset.list) {
    try { lightboxItems = JSON.parse(cardEl.dataset.list.replace(/&quot;/g,'"')); } catch(e) {}
  }
  lightboxIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function openLightboxDirect(i) {
  lightboxIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  var a = lightboxItems[lightboxIndex];
  if (!a) return;
  document.getElementById('lb-img').src           = a.img;
  document.getElementById('lb-title').textContent = a.title;
  document.getElementById('lb-desc').textContent  = (a.desc||'') + (a.artist?' — Por '+a.artist:'');
}
function closeLightbox(e) { if (e.target === document.getElementById('lightbox')) closeLightboxBtn(); }
function closeLightboxBtn() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lightboxNav(dir) {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  var img = document.getElementById('lb-img');
  img.style.opacity = '0.3';
  setTimeout(function(){ updateLightbox(); img.style.opacity='1'; }, 150);
}

/* ============================================================
   MODALES
   ============================================================ */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
function previewImg(input, containerId) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e){ document.getElementById(containerId).innerHTML = '<img src="'+e.target.result+'" alt="preview">'; };
  reader.readAsDataURL(file);
}

function previewReqImg(input) {
  var file = input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var preview = document.getElementById('req-obra-preview');
    var img = document.getElementById('req-obra-img-preview');
    if (preview && img) {
      img.src = e.target.result;
      preview.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   CHAT — Me interesa esta obra
   ============================================================ */
/* ============================================================
   CHAT / CONVERSACIONES — Sistema completo con backend
   ============================================================ */
var chatHistory = {};  // hilo local en memoria por sesión

// Abrir chat desde galería (coleccionista → artista)
function openChat(artist, obra) {
  if (!currentUser) { toast('Inicia sesión para contactar al artista', 'error'); return; }
  if (currentUser.name === artist) { toast('No puedes escribirte a ti mismo', 'error'); return; }

  var key = artist + '|' + (obra || '');

  // Buscar IDs reales
  var receiverId = 0;
  var artworkId  = 0;
  var artistUser = usersData.find(function(u){ return u.name === artist || u.name.toLowerCase() === artist.toLowerCase(); });
  if (artistUser) receiverId = artistUser.id;
  var artworkObj = artworks.find(function(a){ return a.title === obra; });
  if (artworkObj) artworkId = artworkObj.id;

  // Cargar historial guardado
  var saved = load('chat_' + key, []);
  chatHistory[key] = saved;

  document.getElementById('chat-artist').textContent    = artist;
  document.getElementById('chat-obra').textContent      = obra || '';
  document.getElementById('chat-key').value             = key;
  document.getElementById('chat-receiver-id').value     = receiverId;
  document.getElementById('chat-artwork-id').value      = artworkId;
  document.getElementById('chat-input').value           = '';
  document.getElementById('chat-av-letter').textContent = (artist[0] || '?').toUpperCase();

  // Cargar mensajes del backend + locales
  renderChatMessages(key);
  openModal('chat-modal');
  setTimeout(function(){ document.getElementById('chat-input').focus(); }, 200);

  // Intentar cargar historial del backend
  if (typeof messagesData !== 'undefined') {
    var allMsgs = (messagesData.inbox || []).concat(messagesData.sent || []);
    var related = allMsgs.filter(function(m){
      return (m.senderName === artist || m.receiverName === artist) &&
             (!obra || (m.artworkTitle || '') === obra);
    });
    if (related.length > 0) {
      chatHistory[key] = related.map(function(m) {
        var isMe = m.senderName === currentUser.name || m.senderId === (currentUser.dbId || -1);
        return {
          from:    isMe ? currentUser.name : (m.senderName || artist),
          text:    m.content || m.text || '',
          time:    m.createdAt ? new Date(m.createdAt).toLocaleTimeString('es-MX', {hour:'2-digit',minute:'2-digit'}) : '',
          date:    m.createdAt ? new Date(m.createdAt).toLocaleDateString('es-MX') : ''
        };
      }).sort(function(a, b){ return new Date(a.date) - new Date(b.date); });
      renderChatMessages(key);
    }
  }
}

// Abrir chat desde mensajes recibidos (responder)
function openChatFromMessage(msg) {
  if (!currentUser) return;
  var artist   = msg.senderName || msg.sender || '';
  var obra     = msg.artworkTitle || msg.obra || '';
  var key      = artist + '|' + obra;
  var receiverId = msg.senderId || 0;
  var artworkId  = msg.artworkId || 0;

  chatHistory[key] = [{
    from: artist,
    text: msg.content || msg.text || '',
    time: msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}) : '',
    date: msg.createdAt ? new Date(msg.createdAt).toLocaleDateString('es-MX') : ''
  }];

  document.getElementById('chat-artist').textContent    = artist;
  document.getElementById('chat-obra').textContent      = obra;
  document.getElementById('chat-key').value             = key;
  document.getElementById('chat-receiver-id').value     = receiverId;
  document.getElementById('chat-artwork-id').value      = artworkId;
  document.getElementById('chat-input').value           = '';
  document.getElementById('chat-av-letter').textContent = (artist[0]||'?').toUpperCase();

  renderChatMessages(key);
  openModal('chat-modal');
  setTimeout(function(){ document.getElementById('chat-input').focus(); }, 200);
}

function renderChatMessages(key) {
  var msgs = chatHistory[key] || [];
  var wrap = document.getElementById('chat-messages');
  if (!wrap) return;

  if (!msgs.length) {
    wrap.innerHTML =
      '<div style="text-align:center;padding:40px 20px">' +
      '<div style="font-size:2.5rem;margin-bottom:12px">👋</div>' +
      '<p style="color:var(--muted);font-size:0.9rem">Inicia la conversación sobre esta obra</p>' +
      '</div>';
    return;
  }

  var prevDate = '';
  wrap.innerHTML = msgs.map(function(m){
    var isMe  = currentUser && m.from === currentUser.name;
    var dateLabel = '';
    if (m.date && m.date !== prevDate) {
      prevDate   = m.date;
      dateLabel  = '<div style="text-align:center;margin:8px 0;font-size:0.72rem;color:var(--muted)">— '+m.date+' —</div>';
    }
    return dateLabel +
      '<div style="display:flex;justify-content:'+(isMe?'flex-end':'flex-start')+';margin-bottom:2px">' +
      '<div style="max-width:78%;background:'+(isMe?'linear-gradient(135deg,var(--accent),var(--accent2))':'var(--surface2)')+';' +
        'color:'+(isMe?'#fff':'var(--text)')+';' +
        'border-radius:'+(isMe?'18px 18px 4px 18px':'18px 18px 18px 4px')+';' +
        'padding:10px 14px;font-size:0.88rem;line-height:1.4">' +
      (!isMe ? '<div style="font-size:0.72rem;font-weight:700;color:'+(isMe?'rgba(255,255,255,0.8)':'var(--accent)')+';margin-bottom:3px">'+m.from+'</div>' : '') +
      '<div>'+escapeHtmlChat(m.text)+'</div>' +
      '<div style="font-size:0.68rem;opacity:0.7;margin-top:4px;text-align:right">'+m.time+'</div>' +
      '</div></div>';
  }).join('');
  wrap.scrollTop = wrap.scrollHeight;
}

function escapeHtmlChat(text) {
  return String(text || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function sendChatMessage() {
  var key        = document.getElementById('chat-key').value;
  var input      = document.getElementById('chat-input');
  var text       = input.value.trim();
  var receiverId = parseInt(document.getElementById('chat-receiver-id').value) || 0;
  var artworkId  = parseInt(document.getElementById('chat-artwork-id').value)  || 0;
  if (!text || !currentUser) return;

  var now  = new Date();
  var time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  var date = now.toLocaleDateString('es-MX');

  var msg = { from: currentUser.name, text: text, time: time, date: date };
  if (!chatHistory[key]) chatHistory[key] = [];
  chatHistory[key].push(msg);
  save('chat_' + key, chatHistory[key]);

  input.value = '';
  renderChatMessages(key);

  // Agregar a enviados localmente
  if (typeof messagesData !== 'undefined') {
    messagesData.sent = messagesData.sent || [];
    var artworkTitle = key.split('|')[1] || '';
    var artistName   = key.split('|')[0] || '';
    messagesData.sent.unshift({
      id:           Date.now(),
      senderName:   currentUser.name,
      receiverName: artistName,
      artworkTitle: artworkTitle,
      artworkId:    artworkId,
      content:      text,
      createdAt:    now.toISOString()
    });
  }

  // Enviar al backend
  var sending = document.getElementById('chat-sending');
  if (sending) sending.style.display = 'block';

  if (typeof ktorSendMessage === 'function' && receiverId > 0) {
    ktorSendMessage(receiverId, artworkId, text)
      .then(function(){
        if (sending) sending.style.display = 'none';
        // Recargar mensajes del backend
        if (typeof loadAllData === 'function') {
          setTimeout(loadAllData, 300);
        }
      })
      .catch(function(e){
        if (sending) sending.style.display = 'none';
        console.warn('Error enviando al backend:', e);
      });
  } else {
    if (sending) sending.style.display = 'none';
  }
}
function toast(msg, type) {
  type = type || '';
  var icons = { success:'✓', error:'✕', '':'ℹ' };
  var el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = '<span>'+(icons[type]||'ℹ')+'</span>'+msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(function(){
    el.style.opacity = '0'; el.style.transition = 'opacity 0.4s';
    setTimeout(function(){ el.remove(); }, 400);
  }, 3200);
}

/* ============================================================
   MÓVIL
   ============================================================ */
function toggleMobile() { document.getElementById('mobile-menu').classList.toggle('open'); }
function closeMobile()  { document.getElementById('mobile-menu').classList.remove('open'); }

submitUpload = async function () {
  var title = document.getElementById('up-title').value.trim();
  var desc  = document.getElementById('up-desc').value.trim();
  var cat   = document.getElementById('up-cat').value;
  if (!title || !desc) { toast('Completa título y descripción', 'error'); return; }
  var imgs = ['assets/obra2.jpg','assets/obra5.jpg','assets/obra9.jpg','assets/obra11.jpg'];
  var img = imgs[Math.floor(Math.random() * imgs.length)];

  try {
    var created = await createArtworkInApi({
      title: title,
      description: desc,
      image_path: img,
      category: cat,
      artist_name: currentUser.name,
      featured: false,
      likes: 0
    });
    myWorksData.unshift({ id: created.id, title: title, desc: desc, cat: cat, img: img, views: 0, reactions: 0 });
    save('myworks', myWorksData);
    await fetchArtworksFromApi();
    toast('Obra "' + title + '" subida', 'success');
    closeModal('upload-modal');
    ['up-title','up-desc'].forEach(function(id){ document.getElementById(id).value = ''; });
    document.getElementById('up-preview').innerHTML = '';
    renderMyWorks();
    renderDashboard();
  } catch (e) {
    toast(e.message || 'No se pudo subir la obra', 'error');
  }
};

/* ============================================================
   MEJORAS DE GALERIA
   ============================================================ */
renderGallery = function () {
  populateGalleryArtistFilter();
  renderGalleryFiltersUI();
  var items = getGalleryItems();
  lightboxItems = items;
  renderGallerySummary(items);
  renderGalleryTrends(items);
  var grid = document.getElementById('gallery-grid');
  grid.innerHTML = items.length
    ? items.map(function(a,i){ return buildArtCard(a,i,items); }).join('')
    : '<div class="empty-state"><div class="icon">🖼️</div><h4>No se encontraron obras</h4><p>Prueba con otro filtro</p></div>';
};

filterGallery = function () { renderGallery(); };

setGalleryArtistFilter = function (value) {
  galleryControls.artist = value || 'all';
  renderGallery();
};

setGallerySort = function (value) {
  galleryControls.sort = value || 'featured';
  renderGallery();
};

toggleGalleryFavorites = function () {
  if (!currentUser) { toast('Inicia sesión para usar favoritas personales', 'error'); return; }
  galleryControls.favoritesOnly = !galleryControls.favoritesOnly;
  renderGallery();
};

toggleGalleryFeatured = function () {
  galleryControls.featuredOnly = !galleryControls.featuredOnly;
  renderGallery();
};

clearGalleryFilters = function () {
  galleryFilter = 'all';
  galleryControls.artist = 'all';
  galleryControls.sort = 'featured';
  galleryControls.favoritesOnly = false;
  galleryControls.featuredOnly = false;
  var searchInput = document.getElementById('gallery-search');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-chips .chip').forEach(function(c){
    c.classList.toggle('active', c.dataset.filter === 'all');
  });
  renderGallery();
};

toggleLike = function (id) {
  if (!currentUser) { toast('Inicia sesión para dar me gusta', 'error'); return; }
  if (likedArtworks.has(id)) { likedArtworks.delete(id); toast('Like retirado'); }
  else { likedArtworks.add(id); toast('¡Le diste me gusta! ❤️', 'success'); }
  saveUserSet('liked_artworks', likedArtworks);
  renderGallery();
  if (currentUser.id === 'user') renderDashboard();
  if (document.getElementById('view-profile').classList.contains('active')) renderProfileView();
};

toggleFollowArtist = function (id, btn) {
  if (!currentUser) { toast('Inicia sesión para seguir artistas', 'error'); return; }
  if (favArtists.has(id)) {
    favArtists.delete(id);
    if (btn) {
      btn.className = 'btn btn-outline btn-sm';
      btn.textContent = '+ Seguir';
    }
    toast('Dejaste de seguir al artista');
  } else {
    favArtists.add(id);
    if (btn) {
      btn.className = 'btn btn-primary btn-sm';
      btn.textContent = 'Siguiendo';
    }
    toast('Ahora sigues a este artista', 'success');
  }
  saveUserSet('fav_artists', favArtists);
  if (document.getElementById('view-profile').classList.contains('active')) renderProfileView();
  if (document.getElementById('view-artists').classList.contains('active')) renderArtists();
  if (currentUser.id === 'user') renderDashboard();
};

toggleLikeEm = function (id) {
  if (!currentUser) { toast('Inicia sesión para votar', 'error'); return; }
  if (currentUser.id === 'admin')  { toast('El administrador no puede votar', 'error'); return; }
  if (currentUser.id === 'artist') { toast('Los artistas no pueden votar por emergentes', 'error'); return; }
  if (likedEmerging.has(id)) { likedEmerging.delete(id); toast('Voto retirado'); }
  else { likedEmerging.add(id); toast('¡Votaste por este artista! 🌟', 'success'); }
  saveUserSet('liked_emerging', likedEmerging);
  renderEmerging();
  if (currentUser.id === 'user') renderDashboard();
};

/* ============================================================
   EXPERIENCIAS INNOVADORAS
   ============================================================ */
function getArtworkEmotions(artwork) {
  var byCategory = {
    digital: ['energia', 'misterio'],
    pintura: ['nostalgia', 'calma'],
    fotografia: ['nostalgia', 'misterio'],
    escultura: ['caos', 'energia']
  };
  var tags = (byCategory[artwork.cat] || ['misterio']).slice();
  var text = ((artwork.title || '') + ' ' + (artwork.desc || '')).toLowerCase();
  if (text.indexOf('luz') > -1 || text.indexOf('calma') > -1 || text.indexOf('paisaje') > -1) tags.push('calma');
  if (text.indexOf('movimiento') > -1 || text.indexOf('urb') > -1 || text.indexOf('energ') > -1) tags.push('energia');
  if (text.indexOf('mister') > -1 || text.indexOf('sue') > -1 || text.indexOf('onir') > -1) tags.push('misterio');
  if (text.indexOf('fragment') > -1 || text.indexOf('identidad') > -1 || text.indexOf('recuerdo') > -1) tags.push('nostalgia');
  if (text.indexOf('abstr') > -1 || text.indexOf('textura') > -1 || text.indexOf('desaf') > -1) tags.push('caos');
  return tags.filter(function(value, index, arr){ return arr.indexOf(value) === index; });
}

function getPrimaryEmotion(artwork) {
  return getArtworkEmotions(artwork)[0] || 'misterio';
}

function formatEmotionLabel(emotion) {
  var labels = { calma:'Calma', energia:'Energía', misterio:'Misterio', nostalgia:'Nostalgia', caos:'Caos' };
  return labels[emotion] || 'Misterio';
}

function renderEmotionFilterUI() {
  var wrap = document.getElementById('gallery-emotions');
  if (!wrap) return;
  wrap.querySelectorAll('.chip').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.emotion === galleryControls.emotion);
  });
}

function setEmotionFilter(btn) {
  galleryControls.emotion = btn.dataset.emotion || 'all';
  renderGallery();
}

function getImmersiveSourceItems() {
  var items = getGalleryItems().filter(function(item){
    return galleryControls.emotion === 'all' || getArtworkEmotions(item).indexOf(galleryControls.emotion) > -1;
  });
  if (!items.length) items = artworks.slice();
  return items.slice().sort(function(a, b){
    return (b.likes + (likedArtworks.has(b.id) ? 1 : 0)) - (a.likes + (likedArtworks.has(a.id) ? 1 : 0));
  }).slice(0, Math.max(3, Math.min(6, items.length)));
}

function updateImmersiveRoom() {
  var item = immersiveItems[immersiveIndex];
  if (!item) return;
  document.getElementById('immersive-image').src = item.img;
  document.getElementById('immersive-image').alt = item.title;
  document.getElementById('immersive-title').textContent = item.title;
  document.getElementById('immersive-artist').textContent = item.artist + ' · ' + item.cat;
  document.getElementById('immersive-emotion').textContent = formatEmotionLabel(getPrimaryEmotion(item));
  document.getElementById('immersive-desc').textContent = item.desc;
}

function openImmersiveRoom() {
  immersiveItems = getImmersiveSourceItems();
  immersiveIndex = 0;
  if (!immersiveItems.length) {
    toast('No hay obras suficientes para abrir la sala', 'error');
    return;
  }
  updateImmersiveRoom();
  openModal('immersive-modal');
}

function closeImmersiveRoom() {
  closeModal('immersive-modal');
}

function stepImmersiveRoom(direction) {
  if (!immersiveItems.length) return;
  immersiveIndex = (immersiveIndex + direction + immersiveItems.length) % immersiveItems.length;
  updateImmersiveRoom();
}

buildArtCard = function (a, i, list) {
  var liked = likedArtworks.has(a.id);
  var listStr = JSON.stringify(list).replace(/"/g,'&quot;');
  var isOwn = currentUser && currentUser.id === 'artist' && a.artist === currentUser.name;
  return '<div class="art-card" onclick="openLightbox('+i+',this)" data-list="'+listStr+'">' +
    '<div class="art-card-img-wrap">' +
    '<img src="'+a.img+'" alt="'+a.title+'" loading="lazy">' +
    '<div class="art-card-overlay">' +
    '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openArtworkDetail('+a.id+')">Ver detalle</button>' +
    '</div></div>' +
    '<div class="art-card-body">' +
    '<div>' +
    '<div class="art-card-title">'+a.title+'</div>' +
    '<div class="art-card-artist">'+a.artist+'</div>' +
    '</div>' +
    '<span class="emotion-badge">'+formatEmotionLabel(getPrimaryEmotion(a))+'</span>' +
    '<div class="art-card-desc">'+a.desc+'</div>' +
    '<div class="art-card-footer">' +
    '<div class="art-card-stats">' +
    '<span class="art-card-stat">💬 '+((a.comments||[]).length)+' comentarios</span>' +
    '<span class="art-card-stat">'+a.cat+'</span>' +
    '</div>' +
    '<div style="display:flex;gap:8px;align-items:center">' +
    '<div class="like-btn '+(liked?'liked':'')+'" onclick="event.stopPropagation();toggleLike('+a.id+')">' +
    '<span>'+(liked?'❤️':'🤍')+'</span><span>'+(a.likes+(liked?1:0))+'</span>' +
    '</div></div></div>' +
    '<div class="art-card-actions">' +
    (!isOwn
      ? '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation();openChat(\''+a.artist+'\',\''+a.title+'\')">Me interesa esta obra</button>'
      : ''
    ) +
    '</div>' +
    '</div></div>';
};

renderGallery = function () {
  populateGalleryArtistFilter();
  renderGalleryFiltersUI();
  renderEmotionFilterUI();
  var items = getGalleryItems().filter(function(item){
    return galleryControls.emotion === 'all' || getArtworkEmotions(item).indexOf(galleryControls.emotion) > -1;
  });
  lightboxItems = items;
  renderGallerySummary(items);
  renderGalleryTrends(items);
  var grid = document.getElementById('gallery-grid');
  grid.innerHTML = items.length
    ? items.map(function(a,i){ return buildArtCard(a,i,items); }).join('')
    : '<div class="empty-state"><div class="icon">🖼️</div><h4>No se encontraron obras</h4><p>Cambia la emoción o la categoría para descubrir otra atmósfera.</p></div>';
};

clearGalleryFilters = function () {
  galleryFilter = 'all';
  galleryControls.artist = 'all';
  galleryControls.sort = 'featured';
  galleryControls.favoritesOnly = false;
  galleryControls.featuredOnly = false;
  galleryControls.emotion = 'all';
  compareSelection = [];
  var searchInput = document.getElementById('gallery-search');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-chips .chip').forEach(function(c){
    c.classList.toggle('active', c.dataset.filter === 'all');
  });
  renderGallery();
};

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', async function () {
  loadAll();
  applyAccessibilityPrefs();
  // Datos cargados por ktor-api.js
  var lastRole = load('last_role', null);
  if (lastRole) { loginAs(lastRole); } else { goTo('landing'); }

  document.addEventListener('click', function(e){
    var panel = document.getElementById('accessibility-panel');
    var toggle = document.getElementById('accessibility-toggle');
    if (panel && toggle && panel.classList.contains('open') &&
        !panel.contains(e.target) && e.target !== toggle) {
      closeAccessibilityPanel();
    }
    if (e.target.classList.contains('modal-overlay')){
      e.target.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function(e){
    if (e.altKey && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      toggleAccessibilityPanel();
      return;
    }
    if (e.key === 'Escape') {
      stopSpeech();
      closeAccessibilityPanel();
      if (document.getElementById('immersive-modal').classList.contains('open')) closeImmersiveRoom();
    }
    if (document.getElementById('immersive-modal').classList.contains('open')) {
      if (e.key === 'ArrowRight') stepImmersiveRoom(1);
      if (e.key === 'ArrowLeft') stepImmersiveRoom(-1);
    }
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key==='Escape')     closeLightboxBtn();
    if (e.key==='ArrowRight') lightboxNav(1);
    if (e.key==='ArrowLeft')  lightboxNav(-1);
  });
  window.addEventListener('scroll', function(){
    document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 300);
  });
});
