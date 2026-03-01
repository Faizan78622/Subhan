
// ============ DARK MODE ============
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
  if (event.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// ============ LOADING SCREEN ============
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loadingScreen').classList.add('hide');
  }, 1800);
});

// ============ STARS ============
(function createStars() {
  var container = document.getElementById('starsContainer');
  var count = 80;
  for (var i = 0; i < count; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    var size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
    star.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(star);
  }
})();

// ============ FLOATING PARTICLES ============
(function createParticles() {
  var container = document.getElementById('particles');
  var shapes = ['✦', '✧', '☪', '✶', '◆'];
  for (var i = 0; i < 15; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    p.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.fontSize = (Math.random() * 12 + 8) + 'px';
    p.style.color = 'var(--gold)';
    p.style.setProperty('--dur', (Math.random() * 15 + 10) + 's');
    p.style.animationDelay = Math.random() * 15 + 's';
    container.appendChild(p);
  }
})();

// ============ TAB NAVIGATION ============
function switchTab(tabName) {
  document.querySelectorAll('.nav-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
  var targetBtn = document.querySelector('.nav-tab[data-tab="' + tabName + '"]');
  if (targetBtn) targetBtn.classList.add('active');
  var targetContent = document.getElementById('tab-' + tabName);
  if (targetContent) targetContent.classList.add('active');
}

document.querySelectorAll('.nav-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    switchTab(this.dataset.tab);
  });
});

// ============ COUNTDOWN TIMER ============
function updateCountdown() {
  var now = new Date();
  var iftarHour = 18, iftarMin = 10;
  var iftar = new Date(now.getFullYear(), now.getMonth(), now.getDate(), iftarHour, iftarMin, 0);

  if (now > iftar) {
    iftar.setDate(iftar.getDate() + 1);
  }

  var diff = iftar - now;
  var h = Math.floor(diff / 3600000);
  var m = Math.floor((diff % 3600000) / 60000);
  var s = Math.floor((diff % 60000) / 1000);

  document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(m).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(s).padStart(2, '0');

  var ramadanStart = new Date(2026, 1, 18);
  var rozaNum = Math.floor((now - ramadanStart) / 86400000) + 1;
  if (rozaNum < 1) rozaNum = 1;
  if (rozaNum > 30) rozaNum = 30;
  document.getElementById('cdRoza').textContent = rozaNum;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ============ NAATS DATA ============
var naatsData = [
  {
    title: 'مصطفیٰ جانِ رحمت پہ لاکھوں سلام',
    artist: 'اعلیٰ حضرت امام احمد رضا خان',
    lyrics: 'مصطفیٰ جانِ رحمت پہ لاکھوں سلام\nشمعِ بزمِ ہدایت پہ لاکھوں سلام\n\nوہ نبیوں میں رحمت لقب پانے والا\nمرادیں غریبوں کی بر لانے والا\n\nمصطفیٰ جانِ رحمت پہ لاکھوں سلام'
  },
  {
    title: 'اے حبیبِ خدا رحمتِ عالمین',
    artist: 'حافظ عبدالقادر ناعت خواں',
    lyrics: 'اے حبیبِ خدا رحمتِ عالمین\nآپ کا در ہے سب سے حسین\n\nآپ کے نام سے دل کو سکون ملے\nآپ کی یاد میں چین کا نور ملے'
  },
  {
    title: 'یا نبی سلام علیکم',
    artist: 'فصیح الدین صمدانی',
    lyrics: 'یا نبی سلام علیکم\nیا رسول سلام علیکم\nیا حبیب سلام علیکم\nصلواتُ اللہ علیکم\n\nاشرفِ الرُّسل مکیّ مدنی\nحضرتِ محمد مصطفیٰ'
  },
  {
    title: 'تیرے صدقے میں آقا',
    artist: 'اویس رضا قادری',
    lyrics: 'تیرے صدقے میں آقا\nتیرے در کے صدقے\nمیں ہر غم سے بچتا\nتیرے صدقے میں آقا\n\nمحمد کا روضہ قریب آ رہا ہے\nنبی کی گلی کا نظارہ ملا'
  },
  {
    title: 'محمد نبینا عربی',
    artist: 'جنید جمشید',
    lyrics: 'محمد نبینا عربی\nسُبحان اللہ ما اجملہ\nمحمد نبینا عربی\n\nصلوا علیہ وسلموا\nتسلیماً تسلیماً\nمحمد حبیبنا عربی'
  },
  {
    title: 'الہ تیرے در پر',
    artist: 'عبدالرؤف روفی',
    lyrics: 'الہ تیرے در پر\nبہت دیر بعد آیا ہوں\nمگر شکر ہے آیا تو\nتیرے در پر آیا ہوں\n\nمرے ماں باپ صدقے\nمرا سب کچھ تیرے لیے'
  },
  {
    title: 'بلاغل عُلیٰ بکمالہ',
    artist: 'حسان بن ثابت (رضی اللہ عنہ)',
    lyrics: 'بلاغل عُلیٰ بکمالہ\nکشف الدُّجیٰ بجمالہ\nحسنت جمیع خصالہ\nصلّوا علیہ و آلہ\n\nوہ جن کا حسن بے مثال\nجن سے روشن ہر بال بال'
  },
  {
    title: 'طیبہ کا سفر ہے اور میں نم دیدہ نم دیدہ',
    artist: 'اعجاز اعجاز بھٹی',
    lyrics: 'طیبہ کا سفر ہے اور میں نم دیدہ نم دیدہ\nمدینے کی فضا ہے اور دل بے چین بے چین\n\nوہاں سبز گنبد ہے جہاں آرام کرتے ہیں\nنبی پاک صلی اللہ علیہ وسلم'
  },
  {
    title: 'مرے آقا مرے مولیٰ',
    artist: 'قاری وحید زفر قاسمی',
    lyrics: 'مرے آقا مرے مولیٰ\nمحمد مصطفیٰ مولیٰ\n\nترے صدقے زمانے کو\nترے در سے خزانے کو\nمیں مانگوں تجھ سے جنّت کو'
  },
  {
    title: 'حسبی ربی جل اللہ',
    artist: 'سامی یوسف',
    lyrics: 'حسبی ربی جل اللہ\nما فی قلبی غیر اللہ\nنور محمد صلی اللہ\nحسبی ربی جل اللہ\n\nہر پل ہر لمحے\nاللہ ہی اللہ'
  },
  {
    title: 'رمضان آ گیا ساجن',
    artist: 'غلام مصطفیٰ قادری',
    lyrics: 'رمضان آ گیا ساجن\nرحمتوں کا مہینہ آ گیا\nبرکتوں کا موسم آ گیا\n\nاب ہے رحمت کا سایہ\nاب ہے مغفرت کا مایہ\nروزے رکھو اور دعائیں مانگو'
  },
  {
    title: 'اللہ ہو اللہ ہو',
    artist: 'سامی یوسف',
    lyrics: 'اللہ ہو اللہ ہو\nسبحان اللہ ہو\nاللہ ہو اللہ ہو\n\nذکرِ الٰہی سے دل روشن\nاللہ کے نام سے سب حسن\nہر لمحہ یاد میں رہے تیری'
  }
];

// ============ RENDER NAATS ============
function renderNaats(data) {
  var container = document.getElementById('naatsList');
  container.innerHTML = '';
  data.forEach(function(naat, index) {
    var lyricsHTML = naat.lyrics.split('\n').map(function(l) { return '<p>' + l + '</p>'; }).join('');
    var card = document.createElement('div');
    card.className = 'naat-card stagger';
    card.innerHTML =
      '<div class="naat-top">' +
        '<div class="naat-number">' + (index + 1) + '</div>' +
        '<button class="naat-play-btn" onclick="toggleNaatLyrics(this, event)"><i class="fas fa-chevron-down"></i></button>' +
      '</div>' +
      '<div class="naat-title">' + naat.title + '</div>' +
      '<div class="naat-artist"><i class="fas fa-user" style="margin-left:5px"></i> ' + naat.artist + '</div>' +
      '<div class="naat-lyrics">' + lyricsHTML + '</div>';
    container.appendChild(card);
  });
}

function toggleNaatLyrics(btn, e) {
  e.stopPropagation();
  var card = btn.closest('.naat-card');
  var lyrics = card.querySelector('.naat-lyrics');
  var icon = btn.querySelector('i');
  var isOpen = lyrics.classList.contains('show');
  lyrics.classList.toggle('show');
  card.classList.toggle('playing');
  icon.className = isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
}

function filterNaats() {
  var query = document.getElementById('naatSearch').value.trim();
  if (!query) {
    renderNaats(naatsData);
    return;
  }
  var filtered = naatsData.filter(function(n) {
    return n.title.indexOf(query) !== -1 || n.artist.indexOf(query) !== -1 || n.lyrics.indexOf(query) !== -1;
  });
  renderNaats(filtered);
}

renderNaats(naatsData);

// ============ DUAS DATA ============
var duasData = [
  { arabic: 'اَللّٰہُمَّ اِنِّیْ اَسْئَلُکَ الْجَنَّةَ وَ اَعُوذُ بِکَ مِنَ النَّارِ', urdu: 'اے اللہ! میں تجھ سے جنت مانگتا ہوں اور جہنم سے تیری پناہ چاہتا ہوں', ref: 'سنن ابو داؤد' },
  { arabic: 'رَبَّنَآ اٰتِنَا فِی الدُّنْیَا حَسَنَةً وَّ فِی الْاٰخِرَةِ حَسَنَةً وَّ قِنَا عَذَابَ النَّارِ', urdu: 'اے ہمارے رب! ہمیں دنیا میں نیکی دے اور آخرت میں بھی نیکی دے اور ہمیں آگ کے عذاب سے بچا', ref: 'سورۃ البقرۃ 2:201' },
  { arabic: 'اَللّٰہُمَّ بَارِکْ لَنَا فِیْ رَمَضَانَ', urdu: 'اے اللہ! ہمارے لیے رمضان میں برکت عطا فرما', ref: 'رمضان کی دعا' },
  { arabic: 'رَبِّ اشْرَحْ لِیْ صَدْرِیْ وَیَسِّرْ لِیْ اَمْرِیْ', urdu: 'اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان فرما', ref: 'سورۃ طٰہٰ 20:25-26' },
  { arabic: 'اَللّٰہُمَّ اِنَّکَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّیْ', urdu: 'اے اللہ! تو معاف کرنے والا ہے، معافی کو پسند فرماتا ہے، پس مجھے معاف فرما دے', ref: 'شب قدر کی دعا — ترمذی' },
  { arabic: 'لَآ اِلٰہَ اِلَّآ اَنْتَ سُبْحٰنَکَ اِنِّیْ کُنْتُ مِنَ الظّٰلِمِیْنَ', urdu: 'تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے تھا', ref: 'سورۃ الانبیاء 21:87' },
  { arabic: 'اَللّٰہُمَّ اَعِنِّیْ عَلٰی ذِکْرِکَ وَ شُکْرِکَ وَ حُسْنِ عِبَادَتِکَ', urdu: 'اے اللہ! مجھے اپنے ذکر، شکر اور اچھی عبادت میں مدد فرما', ref: 'سنن ابو داؤد' },
  { arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ اِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً', urdu: 'اے ہمارے رب! ہمارے دلوں کو ہدایت دینے کے بعد ٹیڑھا نہ کر اور ہمیں اپنے پاس سے رحمت عطا فرما', ref: 'سورۃ آل عمران 3:8' },
  { arabic: 'اَسْتَغْفِرُ اللہ الْعَظِیْمَ الَّذِیْ لَآ اِلٰہَ اِلَّا ہُوَ الْحَیُّ الْقَیُّوْمُ وَ اَتُوْبُ اِلَیْہِ', urdu: 'میں اللہ عظیم سے معافی مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو زندہ اور قائم رہنے والا ہے، اور میں اس کی طرف توبہ کرتا ہوں', ref: 'استغفار' },
  { arabic: 'اَللّٰہُمَّ صَلِّ عَلٰی مُحَمَّدٍ وَّ عَلٰی اٰلِ مُحَمَّدٍ', urdu: 'اے اللہ! محمد صلی اللہ علیہ وسلم پر اور ان کی آل پر رحمت نازل فرما', ref: 'درود شریف' }
];

function renderDuas() {
  var container = document.getElementById('duasList');
  container.innerHTML = '';
  duasData.forEach(function(dua, index) {
    var card = document.createElement('div');
    card.className = 'dua-card stagger';
    card.innerHTML =
      '<div class="badge badge-gold" style="margin-bottom:12px;direction:ltr">دعا ' + (index + 1) + '</div>' +
      '<div class="dua-arabic">' + dua.arabic + '</div>' +
      '<div class="dua-translation">' + dua.urdu + '</div>' +
      '<div class="dua-ref">' + dua.ref + '</div>';
    container.appendChild(card);
  });
}
renderDuas();

// ============ TASBIH ============
var tasbihCount = 0;
var tasbihTarget = 33;
var dhikrOptions = [
  { text: 'سبحان اللہ', target: 33 },
  { text: 'الحمد للہ', target: 33 },
  { text: 'اللہ اکبر', target: 34 },
  { text: 'استغفر اللہ', target: 100 },
  { text: 'لا الہ الا اللہ', target: 100 },
  { text: 'درود شریف', target: 100 }
];

function renderDhikrOptions() {
  var container = document.getElementById('dhikrOptions');
  container.innerHTML = '';
  dhikrOptions.forEach(function(d, i) {
    var chip = document.createElement('button');
    chip.className = 'dhikr-chip' + (i === 0 ? ' active' : '');
    chip.textContent = d.text;
    chip.onclick = function() {
      document.querySelectorAll('.dhikr-chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active');
      tasbihTarget = d.target;
      tasbihCount = 0;
      updateTasbihUI();
    };
    container.appendChild(chip);
  });
}

function incrementTasbih() {
  tasbihCount++;
  if (tasbihCount > tasbihTarget) tasbihCount = tasbihTarget;
  updateTasbihUI();
  var display = document.getElementById('tasbihCount');
  display.classList.add('pulse');
  setTimeout(function() { display.classList.remove('pulse'); }, 150);

  if (tasbihCount === tasbihTarget) {
    showToast('ماشاءاللہ! تسبیح مکمل ہو گئی ✨');
  }
}

function resetTasbih() {
  tasbihCount = 0;
  updateTasbihUI();
}

function updateTasbihUI() {
  document.getElementById('tasbihCount').textContent = tasbihCount;
  document.getElementById('tasbihTarget').textContent = 'ہدف: ' + tasbihTarget;
  var circumference = 2 * Math.PI * 90;
  var progress = tasbihCount / tasbihTarget;
  var offset = circumference * (1 - progress);
  document.getElementById('tasbihProgressFill').style.strokeDashoffset = offset;
}

renderDhikrOptions();
updateTasbihUI();

// ============ CALENDAR ============
function renderCalendar() {
  var container = document.getElementById('calendarList');
  container.innerHTML = '';
  var startDate = new Date(2026, 1, 18);

  for (var i = 0; i < 30; i++) {
    var date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    var baseSehri = 4 * 60 + 30 + Math.floor(i * 0.5);
    var baseIftar = 18 * 60 + 5 + Math.floor(i * 0.7);

    var sehriH = Math.floor(baseSehri / 60);
    var sehriM = baseSehri % 60;
    var iftarH = Math.floor(baseIftar / 60);
    var iftarM = baseIftar % 60;

    var sehriStr = sehriH + ':' + String(sehriM).padStart(2, '0') + ' AM';
    var iftarStr = (iftarH > 12 ? iftarH - 12 : iftarH) + ':' + String(iftarM).padStart(2, '0') + ' PM';

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var dateStr = date.getDate() + ' ' + months[date.getMonth()];

    var now = new Date();
    var isToday = date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();

    var day = document.createElement('div');
    day.className = 'calendar-day' + (isToday ? ' today' : '');
    day.innerHTML =
      '<div class="cal-roza">روزہ ' + (i + 1) + '</div>' +
      '<div class="cal-date">' + dateStr + '</div>' +
      '<div class="cal-times">' +
        '<div class="cal-time"><div class="cal-time-label">سحری</div><div class="cal-time-val">' + sehriStr + '</div></div>' +
        '<div class="cal-time"><div class="cal-time-label">افطار</div><div class="cal-time-val">' + iftarStr + '</div></div>' +
      '</div>';
    container.appendChild(day);
  }
}
renderCalendar();

// ============ ASMA UL HUSNA ============
var asmaData = [
  ['ٱللَّٰه','Allah'],['ٱلرَّحْمَٰن','The Most Gracious'],['ٱلرَّحِيم','The Most Merciful'],
  ['ٱلْمَلِك','The King'],['ٱلْقُدُّوس','The Most Holy'],['ٱلسَّلَام','The Source of Peace'],
  ['ٱلْمُؤْمِن','The Guardian'],['ٱلْمُهَيْمِن','The Protector'],['ٱلْعَزِيز','The Almighty'],
  ['ٱلْجَبَّار','The Compeller'],['ٱلْمُتَكَبِّر','The Supreme'],['ٱلْخَالِق','The Creator'],
  ['ٱلْبَارِئ','The Originator'],['ٱلْمُصَوِّر','The Fashioner'],['ٱلْغَفَّار','The Forgiver'],
  ['ٱلْقَهَّار','The Subduer'],['ٱلْوَهَّاب','The Bestower'],['ٱلرَّزَّاق','The Provider'],
  ['ٱلْفَتَّاح','The Opener'],['ٱلْعَلِيم','The All-Knowing'],['ٱلْقَابِض','The Withholder'],
  ['ٱلْبَاسِط','The Extender'],['ٱلْخَافِض','The Reducer'],['ٱلرَّافِع','The Exalter'],
  ['ٱلْمُعِزّ','The Honourer'],['ٱلْمُذِلّ','The Humiliator'],['ٱلسَّمِيع','The All-Hearing'],
  ['ٱلْبَصِير','The All-Seeing'],['ٱلْحَكَم','The Judge'],['ٱلْعَدْل','The Just'],
  ['ٱللَّطِيف','The Subtle'],['ٱلْخَبِير','The All-Aware'],['ٱلْحَلِيم','The Forbearing'],
  ['ٱلْعَظِيم','The Magnificent'],['ٱلْغَفُور','The Forgiving'],['ٱلشَّكُور','The Grateful'],
  ['ٱلْعَلِيّ','The Most High'],['ٱلْكَبِير','The Greatest'],['ٱلْحَفِيظ','The Preserver'],
  ['ٱلْمُقِيت','The Sustainer'],['ٱلْحَسِيب','The Reckoner'],['ٱلْجَلِيل','The Majestic'],
  ['ٱلْكَرِيم','The Generous'],['ٱلرَّقِيب','The Watchful'],['ٱلْمُجِيب','The Responsive'],
  ['ٱلْوَاسِع','The All-Encompassing'],['ٱلْحَكِيم','The Wise'],['ٱلْوَدُود','The Loving'],
  ['ٱلْمَجِيد','The Glorious'],['ٱلْبَاعِث','The Resurrector'],['ٱلشَّهِيد','The Witness'],
  ['ٱلْحَقّ','The Truth'],['ٱلْوَكِيل','The Trustee'],['ٱلْقَوِيّ','The Strong'],
  ['ٱلْمَتِين','The Firm'],['ٱلْوَلِيّ','The Friend'],['ٱلْحَمِيد','The Praiseworthy'],
  ['ٱلْمُحْصِي','The Appraiser'],['ٱلْمُبْدِئ','The Originator'],['ٱلْمُعِيد','The Restorer'],
  ['ٱلْمُحْيِي','The Giver of Life'],['ٱلْمُمِيت','The Bringer of Death'],['ٱلْحَيّ','The Ever Living'],
  ['ٱلْقَيُّوم','The Self-Subsisting'],['ٱلْوَاجِد','The Finder'],['ٱلْمَاجِد','The Noble'],
  ['ٱلْوَاحِد','The One'],['ٱلْأَحَد','The Unique'],['ٱلصَّمَد','The Eternal'],
  ['ٱلْقَادِر','The Capable'],['ٱلْمُقْتَدِر','The Omnipotent'],['ٱلْمُقَدِّم','The Expediter'],
  ['ٱلْمُؤَخِّر','The Delayer'],['ٱلْأَوَّل','The First'],['ٱلْآخِر','The Last'],
  ['ٱلظَّاهِر','The Manifest'],['ٱلْبَاطِن','The Hidden'],['ٱلْوَالِي','The Governor'],
  ['ٱلْمُتَعَالِي','The Most Exalted'],['ٱلْبَرّ','The Source of Good'],['ٱلتَّوَّاب','The Acceptor'],
  ['ٱلْمُنْتَقِم','The Avenger'],['ٱلْعَفُوّ','The Pardoner'],['ٱلرَّءُوف','The Kind'],
  ['مَالِك ٱلْمُلْك','Owner of Sovereignty'],['ذُو ٱلْجَلَال','Lord of Majesty'],['ٱلْمُقْسِط','The Equitable'],
  ['ٱلْجَامِع','The Gatherer'],['ٱلْغَنِيّ','The Self-Sufficient'],['ٱلْمُغْنِي','The Enricher'],
  ['ٱلْمَانِع','The Preventer'],['ٱلضَّارّ','The Distresser'],['ٱلنَّافِع','The Benefactor'],
  ['ٱلنُّور','The Light'],['ٱلْهَادِي','The Guide'],['ٱلْبَدِيع','The Originator'],
  ['ٱلْبَاقِي','The Everlasting'],['ٱلْوَارِث','The Inheritor'],['ٱلرَّشِيد','The Guide'],
  ['ٱلصَّبُور','The Patient']
];

function renderAsma(data) {
  var container = document.getElementById('asmaGrid');
  container.innerHTML = '';
  data.forEach(function(name, i) {
    var item = document.createElement('div');
    item.className = 'asma-item stagger';
    item.innerHTML =
      '<div class="asma-arabic">' + name[0] + '</div>' +
      '<div class="asma-meaning">' + name[1] + '</div>' +
      '<div class="asma-number">' + (i + 1) + '</div>';
    container.appendChild(item);
  });
}

function filterAsma() {
  var query = document.getElementById('asmaSearch').value.trim().toLowerCase();
  if (!query) {
    renderAsma(asmaData);
    return;
  }
  var filtered = asmaData.filter(function(n) {
    return n[0].indexOf(query) !== -1 || n[1].toLowerCase().indexOf(query) !== -1;
  });
  renderAsma(filtered);
}

renderAsma(asmaData);

// ============ TOAST ============
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

// ============ SHOW WELCOME TOAST ============
setTimeout(function() {
  showToast('رمضان مبارک! 🌙 Faizan Ansari');
}, 2500);
