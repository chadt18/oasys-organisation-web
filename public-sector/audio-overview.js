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
    status.textContent = "Read the full transcript below. Read-aloud is unavailable in this browser.";
    return;
  }
  const synth = window.speechSynthesis;
  let current = null, segments = [], nextIndex = 0, runId = 0;
  play.hidden = false; stop.hidden = false;
  const setIdle = () => { play.textContent = "Listen"; pause.hidden = true; pause.textContent = "Pause"; };
  const cleanStop = () => { runId += 1; synth.cancel(); current = null; setIdle(); };
  function sayNext(id) {
    if (id !== runId) return;
    if (nextIndex >= segments.length) {
      current = null; setIdle(); status.textContent = "Overview finished."; return;
    }
    current = new SpeechSynthesisUtterance(segments[nextIndex++]);
    current.lang = "en-GB"; current.rate = 1;
    current.onend = () => { if (id === runId) sayNext(id); };
    current.onerror = () => {
      if (id !== runId) return;
      cleanStop(); status.textContent = "Audio could not continue. Read the complete transcript below.";
    };
    synth.speak(current);
  }
  play.addEventListener("click", () => {
    cleanStop();
    const words = transcript.textContent.trim().replace(/\s+/g, " ");
    // A sentence queue is more reliable than one long utterance across browser speech engines.
    segments = words.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [words];
    nextIndex = 0; const id = runId;
    play.textContent = "Restart"; pause.hidden = false;
    status.textContent = "Playing the overview using your browser voice. The complete transcript is available below.";
    sayNext(id);
  });
  pause.addEventListener("click", () => {
    if (!synth.speaking) return;
    if (synth.paused) { synth.resume(); pause.textContent = "Pause"; status.textContent = "Playing."; }
    else { synth.pause(); pause.textContent = "Resume"; status.textContent = "Paused."; }
  });
  stop.addEventListener("click", () => { cleanStop(); status.textContent = "Stopped."; });
  window.addEventListener("pagehide", cleanStop);
})();