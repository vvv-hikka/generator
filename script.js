let main = document.querySelector('.main');
// let genderSelectors = document.querySelectorAll('.gender');
// let ageSelectors = document.querySelectorAll('.age');
// let healthSelectors = document.querySelectorAll('.health');
// let healthLevelSelectors = document.querySelectorAll('.health-level');
// let chickenpoxSelectors = document.querySelectorAll('.chickenpox');
// let childrenSelectors = document.querySelectorAll('.children');
// let nationSelectors = document.querySelectorAll('.nation');
// let personalitySelectors = document.querySelectorAll('.personality');
// let zodiacSelectors = document.querySelectorAll('.zodiac');
// let zodiacConflictSelectors = document.querySelectorAll('.zodiac-conflict');
// let hobbySelectors = document.querySelectorAll('.hobby');
// let fobiaSelectors = document.querySelectorAll('.fobia');
// let bodySelectors = document.querySelectorAll('.body');
// let luggageSelectors = document.querySelectorAll('.luggage');
// let infoFirstSelectors = document.querySelectorAll('.info-first');
// let infoSecondSelectors = document.querySelectorAll('.info-second');
// let cardFirstSelectors = document.querySelectorAll('.card-first');
// let cardSecondSelectors = document.querySelectorAll('.card-second');

let submitionButtonSelector = document.querySelector('.button');
let inputSelector = document.querySelector('input');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function randElement(N) {
    a = N[Math.floor(Math.random() * N.length)];
    return a;
}

submitionButtonSelector.onclick = function() {

    let main = document.querySelector('.main');
    main.remove();
    // genderSelectors.remove();
    // healthSelectors.remove();
    // healthLevel/Selectors.remove();
    // chickenpoxSelectors.remove();
    // childrenSelectors.remove();
    // nationSelectors.remove();
    // personalitySelectors.remove();
    // zodiacSelectors.remove();
    // zodiacConflictSelectors.remove();
    // hobbySelectors.remove();
    // fobiaSelectors.remove();
    // bodySelectors.remove();
    // luggageSelectors.remove();
    // infoFirstSelectors.remove();
    // infoSecondSelectors.remove();
    // cardFirstSelectors.remove();
    // cardSecondSelectors.remove();

    let n = inputSelector.value;

    let job = ["химик", "охранник", "иммунолог", "кондитер", "биолог", "профессиональная гадалка", "президент", "военный", "клоун", "модель", "хирург", "медсестра", "психолог", "фитнес-тренер", "повар", "программист", "хакер", "вирусолог", "генетик", "почвовед", "философ", "эколог", "физик", "журналист", "воспитатель", "диджей", "диетолог", "пчеловод", "инструктор по выживанию", "фермер", "тик-токер", "уборщик", "библиотекарь", "флорист", "режиссёр", "футболист", "ландшафтный дизайнер", "дирижёр", "строитель", "художник", "электрик", "космонавт", "лётчик", "полицейский", "адвокат", "певец", "следователь"];
    let gender = ["мужской", "женский"];
    let health = ["полностью здоров", "слепота", "грипп", "шизофрения", "косоглазие", "полностью здоров", "биполярное расстройство личности", "ветряная оспа", "полностью здоров", "туберкулёз", "коронавирус", "рак лёгких (8 месяцев до смерти)", "полностью здоров", "полностью здоров", "наркоман", "алкоголизм", "полностью здоров", "полностью здоров", "полностью здоров", "сахарный диабет", "рак печени (1,5 года до смерти)", "полностью здоров", "полностью здоров", "полностью здоров", "рак желудка (3 года до смерти)", "глухонемой", "булимия (бесконтрольное чувство голода)", "полностью здоров", "полностью здоров", "полностью здоров", "паралич нижних конечностей", "полностью здоров", "без рук", "без ног"];
    let healthLevel = ["скрытая стадия", "20%", "40%", "60%", "80%", "100%"];
    let chickenpox = ["да", "нет", "да"];
    let children = ["чайлдфри", "плодовит(а)", "не плодовит(а)", "плодовит(а)"];
    let nation = ["русский", "англичанин", "француз", "американец", "индеец", "австралиец", "китаец", "монгол", "мексиканец", "бразилец", "испанец", "португалец", "африканец"];
    let personality = ["жизнерадостный", "депрессивный", "капризный", "азартный", "весёлый", "агрессивный", "упрямый", "бестактный", "легкомысленный", "истеричный", "скептик", "параноик", "честный", "вежливый", "смелый", "умный", "застенчивый", "грубый", "великодушный", "независимый", "щедрый", "гостеприимный", "справедливый", "искренний", "осторожный", "творческий", "целеустремлённый", "выносливый", "мудрый", "ленивый", "эгоистичный", "обидчивый", "сплетник", "пунктуальный", "общительный", "скромный", "буйный", "панк", "авторитетный", "жестокий", "параноик"];
    let zodiac = ["скорпион", "рак", "стрелец", "лев", "рыбы", "телец", "козерог", "водолей", "весы", "дева", "овен", "близнецы"];
    let zodiacConflict =  ["скорпионом", "раком", "стрельцом", "львом", "рыбами", "тельцом", "козерогом", "водолеем", "весами", "девой", "овном", "близнецами"];
    let hobby = ["плотницкое дело", "разводить пчёл", "сбор грибов", "гомеопатия", "выращивание растений", "плотницкое дело", "играть в казино", "дайвинг", "домашние животные (разведение и уход)", "футбол", "тяжёлая атлетика", "бегать марафоны", "программирование", "медицина", "биология", "химия", "боевые искусства", "бокс", "фигурное катание", "рисование", "игра на музыкальных инструментах", "разведение кроликов", "кулинария", "изучение языков", "сёрфинг", "рыбалка", "фокусы", "гадание на картах", "воскрешение мёртвых", "хирургия", "философия", "ЗОЖ", "генетика", "психология", "охота", "туризм", "шитьё и вязание", "театр (театральный кружок)", "астрология", "паркур", "оружие", "стрельба из лука", "стрельба из пистолета", "дзюдо", "жонглирование", "пейнтбол", "массаж", "декупаж (декорирование различных предметов)", "маникюр", "мыловарение", "бальные танцы", "гольф", "граффити", "боулинг", "роспись пряников", "пивоварение"];
    let fobia =  ["клаустрофобия (боязнь замкнутых пространств)", "нет", "агорафобия (боязнь открытых мест и пространств)", "нет", "акрофобия (боязнь высоты)", "нет", "нет", "арахнофобия (боязнь пауков)", "коулрофобия (боязнь клоунов)", "герпетофобия (боязнь змей)", "нет", "синофобия (боязнь национальности «китаец»)", "инсектофобия (боязнь насекомых)", "нет", "никтофобия (боязнь темноты)", "нет", "нет", "гидрофобия (боязнь воды)", "нет", "турофобия (боязнь сыра)", "нет", "аулофобия (боязнь флейт)", "русофобия (боязнь национальности «русский»)", "нет", "мусофобия (боязнь мышей)", "нет", "нет", "анатидаефобия (боязнь того, что где-то существует утка, следящая за тобой)", "эйсоптрофобия (боязнь зеркал)", "нет", "нет", "кумпунофобия (боязнь пуговиц)", "нет", "айхмофобия (боязь острых предметов)", "мизофобия (навязчивый страх загрязнения либо заражения, стремление избежать соприкосновения с окружающими предметами)", "педофобия (навязчивый страх детей или имитирующих их изделий (кукол))"];
    let body = ["крепкое", "худое", "анорексия", "ожирение (1 степень)", "ожирение (2 степень)", "крепкое", "крепкое", "худое", "крепкое", "худое", "худое", "худое"];
    let luggage = ["мыло", "утка", "террариум со змеями", "флейта", "шапка-ушанка", "ноутбук (24 часа без зарядки)", "гитара", "кулинарные книги", "гематоген и упаковка аскорбинки", "чупа чупс", "четырёхлистный клевер на удачу", "запас пресной воды", "10 кг картофеля", "сыр", "набор разноцветных чернил для письма", "зеркало", "пуговица", "пистолет", "глазированный сырок", "нож", "лук для стрельбы", "шприц с инсулином", "изолента", "литий", "террариум с насекомыми", "коллекция монет", "запас пива", "игральные карты", "герметичная сумка", "ананас", "воздушный змей", "маникюрный набор", "фонарь", "запас консервов", "компас", "книга по выживанию в экстремальных ситуациях", "чай", "сахар", "кофемашина", "плюшевый мишка", "книга по биологии", "ракушка с Чёрного моря", "мяч-попрыгунчик", "беспроводная колонка", "аккумулятор", "набор для шитья (ткани, нитки)", "термос", "расчёска", "карта Нью-Йорка", "навигатор", "горсть песка", "перо голубя", "солнцезащитные очки", "клюшка для гольфа", "Библия", "радио", "сборник анекдотов", "часы", "ребёнок", "саженцы подсолнухов", "лук (для стрельбы)", "кукла", "лук (овощ)", "задачник по физике", "атлас по географии", "гаечный ключ", "видеокамера", "клетка с декоративными мышами", "террариум с пауком", "подушка с одеялом", "буханка хлеба"];
    let infoFirst = ["был чемпионом мира по пейнтболу 3 года подряд", "знает 5 языков", "4 года учился на медицинском факультете", "проходил курсы биологии", "два высших образования, одно из которых - биологическое", "около 2 лет назад проиграл квартиру в казино", "верит в сверхъестественное", "изобрёл новый способ обманывать людей на деньги", "хорошо знает химию", "был помощником опытного хирурга", "проходил курсы оказания первой медицинской помощи", "в школе ходил в инженерный кружок", "хорошо ориентируется на местности", "победил рак мозга с помощью народной медицины, в которой теперь хорошо разбирается", "мастер боевых искусств", "кандидат мастера спорта по боксу", "проходил курсы по самозащите", "какое-то время работал мимом", "атеист", "вегетарианец", "может сделать алкоголь из чего угодно", "коллекционирует вино"];
    let infoSecond = ["воевал в Сирии", "певчего голоса лишен напрочь", "не умеет врать в простой бытовой жизни", "неудачник в картах, и всё равно их любит", "всё ещё верит в высшие идеалы справедливости", "врать не любит, но умеет это делать", "коллекционирует оружие ближнего боя", "панически боится вида крови", "начал пить с пятнадцати лет", "не умеет плавать", "любит поддакивать и соглашаться, но в итоге всё равно делает всё по-своему", "нет чувства юмора", "может срываться на людей без всякой на то причины", "выглядит глупее, чем есть на самом деле", "сарказм — его призвание", "притворяется добрым, но на самом деле ему плевать на чувства людей", "добивается всего самостоятельно, не умеет работать в команде", "во время пожара спас котёнка из горящего дома", "проходил курсы садовода", "пять лет назад спас тонущего ребёнка"];
    let card = ["Вылечить любого игрока от любых недугов", "Перегенерировать бункер", "Даёт возможность воскресить другого игрока", "Рядом с вами второй бункер где находятся 2 ученых-физика", "Украсть чужое здоровье и плодовитость", "Карта друга (если человек до тебя не попадает в бункер — ты тоже)", "Украсть багаж другого человека", "Карта врага (если человек до тебя попадает в бункер — ты нет)", "Изменить свою профессию", "Ваш бункер находится в лесу", "Раскрыть любую характеристику любого игрока", "Около вашего бункера находится другой вражеский бункер", "Ты можешь поменять свою карту дополнительной информации на новую", "Рядом с вами второй бункер где находятся агроном", "Карта друга (если человек после тебя не попадает в бункер — ты тоже)", "Перегенирируйте состояние здоровье всем", "Карта врага (если человек после тебя попадает в бункер — ты нет)", "Данная карта лечит бесплодие у любого игрока", "Ваш бункер находится около пресного озера", "Рядом с вами второй бункер где находятся 2 строителя", "Перегенерировать профессии всем игрокам", "Перегенирируйте любую вашу характеристику", "В 20 метрах от вашего бункера сохранился погреб с вином", "Изменить профессию любого игрока (себя нельзя)", "Возле вас находится бункер в котором 3 мужчины (здоровые возраст до 30)", "Вы знаете дорогу к бункеру, полному продовольствия (запас на 2 месяца)", "Вылечить себя от любых недугов", "Возле вас находится бункер в котором 3 женщины(здоровые возраст до 30)", "Поменять местами багаж двух других игроков", "Украсть чужое здоровье", "Украсть чужой рост и телосложение", "Карта позволяет омолодить другого игрока", "Позволяет убрать одного человека без голосования", "Позволяет снять с себя все голоса во время голосования", "Даёт игроку обладающему картой иммунитет на день, его не могут убрать на голосании", "Даёт игроку обладающему картой иммунитет на день, его не могут убрать на голосании", "Даёт иммунитет другому игроку (помимо себя) на вылет после голосования, его нельзя будет убрать этим днём"];

    let div = document.createElement('div');
    div.className = "main";
    document.body.append(div);

    for(let i=0; i<n; i++) {

        let jobSelector = document.createElement('div');
        jobSelector.className = "job";
        div.append(jobSelector);
        let genderSelector = document.createElement('div');
        genderSelector.className = "gender";
        div.append(genderSelector);
        let ageSelector = document.createElement('div');
        ageSelector.className = "age";
        div.append(ageSelector);
        let healthSelector = document.createElement('div');
        healthSelector.className = "health";
        div.append(healthSelector);
        let healthLevelSelector = document.createElement('div');
        healthLevelSelector.className = "health-level";
        div.append(healthLevelSelector);
        let chickenpoxSelector = document.createElement('div');
        chickenpoxSelector.className = "chickenpox";
        div.append(chickenpoxSelector);
        let childrenSelector = document.createElement('div');
        childrenSelector.className = "children";
        div.append(childrenSelector);
        let nationSelector = document.createElement('div');
        nationSelector.className = "nation";
        div.append(nationSelector);
        let personalitySelector = document.createElement('div');
        personalitySelector.className = "personality";
        div.append(personalitySelector);
        let zodiacSelector = document.createElement('div');
        zodiacSelector.className = "zodiac";
        div.append(zodiacSelector);
        let zodiacConflictSelector = document.createElement('div');
        zodiacConflictSelector.className = "zodiac-conflict";
        div.append(zodiacConflictSelector);
        let hobbySelector = document.createElement('div');
        hobbySelector.className = "hobby";
        div.append(hobbySelector);
        let fobiaSelector = document.createElement('div');
        fobiaSelector.className = "fobia";
        div.append(fobiaSelector);
        let bodySelector = document.createElement('div');
        bodySelector.className = "body";
        div.append(bodySelector);
        let luggageSelector = document.createElement('div');
        luggageSelector.className = "luggage";
        div.append(luggageSelector);
        let infoFirstSelector = document.createElement('div');
        infoFirstSelector.className = "info-first";
        div.append(infoFirstSelector);
        let infoSecondSelector = document.createElement('div');
        infoSecondSelector.className = "info-second";
        div.append(infoSecondSelector);
        let cardFirstSelector = document.createElement('div');
        cardFirstSelector.className = "card-first";
        div.append(cardFirstSelector);
        let cardSecondSelector = document.createElement('div');
        cardSecondSelector.className = "card=second";
        div.append(cardSecondSelector);
        let line = document.createElement('hr');
        div.append(line);

        healthValue = randElement(health);
        luggageValueFirst = randElement(luggage);
        luggage.splice(luggage.indexOf(luggageValueFirst),luggage.indexOf(luggageValueFirst));
        luggageValueSecond = randElement(luggage);
        cardFirstValue = randElement(card);
        card.splice(card.indexOf(cardFirstValue),card.indexOf(cardFirstValue));
        cardSecondValue = randElement(card);

        jobSelector.textContent = "Профессия: " + randElement(job);
        genderSelector.textContent = "Пол: " + randElement(gender);
        ageSelector.textContent = "Возраст: " + randomInteger(18, 70);
        healthSelector.textContent = 'Состояние здоровья: ' + healthValue;
        if ((healthValue == "слепота") || (healthValue == "грипп") || (healthValue == "шизофрения") || (healthValue == "рак желудка (3 года до смерти)") || (healthValue == "туберкулёз") || (healthValue == "наркоман") || (healthValue == "остеохондроз") || (healthValue == "рак лёгких (8 месяцев до смерти)") || (healthValue == "алкоголизм") || (healthValue == "коронавирус") || (healthValue == "сахарный диабет") || (healthValue == "рак печени (1,5 года до смерти)") || (healthValue == "плоскостопие")) {
            healthLevelSelector.textContent = "Тяжесть болезни: " + randElement(healthLevel);
        } else {
            healthLevelSelector.textContent = "Тяжесть болезни: —";
        }
        chickenpoxSelector.textContent = "Переболел ветрянкой? " + randElement(chickenpox);
        childrenSelector.textContent = 'Потомство: ' + randElement(children);
        nationSelector.textContent = 'Национальность: ' + randElement(nation);
        personalitySelector.textContent = 'Черта характера: ' + randElement(personality);
        zodiacSelector.textContent = "Знак Зодиака: " + randElement(zodiac);
        zodiacConflictSelector.textContent = "Конфликтует с: " + randElement(zodiacConflict);
        hobbySelector.textContent = 'Хобби: ' + randElement(hobby);
        fobiaSelector.textContent = 'Фобия: ' + randElement(fobia);
        bodySelector.textContent = "Рост, телосложение: " + randomInteger(163, 195) + ", " + randElement(body);
        luggageSelector.textContent = 'Багаж: ' + luggageValueFirst + ', ' + luggageValueSecond;
        infoFirstSelector.textContent = "Дополнительная информация №1: " + randElement(infoFirst);
        infoSecondSelector.textContent = "Дополнительная информация №2: " + randElement(infoSecond);
        cardFirstSelector.textContent = 'Карта №1: ' + cardFirstValue;
        cardSecondSelector.textContent = 'Карта №2: ' + cardSecondValue;
    }
}