const root = document.querySelector("#root");
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown");
const ytprofile = document.querySelector(".ytprofile");
const dropdown2 = document.querySelector(".dropdown2");
const switchAccountBtn = document.querySelector(".switchAccount-btn")
const switchAccount = document.querySelector(".switchAccount");
const exit = document.querySelector(".exit");
const exit1 = document.querySelector(".exit1");
const exit2 = document.querySelector(".exit2");
const exit3 = document.querySelector(".exit3");
const appearance = document.querySelector(".appearance");
const appearanceBtn = document.querySelector(".appearance-btn");
const language = document.querySelector(".language");
const langBox = document.querySelector(".langBox");
const langBtn = document.querySelector(".lang-btn");
const restricted = document.querySelector(".restricted");
const resBtn = document.querySelector(".res-btn");


hamburger.addEventListener("click", () => {
    if (dropDown.classList.contains("showMenu")){
        dropDown.classList.remove("showMenu");
    } else {
        dropDown.classList.add("showMenu")
    };
});

ytprofile.addEventListener("click", () => {
    if (dropdown2.classList.contains("showProfile")){
        dropdown2.classList.remove("showProfile");
    } else {
        dropdown2.classList.add("showProfile");
    };
});

switchAccountBtn.addEventListener("click", () => {
    if (switchAccount.classList.contains("showBox")){
        switchAccount.classList.remove("showBox");
    } else {
        dropdown2.classList.remove("showProfile");
        switchAccount.classList.add("showBox");
    };
});

exit.addEventListener("click", () => {
    if (switchAccount.classList.contains("showBox")){
        switchAccount.classList.remove("showBox");
        dropdown2.classList.add("showProfile");
    };
});
exit1.addEventListener("click", () => {
    if (appearance.classList.contains("showBox")){
        appearance.classList.remove("showBox");
        dropdown2.classList.add("showProfile");
    };
});

exit2.addEventListener("click", () => {
    if (language.classList.contains("showBox")){
        language.classList.remove("showBox");
        appearance.classList.remove("showBox");
        dropdown2.classList.add("showProfile");
    };
});
exit3.addEventListener("click", () => {
    if (restricted.classList.contains("showBox")){
        restricted.classList.remove("showBox");
        appearance.classList.remove("showBox");
        dropdown2.classList.add("showProfile");
    };
});

appearanceBtn.addEventListener("click", () => {
    if (appearance.classList.contains("showBox")){
        appearance.classList.remove("showBox");
    } else {
        dropdown2.classList.remove("showProfile");
        appearance.classList.add("showBox");
    };
});

langBtn.addEventListener("click", () => {
    if (language.classList.contains("showBox")){
        language.classList.remove("showBox");
    } else {
        dropdown2.classList.remove("showProfile");
        language.classList.add("showBox");
    };
});

resBtn.addEventListener("click", () => {
    if (restricted.classList.contains("showBox")){
        restricted.classList.remove("showBox");
        appearance.classList.remove("showBox");
    } else {
        appearance.classList.remove("showBox");
        dropdown2.classList.remove("showProfile");
        restricted.classList.add("showBox");
    };
});

let names = [ 
    'Abkhazian',
    'Afar',
    'Afrikaans',
    'Akan',
    'Albanian',
    'Amharic',
    'Arabic',
    'Aragonese',
    'Armenian',
    'Assamese',
    'Avaric',
    'Avestan',
    'Aymara',
    'Azerbaijani',
    'Bambara',
    'Bashkir',
    'Basque',
    'Belarusian',
    'Bengali',
    'Bihari languages',
    'Bislama',
    'Bosnian',
    'Breton',
    'Bulgarian',
    'Burmese',
    'Central Khmer',
    'Chamorro',
    'Chechen',
    'Chinese',
    'Chuvash',
    'Cornish',
    'Corsican',
    'Cree',
    'Croatian',
    'Czech',
    'Danish',
    'Dzongkha',
    'English',
    'Esperanto',
    'Estonian',
    'Ewe',
    'Faroese',
    'Fijian',
    'Finnish',
    'French',
    'Fulah',
    'Galician',
    'Ganda',
    'Georgian',
    'German'
];

for (let item of names){
    const div = document.createElement("div");
    div.classList.add("switchAccount__box__item");

    const lang = document.createElement("span");
    lang.textContent = item;

    langBox.appendChild(div);
    div.appendChild(lang);
};