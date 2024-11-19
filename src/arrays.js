import abdominales from './frames/abdominales.png';
import mandibula from './frames/mandibula.png';
import pelota from './frames/pelota.png';
import tabaco from './frames/tabaco.png';
import makeup from './frames/makeup.png';
import comoPosar from './frames/comoPosar.png';
import aplaudir_1 from './frames/aplaudir_1.png';
import saltar_2 from './frames/saltar_2.png';

import abdominales1 from './AUDIOS/abdominales1.mp3';
import abdominales2 from './AUDIOS/abdominales2.mp3';
import mandibula1 from './AUDIOS/mandibula1.mp3';
import mandibula2 from './AUDIOS/mandibula2.mp3';
import jueguitos1 from './AUDIOS/jueguitos1.mp3';
import jueguitos2 from './AUDIOS/jueguitos2.mp3';
import saltar1 from './AUDIOS/saltar1.mp3';
import saltar2 from './AUDIOS/saltar2.mp3';
import makeup1 from './AUDIOS/makeup1.mp3';
import makeup2 from './AUDIOS/makeup2.mp3';
import cigarrillo1 from './AUDIOS/cigarrillo1.mp3';
import cigarrillo2 from './AUDIOS/cigarrillo2.mp3';
import posar1 from './AUDIOS/posar1.mp3';
import posar2 from './AUDIOS/posar2.mp3';
import aplaudir1 from './AUDIOS/aplaudir1.mp3';
import aplaudir2 from './AUDIOS/aplaudir2.mp3';

export const frames = [
  { id: 'abdominales', image: abdominales, audios: [abdominales1, abdominales2] },
  { id: 'mandibula', image: mandibula, audios: [mandibula1, mandibula2] },
  { id: 'tabaco', image: tabaco, audios: [cigarrillo1, cigarrillo2] },
  { id: 'makeup', image: makeup, audios: [makeup1, makeup2] },
  { id: 'comoPosar', image: comoPosar, audios: [posar1, posar2] },
  { id: 'saltar', image: saltar_2, audios: [saltar1, saltar2] },
  { id: 'aplaudir', image: aplaudir_1, audios: [aplaudir1, aplaudir2] },
  { id: 'jueguitos', image: pelota, audios: [jueguitos1, jueguitos2]}
];