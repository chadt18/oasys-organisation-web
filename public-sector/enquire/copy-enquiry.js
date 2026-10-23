(() => {
  const email = "chad@oasys-cloud.com";
  const subject = "[Public Sector] OASYS discovery enquiry";
  const template = [
    "Organisation:",
    "Department / team:",
    "Your name and role:",
    "Reply email:",
    "",
    "Which existing systems do you use?",
    "",
    "What recurring workflow would you improve?",
    "",
    "Please do not include personal case records or confidential information."
  ].join("\n");
  const status = document.getElementById("copyStatus");
  const fallback = document.getElementById("copyFallback");
  const buttons = document.querySelectorAll("[data-copy]");
  function notify(message) {
    if (status) status.textContent = message;
  }
  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }
    throw new Error("Clipboard unavailable");
  }
  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy === "email" ? email : ("To: " + email + "\nSubject: " + subject + "\n\n" + template);
      try {
        await copyText(value);
        notify(button.dataset.copy === "email" ? "Email address copied." : "Email address, subject and message template copied.");
      } catch {
        if (fallback) {
          fallback.hidden = false;
          fallback.value = value;
          fallback.focus();
          fallback.select();
        }
        notify("Automatic copying is unavailable. Select and copy the highlighted text.");
      }
    });
  });
})();
