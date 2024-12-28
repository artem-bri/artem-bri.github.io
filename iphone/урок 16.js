let selectLeft = document.querySelector('#select-left');
let selectRight = document.querySelector('#select-right');

let phones = [
    {
        name: 'iphone6',
        normalname: 'Iphone 6',
        ekran: 4.7,
        security: 'Touch ID (відбиток)',
        buttery: 'Відтворення відео: до 11 годин; відтворення аудіо: до 50 годин',
        procesor: ' A8',
        memory: '16Gb, 32Gb, 64Gb',
        display: 'Retina HD (Широко­форматний дисплей LCD із технологією IPS)'
    },
    {
        name: 'iphonexs',
        normalname: 'iPhone XS',
        ekran: 5.8,
        security: 'Face ID (Розпізнавання обличчя за допомогою камери TrueDepth)',
        buttery: 'Відтворення відео: до 14 годин; відтворення аудіо: до 60 годин',
        procesor: ' A12 Bionic',
        memory: '64Gb, 256Gb, 512Gb',
        display: 'Retina HD (Широко­форматний дисплей LCD із технологією IPS)'
    },
    {
        name: 'iphone11promax',
        normalname: 'iPhone 11 Pro Max',
        ekran: 6.5,
        security: 'Face ID (Розпізнавання обличчя за допомогою камери TrueDepth)',
        buttery: 'Відтворення відео: до 20 годин; відтворення аудіо: до 80 годин',
        procesor: '  A13 Bionic',
        memory: '64Gb, 256Gb, 512Gb',
        display: 'Super Retina XDR (Дисплей OLED із повно­екранним дизайном)'
    },
    {
        name: 'iphone12pro',
        normalname: 'iPhone 12 Pro',
        ekran: 6.1,
        security: 'Face ID (Розпізнавання обличчя за допомогою камери TrueDepth)',
        buttery: 'Відтворення відео: до 17 годин; відтворення аудіо: до 65 годин',
        procesor: '  A14 Bionic',
        memory: '128Gb, 256Gb, 512Gb',
        display: 'Super Retina XDR (Дисплей OLED із повно­екранним дизайном)'
    },
    {
        name: 'iphone13pro',
        normalname: 'iPhone 13 Pro',
        ekran: 6.1,
        security: 'Face ID (Розпізнавання обличчя за допомогою камери TrueDepth)',
        buttery: 'Відтворення відео: до 22 годин; відтворення аудіо: до 75 годин',
        procesor: ' A15 Bionic',
        memory: '128Gb, 256Gb, 512Gb, 1Tb',
        display: 'Super Retina XDR (Дисплей OLED із повноекранним дизайном)'
    },
    {
        name: 'iphone8+',
        normalname: 'iPhone 8 Plus',
        ekran: 5.5,
        security: 'Touch ID (відбиток)',
        buttery: 'Відтворення відео: до 14 годин; відтворення аудіо: до 60 годин',
        procesor: 'A11 Bionic',
        memory: '64Gb, 128Gb',
        display: 'Retina HD (Широко­форматний дисплей LCD із технологією IPS)'

    },
]

function Holidayyy(select, p1, p2, p3, p4, p5, p6, p7) {
    for (let i = 0; i < phones.length; i++) {
        if (select.value == phones[i].name) {
            document.querySelector(p1).innerHTML = phones[i].normalname
            document.querySelector(p2).innerHTML = phones[i].ekran
            document.querySelector(p3).innerHTML = phones[i].security
            document.querySelector(p4).innerHTML = phones[i].buttery
            document.querySelector(p5).innerHTML = phones[i].procesor
            document.querySelector(p6).innerHTML = phones[i].memory
            document.querySelector(p7).innerHTML = phones[i].display


        }
    }
}


selectLeft.onchange = function () {
    Holidayyy(selectLeft, '.name-left', '.ekran-left', '.bespeca-left', '.batareya-left', '.procesor-left', '.Yemnist-left', '.tipekranu-left')
}
 
selectRight.onchange = function () {
    Holidayyy(selectRight, '.name-right', '.ekran-right', '.bespeca-right', '.batareya-right', '.procesor-right', '.Yemnist-right', '.tipekranu-right')
}
Holidayyy(selectLeft, '.name-left', '.ekran-left', '.bespeca-left', '.batareya-left', '.procesor-left', '.Yemnist-left', '.tipekranu-left')
Holidayyy(selectRight, '.name-right', '.ekran-right', '.bespeca-right', '.batareya-right', '.procesor-right', '.Yemnist-right', '.tipekranu-right')
