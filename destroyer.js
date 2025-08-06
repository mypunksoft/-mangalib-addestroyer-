// Удаление существующих попапов
document.querySelectorAll('.popup').forEach(p => p.remove());

// Мониторинг и удаление новых
new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const el of m.addedNodes) {
      if (
        el.nodeType === 1 &&
        el.classList.contains('popup') &&
        el.hasAttribute('data-popup-id')
      ) {
        console.log('Уничтожен попап:', el);
        el.remove();
      }
    }
  }
}).observe(document.body, { childList: true, subtree: true });
