# Museum of Culinary Science & Food History (Sains Kuliner & Pangan)

Visual Infographic Museum & Continuous Reading Stream.

- **Koleksi**: Cuisine, Science of Cooking & History of Food & Drink.
- **Total Visual**: 270 poster infografis beresolusi tinggi (format JPG terstandarisasi rasio 1:3, 724 × 2172 px).
- **Struktur Kurikulum**: 2 Paviliun Utama (10 Submodul).
  - **H8**: *Cuisine & the Science of Cooking* (5 submodul, 150 visual)
  - **H9**: *History of Food & Drink* (5 submodul, 120 visual)

## Cara Menjalankan Secara Lokal
Buka berkas `index.html` langsung dengan klik ganda di Windows File Explorer atau peramban web pilihan Anda (Chrome, Edge, Firefox). Mendukung penuh protokol lokal `file:///` tanpa perlu web server lokal.

## Deployment ke GitHub Pages
Repositori ini telah dirancang 100% *self-contained*:
1. Aktifkan **GitHub Pages** pada repositori ini di menu *Settings > Pages*.
2. Pilih source **Deploy from a branch**, Branch: `main`, folder: `/` (root).
3. Klik **Save**. Web viewer interaktif langsung dapat diakses secara publik.

## Struktur Berkas
- `index.html`: Web viewer responsif dengan Spatial 3D Hero, Exhibits Stage, Full Poster Wall, dan Fast Continuous Stream Reader.
- `css/`: Desain antarmuka modular (variables, layout, exhibits, reader, wall, stream, controls, toast).
- `js/`: Engine interaktif, dataset katalog (`data.js`), konfigurasi & kamus sinonim (`config.js`), dan komponen modular.
- `H8-*/`: Subdirektori poster JPG untuk Paviliun Sains Memasak & Gastronomi (5 submodul).
- `H9-*/`: Subdirektori poster JPG untuk Paviliun Sejarah Makanan & Minuman (5 submodul).
- `favicon.png`: Ikon web resmi.
