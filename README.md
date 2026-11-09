# NOIR BLOOD — Demo Store

เว็บเดโม Node.js ไม่มี dependency เพิ่มเติม ข้อมูลเก็บใน localStorage ของแต่ละเบราว์เซอร์เท่านั้น ไม่ใช่ระบบบัญชีหรือชำระเงินจริง

## ทดสอบในเครื่อง
`npm start` แล้วเปิด http://localhost:3000

## Render ฟรี
1. สร้าง GitHub repository แล้วอัปโหลด `server.js`, `index.html`, `package.json` ที่ root ของ repository
2. เข้า https://dashboard.render.com เลือก New > Web Service แล้วเชื่อม repository
3. Runtime: Node, Build Command: `npm install`, Start Command: `npm start`, Instance Type: Free (ถ้ามีให้เลือก)
4. กด Deploy และรอจนสถานะ Live จากนั้นเปิด URL `https://<ชื่อบริการ>.onrender.com` ที่ Render แสดง

หมายเหตุ: แผนฟรีอาจ sleep เมื่อไม่มีคนใช้ มีข้อจำกัดและเงื่อนไขที่เปลี่ยนได้ ตรวจสอบหน้า Render ก่อน deploy ข้อมูล localStorage ไม่ซิงก์ข้ามอุปกรณ์หรือผู้ใช้ ห้ามใช้เดโมนี้รับเงินจริง
