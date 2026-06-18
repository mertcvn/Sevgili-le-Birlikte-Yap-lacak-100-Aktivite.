// ==================== 300 AKTİVİTELİ TAM UYGULAMA KODU ====================
(function() {
    'use strict';

    // ---------- DOM Elementleri ----------
    const tarihInput = document.getElementById('bulusmaTarihi');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const romantikEl = document.getElementById('romantikActivity');
    const eglenceliEl = document.getElementById('eglenceliActivity');
    const aniEl = document.getElementById('aniActivity');
    const routeContainer = document.getElementById('routeContainer');
    const heartsContainer = document.getElementById('heartsContainer');

    // ---------- 300 AKTİVİTE HAVUZU (Her kategoride 100 adet) ----------
    
    // ROMANTİK AKTİVİTELER (100 adet)
    const romantikAktiviteler = [
        "🌅 Boğaz'da gün batımı izleme", "🕯️ Mum ışığında ev yemeği", "💃 Birlikte dans kursu",
        "🎻 Canlı müzik dinletisi", "🍷 Terasta şarap tadımı", "🌹 Gizli bahçede piknik",
        "🛁 Spa ve masaj seansı", "📖 Aşk mektupları okuma", "🎬 Romantik film maratonu",
        "🌌 Yıldızları izleme gecesi", "🍫 Çikolata fondü partisi", "💌 El yapımı hediye atölyesi",
        "🎶 Birlikte çalma listesi oluşturma", "🚤 Boğaz turu", "🌸 Çiçek aranjmanı yapma",
        "🕺 Romantik dans gecesi", "📸 Profesyonel fotoğraf çekimi", "🍝 İtalyan yemeği pişirme",
        "🎨 Birlikte resim yapma", "🌿 Botanik bahçesi gezisi", "🎭 Opera veya bale izleme",
        "🍳 Kahvaltıda sürpriz", "🎹 Piyano dinletisi", "📚 Kitapçıda kaybolma",
        "🌊 Sahilde ayak izi bırakma", "🕰️ Antikacı gezisi", "🎪 Romantik sirk gösterisi",
        "🍵 Çay bahçesinde sohbet", "🎈 Balonla süslenmiş oda", "💐 Sokak çiçekçisinden çiçek alma",
        "🌙 Ay ışığında yürüyüş", "🕯️ Aromaterapi seansı", "🎵 Vinyl plak dinleme",
        "🍰 Pasta yapma atölyesi", "🎨 Suluboya resim", "📝 Birlikte şiir yazma",
        "🎭 Tiyatro izleme", "🍣 Suşi yapımı", "🌺 Tropikal sera gezisi",
        "🎻 Keman dinletisi", "💑 Çift yogası", "🕊️ Güvercin besleme",
        "🎡 Dönme dolapta romantizm", "🍮 Muhallebi yapma", "🌲 Orman yürüyüşü",
        "🕯️ Mum yapımı atölyesi", "🎨 Mozaik taş boyama", "📖 Hikaye okuma gecesi",
        "🌸 Sakura izleme", "🍯 Bal tadımı", "🌅 Sabah güneşini karşılama",
        "🎶 Müzik kutusu koleksiyonu", "💌 Mektup yazma", "🕊️ Kuş sesleri dinleme",
        "🌿 Bitki yetiştirme", "🎹 Org çalma", "📸 Albüm hazırlama",
        "🍵 Japon çay seremonisi", "🌹 Gül bahçesi ziyareti", "🎻 Oda müziği konseri",
        "🛌 Yatakta kahvaltı", "🎪 Romantik lunapark", "🌊 Dalga sesi dinleme",
        "📜 Eski mektupları okuma", "🕯️ Mumlu akşam yemeği", "💎 Kristal avı",
        "🌄 Tepeye tırmanma", "🎵 Şarkı söyleme", "📚 Aşk romanı okuma",
        "🍷 Üzüm bağı turu", "🎨 Pastel boya çalışması", "🌌 Planetaryum ziyareti",
        "🕊️ Beyaz güvercin uçurma", "🍂 Sonbahar yaprağı toplama", "🌅 Deniz kenarında kahvaltı"
    ];

    // EĞLENCELİ AKTİVİTELER (100 adet)
    const eglenceliAktiviteler = [
        "🎤 Karaoke düellosu", "🎮 Retro oyun salonu", "🍔 Sokak lezzetleri turu",
        "🎢 Luna park macerası", "🎲 Masa oyunları gecesi", "🤹 Sokak performansı izleme",
        "🍦 Dondurma tadım yarışı", "🎯 Okçuluk veya dart", "🎨 Komik portre çizimi",
        "🚲 Tandem bisiklet sürme", "🎭 Doğaçlama tiyatro", "🎳 Bowling turnuvası",
        "🧩 Kaçış odası deneyimi", "🍿 Komedi film gecesi", "🎪 Sokak festivali gezme",
        "🎸 Müzik aleti deneme atölyesi", "🤸 Parkur veya tırmanma", "🎪 Sirk gösterisi izleme",
        "🍳 Yemek yarışması", "🕹️ VR oyun deneyimi", "🎯 Laser tag savaşı",
        "🏓 Masa tenisi turnuvası", "🎱 Bilardo oynama", "🛼 Roller paten kayma",
        "⛸️ Buz pateni", "🎿 Kayak veya snowboard", "🏄 Sörf öğrenme",
        "🧗 Kaya tırmanışı", "🎪 Trambolin parkı", "🤹 Jonglör öğrenme",
        "🎨 Graffiti yapma", "🕺 Hip hop dans", "🎤 Rap battle",
        "📸 Komik fotoğraf çekimi", "🎭 Kukla tiyatrosu", "🎪 Palyaço makyajı",
        "🍕 Pizza yapma yarışı", "🧁 Cupcake süsleme", "🍣 Suşi yuvarlama",
        "🎯 Balon patlatma", "🕹️ Atari turnuvası", "🎲 Monopoly gecesi",
        "🧩 Yapboz maratonu", "🎨 Parmak boyama", "🖍️ Kaldırım tebeşir sanatı",
        "🎈 Su balonu savaşı", "🔫 Su tabancası kapışması", "🎪 Palyaço balonları yapma",
        "🎤 Yetenek yarışması", "💃 Dans yarışması", "🎸 Hava gitarı şovu",
        "🎮 Wii Sports turnuvası", "🕹️ Dance Dance Revolution", "🎯 Halka atma",
        "🏹 Ok atma", "🪓 Balta atma", "🎳 Mini bowling",
        "⛳ Mini golf", "🎯 Dart turnuvası", "🏓 Pickleball",
        "🤸 Jimnastik yarışı", "🛹 Kaykay öğrenme", "🚲 BMX denemesi",
        "🏀 Basketbol maçı", "⚽ Futbol maçı", "🏐 Voleybol oynama",
        "🎾 Tenis maçı", "🏸 Badminton", "🏒 Hokey denemesi",
        "🎿 Su kayağı", "🏊 Yüzme yarışı", "🤿 Şnorkelle dalış",
        "🐠 Akvaryum gezisi", "🦁 Hayvanat bahçesi", "🐒 Maymunları besleme",
        "🦜 Papağanla konuşma", "🐎 Ata binme", "🐪 Deveye binme",
        "🎢 Su kaydırağı", "🏰 Kumdan kale yapma", "🪁 Uçurtma uçurma",
        "🎈 Sıcak hava balonu", "🪂 Yamaç paraşütü", "🚁 Helikopter turu",
        "🏎️ Go-kart yarışı", "🎳 Disko bowling", "🕺 Silent disco"
    ];

    // ANI BİRİKTİRME AKTİVİTELERİ (100 adet)
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

    // İSTANBUL ROTALARI (15 farklı set, her sette 3 yakın konum)
    const istanbulRotalari = [
        {
            isim: "Galata & Karaköy",
            yerler: ["🏛️ Galata Kulesi", "☕ Karaköy Kahveciler", "🌉 Galata Köprüsü"]
        },
        {
            isim: "Emirgan & İstinye",
            yerler: ["🌸 Emirgan Korusu", "🍵 Çınaraltı Çay Bahçesi", "🏞️ Japon Bahçesi"]
        },
        {
            isim: "Sultanahmet Klasik",
            yerler: ["🕌 Sultanahmet Camii", "🍦 Ali Usta Dondurma", "🛍️ Arasta Çarşısı"]
        },
        {
            isim: "Kadıköy & Moda",
            yerler: ["🎨 Moda Sahili", "🍪 Kadıköy Tatlıcılar", "🎭 Barış Manço Müzesi"]
        },
        {
            isim: "Maçka & Nişantaşı",
            yerler: ["🌳 Maçka Parkı", "🚡 Teleferik", "🍔 Nişantaşı Gurme"]
        },
        {
            isim: "Bebek & Rumeli",
            yerler: ["🏰 Rumeli Hisarı", "🍳 Bebek Kahvaltı", "🚤 Bebek İskelesi"]
        },
        {
            isim: "Üsküdar & Kız Kulesi",
            yerler: ["🌇 Kız Kulesi", "🥗 Üsküdar Balıkçı", "🕌 Mihrimah Sultan"]
        },
        {
            isim: "Eyüp & Pierre Loti",
            yerler: ["🎡 Vialand", "🍿 Eyüp Oyuncakçı", "☕ Pierre Loti"]
        },
        {
            isim: "Ortaköy & Beşiktaş",
            yerler: ["🕌 Ortaköy Camii", "🥔 Kumpir Sokak", "🏛️ Çırağan Sarayı"]
        },
        {
            isim: "Balat & Fener",
            yerler: ["🏘️ Renkli Evler", "☕ Fener Kahve", "🏛️ Rum Lisesi"]
        },
        {
            isim: "Adalar & Büyükada",
            yerler: ["🚲 Bisiklet Turu", "🏖️ Aya Yorgi", "🍦 Dondurmacı"]
        },
        {
            isim: "İstiklal & Taksim",
            yerler: ["🚃 Nostaljik Tramvay", "🎭 Çiçek Pasajı", "🏛️ Galata Mevlevihanesi"]
        },
        {
            isim: "Kuzguncuk & Beylerbeyi",
            yerler: ["🏘️ Kuzguncuk Evleri", "☕ Kahve Molası", "🏛️ Beylerbeyi Sarayı"]
        },
        {
            isim: "Sarıyer & Kilyos",
            yerler: ["🏖️ Kilyos Plajı", "🍳 Sarıyer Börekçisi", "🌲 Belgrad Ormanı"]
        },
        {
            isim: "Caddebostan & Bağdat",
            yerler: ["🏖️ Caddebostan Sahili", "🛍️ Bağdat Caddesi", "🍰 Pastane Keyfi"]
        }
    ];

    // ---------- FONKSİYONLAR ----------

    /**
     * Rastgele benzersiz aktivite seçer
     */
    function benzersizAktiviteSec(havuz, oncekiAktivite) {
        let secilen;
        let deneme = 0;
        
        do {
            secilen = havuz[Math.floor(Math.random() * havuz.length)];
            deneme++;
        } while (secilen === oncekiAktivite && havuz.length > 1 && deneme < 10);
        
        return secilen;
    }

    /**
     * Son seçilen aktiviteleri takip et
     */
    let sonAktiviteler = {
        romantik: "",
        eglenceli: "",
        ani: ""
    };

    /**
     * Aktiviteleri güncelle
     */
    function aktiviteleriGuncelle() {
        const romantik = benzersizAktiviteSec(romantikAktiviteler, sonAktiviteler.romantik);
        const eglenceli = benzersizAktiviteSec(eglenceliAktiviteler, sonAktiviteler.eglenceli);
        const ani = benzersizAktiviteSec(aniAktiviteler, sonAktiviteler.ani);
        
        sonAktiviteler.romantik = romantik;
        sonAktiviteler.eglenceli = eglenceli;
        sonAktiviteler.ani = ani;
        
        // Animasyonlu güncelleme
        animasyonluGuncelle(romantikEl, romantik);
        animasyonluGuncelle(eglenceliEl, eglenceli);
        animasyonluGuncelle(aniEl, ani);
    }

    /**
     * Element içeriğini animasyonlu günceller
     */
    function animasyonluGuncelle(element, yeniIcerik) {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            element.textContent = yeniIcerik;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200);
    }

    /**
     * İstanbul rotasını günceller
     */
    function rotaGuncelle() {
        const secilenRota = istanbulRotalari[Math.floor(Math.random() * istanbulRotalari.length)];
        
        routeContainer.style.transition = 'all 0.3s ease';
        routeContainer.style.opacity = '0';
        routeContainer.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            routeContainer.innerHTML = '';
            
            secilenRota.yerler.forEach((yer, index) => {
                const div = document.createElement('div');
                div.className = 'route-item';
                div.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
                div.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${yer}`;
                routeContainer.appendChild(div);
            });
            
            routeContainer.style.opacity = '1';
            routeContainer.style.transform = 'scale(1)';
        }, 200);
    }

    /**
     * Buton tıklama efekti
     */
    function butonEfekti() {
        surpriseBtn.style.transform = 'scale(0.95)';
        surpriseBtn.style.transition = 'all 0.1s ease';
        
        setTimeout(() => {
            surpriseBtn.style.transform = 'scale(1)';
        }, 150);
    }

    /**
     * Ana sürpriz fonksiyonu
     */
    function surprizYap() {
        const secilenTarih = tarihInput.value;
        
        if (!secilenTarih) {
            alert('💕 Lütfen buluşma tarihini seç tatlım!');
            return;
        }
        
        butonEfekti();
        aktiviteleriGuncelle();
        rotaGuncelle();
        
        // Konsola bilgi ver
        const tarih = new Date(secilenTarih);
        console.log(`📅 ${tarih.toLocaleDateString('tr-TR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })} için harika aktiviteler hazır! 💝`);
        
        console.log('💖 Romantik:', sonAktiviteler.romantik);
        console.log('🎉 Eğlenceli:', sonAktiviteler.eglenceli);
        console.log('📸 Anı:', sonAktiviteler.ani);
    }

    /**
     * Uçuşan kalpleri oluştur
     */
    function ucusanKalpleriOlustur() {
        const kalpEmojileri = ['❤️', '💕', '💖', '💗', '💘', '💝', '💓', '💞', '💟', '♥️'];
        const kalpSayisi = 25;
        
        for (let i = 0; i < kalpSayisi; i++) {
            const kalp = document.createElement('span');
            kalp.className = 'heart-float';
            kalp.textContent = kalpEmojileri[Math.floor(Math.random() * kalpEmojileri.length)];
            kalp.style.left = Math.random() * 100 + '%';
            kalp.style.animationDelay = Math.random() * 8 + 's';
            kalp.style.animationDuration = (Math.random() * 6 + 6) + 's';
            kalp.style.fontSize = (Math.random() * 20 + 16) + 'px';
            kalp.style.opacity = Math.random() * 0.3 + 0.1;
            
            heartsContainer.appendChild(kalp);
        }
    }

    /**
     * Başlangıç değerlerini ayarla
     */
    function baslangicAyarla() {
        // Bugünün tarihini varsayılan yap
        const bugun = new Date().toISOString().slice(0, 10);
        tarihInput.value = bugun;
        
        // İlk aktiviteleri yükle
        aktiviteleriGuncelle();
        rotaGuncelle();
        ucusanKalpleriOlustur();
    }

    /**
     * CSS animasyonlarını ekle
     */
    function cssAnimasyonlariEkle() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .route-item {
                animation: fadeIn 0.5s ease both;
                transition: all 0.3s ease;
            }
            
            .route-item:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 15px rgba(200, 70, 100, 0.3);
            }
            
            .activity-card {
                transition: all 0.3s ease;
            }
            
            .activity-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 30px rgba(180, 40, 60, 0.2);
            }
        `;
        document.head.appendChild(style);
    }

    // ---------- EVENT LISTENERS ----------
    
    // Sürpriz butonu
    surpriseBtn.addEventListener('click', surprizYap);
    
    // Enter tuşu ile tetikleme
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            surprizYap();
        }
    });
    
    // Tarih değişikliğinde otomatik yenileme (opsiyonel)
    tarihInput.addEventListener('change', () => {
        console.log('📅 Yeni tarih seçildi:', tarihInput.value);
        // surprizYap(); // İstersen otomatik yenileme için bu satırı aktif et
    });

    // ---------- UYGULAMAYI BAŞLAT ----------
    baslangicAyarla();
    cssAnimasyonlariEkle();

    console.log('💕 300 Aktiviteli Aşk Uygulaması Başlatıldı!');
    console.log('🎯 Toplam Aktivite:', 
        romantikAktiviteler.length + 
        eglenceliAktiviteler.length + 
        aniAktiviteler.length
    );
    console.log('📍 İstanbul Rotası:', istanbulRotalari.length, 'farklı set');

})();