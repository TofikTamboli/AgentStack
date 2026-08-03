"use client";

// Web Audio API Synthesized Mechanical Click Sound (Apple Wheel / Camera Dial Style)
let audioCtx: AudioContext | null = null;
let lastSoundTime = 0;

export function playTactileClick() {
  if (typeof window === "undefined") return;

  const now = performance.now();
  // Throttle playback to once every 80ms to avoid audio spam
  if (now - lastSoundTime < 80) return;
  lastSoundTime = now;

  try {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtx = new AudioCtx();
      }
    }

    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    // Quick frequency sweep mimicking a physical mechanical notch click
    osc.frequency.setValueAtTime(850, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.012);

    // Soft volume envelope (0.16 volume max)
    gain.gain.setValueAtTime(0.16, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.012);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.012);
  } catch (err) {
    // Ignore audio context errors gracefully
  }
}
