/* Tech Tayari — tiny line-icon set (24×24, drawn for this project). Used instead of emoji for interface
 * icons, because emoji look different on every phone and older Androids show some as empty boxes.
 * ICON(name, size?) returns an inline SVG string that takes the surrounding text colour.
 */
(() => {
"use strict";
const P = {
  sprout:   '<path d="M12 21v-9"/><path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7"/><path d="M12 10c0-3 2-6 7-6 0 4-3 6-7 6"/>',
  monitor:  '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  book:     '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
  speaker:  '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  play:     '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z"/>',
  flag:     '<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
  check:    '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  lock:     '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  tag:      '<path d="M3 12l9-9h8v8l-9 9z"/><circle cx="15.5" cy="8.5" r="1.5"/>',
  wifi:     '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
  cpu:      '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  disk:     '<rect x="3" y="14" width="18" height="6" rx="2"/><path d="M5 14l2-9h10l2 9"/><path d="M17 17h.01"/>',
  ram:      '<rect x="2" y="7" width="20" height="9" rx="1"/><path d="M6 10v3M10 10v3M14 10v3M18 10v3M5 16v3M19 16v3"/>',
  phone:    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  router:   '<rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01M11 17h.01"/><path d="M8 14 6 8M16 14l2-6"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
  waves:    '<path d="M2 9c3-2.5 5-2.5 7 0s5 2.5 7 0 4-2.5 6 0M2 15c3-2.5 5-2.5 7 0s5 2.5 7 0 4-2.5 6 0"/>',
  server:   '<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01"/>',
  laptop:   '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  contacts: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  star:     '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  circle:   '<circle cx="12" cy="12" r="8"/>',
  save:     '<path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M8 3v5h7V3M8 21v-7h8v7"/>',
  spark:    '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M19 3v4M17 5h4"/>',
  film:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4"/>',
};

window.ICON = (name, size = 24) => P[name]
  ? `<svg class="i" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`
  : "";
})();
