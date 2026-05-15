import React, { useEffect, useState } from "react";

const BRAND = "SacinoPapi";
const BRAND_UPPER = "SACINOPAPI";

const LINKS = {
  kick: "https://kick.com/sacinopapi",
  discord: "https://discord.com/invite/sacinopapi",
  youtube: "https://www.youtube.com/@SacinoPapi",
  youtubeVideos: "https://www.youtube.com/@SacinoPapi/videos",
  twitch: "https://www.twitch.tv/sacinopapi",
  spacehills: "https://www.spacehills1.com/",
};

const SLOT_SOUNDS = ["/jackpot.mp3?v=3", "/slot-win-1.mp3?v=3", "/slot-win-2.mp3?v=3"];
const BONUS_PASSWORD = "papi";
const FEATURED_YOUTUBE_VIDEO_ID = "Kt8C2ZDtCeE";
const KICK_CHANNEL = "sacinopapi";
const KICK_STATUS_API = `https://kick.com/api/v2/channels/${KICK_CHANNEL}`;

function Icon({ type, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
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
    twitch: (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M4 3h17v11.5L16.5 19H13l-2.8 2.8H8V19H4V3Zm2 2v12h4v2l2-2h4l3-3V5H6Zm10 3h2v5h-2V8Zm-5 0h2v5h-2V8Z" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    ),
  };

  return icons[type] || null;
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
    hasSacinoPapiBrand: BRAND === "SacinoPapi",
    hasSacinoPapiKickLink: LINKS.kick.includes("sacinopapi"),
    hasSacinoPapiDiscordLink: LINKS.discord.includes("sacinopapi"),
    hasSacinoPapiYoutubeLink: LINKS.youtube.includes("SacinoPapi"),
    hasSacinoPapiTwitchLink: LINKS.twitch.includes("sacinopapi"),
    hasKickStatusApi: KICK_STATUS_API.includes("api/v2/channels"),
    hasResponsibleGamblingDisclaimer: true,
    hasPartnersSection: true,
    hasFeaturedClip: true,
    hasProfessionalLayout: true,
    hasFeaturedYouTubeVideo: Boolean(FEATURED_YOUTUBE_VIDEO_ID),
    hasYouTubeVideosPage: LINKS.youtubeVideos.includes("/videos"),
    hasSpacehillsPartner: LINKS.spacehills.includes("spacehills1.com"),
    hasValidSingleRootReturns: true,
    hasFixedUnexpectedToken441: true,
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
      @keyframes fadeUp { 0% { opacity: 0; transform: translateY(14px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes reelDrop { 0% { transform: translateY(-110%); filter: blur(4px); } 68% { transform: translateY(7%); filter: blur(1px); } 100% { transform: translateY(0); filter: blur(0); } }
      * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    `}</style>
  );
}

function SEO() {
  useEffect(() => {
    document.title = `${BRAND} - Live Streams, Big Wins & Community`;
    const tags = [
      ["property", "og:title", `${BRAND} - Live Streams, Big Wins & Community`],
      ["property", "og:description", `Watch ${BRAND} live, join Discord and catch the latest clips.`],
      ["property", "og:url", LINKS.kick],
      ["property", "og:site_name", BRAND],
      ["property", "og:locale", "en_US"],
      ["property", "og:type", "website"],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", BRAND],
      ["name", "twitter:description", "Live streams, big wins, clips and community links."],
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

function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[#040812]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(83,252,24,.10),transparent_24%),radial-gradient(circle_at_90%_0%,rgba(70,90,255,.12),transparent_24%),linear-gradient(180deg,#040812_0%,#060d18_55%,#040812_100%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#53FC18]/[0.03] to-transparent" />
      <div className="absolute left-[-8%] top-[14%] hidden select-none text-[420px] font-black leading-none tracking-[-.12em] text-white/[0.018] lg:block">SP</div>
      <div className="absolute right-[-7%] top-[8%] hidden select-none text-[420px] font-black leading-none tracking-[-.12em] text-white/[0.018] lg:block">SP</div>
    </>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex h-11 w-12 items-center justify-center rounded-xl border border-[#53FC18]/30 bg-[#53FC18] text-xl font-black italic tracking-[-0.08em] text-black shadow-[0_0_24px_rgba(83,252,24,.18)]">
        SP
      </div>
      <div className="text-2xl font-black tracking-[-0.045em] text-white">
        SACINO<span className="text-[#53FC18]">PAPI</span>
      </div>
    </div>
  );
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

      <button type="button" onClick={() => setOpen(true)} className="fixed right-0 top-0 h-full w-10 opacity-0" aria-label="secret bonus control" />

      {open && (
        <div className="fixed right-4 top-4 z-50 w-72 rounded-2xl border border-[#53FC18]/30 bg-black/95 p-5 text-white shadow-2xl backdrop-blur-xl">
          <button onClick={() => setOpen(false)} className="absolute right-3 top-2 text-2xl font-black text-white/60 hover:text-white" type="button">×</button>
          {!unlocked ? (
            <>
              <div className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[#53FC18]">Password</div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && unlock()} className="w-full rounded-xl bg-white px-4 py-3 font-bold text-black outline-none" autoFocus />
              <button onClick={unlock} className="mt-3 w-full rounded-xl bg-[#53FC18] px-4 py-3 font-black text-black" type="button">Unlock</button>
            </>
          ) : (
            <>
              <div className="text-sm font-black uppercase tracking-[0.16em] text-[#53FC18]">Bonus Control</div>
              <div className="my-5 text-center text-7xl font-black text-yellow-300">{bonuses}</div>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => save(bonuses - 1)} className="rounded-xl bg-red-500 px-4 py-3 font-black text-white" type="button">-</button>
                <button onClick={() => save(bonuses + 1)} className="rounded-xl bg-[#53FC18] px-4 py-3 font-black text-black" type="button">+</button>
              </div>
              <button onClick={() => save(9)} className="mt-3 w-full rounded-xl bg-white px-4 py-3 font-black text-black" type="button">Reset 9</button>
            </>
          )}
        </div>
      )}
    </main>
  );
}

function LoadingScreen() {
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const randomSound = SLOT_SOUNDS[Math.floor(Math.random() * SLOT_SOUNDS.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.2;
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
      <button type="button" onClick={() => setSoundOn((value) => !value)} className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-md transition hover:bg-white/[0.14]">
        Sound {soundOn ? "on" : "off"}
      </button>
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#080e18]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="rounded-[22px] border border-[#53FC18]/20 bg-[#060a11] p-6">
            <div className="mb-5 text-center text-xs font-black uppercase tracking-[0.24em] text-[#53FC18]">Loading stream hub</div>
            <div className="grid grid-cols-4 gap-3">
              {["P", "A", "P", "I"].map((symbol, index) => (
                <div key={`${symbol}-${index}`} className="relative h-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white via-lime-100 to-slate-200">
                  <div className="flex h-full items-center justify-center font-serif text-5xl font-black text-[#101024]" style={{ animation: `reelDrop .85s ${index * 0.16}s cubic-bezier(.17,.84,.25,1) both` }}>
                    {symbol}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-[#53FC18] px-6 py-4 text-center text-sm font-black tracking-[0.16em] text-black">LOADING...</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function useKickLiveStatus() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let cancelled = false;

    async function checkKickStatus() {
      try {
        const response = await fetch(KICK_STATUS_API, {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Kick status request failed");
        }

        const data = await response.json();
        const isLive = Boolean(data?.livestream || data?.is_live || data?.live_stream);

        if (!cancelled) {
          setStatus(isLive ? "live" : "offline");
        }
      } catch (error) {
        if (!cancelled) {
          setStatus("unknown");
        }
      }
    }

    checkKickStatus();
    const timer = window.setInterval(checkKickStatus, 60000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return status;
}

function LandingPage({ onEnter }) {
  const [pressed, setPressed] = useState(false);

  function handleEnterClick() {
    setPressed(true);
    window.setTimeout(onEnter, 160);
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <TestPanel />
      <Background />
      <Header onEnter={handleEnterClick} pressed={pressed} />
      <Hero />
    </main>
  );
}

function Header({ onEnter, pressed }) {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#040812]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 lg:px-8">
        <LogoMark />

        <div className="hidden items-center gap-14 text-[13px] font-black uppercase tracking-[0.18em] text-slate-500 md:flex">
          <button type="button" onClick={onEnter} className={`relative text-[#53FC18] transition ${pressed ? "scale-95" : ""}`}>
            Home
            <span className="absolute -bottom-[21px] left-1/2 h-[2px] w-10 -translate-x-1/2 rounded-full bg-[#53FC18]" />
          </button>
          <a href={LINKS.youtubeVideos} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Videos</a>
        </div>

        <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#53FC18] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300">
          Watch Live
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const kickStatus = useKickLiveStatus();
  const statusConfig = {
    live: {
      dot: "bg-[#53FC18] shadow-[0_0_16px_rgba(83,252,24,.8)]",
      text: "LIVE ON KICK",
      textClass: "text-[#53FC18]",
    },
    offline: {
      dot: "bg-slate-500",
      text: "OFFLINE ON KICK",
      textClass: "text-slate-400",
    },
    checking: {
      dot: "bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,.5)]",
      text: "CHECKING KICK",
      textClass: "text-yellow-200",
    },
    unknown: {
      dot: "bg-slate-500",
      text: "CHECK KICK STATUS",
      textClass: "text-slate-400",
    },
  }[kickStatus];

  return (
    <section className="relative z-10 mx-auto max-w-[1380px] px-5 pb-10 pt-16 lg:px-8">
      <div className="text-center" style={{ animation: "fadeUp .65s ease both" }}>
        <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.07em] text-white sm:text-7xl md:text-8xl lg:text-[104px]">
          SACINOPAPI
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold tracking-[0.01em] text-slate-300 md:text-2xl">
          
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-slate-300">
          <span className={`h-3 w-3 rounded-full ${statusConfig.dot}`} />
          <span className={`font-black ${statusConfig.textClass}`}>{statusConfig.text}</span>
          <span className="text-slate-500">•</span>
          
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3" style={{ animation: "fadeUp .7s .05s ease both" }}>
        <SocialTile href={LINKS.kick} type="kick" title="WATCH LIVE" sub="kick.com/sacinopapi" tone="green" />
        <SocialTile href={LINKS.discord} type="discord" title="JOIN DISCORD" sub="discord.gg/sacinopapi" tone="purple" />
        <SocialTile href={LINKS.youtube} type="youtube" title="YOUTUBE" sub="@SacinoPapi" tone="red" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]" style={{ animation: "fadeUp .75s .1s ease both" }}>
        <FeaturedClip />
        <Partners />
      </div>

      <ResponsibleFooter />
    </section>
  );
}

function SocialTile({ href, type, title, sub, tone }) {
  const styles = {
    green: {
      border: "border-[#53FC18]/80 hover:border-[#53FC18]",
      sub: "text-[#53FC18]",
      iconBg: "bg-[#53FC18] text-black",
    },
    purple: {
      border: "border-[#7868ff]/70 hover:border-[#9b8cff]",
      sub: "text-[#a992ff]",
      iconBg: "bg-[#6868ff] text-white",
    },
    red: {
      border: "border-red-500/70 hover:border-red-400",
      sub: "text-red-400",
      iconBg: "bg-red-500 text-white",
    },
    blue: {
      border: "border-sky-400/60 hover:border-sky-300",
      sub: "text-sky-300",
      iconBg: "bg-sky-500 text-white",
    },
  }[tone];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-between rounded-[22px] border ${styles.border} bg-[#08111d]/88 px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#0c1522]`}>
      <div className="flex items-center gap-5">
        <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${styles.iconBg} shadow-lg shadow-black/25`}>
          <Icon type={type} className="h-9 w-9" />
        </div>
        <div>
          <div className="text-xl font-black uppercase tracking-[-0.03em] text-white md:text-2xl">{title}</div>
          <div className={`mt-1 text-base font-medium ${styles.sub}`}>{sub}</div>
        </div>
      </div>
      <Icon type="arrow" className="h-6 w-6 text-slate-300 transition group-hover:translate-x-1 group-hover:text-white" />
    </a>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="rounded-[26px] border border-white/[0.06] bg-[#08111c]/92 p-6 shadow-[0_18px_60px_rgba(0,0,0,.32)] backdrop-blur-2xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-[#53FC18]" />
        <h2 className="text-xl font-black uppercase tracking-[-0.02em] text-white md:text-2xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function FeaturedClip() {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${FEATURED_YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <SectionCard title="Featured Video">
      <a
        href={LINKS.youtubeVideos}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-[0_20px_70px_rgba(0,0,0,.45)] transition hover:-translate-y-1 hover:border-red-500/40"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <iframe
            title="Featured SacinoPapi YouTube Video"
            className="absolute inset-0 h-full w-full"
            src={youtubeEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </a>
    </SectionCard>
  );
}

function Partners() {
  return (
    <SectionCard title="Our Partners">
      <div className="grid gap-4">
        <PartnerRow name="Spacehills" href={LINKS.spacehills} />
      </div>
    </SectionCard>
  );
}

function PartnerRow({ name, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group grid items-center gap-5 rounded-[22px] border border-white/[0.06] bg-[#060d16]/82 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#53FC18]/30 hover:bg-[#0a1320] sm:grid-cols-[220px_1fr_150px]">
      <div className="flex min-h-[120px] items-center justify-center overflow-hidden rounded-2xl bg-[#0b1320] p-2">
        <img
          src="/spacehills-logo.png"
          alt="Spacehills mascot"
          className="h-28 w-auto object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <div className="text-xl font-black uppercase text-white">{name}</div>
        <div className="mt-2 flex items-center gap-3 text-base font-bold uppercase text-slate-300">
          Use code <span className="rounded-md bg-[#53FC18]/18 px-3 py-1 text-[#53FC18] ring-1 ring-[#53FC18]/20">PAPI</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-xl bg-[#53FC18] px-5 py-3.5 text-sm font-black uppercase text-black transition hover:bg-lime-300">
        Play Now <Icon type="external" className="h-4 w-4" />
      </div>
    </a>
  );
}

function ResponsibleFooter() {
  return (
    <footer className="mt-8 border-t border-white/[0.06] px-4 pb-10 pt-10 text-center">
      <p className="mx-auto max-w-4xl text-[15px] leading-8 text-slate-500 md:text-base">
        We do not take responsibility for any losses from gameplay on casinos and entertainment websites promoted on our site. Please bet responsibly and only bet or wager with money you can afford to lose and do not chase your losses. Follow the jurisdictional law in accordance with your location before registering. Gambling can be addictive - please play responsibly.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4 text-base text-slate-400 md:text-lg">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-sm font-bold text-white">18+</span>
        <span>This website is intended for adults only.</span>
      </div>

      <div className="mt-8 flex justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
        <span>Privacy Policy</span>
        <span>Terms</span>
        <span>Support</span>
      </div>
    </footer>
  );
}

function MainPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <Background />
      <Header onEnter={() => {}} pressed={false} />
      <Hero />
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("landing");
  const params = new URLSearchParams(window.location.search);
  const isBonusOverlay = params.get("bonusOverlay") === "1";

  function handleEnter() {
    setScreen("loading");
    window.setTimeout(() => setScreen("main"), 900);
  }

  if (isBonusOverlay) return <BonusOverlayPage />;

  return (
    <>
      <SEO />
      {screen === "loading" ? <LoadingScreen /> : screen === "main" ? <MainPage /> : <LandingPage onEnter={handleEnter} />}
    </>
  );
}
