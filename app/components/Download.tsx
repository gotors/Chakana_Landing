"use client";

import { useRef, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { gsap } from "@/app/lib/gsap";
import AurCoin from "./AurCoin";
import { useLang } from "@/app/lib/i18n";

const APK_URL = "https://expo.dev/artifacts/eas/myM6i6rekbb2onZXpyT4gx.apk";

export default function Download() {
  const coinCardRef = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const { t } = useLang();
  const dl = t.download;

  useEffect(() => {
    if (!qrRef.current || !btnRef.current) return;
    gsap.fromTo(
      [qrRef.current, btnRef.current],
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  return (
    <section id="descarga" className="pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-primary mb-4">
            {dl.eyebrow}
          </p>
          <h2 className="font-display font-bold text-on-surface text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.02em] mb-6 max-w-[20ch]">
            {dl.title}
          </h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-[38ch]">
            {dl.lede}
          </p>

          {/* QR + download button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div ref={qrRef} className="flex flex-col items-center gap-2 opacity-0">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "var(--surface-container-low)" }}
              >
                <QRCodeSVG
                  value={APK_URL}
                  size={120}
                  bgColor="transparent"
                  fgColor="var(--on-surface)"
                  level="M"
                />
              </div>
              <p className="font-body text-[11px] tracking-[0.12em] uppercase text-on-surface-muted">
                {dl.qrLabel}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                ref={btnRef}
                href={APK_URL}
                download
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-gradient-to-b from-primary to-primary-deep text-white font-body font-medium text-sm hover:-translate-y-px hover:shadow-soil-sm transition-all duration-200 opacity-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
                </svg>
                {dl.downloadCta}
              </a>
              <p className="font-body text-xs text-on-surface-muted pl-1">{dl.downloadHint}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-muted cursor-default select-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
              <span style={{ opacity: 0.5 }}>{dl.appStoreSoon}</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[rgba(140,133,123,0.20)] font-body text-xs text-on-surface-muted cursor-default select-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
              </svg>
              Google Play
              <span style={{ opacity: 0.5 }}>{dl.appStoreSoon}</span>
            </span>
          </div>
        </div>

        <div ref={coinCardRef} className="flex flex-col items-center justify-center gap-2 py-8 px-6 bg-background relative overflow-hidden">
          <AurCoin containerRef={coinCardRef} />
        </div>

      </div>
    </section>
  );
}
