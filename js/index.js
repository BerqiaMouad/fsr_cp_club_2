// ======================================================================
function transite() {
    const transition_ele = document.querySelector('.transition-1');
    transition_ele.classList.add('active_transition');
    var typed_transite = new Typed(".texttransite", {
        strings: ["^1000Let's Go!", "^500About The Club."],
        typedSpeed: 30,
        backSpeed: 30,
        loop: false
    })
    setTimeout(() => {
        transition_ele.classList.remove('active_transition');
    }, 5000);
}

function transite_2() {
    const transition_ele = document.querySelector('.transition-2');
    transition_ele.classList.add('active_transition');
    var typed_transite = new Typed(".texttransite2", {
        strings: ["^1000Check It Out", "^500Our Activities."],
        typedSpeed: 30,
        backSpeed: 30,
        loop: false
    })
    setTimeout(() => {
        transition_ele.classList.remove('active_transition');
    }, 5000);
}

function transite_3() {
    const transition_ele = document.querySelector('.transition-3');
    transition_ele.classList.add('active_transition');
    var typed_transite = new Typed(".texttransite3", {
        strings: ["^1000Alright!", "You are enjoying this then!", "Then here is a detailed description."],
        typedSpeed: 30,
        backSpeed: 30,
        loop: false
    })
    setTimeout(() => {
        transition_ele.classList.remove('active_transition');
    }, 6000);
}
// ======================================================================

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function go_to(tartoadd, tartoremove){
    var e1 = document.getElementById(tartoremove);
    var e2 = document.getElementById(tartoadd);
    transite();
    setTimeout(() => {
        e1.classList.remove('active');
        e2.classList.add('active');
    }, 5000);
}

function go_to_2(tartoadd, tartoremove){
    var e1 = document.getElementById(tartoremove);
    var e2 = document.getElementById(tartoadd);
    transite_2();
    setTimeout(() => {
        e1.classList.remove('active');
        e2.classList.add('active');
    }, 5000);
}

function go_to_3(tartoadd, tartoremove){
    var e1 = document.getElementById(tartoremove);
    var e2 = document.getElementById(tartoadd);
    transite_3();
    setTimeout(() => {
        e1.classList.remove('active');
        e2.classList.add('active');
    }, 6000);
}
