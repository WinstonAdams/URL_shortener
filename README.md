# URL_shortener

![Index page about URL Shortener](URL Shortener.jpg)

## 介紹

將輸入的原始網址轉成短網址

## 功能

- 將原始網址轉成5碼隨機英數組合的短網址
- 新的網址產生新的短網址，並新增至資料庫
- 曾經輸入的網址會產生與之前相同的短網址
- 點擊 Copy 按鈕可以複製短網址至剪貼簿

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 開啟終端機，到欲存放專案的路徑下，將專案 clone 到本地，輸入：

   ```bash
   git clone https://github.com/WinstonAdams/URL_shortener.git
   ```
   
3. 安裝相關套件，輸入：

   ```bash
   npm install
   ```

4. 執行專案，輸入：

   ```bash
   npm run dev
   ```

5. 在終端機看見此行訊息代表順利執行

   ```bash
   App is running on http://localhost:3000
   ```
   
6. 打開瀏覽器輸入以下網址

   ```bash
   http://localhost:3000
   ```
   


## 開發工具

- Node.js - 執行環境
- Express - Web 應用程式框架
- Express-Handlebars - 樣板引擎
- Bootstrap - 前端框架
- MongoDB - 文件資料庫
- mongoose - MongoDB ODM
