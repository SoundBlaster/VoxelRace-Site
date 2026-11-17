(() => {
  const params = new URLSearchParams(location.search);
  const explicit = params.get('lang');
  const language = explicit === 'ru' || explicit === 'en' ? explicit : (/^(ru|be|uk|kk)\b/i.test(navigator.language) ? 'ru' : 'en');
  document.documentElement.classList.add('js');
  document.documentElement.dataset.siteLanguage = language;
  document.documentElement.lang = language;
  document.title = document.documentElement.dataset[language === 'ru' ? 'titleRu' : 'titleEn'] || document.title;
  document.querySelectorAll('[data-alt-en][data-alt-ru]').forEach((image) => {
    image.alt = image.dataset[language === 'ru' ? 'altRu' : 'altEn'];
  });
  document.querySelectorAll('[data-language-choice]').forEach((link) => {
    if (link.dataset.languageChoice === language) link.setAttribute('aria-current', 'true');
  });
  document.querySelectorAll('[data-local]').forEach((link) => {
    const destination = new URL(link.getAttribute('href'), location.href);
    destination.searchParams.set('lang', language);
    link.href = destination.href;
  });
})();
