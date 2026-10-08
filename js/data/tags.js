/**
 * Темы ошибок.
 *
 * Каждое упражнение и каждая запись «клиники ошибок» помечены одной темой.
 * По ним тренажёр считает, где вы ошибаетесь чаще всего, и ведёт к нужному
 * модулю. Словарь закрытый: валидатор отвергает тему, которой здесь нет, —
 * иначе «verb2» и «verb-2» разошлись бы в статистике на два разных пункта.
 *
 * module — модуль, куда ведёт подсказка «повторите тему».
 */

export const ТЕМЫ = {
    verb2:        { title: 'Глагол на втором месте',          module: 'g01' },
    klammer:      { title: 'Вторая часть глагола — в конец',  module: 'g01' },
    nebensatz:    { title: 'Придаточное: глагол в конец',     module: 'g02' },
    konnektor:    { title: 'Союзы и связки',                  module: 'g10' },
    verbform:     { title: 'Спряжение в Präsens',             module: 'g03' },
    perfekt:      { title: 'Perfekt: Partizip II, haben/sein', module: 'g04' },
    praeteritum:  { title: 'Präteritum: war, hatte, konnte',  module: 'g04' },
    modal:        { title: 'Модальные глаголы',               module: 'g05' },
    konj2:        { title: 'Вежливость: könnte, würde, hätte', module: 'g05' },
    artikel:      { title: 'Артикль и род',                   module: 'g06' },
    plural:       { title: 'Множественное число',             module: 'g06' },
    negation:     { title: 'nicht и kein',                    module: 'g06' },
    kasus:        { title: 'Падежи: Akkusativ и Dativ',       module: 'g07' },
    pronomen:     { title: 'Местоимения и притяжательные',    module: 'g07' },
    adjektiv:     { title: 'Окончания прилагательных',        module: 'g08' },
    praeposition: { title: 'Предлоги',                        module: 'g09' },
    verbprep:     { title: 'Глагол + предлог',                module: 'g09' },
    zeit:         { title: 'Даты, время, сроки',              module: 'g09' },
    infinitiv:    { title: 'zu-Infinitiv и um … zu',          module: 'g10' },
    relativ:      { title: 'Относительные придаточные',       module: 'g10' },
    schreibung:   { title: 'Орфография и заглавные буквы',    module: 'g11' },
    zeichen:      { title: 'Запятые',                         module: 'g11' },
    register:     { title: 'du или Sie, обращение, прощание', module: 'l01' },
    aufbau:       { title: 'Структура письма',                module: 'l01' },
    leitpunkt:    { title: 'Раскрытие пунктов задания',       module: 'l02' },
    wortschatz:   { title: 'Выбор слова',                     module: 'l02' }
};

export const ИМЕНА_ТЕМ = Object.keys(ТЕМЫ);
