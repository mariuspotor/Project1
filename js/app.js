/**
 * Created by mariuspotor on 13/07/16.
 */
(function () {
    var squares = document.getElementsByClassName('squares'),
        expanded = false,
        blue = squares[2],
        green = squares[1],
        red = squares[0];

    blue.addEventListener('click', function () {
        if (!expanded) {
            if (blue.className.indexOf('scrollDown') == -1 && blue.className.indexOf('scrollUp') == -1){
                blue.className += ' scrollDown';
                var x = document.getElementsByClassName('scrollDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            } else {
                blue.className = blue.className.replace('scrollUp','scrollDown');
                x = document.getElementsByClassName('scrollDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            }
        } else {
            blue.className = blue.className.replace('scrollDown','scrollUp');
            x = document.getElementsByClassName('scrollUp')[0];
            x.style.transform = 'translate(0px,0px)';
            expanded = false;
        }
        console.log(blue.className);
    });

    green.addEventListener('click', function () {
        if (!expanded) {
            if (green.className.indexOf('scrollLDown') == -1 && green.className.indexOf('scrollLUp') == -1){
                green.className += ' scrollLDown';
                var x = document.getElementsByClassName('scrollLDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                setTimeout(function () {
                    x.style.transform = 'translate('.concat(-244-20,'px,',window.innerHeight - x.offsetHeight - 40,'px)');
                }, 2000);
                expanded = true;
            } else {
                green.className = green.className.replace('scrollLUp','scrollLDown');
                x = document.getElementsByClassName('scrollLDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                setTimeout(function () {
                    x.style.transform = 'translate('.concat(-244-20,'px,',window.innerHeight - x.offsetHeight - 40,'px)');
                }, 2000);
                expanded = true;
            }
        } else {
            green.className = green.className.replace('scrollLDown','scrollLUp');
            x = document.getElementsByClassName('scrollLUp')[0];
            x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
            setTimeout(function () {
                x.style.transform = 'translate(0px,0px)';
            }, 2000);
            expanded = false;
        }
        console.log(green.className);
    });

    red.addEventListener('click', function () {
        console.log(expanded);
        if (!expanded) {
            if (red.className.indexOf('scrollOblicDown') == -1 && red.className.indexOf('scrollOblicUp') == -1){
                red.className += ' scrollOblicDown';
                var x = document.getElementsByClassName('scrollOblicDown')[0];
                x.style.transform = 'translate('.concat(window.innerHeight - x.offsetHeight - 40,'px,').concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            } else {
                red.className = red.className.replace('scrollOblicUp','scrollOblicDown');
                x = document.getElementsByClassName('scrollOblicDown')[0];
                x.style.transform = 'translate('.concat(window.innerHeight - x.offsetHeight - 40,'px,').concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            }
        } else {
            red.className = red.className.replace('scrollOblicDown','scrollOblicUp');
            x = document.getElementsByClassName('scrollOblicUp')[0];
            x.style.transform = 'translate(0,0)';
            expanded = false;
        }
        console.log(red.className);
    });
}());