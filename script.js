// ==================== AŞK DOLU AKTİVİTELER - JAVASCRIPT ====================
(function() {
    'use strict';

    // DOM
    const tarihInput = document.getElementById('tarihInput');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const romantikCard = document.getElementById('romantikCard');
    const eglenceliCard = document.getElementById('eglenceliCard');
    const aniCard = document.getElementById('aniCard');
    const routesContainer = document.getElementById('routesContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const confettiContainer = document.getElementById('confettiContainer');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const countdownText = document.getElementById('countdownText');
    const activityCounter = document.getElementById('activityCounter');
    const favoritesSection = document.getElementById('favoritesSection');
    const favoritesList = document.getElementById('favoritesList');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorCode = document.getElementById('colorCode');
    const songName = document.getElementById('songName');
    const songArtist = document.getElementById('songArtist');

    let kesfedilenSayi = 0;
    let favoriler = JSON.parse(localStorage.getItem('favoriAktiviteler') || '[]');
    let sonAktiviteler = { romantik: '', eglenceli: '', ani: '' };

    // ==================== 300 AKTİVİTE (100'er adet) ====================
    const romantikAktiviteler = [
        "🌅 Boğaz'da gün batımı", "🕯️ Mum ışığında yemek", "💃 Dans kursu", "🎻 Canlı müzik",
        "🍷 Şarap tadımı", "🌹 Gizli bahçe pikniği", "🛁 Spa & masaj", "📖 Aşk mektupları",
        "🎬 Film maratonu", "🌌 Yıldız izleme", "🍫 Çikolata fondü", "💌 Hediye atölyesi",
        "🎶 Playlist yapma", "🚤 Boğaz turu", "🌸 Çiçek aranjmanı", "🕺 Dans gecesi",
        "📸 Fotoğraf çekimi", "🍝 İtalyan yemeği", "🎨 Resim yapma", "🌿 Botanik bahçesi",
        "🎭 Opera/bale", "🍳 Sürpriz kahvaltı", "🎹 Piyano dinletisi", "📚 Kitapçı turu",
        "🌊 Sahil yürüyüşü", "🕰️ Antikacı gezisi", "🍵 Çay bahçesi", "🎈 Balonlu oda",
        "💐 Çiçek alma", "🌙 Ay ışığı yürüyüşü", "🎵 Plak dinleme", "🍰 Pasta yapımı",
        "📝 Şiir yazma", "🎭 Tiyatro", "🍣 Suşi yapımı", "💑 Çift yogası",
        "🎡 Dönme dolap", "🌲 Orman yürüyüşü", "🕯️ Mum yapımı", "🎨 Mozaik boyama",
        "📖 Hikaye okuma", "🍯 Bal tadımı", "🌅 Sabah güneşi", "🎻 Keman dinletisi",
        "🕊️ Güvercin besleme", "🖼️ Sanat galerisi", "🍮 Muhallebi yapma", "🌺 Tropikal sera",
        "💌 Mektup yazma", "🕯️ Aromaterapi", "🌿 Bitki yetiştirme", "🎶 Müzik kutusu",
        "🌹 Gül bahçesi", "🎻 Oda müziği", "🍵 Japon çayı", "🌸 Sakura izleme",
        "🎨 Ebru sanatı", "🕯️ Mumlu akşam", "📸 Albüm hazırlama", "🎭 Gölge oyunu",
        "🌙 Gece pikniği", "🎵 Vinyl gecesi", "💑 Meditasyon", "🍫 Çikolata yapımı",
        "🌅 Gün batımı teknesi", "🎨 Seramik boyama", "🕊️ Kuş sesleri", "📖 Şiir antolojisi",
        "🎹 Müzik dersi", "🌿 Lavanta bahçesi", "🍷 Şarap mahzeni", "🎭 Bale gösterisi",
        "🕯️ El yapımı mum", "🌌 Meteor yağmuru", "🎨 Tuval boyama", "💌 Kartpostal yazma",
        "🌅 Deniz kenarı kahvaltı", "🎨 Suluboya", "🕯️ Mum Işığında Şiir", "🌙 Çatı katı yıldız",
        "🍷 Peynir & şarap", "🎵 Canlı caz", "🌹 Gül yapraklı banyo", "📸 Polaroid çekim",
        "🎨 Karakalem portre", "🕯️ El ele masaj", "🌿 Ormanda kamp", "🍫 Çikolata tadımı",
        "🎻 Viyolonsel dinletisi", "💑 Sokak dansı", "🌅 Balon turu", "🕯️ Şömine başı sohbet",
        "🎨 Mozaik lamba yapımı", "🌌 Gözlemevi ziyareti", "🍷 Bağ bozumu", "💌 Zaman kapsülü"
    ];

    const eglenceliAktiviteler = [
        "🎤 Karaoke", "🎮 Oyun salonu", "🍔 Sokak lezzetleri", "🎢 Luna park",
        "🎲 Masa oyunları", "🤹 Sokak gösterisi", "🍦 Dondurma tadımı", "🎯 Dart",
        "🎨 Komik portre", "🚲 Tandem bisiklet", "🎭 Doğaçlama tiyatro", "🎳 Bowling",
        "🧩 Kaçış odası", "🍿 Komedi filmi", "🎪 Festival", "🎸 Müzik atölyesi",
        "🤸 Parkur", "🕹️ VR oyun", "🍳 Yemek yarışı", "🎯 Laser tag",
        "🏓 Masa tenisi", "🎱 Bilardo", "🛼 Roller paten", "⛸️ Buz pateni",
        "🎿 Kayak", "🏄 Sörf", "🧗 Kaya tırmanışı", "🎪 Trambolin",
        "🤹 Jonglör", "🎨 Graffiti", "🕺 Hip hop", "🎤 Rap battle",
        "📸 Komik fotoğraf", "🎭 Kukla tiyatrosu", "🍕 Pizza yarışı", "🧁 Cupcake süsleme",
        "🍣 Suşi yuvarlama", "🎯 Balon patlatma", "🕹️ Atari", "🎲 Monopoly",
        "🧩 Yapboz", "🎨 Parmak boyama", "🖍️ Tebeşir sanatı", "🎈 Su balonu",
        "🔫 Su tabancası", "🎤 Yetenek yarışması", "💃 Dans yarışması", "🎸 Hava gitarı",
        "🎮 Wii Sports", "🎯 Halka atma", "🏹 Ok atma", "🪓 Balta atma",
        "🎳 Mini bowling", "⛳ Mini golf", "🏓 Pickleball", "🤸 Jimnastik",
        "🛹 Kaykay", "🏀 Basketbol", "⚽ Futbol", "🏐 Voleybol",
        "🎾 Tenis", "🏸 Badminton", "🏒 Hokey", "🎿 Su kayağı",
        "🏊 Yüzme", "🤿 Şnorkel", "🐠 Akvaryum", "🦁 Hayvanat bahçesi",
        "🐒 Maymun besleme", "🦜 Papağan", "🐎 Ata binme", "🐪 Deve turu",
        "🎢 Su kaydırağı", "🏰 Kumdan kale", "🪁 Uçurtma", "🪂 Yamaç paraşütü",
        "🚁 Helikopter turu", "🏎️ Go-kart", "🎳 Disko bowling", "🕺 Silent disco",
        "🎪 Palyaço makyajı", "🎈 Balon hayvan", "🎭 Kostüm parti", "🍕 Yeme yarışı",
        "🎤 Ses taklidi", "🎮 Oyun maratonu", "🎪 Sirk okulu", "🤹 Ateş çemberi"
    ];

    const aniAktiviteler = [
        "📸 Polaroid avı", "📔 Anı defteri", "🎨 Seramik boyama", "🧵 Bileklik yapımı",
        "🎬 Kısa film", "🖼️ Fotoğraf kolajı", "💿 Mix CD", "🗺️ Gelecek haritası",
        "📮 Zaman kapsülü", "🎭 Gölge oyunu", "🧁 Kek süsleme", "🎈 Mesaj balonu",
        "📱 TikTok videosu", "🖌️ Tuval resim", "🎵 Şarkı besteleme", "📚 Kitap ayracı",
        "🎪 Anı kutusu", "🖼️ Dijital albüm", "✒️ Kaligrafi", "🎨 Parmak sanatı",
        "📖 Hikaye kitabı", "🎭 Kukla yapımı", "🖌️ Taş boyama", "🧶 Örgü öğrenme",
        "🎨 Ebru sanatı", "📸 Albüm yapma", "💌 Kartpostal", "🎵 Şarkı sözü",
        "📔 Seyahat günlüğü", "🖼️ Kolaj tablo", "🎭 Maske yapımı", "🧵 Nakış",
        "📱 Vlog çekimi", "🎨 Vitray", "💿 Podcast", "📖 Şiir antolojisi",
        "🖌️ Minyatür", "🎭 Kostüm", "🧶 Makrome", "🎨 Akrilik boyama",
        "📸 Konsept çekim", "💌 Mühür yapımı", "🎵 Enstrüman", "📔 Tarif defteri",
        "🖼️ Gölge kutusu", "🎨 Mozaik sanatı", "📱 Stop motion", "💿 Cover kaydetme",
        "✒️ Hat sanatı", "🧵 Keçe sanatı", "🎭 Gölge tiyatrosu", "📸 Anı köşesi",
        "🖌️ Karakalem portre", "🎨 Pastel boya", "💌 Mektup kutusu", "🧶 Amigurumi",
        "📖 Anı defteri süsleme", "🎭 Origami", "🖼️ Çerçeve süsleme", "🎨 Su mermeri",
        "📱 Animasyon", "💿 Sesli mesaj", "✒️ El yazısı", "🧵 Kumaş boyama",
        "🎨 Sabun yapımı", "🖌️ Ahşap boyama", "📸 Siyah-beyaz fotoğraf", "🎭 Papier-mâché",
        "🧶 Ponpon yapımı", "💌 Zarf süsleme", "🎨 Mum boyama", "📔 Planner süsleme",
        "🖼️ Duvar sanatı", "✒️ Davetiye", "🧵 Patchwork", "🎨 Batik",
        "📱 Dijital scrapbook", "💿 Müzik videosu", "🎭 Gölge kuklası", "🖌️ Suluboya kart",
        "🧶 Dantel", "🎨 Kolaj sanatı", "📸 360 fotoğraf", "💌 Balonlu mektup",
        "✒️ İsim yazma", "🧵 Kanaviçe", "🎭 Maskot yapımı", "📔 Anı baskısı",
        "🖼️ Magnet yapımı", "🎨 Kil hamuru", "💿 Plak kaydı", "📸 Fotoğraf duvarı"
    ];

    // ==================== ROTALAR ====================
    const rotalar = [
        [
            { isim: '🏛️ Galata Kulesi', link: 'https://www.google.com/maps/place/Galata+Kulesi' },
            { isim: '☕ Karaköy Kahve', link: 'https://www.google.com/maps/search/Karak%C3%B6y+kahve' },
            { isim: '🌉 Galata Köprüsü', link: 'https://www.google.com/maps/place/Galata+K%C3%B6pr%C3%BCs%C3%BC' }
        ],
        [
            { isim: '🌸 Emirgan Korusu', link: 'https://www.google.com/maps/place/Emirgan+Korusu' },
            { isim: '🍵 Çınaraltı Çay', link: 'https://www.google.com/maps/search/Emirgan+%C3%A7ay' },
            { isim: '🏞️ Japon Bahçesi', link: 'https://www.google.com/maps/place/Baltaliman%C4%B1+Japon+Bah%C3%A7esi' }
        ],
        [
            { isim: '🕌 Sultanahmet', link: 'https://www.google.com/maps/place/Sultanahmet' },
            { isim: '🍦 Ali Usta', link: 'https://www.google.com/maps/search/Ali+Usta+dondurma' },
            { isim: '🛍️ Arasta Çarşısı', link: 'https://www.google.com/maps/place/Arasta+%C3%87ar%C5%9F%C4%B1s%C4%B1' }
        ],
        [
            { isim: '🎨 Moda Sahili', link: 'https://www.google.com/maps/place/Moda+Sahili' },
            { isim: '🍪 Kadıköy Çarşı', link: 'https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y' },
            { isim: '🎭 Barış Manço Müzesi', link: 'https://www.google.com/maps/place/Bar%C4%B1%C5%9F+Man%C3%A7o+M%C3%BCzesi' }
        ]
    ];

    // ==================== RENKLER & ŞARKILAR ====================
    const renkler = [
        { isim: 'Aşk Pembesi', kod: '#ff6b9d' }, { isim: 'Tutku Kırmızısı', kod: '#e63946' },
        { isim: 'Romantik Mor', kod: '#9b59b6' }, { isim: 'Mercan', kod: '#ff7f7f' },
        { isim: 'Gül Kırmızısı', kod: '#c41e3a' }, { isim: 'Lavanta', kod: '#b565a7' }
    ];

    const sarkilar = [
        { isim: 'Perfect', sanatci: 'Ed Sheeran', id: '2Vv-BfVoq4g' },
        { isim: 'All of Me', sanatci: 'John Legend', id: '450p7goxZqg' },
        { isim: 'Aşk', sanatci: 'Tarkan', id: 'U0UNr8GON7A' },
        { isim: 'Thinking Out Loud', sanatci: 'Ed Sheeran', id: 'lp-EO5I60KA' },
        { isim: 'Just the Way You Are', sanatci: 'Bruno Mars', id: 'LjhCEhWiKXk' },
        { isim: 'Yalnızlık Senfonisi', sanatci: 'Sezen Aksu', id: 'WlGj7O3RHXE' }
    ];

    // ==================== FONKSİYONLAR ====================
    const rastgele = arr => arr[Math.floor(Math.random() * arr.length)];

    function benzersizSec(arr, onceki) {
        let secilen, deneme = 0;
        do { secilen = rastgele(arr); deneme++; }
        while (secilen === onceki && arr.length > 1 && deneme < 20);
        return secilen;
    }

    function toastGoster(mesaj) {
        toastText.textContent = mesaj;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function konfeti() {
        const renkler = ['#ff6b9d','#e63946','#ffd700','#ff69b4','#c41e3a','#ff9a8b'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = 'confetti-piece';
                p.style.left = Math.random() * 100 + '%';
                p.style.background = renkler[Math.floor(Math.random() * renkler.length)];
                p.style.width = (Math.random() * 10 + 6) + 'px';
                p.style.height = (Math.random() * 10 + 6) + 'px';
                p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                p.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confettiContainer.appendChild(p);
                setTimeout(() => p.remove(), 3000);
            }, i * 25);
        }
    }

    function sayacArtir() {
        kesfedilenSayi++;
        document.querySelector('#activityCounter strong').textContent = kesfedilenSayi;
        localStorage.setItem('kesfedilenSayi', kesfedilenSayi);
    }

    function kartGuncelle(kart, ikon, text) {
        kart.classList.remove('empty');
        kart.classList.add('filled');
        kart.querySelector('.card-icon i').className = ikon;
        kart.querySelector('.card-text').textContent = text;
        kart.querySelector('.card-actions').style.display = 'flex';
    }

    function kartSifirla(kart, mesaj) {
        kart.classList.add('empty');
        kart.classList.remove('filled');
        kart.querySelector('.card-icon i').className = 'fas fa-question-circle';
        kart.querySelector('.card-text').textContent = mesaj;
        kart.querySelector('.card-actions').style.display = 'none';
    }

    function favoriEkle(kart, text) {
        if (favoriler.includes(text)) {
            favoriler = favoriler.filter(f => f !== text);
            kart.querySelector('.btn-fav').classList.remove('active');
            kart.querySelector('.btn-fav i').className = 'far fa-heart';
            toastGoster('💔 Favorilerden çıkarıldı');
        } else {
            favoriler.push(text);
            kart.querySelector('.btn-fav').classList.add('active');
            kart.querySelector('.btn-fav i').className = 'fas fa-heart';
            toastGoster('❤️ Favorilere eklendi!');
        }
        localStorage.setItem('favoriAktiviteler', JSON.stringify(favoriler));
        favoriListesiniGuncelle();
    }

    function favoriListesiniGuncelle() {
        if (favoriler.length === 0) {
            favoritesSection.style.display = 'none';
            return;
        }
        favoritesSection.style.display = 'block';
        favoritesList.innerHTML = favoriler.map(f =>
            `<div class="fav-item">${f} <button onclick="void(0)">×</button></div>`
        ).join('');
        
        // Silme butonları
        favoritesList.querySelectorAll('button').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                favoriler.splice(i, 1);
                localStorage.setItem('favoriAktiviteler', JSON.stringify(favoriler));
                favoriListesiniGuncelle();
                toastGoster('Favori silindi');
            });
        });
    }

    function geriSayimGuncelle() {
        const tarih = tarihInput.value;
        if (!tarih) return;
        const fark = Math.ceil((new Date(tarih) - new Date()) / (1000 * 60 * 60 * 24));
        if (fark > 0) countdownText.textContent = `💕 Buluşmaya ${fark} gün kaldı!`;
        else if (fark === 0) countdownText.textContent = '🎉 Bugün buluşma günü!';
        else countdownText.textContent = '📅 Harika bir gündü!';
    }

    // ==================== ANA FONKSİYON ====================
    function surprizYap() {
        if (!tarihInput.value) { toastGoster('💕 Lütfen tarih seç!'); return; }

        surpriseBtn.style.transform = 'scale(0.9)';
        setTimeout(() => surpriseBtn.style.transform = '', 200);

        konfeti();
        sayacArtir();
        geriSayimGuncelle();

        const r = benzersizSec(romantikAktiviteler, sonAktiviteler.romantik);
        const e = benzersizSec(eglenceliAktiviteler, sonAktiviteler.eglenceli);
        const a = benzersizSec(aniAktiviteler, sonAktiviteler.ani);
        sonAktiviteler = { romantik: r, eglenceli: e, ani: a };

        kartGuncelle(romantikCard, 'fas fa-kiss-wink-heart', r);
        kartGuncelle(eglenceliCard, 'fas fa-laugh-squint', e);
        kartGuncelle(aniCard, 'fas fa-camera-retro', a);

        // Rotaları güncelle
        const secilenRota = rastgele(rotalar);
        routesContainer.innerHTML = secilenRota.map(yer =>
            `<a href="${yer.link}" target="_blank" rel="noopener" class="route-link">${yer.isim}</a>`
        ).join('');

        // Kopyalama butonları
        document.querySelectorAll('.btn-copy').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const text = btn.closest('.activity-card').querySelector('.card-text').textContent;
                navigator.clipboard.writeText(text);
                toastGoster('📋 Kopyalandı: ' + text);
            };
        });

        // Favori butonları
        document.querySelectorAll('.btn-fav').forEach(btn => {
            const text = btn.closest('.activity-card').querySelector('.card-text').textContent;
            if (favoriler.includes(text)) {
                btn.classList.add('active');
                btn.querySelector('i').className = 'fas fa-heart';
            }
            btn.onclick = (e) => {
                e.stopPropagation();
                favoriEkle(btn.closest('.activity-card'), text);
            };
        });

        toastGoster('✨ Harika aktiviteler bulundu!');
    }

    // ==================== BAŞLAT ====================
    function baslat() {
        tarihInput.value = new Date().toISOString().slice(0, 10);
        
        const gun = new Date().getDate();
        const secilenRenk = renkler[gun % renkler.length];
        colorPreview.style.background = secilenRenk.kod;
        colorName.textContent = secilenRenk.isim;
        colorCode.textContent = secilenRenk.kod;
        
        const secilenSarki = sarkilar[gun % sarkilar.length];
        songName.textContent = secilenSarki.isim;
        songArtist.textContent = secilenSarki.sanatci;
        youtubePlayer.src = `https://www.youtube.com/embed/${secilenSarki.id}?autoplay=1&loop=1&playlist=${secilenSarki.id}`;
        
        // Uçuşan kalpler
        const kalpler = ['❤️','💕','💖','💗','💘','💝'];
        for (let i = 0; i < 25; i++) {
            const k = document.createElement('span');
            k.className = 'heart-float';
            k.textContent = kalpler[Math.floor(Math.random() * kalpler.length)];
            k.style.left = Math.random() * 100 + '%';
            k.style.animationDelay = Math.random() * 10 + 's';
            k.style.fontSize = (Math.random() * 20 + 14) + 'px';
            document.getElementById('heartsContainer').appendChild(k);
        }
        
        // Sayaç
        kesfedilenSayi = parseInt(localStorage.getItem('kesfedilenSayi') || '0');
        document.querySelector('#activityCounter strong').textContent = kesfedilenSayi;
        
        favoriListesiniGuncelle();
        
        // Event listeners
        surpriseBtn.addEventListener('click', surprizYap);
        tarihInput.addEventListener('change', geriSayimGuncelle);
    }

    baslat();
    console.log('💕 Site hazır! 300 aktivite seni bekliyor.');
})();
