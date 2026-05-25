# Yaşamgah Ekoloji Çiftliği Web Sitesi

Bu depo, `www.yasamgah.com` için hazırlanmış statik web sitesidir.

## İçerik yapısı

- `index.html` - Ana sayfa, proje anlatısı, gönüllü formu, dayanışma/sponsorluk formu
- `styles.css` - Görsel sistem, responsive tasarım, form ve kart stilleri
- `script.js` - Mobil menü, scroll animasyonu, form özeti oluşturma
- `tesekkurler.html` - Form gönderiminden sonra dönüş sayfası
- `CNAME` - GitHub Pages özel domain kaydı

## Formların çalışması

Formlar `FormSubmit` üzerinden `yasamgah@gmail.com` adresine gönderilecek şekilde ayarlandı.
İlk form gönderiminde FormSubmit e-posta doğrulaması isteyebilir. Doğrulama tamamlandıktan sonra yanıtlar doğrudan e-postaya düşer.

Formları farklı bir servise bağlamak isterseniz `index.html` içinde iki formdaki `action="https://formsubmit.co/yasamgah@gmail.com"` değerini değiştirmek yeterlidir.

## GitHub Pages yayına alma

1. GitHub deposunda **Settings > Pages** bölümüne girin.
2. Source olarak **Deploy from a branch** seçin.
3. Branch: `main`, folder: `/root` seçin.
4. Kaydedin.
5. DNS tarafında `www.yasamgah.com` için CNAME kaydı `Karahaner.github.io` değerine yönlendirilmeli.

## Tasarım notu

Sunumdaki ana omurga korunarak metinler web kullanımına uygun hale getirildi: manifesto, kum zambağı sembolü, dört çalışma hattı, yerleşke kapasitesi, dört mevsimlik kurulum süreci, gönüllülük ve dayanışma/sponsorluk akışı.
