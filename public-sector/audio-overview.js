(() => {
  "use strict";
  const root = document.getElementById("psAudioOverview");
  const play = document.getElementById("psAudioPlay");
  const pause = document.getElementById("psAudioPause");
  const stop = document.getElementById("psAudioStop");
  const status = document.getElementById("psAudioStatus");
  const transcript = document.getElementById("psAudioTranscript");
  if (!root || !play || !pause || !stop || !status || !transcript) return;
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    status.textContent = "Read the transcript below. Audio read-aloud is not available in this browser.";
    return;
  }
  const synth = window.speechSynthesis;
  let utterance = null;
  play.hidden = false; stop.hidden = false;
  function reset() { pause.hidden = true; pause.textContent = "Pause"; }
  play.addEventListener("click", () => {
    if (synth.speaking) synth.cancel();
    const text = transcript.textContent.trim().replace(/\s+/g, " ");
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB"; utterance.rate = 1;
    utterance.onstart = () => { status.textContent = "Playing the overview using your browser voice."; play.textContent = "Restart"; pause.hidden = false; };
    utterance.onend = () => { status.textContent = "Overview finished."; play.textContent = "Listen"; reset(); };
    utterance.onerror = () => { status.textContent = "Audio unavailable. The complete transcript is below."; play.textContent = "Listen"; reset(); };
    synth.speak(utterance);
  });
  pause.addEventListener("click", () => {
    if (!synth.speaking) return;
    if (synth.paused) { synth.resume(); pause.textContent = "Pause"; status.textContent = "Playing."; }
    else { synth.pause(); pause.textContent = "Resume"; status.textContent = "Paused."; }
  });
  stop.addEventListener("click", () => { synth.cancel(); play.textContent = "Listen"; reset(); status.textContent = "Stopped."; });
  window.addEventListener("pagehide", () => { if (synth.speaking) synth.cancel(); });
})();