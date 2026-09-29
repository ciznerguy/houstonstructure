// Carries the contact details captured in step one of the lead flow over to the
// project-details step on /estimate.
//
// sessionStorage, deliberately: the details stay in this browser tab, never reach
// a URL (a name and phone number have no business in a query string, a browser
// history or a server log) and disappear when the tab closes. Every access is
// wrapped, since private windows and blocked site data make these calls throw.

const KEY = "lead-contact";

export type LeadContact = {
  name: string;
  email: string;
  phone: string;
};

export function saveLeadContact(contact: LeadContact) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(contact));
  } catch {
    // Not fatal. The lead email has already been sent by this point, and
    // /estimate falls back to asking for the details again.
  }
}

export function readLeadContact(): LeadContact | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LeadContact>;
    if (!parsed?.name || !parsed?.phone) return null;
    return { name: parsed.name, email: parsed.email ?? "", phone: parsed.phone };
  } catch {
    return null;
  }
}

export function clearLeadContact() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // Nothing to do.
  }
}
