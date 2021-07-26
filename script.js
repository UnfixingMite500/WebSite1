let earnedDescrCount = Number(document.querySelector('.earned__descr__count').innerHTML.split(' ').join(''));
let precent = document.querySelector('.earned-band span');
precent.style.width = earnedDescrCount >= 1000000 ? '100%':earnedDescrCount / 1000000 * 100 +'%';

// clock start
function clock(){
    let s = document.querySelector('.s span'),
        m = document.querySelector('.m span'),
        h = document.querySelector('.h span');
    let time = new Date(),
        sec = time.getSeconds(),
        min = time.getMinutes(),
        hor = time.getHours();
        s.innerHTML = sec;
        h.innerHTML = hor;
        m.innerHTML = min;
        setTimeout(clock, 1000);
}
clock()
// clock end