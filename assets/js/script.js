var fullscrin = false;
var map;
var polyline;
var stops =  [
    {
      "title": "Морской порт",
      "x": 52.9962712526321,
      "y": 67.6453349634489
    },
    {
      "title": "Педагогический колледж",
      "x": 53.0004554986954,
      "y": 67.6415539918956
    },
    {
      "title": "КСК",
      "x": 53.003636598587,
      "y": 67.6390194015303
    },
    {
      "title": "Площадь Ленина",
      "x": 53.0091512203217,
      "y": 67.637947934751
    },
    {
      "title": "Малый Качгорт.",
      "x": 53.0351901054382,
      "y": 67.6373519740538
    },
    {
      "title": "Электростанция.",
      "x": 53.0423194169998,
      "y": 67.6426069299717
    },
    {
      "title": "Сахалин",
      "x": 53.0470561981201,
      "y": 67.6488623709323
    },
    {
      "title": "Лесозавод.",
      "x": 53.0563527345657,
      "y": 67.6575654020686
    },
    {
      "title": "ул. Калмыкова.",
      "x": 53.0674463510513,
      "y": 67.6612663259597
    },
    {
      "title": "АТП.",
      "x": 53.0763030052185,
      "y": 67.664689417522
    },
    {
      "title": "п. Захребетный.",
      "x": 53.0833518505097,
      "y": 67.6663691803303
    },
    {
      "title": "Нефтебаза.",
      "x": 53.0934637784958,
      "y": 67.6676085401128
    },
    {
      "title": "п. Факел.",
      "x": 53.1195777654648,
      "y": 67.6658371325088
    },
    {
      "title": "ул. Тиманская.",
      "x": 53.1252264976502,
      "y": 67.6722168367641
    },
    {
      "title": "ул. Монтажников.",
      "x": 53.1269162893295,
      "y": 67.6753673242512
    },
    {
      "title": "Магазин Монтажник.",
      "x": 53.1244540214539,
      "y": 67.6776147945563
    },
    {
      "title": "Поселок Искателей",
      "x": 53.1183815002441,
      "y": 67.6770076115976
    }
  ];
var affiches = [
    {
        "date": "12 июня в 18:00",
        "title": "Концерт «И в песне, и в сердце Россия»",
        "address": "Омский центральный дом культуры,Ненецкий АО, Заполярный р-н, с Ома, ул Речная, д 16",
        "x": 46.493017,
        "y": 66.642393,
        "image": "affiche1.jpg"
    },
    {
        "date": "12 июня в 18:00",
        "title": "Концерт «Пою тебе, моя Россия»",
        "address": "Тиманский центральный дом культуры,Ненецкий АО, Заполярный р-н, п Индига, ул Центральная, д 1",
        "x": 49.034234,
        "y": 67.657620,
        "image": "affiche2.jpg"
    },
    {
        "date": "13 июня в 9:00",
        "title": "Экскурсионная программа «Обычаи и традиции ненецкого народа»",
        "address": "Центр арктического туризма,Ненецкий АО, г Нарьян-Мар, 7-й километр Лаявожской дороги",
        "x": 53.241548,
        "y": 67.633756,
        "image": "affiche3.jpg"
    },
    {
        "date": "13 июня в 10:00",
        "title": "Выставка «Пёстрое царство – земное государство»",
        "address": "Центр народного и декоративно-прикладного творчества,Ненецкий АО, г Нарьян-Мар, ул им Тыко-Вылко, д 2А",
        "x": 53.006459,
        "y": 67.641197,
        "image": "affiche4.jpg"
    }
];
var attractions = [
    {
        "name": "Здание Администрации Ненецкого автономного округа",
        "description": "Двухэтажное деревянное здание «Дома Советов» (администрации округа), построенное в 1940 году является памятником архитектуры регионального значения, вид которого практически не изменился.",
        "address": "Смидовича, д. 20, г. Нарьян-Мар, Ненецкий автономный округ. 166000",
        "x": 53.005686,
        "y": 67.638854,
        "image": "assets/images/attraction1.jpg",
    },
    {
        "name": "Здание главпочтамта",
        "description": "Здание главпочтамта (Здание окружного узла связи) — расположено по адресу улица Смидовича, 25. Является \"визитной карточкой\" Нарьян-Мара.",
        "address": "ул. Смидовича, д. 25, г. Нарьян-Мар, Ненецкий АО",
        "x": 53.007501,
        "y": 67.639148,
        "image": "assets/images/attraction2.jpg",
    },
    {
        "name": "Обелиск Победы г. Нарьян-Мар",
        "description": "Обелиск Победы — представляет собой стелу, установленную на улице Победы, рядом со зданием главпочтамта в честь павших в годы Великой Отечественной войны жителей Ненецкого округа.",
        "address": "ул. Победы, г. Нарьян-Мар, Ненецкий АО",
        "x": 53.007338,
        "y": 67.639426,
        "image": "assets/images/attraction3.jpg",
    },
    {
        "name": "Памятник \"Ветеранам боевых действий, участникам локальных войн и вооруженных конфликтов\"",
        "description": "Главной идеей памятника является образ времени. В основу заложены стилизованные песочные часы, символизирующие скоротечность времени и превратность судеб.",
        "address": "Ненецкий автономный округ, Нарьян-Мар, Аллея славы",
        "x": 53.009870,
        "y": 67.639855,
        "image": "assets/images/attraction4.jpg",
    },

    {
        "name": "Памятник \"Оружие Победы - Танк Т-34-85\"",
        "description": "Памятник установлен в честь боевой машины Победы.",
        "address": "г. Нарьян-Мар",
        "x": 53.124143,
        "y": 67.671590,
        "image": "assets/images/attraction5.jpg",
    },


];
var news = [
    {
        "date": "7 июня 2019, 15:03",
        "title": "​Ненецкий АО и ФГУП «Почта России» заключили соглашение о сотрудничестве",
        "short": "Подписи под документом поставили губернатор Ненецкого автономного округа Александр Цыбульский и генеральный директор федерального государственного унитарного предприятия «Почта России» Николай Подгузов.",
        "text_html": `
                        <p>Соглашение
                        определяет взаимодействие сторон в сфере совершенствования и развития
                        федеральной почтовой связи на территории Ненецкого автономного округа. Документ
                        подписан в пятницу, 7 июня, в рамках Петербургского экономического форума (ПМФ).</p><p>Предметом
                        соглашения является координация сторон в области развития почтовой сети на
                        территории ненецкого Заполярья посредством современных информационных и
                        телекоммуникационных технологий, а также создание эффективной системы
                        взаимодействия сторон для совершенствования почтового обслуживания населения, в
                        первую очередь на селе.</p><p><em>— Для нас «Почта России» это не просто организация, которая
                        доставляет грузы и почтовые отправления, эта организация является своего рода
                        связующей артерией для сельских населенных пунктов. В рамках соглашения мы
                        ведём речь о совместной работе по обновлению инфраструктуры почтовых отделений,
                        что очень важно, </em>— сказал после подписания соглашения губернатор НАО <strong>Александр
                        Цыбульский.</strong></p><p>Генеральный директор федерального предприятия Николай Подгузов отметил, что подписанное
                        соглашение является результатом совместной работы по плану развития почтовой
                        связи в Ненецком автономном округе. </p><p><em>- Сегодня правильно в
                        координации с регионами насыщать почтовые отделения услугами и делать их
                        удобными и доступными для жителей Севера</em>, — сказал <strong>он.</strong></p><p>Так,
                        соглашение предусматривает взаимодействие сторон для решения проблем
                        обеспечения функционирования убыточных, но социально-значимых отделений
                        почтовой связи, расположенных в труднодоступных и отдаленных поселениях округа.
                        Кроме того, стороны намерены совместно работать по вопросам повышения
                        доступности почтовых услуг, комплектования филиала «Почты России» в НАО
                        квалифицированными кадрами, защиты потребительского рынка от нелицензионных
                        услуг связи, внедрения высокотехнологичных услуг по доставке пенсий, пособий и
                        других выплат целевого назначения, приема коммунальных платежей.</p><p>Для
                        реализации соглашения будут созданы специальные рабочие группы, которые
                        проработают конкретные планы взаимодействия сторон в рамках соглашения.</p><p>Документ
                        заключен на четыре года, может быть пролонгирован, и вступит в силу с момента
                        его подписания.</p>`,
            "image_small": "assets/images/news1.jpg",
            "image": "assets/images/news1big.jpg",

    },
    {
        "date": "7 июня 2019, 13:28",
        "title": "Александр Цыбульский и Андрей Воробьев подписали соглашение о сотрудничестве",
        "short": "Документ определяет планы по информационному сотрудничеству Ненецкого автономного округа и Московской области. Подписание соглашение состоялось сегодня на площадке Петербургского международного экономического форума (ПМЭФ), который проходит в эти дни в Северной столице.",
        "image_small": "assets/images/news2.jpg",
    },
    {
        "date": "7 июня 2019, 12:00",
        "title": "В НАО продолжается приём заявок на присвоение ряда почётных званий",
        "short": "В НАО определят почётных строителей, работников нефтегазодобывающей промышленности, финансистов, а также почётных учителей, работников образования и физической культуры.",
        "image_small": "assets/images/news6.jpg",
    },
    {
        "date": "7 июня 2019, 10:54",
        "title": "Жители НАО могут пожаловаться на некачественные товары, работы и услуги через офисы «Мои Документы»",
        "short": "Жалоба в защиту прав потребителей будет направлена в Управление Роспотребнадзора по Ненецкому автономному округу. Такая возможность у жителей региона появилась в результате заключения Соглашения о взаимодействии между КУ НАО «МФЦ» и Управлением Роспотребнадзора по НАО.",
        "image_small": "assets/images/news3.jpg",
    },
    {
        "date": "7 июня 2019, 10:50",
        "title": "Прохождение паводка в НАО может стать более безопасным для жителей Красного",
        "short": "В посёлке Красное МО «Приморско-Куйский сельсовет» планируют расчистить и углубить русло одноимённой реки. Конкурс на разработку проектно-сметной документации (ПСД) объявлен на сайте государственных закупок. Заказчиком работ выступает Департамент природных ресурсов, экологии и агропромышленного комплекса НАО. Начальная (максимальная) стоимость контракта  составила порядка 2 млн рублей.",
        "image_small": "assets/images/news4.jpg",
    },
    {
        "date": "7 июня 2019, 10:39",
        "title": "Более 1,4 тонн гуманитарной помощи отправлено жителям сёл НАО",
        "short": "Сбор вещей для малообеспеченных жителей отдаленных населенных пунктов округа ежегодно организует Ненецкое региональное отделение Всероссийской общественной организации «Российский Красный Крест» совместно с Комплексным центром социального обслуживания населения НАО (КЦСО). За первые пять месяцев 2019 года гуманитарный груз доставлен в семь муниципалитетов региона.",
        "image_small": "assets/images/news5.jpg",
    }
]
var line_news = [
    "По состоянию на 16:00  28.02.2019 на зимней автодороге \"Нарьян-Мар – Усинск\" разрешено движение только для  грузовых  транспортных средств.",
    "Внимание! Паводок!",
    "Штормовое предупреждение на территории Ненецкого автономного округа на 11.01.2019"
]
var hashArray = [
    "i~z{KuymbIA]r@i@d@hEX|C@d@Hv@xAy@b@St@SXp@ZG`B{@p@o@~D{EP[N]j@uAeAuKk@yEVY|@iAD^",
    "ufz{K{snbIE_@fAsAd@m@fAqA@INMHKxAwBpAiB|B}CBZ",
    "{vy{KwgobIC[HK^i@DEDIjCqDz@aAJSXY~AoBl@w@pCoDqA_OEUA@eFtGg@n@IcA?uA@ODD",
    "epy{KejpbIEEHwAFeBHcBDsBFiC?O?Y?}B?}D?O?YBO?_@FcAFkAHw@TsERcCT}C`@gGdAaPXkHT}TVcHXgGRmEJwDDoBEiBMoAMgA[eAGSAU_AcBqB}C?I",
    "mly{K}lubI?HGIKKk@_Au@cA]i@MOaDgFW[eB}CaBsBeBgCaCyDkAcBaEmGA@",
    "imz{KoyvbI@AeBcCo@}@cAeBsAs@_FiCoCyAyCwAgIyD]OiAm@Ba@",
    "kt{{KcwwbIC`@kAo@sBiAEEmDoBSGa@[i@i@{H{IyAuA_CyB{@s@SSkFoE{@sAkI_RYk@AA",
    "yj}{KeqybI@@EGgA}Bw@yAcB_C]g@_@WsAqCg@uAY}AqF_f@a@}CSgA@AA?",
    "}a~{Kqv{bI@?A@WoASo@uBaHQo@mEkN_@y@EYe@oAaBmEs@mDeAoGA@",
    "iw~{K{m}bI@AeDwS{BkNKgAYyBIu@?C",
    "ya_|K}y~bI?BIw@WyBg@wGwA{OYsES}DQmEAyASoG?y@??",
    "qi_|Kcy`cI??WkRGgD?eBKwHGgHEuGD}CFuBRgDVoCr@kHFk@Ji@rAyLXoCH}AFmADoALyD`@yOd@{K|@qN?A",
    "o~~{Kk|ecI?@Di@`@mFBU@m@F}@PeBr@kJiBsBeCiCw@_A_F{F{AyA_AcAm@g@]g@gAoAYSSAS@MHQNQb@MZsAnGKd@_AbEy@hDSXKDUAOCsA_AgAmAA@",
    "kf`|Ku_gcI@AEEyCsCm@YgD_AkBy@e@[_@S_As@EEIfA",
    "az`|KgjgcIHgAA?]i@AIqBmEaA_C_@o@[I]RaAjB}BfEuAhC^|BFX|@pGTvB?A",
    "aha|KyzfcI?@?F^bCRlAN`AXlBt@`FH^QZaBfDLt@fAjHGH"
  ];
var elementsArr = [$('.stops-list'), $('.bus-list'), $('.affiche-list'), $('.news-list'), $('.news-item'), $('.attraction-list'), $('.line-news-item')];

ymaps.ready(init);

var stopsPlacemarks;
var affichesPlacemarks;
var attractionPlacemarks;
function init() {
    map = new ymaps.Map("map", {
        center: [67.637815, 53.010091],
        zoom: 17,
        controls: []
    });
    map.controls.add('zoomControl', {
        position: {
            bottom: '50px',
            left: '10px'
        }
    });


    var placemark = new ymaps.Placemark([67.637815, 53.010091], {
        iconContent: 'Вы здесь'
    }, {
        preset: 'islands#blackStretchyIcon',
        interactiveZIndex: false,
        zIndex: 999,
    });
    stopsPlacemarks = new ymaps.GeoObjectCollection({}, {
        preset: 'islands#blueCircleIcon'
    });
    affichesPlacemarks = new ymaps.GeoObjectCollection({}, {
        preset: 'islands#blueDotIcon',
        zIndex: 1000,
    });
    attractionPlacemarks = new ymaps.GeoObjectCollection({}, {
        preset: 'islands#blueDotIcon',
        zIndex: 1000,
    });
    map.geoObjects.add(placemark);
}

$(document).ready(function () {
    setSize();
    startMarquee();
});

$('.buses').find('li').click(function () {
    renderBus();
});

$('.back-button').find('i').click(function() {
    $parent = $(this).parent().parent();
    if($parent.hasClass('from-list')) {
        slideOutRight($parent, function() {
            renderNewsList();
            slideInRight($news_list);
            $parent.removeClass('from-list');
        });
    } else {
        hideAllElements();
    }
});

$('.bus-list').find('li').click(function() {
    renderBus();
});

$(document).on('click', '.affiche-box', function() {
    var index = $('.affiche-box').index(this);
    var affiche = affiches[index];
    map.setCenter([affiche['y'] + 0.001, affiche['x'] + 0.0025], 17);
    affichesPlacemarks.get(index).balloon.open();
});

$(document).on('click', '.attraction-box', function() {
    var index = $('.attraction-box').index(this);
    var attraction = attractions[index];
    map.setCenter([attraction['y'] + 0.001, attraction['x'] + 0.003], 17);
    attractionPlacemarks.get(index).balloon.open();
});

$(document).on('click', '.news_list_block', function() {
    $news_list = elementsArr[3];
    slideOutRight($news_list, function() {
        slideInRight($(".news-item"));
        $(".news-item").addClass('from-list');
    });
});

$(document).on('click', '.scrolling-news', function() {
    hideAllElements(function(){
        slideInRight($(".line-news-item"));
    });
})

$('.news-block').click(function() {
    hideAllElements(function(){
        slideInRight($(".news-item"));
    });
});

$('#menu').find('li').click(function() {
    $('#menu').find('li').removeClass('active');
    if($(this).hasClass('bus')) {
        $bus_list = elementsArr[1];
        if (!$bus_list.is(':visible')) {
            hideAllElements(function() {
                slideInRight($bus_list);
            });
        }
    }
    if($(this).hasClass('affiche')) {
        $affiches_list = elementsArr[2];
        if (!$affiches_list.is(':visible')) {
            hideAllElements(function() {
                renderAffiches();
                addAffichesPlacemarks();
                slideInRight($affiches_list);
            });
        }
    }
    if($(this).hasClass('news')) {
        $news_list = elementsArr[3];
        if(!$news_list.is(':visible')) {
            hideAllElements(function() {
                renderNewsList();
                slideInRight($news_list);
            });
        }
    }
    if($(this).hasClass('attractions')) {
        $attractions_list = elementsArr[5];
        if (!$attractions_list.is(':visible')) {
            hideAllElements(function() {
                renderAttractions();
                addAttractionPlacemarks();
                slideInRight($attractions_list);
            });
        }
    }
    $(this).addClass('active');
});

function addAttractionPlacemarks() {
    attractionPlacemarks.removeAll();
    $.each(attractions, function(index, attraction) {
        var placemark = createAttractionPlacemark(attraction);
        attractionPlacemarks.add(placemark);
    });
    map.geoObjects.add(attractionPlacemarks);
    map.setBounds(attractionPlacemarks.getBounds(), {
        zoomMargin: [20, 500, 20, 20],
    });
}

function createAttractionPlacemark(attraction) {
    var balloonHtml = `<div class="attraction-box-balloon">
                            <div class="attraction-image"><img src="${attraction['image']}" /></div>
                            <div class="attraction-name">${attraction['name']}</div>
                            <div class="attraction-description">${attraction['description']}</div>
                            <div class="attraction-address">${attraction['address']}</div>
                        </div>`;
    var placemark = new ymaps.Placemark([attraction['y'], attraction['x']], {
        balloonContent: balloonHtml,
    });
    return placemark;
}

function addAffichesPlacemarks() {
    affichesPlacemarks.removeAll();
    $.each(affiches, function(index, affiche) {
        var placemark = createAffichePlacemark([affiche['y'], affiche['x']], affiche['date'], affiche['title'], affiche['address'], affiche['image']);
        affichesPlacemarks.add(placemark);
    });
    map.geoObjects.add(affichesPlacemarks);
    map.setBounds(affichesPlacemarks.getBounds(), {
        zoomMargin: [20, 300, 20, 20],
    });
}

function createAffichePlacemark(coords, date, title, address, image) {
    var balloonHtml = `<div class="affiche-box-balloon">
                            <div class="affiche-image"><img src="assets/images/${image}" /></div>
                            <div class="affiche-date">${date}</div>
                            <div class="affiche-title">${title}</div>
                            <div class="affiche-place">${address}</div>
                        </div>`;
    var placemark = new ymaps.Placemark(coords, {
        balloonContent: balloonHtml,
    });
    return placemark;
}

function renderNewsList() {
    $news_list = elementsArr[3];
    $news_list.find('ul').empty();
    $.each(news, function(index, news_item) {
        var li = `<li>
                        <div class="news_list_block">
                            <div class="news_image"><img src="${news_item["image_small"]}" /></div>
                            <div class="news_text">
                                <div class="news_date">${news_item["date"]}</div>
                                <div class="news_title">${news_item["title"]}</div>
                                <div class="news_short">${news_item["short"]}</div>
                            </div>
                        </div>
                    </li>`;
        $news_list.find('ul').append(li);
    })
}

function renderAttractions() {
    $attractions_list = elementsArr[5];
    $attractions_list.find('ul').empty();
    $.each(attractions, function(index, attraction) {
        var li = `<li>
                        <div class="attraction-box">
                            <div class="attraction-image"><img src="${attraction['image']}" /> </div>
                            <div class="attraction-text">
                                <div class="attraction-name">${attraction['name']}</div>
                                <div class="attraction-address">${attraction['address']}</div>
                            </div>
                        </div>
                    </li>`;
        $attractions_list.find('ul').append(li);
});
}

function renderAffiches() {
    $affiches_list = elementsArr[2];
    $affiches_list.find('ul').empty();
        $.each(affiches, function(index, affiche) {
            var li = `<li>
                            <div class="affiche-box">
                                <div class="affiche-date">${affiche['date']}</div>
                                <div class="affiche-title">${affiche['title']}</div>
                                <div class="affiche-place">${affiche['address']}</div>
                            </div>
                        </li>`;
            $affiches_list.find('ul').append(li);
        });
    

} 

function renderBus() {
    $stopsList = elementsArr[0];
    $stopsList.find('ul').empty();
    $.each(stops, function(index, stop) {
        var li = `<li class="${(index >= 3 ) ? 'green' : ''} ${((index == 3) ? 'first' : '')}"><span>${stop['title']}</span></li>`;
        $stopsList.find('ul').append(li);
    });
    
        hideAllElements(function() {
            slideInRight($stopsList);
        });
    
    rednerPolyline(hashArray, stops);
}

function setSize() {
    $monitor = $('#monitor');
    $border = $('.border');
    var docHeight = $(window).height();
    var docWidth = $(window).width();
    if (docHeight < docWidth) {
        $monitor.css('width', '50%')
            .css('left', '25%')
            .css('top', 160);
        var monitorHeight = $monitor.width() / 3 * 4;
        $monitor.height(monitorHeight);
        $border.height(monitorHeight + 200);
    } else {
        $border.hide();
    }
}


function setCenterMap() {
    map.geoObjects.remove(affichesPlacemarks);
    map.setCenter([67.637815, 53.010091], 17);
}

function rednerPolyline(hashArray, stops) {
    deletePolyline();
    var polylineCoords = [];
    $.each(hashArray, function (index, value) {
        var decodetCoords = decodePolyline(value);
        $.merge(polylineCoords, decodetCoords);
    });


    polyline = new ymaps.Polyline(

        polylineCoords

        , {}, {
            strokeWidth: 4,


        });

    stopsPlacemarks.removeAll();
    $.each(stops, function(index, value) {
        stopsPlacemarks.add(new ymaps.Placemark([value['y'], value['x']]));
    })
    map.geoObjects.add(stopsPlacemarks);
    map.geoObjects.add(polyline);
    map.setBounds(polyline.geometry.getBounds(), {
        zoomMargin: [20, 300, 20, 20],
    });
}

function deletePolyline() {
    map.geoObjects.remove(polyline);
    map.geoObjects.remove(stopsPlacemarks);
    map.geoObjects.remove(affichesPlacemarks);
    map.geoObjects.remove(attractionPlacemarks);
}

function decodePolyline(encoded) {

    var points = []
    var index = 0,
        len = encoded.length;
    var lat = 0,
        lng = 0;
    while (index < len) {
        var b, shift = 0,
            result = 0;
        do {

            b = encoded.charAt(index++).charCodeAt(0) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);


        var dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
        lat += dlat;
        shift = 0;
        result = 0;
        do {
            b = encoded.charAt(index++).charCodeAt(0) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        var dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
        lng += dlng;

        points.push([lat / 1E5, lng / 1E5]);

    }
    return points;
}

function hideAllElements(callback) {
    $('#menu').find('li').removeClass('active');
    deletePolyline();
    setCenterMap();
    $.each(elementsArr, function(index, element) {
        if (element.is(':visible')) {
            slideOutRight(element, callback);
        } else if (index == elementsArr.length - 1) {
            if (typeof callback === 'function') callback();
        }
    });
}

function showStopsList() {
    rednerPolyline(hashArray, stops);
    $stopsList = $('.stops-list');
    $stopsList.find('ul').empty();
    $.each(stops, function(index, stop) {
        var li = `<li class="${(index >= 3 ) ? 'green' : ''}">${stop['title']}</li>`;
        $stopsList.find('ul').append(li);
    })
    $stopsList.show();
    animateCSS($stopsList, 'slideInRight', 'faster');
}

function hideStopsList(callback) {
    $stopsList = $('.stops-list');
    animateCSS($stopsList, 'slideOutRight', 'faster', function() {
        $stopsList.hide();
        deletePolyline();
        if (typeof callback === 'function') callback();
    });
}

function slideInRight(element, callback) {
    element.show();
    animateCSS(element, 'slideInRight', 'faster', callback);
}

function slideOutRight(element, callback) {
    animateCSS(element, 'slideOutRight', 'faster', function() {
        element.hide();
        if (typeof callback === 'function') callback();
    });
}

function animateCSS(element, animationName, animationSpeed, callback) {
    element.addClass(`animated ${animationName} ${animationSpeed}`);
    function handleAnimationEnd() {
        element.removeClass(`animated ${animationName} ${animationSpeed}`);
        element.off('animationend webkitAnimationEnd oAnimationEnd', handleAnimationEnd);
        if (typeof callback === 'function') callback();
    }

    element.on('animationend webkitAnimationEnd oAnimationEnd', handleAnimationEnd);
}

function startMarquee() {
    $.each(line_news, function(index, line_news_item) {
        var li = `<li><a class="scrolling-news" href="#">${line_news_item}</a></li>`;
        $('ul#ticker').append(li);
    });
    $('ul#ticker').liScroll();
}