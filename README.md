# 天易不動產估價師聯合事務所 — 網站

純靜態網站（HTML / CSS / JavaScript），不需資料庫或後端即可運作。
改內容只需編輯 HTML 檔，用瀏覽器打開（點兩下）即可預覽。

## 網站結構

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁（沿革、概況數據、服務摘要、委託流程） |
| `team.html` | 估價師介紹（5 位估價師＋3 位助理） |
| `services.html` | 服務項目＋委託流程 |
| `cases.html` | 業績案例（都更實績，可依類別篩選） |
| `faq.html` | 常見問題（估價知識、委託流程、費用、都更 FAQ） |
| `contact.html` | 聯絡我們（聯絡資訊＋諮詢表單） |
| `css/style.css` | 全站樣式（色票在檔案最上方 `:root` 變數） |
| `js/main.js` | 手機選單、案例篩選、表單提示 |

內容來源：事務所沿革、成員資料、都更實績取自「協力廠商簡介(估價師)_都美南機場.docx」；
電話與地址為業主提供（02-2928-6670／新北市永和區永和路二段 147 號 6 樓）。

## 自行修改指南

建議用免費的 [VS Code](https://code.visualstudio.com/) 開啟整個資料夾編輯。
**改之前先把整個資料夾複製一份備份。**

### 改文字
直接在 HTML 檔裡找到該段文字修改。`Cmd+F` 搜尋單一檔案、
`Cmd+Shift+F` 跨檔案搜尋（例如電話出現在每一頁的頁尾，要一起改）。

### 新增業績案例（cases.html）
複製一個現有區塊，貼上後改內容：

```html
<div class="case-item case-card" data-category="renewal">
  <div>
    <div class="case-tag">權利變換・領銜</div>
    <h3>案名寫這裡</h3>
    <p class="case-desc">實施者：某某公司</p>
  </div>
  <div class="case-meta">進度寫這裡<br>行政區寫這裡</div>
</div>
```

`data-category` 填 `public`（公辦都更）或 `renewal`（事業計畫／權利變換），
篩選按鈕會自動對應。若要新增類別，需同步在 `.filter-bar` 加一顆
`<button class="filter-btn" data-filter="新代碼">` 按鈕。

### 放估價師照片（team.html）
在專案資料夾建立 `images/` 放照片，然後把

```html
<div class="member-photo">照片待放置</div>
```

換成

```html
<img class="member-photo" src="images/檔名.jpg" alt="姓名" style="object-fit:cover;">
```

### 嵌入 Google 地圖（contact.html）
Google 地圖搜尋事務所地址 → 分享 → 嵌入地圖 → 複製 HTML，
取代 `<div class="map-placeholder">…</div>` 整段。

### 改顏色與字體
`css/style.css` 最上方的 `:root` 是全站色票（`--navy` 深藍、`--gold` 金色、
`--line` 框線色等），改一處全站生效。

## 諮詢表單

目前送出僅顯示提示訊息，尚未真正寄信。最簡單的免後端做法：
註冊 [Web3Forms](https://web3forms.com/) 或 [Formspree](https://formspree.io/)，
依其說明在 `contact.html` 的 `<form>` 加上 `action="…" method="POST"` 即可。

## 本機預覽

直接點兩下 HTML 檔即可。若要模擬正式網址環境：

```bash
cd 網站架設
python3 -m http.server 8899
# 瀏覽器開 http://localhost:8899
```

## 加入圖片

1. 在專案資料夾建立 `images/` 資料夾，圖片放進去（檔名用英文、不要有空格）。
2. 在 HTML 要放圖的位置寫 `<img src="images/檔名.jpg" alt="說明文字">`。
3. 上傳前先壓縮：寬 1200px 以內、500KB 以下（Mac 預覽程式「工具 → 調整大小」，或 [tinypng.com](https://tinypng.com)）。

常用位置：
- **估價師照片**：見上方「放估價師照片」段落。
- **Logo**：把每頁導覽列的 `<div class="brand-mark">天</div>` 換成
  `<img src="images/logo.png" alt="天易" style="width:40px; height:40px;">`。

## 部署上線（建議流程）

1. **主機（免費）**：到 [Netlify](https://www.netlify.com/) 註冊，用「Deploy manually」
   把整個資料夾拖進去即完成，會得到 `xxx.netlify.app` 網址。
   之後更新網站＝重新拖一次資料夾。
   ※ 上傳前先把 `協力廠商簡介(估價師)_都美南機場.docx` 移出資料夾，內部文件不要發佈上網。
2. **正式域名（一年約 NT$300–800）**：到 Gandi／PChome 買網址／遠振等域名商
   購買（如 `xxx.com.tw`），在 Netlify「Domain settings → Add custom domain」
   綁定並依指示設定 DNS，HTTPS 會自動配置。

GitHub Pages、Cloudflare Pages 或一般虛擬主機（FTP 上傳）亦可。
