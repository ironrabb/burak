console.log("EXUCUTED");

import moment from "moment";

const currentTime = moment().format("YYYY MM DD ss");
console.log(currentTime);
const person: string = "Martin";
const count: number = 100;
// typescript ozi nima va nimaga kerak?
// Architectural pattern: MVC, Dependency Injection, MVP

// Design pattern: Middleware, Decotar

// 1️⃣ TYPESCRIPT NIMA?
// --------------------------------------------
// TypeScript = JavaScript + statik tur tizimi
// - JavaScript ustiga qurilgan (superset)
// - Oxir-oqibat JavaScript'ga kompilyatsiya qilinadi

// NIMA UCHUN KERAK?
// - Statik tur tekshiruvi -> xatolarni kod yozishda topadi
// - Tahrirlovchida avtomatik to'ldirish, signaturalar
// - Katta loyihalarda kod ishonchli va tushunarli
// - JavaScript bilan to'liq mos (barcha JS kodi TS da ishlaydi)

// 2️⃣ ARXITEKTURA PATTERMS
// --------------------------------------------
// Butun dasturning YUQORI DARAJALI tuzilishini tashkil qiladi.

// MVC (Model-View-Controller)
// - Model  -> ma'lumotlar
// - View   -> ko'rinish
// - Controller -> foydalanuvchi kiritishini boshqaradi
// - Misol: ASP.NET MVC, Ruby on Rails

// MVP (Model-View-Presenter)
// - Presenter -> View va Model ni muvofiqlashtiradi
// - View va Model bir-birini bilmaydi
// - Test yozish osonroq
// - Misol: Web Forms, eski Android

// Dependency Injection (DI)
// - Obyekt qaramliklarini o'zi yaratmaydi, tashqi tomondan beriladi
// - Maqsad: bo'shashgan bog'lanish (loose coupling)
// - Turlari: constructor, setter, interface injection
// - Misol: Spring, ASP.NET Core, Angular

// 3️⃣ DIZAYN NAQSHLARI
// --------------------------------------------
// Muayyan KOD DARAJASIDAGI qayta ishlatiladigan yechimlar.

// Middleware
// - So'rov/javob jarayoniga "oraliq qatlam" kiritadi
// - Har bir qatlam: o'zgartirish, jurnal, autentifikatsiya
// - Misol: Django, Express.js

// Decorator
// - Asl kodni o'zgartirmasdan qo'shimcha xatti-harakat "o'rash"
// - Middleware va Decorator mohiyatan o'xshash
// - Keng ma'noda: Middleware = Decorator ning bir turi

// 4️⃣ ASOSIY FARQ
// --------------------------------------------
// Arxitektura naqshlari -> loyiha tuzilishini hal qiladi
// Dizayn naqshlari      -> kodni tashkil etishni hal qiladi
// Ikkalasi birgalikda   -> tushunarli, test qilinadigan, saqlanadigan kod
// ============================================
