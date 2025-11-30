let tab, tabContent;

window.onload = () => {
    tab = document.getElementsByClassName("tab");
    tabContent = document.getElementsByClassName("tabContent");

    hideTabsContent(1);

    document.getElementById("tabs").onclick = e => {
        for (let i = 0; i < tab.length; i++) {
            if (e.target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    };
};

// ====== ВКЛАДКИ ======
function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        hideTabsContent(0);
        tab[b].classList.add("whiteborder");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}

// ====== CSS GENERATOR ======
function generate() {
    let rtl = rtlRange.value;
    let rtr = rtrRange.value;
    let rbr = rbrRange.value;
    let rbl = rblRange.value;
}

// скорочення доступу
const rtlRange = document.getElementById("rtl");
const rtrRange = document.getElementById("rtr");
const rbrRange = document.getElementById("rbr");
const rblRange = document.getElementById("rbl");

const ttl = document.getElementById("ttl");
const ttr = document.getElementById("ttr");
const tbr = document.getElementById("tbr");
const tbl = document.getElementById("tbl");

const block = document.getElementById("block");
const cssCode = document.getElementById("cssCode");

function generate() {
    ttl.value = rtlRange.value;
    ttr.value = rtrRange.value;
    tbr.value = rbrRange.value;
    tbl.value = rblRange.value;

    const value = `${rtlRange.value}px ${rtrRange.value}px ${rbrRange.value}px ${rblRange.value}px`;

    block.style.borderRadius = value;
    cssCode.value = `border-radius: ${value};`;
}
