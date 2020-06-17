let jobSelector = document.querySelector('.job');
let genderSelector = document.querySelector('.gender');
let ageSelector = document.querySelector('.age');
let healthSelector = document.querySelector('.health');
let healthLevelSelector = document.querySelector('.health-level');
let childrenSelector = document.querySelector('.children');
let nationSelector = document.querySelector('.nation');
let personalitySelector = document.querySelector('.personality');
let hobbySelector = document.querySelector('.hobby');
let fobiaSelector = document.querySelector('.fobia');

let submitionButtonSelector = document.querySelector('.button');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randElement(N) {
    a = N[Math.floor(Math.random() * N.length)];
    return a;
}

let job = ["химик", "бомж", "кондитер", "биолог", "профессиональная гадалка", "военный", "анимэшник", "клоун", "модель", "хирург", "медсестра", "психолог", "фитнес-тренер", "программист", "хакер", "вирусолог", "генетик", "почвовед", "философ", "эколог", "бармен", "филолог", "физик", "журналист", "воспитатель", "диджей", "хореограф", "диетолог", "пчеловод", "инструктор по выживанию", "тракторист", "фермер", "тик-токер", "дворник", "библиотекарь", "парикмахер", "флорист", "режиссёр", "экскурсовод", "футболист", "ландшафтный дизайнер", "дирижёр", "строитель", "писатель", "художник", "электрик", "таксист", "космонавт", "лётчик", "полицейский", "адвокат", "судья", "певец", "следователь"];
jobSelector.textContent = "Профессия: " + randElement(job);

let gender = ["мужской", "женский"];
genderSelector.textContent = "Пол: " + randElement(gender);

ageSelector.textContent = "Возраст: " + randomInteger(18, 70);

let health = ["полностью здоров", "слепота", "грипп", "шизофрения", "полностью здоров", "биполярное расстройство личности", "полностью здоров", "туберкулёз", "рак лёгких (8 месяцев до смерти)", "полностью здоров", "полностью здоров", "наркоман", "алкоголизм", "полностью здоров", "полностью здоров", "полностью здоров", "сахарный диабет", "рак печени (1,5 года до смерти)", "полностью здоров", "полностью здоров", "полностью здоров", "рак желудка (3 года до смерти)", "глухонемой", "булимия (бесконтрольное чувство голода)", "полностью здоров", "полностью здоров", "полностью здоров", "паралич нижних конечностей", "полностью здоров", "без рук", "без ног"];
healthValue = randElement(health);
healthSelector.textContent = 'Состояние здоровья: ' + healthValue;

let healthLevel = ["скрытая стадия", "20%", "40%", "60%", "80%", "100%"];
if ((healthValue == "слепота") || (healthValue == "грипп") || (healthValue == "шизофрения") || (healthValue == "туберкулёз") || (healthValue == "наркоман") || (healthValue == "остеохондроз") || (healthValue == "алкоголизм") || (healthValue == "коронавирус") || (healthValue == "сахарный диабет") || (healthValue = "плоскостопие")) {
    healthLevelSelector.textContent = "Тяжесть болезни: " + randElement(healthLevel)
} else {
    healthLevelSelector.textContent = "Тяжесть болезни: —"
}

let children = ["чайлдфри", "плодовит(а)", "не плодовит(а)", "плодовит(а)"];
childrenSelector.textContent = 'Потомство: ' + randElement(children);

let nation = ["русский", "англичанин", "француз", "американец", "индеец", "австралиец", "китаец", "монгол", "мексиканец", "бразилец", "испанец", "португалец", "афроамериканец"];
nationSelector.textContent = 'Национальность: ' + randElement(nation);

let personality = ["жизнерадостный", "депрессивный", "капризный", "весёлый", "агрессивный", "истеричный", "скептик", "честный", "вежливый", "смелый", "умный", "застенчивый", "грубый", "великодушный", "независимый", "щедрый", "гостеприимный", "справедливый", "искренний", "осторожный", "творческий", "целеустремлённый", "выносливый", "мудрый", "эгоистичный", "обидчивый", "сплетник", "пунктуальный", "общительный", "скромный", "буйный", "панк", "авторитетный", "жестокий"];
personalitySelector.textContent = 'Черта характера: ' + randElement(personality);

let hobby = ["разводить пчёл", "вышивать крестиком", "играть в казино", "дайвинг", "футбол", "спорт", "ездить на велосипеде", "собирать LEGO", "программирование", "медицина", "биология", "химия", "боевые искусства", "бокс", "фигурное катание", "рисование", "игра на флейте", "разведение кроликов", "кулинария", "изучение языков", "сёрфинг", "коллекционер вина", "танцевать", "рыбалка", "фокусы", "гадание на картах", "воскрешение мёртвых", "хирургия", "философия", "ЗОЖ", "генетика", "психология", "охота", "туризм", "вязать спицами", "театр (театральный кружок)", "астрология", "паркур", "оружие", "стрельба из лука", "стрельба из пистолета", "дзюдо", "жонглирование", "пейнтбол", "массаж", "плетение корзин", "резьба по дереву", "декупаж (декорирование различных предметов)", "маникюр", "мыловарение", "макраме (техника узелкового плетения)", "бадминтон", "бальные танцы", "гольф", "оригами", "боулинг", "роспись пряников", "пивоварение"];
hobbySelector.textContent = 'Хобби: ' + randElement(hobby);

let fobia =  ["клаустрофобия (боязнь замкнутых пространств)", "акрофобия (боязнь высоты)", "арахнофобия (боязнь высоты)", "коулрофобия (боязнь клоунов)", "герпетофобия (боязнь змей)", "инсектофобия (боязнь насекомых)", "нет", "никтофобия (боязнь темноты)", "нет", "нет", "гидрофобия (боязнь воды)", "нет", "русофобия (боязнь национальности «русский»)", "нет", "мусофобия (боязнь мышей)", "нет", "нет", "анатидаефобия (боязнь того, что где-то существует утка, следящая за тобой", "эйсоптрофобия (боязнь зеркал)", "айхмофобия (боязь острых предметов)"];
fobiaSelector.textContent = 'Фобия: ' + randElement(fobia);

// j = ["крепкое", "худое", "анорексия", "ожирение (1 степень)", "ожирение (2 степень)", "крепкое", "крепкое", "худое", "крепкое", "худое", "худое", "худое"]
// print("Рост, телослажение: ", random.randint(154, 195), ", ", random.choice(j), sep = "")
// k = ["мыло", "утка", "террариум со змеями", "флейта", "10 кг картофеля", "набор разноцветных чернил для письма", "зеркало", "пистолет", "глазированный сырок", "нож", "лук для стрельбы", "шприц с инсулином", "изолента", "литий", "террариум с насекомыми", "коллекция монет", "запас пива", "игральные карты", "герметичная сумка", "ананас", "воздушный змей", "маникюрный набор", "фонарь", "запас консервов", "компас", "книга по выживанию в экстремальных ситуациях", "чай", "сахар", "кофемашина", "плюшевый мишка", "книга по биологии", "ракушка с Чёрного моря", "мяч-попрыгунчик", "беспроводная колонка", "аккумулятор", "набор для шитья (ткани, нитки)", "термос", "расчёска", "карта Нью-Йорка", "навигатор", "горсть песка", "перо голубя", "солнцезащитные очки", "клюшка для гольфа", "Библия", "радио", "сборник анекдотов", "часы", "ребёнок", "саженцы подсолнухов", "лук (для стрельбы)", "лук (овощ)", "задачник по физике", "атлас по географии", "гаечный ключ", "видеокамера", "клетка с декоративными мышами", "террариум с пауком", "одеяло"]
// l = random.choice(k)
// m = random.choice(k)
// if l == m:
// m = random.choice(k)
// print("Багаж:", l, m)
// elif l == m:
// m = random.choice(k)
// print("Багаж:", l, m)
// elif l == m:
// m = random.choice(k)
// print("Багаж:", l, m)
// elif l == m:
// m = random.choice(k)
// print("Багаж:", l, m)
// else:
// print("Багаж: ", l, ", ", m, sep="")
// n = ["был чемпионом мира по пейнтболу 3 года подряд", "знает 5 языков", "4 года учился на медицинском факультете", "два высших образования, одно из которых - биологическое", "около 2 лет назад проиграл квартиру в казино", "верит в сверхъестественное", "изобрёл новый способ обманывать людей на деньги", "хорошо знает химию", "был помощником опытного хирурга", "проходил курсы оказания первой медицинской помощи", "", "", "", "", "", "", "", "", "", ""]