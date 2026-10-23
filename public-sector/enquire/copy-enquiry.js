(() => {
  "use strict";
  const form = document.getElementById("psEnquiryForm");
  const prepare = document.getElementById("psEnquiryPrepare");
  const copy = document.getElementById("psEnquiryCopy");
  const status = document.getElementById("psEnquiryStatus");
  const manual = document.getElementById("psEnquiryManual");
  const manualText = document.getElementById("psEnquiryManualText");
  if (!form || !prepare || !copy || !status || !manual || !manualText) return;
  const address = "chad@oasys-cloud.com";
  const subject = "[Public Sector] OASYS discovery enquiry";
  prepare.hidden = false;
  copy.hidden = false;
  function get(id) { return document.getElementById(id).value.trim(); }
  function message() {
    return [
      "OASYS Public Sector discovery enquiry", "",
      "Name: " + get("psName"), "Work email: " + get("psWorkEmail"),
      "Organisation: " + get("psOrganisation"),
      "Department or role: " + (get("psDepartment") || "Not specified"), "",
      "Workflow to improve:", get("psChallenge"), "",
      "Please do not include sensitive records or passwords."
    ].join("\n");
  }
  function check() { return form.reportValidity(); }
  function showManual(value) {
    manual.hidden = false; manualText.value = "To: " + address + "\nSubject: " + subject + "\n\n" + value;
    manualText.focus(); manualText.select();
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!check()) return;
    const draft = "mailto:" + address + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message());
    status.textContent = "Opening your email application. Review the draft and press Send there. If it does not open, use Copy enquiry details or the direct-email alternative.";
    window.location.href = draft;
  });
  copy.addEventListener("click", async () => {
    if (!check()) return;
    const value = "To: " + address + "\nSubject: " + subject + "\n\n" + message();
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("No clipboard support");
      await navigator.clipboard.writeText(value);
      status.textContent = "Enquiry details copied. Paste them into your own email application and press Send.";
    } catch {
      showManual(message());
      status.textContent = "Select and copy the highlighted enquiry details, then paste them into your email application.";
    }
  });
})();