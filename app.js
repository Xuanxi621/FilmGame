const roles = [
  {
    id: "xiaoXin",
    name: "小新",
    outfit: "绿色上衣",
    subtitle: "更稳的视角",
    intro: "更擅长观察、记路和找线索。",
    brief: "先看清，再推进。",
    voice: "你会把细节、路线和可疑点先记下来。",
    tags: ["观察", "记路", "线索"],
    image: "./resources/小新.png",
    accent: "#79b36f",
    accentRgb: "121 179 111",
  },
  {
    id: "xiaoChe",
    name: "小彻",
    outfit: "蓝色上衣",
    subtitle: "更快的视角",
    intro: "更擅长追踪变化和先一步行动。",
    brief: "先跟上，再判断。",
    voice: "你会先追上变化，再决定下一步怎么走。",
    tags: ["反应", "追踪", "判断"],
    image: "./resources/小彻.png",
    accent: "#6f97e8",
    accentRgb: "111 151 232",
  },
];

const scenes = [
  {
    id: "01",
    number: 1,
    title: "出发",
    mood: "起航",
    summary: "你和同伴沿着河岸前进，第一枚线索正躲在水面反光里。",
    caption: "天色还亮着，但前方的水声已经开始变得陌生。",
    video: "./resources/1.mp4",
    poster: "./resources/1.png",
    duration: 5.04,
    accent: "#f2b35d",
    accentRgb: "242 179 93",
    choices: [
      {
        key: "A",
        label: "沿河追踪",
        target: "02",
        effects: { clue: 6, tension: 4, trust: 0 },
      },
      {
        key: "B",
        label: "回到高处观察",
        target: "04",
        effects: { clue: 3, tension: 1, trust: 2 },
      },
    ],
  },
  {
    id: "02",
    number: 2,
    title: "浮船现身",
    mood: "现身",
    summary: "一艘老旧船体从雾里浮出来，甲板和舷窗都在提醒你别漏掉细节。",
    caption: "铁锈、汽笛和潮气一起涌上来。",
    video: "./resources/2.mp4",
    poster: "./resources/2.png",
    duration: 5.06,
    accent: "#67b7db",
    accentRgb: "103 183 219",
    choices: [
      {
        key: "A",
        label: "冲进暗渠",
        target: "03",
        effects: { clue: 2, tension: 5, trust: 0 },
      },
      {
        key: "B",
        label: "靠近船身",
        target: "05",
        effects: { clue: 4, tension: 1, trust: 1 },
      },
    ],
  },
  {
    id: "03",
    number: 3,
    title: "暗流疾行",
    mood: "疾行",
    summary: "你被带进更窄的水道，速度一下子提起来，想停都停不住。",
    caption: "越往里走，回头的声音越小。",
    video: "./resources/3.mp4",
    poster: "./resources/3.png",
    duration: 5.06,
    accent: "#6fa7ff",
    accentRgb: "111 167 255",
    choices: [
      {
        key: "A",
        label: "继续下潜",
        target: "05",
        effects: { clue: 3, tension: 4, trust: 0 },
      },
      {
        key: "B",
        label: "折返求援",
        target: "07",
        effects: { clue: 1, tension: -1, trust: 4 },
      },
    ],
  },
  {
    id: "04",
    number: 4,
    title: "门缝窥航",
    mood: "窥视",
    summary: "你藏在舱门边，透过门缝盯着船内的动作，里面显然不只一条路。",
    caption: "别出声，先把人和路线记下来。",
    video: "./resources/4.mp4",
    poster: "./resources/4.png",
    duration: 7.06,
    accent: "#c38d5f",
    accentRgb: "195 141 95",
    choices: [
      {
        key: "A",
        label: "藏进货舱",
        target: "05",
        effects: { clue: 4, tension: 2, trust: 0 },
      },
      {
        key: "B",
        label: "正面看清船长",
        target: "06",
        effects: { clue: 1, tension: 5, trust: 2 },
      },
    ],
  },
  {
    id: "05",
    number: 5,
    title: "货舱潜藏",
    mood: "潜入",
    summary: "木箱、铁管和蒸汽把空间挤得只剩一条缝，你只能贴着阴影前进。",
    caption: "这艘船把秘密装得很满。",
    video: "./resources/5.mp4",
    poster: "./resources/5.png",
    duration: 8.08,
    accent: "#df7e4c",
    accentRgb: "223 126 76",
    choices: [
      {
        key: "A",
        label: "穿过机舱",
        target: "06",
        effects: { clue: 2, tension: 4, trust: 0 },
      },
      {
        key: "B",
        label: "等蒸汽散开",
        target: "08",
        effects: { clue: 0, tension: -1, trust: 3 },
      },
    ],
  },
  {
    id: "06",
    number: 6,
    title: "火光对峙",
    mood: "对峙",
    summary: "舱内的火光突然亮起来，所有人的位置都被照清了，你也躲不下去。",
    caption: "现在是选择站哪边的时候。",
    video: "./resources/6.mp4",
    poster: "./resources/6.png",
    duration: 8.06,
    accent: "#ff7a5c",
    accentRgb: "255 122 92",
    choices: [
      {
        key: "A",
        label: "听船长解释",
        target: "09",
        effects: { clue: 2, tension: 1, trust: 4 },
      },
      {
        key: "B",
        label: "趁乱撤离",
        target: "10",
        effects: { clue: 0, tension: 4, trust: 0 },
      },
    ],
  },
  {
    id: "07",
    number: 7,
    title: "临岸停步",
    mood: "停步",
    summary: "你在岸边短暂停下，呼吸重新跟上，前方却藏着下一段更危险的水面。",
    caption: "停顿不是结束，只是换一口气。",
    video: "./resources/7.mp4",
    poster: "./resources/7.png",
    duration: 7.08,
    accent: "#88b89f",
    accentRgb: "136 184 159",
    choices: [
      {
        key: "A",
        label: "沿岸折返",
        target: "01",
        effects: { clue: 0, tension: -1, trust: 2 },
      },
      {
        key: "B",
        label: "跳回水路",
        target: "08",
        effects: { clue: 2, tension: 3, trust: 0 },
      },
    ],
  },
  {
    id: "08",
    number: 8,
    title: "暗流加速",
    mood: "加速",
    summary: "你再次被卷进暗流，周围的声音开始变形，速度快到只能凭直觉判断。",
    caption: "别犹豫，先抓住最近的边缘。",
    video: "./resources/8.mp4",
    poster: "./resources/8.png",
    duration: 5.06,
    accent: "#4da2d7",
    accentRgb: "77 162 215",
    choices: [
      {
        key: "A",
        label: "逆流前进",
        target: "03",
        effects: { clue: 2, tension: 3, trust: 0 },
      },
      {
        key: "B",
        label: "贴岸潜行",
        target: "04",
        effects: { clue: 0, tension: 0, trust: 2 },
      },
    ],
  },
  {
    id: "09",
    number: 9,
    title: "机舱回响",
    mood: "回响",
    summary: "炉膛和金属管道把声音一层层放大，所有脚步都像在回音里被重复。",
    caption: "这片空间里，连呼吸都像有重量。",
    video: "./resources/9.mp4",
    poster: "./resources/9.png",
    duration: 5.09,
    accent: "#d19a58",
    accentRgb: "209 154 88",
    choices: [
      {
        key: "A",
        label: "跟着船员走",
        target: "10",
        effects: { clue: 2, tension: 1, trust: 3 },
      },
      {
        key: "B",
        label: "回到炉口中央",
        target: "06",
        effects: { clue: 1, tension: 2, trust: 0 },
      },
    ],
  },
  {
    id: "10",
    number: 10,
    title: "巨舰远影",
    mood: "终幕",
    summary: "雾气和浪头一起散开，巨大的船影在远处定住，像一切故事的终点。",
    caption: "你终于看见整段旅程的轮廓。",
    video: "./resources/10.mp4",
    poster: "./resources/10.png",
    duration: 5.09,
    accent: "#f0b34f",
    accentRgb: "240 179 79",
    choices: [
      {
        key: "A",
        label: "再次出发",
        target: "01",
        effects: { clue: 3, tension: 0, trust: 1 },
      },
      {
        key: "B",
        label: "转入暗渠",
        target: "04",
        effects: { clue: 0, tension: 2, trust: 0 },
      },
    ],
  },
];

const orderedSceneIds = scenes.map((scene) => scene.id);
const storageKey = "filmgame-ui-state-v3";
const storage = safeStorage();
const previewChoiceMode = new URLSearchParams(window.location.search).get("preview") === "choices";
const appShellAssets = ["./index.html", "./styles.css", "./app.js"];
const roleImageAssets = roles.map((role) => role.image);
const scenePosterAssets = scenes.map((scene) => scene.poster);
const sceneVideoAssets = scenes.map((scene) => scene.video);
const preloadedAssetUrls = new Set();
const scheduledAssetUrls = new Set();
let assetWarmTimer = null;
let serviceWorkerRegistration = null;
let serviceWorkerReady = false;
let serviceWorkerQueue = [];

const state = {
  currentId: "01",
  roleId: null,
  playing: false,
  muted: false,
  auto: false,
  awaitingChoice: false,
  playAfterLoad: false,
  introOpen: true,
  visited: new Set(),
  route: [],
  stats: defaultStats(),
  autoTimer: null,
};

const els = {
  app: document.getElementById("app"),
  video: document.getElementById("sceneVideo"),
  introOverlay: document.getElementById("introOverlay"),
  roleGrid: document.getElementById("roleGrid"),
  roleChip: document.getElementById("roleChip"),
  routeChip: document.getElementById("routeChip"),
  visitChip: document.getElementById("visitChip"),
  sceneMood: document.getElementById("sceneMood"),
  durationLabel: document.getElementById("durationLabel"),
  playBtn: document.getElementById("playBtn"),
  muteBtn: document.getElementById("muteBtn"),
  autoBtn: document.getElementById("autoBtn"),
  restartBtn: document.getElementById("restartBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  scenePill: document.getElementById("scenePill"),
  currentRouteLabel: document.getElementById("currentRouteLabel"),
  storyCard: document.getElementById("storyCard"),
  storyRoleAvatar: document.getElementById("storyRoleAvatar"),
  storyRoleName: document.getElementById("storyRoleName"),
  storyRoleDesc: document.getElementById("storyRoleDesc"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneSummary: document.getElementById("sceneSummary"),
  captionLine: document.getElementById("captionLine"),
  timeLine: document.getElementById("timeLine"),
  progressTrack: document.getElementById("progressTrack"),
  progressFill: document.getElementById("progressFill"),
  choiceZone: document.getElementById("choiceZone"),
  playGate: document.getElementById("playGate"),
};

function syncViewportHeight() {
  const height = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${Math.round(height)}px`);
}

const icons = {
  play: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5z"></path></svg>
  `,
  pause: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5.5v13"></path><path d="M17 5.5v13"></path></svg>
  `,
  sound: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6.5 8.5H3.5v7h3L11 19z"></path><path d="M16 8c1.1 1 1.8 2.4 1.8 4s-.7 3-1.8 4"></path><path d="M19 5.5c1.9 1.7 3 4.1 3 6.5s-1.1 4.8-3 6.5"></path></svg>
  `,
  mute: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6.5 8.5H3.5v7h3L11 19z"></path><path d="M16 9l5 6"></path><path d="M21 9l-5 6"></path></svg>
  `,
  auto: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5"></path><path d="M4 17v-5h5"></path><path d="M19 12a7 7 0 0 0-12-4.9L4 10"></path><path d="M5 12a7 7 0 0 0 12 4.9L20 14"></path></svg>
  `,
  restart: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2 5"></path></svg>
  `,
  prev: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6 9 12l6 6"></path></svg>
  `,
  next: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
  `,
  lock: `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11V8a5 5 0 0 1 10 0v3"></path><rect x="5" y="11" width="14" height="9" rx="2"></rect></svg>
  `,
};

function defaultStats() {
  return {
    clue: 42,
    trust: 50,
    tension: 35,
  };
}

function safeStorage() {
  try {
    const probe = "__filmgame_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    return null;
  }
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function resolveAssetUrl(assetPath) {
  try {
    return new URL(assetPath, window.location.href).href;
  } catch {
    return assetPath;
  }
}

function uniqueAssets(assets) {
  return [...new Set((assets ?? []).filter(Boolean).map(resolveAssetUrl))];
}

function isImageAsset(assetUrl) {
  return /\.(png|jpe?g|webp|gif|avif)(?:[?#].*)?$/i.test(assetUrl);
}

function isVideoAsset(assetUrl) {
  return /\.(mp4|webm|mov)(?:[?#].*)?$/i.test(assetUrl);
}

function shouldAvoidHeavyCaching() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const effectiveType = connection?.effectiveType ?? "";
  return Boolean(connection?.saveData) || /(^|[^a-z])(2g|slow-2g)($|[^a-z])/i.test(effectiveType);
}

function canUseServiceWorkerCache() {
  return "serviceWorker" in navigator && window.isSecureContext && location.protocol !== "file:";
}

function scheduleIdleTask(callback, timeout = 1200) {
  if (typeof window.requestIdleCallback === "function") {
    return window.requestIdleCallback(() => callback(), { timeout });
  }

  return window.setTimeout(callback, 40);
}

function cancelIdleTask(handle) {
  if (typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(handle);
    return;
  }

  clearTimeout(handle);
}

function getLocalPreloaderHost() {
  let host = document.getElementById("assetPreloaderHost");
  if (host) {
    return host;
  }

  host = document.createElement("div");
  host.id = "assetPreloaderHost";
  host.setAttribute("aria-hidden", "true");
  host.style.cssText = [
    "position:fixed",
    "left:-9999px",
    "top:-9999px",
    "width:1px",
    "height:1px",
    "overflow:hidden",
    "pointer-events:none",
    "opacity:0",
  ].join(";");
  document.body.appendChild(host);
  return host;
}

function warmLocalAsset(assetUrl) {
  if (preloadedAssetUrls.has(assetUrl)) {
    return;
  }

  preloadedAssetUrls.add(assetUrl);

  if (isImageAsset(assetUrl)) {
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = assetUrl;
    return;
  }

  if (isVideoAsset(assetUrl)) {
    const host = getLocalPreloaderHost();
    const video = document.createElement("video");
    let cleaned = false;

    const cleanup = () => {
      if (cleaned) {
        return;
      }

      cleaned = true;
      window.setTimeout(() => {
        try {
          video.removeAttribute("src");
          video.load();
          video.remove();
        } catch {
          // Ignore cleanup failures on local file contexts.
        }
      }, 3000);
    };

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = assetUrl;
    host.appendChild(video);
    video.load();
    video.addEventListener("loadeddata", cleanup, { once: true });
    video.addEventListener("canplaythrough", cleanup, { once: true });
    video.addEventListener("error", cleanup, { once: true });
  }
}

function warmLocalAssets(assetUrls, { defer = true } = {}) {
  const urls = uniqueAssets(assetUrls).filter((url) => !preloadedAssetUrls.has(url));
  if (!urls.length) {
    return;
  }

  const run = () => {
    for (const assetUrl of urls) {
      warmLocalAsset(assetUrl);
    }
  };

  if (defer) {
    scheduleIdleTask(run, 800);
  } else {
    run();
  }
}

function queueServiceWorkerAssets(assetUrls) {
  const urls = uniqueAssets(assetUrls);
  if (!urls.length || !canUseServiceWorkerCache()) {
    return false;
  }

  if (serviceWorkerReady && serviceWorkerRegistration?.active) {
    serviceWorkerRegistration.active.postMessage({ type: "CACHE_ASSETS", assets: urls });
  } else {
    serviceWorkerQueue.push(urls);
  }

  return true;
}

function flushServiceWorkerQueue() {
  if (!serviceWorkerReady || !serviceWorkerRegistration?.active || !serviceWorkerQueue.length) {
    return;
  }

  const pending = serviceWorkerQueue.splice(0, serviceWorkerQueue.length);
  for (const assets of pending) {
    serviceWorkerRegistration.active.postMessage({ type: "CACHE_ASSETS", assets });
  }
}

function primeAssetCache(assetUrls, { localFallback = false } = {}) {
  const urls = uniqueAssets(assetUrls).filter((url) => !scheduledAssetUrls.has(url));
  if (!urls.length) {
    return;
  }

  for (const assetUrl of urls) {
    scheduledAssetUrls.add(assetUrl);
  }

  if (localFallback || !canUseServiceWorkerCache()) {
    warmLocalAssets(urls, { defer: !localFallback });
  }

  queueServiceWorkerAssets(urls);
}

function sceneAssetBundle(scene) {
  const linkedScenes = (scene.choices ?? []).map((choice) => sceneById(choice.target));
  return uniqueAssets([
    scene.poster,
    scene.video,
    ...linkedScenes.map((item) => item.poster),
    ...linkedScenes.map((item) => item.video),
  ]);
}

function sceneImageBundle(scene) {
  const linkedScenes = (scene.choices ?? []).map((choice) => sceneById(choice.target));
  return uniqueAssets([
    scene.poster,
    ...roleImageAssets,
    ...linkedScenes.map((item) => item.poster),
  ]);
}

function sceneVideoBundle(scene) {
  const linkedScenes = (scene.choices ?? []).map((choice) => sceneById(choice.target));
  return uniqueAssets([
    scene.video,
    ...linkedScenes.map((item) => item.video),
  ]);
}

function sceneChoiceVideoBundle(scene) {
  const linkedScenes = (scene.choices ?? []).map((choice) => sceneById(choice.target));
  return uniqueAssets(linkedScenes.map((item) => item.video));
}

function catalogPosterBundle() {
  return uniqueAssets([...roleImageAssets, ...scenePosterAssets]);
}

function catalogVideoBundle() {
  return uniqueAssets(sceneVideoAssets);
}

function clearAssetWarmTimer() {
  if (!assetWarmTimer) {
    return;
  }

  cancelIdleTask(assetWarmTimer);
  assetWarmTimer = null;
}

function scheduleAssetWarmup(scene) {
  clearAssetWarmTimer();
  assetWarmTimer = scheduleIdleTask(() => {
    primeAssetCache(sceneImageBundle(scene), { localFallback: !canUseServiceWorkerCache() });

    if (!shouldAvoidHeavyCaching()) {
      const futureVideos = sceneChoiceVideoBundle(scene);
      if (futureVideos.length) {
        warmLocalAssets(futureVideos, { defer: true });
        primeAssetCache(futureVideos);
      }
    }
  }, 1200);
}

async function registerAssetCacheWorker() {
  if (!canUseServiceWorkerCache()) {
    return null;
  }

  primeAssetCache(appShellAssets);

  try {
    const registration = await navigator.serviceWorker.register("./sw.js");
    serviceWorkerRegistration = registration;

    const readyRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration = readyRegistration;
    serviceWorkerReady = true;
    flushServiceWorkerQueue();
    return readyRegistration;
  } catch {
    serviceWorkerRegistration = null;
    serviceWorkerReady = false;
    return null;
  }
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  const total = Math.max(0, seconds);
  const minutes = Math.floor(total / 60);
  const secs = Math.floor(total % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function stripTrailingZeros(value) {
  return Number(value).toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

function sceneById(id) {
  return scenes.find((scene) => scene.id === id) ?? scenes[0];
}

function roleById(id) {
  return roles.find((role) => role.id === id) ?? null;
}

function effectLabelMap(key) {
  if (key === "clue") return "线索";
  if (key === "trust") return "信任";
  return "警戒";
}

function formatEffects(effects) {
  return Object.entries(effects)
    .map(([key, value]) => `${value > 0 ? "+" : ""}${value} ${effectLabelMap(key)}`)
    .join(" · ");
}

function setIcon(button, markup, active = false) {
  button.innerHTML = markup;
  button.classList.toggle("is-active", active);
}

function clearAutoChoiceTimer() {
  if (state.autoTimer) {
    clearTimeout(state.autoTimer);
    state.autoTimer = null;
  }
}

function persistState() {
  if (!storage) {
    return;
  }

  const payload = {
    currentId: state.currentId,
    roleId: state.roleId,
    auto: state.auto,
    awaitingChoice: state.awaitingChoice,
    visited: [...state.visited],
    route: state.route,
    stats: state.stats,
  };

  try {
    storage.setItem(storageKey, JSON.stringify(payload));
  } catch {
    // Ignore persistence failures in file:// contexts.
  }
}

function restoreState() {
  if (!storage) {
    return;
  }

  try {
    const raw = storage.getItem(storageKey);
    if (!raw) {
      return;
    }

    const saved = JSON.parse(raw);
    if (saved.currentId && sceneById(saved.currentId)) {
      state.currentId = saved.currentId;
    }
    if (saved.roleId && roleById(saved.roleId)) {
      state.roleId = saved.roleId;
    }
    if (typeof saved.auto === "boolean") {
      state.auto = saved.auto;
    }
    if (typeof saved.awaitingChoice === "boolean") {
      state.awaitingChoice = saved.awaitingChoice;
    }
    if (Array.isArray(saved.visited)) {
      state.visited = new Set(saved.visited.filter(Boolean));
    }
    if (Array.isArray(saved.route)) {
      state.route = saved.route.filter((item) => item && item.sceneId);
    }
    if (saved.stats && typeof saved.stats === "object") {
      state.stats = {
        clue: Number(saved.stats.clue ?? state.stats.clue),
        trust: Number(saved.stats.trust ?? state.stats.trust),
        tension: Number(saved.stats.tension ?? state.stats.tension),
      };
    }
  } catch {
    // Start from defaults when the saved payload is invalid.
  }
}

function renderRoleGrid() {
  els.roleGrid.innerHTML = roles
    .map((role, index) => {
      const badge = `${String(index + 1).padStart(2, "0")} / ${role.outfit}`;
      return `
        <button class="role-card" type="button" data-role="${role.id}" aria-label="选择 ${role.name}">
          <div class="role-media">
            <img src="${role.image}" alt="${role.name}" loading="eager" />
            <div class="role-badge">${badge}</div>
          </div>
          <div class="role-body">
            <div>
              <h2 class="role-name">${role.name}</h2>
              <p class="role-subtitle">${role.subtitle}</p>
            </div>
            <p class="role-copy">${role.intro} ${role.brief}</p>
            <div class="role-tags">
              ${role.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </button>
      `;
    })
    .join("");

  els.roleGrid.querySelectorAll("[data-role]").forEach((button) => {
    button.addEventListener("click", () => {
      const roleId = button.getAttribute("data-role");
      selectRole(roleId);
    });
  });
}

function updateTheme(scene) {
  document.documentElement.style.setProperty("--accent", scene.accent);
  document.documentElement.style.setProperty("--accent-rgb", scene.accentRgb);

  const role = roleById(state.roleId);
  if (role) {
    document.documentElement.style.setProperty("--role-accent", role.accent);
    document.documentElement.style.setProperty("--role-accent-rgb", role.accentRgb);
    document.title = `${role.name}视角 · ${scene.title} · 一分钟短剧互动影游`;
  } else {
    document.title = `选择角色 · 一分钟短剧互动影游`;
  }
}

function applyRoleProfile(role) {
  document.documentElement.style.setProperty("--role-accent", role.accent);
  document.documentElement.style.setProperty("--role-accent-rgb", role.accentRgb);
  els.storyRoleAvatar.src = role.image;
  els.storyRoleAvatar.alt = role.name;
  els.storyRoleName.textContent = role.name;
  els.storyRoleDesc.textContent = role.voice;
}

function syncAppMode() {
  const introVisible = state.introOpen || !state.roleId;
  els.app.classList.toggle("is-intro", introVisible);
  els.introOverlay.classList.toggle("is-visible", introVisible);
  els.storyCard.classList.toggle("is-visible", Boolean(state.roleId) && !introVisible);
}

function showIntro(show) {
  state.introOpen = show;
  if (show) {
    state.awaitingChoice = false;
    clearAutoChoiceTimer();
    els.choiceZone.innerHTML = "";
    els.choiceZone.classList.remove("is-visible");
    els.video.pause();
    state.playing = false;
  }

  syncAppMode();
  showGate(false);
  updateButtons();
}

function showGate(show) {
  const visible = Boolean(show) && Boolean(state.roleId) && !state.introOpen && !state.awaitingChoice;
  els.playGate.classList.toggle("is-visible", visible);
}

function updateProgress() {
  if (!state.roleId) {
    els.timeLine.textContent = "00:00 / 00:00";
    els.progressFill.style.width = "0%";
    return;
  }

  const duration = Number.isFinite(els.video.duration)
    ? els.video.duration
    : sceneById(state.currentId).duration;
  const current = Number.isFinite(els.video.currentTime) ? els.video.currentTime : 0;
  els.timeLine.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  els.progressFill.style.width = duration > 0 ? `${clamp((current / duration) * 100, 0, 100)}%` : "0%";
}

function updateSceneText(scene) {
  const role = roleById(state.roleId);

  if (!role) {
    els.roleChip.textContent = "视角待选";
    els.roleChip.classList.add("ghost");
    els.routeChip.textContent = "镜头 01";
    els.visitChip.textContent = "未开局";
    els.sceneMood.textContent = "待选";
    els.durationLabel.textContent = "时长 --";
    els.scenePill.textContent = "序章";
    els.currentRouteLabel.textContent = "等待选择";
    els.storyRoleName.textContent = "请选择小新或小彻";
    els.storyRoleDesc.textContent = "先完成角色选择，再进入画面。";
    els.sceneTitle.textContent = "选择角色开始";
    els.sceneSummary.textContent = "点击角色卡后，视频会直接带声播放。";
    els.captionLine.textContent = "开局先选视角，再进入故事。";
    els.storyRoleAvatar.removeAttribute("src");
    els.storyRoleAvatar.alt = "";
    els.storyCard.classList.remove("is-visible");
    updateProgress();
    return;
  }

  els.roleChip.textContent = `视角 · ${role.name}`;
  els.roleChip.classList.remove("ghost");
  els.roleChip.title = "重新选择角色";
  els.routeChip.textContent = `镜头 ${String(scene.number).padStart(2, "0")}`;
  els.visitChip.textContent = `已看 ${state.visited.size} / ${scenes.length}`;
  els.sceneMood.textContent = scene.mood;
  els.durationLabel.textContent = `时长 ${stripTrailingZeros(scene.duration)}s`;
  els.scenePill.textContent = `片段 ${String(scene.number).padStart(2, "0")}`;
  els.currentRouteLabel.textContent = state.route.length > 1 ? "分支中" : "主线";
  els.storyRoleName.textContent = role.name;
  els.storyRoleDesc.textContent = role.voice;
  els.sceneTitle.textContent = scene.title;
  els.sceneSummary.textContent = scene.summary;
  els.captionLine.textContent = scene.caption;
  els.storyCard.classList.add("is-visible");
  updateProgress();
}

function updateButtons() {
  const role = roleById(state.roleId);
  const scene = sceneById(state.currentId);
  const interactiveScene = Boolean(role) && !state.introOpen && !state.awaitingChoice;
  const locked = !Boolean(role) || state.introOpen || state.awaitingChoice;

  setIcon(els.playBtn, locked ? icons.lock : state.playing ? icons.pause : icons.play, state.playing && !locked);
  setIcon(els.muteBtn, state.muted ? icons.mute : icons.sound, state.muted);
  setIcon(els.autoBtn, icons.auto, state.auto);
  setIcon(els.restartBtn, icons.restart);
  setIcon(els.prevBtn, icons.prev);
  setIcon(els.nextBtn, icons.next);

  els.playBtn.disabled = locked;
  els.prevBtn.disabled = !interactiveScene;
  els.nextBtn.disabled = !interactiveScene;
  els.autoBtn.disabled = !Boolean(role) || state.introOpen;
  els.restartBtn.disabled = !Boolean(role) || state.introOpen;

  els.playBtn.title = locked ? "先选择角色" : state.playing ? "暂停" : "播放";
  els.prevBtn.title = !interactiveScene ? "先选择角色" : "上一幕";
  els.nextBtn.title = !interactiveScene ? "先选择角色" : "下一幕";
  els.autoBtn.title = !Boolean(role) || state.introOpen ? "先选择角色" : state.auto ? "自动：开" : "自动：关";
  els.restartBtn.title = !Boolean(role) || state.introOpen ? "先选择角色" : "重播";
  els.muteBtn.title = state.muted ? "静音" : "有声";
  els.roleChip.title = role ? "重新选择角色" : "选择角色";
  els.roleChip.classList.toggle("ghost", !role);

  if (role) {
    els.routeChip.textContent = `镜头 ${String(scene.number).padStart(2, "0")}`;
    els.visitChip.textContent = `已看 ${state.visited.size} / ${scenes.length}`;
    els.sceneMood.textContent = scene.mood;
    els.durationLabel.textContent = `时长 ${stripTrailingZeros(scene.duration)}s`;
  } else {
    els.routeChip.textContent = "镜头 01";
    els.visitChip.textContent = "未开局";
    els.sceneMood.textContent = "待选";
    els.durationLabel.textContent = "时长 --";
  }

  syncAppMode();
}

function renderChoiceZone(scene) {
  if (!state.awaitingChoice) {
    els.choiceZone.innerHTML = "";
    els.choiceZone.classList.remove("is-visible");
    return;
  }

  els.choiceZone.innerHTML = scene.choices
    .map((choice) => {
      const target = sceneById(choice.target);
      return `
        <button class="choice-card" type="button" data-choice="${choice.target}">
          <div class="choice-copy">
            <div class="choice-key">${choice.key}</div>
            <h3 class="choice-title">${choice.label}</h3>
            <div class="choice-meta">
              <span>${String(target.number).padStart(2, "0")} · ${target.title}</span>
              <span>${formatEffects(choice.effects)}</span>
            </div>
          </div>
          <div class="choice-thumb">
            <img src="${target.poster}" alt="${target.title}" loading="lazy" />
          </div>
        </button>
      `;
    })
    .join("");

  els.choiceZone.classList.add("is-visible");

  els.choiceZone.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-choice");
      const choice = sceneById(state.currentId).choices.find((item) => item.target === targetId);
      if (choice) {
        goToScene(targetId, { fromChoice: true, choice, autoplay: true });
      }
    });
  });
}

function applyChoiceEffects(choice) {
  const effects = choice.effects ?? {};
  state.stats.clue = clamp(state.stats.clue + (effects.clue ?? 0), 0, 100);
  state.stats.trust = clamp(state.stats.trust + (effects.trust ?? 0), 0, 100);
  state.stats.tension = clamp(state.stats.tension + (effects.tension ?? 0), 0, 100);
}

function pushRoute(sceneId, source, label = "") {
  state.route.push({ sceneId, source, label });
  if (state.route.length > 24) {
    state.route = state.route.slice(-24);
  }
}

function syncScene(
  scene,
  { autoplay = true, source = "jump", fromChoice = false, choice = null, preserveRoute = false } = {},
) {
  clearAutoChoiceTimer();
  state.currentId = scene.id;
  state.awaitingChoice = false;
  state.playAfterLoad = autoplay;

  if (fromChoice && choice) {
    applyChoiceEffects(choice);
    if (!preserveRoute) {
      pushRoute(scene.id, "choice", choice.label);
    }
  } else if (!preserveRoute) {
    if (source === "restart") {
      state.visited = new Set([scene.id]);
      state.route = [{ sceneId: scene.id, source: "restart", label: "重启" }];
    } else if (source === "jump") {
      pushRoute(scene.id, "jump", "手动跳转");
    } else if (source === "start" && !state.route.length) {
      pushRoute(scene.id, "start", "起始镜头");
    }
  }

  state.visited.add(scene.id);

  updateTheme(scene);
  updateSceneText(scene);
  updateButtons();
  renderChoiceZone(scene);
  persistState();
  scheduleAssetWarmup(scene);

  els.video.pause();
  els.video.poster = scene.poster;
  els.video.muted = state.muted;
  els.video.volume = 1;
  els.video.src = scene.video;
  els.video.load();
  showGate(false);
}

async function playVideo() {
  if (!state.roleId || state.introOpen || state.awaitingChoice) {
    return;
  }

  state.playAfterLoad = false;
  els.video.muted = state.muted;
  els.video.volume = 1;

  try {
    await els.video.play();
  } catch {
    showGate(true);
  }
}

function togglePlay() {
  if (!state.roleId || state.introOpen) {
    openIntro();
    return;
  }

  if (state.awaitingChoice) {
    return;
  }

  if (els.video.paused) {
    void playVideo();
  } else {
    els.video.pause();
  }
}

function toggleMute() {
  state.muted = !state.muted;
  els.video.muted = state.muted;
  updateButtons();
  persistState();
}

function toggleAuto() {
  if (!state.roleId || state.introOpen) {
    return;
  }

  state.auto = !state.auto;
  updateButtons();
  persistState();
}

function beginStory(roleId, { autoplay = true, forceSound = false, playImmediately = true } = {}) {
  const role = roleById(roleId);
  if (!role) {
    return;
  }

  clearAutoChoiceTimer();
  state.roleId = role.id;
  state.introOpen = false;
  state.awaitingChoice = false;
  state.playing = false;
  state.visited = new Set();
  state.route = [];
  state.stats = defaultStats();

  if (forceSound) {
    state.muted = false;
  }

  applyRoleProfile(role);
  syncAppMode();
  const initialScene = sceneById("01");
  syncScene(initialScene, { autoplay, source: "start" });
  showIntro(false);
  updateButtons();
  persistState();

  if (autoplay && playImmediately) {
    void playVideo();
  }
}

function selectRole(roleId) {
  beginStory(roleId, { autoplay: true, forceSound: true, playImmediately: true });
}

function openIntro() {
  if (!state.roleId) {
    state.introOpen = true;
    showIntro(true);
    updateButtons();
    persistState();
    return;
  }

  clearAutoChoiceTimer();
  state.introOpen = true;
  state.playing = false;
  els.video.pause();
  showIntro(true);
  updateButtons();
  persistState();
}

function restartStory() {
  if (!state.roleId) {
    openIntro();
    return;
  }

  beginStory(state.roleId, { autoplay: true, forceSound: false, playImmediately: true });
}

function stepScene(direction) {
  if (!state.roleId || state.introOpen || state.awaitingChoice) {
    return;
  }

  const currentIndex = orderedSceneIds.indexOf(state.currentId);
  if (currentIndex === -1) {
    return;
  }

  const nextIndex = (currentIndex + direction + orderedSceneIds.length) % orderedSceneIds.length;
  const targetScene = sceneById(orderedSceneIds[nextIndex]);
  syncScene(targetScene, { autoplay: true, source: "jump" });
  void playVideo();
}

function scheduleAutoChoice(scene) {
  clearAutoChoiceTimer();
  if (!state.auto || !scene.choices?.length || !state.roleId || state.introOpen) {
    return;
  }

  state.autoTimer = window.setTimeout(() => {
    const fallback = scene.choices[0];
    if (fallback) {
      goToScene(fallback.target, { fromChoice: true, choice: fallback, autoplay: true });
    }
  }, 800);
}

function goToScene(sceneId, options = {}) {
  const scene = sceneById(sceneId);
  if (!scene) {
    return;
  }

  syncScene(scene, options);
  if (options.autoplay !== false && state.roleId && !state.introOpen && !state.awaitingChoice) {
    void playVideo();
  }
}

function bindEvents() {
  els.roleChip.addEventListener("click", openIntro);

  els.playGate.addEventListener("click", () => {
    if (!state.roleId) {
      openIntro();
      return;
    }

    void playVideo();
  });

  els.playBtn.addEventListener("click", togglePlay);
  els.muteBtn.addEventListener("click", toggleMute);
  els.autoBtn.addEventListener("click", toggleAuto);
  els.restartBtn.addEventListener("click", restartStory);
  els.prevBtn.addEventListener("click", () => stepScene(-1));
  els.nextBtn.addEventListener("click", () => stepScene(1));

  els.video.addEventListener("timeupdate", updateProgress);
  els.video.addEventListener("loadedmetadata", updateProgress);
  els.video.addEventListener("loadeddata", () => {
    updateProgress();
    if (state.playAfterLoad && state.roleId && !state.introOpen && !state.awaitingChoice) {
      void playVideo();
    }
  });
  els.video.addEventListener("play", () => {
    state.playing = true;
    showGate(false);
    updateButtons();
  });
  els.video.addEventListener("pause", () => {
    state.playing = false;
    if (state.roleId && !state.awaitingChoice && !state.introOpen) {
      showGate(true);
    } else {
      showGate(false);
    }
    updateButtons();
  });
  els.video.addEventListener("ended", () => {
    state.playing = false;
    state.awaitingChoice = true;
    updateButtons();
    showGate(false);
    renderChoiceZone(sceneById(state.currentId));
    scheduleAutoChoice(sceneById(state.currentId));
    persistState();
  });
  els.video.addEventListener("click", () => {
    if (!state.roleId || state.introOpen) {
      openIntro();
      return;
    }

    if (!state.awaitingChoice) {
      togglePlay();
    }
  });
  els.progressTrack.addEventListener("click", (event) => {
    if (!state.roleId || state.introOpen || state.awaitingChoice) {
      return;
    }

    const rect = els.progressTrack.getBoundingClientRect();
    const ratio = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    if (Number.isFinite(els.video.duration) && els.video.duration > 0) {
      els.video.currentTime = els.video.duration * ratio;
    }
  });

  window.addEventListener("resize", syncViewportHeight);
  window.addEventListener("orientationchange", syncViewportHeight);
  window.visualViewport?.addEventListener("resize", syncViewportHeight);

  window.addEventListener("beforeunload", persistState);
}

function init() {
  syncViewportHeight();
  restoreState();
  renderRoleGrid();
  bindEvents();
  void registerAssetCacheWorker();

  const initialScene = sceneById(state.currentId);

  if (previewChoiceMode) {
    beginStory(roles[0].id, { autoplay: false, forceSound: false, playImmediately: false });
    state.auto = false;
    state.awaitingChoice = true;
    renderChoiceZone(sceneById("01"));
    showIntro(false);
    updateButtons();
    showGate(false);
    return;
  }

  if (state.roleId) {
    applyRoleProfile(roleById(state.roleId));
    state.introOpen = false;
    syncScene(initialScene, {
      autoplay: !state.awaitingChoice,
      source: state.route.length ? "jump" : "start",
      preserveRoute: true,
    });

    if (state.awaitingChoice) {
      renderChoiceZone(initialScene);
      scheduleAutoChoice(initialScene);
    }

    showIntro(false);
    updateButtons();
    return;
  }

  syncScene(sceneById("01"), { autoplay: false, source: "start" });
  showIntro(true);
  updateButtons();
  showGate(false);
}

init();
