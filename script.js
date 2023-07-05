const headingElement = document.getElementById("soon-opening");
const slotElement = document.getElementById("slot-games");
const casinoElement = document.getElementById("live-casino");
const slot1Element = document.getElementById("slot-games1");
const casino1Element = document.getElementById("live-casino1");
const partnerElement = document.getElementById("partner");
const sportsBettingElement = document.getElementById("sports-betting");

function setLanguageText(language) {
  if (language === "ru") {
    headingElement.textContent = "Скоро открытие";
    slotElement.textContent = "Лицензионные слот игры";
    casinoElement.textContent = "Лайв казино";
    partnerElement.textContent = "Наш партнер";
    sportsBettingElement.textContent = "Ставки на спорт";
    slot1Element.textContent = "Лицензионные слот игры";
    casino1Element.textContent = "Лайв казино";
  } else if (language === "en") {
    headingElement.textContent = "Coming soon";
    slotElement.textContent = "Licensed slot games";
    casinoElement.textContent = "Live casino";
    partnerElement.textContent = "Our partner";
    sportsBettingElement.textContent = "Sports betting";
    slot1Element.textContent = "Licensed slot games";
    casino1Element.textContent = "Live casino";
  } else if (language === "ka") {
    headingElement.textContent = "მალე ვიხსნებით";
    slotElement.textContent = "ლიცენზირებული სლოტ თამაშები";
    casinoElement.textContent = "ლაივ კაზინო";
    partnerElement.textContent = "ჩვენი პარტნიორი";
    sportsBettingElement.textContent = "ფსონები სპორტზე";
    slot1Element.textContent = "ლიცენზირებული სლოტ თამაშები";
    casino1Element.textContent = "ლაივ კაზინო";
  } else if (language === "tr") {
    headingElement.textContent = "Yakında açılıyor";
    slotElement.textContent = "Lisanslı canlı casino";
    casinoElement.textContent = "Canli casino";
    partnerElement.textContent = "İş ortağımız";
    sportsBettingElement.textContent = "Spor bahisleri";
    slot1Element.textContent = "Lisanslı canlı casino";
    casino1Element.textContent = "Canli casino";
  } else if (language === "he") {
    headingElement.textContent = "קרוב לפתיחה";
    slotElement.textContent = "משחקי משבצות ברישיון";
    casinoElement.textContent = "קזינו בשידור";
    partnerElement.textContent = "שותף שלנו";
    sportsBettingElement.textContent = "הימורים ספורט";
    slot1Element.textContent = "משחקי סלוט  מורשה";
    casino1Element.textContent = "קזינו בשידור";
  } else {
    headingElement.textContent = "Coming soon";
    slotElement.textContent = "Licensed slot games";
    casinoElement.textContent = "Live casino";
    partnerElement.textContent = "Our partner";
    sportsBettingElement.textContent = "Sports betting";
    slot1Element.textContent = "Licensed slot games";
    casino1Element.textContent = "Live casino";
  }
}

const browserLanguage = navigator.language || navigator.userLanguage;

setLanguageText(browserLanguage);


setTimeout(function () {
  const currentPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const scrollOptions = {
    top: pageHeight,
    behavior: "smooth",
  };

  window.scrollTo(scrollOptions);
}, 3000);
