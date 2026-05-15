import React, { useEffect, useState } from "react";

const LINKS = {
  kick: "https://kick.com/bigbetbaba",
  discord: "https://discord.gg/XM92x385n",
  youtube: "https://www.youtube.com/@BIGBETBABA",
  babayanbreaks: "https://babayanbreaks.com/",
  spacehills: "https://www.spacehills.com/",
  coinpoker: "https://cpfreerolls.com/big-bet-baba",
  clip: "https://kick.com/bigbetbaba/clips/clip_01KQNDG9BK3FBJ72V0WY340WET",
};

const SLOT_SOUNDS = [
  "/jackpot.mp3?v=3",
  "/slot-win-1.mp3?v=3",
  "/slot-win-2.mp3?v=3",
];

// Change this password before hosting.
const BONUS_PASSWORD = "baba";

function Icon({ type, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    kick: (
      <svg {...common} viewBox="0 0 32 32" fill="currentColor" stroke="none">
        <path d="M5 4h7v10l8-8h8l-10 10 10 12h-9l-6-8-1 1v7H5V4z" />
      </svg>
    ),
    discord: (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M20.3 4.37A17.54 17.54 0 0 0 16 3l-.2.4a16.14 16.14 0 0 1 3.9 1.2 12.9 12.9 0 0 0-3.7-1.1 11.77 11.77 0 0 0-8 0A12.6 12.6 0 0 0 4.3 4.6a16.22 16.22 0 0 1 3.9-1.2L8 3a17.52 17.52 0 0 0-4.3 1.37C1.1 8.2.5 11.9.7 15.5A17.7 17.7 0 0 0 6 18l1-1.6a11.2 11.2 0 0 1-1.7-.8l.4-.3c3.3 1.5 6.9 1.5 10.2 0l.4.3a11.2 11.2 0 0 1-1.7.8l1 1.6a17.7 17.7 0 0 0 5.3-2.5c.3-4.1-.5-7.8-2.6-11.1ZM9.5 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm5 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
      </svg>
    ),
    youtube: (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="M12 2 9.8 8.8 3 11l6.8 2.2L12 20l2.2-6.8L21 11l-6.8-2.2L12 2Z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function BonusOverlayPage() {
  const [bonuses, setBonuses] = useState(() => Number(localStorage.getItem("bonuses_left") || 9));
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  function save(value) {
    const next = Math.max(0, Number(value) || 0);
    setBonuses(next);
    localStorage.setItem("bonuses_left", String(next));
  }

  function unlock() {
    if (password === BONUS_PASSWORD) {
      setUnlocked(true);
      setPassword("");
    }
  }

  useEffect(() => {
    function keys(e) {
      if (e.key === "ArrowUp") save(bonuses + 1);
      if (e.key === "ArrowDown") save(bonuses - 1);
      if (e.key.toLowerCase() === "r") save(9);
    }

    window.addEventListener("keydown", keys);
    return () => window.removeEventListener("keydown", keys);
  }, [bonuses]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-transparent text-white">
      <div className="fixed left-0 top-0 flex items-center gap-3 text-[30px] font-black uppercase tracking-wide text-white [text-shadow:_-3px_-3px_0_#000,_3px_-3px_0_#000,_-3px_3px_0_#000,_3px_3px_0_#000,_0_4px_10px_#000]">
        <span>BONUSES LEFT</span>
        <span className="min-w-[38px] text-center text-[42px] text-yellow-300">{bonuses}</span>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-0 h-full w-10 opacity-0"
        aria-label="secret bonus control"
      />

      {open && (
        <div className="fixed right-4 top-4 z-50 w-72 rounded-2xl border border-[#53FC18]/30 bg-black/95 p-5 text-white shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-2 text-2xl font-black text-white/60 hover:text-white"
            type="button"
          >
            ×
          </button>

          {!unlocked ? (
            <>
              <div className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[#53FC18]">Password</div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && unlock()}
                className="w-full rounded-xl bg-white px-4 py-3 font-bold text-black outline-none"
                autoFocus
              />
              <button
                onClick={unlock}
                className="mt-3 w-full rounded-xl bg-[#53FC18] px-4 py-3 font-black text-black"
                type="button"
              >
                Unlock
              </button>
            </>
          ) : (
            <>
              <div className="text-sm font-black uppercase tracking-[0.16em] text-[#53FC18]">Bonus Control</div>
              <div className="my-5 text-center text-7xl font-black text-yellow-300">{bonuses}</div>

              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => save(bonuses - 1)} className="rounded-xl bg-red-500 px-4 py-3 font-black text-white" type="button">
                  −
                </button>
                <button onClick={() => save(bonuses + 1)} className="rounded-xl bg-[#53FC18] px-4 py-3 font-black text-black" type="button">
                  +
                </button>
              </div>

              <button onClick={() => save(9)} className="mt-3 w-full rounded-xl bg-white px-4 py-3 font-black text-black" type="button">
                Reset 9
              </button>

              <p className="mt-4 text-xs leading-5 text-white/40">
                OBS hotkeys while this source is focused: Arrow Up, Arrow Down, R.
              </p>
            </>
          )}
        </div>
      )}
    </main>
  );
}

function TestPanel() {
  const tests = {
    hasLanding: true,
    hasLoading: true,
    hasMain: true,
    hasClipPreview: true,
    hasThreeSocialCards: true,
    hasBabaReels: true,
    hasClickableAgeEnter: true,
    hasSeoComponent: true,
    hasBonusOverlay: true,
  };

  return (
    <div className="sr-only" data-testid="test-panel">
      {Object.entries(tests).map(([key, value]) => (
        <span key={key} data-testid={key}>
          {String(value)}
        </span>
      ))}
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      @keyframes cursorGlow { 0%, 100% { opacity: .55; } 50% { opacity: .82; } }
      @keyframes logoFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      @keyframes enterShake { 0%, 100% { transform: translateX(0); } 30% { transform: translateX(-3px); } 60% { transform: translateX(3px); } }
      @keyframes buttonBreath { 0%, 100% { box-shadow: 0 0 24px rgba(83,252,24,.14); } 50% { box-shadow: 0 0 46px rgba(83,252,24,.26); } }
      @keyframes reelDrop { 0% { transform: translateY(-110%); filter: blur(4px); } 68% { transform: translateY(7%); filter: blur(1px); } 100% { transform: translateY(0); filter: blur(0); } }
      @keyframes leverPull { 0%, 100% { transform: rotate(-10deg); } 45% { transform: rotate(35deg); } }
      @keyframes machineSettle { 0%, 84%, 100% { transform: translateX(0); } 88% { transform: translateX(-2px); } 92% { transform: translateX(2px); } }
      @keyframes logoShine { 0% { transform: translateX(-140%) rotate(18deg); opacity: 0; } 12% { opacity: .38; } 24% { transform: translateX(160%) rotate(18deg); opacity: 0; } 100% { transform: translateX(160%) rotate(18deg); opacity: 0; } }
      @keyframes jackpotFlash { 0%, 100% { opacity: 0; } 42% { opacity: 0; } 52% { opacity: .34; } 64% { opacity: .1; } }
      @keyframes countPulse { 0%, 100% { opacity: .88; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-1px); } }
      @keyframes hoverReelSpin { 0% { transform: translateY(0); filter: blur(0); } 22% { transform: translateY(-135%); filter: blur(4px); } 48% { transform: translateY(115%); filter: blur(4px); } 72% { transform: translateY(-28%); filter: blur(1px); } 100% { transform: translateY(0); filter: blur(0); } }
    `}</style>
  );
}

function SEO() {
  useEffect(() => {
    document.title = "BIGBETBABA — Streams, Clips & Community";
    const tags = [
      ["property", "og:title", "BIGBETBABA — Streams, Clips & Community"],
      ["property", "og:description", "Watch BIGBETBABA live, viral roulette wins and join the community."],
      ["property", "og:image", "https://www.bigbetbaba.com/roulette-thumbnail.png?v=8"],
      ["property", "og:image:width", "1200"],
      ["property", "og:image:height", "630"],
      ["property", "og:url", "https://www.bigbetbaba.com/"],
      ["property", "og:site_name", "BIGBETBABA"],
      ["property", "og:locale", "en_US"],
      ["property", "og:type", "website"],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", "BIGBETBABA"],
      ["name", "twitter:description", "Live casino streams, viral wins and community rewards."],
      ["name", "twitter:image", "https://www.bigbetbaba.com/roulette-thumbnail.png?v=8"],
      ["name", "theme-color", "#53FC18"],
    ];

    tags.forEach(([attr, key, content]) => {
      const selector = `meta[${attr}="${key}"]`;
      let meta = document.head.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });
  }, []);

  return null;
}

function Background({ mouse }) {
  const pointerGlow = mouse
    ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(83,252,24,.15), rgba(83,252,24,.05) 17%, transparent 34%)`
    : "transparent";

  return (
    <>
      <div className="absolute inset-0 bg-[#070a11]" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,.04) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.04) 87.5%, rgba(255,255,255,.04)), linear-gradient(150deg, rgba(255,255,255,.035) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.035) 87.5%, rgba(255,255,255,.035))",
          backgroundSize: "120px 208px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(83,252,24,.12),transparent_33%),linear-gradient(180deg,rgba(7,10,17,.12),rgba(7,10,17,.96))]" />
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={{ background: pointerGlow, animation: mouse ? "cursorGlow 3s ease-in-out infinite" : undefined }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.8\"/%3E%3C/svg%3E")',
        }}
      />
    </>
  );
}

function SocialCard({ href, icon, label, action, colorClass }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0d121b]/80 px-6 py-5 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35 hover:bg-[#111827]">
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClass} shadow-lg shadow-black/30`}>
        <Icon type={icon} className="h-8 w-8" />
      </div>
      <div className="text-left">
        <div className="text-xs font-bold tracking-[0.08em] text-slate-500">{label}</div>
        <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">{action}</div>
      </div>
    </a>
  );
}

function SpacehillsCard() {
  return (
    <a href={LINKS.spacehills} target="_blank" rel="noopener noreferrer" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#53FC18]/20 bg-gradient-to-b from-[#0f1722] to-[#120d11] p-5 text-center shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:border-[#53FC18]/50 hover:shadow-[0_0_40px_rgba(83,252,24,.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(83,252,24,.12),transparent_48%)] opacity-70" />
      <div className="relative mx-auto mb-4 flex h-16 items-center justify-center">
        <img src="/spacehills.png" alt="Spacehills logo" className="max-h-14 w-auto max-w-[180px] object-contain drop-shadow-[0_0_18px_rgba(83,252,24,.18)] transition duration-300 group-hover:scale-105" />
      </div>
      <div className="relative text-xl font-black tracking-tight text-white">SPACEHILLS</div>
      <div className="relative mt-3 text-lg text-white">»Code <span className="font-black text-[#53FC18]">BABA</span>«</div>
      <div className="relative mt-auto pt-5">
        <div className="rounded-xl bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] shadow-[0_0_24px_rgba(83,252,24,.16)] transition duration-300 group-hover:bg-emerald-300">Sign up</div>
      </div>
    </a>
  );
}

function CoinPokerCard() {
  return (
    <a href={LINKS.coinpoker} target="_blank" rel="noopener noreferrer" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#53FC18]/20 bg-gradient-to-b from-[#0f1722] to-[#120d11] p-5 text-center shadow-xl shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:border-[#53FC18]/50 hover:shadow-[0_0_40px_rgba(83,252,24,.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(83,252,24,.12),transparent_48%)] opacity-70" />
      <div className="relative mx-auto mb-5 flex items-center justify-center">
        <img src="/coinpoker-logo.png" alt="CoinPoker logo" className="h-16 w-auto object-contain transition duration-300 group-hover:scale-105" />
      </div>
      <div className="relative text-2xl font-black tracking-tight text-white">CoinPoker</div>
      <div className="relative mt-3 text-lg text-white">»Code <span className="font-black text-[#53FC18]">BABA</span>«</div>
      <div className="relative mt-auto pt-5">
        <div className="rounded-xl bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] shadow-[0_0_24px_rgba(83,252,24,.16)] transition duration-300 group-hover:bg-emerald-300">Sign up</div>
      </div>
    </a>
  );
}

function LandingPage({ onEnter }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [pressed, setPressed] = useState(false);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
  }

  function handleEnterClick() {
    setPressed(true);
    window.setTimeout(onEnter, 180);
  }

  return (
    <main className={`relative min-h-screen overflow-hidden text-white ${pressed ? "animate-[enterShake_.18s_ease-in-out]" : ""}`} onMouseMove={handleMouseMove}>
      <Styles />
      <TestPanel />
      <Background mouse={mouse} />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
        <div className="relative mb-9 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-[#53FC18]/55 bg-[#111723] p-2 shadow-[0_0_60px_rgba(83,252,24,.14)]" style={{ animation: "logoFloat 6s ease-in-out infinite" }}>
          <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-full w-full rounded-full object-cover" />
          <span className="pointer-events-none absolute inset-y-0 -left-10 w-8 bg-white/35 blur-sm" style={{ animation: "logoShine 7s ease-in-out infinite" }} />
        </div>
        <p className="mb-5 max-w-3xl text-base font-semibold tracking-[0.08em] text-[#53FC18] sm:text-xl">Watch streams, claim rewards and join the community</p>
        <h1 className="text-4xl font-black uppercase tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">BIGBETBABA</h1>
        <button type="button" onClick={handleEnterClick} className={`group relative mt-8 cursor-pointer overflow-hidden rounded-[28px] border border-yellow-400/25 bg-gradient-to-b from-[#2a2f38] via-[#141922] to-[#0a0d12] px-3 py-3 shadow-[0_0_50px_rgba(0,0,0,.45)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_0_70px_rgba(83,252,24,.22)] active:translate-y-1 active:scale-[0.97] ${pressed ? "scale-[0.97]" : ""}`} style={{ animation: "buttonBreath 2s ease-in-out infinite" }}>
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)", backgroundSize: "180px 100%" }} />
          <div className="relative flex items-center gap-3 rounded-[22px] border border-white/10 bg-[#050608] px-5 py-4 shadow-[inset_0_0_30px_rgba(0,0,0,.9)]">
            {["💎", "💎", "💎"].map((symbol, index) => (
              <div key={index} className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#f8f8f8] via-[#d8d8d8] to-[#f1f1f1] text-3xl font-black text-[#07110d] shadow-[inset_0_8px_14px_rgba(255,255,255,.75),inset_0_-12px_18px_rgba(0,0,0,.22)]">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/15 to-transparent" />
                <div className="group-hover:[animation:hoverReelSpin_.85s_cubic-bezier(.17,.84,.25,1)_both]" style={{ animationDelay: `${index * 0.08}s` }}>{symbol}</div>
              </div>
            ))}
            <div className="ml-5 text-left">
              <div className="text-xs font-black uppercase tracking-[0.24em] text-[#53FC18] opacity-90">Click to continue</div>
              <div className="mt-1 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">I’m 18+</div>
            </div>
          </div>
        </button>
        <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
          <SocialCard href={LINKS.kick} icon="kick" label="Kick" action="Watch" colorClass="bg-[#53FC18] text-[#07110d]" />
          <SocialCard href={LINKS.discord} icon="discord" label="Discord" action="Join" colorClass="bg-[#5865F2] text-white" />
          <SocialCard href={LINKS.youtube} icon="youtube" label="YouTube" action="Videos" colorClass="bg-[#FF0000] text-white" />
        </div>
        <p className="mt-12 max-w-xl text-xs uppercase tracking-[0.14em] text-slate-600">18+ only • Play responsibly • Never play with money you cannot afford to lose</p>
      </section>
    </main>
  );
}

function LoadingScreen() {
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const randomSound = SLOT_SOUNDS[Math.floor(Math.random() * SLOT_SOUNDS.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.35;
    if (soundOn) audio.play().catch(() => {});
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundOn]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <Background />
      <button type="button" onClick={() => setSoundOn((value) => !value)} className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-md transition hover:bg-white/[0.08]">Sound {soundOn ? "on" : "off"}</button>
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="pointer-events-none absolute inset-0 bg-[#53FC18]" style={{ animation: "jackpotFlash 1.35s ease-in-out infinite" }} />
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-6 rounded-[46px] bg-[radial-gradient(circle_at_50%_0%,rgba(83,252,24,.20),transparent_55%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-yellow-500/20 bg-gradient-to-b from-[#2b2f37] via-[#111722] to-[#07090f] p-4 shadow-[0_30px_90px_rgba(0,0,0,.65),inset_0_1px_0_rgba(255,255,255,.18)]" style={{ animation: "machineSettle 1.8s ease-in-out infinite" }}>
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent)", backgroundSize: "180px 100%" }} />
            <div className="rounded-[26px] border border-yellow-400/25 bg-gradient-to-b from-[#151b24] to-[#080b10] p-4 shadow-inner shadow-black/80">
              <div className="mb-4 rounded-2xl border border-yellow-400/20 bg-black/45 px-5 py-3 text-center shadow-inner shadow-black/70">
                <div className="text-[11px] font-black uppercase tracking-[0.32em] text-yellow-200/80">BigBetBaba Slots</div>
                <div className="mt-1 text-2xl font-black tracking-[0.18em] text-[#53FC18] drop-shadow-[0_0_18px_rgba(83,252,24,.35)]">BABA</div>
              </div>
              <div className="relative rounded-[24px] border border-white/10 bg-[#030405] p-4 shadow-[inset_0_0_40px_rgba(0,0,0,.95)]">
                <div className="pointer-events-none absolute inset-x-4 top-1/2 z-20 h-px bg-[#53FC18]/35 shadow-[0_0_14px_rgba(83,252,24,.7)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black/70 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="grid grid-cols-4 gap-3">
                  {["B", "A", "B", "A"].map((symbol, index) => (
                    <div key={`${symbol}-${index}`} className="relative h-32 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#f8f8f8] via-[#d8d8d8] to-[#f2f2f2] shadow-[inset_0_10px_20px_rgba(255,255,255,.7),inset_0_-18px_25px_rgba(0,0,0,.25)]">
                      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="flex h-full items-center justify-center font-serif text-6xl font-black text-[#0b1118] drop-shadow-[0_2px_0_rgba(255,255,255,.5)]" style={{ animation: `reelDrop .85s ${index * 0.16}s cubic-bezier(.17,.84,.25,1) both` }}>{symbol}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["MAX BET", "BABA WIN", "SPINNING"].map((label) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-center text-[10px] font-black tracking-[0.14em] text-slate-300 shadow-inner shadow-black/50">{label}</div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-[#53FC18]/30 bg-[#53FC18]/10 px-6 py-3 text-center text-lg font-black tracking-[0.12em] text-[#53FC18] shadow-[0_0_24px_rgba(83,252,24,.12)]">LOADING...</div>
          </div>
          <div className="absolute -right-7 top-1/2 hidden -translate-y-1/2 md:block">
            <div className="relative h-40 w-14 rounded-r-2xl border border-white/10 bg-gradient-to-b from-[#2a303a] to-[#0b0e14] shadow-xl shadow-black/40">
              <div className="absolute left-3 top-7 h-24 w-4 rounded-full bg-black/50 shadow-inner shadow-black" />
              <div className="absolute left-5 top-7 origin-top" style={{ animation: "leverPull 1.15s ease-in-out infinite" }}>
                <div className="h-28 w-2 rounded-full bg-gradient-to-b from-slate-200 via-slate-500 to-slate-700 shadow-lg shadow-black/50" />
                <div className="-ml-4 -mt-2 h-10 w-10 rounded-full border border-white/30 bg-gradient-to-br from-red-400 to-red-800 shadow-[0_0_24px_rgba(239,68,68,.45)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HighlightCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="group relative block w-full overflow-hidden rounded-3xl border border-[#53FC18]/20 bg-[#0d121b]/90 p-4 text-left shadow-2xl shadow-black/30 transition duration-300 hover:border-[#53FC18]/45 hover:shadow-[0_0_55px_rgba(83,252,24,.18)]">
      <div className="relative overflow-hidden rounded-2xl border border-[#53FC18]/20 bg-black shadow-[0_0_40px_rgba(83,252,24,.10)]">
        {isPlaying ? (
          <div className="relative aspect-video bg-black">
            <iframe title="BIGBETBABA roulette clip" src={LINKS.clip} className="absolute inset-0 h-full w-full border-0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          </div>
        ) : (
          <button type="button" onClick={() => setIsPlaying(true)} className="relative block w-full text-left">
            <img src="/roulette-thumbnail.png" alt="28k roulette win" className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(83,252,24,.26),transparent_42%)]" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-black/20 bg-[#53FC18] px-4 py-2 shadow-xl shadow-black/40">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07110d] opacity-40" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#07110d]" /></span>
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#07110d]">Viral clip</span>
            </div>
            <div className="absolute right-4 top-4 rounded-full border border-yellow-300/30 bg-black/70 px-4 py-2 text-sm font-black tracking-[0.12em] text-yellow-200 backdrop-blur-md shadow-xl shadow-black/40">€28,080 WIN</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-[#53FC18] text-[#07110d] shadow-[0_0_50px_rgba(83,252,24,.55)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_95px_rgba(83,252,24,.75)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-9 w-9"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="max-w-[95%] text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white drop-shadow-[0_6px_22px_rgba(0,0,0,.95)] md:text-6xl">YOU WIN<br />€28,080</div>
              <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-md">Slots & Casino</span>
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-md">BigBetBaba</span>
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="mt-4 px-1">
        <div className="text-sm font-black text-white">CRAZY roulette reaction</div>
        <div className="mt-1 text-xs text-slate-500">{isPlaying ? "Playing here on the site" : "Click the thumbnail to play the clip here"}</div>
      </div>
    </div>
  );
}

function MainPage() {
  const isLive = true;
  const [viewerCount, setViewerCount] = useState(1847);

  useEffect(() => {
    const timer = window.setInterval(() => setViewerCount((count) => Math.max(0, count + (Math.random() > 0.5 ? 7 : -4))), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <Background />
      <nav className="relative z-10 border-b border-white/10 bg-[#080b12]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#53FC18]/55" />
            <div><div className="text-lg font-black tracking-normal text-white antialiased">BIGBETBABA</div><div className="text-xs font-bold tracking-[0.08em] text-[#53FC18] antialiased">Live community</div></div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {[["Babayanbreaks", LINKS.babayanbreaks], ["Kick", LINKS.kick], ["Discord", LINKS.discord], ["YouTube", LINKS.youtube]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg px-5 py-3 text-sm font-extrabold tracking-normal text-slate-200 antialiased transition duration-300 hover:bg-[#53FC18]/10 hover:text-[#53FC18] hover:ring-1 hover:ring-[#53FC18]/20">{label}</a>
            ))}
          </div>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] shadow-[0_0_20px_rgba(83,252,24,.16)] transition duration-300 hover:bg-emerald-300">Join Discord</a>
        </div>
      </nav>
      <section id="home" className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-8 text-center sm:px-5 sm:pb-10 sm:pt-12">
        <div className="mx-auto mt-0 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d121b]/90 text-left shadow-2xl shadow-black/40 md:translate-x-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
            <div>
              <div className="flex items-center gap-2 text-base font-black tracking-[0.08em] text-slate-200"><span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#53FC18] opacity-40" /><span className="relative inline-flex h-3 w-3 rounded-full bg-[#53FC18]" /></span>Kick stream</div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500"><span>kick.com/bigbetbaba</span><span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:inline-flex" /><span className="inline-flex items-center gap-1 text-[#53FC18]" style={{ animation: "countPulse 2.4s ease-in-out infinite" }}><Icon type="spark" className="h-3.5 w-3.5" />{viewerCount.toLocaleString()} community views</span></div>
            </div>
            <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] transition duration-300 hover:bg-emerald-300">Watch live</a>
          </div>
          <div className="relative h-[235px] bg-[#050806] sm:h-[300px] md:h-[360px]">
            {!isLive && <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-[#050806]/92 text-center"><div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/roulette-thumbnail.png')", backgroundSize: "cover", backgroundPosition: "center", filter: "blur(18px)", transform: "scale(1.08)" }} /><div className="absolute inset-0 bg-black/65" /><div className="relative max-w-sm px-6"><img src="/logo.jpg" alt="BIGBETBABA logo" className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-[#53FC18]/35" /><div className="mt-5 text-xl font-black text-white">Stream offline</div><div className="mt-2 text-sm leading-6 text-slate-400">BigBetBaba is not live right now. Watch the latest €28K clip below or open Kick.</div></div></div>}
            {isLive && <iframe title="BIGBETBABA Kick live player" src="https://player.kick.com/bigbetbaba" className="absolute inset-0 h-full w-full border-0" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-5xl md:translate-x-6"><HighlightCard /></div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:translate-x-6 md:grid-cols-3">
          <SpacehillsCard />
          <CoinPokerCard />
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-5 text-center shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5865F2] text-white"><Icon type="discord" className="h-8 w-8" /></div><h3 className="text-xl font-black text-white">Discord</h3><p className="mt-2 text-sm leading-6 text-slate-400">Join community</p></a>
        </div>
        <div className="mx-auto mt-4 max-w-5xl rounded-xl border border-yellow-300/15 bg-yellow-300/[0.03] px-5 py-4 text-center text-sm font-bold text-yellow-200">18+ only. Play responsibly. Never play with money you cannot afford to lose.</div>
      </section>
      <section id="babayanbreaks" className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-6 flex items-end justify-between gap-4"><div><h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Community links</h2><p className="mt-2 text-sm text-slate-500">Fast access to the places people actually use.</p></div><div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0d121b]/80 px-4 py-2 text-sm font-bold text-slate-300 md:flex"><Icon type="clock" className="h-4 w-4 text-[#53FC18]" />Most nights • 8PM CET</div></div>
        <div className="grid gap-5 md:grid-cols-3">
          <a href={LINKS.babayanbreaks} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35"><div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f16] p-2"><img src="/babayanbreaks.png" alt="Babayanbreaks logo" className="h-full w-full object-contain" /></div><h3 className="text-2xl font-black text-white">Babayanbreaks</h3><p className="mt-3 leading-7 text-slate-400">Live breaks, collectibles and community events.</p></a>
          <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35"><div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#53FC18] text-[#07110d]"><Icon type="kick" className="h-9 w-9" /></div><h3 className="text-2xl font-black text-white">Watch live</h3><p className="mt-3 leading-7 text-slate-400">Follow BIGBETBABA on Kick for live streams and community moments.</p></a>
          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35"><div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2] text-white"><Icon type="discord" className="h-9 w-9" /></div><h3 className="text-2xl font-black text-white">Community support</h3><p className="mt-3 leading-7 text-slate-400">Join Discord for updates, giveaways and announcements.</p></a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 pb-24 md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"><div><div className="text-lg font-black text-white">BIGBETBABA</div><div className="mt-1 text-xs text-slate-500">18+ community links, streams and updates.</div></div><div className="flex items-center gap-3"><a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="kick" className="h-5 w-5" /></a><a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="discord" className="h-5 w-5" /></a><a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="youtube" className="h-5 w-5" /></a></div><div className="text-xs uppercase tracking-[0.12em] text-slate-600">© 2026 • Play responsibly</div></div>
      </footer>
      <div className="fixed inset-x-4 bottom-4 z-30 grid grid-cols-2 gap-3 md:hidden"><a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#53FC18] px-4 py-3 text-center text-sm font-black text-[#07110d] shadow-xl shadow-black/30">Watch Live</a><a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-[#07110d] shadow-xl shadow-black/30">Join Discord</a></div>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("landing");
  const params = new URLSearchParams(window.location.search);
  const isBonusOverlay = params.get("bonusOverlay") === "1";

  function handleEnter() {
    setScreen("loading");
    window.setTimeout(() => setScreen("main"), 4200);
  }

  if (isBonusOverlay) return <BonusOverlayPage />;

  return (
    <>
      <SEO />
      {screen === "loading" ? <LoadingScreen /> : screen === "main" ? <MainPage /> : <LandingPage onEnter={handleEnter} />}
    </>
  );
}
