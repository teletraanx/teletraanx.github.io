// External links open in a new tab
for (const a of document.querySelectorAll('a[data-external]')) {
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener');
}

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
