function addZero(num){ return num<10 ? "0"+num : num; }

// Секція 1
function runSection1(){
    const now = new Date();
    const t = `${addZero(now.getHours())}:${addZero(now.getMinutes())}:${addZero(now.getSeconds())}`;
    document.getElementById("formattedTime").innerText = t;
}

// Секція 2.1
function runSection2_1(){
    let s=0;
    const c=document.getElementById("clock1");
    setInterval(()=>{
        const now=new Date();
        c.innerText=now.toLocaleTimeString();
        s++;
        if(s===60){alert("Пройшла ще одна хвилина!"); s=0;}
    },1000);
}

// Секція 2.2
function runSection2_2(){
    const c=document.getElementById("clock2");
    let t=0;
    const i=setInterval(()=>{
        c.innerText=new Date().toLocaleTimeString();
        t+=5;
        if(t>=30){
            clearInterval(i);
            alert("30 секунд минуло — сторінка буде закрита.");
            window.close();
        }
    },5000);
}

// Секція 2.3
function runSection2_3(){
    const c=document.getElementById("clock3");
    let sec=0,min=0,h=0;
    setInterval(()=>{
        sec++;
        if(sec>=60){sec=0;min++;}
        if(min>=60){min=0;h++;}
        let disp=`${addZero(sec)} с`;
        if(min>0)disp=`${addZero(min)} хв : `+disp;
        if(h>0)disp=`${addZero(h)} год : `+disp;
        c.innerText=disp;
    },1000);
}

// Секція 2.4
function runSection2_4(){
    const c=document.getElementById("clock4");
    function upd(){ c.innerText=new Date().toLocaleTimeString(); }
    upd();
    setInterval(()=>{alert("Оновлення часу на сторінці!"); upd();},30000);
}

// Секція 2.5
function updateTime5(){
    document.getElementById("clock5").innerText=new Date().toLocaleTimeString();
}
updateTime5();

// Секція 3
function runSection3(){
    const text=prompt("Введіть фразу для ефекту друкарської машинки:")||"Привіт! Це ефект друкарської машинки.";
    const el=document.getElementById("typewriter");
    el.innerText="";
    let i=0;
    const int=setInterval(()=>{
        el.innerText+=text.charAt(i);
        i++;
        if(i>=text.length)clearInterval(int);
    },150);
}