/**
 * Индекс содержимого курса. ГЕНЕРИРУЕТСЯ: tools/make-index.mjs.
 * Руками не править — при следующем запуске скрипта правки пропадут.
 */

import д_g01_satz from './grammar/g01-satz.js';
import д_g02_nebensatz from './grammar/g02-nebensatz.js';
import д_g03_praesens from './grammar/g03-praesens.js';
import д_g04_vergangenheit from './grammar/g04-vergangenheit.js';
import д_g05_modal from './grammar/g05-modal.js';
import д_g06_nomen from './grammar/g06-nomen.js';
import д_g07_kasus from './grammar/g07-kasus.js';
import д_g08_adjektive from './grammar/g08-adjektive.js';
import д_g09_praepositionen from './grammar/g09-praepositionen.js';
import д_g10_verbindung from './grammar/g10-verbindung.js';
import д_g11_schreibung from './grammar/g11-schreibung.js';
import д_l01_aufbau from './letters/l01-aufbau.js';
import д_l02_leitpunkte from './letters/l02-leitpunkte.js';
import д_s01_fehlen from './letters/s01-fehlen.js';
import д_s02_einladung from './letters/s02-einladung.js';
import д_s03_termin from './letters/s03-termin.js';
import д_s04_wohnung from './letters/s04-wohnung.js';
import д_s05_beschwerde from './letters/s05-beschwerde.js';
import д_s06_kuendigung from './letters/s06-kuendigung.js';
import д_s07_arbeit from './letters/s07-arbeit.js';
import д_s08_anfrage from './letters/s08-anfrage.js';
import д_s09_reklamation from './letters/s09-reklamation.js';
import д_s10_schule from './letters/s10-schule.js';
import д_s11_freunde from './letters/s11-freunde.js';
import д_s12_bewerbung from './letters/s12-bewerbung.js';
import д_r01_verzeichnisse from './lesen/r01-verzeichnisse.js';
import д_r02_anzeigen from './lesen/r02-anzeigen.js';
import д_r03_meldungen from './lesen/r03-meldungen.js';
import д_r04_info from './lesen/r04-info.js';
import д_r05_brief from './lesen/r05-brief.js';
import д_errors from './errors.js';
import д_phrases from './phrases.js';
import д_reference from './reference.js';
import д_cheatsheet from './cheatsheet.js';
import д_lesen_ref from './lesen-ref.js';
import д_exam from './exam.js';

export const ГРАММАТИКА = [д_g01_satz, д_g02_nebensatz, д_g03_praesens, д_g04_vergangenheit, д_g05_modal, д_g06_nomen, д_g07_kasus, д_g08_adjektive, д_g09_praepositionen, д_g10_verbindung, д_g11_schreibung].sort((а, б) => а.order - б.order);
export const ТЕХНИКА = [д_l01_aufbau, д_l02_leitpunkte].sort((а, б) => а.order - б.order);
export const СИТУАЦИИ = [д_s01_fehlen, д_s02_einladung, д_s03_termin, д_s04_wohnung, д_s05_beschwerde, д_s06_kuendigung, д_s07_arbeit, д_s08_anfrage, д_s09_reklamation, д_s10_schule, д_s11_freunde, д_s12_bewerbung].sort((а, б) => а.order - б.order);
export const ЧТЕНИЕ = [д_r01_verzeichnisse, д_r02_anzeigen, д_r03_meldungen, д_r04_info, д_r05_brief].sort((а, б) => а.order - б.order);
export const ОШИБКИ = д_errors;
export const ФРАЗЫ = д_phrases;
export const СПРАВОЧНИК = д_reference;
export const ШПАРГАЛКА = д_cheatsheet;
export const СПРАВОЧНИК_ЧТЕНИЯ = д_lesen_ref;
export const ЭКЗАМЕН = д_exam;
