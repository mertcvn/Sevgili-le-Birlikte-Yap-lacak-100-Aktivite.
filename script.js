// ==================== AŞK DOLU AKTİVİTELER - PREMIUM JAVASCRIPT ====================
(function() {
    'use strict';

    // ==================== DOM ELEMENTLERİ ====================
    const passwordOverlay = document.getElementById('passwordOverlay');
    const siteContent = document.getElementById('siteContent');
    const passwordInput = document.getElementById('passwordInput');
    const passwordBtn = document.getElementById('passwordBtn');
    const passwordError = document.getElementById('passwordError');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordHint = document.getElementById('passwordHint');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeBtn = document.getElementById('themeBtn');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const tarihInput = document.getElementById('bulusmaTarihi');
    const romantikCard = document.getElementById('romantikCard');
    const eglenceliCard = document.getElementById('eglenceliCard');
    const aniCard = document.getElementById('aniCard');
    const routeContainer = document.getElementById('routeContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const confettiContainer = document.getElementById('confettiContainer');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const countdownText = document.getElementById('countdownText');
    const activityCounter = document.getElementById('activityCounter');
    const favoritesBox = document.getElementById('favoritesBox');
    const favoritesList = document.getElementById('favoritesList');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorCode = document.getElementById('colorCode');
    const songName = document.getElementById('songName');

    // ==================== DEĞİŞKENLER ====================
    const DOGRU_SIFRE = "aşk123";
    let kesfedilenAktiviteSayisi = 0;
    let favoriAktiviteler = [];
    let mevcutTema = 'pink';
    let sonAktiviteler = { romantik: '', eglenceli: '', ani: '' };

    // ==================== AKTİVİTE HAVUZLARI (Her biri 100 adet) ====================
    const romantikAktiviteler = [
        "🌅 Boğaz'da gün batımı izleme", "🕯️ Mum ışığında ev yemeği", "💃 Birlikte dans kursu",
        "🎻 Canlı müzik dinletisi", "🍷 Terasta şarap tadımı", "🌹 Gizli bahçede piknik",
        "🛁 Spa ve masaj seansı", "📖 Aşk mektupları okuma", "🎬 Romantik film maratonu",
        "🌌 Yıldızları izleme gecesi", "🍫 Çikolata fondü partisi", "💌 El yapımı hediye atölyesi",
        "🎶 Birlikte playlist oluşturma", "🚤 Boğaz turu", "🌸 Çiçek aranjmanı yapma",
        "🕺 Romantik dans gecesi", "📸 Profesyonel fotoğraf çekimi", "🍝 İtalyan yemeği pişirme",
        "🎨 Birlikte resim yapma", "🌿 Botanik bahçesi gezisi", "🎭 Opera veya bale izleme",
        "🍳 Sürpriz kahvaltı hazırlama", "🎹 Piyano dinletisi", "📚 Kitapçıda kaybolma",
        "🌊 Sahilde ayak izi bırakma", "🕰️ Antikacı gezisi", "🍵 Çay bahçesinde sohbet",
        "🎈 Balonla süslenmiş oda", "💐 Sokak çiçekçisinden çiçek", "🌙 Ay ışığında yürüyüş",
        "🎵 Plak dinleme seansı", "🍰 Pasta yapma atölyesi", "📝 Birlikte şiir yazma",
        "🎭 Tiyatro izleme", "🍣 Suşi yapımı", "💑 Çift yogası",
        "🎡 Dönme dolapta romantizm", "🌲 Orman yürüyüşü", "🕯️ Mum yapımı atölyesi",
        "🎨 Mozaik taş boyama", "📖 Hikaye okuma gecesi", "🍯 Bal tadımı",
        "🌅 Sabah güneşini karşılama", "🎻 Keman dinletisi", "🕊️ Güvercin besleme",
        "🎪 Romantik sirk gösterisi", "🖼️ Sanat galerisi gezme", "🍮 Muhallebi yapma",
        "🌺 Tropikal sera gezisi", "🎹 Org çalma", "📜 Eski mektupları okuma",
        "🛌 Yatakta kahvaltı", "🎪 Romantik lunapark", "🌊 Dalga sesi dinleme",
        "💎 Kristal avı", "🌄 Tepeye tırmanma", "🎵 Şarkı söyleme",
        "📚 Aşk romanı okuma", "🍷 Üzüm bağı turu", "🎨 Pastel boya çalışması",
        "🌌 Planetaryum ziyareti", "🕊️ Beyaz güvercin uçurma", "🍂 Sonbahar yaprağı toplama",
        "🌅 Deniz kenarında kahvaltı", "🎨 Suluboya resim", "💌 Mektup yazma",
        "🕯️ Aromaterapi seansı", "🎈 Sıcak hava balonu", "🌿 Bitki yetiştirme",
        "🎶 Müzik kutusu koleksiyonu", "🌹 Gül bahçesi ziyareti", "🎻 Oda müziği konseri",
        "🍵 Japon çay seremonisi", "🌸 Sakura izleme", "🎨 Ebru sanatı",
        "🕯️ Mumlu akşam yemeği", "📸 Albüm hazırlama", "🎭 Gölge oyunu",
        "🌙 Gece yarısı pikniği", "🎵 Vinyl plak dinleme", "💑 Çift meditasyonu",
        "🍫 Çikolata yapımı", "🌅 Gün batımı teknesi", "🎨 Seramik boyama",
        "🕊️ Kuş sesleri dinleme", "📖 Şiir antolojisi", "🎹 Müzik dersi",
        "🌿 Lavanta bahçesi", "🍷 Şarap mahzeni turu", "🎭 Bale gösterisi",
        "🕯️ El yapımı mum", "🌌 Meteor yağmuru izleme", "🎨 Tuval boyama"
    ];

    const eglenceliAktiviteler = [
        "🎤 Karaoke düellosu", "🎮 Retro oyun salonu", "🍔 Sokak lezzetleri turu",
        "🎢 Luna park macerası", "🎲 Masa oyunları gecesi", "🤹 Sokak performansı izleme",
        "🍦 Dondurma tadım yarışı", "🎯 Okçuluk veya dart", "🎨 Komik portre çizimi",
        "🚲 Tandem bisiklet sürme", "🎭 Doğaçlama tiyatro", "🎳 Bowling turnuvası",
        "🧩 Kaçış odası deneyimi", "🍿 Komedi film gecesi", "🎪 Sokak festivali gezme",
        "🎸 Müzik aleti deneme", "🤸 Parkur veya tırmanma", "🕹️ VR oyun deneyimi",
        "🍳 Yemek yarışması", "🎯 Laser tag savaşı", "🏓 Masa tenisi turnuvası",
        "🎱 Bilardo oynama", "🛼 Roller paten kayma", "⛸️ Buz pateni",
        "🎿 Kayak veya snowboard", "🏄 Sörf öğrenme", "🧗 Kaya tırmanışı",
        "🎪 Trambolin parkı", "🤹 Jonglör öğrenme", "🎨 Graffiti yapma",
        "🕺 Hip hop dans", "🎤 Rap battle", "📸 Komik fotoğraf çekimi",
        "🎭 Kukla tiyatrosu", "🍕 Pizza yapma yarışı", "🧁 Cupcake süsleme",
        "🍣 Suşi yuvarlama", "🎯 Balon patlatma", "🕹️ Atari turnuvası",
        "🎲 Monopoly gecesi", "🧩 Yapboz maratonu", "🎨 Parmak boyama",
        "🖍️ Kaldırım tebeşir sanatı", "🎈 Su balonu savaşı", "🔫 Su tabancası kapışması",
        "🎤 Yetenek yarışması", "💃 Dans yarışması", "🎸 Hava gitarı şovu",
        "🎮 Wii Sports turnuvası", "🎯 Halka atma", "🏹 Ok atma",
        "🪓 Balta atma", "🎳 Mini bowling", "⛳ Mini golf",
        "🎯 Dart turnuvası", "🏓 Pickleball", "🤸 Jimnastik yarışı",
        "🛹 Kaykay öğrenme", "🏀 Basketbol maçı", "⚽ Futbol maçı",
        "🏐 Voleybol oynama", "🎾 Tenis maçı", "🏸 Badminton",
        "🏒 Hokey denemesi", "🎿 Su kayağı", "🏊 Yüzme yarışı",
        "🤿 Şnorkelle dalış", "🐠 Akvaryum gezisi", "🦁 Hayvanat bahçesi",
        "🐒 Maymunları besleme", "🦜 Papağanla konuşma", "🐎 Ata binme",
        "🐪 Deveye binme", "🎢 Su kaydırağı", "🏰 Kumdan kale yapma",
        "🪁 Uçurtma uçurma", "🪂 Yamaç paraşütü", "🚁 Helikopter turu",
        "🏎️ Go-kart yarışı", "🎳 Disko bowling", "🕺 Silent disco",
        "🎪 Palyaço makyajı", "🎈 Balon hayvan yapma", "🎭 Kostüm partisi",
        "🍕 Yemek yeme yarışı", "🎤 Ses taklidi yapma", "🎮 Oyun maratonu"
    ];

    const aniAktiviteler = [
        "📸 Polaroid fotoğraf avı", "📔 Ortak anı defteri tutma", "🎨 Seramik boyama atölyesi",
        "🧵 Bileklik veya takı yapımı", "🎬 Kısa film çekimi", "🖼️ Fotoğraf kolajı yapma",
        "💿 Özel mix CD hazırlama", "🗺️ Gelecek planları haritası", "📮 Zaman kapsülü hazırlama",
        "🎭 Gölge oyunu kaydetme", "🧁 Kek veya kurabiye süsleme", "🎈 Mesaj balonları bırakma",
        "📱 Eğlenceli TikTok videosu", "🖌️ Tuval üzerine resim", "🎵 Birlikte şarkı besteleme",
        "📚 Kitap ayracı yapımı", "🎪 Anı kutusu süsleme", "🖼️ Dijital albüm oluşturma",
        "✒️ Kaligrafi öğrenme", "🎨 Parmak boyası sanatı", "📖 Hikaye kitabı oluşturma",
        "🎭 Kukla yapımı", "🖌️ Taş boyama", "🧶 Örgü öğrenme",
        "🎨 Ebru sanatı", "📸 Fotoğraf albümü yapma", "💌 Kartpostal koleksiyonu",
        "🎵 Şarkı sözü yazma", "📔 Seyahat günlüğü", "🖼️ Kolaj tablo",
        "🎭 Maske yapımı", "🧵 Nakış işleme", "📱 Vlog çekimi",
        "🎨 Vitray yapımı", "💿 Podcast kaydetme", "📖 Şiir antolojisi",
        "🖌️ Minyatür resim", "🎭 Kostüm tasarımı", "🧶 Makrome öğrenme",
        "🎨 Akrilik boyama", "📸 Konsept fotoğraf çekimi", "💌 Mühür yapımı",
        "🎵 Enstrüman öğrenme", "📔 Tarif defteri oluşturma", "🖼️ Gölge kutusu yapımı",
        "🎨 Mozaik sanatı", "📱 Stop motion video", "💿 Cover şarkı kaydetme",
        "✒️ Hat sanatı", "🧵 Keçe sanatı", "🎭 Gölge tiyatrosu",
        "📸 Anı fotoğrafı köşesi", "🖌️ Karakalem portre", "🎨 Pastel boya tablo",
        "💌 Mektup kutusu yapımı", "🧶 Amigurumi öğrenme", "📖 Anı defteri süsleme",
        "🎭 Origami sanatı", "🖼️ Çerçeve süsleme", "🎨 Su mermeri sanatı",
        "📱 Animasyon yapımı", "💿 Sesli mesaj kaydetme", "✒️ El yazısı çalışması",
        "🧵 Kumaş boyama", "🎨 Sabun yapımı", "🖌️ Ahşap boyama",
        "📸 Siyah-beyaz fotoğraf", "🎭 Papier-mâché", "🧶 Ponpon yapımı",
        "💌 Zarf süsleme", "🎨 Mum boyama", "📔 Planner süsleme",
        "🖼️ Duvar sanatı", "✒️ Davetiye tasarımı", "🧵 Patchwork",
        "🎨 Batik sanatı", "📱 Dijital scrapbook", "💿 Müzik videosu çekimi",
        "🎭 Gölge kuklası", "🖌️ Suluboya kartpostal", "🧶 Dantel öğrenme",
        "🎨 Kolaj sanatı", "📸 360 derece fotoğraf", "💌 Balonlu mektup",
        "✒️ İsim yazma sanatı", "🧵 Kanaviçe", "🎭 Maskot yapımı",
        "📔 Anı defteri baskısı", "🖼️ Magnet yapımı", "🎨 Kil hamuru sanatı"
    ];

    // ==================== İSTANBUL ROTALARI ====================
    const istanbulRotalari = [
        { yerler: [
            { isim: "Galata Kulesi", link: "https://www.google.com/maps/place/Galata+Kulesi" },
            { isim: "Karaköy Kahve", link: "https://www.google.com/maps/search/Karak%C3%B6y+kahve" },
            { isim: "Galata Köprüsü", link: "https://www.google.com/maps/place/Galata+K%C3%B6pr%C3%BCs%C3%BC" }
        ]},
        { yerler: [
            { isim: "Emirgan Korusu", link: "https://www.google.com/maps/place/Emirgan+Korusu" },
            { isim: "Çınaraltı Çay", link: "https://www.google.com/maps/search/Emirgan+%C3%A7ay" },
            { isim: "Japon Bahçesi", link: "https://www.google.com/maps/place/Baltaliman%C4%B1+Japon+Bah%C3%A7esi" }
        ]},
        { yerler: [
            { isim: "Sultanahmet", link: "https://www.google.com/maps/place/Sultanahmet" },
            { isim: "Ali Usta Dondurma", link: "https://www.google.com/maps/search/Ali+Usta+dondurma" },
            { isim: "Arasta Çarşısı", link: "https://www.google.com/maps/place/Arasta+%C3%87ar%C5%9F%C4%B1s%C4%B1" }
        ]},
        { yerler: [
            { isim: "Moda Sahili", link: "https://www.google.com/maps/place/Moda+Sahili" },
            { isim: "Kadıköy Çarşı", link: "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y" },
            { isim: "Barış Manço Müzesi", link: "https://www.google.com/maps/place/Bar%C4%B1%C5%9F+Man%C3%A7o+M%C3%BCzesi" }
        ]},
        { yerler: [
            { isim: "Ortaköy Camii", link: "https://www.google.com/maps/place/Ortak%C3%B6y+Camii" },
            { isim: "Kumpir Sokak", link: "https://www.google.com/maps/search/Ortak%C3%B6y+kumpir" },
            { isim: "Çırağan Sarayı", link: "https://www.google.com/maps/place/%C3%87%C4%B1ra%C4%9Fan+Saray%C4%B1" }
        ]},
        { yerler: [
            { isim: "Maçka Parkı", link: "https://www.google.com/maps/place/Ma%C3%A7ka+Park%C4%B1" },
            { isim: "Teleferik", link: "https://www.google.com/maps/place/Ma%C3%A7ka+Teleferik" },
            { isim: "Nişantaşı", link: "https://www.google.com/maps/place/Ni%C5%9Fanta%C5%9F%C4%B1" }
        ]}
    ];

    // ==================== GÜNÜN RENGİ ====================
    const renkler = [
        { isim: "Aşk Pembesi", kod: "#ff6b9d" },
        { isim: "Tutku Kırmızısı", kod: "#e63946" },
        { isim: "Romantik Mor", kod: "#9b59b6" },
        { isim: "Şeftali Rüyası", kod: "#ff9a8b" },
        { isim: "Gül Kırmızısı", kod: "#c41e3a" },
        { isim: "Lavanta", kod: "#b565a7" },
        { isim: "Mercan", kod: "#ff7f7f" },
        { isim: "Bordo Aşk", kod: "#8b0000" }
    ];

    // ==================== GÜNÜN ŞARKISI ====================
    const sarkilar = [
        { isim: "Perfect", sanatci: "Ed Sheeran", videoId: "2Vv-BfVoq4g" },
        { isim: "All of Me", sanatci: "John Legend", videoId: "450p7goxZqg" },
        { isim: "Aşk", sanatci: "Tarkan", videoId: "U0UNr8GON7A" },
        { isim: "Can't Help Falling in Love", sanatci: "Elvis Presley", videoId: "vGJTaP6anOU" },
        { isim: "Thinking Out Loud", sanatci: "Ed Sheeran", videoId: "lp-EO5I60KA" },
        { isim: "Just the Way You Are", sanatci: "Bruno Mars", videoId: "LjhCEhWiKXk" },
        { isim: "Yalnızlık Senfonisi", sanatci: "Sezen Aksu", videoId: "WlGj7O3RHXE" }
    ];

    // ==================== FONKSİYONLAR ====================

    // Rastgele seçim
    function rastgeleSec(dizi) {
        return dizi[Math.floor(Math.random() * dizi.length)];
    }

    // Benzersiz seçim
    function benzersizSec(dizi, onceki) {
        let secilen;
        let deneme = 0;
        do {
            secilen = rastgeleSec(dizi);
            deneme++;
        } while (secilen === onceki && dizi.length > 1 && deneme < 15);
        return secilen;
    }

    // Toast bildirimi
    function toastGoster(mesaj) {
        toastText.textContent = mesaj;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // Konfeti efekti
    function konfetiPatlat() {
        const renkler = ['#ff6b9d', '#e63946', '#ffd700', '#ff69b4', '#c41e3a', '#ff9a8b', '#9b59b6'];
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                piece.style.left = Math.random() * 100 + '%';
                piece.style.backgroundColor = renkler[Math.floor(Math.random() * renkler.length)];
                piece.style.width = (Math.random() * 10 + 8) + 'px';
                piece.style.height = (Math.random() * 10 + 8) + 'px';
                piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
                piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                confettiContainer.appendChild(piece);
                
                setTimeout(() => piece.remove(), 3000);
            }, i * 30);
        }
    }

    // Sayaç güncelle
    function sayacGuncelle() {
        kesfedilenAktiviteSayisi++;
        activityCounter.querySelector('strong').textContent = kesfedilenAktiviteSayisi;
        
        // LocalStorage'a kaydet
        localStorage.setItem('kesfedilenAktiviteSayisi', kesfedilenAktiviteSayisi);
    }

    // Aktivite kartını güncelle
    function aktiviteKartiniGuncelle(kart, ikon, label, text) {
        kart.classList.remove('empty');
        kart.classList.add('filled');
        kart.querySelector('.card-icon-wrapper i').className = ikon;
        kart.querySelector('.activity-label').textContent = label;
        kart.querySelector('.activity-text').textContent = text;
        
        // Butonları göster
        kart.querySelector('.copy-btn').style.display = 'flex';
        kart.querySelector('.fav-btn').style.display = 'flex';
    }

    // Aktivite kartını sıfırla
    function aktiviteKartiniSifirla(kart, emoji, mesaj) {
        kart.classList.add('empty');
        kart.classList.remove('filled');
        kart.querySelector('.card-icon-wrapper i').className = 'fas fa-question-circle';
        kart.querySelector('.activity-label').textContent = kart.id.replace('Card', '');
        kart.querySelector('.activity-text').textContent = mesaj;
        kart.querySelector('.copy-btn').style.display = 'none';
        kart.querySelector('.fav-btn').style.display = 'none';
    }

    // Ana sürpriz fonksiyonu
    function surprizYap() {
        const tarih = tarihInput.value;
        if (!tarih) {
            toastGoster('💕 Lütfen önce buluşma tarihini seç!');
            return;
        }

        // Buton ses efekti
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAf39/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39/gH9/f4B/f3+Af39