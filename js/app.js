/**
 * Created by mariuspotor on 13/07/16.

(function () {
    var squares = document.querySelectorAll('.squares'),
        expanded = false,
        blue = squares[2],
        green = squares[1],
        red = squares[0];
    
    blue.addEventListener('click', function () {
        if (!expanded) {
            if (blue.className.indexOf('scrollDown') == -1 && blue.className.indexOf('scrollUp') == -1){
                blue.className += ' scrollDown';
                var x = document.querySelectorAll('.scrollDown')[0];
                console.log(x);
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            } else {
                blue.className = blue.className.replace('scrollUp','scrollDown');
                x = document.querySelectorAll('.scrollDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            }
        } else {
            blue.className = blue.className.replace('scrollDown','scrollUp');
            x = document.querySelectorAll('.scrollUp')[0];
            x.style.transform = 'translate(0px,0px)';
            expanded = false;
        }
        console.log(blue.className);
    });

    green.addEventListener('click', function () {
        if (!expanded) {
            if (green.className.indexOf('scrollLDown') == -1 && green.className.indexOf('scrollLUp') == -1){
                green.className += ' scrollLDown';
                var x = document.querySelectorAll('.scrollLDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                setTimeout(function () {
                    x.style.transform = 'translate('.concat(-244-20,'px,',window.innerHeight - x.offsetHeight - 40,'px)');
                }, 2000);
                expanded = true;
            } else {
                green.className = green.className.replace('scrollLUp','scrollLDown');
                x = document.querySelectorAll('.scrollLDown')[0];
                x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40,'px)');
                setTimeout(function () {
                    x.style.transform = 'translate('.concat(-244-20,'px,',window.innerHeight - x.offsetHeight - 40,'px)');
                }, 2000);
                expanded = true;
            }
        } else {
            green.className = green.className.replace('scrollLDown','scrollLUp');
            x = document.querySelectorAll('.scrollLUp')[0];
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
                var x = document.querySelectorAll('.scrollOblicDown')[0];
                x.style.transform = 'translate('.concat(window.innerHeight - x.offsetHeight - 40,'px,').concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            } else {
                red.className = red.className.replace('scrollOblicUp','scrollOblicDown');
                x = document.querySelectorAll('.scrollOblicDown')[0];
                x.style.transform = 'translate('.concat(window.innerHeight - x.offsetHeight - 40,'px,').concat(window.innerHeight - x.offsetHeight - 40,'px)');
                expanded = true;
            }
        } else {
            red.className = red.className.replace('scrollOblicDown','scrollOblicUp');
            x = document.querySelectorAll('.scrollOblicUp')[0];
            x.style.transform = 'translate(0,0)';
            expanded = false;
        }
        console.log(red.className);
    });
}());


(function () {
    var myDiv = document.querySelector('#main'),
        colors = ['red', 'green', 'blue'],
        expanded = false;


    myDiv.addEventListener('click', function (evt) {
        var elem = evt.target.parentNode.className == '' ? evt.target : evt.target.parentNode,
            color = elem.dataset ? elem.dataset.color : elem.getAttribute('data-color');
        if (colors.indexOf(color) == -1) {
            return;
        } else {
            if (color.indexOf('blue') != -1) {
                if (!expanded) {
                    if (elem.className.indexOf('scrollDown') == -1 && elem.className.indexOf('scrollUp') == -1) {
                        elem.className += ' scrollDown';
                        var x = document.querySelectorAll('.scrollDown')[0];
                        console.log(x);
                        x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40, 'px)');
                        expanded = true;
                    } else {
                        elem.className = elem.className.replace('scrollUp', 'scrollDown');
                        x = document.querySelectorAll('.scrollDown')[0];
                        x.style.transform = 'translate(0px,'.concat(window.innerHeight - x.offsetHeight - 40, 'px)');
                        expanded = true;
                    }
                } else {
                    elem.className = elem.className.replace('scrollDown', 'scrollUp');
                    x = document.querySelectorAll('.scrollUp')[0];
                    x.style.transform = 'translate(0px,0px)';
                    expanded = false;
                }
            }
        }
    });
}());
 */

(function () {

    function handleSquare (element, clickyValue, transformValue, transformValue2) {
        element.dataset.toggle  = clickyValue;
        element.style.transform = transformValue;
        transformValue2 && setTimeout(function () {
            element.style.transform = transformValue2;
        }, 2500);
    }

    function clickHandle (evt) {
        var element         = evt.target.parentNode.className == '' ? evt.target : evt.target.parentNode,
            color            = element.dataset ? element.dataset.color : element.getAttribute('data-color'),
            toggleValue     = element.dataset.toggle === 'True' ? 'False' : 'True',
            highOffset      = window.innerHeight - element.offsetHeight - 40,
            functionMapping = {
                'red'  : {
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate('.concat(116 * 2 + 80, 'px, ', highOffset, 'px)')
                },
                'blue' : {
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate(0px,'.concat(highOffset, 'px)')
                },
                'green': {
                    valueFalse : 'translate(0px,'.concat(highOffset, 'px)'),
                    valueTrue  : 'translate(0px,'.concat(highOffset, 'px)'),
                    value2True : 'translate('.concat(-116 - 40, 'px, ', highOffset, 'px)'),
                    value2False: 'translate(0px, 0px)'
                }
            },

            square          = functionMapping[color];
        console.log(square);
        console.log(toggleValue);
        console.log(square['value'.concat(toggleValue)]);
        console.log(square['value2'.concat(toggleValue)]);

        element.className.indexOf(color) !== -1 && handleSquare(element, toggleValue, square['value'.concat(toggleValue)], square['value2'.concat(toggleValue)]);
    }

    document.querySelector("#main").addEventListener('click', clickHandle);
})();
