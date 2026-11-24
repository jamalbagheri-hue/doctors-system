/**
 * سامانه پزشکان تمام وقت دانشگاه علوم پزشکی کردستان - معاونت درمان
 * ------------------------------------------------------------------
 * نسخه اصلاح‌شده (Frontend Sync Fix)
 *
 * این فایل به‌طور کامل با ساختار public/index.html همگام شده است:
 *  - تمام شناسه‌های DOM (id) مطابق نسخه جدید رابط کاربری
 *  - تمام توابع مورد نیاز هندلرهای inline رابط کاربری پیاده‌سازی شده
 *  - اصلاح فیلد شماره نظام پزشکی (medicalCode)
 *  - جستجو/فیلتر نرمال‌شده (ي/ك عربی، ارقام فارسی) و پشتیبانی از شهرستان‌های مشترک
 *
 * داده‌های اولیه (INITIAL_*) به‌صورت خودکار از پوشه data تزریق می‌شوند.
 */

/* ============================ داده‌های اولیه ============================ */
const INITIAL_GEOGRAPHIC = [{"id": 1, "radif": "1", "firstName": "بهزاد", "lastName": "احسن", "specialty": "بيهوشي", "nationalCode": "3730219723", "medicalCode": "59883", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشيار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 2, "radif": "2", "firstName": "بهزاد", "lastName": "محسن پور", "specialty": "بیماریهای عفونی", "nationalCode": "0043982131", "medicalCode": "54415", "startDate": "1393/2/11", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 3, "radif": "3", "firstName": "نرگس", "lastName": "شمس عليزاده", "specialty": "روانپزشکی", "nationalCode": "3257604998", "medicalCode": "59315", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 4, "radif": "4", "firstName": "كريم", "lastName": "ناصري", "specialty": "بيهوشي", "nationalCode": "2928802126", "medicalCode": "53035", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 5, "radif": "5", "firstName": "مرضيه", "lastName": "مقدم", "specialty": "روانپزشکی", "nationalCode": "4284228951", "medicalCode": "40349", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 6, "radif": "6", "firstName": "فرزاد", "lastName": "سرشيوي", "specialty": "بيهوشي", "nationalCode": "3848894726", "medicalCode": "61682", "startDate": "1393/6/25", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 7, "radif": "7", "firstName": "ليلا", "lastName": "عزيزخاني", "specialty": "طب اورژانس", "nationalCode": "3874487423", "medicalCode": "93359", "startDate": "1393/9/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 8, "radif": "8", "firstName": "برهان", "lastName": "مرادویسی", "specialty": "فوق تخصص خون و انکولوژی", "nationalCode": "3838698843", "medicalCode": "95490", "startDate": "1394/2/1", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 9, "radif": "9", "firstName": "فايق", "lastName": "يوسفي", "specialty": "روانشناسي باليني", "nationalCode": "3859670131", "medicalCode": "1717", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 10, "radif": "10", "firstName": "مهران", "lastName": "يار احمدي", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "3849678709", "medicalCode": "0", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 11, "radif": "11", "firstName": "فرزانه", "lastName": "الله ويسي", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "3732101444", "medicalCode": "0", "startDate": "1393/6/30", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 12, "radif": "12", "firstName": "ناهید", "lastName": "زمانی مهر", "specialty": "طب اورژانس", "nationalCode": "1374022373", "medicalCode": "111285", "startDate": "1395/1/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 13, "radif": "13", "firstName": "انور", "lastName": "محمدی بانه", "specialty": "فوق نفرولوژی", "nationalCode": "3761930232", "medicalCode": "34395", "startDate": "1395/2/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 14, "radif": "14", "firstName": "غلامرضا", "lastName": "شيبت زاده", "specialty": "فوق تخصص جراحي قلب وعروق", "nationalCode": "2091860417", "medicalCode": "33974", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 15, "radif": "15", "firstName": "کوروش", "lastName": "اخباری", "specialty": "طب اورژانس", "nationalCode": "3961829772", "medicalCode": "96467", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 16, "radif": "16", "firstName": "سارا", "lastName": "کمالی اردکانی", "specialty": "فلوشیپ سایکوسوماتیک", "nationalCode": "0064644588", "medicalCode": "108418", "startDate": "1396/8/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ  1403/01/01عنوان فلوشیپ سایکوسوماتیک", "reEntryDate": ""}, {"id": 17, "radif": "17", "firstName": "شوبو", "lastName": "شیخ احمدی", "specialty": "فوق تخصص نوزادان", "nationalCode": "3732315241", "medicalCode": "64166", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 18, "radif": "18", "firstName": "بهار", "lastName": "اردلانی", "specialty": "طب اورژانس", "nationalCode": "3781947629", "medicalCode": "90767", "startDate": "1395/8/10", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 19, "radif": "19", "firstName": "فرهنگ", "lastName": "صفرنژاد", "specialty": "فلوشیپ سوختگی", "nationalCode": "2709760576", "medicalCode": "63988", "startDate": "1399/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 20, "radif": "20", "firstName": "گوهر", "lastName": "لطفی", "specialty": "بیماریهای عفونی", "nationalCode": "3859072951", "medicalCode": "112936", "startDate": "1394/8/19", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 21, "radif": "21", "firstName": "سولماز", "lastName": "درخشان", "specialty": "داخلی", "nationalCode": "3762099677", "medicalCode": "130125", "startDate": "1399/11/21", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 22, "radif": "22", "firstName": "شاهرخ", "lastName": "ابن رسولی", "specialty": "متخصص بیهوشی فلوشیپ درد", "nationalCode": "3730474502", "medicalCode": "75652", "startDate": "1400/1/15", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 23, "radif": "23", "firstName": "آزاد", "lastName": "ماجدی", "specialty": "فوق تخصص مراقبتهای ویژه( ICU)", "nationalCode": "3732411249", "medicalCode": "102048", "startDate": "1400/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 24, "radif": "24", "firstName": "عرفان", "lastName": "آزادپور", "specialty": "آسیب شناسی", "nationalCode": "3720126579", "medicalCode": "155100", "startDate": "1400/11/3", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 25, "radif": "25", "firstName": "حکیم", "lastName": "خدایی", "specialty": "فوق تخصص گوارش وکبد بالغین", "nationalCode": "3760247210", "medicalCode": "121458", "startDate": "1400/12/27", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 26, "radif": "26", "firstName": "فرزاد", "lastName": "پرویزپور", "specialty": "علوم سلولی کاربردیph.d", "nationalCode": "3731528037", "medicalCode": "", "startDate": "1401/07/13", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 27, "radif": "27", "firstName": "آروین", "lastName": "رحیمی", "specialty": "جراح مغزو اعصاب", "nationalCode": "3720075291", "medicalCode": "156104", "startDate": "1401/11/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 28, "radif": "28", "firstName": "پیام", "lastName": "وکیلی تجره", "specialty": "ارتوپدی", "nationalCode": "3720290425", "medicalCode": "169042", "startDate": "1401/11/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 29, "radif": "29", "firstName": "جلال", "lastName": "منوچهری", "specialty": "جراحی عمومی", "nationalCode": "3230096118", "medicalCode": "92021", "startDate": "1395/04/06", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/01/17از درمانی تبدیل  به هیأت علمی تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 30, "radif": "30", "firstName": "وحید", "lastName": "نوریان", "specialty": "فوق تخصص جراحی عروق", "nationalCode": "0068271417", "medicalCode": "117292", "startDate": "1402/02/11", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 31, "radif": "31", "firstName": "شيما", "lastName": "عظيمي اوليايي", "specialty": "راديوتراپي", "nationalCode": "0083993002", "medicalCode": "143549", "startDate": "1399/06/13", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/22 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 32, "radif": "32", "firstName": "تارا", "lastName": "مولانایی کمانگر", "specialty": "رادیوانکولوژی", "nationalCode": "3733067411", "medicalCode": "149201", "startDate": "1402/09/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/22 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 33, "radif": "33", "firstName": "معصومه", "lastName": "مریوانی", "specialty": "طب اورژانس", "nationalCode": "4621534467", "medicalCode": "118443", "startDate": "1400/10/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/28 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 34, "radif": "34", "firstName": "آرش", "lastName": "امینی", "specialty": "فوق تخصص مراقبت های ویژه", "nationalCode": "1376554763", "medicalCode": "87414", "startDate": "1401/11/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/010/04 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 35, "radif": "35", "firstName": "محسن", "lastName": "قاضی سلطانی", "specialty": "رادیولوژی", "nationalCode": "3750211558", "medicalCode": "174107", "startDate": "1402/11/12", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 36, "radif": "36", "firstName": "محمد", "lastName": "کریمی", "specialty": "قلب وعروق", "nationalCode": "3850077586", "medicalCode": "162151", "startDate": "1402/11/08", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 37, "radif": "37", "firstName": "سمیرا", "lastName": "حیدری", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "", "medicalCode": "", "startDate": "1402/12/07", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 38, "radif": "38", "firstName": "فواد", "lastName": "مجیدی", "specialty": "فوق تخصص جراحي قلب وعروق", "nationalCode": "3859754653", "medicalCode": "117184", "startDate": "1403/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 39, "radif": "39", "firstName": "فاتح", "lastName": "سهرابی", "specialty": "ph.d روانشناسی بالینی", "nationalCode": "3230903307", "medicalCode": "19154", "startDate": "1403/03/20", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 40, "radif": "40", "firstName": "محمد سعد", "lastName": "فرقانی", "specialty": "فوق تخصص نفرولوژی بزرگسالان", "nationalCode": "3760186238", "medicalCode": "101384", "startDate": "1403/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 41, "radif": "41", "firstName": "گلناز", "lastName": "فهیمی", "specialty": "فوق تخصص خون وسرطان کودکان", "nationalCode": "3732410961", "medicalCode": "102163", "startDate": "1403/10/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 42, "radif": "42", "firstName": "امیر", "lastName": "امینی", "specialty": "جراحی عمومی", "nationalCode": "3840195977", "medicalCode": "187419", "startDate": "1404/01/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 43, "radif": "43", "firstName": "حمزه", "lastName": "بابایی", "specialty": "چشم", "nationalCode": "3720460193", "medicalCode": "185947", "startDate": "1404/01/23", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 44, "radif": "44", "firstName": "تورج", "lastName": "خالدیان", "specialty": "گوش و حلق وبینی", "nationalCode": "3790240461", "medicalCode": "184943", "startDate": "1404/01/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 45, "radif": "45", "firstName": "اقبال", "lastName": "فتاحي", "specialty": "فوق تخصص هماتولوژی وانکولوژی بزرگسالان", "nationalCode": "3732297551", "medicalCode": "58075", "startDate": "1398/06/27", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/01/25", "reEntryDate": ""}, {"id": 46, "radif": "46", "firstName": "داراب", "lastName": "ظهری", "specialty": "طب اورژانس", "nationalCode": "3761994818", "medicalCode": "106415", "startDate": "1398/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/03/05", "reEntryDate": ""}, {"id": 47, "radif": "47", "firstName": "آوات", "lastName": "کریمی", "specialty": "کودکان", "nationalCode": "3732605744", "medicalCode": "128363", "startDate": "1404/03/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 48, "radif": "48", "firstName": "دینا", "lastName": "معتمدی", "specialty": "نورولوژی", "nationalCode": "1757458425", "medicalCode": "137982", "startDate": "1404/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 49, "radif": "49", "firstName": "اسعد", "lastName": "فتحی پور", "specialty": "طب اورژانس", "nationalCode": "3732621693", "medicalCode": "130643", "startDate": "1396/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ1404/04/01 از تمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 50, "radif": "50", "firstName": "سمیره", "lastName": "احمدپور", "specialty": "رادیولوژی", "nationalCode": "3840036933", "medicalCode": "157548", "startDate": "1403/07/15", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ1404/04/01 از تمام وقت درمانی تبدیل به تمام وقت جغرافیایی", "reEntryDate": ""}, {"id": 51, "radif": "51", "firstName": "شیرزاد", "lastName": "بابایی", "specialty": "ph.d روانشناسی بالینی", "nationalCode": "3830016662", "medicalCode": "ر-42209", "startDate": "1404/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 52, "radif": "52", "firstName": "هوشمند", "lastName": "صوفی مجیدپور", "specialty": "فلوشیپ اندویورولوژی", "nationalCode": "1289768897", "medicalCode": "132626", "startDate": "1404/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 53, "radif": "53", "firstName": "نرمین", "lastName": "باغی", "specialty": "داخلی", "nationalCode": "3840063736", "medicalCode": "161306", "startDate": "1404/09/04", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "1405/06/31", "remarks": "قبولی در مقطع فوق تخصصی", "reEntryDate": ""}, {"id": 54, "radif": "54", "firstName": "محسن", "lastName": "محمدی", "specialty": "فوق تخصص گوارش وکبد بالغین", "nationalCode": "3761992841", "medicalCode": "105061", "startDate": "1404/10/21", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1405/06/01 تمام وقت جغرافیایی تبدیل به تمام وقت درمانی", "reEntryDate": ""}, {"id": 55, "radif": "55", "firstName": "امیر", "lastName": "شکوهی ثابت", "specialty": "فوق تخصص ریه بالغین", "nationalCode": "1465816763", "medicalCode": "110862", "startDate": "1404/11/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 56, "radif": "56", "firstName": "طیبه", "lastName": "محمدی", "specialty": "فوق تخصص بیماریهای مغزواعصاب کودکان", "nationalCode": "3762050872", "medicalCode": "116641", "startDate": "1405/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 57, "radif": "57", "firstName": "کتایون", "lastName": "حسن زاده", "specialty": "فوق تخصص نفرولوژِی بالغین", "nationalCode": "68790392", "medicalCode": "80102", "startDate": "1405/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 58, "radif": "58", "firstName": "آرام", "lastName": "خالدیان", "specialty": "بیهوشی", "nationalCode": "3732054993", "medicalCode": "102155", "startDate": "1401/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/12/01", "reEntryDate": ""}, {"id": 59, "radif": "59", "firstName": "پوریا", "lastName": "تیموری", "specialty": "جراحی فک وصورت", "nationalCode": "6410031440", "medicalCode": "185998", "startDate": "1405/01/29", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "1405/07/15", "remarks": "انتقال به دانشگاه همدان", "reEntryDate": ""}, {"id": 60, "radif": "60", "firstName": "علاالدین", "lastName": "هوشمند", "specialty": "فلوشیپ اکوکاردیوگرافی", "nationalCode": "3760115217", "medicalCode": "65792", "startDate": "1403/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1405/01/22", "reEntryDate": ""}, {"id": 61, "radif": "61", "firstName": "لقمان", "lastName": "قادری", "specialty": "فوق تخصص توراکس", "nationalCode": "3848932458", "medicalCode": "96131", "startDate": "1405/04/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 62, "radif": "62", "firstName": "سمیه", "lastName": "معتمد", "specialty": "فوق تخصص روماتولوژی", "nationalCode": "3309770788", "medicalCode": "116227", "startDate": "1405/04/09", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "", "reEntryDate": ""}];
const INITIAL_TREATMENT = [{"id": 1, "radif": "1", "firstName": "محمد", "lastName": "مهرآسا", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "0047386622", "medicalCode": "48193", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 2, "radif": "2", "firstName": "منوچهر", "lastName": "احمدي", "specialty": "راديوتراپي", "city": "سنندج", "nationalCode": "3760821618", "medicalCode": "32015", "startDate": "1393/09/03", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 3, "radif": "3", "firstName": "امیر", "lastName": "شیخ الاسلامی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "0040306305", "medicalCode": "50906", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 4, "radif": "4", "firstName": "سهیلا", "lastName": "ناهدی", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "1373747587", "medicalCode": "33141", "startDate": "1396/06/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 5, "radif": "5", "firstName": "صدیق", "lastName": "جدیدالاسلامی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3731147165", "medicalCode": "100664", "startDate": "1396/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 6, "radif": "6", "firstName": "محمود", "lastName": "مرادی", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "2150634163", "medicalCode": "55297", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 7, "radif": "7", "firstName": "اکبر", "lastName": "سنگری", "specialty": "ارتوپدی", "city": "سنندج-مریوان", "nationalCode": "3732596362", "medicalCode": "135705", "startDate": "1395/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 8, "radif": "8", "firstName": "ئازاده", "lastName": "فتحی", "specialty": "بیهوشی", "city": "سنندج-دیواندره", "nationalCode": "3733090713", "medicalCode": "134896", "startDate": "1398/09/01", "exitDate": "", "remarks": "از تاریخ 99/4/1درسنندج مشترکا\" با دیواندره", "reEntryDate": ""}, {"id": 9, "radif": "9", "firstName": "سبا", "lastName": "قادرخانی", "specialty": "پاتولوژی", "city": "سنندج-دهگلان", "nationalCode": "3732935353", "medicalCode": "147004", "startDate": "1399/09/02", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 10, "radif": "10", "firstName": "سيد مسعود", "lastName": "موسوي جم", "specialty": "بیهوشی", "city": "سنندج - مریوان", "nationalCode": "3801199398", "medicalCode": "75970", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ1400/10/1 مشترکا\" با مراکز سنندج فعالیت دارند", "reEntryDate": ""}, {"id": 11, "radif": "11", "firstName": "فرزاد", "lastName": "بیگلری", "specialty": "جراح عمومی", "city": "سنندج-بانه", "nationalCode": "4949786253", "medicalCode": "132625", "startDate": "1400/10/18", "exitDate": "", "remarks": "غائب", "reEntryDate": ""}, {"id": 12, "radif": "12", "firstName": "علی", "lastName": "ولیزاده", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "3730514679", "medicalCode": "91018", "startDate": "1400/11/19", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 13, "radif": "13", "firstName": "علیرضا", "lastName": "حشمتی", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "3256997872", "medicalCode": "48227", "startDate": "1397/07/23", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 14, "radif": "14", "firstName": "سعیده", "lastName": "سیفی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "0450149978", "medicalCode": "110870", "startDate": "1401/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 15, "radif": "15", "firstName": "سعید", "lastName": "بیگلری", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "3379813508", "medicalCode": "80900", "startDate": "1401/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 16, "radif": "16", "firstName": "زیبا", "lastName": "خدایاری", "specialty": "زنان وزایمان", "city": "سنندج- دیواندره", "nationalCode": "3781972445", "medicalCode": "117455", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ 1401/07/06 مشترکا\" با مراکز سنندج", "reEntryDate": ""}, {"id": 17, "radif": "17", "firstName": "محمدیحیی", "lastName": "فریدی سقزلو", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "3750093962", "medicalCode": "163802", "startDate": "1401/07/04", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 18, "radif": "18", "firstName": "آرمان", "lastName": "حبیبی", "specialty": "بیماریهای مغز واعصاب", "city": "سنندج-مریوان", "nationalCode": "3811792842", "medicalCode": "140879", "startDate": "1401/10/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 19, "radif": "19", "firstName": "احسان", "lastName": "یزدی", "specialty": "پزشکی هسته ای", "city": "سنندج", "nationalCode": "0451659971", "medicalCode": "135840", "startDate": "1401/10/25", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 20, "radif": "20", "firstName": "بابك", "lastName": "پرتوي", "specialty": "داخلی", "city": "سنندج-کامیاران", "nationalCode": "3732435792", "medicalCode": "128360", "startDate": "1400/10/01", "exitDate": "", "remarks": "ازتاریخ1405/03/01 غایب", "reEntryDate": ""}, {"id": 21, "radif": "21", "firstName": "سارا", "lastName": "زندسلیمی", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "3720027759", "medicalCode": "150332", "startDate": "1402/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 22, "radif": "22", "firstName": "ژیلا", "lastName": "شریفی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3230285565", "medicalCode": "130533", "startDate": "1402/07/09", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 23, "radif": "23", "firstName": "سارا", "lastName": "باتمانی", "specialty": "پاتولوژی", "city": "سنندج-کامیاران", "nationalCode": "3830075537", "medicalCode": "158251", "startDate": "1402/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 24, "radif": "24", "firstName": "عبدالرضا", "lastName": "نریمان", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3780928930", "medicalCode": "36123", "startDate": "1402/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 25, "radif": "25", "firstName": "عبدالله", "lastName": "ارشدی", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "3730577476", "medicalCode": "118302", "startDate": "1402/08/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 26, "radif": "26", "firstName": "سپیده", "lastName": "رادور", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3770097157", "medicalCode": "165590", "startDate": "1402/11/05", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 27, "radif": "27", "firstName": "یسرا", "lastName": "مظهری", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3720093964", "medicalCode": "147991", "startDate": "1402/11/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 28, "radif": "28", "firstName": "سروه", "lastName": "حیدری", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "0068990588", "medicalCode": "84278", "startDate": "1403/02/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 29, "radif": "29", "firstName": "دریا", "lastName": "خسروی", "specialty": "پوست", "city": "سنندج-کامیاران", "nationalCode": "3733183312", "medicalCode": "151532", "startDate": "1402/12/20", "exitDate": "", "remarks": "غایب", "reEntryDate": ""}, {"id": 30, "radif": "30", "firstName": "لیلا", "lastName": "برنا", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3732979318", "medicalCode": "186194", "startDate": "1403/07/07", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 31, "radif": "31", "firstName": "علی", "lastName": "پارسامهر", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "3329914017", "medicalCode": "149352", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 32, "radif": "32", "firstName": "مهدي", "lastName": "گلچين", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "0061924911", "medicalCode": "107197", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 33, "radif": "33", "firstName": "سوزان", "lastName": "ستوده", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "2210048176", "medicalCode": "159146", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 34, "radif": "34", "firstName": "منیره", "lastName": "اميني", "specialty": "جراحي مغز و اعصاب", "city": "سنندج", "nationalCode": "1590298942", "medicalCode": "172091", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 35, "radif": "35", "firstName": "بهنام", "lastName": "احمدی", "specialty": "رادیولوژی", "city": "سنندج", "nationalCode": "6460008744", "medicalCode": "164791", "startDate": "1403/07/07", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 36, "radif": "36", "firstName": "علی", "lastName": "خمودی قاضیانی", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "0051359677", "medicalCode": "57578", "startDate": "1400/01/01", "exitDate": "", "remarks": "ازتاریخ 1403/11/09 تبدیل وضعیت از تمام وقت جغرافیایی به تمام وقت درمانی", "reEntryDate": ""}, {"id": 37, "radif": "37", "firstName": "محمد", "lastName": "فتحی", "specialty": "فوق تخصص جراحی پلاستیک", "city": "سنندج", "nationalCode": "3733125312", "medicalCode": "139319", "startDate": "1403/10/12", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 38, "radif": "38", "firstName": "سلام", "lastName": "قمری", "specialty": "ارتوپدی", "city": "سنندج", "nationalCode": "6469952879", "medicalCode": "152256", "startDate": "1403/11/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 39, "radif": "39", "firstName": "پریوش", "lastName": "نعمتی", "specialty": "بیماریهای مغز واعصاب", "city": "سنندج", "nationalCode": "2920059718", "medicalCode": "157708", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 40, "radif": "40", "firstName": "بختیار", "lastName": "عبدالله زاده", "specialty": "ارتوپدی", "city": "سنندج", "nationalCode": "3750304467", "medicalCode": "186804", "startDate": "1403/12/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 41, "radif": "41", "firstName": "صادق", "lastName": "جاهد جوشاتو", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "2939888035", "medicalCode": "143487", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 42, "radif": "42", "firstName": "محمد", "lastName": "مرادی", "specialty": "روانپزشکی", "city": "سنندج-دهگلان", "nationalCode": "3732330664", "medicalCode": "88044", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ 1404/01/01مشترک با مراکز سنندج", "reEntryDate": ""}, {"id": 43, "radif": "43", "firstName": "پرویز", "lastName": "احمدی", "specialty": "فوق تخصص ریه کودکان", "city": "سنندج", "nationalCode": "5589221234", "medicalCode": "76178", "startDate": "1399/08/25", "exitDate": "", "remarks": "ازتاریخ1402/09/22 ازتمام وقت جغرافیایی تبدیل به تمام وقت درمانی", "reEntryDate": ""}, {"id": 44, "radif": "44", "firstName": "شاهپور", "lastName": "شجاع", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "1820448649", "medicalCode": "52629", "startDate": "1401/04/01", "exitDate": "", "remarks": "از تاریخ 1403/08/21 از تمام وقت جغرافیایی تبدیل به تمام وقت درمانی", "reEntryDate": ""}, {"id": 45, "radif": "45", "firstName": "سید محسن", "lastName": "حسینی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "سنندج", "nationalCode": "3720080188", "medicalCode": "152777", "startDate": "1404/03/12", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 46, "radif": "46", "firstName": "الهه", "lastName": "فتحی", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3730266117", "medicalCode": "169043", "startDate": "1403/11/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 47, "radif": "47", "firstName": "اردلان", "lastName": "معمار", "specialty": "داخلی", "city": "سنندج", "nationalCode": "1271380366", "medicalCode": "170196", "startDate": "1403/12/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 48, "radif": "48", "firstName": "فائزه", "lastName": "رشیدی", "specialty": "کودکان", "city": "سنندج", "nationalCode": "2880104564", "medicalCode": "173766", "startDate": "1403/12/25", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 49, "radif": "49", "firstName": "ندا", "lastName": "زارعی", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "3733043200", "medicalCode": "145787", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 50, "radif": "50", "firstName": "شینا", "lastName": "کریمی", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "3733190289", "medicalCode": "155593", "startDate": "1404/08/13", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 51, "radif": "51", "firstName": "علی اشرف", "lastName": "رادور", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3770344073", "medicalCode": "85724", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 52, "radif": "52", "firstName": "فرید", "lastName": "عبدی", "specialty": "ارتوپدی", "city": "سنندج-سقز", "nationalCode": "3720272559", "medicalCode": "163944", "startDate": "1403/07/01", "exitDate": "", "remarks": "ازتاریخ 1404/08/01 فعالیت مشترک مراکز سقز وسنندج", "reEntryDate": ""}, {"id": 53, "radif": "53", "firstName": "سرور", "lastName": "خاطری", "specialty": "طب فیزیکی وتوانبخشی", "city": "سنندج-مریوان", "nationalCode": "3830123353", "medicalCode": "170481", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 54, "radif": "54", "firstName": "غزل", "lastName": "جلالی", "specialty": "قلب و عروق", "city": "سنندج-دیواندره", "nationalCode": "3240361051", "medicalCode": "164902", "startDate": "1404/09/01", "exitDate": "", "remarks": "مشترک با مراکز سنندج ودیواندره", "reEntryDate": ""}, {"id": 55, "radif": "55", "firstName": "علیرضا", "lastName": "مرزبان", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "2420535332", "medicalCode": "165690", "startDate": "1404/08/18", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 56, "radif": "56", "firstName": "صبا", "lastName": "فقری", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "1570278814", "medicalCode": "170878", "startDate": "1404/08/18", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 57, "radif": "57", "firstName": "روزبه", "lastName": "محمدی", "specialty": "جراحي مغز و اعصاب", "city": "سنندج", "nationalCode": "3732216705", "medicalCode": "151973", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 58, "radif": "58", "firstName": "احسان", "lastName": "پرواس", "specialty": "فوق تخصص جراحی قلب وعروق", "city": "سنندج", "nationalCode": "0079735487", "medicalCode": "142639", "startDate": "1404/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 59, "radif": "59", "firstName": "ربابه", "lastName": "محمد بیگی", "specialty": "فلوشیپ نازایی", "city": "سنندج", "nationalCode": "4410114298", "medicalCode": "26318", "startDate": "1404/11/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 60, "radif": "60", "firstName": "مسعود", "lastName": "حسن زاده", "specialty": "جراحی دهان،فک وصورت", "city": "سنندج", "nationalCode": "2880155071", "medicalCode": "163260", "startDate": "1405/01/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 61, "radif": "61", "firstName": "میلاد", "lastName": "سعادت", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "سنندج-قروه", "nationalCode": "3750312702", "medicalCode": "192465", "startDate": "1405/03/16", "exitDate": "", "remarks": "ازتاریخ1405/07/01 مشترکا\" مراکز سنندج ومرکز قروه", "reEntryDate": ""}, {"id": 62, "radif": "62", "firstName": "محمد مهدی", "lastName": "زیرک ساز", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "0064390047", "medicalCode": "121727", "startDate": "1403/07/08", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 63, "radif": "63", "firstName": "محسن", "lastName": "محمدی", "specialty": "فوق تخصص گوارش وکبد بالغین", "city": "سنندج", "nationalCode": "3761992841", "medicalCode": "105061", "startDate": "1404/10/21", "exitDate": "", "remarks": "از تاریخ 1405/06/01 ازتمام وقت جغرافیایی تبدیل به تمام وقت درمانی", "reEntryDate": ""}, {"id": 64, "radif": "64", "firstName": "زینب", "lastName": "فرسنگی", "specialty": "پزشکی هسته ای", "city": "سنندج", "nationalCode": "3701771995", "medicalCode": "153134", "startDate": "1405/02/07", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 65, "radif": "65", "firstName": "مهدی", "lastName": "زند", "specialty": "فلوشیپ اینترونشن قلب", "city": "سنندج", "nationalCode": "3801683125", "medicalCode": "138111", "startDate": "1405/06/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 66, "radif": "66", "firstName": "احمد رضا", "lastName": "الهي واحد", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "2181108153", "medicalCode": "47521", "startDate": "1394/8/19", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 67, "radif": "67", "firstName": "سارا", "lastName": "محمدزاده خواجوی", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "3732910865", "medicalCode": "139348", "startDate": "1397/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 68, "radif": "68", "firstName": "زیبا", "lastName": "خدایاری", "specialty": "زنان وزایمان", "city": "دیواندره- سنندج", "nationalCode": "3781972445", "medicalCode": "117455", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ 1401/07/06 مشترکا\" با مراکز سنندج", "reEntryDate": ""}, {"id": 69, "radif": "69", "firstName": "ئازاده", "lastName": "فتحی", "specialty": "بیهوشی", "city": "دیواندره-سنندج", "nationalCode": "3733090713", "medicalCode": "134896", "startDate": "1398/09/01", "exitDate": "", "remarks": "از تاریخ 99/4/1درسنندج مشترکا\" با دیواندره", "reEntryDate": ""}, {"id": 70, "radif": "70", "firstName": "محمد علي", "lastName": "اژدري", "specialty": "روانپزشکی", "city": "ديواندره‌", "nationalCode": "2062864000", "medicalCode": "57023", "startDate": "1400/10/01", "exitDate": "", "remarks": "ازتاریخ1402/10/01 غایب", "reEntryDate": ""}, {"id": 71, "radif": "71", "firstName": "سميه", "lastName": "فتاحيان", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "3750072566", "medicalCode": "151809", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 72, "radif": "72", "firstName": "موسي", "lastName": "لطفي وند", "specialty": "روانپزشکی", "city": "دیواندره", "nationalCode": "1377248046", "medicalCode": "75005", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 73, "radif": "73", "firstName": "اوین", "lastName": "جویا", "specialty": "بیماریهای مغز واعصاب", "city": "دیواندره", "nationalCode": "3750193614", "medicalCode": "163330", "startDate": "1404/01/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 74, "radif": "74", "firstName": "مرتضی", "lastName": "علیزاده فروتن", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "2200497229", "medicalCode": "113780", "startDate": "1404/01/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 75, "radif": "75", "firstName": "شاهین", "lastName": "صارمی", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "1540200167", "medicalCode": "167470", "startDate": "1403/07/04", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 76, "radif": "76", "firstName": "غزل", "lastName": "جلالی", "specialty": "قلب و عروق", "city": "دیواندره-سنندج", "nationalCode": "3240361051", "medicalCode": "164902", "startDate": "1404/09/01", "exitDate": "", "remarks": "مشترک با مراکز سنندج ودیواندره", "reEntryDate": ""}, {"id": 77, "radif": "77", "firstName": "افسانه", "lastName": "رحمه", "specialty": "زنان وزایمان", "city": "دیواندره", "nationalCode": "2920187770", "medicalCode": "184969", "startDate": "1404/08/27", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 78, "radif": "78", "firstName": "مریم", "lastName": "مرادپور", "specialty": "کودکان", "city": "دیواندره", "nationalCode": "0013376624", "medicalCode": "170274", "startDate": "1404/08/01", "exitDate": "1405/07/30", "remarks": "انتقال به دانشگاه تهران", "reEntryDate": ""}, {"id": 79, "radif": "79", "firstName": "حانیه", "lastName": "مالمیر", "specialty": "کودکان", "city": "دیواندره", "nationalCode": "0018961061", "medicalCode": "180719", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 80, "radif": "80", "firstName": "فاطمه", "lastName": "کریمخانی چیانه", "specialty": "بیهوشی", "city": "دیواندره", "nationalCode": "2909681122", "medicalCode": "113850", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 81, "radif": "81", "firstName": "محمد", "lastName": "فرهادی مسترخانی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "دیواندره- بیجار", "nationalCode": "3240523027", "medicalCode": "159093", "startDate": "1404/09/01", "exitDate": "", "remarks": "ارتاریخ 1404/10/01 مشترکا\" با مرکز دیواندره", "reEntryDate": ""}, {"id": 82, "radif": "82", "firstName": "سعید", "lastName": "چوپانی", "specialty": "کودکان", "city": "دیواندره-سقز", "nationalCode": "2920245694", "medicalCode": "199529", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 83, "radif": "83", "firstName": "زانیار", "lastName": "رحمانی", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "3720401251", "medicalCode": "187712", "startDate": "1405/05/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 84, "radif": "84", "firstName": "ژاله", "lastName": "آسانی", "specialty": "رادیولوژی", "city": "دیواندره", "nationalCode": "3830148275", "medicalCode": "170962", "startDate": "1405/05/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 85, "radif": "85", "firstName": "سالار", "lastName": "باغبانی", "specialty": "ارتوپدی", "city": "دیواندره", "nationalCode": "3720365247", "medicalCode": "169554", "startDate": "1405/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 86, "radif": "86", "firstName": "دلیر", "lastName": "حمزه ئی", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3849828107", "medicalCode": "133130", "startDate": "1397/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 87, "radif": "87", "firstName": "چنور", "lastName": "لیموئی", "specialty": "زنان وزایمان", "city": "بانه", "nationalCode": "3762019703", "medicalCode": "125005", "startDate": "1398/7/1", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 88, "radif": "88", "firstName": "ویدا", "lastName": "علوی", "specialty": "داخلی", "city": "بانه", "nationalCode": "3781957081", "medicalCode": "109051", "startDate": "1400/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 89, "radif": "89", "firstName": "فرزاد", "lastName": "بیگلری", "specialty": "جراح عمومی", "city": "بانه-سنندج", "nationalCode": "4949786253", "medicalCode": "132625", "startDate": "1400/10/18", "exitDate": "", "remarks": "غائب", "reEntryDate": ""}, {"id": 90, "radif": "90", "firstName": "سیده یاسمن", "lastName": "حسینی", "specialty": "کودکان", "city": "بانه- سقز", "nationalCode": "3720115887", "medicalCode": "155815", "startDate": "1401/06/22", "exitDate": "", "remarks": "ازتاریخ 1402/02/01 مشترکا\" بامراکز سقز", "reEntryDate": ""}, {"id": 91, "radif": "91", "firstName": "ناصح", "lastName": "طاهربانه", "specialty": "بیهوشی", "city": "بانه", "nationalCode": "3849685683", "medicalCode": "108129", "startDate": "1402/10/06", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 92, "radif": "92", "firstName": "شهریار", "lastName": "شجیعی", "specialty": "بیهوشی", "city": "بانه", "nationalCode": "3721055713", "medicalCode": "61349", "startDate": "1402/11/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 93, "radif": "93", "firstName": "امید", "lastName": "قادری", "specialty": "فوق تخصص نفرولوژی کودکان", "city": "بانه-سقز", "nationalCode": "3849662705", "medicalCode": "71976", "startDate": "1403/05/01", "exitDate": "1405/05/05", "remarks": "تاسیس مطب", "reEntryDate": ""}, {"id": 94, "radif": "94", "firstName": "سميرا", "lastName": "جمشيدي", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3240117568", "medicalCode": "156328", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 95, "radif": "95", "firstName": "هاوری", "lastName": "مروتی", "specialty": "طب فیزیکی وتوانبخشی", "city": "بانه", "nationalCode": "3849822941", "medicalCode": "134137", "startDate": "1404/05/29", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 96, "radif": "96", "firstName": "فائزه السادات", "lastName": "هاشمی مفرد", "specialty": "زنان وزایمان", "city": "بانه", "nationalCode": "1271354489", "medicalCode": "171238", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 97, "radif": "97", "firstName": "پویا", "lastName": "حسنی شایان", "specialty": "کودکان", "city": "بانه", "nationalCode": "1382193882", "medicalCode": "144277", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 98, "radif": "98", "firstName": "ژیوار", "lastName": "رشیدپور", "specialty": "رادیولوژی", "city": "بانه", "nationalCode": "3762344124", "medicalCode": "147540", "startDate": "1405/02/08", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 99, "radif": "99", "firstName": "مهران", "lastName": "آخوندی", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3750199906", "medicalCode": "163371", "startDate": "1405/01/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 100, "radif": "100", "firstName": "محبوبه", "lastName": "بهروز گله کلایی", "specialty": "پاتولوژی", "city": "بانه", "nationalCode": "2080148001", "medicalCode": "158951", "startDate": "1405/02/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 101, "radif": "101", "firstName": "عیسی", "lastName": "خالدی", "specialty": "اورولوژی", "city": "بانه", "nationalCode": "3810005363", "medicalCode": "151491", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید", "reEntryDate": ""}, {"id": 102, "radif": "102", "firstName": "بهزاد", "lastName": "اسماعيلي ايوكي", "specialty": "بیهوشی", "city": "بيجار", "nationalCode": "2161584138", "medicalCode": "61683", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 103, "radif": "103", "firstName": "سیده معصومه", "lastName": "سبحانی", "specialty": "کودکان", "city": "بیجار", "nationalCode": "3782424344", "medicalCode": "133686", "startDate": "1398/10/1", "exitDate": "", "remarks": "از تاریخ 1402/01/01 غایب", "reEntryDate": ""}, {"id": 104, "radif": "104", "firstName": "نیلوفر", "lastName": "مرادی", "specialty": "داخلی", "city": "بیجار", "nationalCode": "0310886260", "medicalCode": "172495", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 105, "radif": "105", "firstName": "الهه", "lastName": "نوروز بیگی", "specialty": "داخلی", "city": "بیجار", "nationalCode": "1490292081", "medicalCode": "163583", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 106, "radif": "106", "firstName": "رويا", "lastName": "نعمتي", "specialty": "زنان وزایمان", "city": "بیجار", "nationalCode": "1520248891", "medicalCode": "187972", "startDate": "1403/09/24", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 107, "radif": "107", "firstName": "راضیه", "lastName": "صفری", "specialty": "روانپزشکی", "city": "بیجار", "nationalCode": "4360023189", "medicalCode": "151144", "startDate": "1404/03/27", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 108, "radif": "108", "firstName": "کورش", "lastName": "ارژنگ پور", "specialty": "بیهوشی", "city": "بیجار", "nationalCode": "2909808335", "medicalCode": "95289", "startDate": "1403/12/20", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 109, "radif": "109", "firstName": "سیده بهاره", "lastName": "موسوی افشار", "specialty": "زنان وزایمان", "city": "بیجار", "nationalCode": "1450172911", "medicalCode": "168143", "startDate": "1404/10/01", "exitDate": "1405/07/30", "remarks": "انتقال به دانشگاه اردبیل", "reEntryDate": ""}, {"id": 110, "radif": "110", "firstName": "نسا", "lastName": "مفاخری", "specialty": "کودکان", "city": "بیجار", "nationalCode": "3790349399", "medicalCode": "200161", "startDate": "1404/11/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 111, "radif": "111", "firstName": "امین", "lastName": "صادقی عدل", "specialty": "بیماریهای مغز واعصاب", "city": "بیجار", "nationalCode": "1360737464", "medicalCode": "168547", "startDate": "1404/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 112, "radif": "112", "firstName": "محمد", "lastName": "فرهادی مسترخانی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "بیجار-دیواندره", "nationalCode": "3240523027", "medicalCode": "159093", "startDate": "1404/09/01", "exitDate": "", "remarks": "ارتاریخ 1404/10/01 مشترکا\" با مرکز دیواندره", "reEntryDate": ""}, {"id": 113, "radif": "113", "firstName": "بابك", "lastName": "پرتوي", "specialty": "داخلی", "city": "كامياران‌-سنندج", "nationalCode": "3732435792", "medicalCode": "128360", "startDate": "1400/10/01", "exitDate": "", "remarks": "از تاریخ1405/03/01 غایب", "reEntryDate": ""}, {"id": 114, "radif": "114", "firstName": "عزیز", "lastName": "شریفی", "specialty": "روانپزشکی", "city": "کامیاران", "nationalCode": "3849902498", "medicalCode": "122968", "startDate": "1400/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 115, "radif": "115", "firstName": "سارا", "lastName": "باتمانی", "specialty": "پاتولوژی", "city": "کامیاران-سنندج", "nationalCode": "3830075537", "medicalCode": "158251", "startDate": "1402/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 116, "radif": "116", "firstName": "سارا", "lastName": "كاسب", "specialty": "بیهوشی", "city": "کامیاران", "nationalCode": "3732910989", "medicalCode": "142563", "startDate": "1400/10/01", "exitDate": "", "remarks": "غایب", "reEntryDate": ""}, {"id": 117, "radif": "117", "firstName": "لیلا", "lastName": "الفتی", "specialty": "قلب و عروق", "city": "کامیاران", "nationalCode": "3379851906", "medicalCode": "108969", "startDate": "1402/10/01", "exitDate": "", "remarks": "تا تاریخ 1405/04/01 مرخصی بدون حقوق", "reEntryDate": ""}, {"id": 118, "radif": "118", "firstName": "دریا", "lastName": "خسروی", "specialty": "پوست", "city": "کامیاران-سنندج", "nationalCode": "3733183312", "medicalCode": "151532", "startDate": "1402/12/20", "exitDate": "", "remarks": "غایب", "reEntryDate": ""}, {"id": 119, "radif": "119", "firstName": "مسعود", "lastName": "نادری", "specialty": "بیهوشی", "city": "کامیاران-مریوان", "nationalCode": "3230220455", "medicalCode": "89455", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 120, "radif": "120", "firstName": "مارال", "lastName": "روزبهانی", "specialty": "زنان وزایمان", "city": "کامیاران", "nationalCode": "4120176894", "medicalCode": "164217", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 121, "radif": "121", "firstName": "آزاد", "lastName": "عبدی", "specialty": "داخلی", "city": "کامیاران", "nationalCode": "3840032946", "medicalCode": "154000", "startDate": "1404/08/11", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 122, "radif": "122", "firstName": "میثاق", "lastName": "رستمی", "specialty": "بیهوشی", "city": "کامیاران", "nationalCode": "0078578752", "medicalCode": "158503", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 123, "radif": "123", "firstName": "رامین", "lastName": "کرمی", "specialty": "جراح عمومی", "city": "کامیاران", "nationalCode": "3241063089", "medicalCode": "173466", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 124, "radif": "124", "firstName": "تلمان", "lastName": "سینا", "specialty": "کودکان", "city": "کامیاران", "nationalCode": "2753759189", "medicalCode": "117707", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 125, "radif": "125", "firstName": "پریا", "lastName": "صولتی", "specialty": "زنان وزایمان", "city": "کامیاران", "nationalCode": "1381749100", "medicalCode": "142607", "startDate": "1404/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 126, "radif": "126", "firstName": "کیانا", "lastName": "کوتی", "specialty": "روانپزشکی", "city": "کامیاران", "nationalCode": "3240477221", "medicalCode": "165821", "startDate": "1405/05/19", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 127, "radif": "127", "firstName": "حجت", "lastName": "بهرام آبادی", "specialty": "جراح عمومی", "city": "کامیاران", "nationalCode": "3253302768", "medicalCode": "83030", "startDate": "1404/08/01", "exitDate": "", "remarks": "ازتاریخ 1405/08/01 انتقال از سقز به مرکز کامیاران", "reEntryDate": ""}, {"id": 128, "radif": "128", "firstName": "آرش", "lastName": "رشیدی", "specialty": "ارتوپدی", "city": "کامیاران", "nationalCode": "3840001943", "medicalCode": "149207", "startDate": "1405/07/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 129, "radif": "129", "firstName": "نشمیل", "lastName": "اندیشه", "specialty": "داخلی", "city": "کامیاران", "nationalCode": "3760225217", "medicalCode": "128361", "startDate": "1405/07/01", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی", "reEntryDate": ""}, {"id": 130, "radif": "130", "firstName": "محمد فايق", "lastName": "يوسفي", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "3732325652", "medicalCode": "63565", "startDate": "1393/7/1", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 131, "radif": "131", "firstName": "ماجد", "lastName": "مشهوري", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "3761940149", "medicalCode": "49502", "startDate": "1394/8/19", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 132, "radif": "132", "firstName": "زهرا", "lastName": "محمدی", "specialty": "بیهوشی", "city": "سقر", "nationalCode": "0054802180", "medicalCode": "113976", "startDate": "1397/10/1", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سنندج طبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی", "reEntryDate": ""}, {"id": 133, "radif": "133", "firstName": "فواد", "lastName": "فتحی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3762064903", "medicalCode": "135069", "startDate": "1401/04/01", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سقزطبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی", "reEntryDate": ""}, {"id": 134, "radif": "134", "firstName": "سیده یاسمن", "lastName": "حسینی", "specialty": "کودکان", "city": "سقز-بانه", "nationalCode": "3720115887", "medicalCode": "155815", "startDate": "1401/06/22", "exitDate": "", "remarks": "ازتاریخ 1402/02/01 مشترکا\" بامراکز سقز", "reEntryDate": ""}, {"id": 135, "radif": "135", "firstName": "ئه وین", "lastName": "خورشیدی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3762010889", "medicalCode": "124002", "startDate": "1402/02/01", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سقزطبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی", "reEntryDate": ""}, {"id": 136, "radif": "136", "firstName": "بیان", "lastName": "محمودی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3850001407", "medicalCode": "146643", "startDate": "1401/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 137, "radif": "137", "firstName": "مصطفی", "lastName": "دارابی", "specialty": "چشم", "city": "سقز", "nationalCode": "5819975472", "medicalCode": "141604", "startDate": "1402/12/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 138, "radif": "138", "firstName": "امید", "lastName": "قادری", "specialty": "فوق تخصص نفرولوژی کودکان", "city": "سقز-بانه", "nationalCode": "3849662705", "medicalCode": "71976", "startDate": "1403/05/01", "exitDate": "1405/05/05", "remarks": "تاسیس مطب", "reEntryDate": ""}, {"id": 139, "radif": "139", "firstName": "علیرضا", "lastName": "قبادی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3961909385", "medicalCode": "129223", "startDate": "1403/02/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 140, "radif": "140", "firstName": "فرید", "lastName": "عبدی", "specialty": "ارتوپدی", "city": "سقز-سنندج", "nationalCode": "3720272559", "medicalCode": "163944", "startDate": "1403/07/01", "exitDate": "", "remarks": "ازتاریخ 1404/08/01 فعالیت مشترک مراکز سقز وسنندج", "reEntryDate": ""}, {"id": 141, "radif": "141", "firstName": "رویا", "lastName": "محمدی", "specialty": "روانپزشکی", "city": "سقز", "nationalCode": "3762349886", "medicalCode": "149221", "startDate": "1403/07/07", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 142, "radif": "142", "firstName": "پريناز", "lastName": "پرتوي", "specialty": "داخلی", "city": "سقز", "nationalCode": "0011569573", "medicalCode": "151575", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 143, "radif": "143", "firstName": "مازيار", "lastName": "بني بشر", "specialty": "جراح عمومی", "city": "سقز", "nationalCode": "3732985806", "medicalCode": "144564", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 144, "radif": "144", "firstName": "عماد", "lastName": "فخروئیان", "specialty": "بیماریهای مغز واعصاب", "city": "سقز", "nationalCode": "1375665774", "medicalCode": "35431", "startDate": "1404/05/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 145, "radif": "145", "firstName": "محمد ظهیر", "lastName": "شفیعی", "specialty": "رادیولوژی", "city": "سقز", "nationalCode": "3720444570", "medicalCode": "180930", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 146, "radif": "146", "firstName": "حجت", "lastName": "بهرام آبادی", "specialty": "جراح عمومی", "city": "سقز", "nationalCode": "3253302768", "medicalCode": "83030", "startDate": "1404/08/01", "exitDate": "", "remarks": "ازتاریخ 1405/08/01 انتقال به مرکز کامیاران", "reEntryDate": ""}, {"id": 147, "radif": "147", "firstName": "عاطفه", "lastName": "خیراله یان", "specialty": "قلب و عروق", "city": "سقز", "nationalCode": "2960331621", "medicalCode": "196388", "startDate": "1404/08/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 148, "radif": "148", "firstName": "شب ناز", "lastName": "نوایی فر", "specialty": "کودکان", "city": "سقز", "nationalCode": "3258273014", "medicalCode": "161284", "startDate": "1404/08/24", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 149, "radif": "149", "firstName": "سعید", "lastName": "چوپانی", "specialty": "کودکان", "city": "سقز-دیواندره", "nationalCode": "2920245694", "medicalCode": "199529", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 150, "radif": "150", "firstName": "سارا", "lastName": "شاه ویسی", "specialty": "پاتولوژی", "city": "سقز", "nationalCode": "3733032365", "medicalCode": "147291", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 151, "radif": "151", "firstName": "ترانه", "lastName": "ضیایی ضیاالدینی", "specialty": "رادیوانکولوژی", "city": "سقز", "nationalCode": "2080015540", "medicalCode": "149683", "startDate": "1404/09/08", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 152, "radif": "152", "firstName": "سحر", "lastName": "باقری چیمه", "specialty": "زنان وزایمان", "city": "سقز", "nationalCode": "0012738018", "medicalCode": "167539", "startDate": "1404/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 153, "radif": "153", "firstName": "فرخ", "lastName": "ایرجی", "specialty": "بیماریهای مغز واعصاب", "city": "سقز", "nationalCode": "2802641451", "medicalCode": "83735", "startDate": "1404/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 154, "radif": "154", "firstName": "آرمین", "lastName": "شهلایی", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "12384674", "medicalCode": "169641", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 155, "radif": "155", "firstName": "پریسا", "lastName": "رنجبر", "specialty": "زنان وزایمان", "city": "سقز-سروآباد", "nationalCode": "3750257299", "medicalCode": "178918", "startDate": "1404/08/11", "exitDate": "", "remarks": "از تاریخ1405/03/15 مشترک با مراکز سقز", "reEntryDate": ""}, {"id": 156, "radif": "156", "firstName": "حسین", "lastName": "منصوری", "specialty": "فوق تخصص نوزادان", "city": "سقز", "nationalCode": "1550814168", "medicalCode": "90488", "startDate": "1405/03/28", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 157, "radif": "157", "firstName": "ثریا", "lastName": "رشیدزاده", "specialty": "زنان وزایمان", "city": "سقز", "nationalCode": "3762117098", "medicalCode": "132793", "startDate": "1405/01/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 158, "radif": "158", "firstName": "نسرین", "lastName": "حیدری", "specialty": "فوق تخصص نوزادان", "city": "سقز", "nationalCode": "3820080112", "medicalCode": "112289", "startDate": "1405/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 159, "radif": "159", "firstName": "هیوا", "lastName": "شادمانی", "specialty": "طب فیزیکی وتوانبخشی", "city": "سقز", "nationalCode": "3750031355", "medicalCode": "155020", "startDate": "1405/07/19", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 160, "radif": "160", "firstName": "فواد", "lastName": "یزدانی", "specialty": "پوست", "city": "سقز", "nationalCode": "3760211453", "medicalCode": "114364", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید", "reEntryDate": ""}, {"id": 161, "radif": "161", "firstName": "سبحان", "lastName": "حسن زاده", "specialty": "بیماریهای مغز واعصاب", "city": "مریوان", "nationalCode": "3230683234", "medicalCode": "78307", "startDate": "1394/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 162, "radif": "162", "firstName": "فرهاد", "lastName": "سوري", "specialty": "عفونی", "city": "مريوان", "nationalCode": "3251779451", "medicalCode": "59300", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 163, "radif": "163", "firstName": "پرويز", "lastName": "شبرندي", "specialty": "بیهوشی", "city": "مريوان", "nationalCode": "3230641787", "medicalCode": "61523", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 164, "radif": "164", "firstName": "اکبر", "lastName": "سنگری", "specialty": "ارتوپدی", "city": "مریوان-سنندج", "nationalCode": "3732596362", "medicalCode": "135705", "startDate": "1395/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 165, "radif": "165", "firstName": "شرمین", "lastName": "صدیقی", "specialty": "قلب و عروق", "city": "مریوان", "nationalCode": "6469964729", "medicalCode": "132794", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ1401/10/06 غایب می باشد.", "reEntryDate": ""}, {"id": 166, "radif": "166", "firstName": "سيد مسعود", "lastName": "موسوي جم", "specialty": "بیهوشی", "city": "مریوان - سنندج", "nationalCode": "3801199398", "medicalCode": "75970", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ1400/10/1 مشترکا\" با مراکز سنندج فعالیت دارند", "reEntryDate": ""}, {"id": 167, "radif": "167", "firstName": "صدیق", "lastName": "رستمیان", "specialty": "كودكان", "city": "مریوان", "nationalCode": "3230646045", "medicalCode": "51221", "startDate": "1399/10/1", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 168, "radif": "168", "firstName": "زاهد", "lastName": "مقصودی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "3733224191", "medicalCode": "147700", "startDate": "1401/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 169, "radif": "169", "firstName": "شیوا", "lastName": "امینی", "specialty": "روانپزشکی", "city": "مریوان", "nationalCode": "1740125177", "medicalCode": "154981", "startDate": "1401/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 170, "radif": "170", "firstName": "آرمان", "lastName": "حبیبی", "specialty": "بیماریهای مغز واعصاب", "city": "مریوان-سنندج", "nationalCode": "3811792842", "medicalCode": "140879", "startDate": "1401/10/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 171, "radif": "171", "firstName": "خالد", "lastName": "مینویی", "specialty": "داخلی", "city": "مریوان", "nationalCode": "3820028412", "medicalCode": "76309", "startDate": "1401/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 172, "radif": "172", "firstName": "مسعود", "lastName": "نادری", "specialty": "بیهوشی", "city": "مریوان-کامیاران", "nationalCode": "3230220455", "medicalCode": "89455", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 173, "radif": "173", "firstName": "نیکا", "lastName": "شاه جمالی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "0015001237", "medicalCode": "173634", "startDate": "1403/12/01", "exitDate": "", "remarks": "غائب", "reEntryDate": ""}, {"id": 174, "radif": "174", "firstName": "لایق", "lastName": "احمدی", "specialty": "پاتولوژی", "city": "مریوان", "nationalCode": "3230805658", "medicalCode": "112605", "startDate": "1403/07/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 175, "radif": "175", "firstName": "سرور", "lastName": "خاطری", "specialty": "طب فیزیکی وتوانبخشی", "city": "مریوان-سنندج", "nationalCode": "3830123353", "medicalCode": "170481", "startDate": "1404/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 176, "radif": "176", "firstName": "مسعود", "lastName": "ملکی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "4160204023", "medicalCode": "1650023", "startDate": "1404/08/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 177, "radif": "177", "firstName": "عادل", "lastName": "سجادی", "specialty": "ارتوپدی", "city": "مریوان- سروآباد", "nationalCode": "6460020620", "medicalCode": "164298", "startDate": "1404/07/13", "exitDate": "", "remarks": "ازتاریخ 1404/09/01 مشترک با مراکزمریوان وسروآباد", "reEntryDate": ""}, {"id": 178, "radif": "178", "firstName": "مهستی", "lastName": "قسمتی", "specialty": "زنان وزایمان", "city": "مریوان-سروآباد", "nationalCode": "1360081631", "medicalCode": "172027", "startDate": "1404/08/15", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 179, "radif": "179", "firstName": "نگار", "lastName": "ویسی", "specialty": "رادیولوژی", "city": "مریوان", "nationalCode": "3830163657", "medicalCode": "170975", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 180, "radif": "180", "firstName": "نیما", "lastName": "فتح الله زاده", "specialty": "ارتوپدی", "city": "مریوان-سروآباد", "nationalCode": "3750078440", "medicalCode": "160709", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 181, "radif": "181", "firstName": "نگار", "lastName": "قره پاشا", "specialty": "داخلی", "city": "مریوان", "nationalCode": "1360337792", "medicalCode": "159970", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 182, "radif": "182", "firstName": "الهام", "lastName": "فتحی", "specialty": "کودکان", "city": "مریوان", "nationalCode": "3720500853", "medicalCode": "179282", "startDate": "1402/08/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 183, "radif": "183", "firstName": "فاطمه", "lastName": "اسدي كوه پاد", "specialty": "زنان وزایمان", "city": "مریوان", "nationalCode": "1830222589", "medicalCode": "171450", "startDate": "1403/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 184, "radif": "184", "firstName": "ابوبکر", "lastName": "افراره", "specialty": "اورولوژی", "city": "مریوان", "nationalCode": "3821338113", "medicalCode": "138258", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید", "reEntryDate": ""}, {"id": 185, "radif": "185", "firstName": "مهدی", "lastName": "بهرامی", "specialty": "داخلی", "city": "مریوان", "nationalCode": "3820671706", "medicalCode": "104197", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید", "reEntryDate": ""}, {"id": 186, "radif": "186", "firstName": "کاوه", "lastName": "میرمظفری", "specialty": "بیهوشی", "city": "سروآباد", "nationalCode": "2721530877", "medicalCode": "86627", "startDate": "1396/9/29", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 187, "radif": "187", "firstName": "علی", "lastName": "بهشتی", "specialty": "داخلی", "city": "سروآباد", "nationalCode": "1262011781", "medicalCode": "121289", "startDate": "1401/10/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 188, "radif": "188", "firstName": "عادل", "lastName": "سجادی", "specialty": "ارتوپدی", "city": "سروآباد-مریوان", "nationalCode": "6460020620", "medicalCode": "164298", "startDate": "1404/07/13", "exitDate": "", "remarks": "ازتاریخ 1404/09/01 مشترک با مراکزمریوان وسروآباد", "reEntryDate": ""}, {"id": 189, "radif": "189", "firstName": "نیما", "lastName": "فتح الله زاده", "specialty": "ارتوپدی", "city": "سروآباد-مریوان", "nationalCode": "3750078440", "medicalCode": "160709", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 190, "radif": "190", "firstName": "پریسا", "lastName": "رنجبر", "specialty": "زنان وزایمان", "city": "سروآباد-سقز", "nationalCode": "3750257299", "medicalCode": "178918", "startDate": "1404/08/11", "exitDate": "", "remarks": "از تاریخ1405/03/15 مشترک با مراکز سقز", "reEntryDate": ""}, {"id": 191, "radif": "191", "firstName": "مهشید", "lastName": "ملکیان", "specialty": "داخلی", "city": "سروآباد", "nationalCode": "1190008513", "medicalCode": "154796", "startDate": "1404/08/17", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 192, "radif": "192", "firstName": "توحید", "lastName": "عبادی", "specialty": "کودکان", "city": "سروآباد", "nationalCode": "4939926966", "medicalCode": "202718", "startDate": "1404/09/01", "exitDate": "1405/07/30", "remarks": "اتمام تعهدات", "reEntryDate": ""}, {"id": 193, "radif": "193", "firstName": "ویدا", "lastName": "دهقان", "specialty": "رادیولوژی", "city": "سروآباد", "nationalCode": "3810155322", "medicalCode": "163542", "startDate": "1405/04/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 194, "radif": "194", "firstName": "اقبال", "lastName": "نوازكزي", "specialty": "گوش وحلق وبيني", "city": "قروه", "nationalCode": "خارجي", "medicalCode": "8987", "startDate": "1393/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 195, "radif": "195", "firstName": "مجيد", "lastName": "مومني", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3874613585", "medicalCode": "72148", "startDate": "1393/07/01", "exitDate": "", "remarks": "از تاریخ 1401/07/01 غایب می باشند.", "reEntryDate": ""}, {"id": 196, "radif": "196", "firstName": "صبا", "lastName": "کاوه مجد", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3801285030", "medicalCode": "135179", "startDate": "1397/10/01", "exitDate": "", "remarks": "ازتاریخ1400/06/01 غایب می باشند", "reEntryDate": ""}, {"id": 197, "radif": "197", "firstName": "محمد مهدی", "lastName": "افتخاریان", "specialty": "رادیولوژی", "city": "قروه", "nationalCode": "3875442881", "medicalCode": "130268", "startDate": "1400/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 198, "radif": "198", "firstName": "فریبا", "lastName": "محمد جانی", "specialty": "پاتولوژی", "city": "قروه", "nationalCode": "2949529305", "medicalCode": "131221", "startDate": "1401/10/01", "exitDate": "", "remarks": "ازتاریخ 1402/06/01 غایب", "reEntryDate": ""}, {"id": 199, "radif": "199", "firstName": "علی", "lastName": "مرتضی زاده", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "0044555393", "medicalCode": "56090", "startDate": "1402/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 200, "radif": "200", "firstName": "مائده", "lastName": "یاوری", "specialty": "کودکان", "city": "قروه", "nationalCode": "3240839067", "medicalCode": "164219", "startDate": "1403/02/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 201, "radif": "201", "firstName": "نوید", "lastName": "شیروانی", "specialty": "داخلی", "city": "قروه", "nationalCode": "3801798951", "medicalCode": "148292", "startDate": "1403/07/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 202, "radif": "202", "firstName": "سیده مائده", "lastName": "حسینی", "specialty": "پاتولوژی", "city": "قروه", "nationalCode": "3801794148", "medicalCode": "152055", "startDate": "1402/07/03", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 203, "radif": "203", "firstName": "شکوفه", "lastName": "حیدری فرح", "specialty": "زنان وزایمان", "city": "قروه-دهگلان", "nationalCode": "3860106368", "medicalCode": "166193", "startDate": "1404/08/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 204, "radif": "204", "firstName": "افرا", "lastName": "محمدی", "specialty": "رادیولوژی", "city": "قروه", "nationalCode": "3720526331", "medicalCode": "194871", "startDate": "1404/08/10", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 205, "radif": "205", "firstName": "مائده", "lastName": "اصحابی", "specialty": "روانپزشکی", "city": "قروه", "nationalCode": "3790302600", "medicalCode": "195460", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 206, "radif": "206", "firstName": "الهام", "lastName": "صالح", "specialty": "کودکان", "city": "قروه", "nationalCode": "3810300985", "medicalCode": "178703", "startDate": "1404/09/10", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 207, "radif": "207", "firstName": "ایمان", "lastName": "رضانیا", "specialty": "قلب و عروق", "city": "قروه", "nationalCode": "", "medicalCode": "186545", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 208, "radif": "208", "firstName": "حمیده", "lastName": "تاج نسائی", "specialty": "بیماریهای مغز واعصاب", "city": "قروه", "nationalCode": "3782448928", "medicalCode": "150269", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 209, "radif": "209", "firstName": "بشیر", "lastName": "فرح پور", "specialty": "چشم", "city": "قروه", "nationalCode": "3800561824", "medicalCode": "161505", "startDate": "1405/03/16", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 210, "radif": "210", "firstName": "امیرحسین", "lastName": "فریدونیان", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3801773736", "medicalCode": "137437", "startDate": "1405/05/28", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 211, "radif": "211", "firstName": "میلاد", "lastName": "سعادت", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "قروه-سنندج", "nationalCode": "3750312702", "medicalCode": "192465", "startDate": "1405/03/16", "exitDate": "", "remarks": "ازتاریخ1405/07/01 مشترکا\" مراکز سنندج ومرکز قروه", "reEntryDate": ""}, {"id": 212, "radif": "212", "firstName": "محمد", "lastName": "مرادی", "specialty": "روانپزشکی", "city": "دهگلان-سنندج", "nationalCode": "3732330664", "medicalCode": "88044", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ 1404/01/01مشترک با مراکز سنندج", "reEntryDate": ""}, {"id": 213, "radif": "213", "firstName": "سبا", "lastName": "قادرخانی", "specialty": "پاتولوژی", "city": "دهگلان- سنندج", "nationalCode": "3732935353", "medicalCode": "147004", "startDate": "1399/09/02", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 214, "radif": "214", "firstName": "ابوالفضل", "lastName": "خدامرادی فیروز", "specialty": "کودکان", "city": "دهگلان", "nationalCode": "0043984827", "medicalCode": "85392", "startDate": "1398/07/30", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 215, "radif": "215", "firstName": "شکوفه", "lastName": "حیدری فرح", "specialty": "زنان وزایمان", "city": "دهگلان- قروه", "nationalCode": "3860106368", "medicalCode": "166193", "startDate": "1404/08/14", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 216, "radif": "216", "firstName": "بشری", "lastName": "رحمانی", "specialty": "داخلی", "city": "دهگلان", "nationalCode": "5960003821", "medicalCode": "163491", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}, {"id": 217, "radif": "217", "firstName": "سپیده", "lastName": "آذری اسکویی", "specialty": "داخلی", "city": "دهگلان", "nationalCode": "1700047876", "medicalCode": "165177", "startDate": "1404/09/01", "exitDate": "", "remarks": "", "reEntryDate": ""}];
const INITIAL_USERS = [{"id": 1, "username": "admin", "password": "32332555", "fullName": "مدیر ارشد سامانه (معاونت درمان)", "role": "admin", "city": "همه", "createdAt": "1405/08/07"}, {"id": 2, "username": "readonly", "password": "143625", "fullName": "کاربر عمومی نظارت (فقط خواندنی)", "role": "readonly", "city": "همه", "createdAt": "1405/08/07"}, {"id": 3, "username": "user_sanandaj", "password": "123456", "fullName": "کاربر شهرستان سنندج", "role": "city_user", "city": "سنندج", "createdAt": "1405/08/07"}, {"id": 4, "username": "user_saqqez", "password": "123456", "fullName": "کاربر شهرستان سقز", "role": "city_user", "city": "سقز", "createdAt": "1405/08/07"}, {"id": 5, "username": "user_marivan", "password": "123456", "fullName": "کاربر شهرستان مریوان", "role": "city_user", "city": "مریوان", "createdAt": "1405/08/07"}, {"id": 6, "username": "user_baneh", "password": "123456", "fullName": "کاربر شهرستان بانه", "role": "city_user", "city": "بانه", "createdAt": "1405/08/07"}, {"id": 7, "username": "user_qorveh", "password": "123456", "fullName": "کاربر شهرستان قروه", "role": "city_user", "city": "قروه", "createdAt": "1405/08/07"}, {"id": 8, "username": "user_kamyaran", "password": "123456", "fullName": "کاربر شهرستان کامیاران", "role": "city_user", "city": "کامیاران", "createdAt": "1405/08/07"}, {"id": 9, "username": "user_bijar", "password": "123456", "fullName": "کاربر شهرستان بیجار", "role": "city_user", "city": "بیجار", "createdAt": "1405/08/07"}, {"id": 10, "username": "user_divandarreh", "password": "123456", "fullName": "کاربر شهرستان دیواندره", "role": "city_user", "city": "دیواندره", "createdAt": "1405/08/07"}, {"id": 11, "username": "user_dehgolan", "password": "123456", "fullName": "کاربر شهرستان دهگلان", "role": "city_user", "city": "دهگلان", "createdAt": "1405/08/07"}, {"id": 12, "username": "user_sarvabad", "password": "123456", "fullName": "کاربر شهرستان سروآباد", "role": "city_user", "city": "سروآباد", "createdAt": "1405/08/07"}, {"id": 13, "username": "user_setad", "password": "123456", "fullName": "کاربر ستاد معاونت درمان", "role": "city_user", "city": "ستاد معاونت درمان", "createdAt": "1405/08/07"}];

/* ============================ کلیدهای ذخیره‌سازی ============================ */
const LS_KEYS = {
    geo: 'muk_geo_data_v2',
    treat: 'muk_treat_data_v2',
    users: 'muk_users_data_v2',
    logs: 'muk_audit_logs_v2',
    deleted: 'muk_deleted_data_v2',
    archivedExited: 'muk_archived_exited_v2'   /* پزشکان خارج‌شده که پس از ۳۰ روز خودکار بایگانی شدند */
};
const SS_AUTH = 'muk_auth_user_v2';

/* ============================ وضعیت برنامه ============================ */
let currentTab = 'geographic';        // geographic | treatment | stats | users | audit
let geographicData = [];
let treatmentData = [];
let usersData = [];
let auditLogsData = [];
let deletedData = [];                 // پزشکان حذف‌شده از سامانه (تاریخ، کاربر حذف‌کننده و مشخصات)
let archivedExitedData = [];         // پزشکان خارج‌شده که پس از ۱ ماه خودکار از لیست اصلی به بایگانی منتقل شدند
let currentUser = null;               // { id, username, fullName, role, city }
let filteredList = [];
let currentPage = 1;
let pageSize = '15';
let parsedExcelData = [];
let sheetState = null;   /* وضعیت فایل اکسل انتخاب‌شده و نگاشت ستون‌ها */
let nameRepairReport = { filled: 0, unresolved: 0 };   /* گزارش آخرین بازیابی نام‌ها */
let charts = {};

/* ============================ محاسبات تقویم و بازه ۱ ماهه ============================ */

/** تبدیل ارقام فارسی/عربی به لاتین در رشته */
function toLatinDigits(str) {
    return String(str === undefined || str === null ? '' : str)
        .replace(/[۰-۹]/g, function (d) { return String(d.charCodeAt(0) - 1776); })
        .replace(/[٠-٩]/g, function (d) { return String(d.charCodeAt(0) - 1632); });
}

/** تجزیه تاریخ شمسی به شیء { year, month, day } */
function parseJalali(str) {
    if (!str) return null;
    var clean = toLatinDigits(str).trim();
    var parts = clean.split(/[/-]/).map(function (p) { return parseInt(p, 10); }).filter(function (n) { return !isNaN(n); });
    if (parts.length < 3) return null;
    var y = parts[0], m = parts[1], d = parts[2];
    if (y < 100) y += 1300;   /* دو رقمی به چهار رقمی */
    if (m < 1 || m > 12 || d < 1 || d > 31) return null;
    return { year: y, month: m, day: d };
}

/**
 * تبدیل تاریخ شمسی به تعداد روز تقریبی از مبدأ (برای محاسبه اختلاف روز).
 * نیمه اول سال ۳۱ روز، نیمه دوم ۳۰ روز، اسفند ۲۹ روز.
 */
function jalaliToAbsoluteDays(j) {
    if (!j) return 0;
    var y = j.year - 1;
    /* سال‌های کبیسه تقریبی */
    var leapDays = Math.floor((y * 682 - 110) / 2816);
    var days = y * 365 + leapDays;
    if (j.month <= 6) {
        days += (j.month - 1) * 31;
    } else {
        days += 6 * 31 + (j.month - 7) * 30;
    }
    days += j.day;
    return days;
}

/** محاسبه اختلاف روز بین دو تاریخ شمسی (b - a) */
function jalaliDaysBetween(aStr, bStr) {
    var ja = parseJalali(aStr);
    var jb = parseJalali(bStr);
    if (!ja || !jb) return null;
    return jalaliToAbsoluteDays(jb) - jalaliToAbsoluteDays(ja);
}

/** تعداد روز گذشته از یک تاریخ شمسی تا امروز */
function daysSinceJalali(dateStr) {
    if (!dateStr) return null;
    return jalaliDaysBetween(dateStr, todayJalali());
}

/** آیا این تاریخ در بازه ۱ ماه اخیر (۳۰ روز گذشته) قرار دارد؟ */
function isWithinRecentMonth(dateStr) {
    var diff = daysSinceJalali(dateStr);
    return diff !== null && diff >= 0 && diff <= 30;
}

/**
 * آیا وضعیت رکورد دارای «تغییر جدید» (در بازه ۱ ماه اخیر) است؟
 * مبنا: تاریخ ثبت آخرین تغییر وضعیت (_statusUpdatedAt) یا تاریخ خروج (exitDate) یا تاریخ ورود مجدد (reEntryDate)
 */
function isRecentStatusChange(doc) {
    if (!doc) return false;
    /* ۱) تاریخ مشخص تغییر وضعیت */
    if (doc._statusUpdatedAt && isWithinRecentMonth(doc._statusUpdatedAt)) return true;
    /* ۲) تاریخ خروج در ۳۰ روز اخیر */
    if (doc.exitDate && isWithinRecentMonth(doc.exitDate)) return true;
    /* ۳) تاریخ ورود مجدد در ۳۰ روز اخیر */
    if (doc.reEntryDate && isWithinRecentMonth(doc.reEntryDate)) return true;
    return false;
}

/**
 * آیا رکورد از تمام وقتی خارج شده است؟
 * هر رکوردی که تاریخ خروج داشته باشد یا وضعیت غیرشاغل باشد.
 */
function isExitedDoc(doc) {
    if (!doc) return false;
    if (String(doc.exitDate || '').trim() !== '') return true;
    if (isDoctorNonActive(doc)) return true;
    return false;
}

/**
 * بررسی اینکه آیا از تاریخ ثبت خروج بیش از ۳۰ روز (۱ ماه) گذشته است
 * و باید از لیست فعال به بایگانی منتقل شود.
 */
function isReadyForAutoArchive(doc) {
    if (!isExitedDoc(doc)) return false;
    /* طبق درخواست: «افرادی را که از تمام وقتی خارج می‌شوند را از تاریخ ثبت، بعد از مدت یک ماه از لیست پزشکان تمام وقت حذف کن»
       مبنای دقیق: تاریخ ثبت خروج در سامانه (_exitRegisteredAt یا _statusUpdatedAt) */
    var refDate = doc._exitRegisteredAt || doc._statusUpdatedAt;
    if (!refDate) return false;
    var diff = daysSinceJalali(refDate);
    return diff !== null && diff > 30;
}

/* ============================ ابزارهای کمکی ============================ */
function $(id) { return document.getElementById(id); }

/**
 * نام کامل رکورد (نام + نام خانوادگی)
 * اگر نام خانوادگی خالی باشد، متن موجود در فیلد نام نمایش داده می‌شود تا
 * هیچ اطلاعاتی از دید کاربر پنهان نماند.
 */
function nameOf(doc) {
    if (!doc) return '';
    var first = String(doc.firstName || '').trim();
    var last = String(doc.lastName || '').trim();
    if (first && last) return first + ' ' + last;
    if (first) return first;
    if (last) return last;
    return String(doc.fullName || doc.name || '').trim();
}

/** تفکیک نام کامل به نام و نام خانوادگی (ترمیم رکوردهای قدیمی) */
function splitFullName(full) {
    var parts = String(full || '').trim().split(/\s+/).filter(Boolean);
    if (parts.length <= 1) return { firstName: parts[0] || '', lastName: '' };
    return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

/**
 * بازیابی نام خانوادگی رکوردهایی که این فیلد در آن‌ها خالی است.
 * منبع بازیابی: داده مرجع داخلی سامانه (INITIAL_* که از فایل‌های رسمی اکسل ساخته شده)
 * تطبیق بر اساس کد ملی و در صورت نبود، شماره نظام پزشکی.
 * خروجی: { filled, unresolved }
 */
function repairMissingNames() {
    var report = { filled: 0, unresolved: 0 };

    var baseline = [];
    (INITIAL_GEOGRAPHIC || []).forEach(function (d) { baseline.push(d); });
    (INITIAL_TREATMENT || []).forEach(function (d) { baseline.push(d); });

    var byNational = {};
    var byMedical = {};
    baseline.forEach(function (d) {
        if (!d) return;
        var nc = String(d.nationalCode || '').replace(/[^0-9]/g, '');
        var mc = String(d.medicalCode || '').trim();
        if (nc && String(d.lastName || '').trim()) byNational[nc] = d;
        if (mc && mc !== '0' && String(d.lastName || '').trim()) byMedical[mc] = d;
    });

    var process = function (list) {
        if (!Array.isArray(list)) return;
        list.forEach(function (rec) {
            if (!rec) return;
            var first = String(rec.firstName || '').trim();
            var last = String(rec.lastName || '').trim();

            /* ۱) نام کامل در فیلد نام ذخیره شده است */
            if (!last && first.indexOf(' ') !== -1) {
                var parts = splitFullName(first);
                rec.firstName = parts.firstName;
                rec.lastName = parts.lastName;
                report.filled++;
                return;
            }

            if (last && first) return;   /* رکورد سالم */

            /* ۲) تطبیق با داده مرجع */
            var nc = String(rec.nationalCode || '').replace(/[^0-9]/g, '');
            var mc = String(rec.medicalCode || '').trim();
            var match = (nc && byNational[nc]) || (mc && mc !== '0' && byMedical[mc]) || null;

            if (match) {
                if (!first && match.firstName) { rec.firstName = match.firstName; report.filled++; }
                if (!last && match.lastName) { rec.lastName = match.lastName; report.filled++; }
                return;
            }

            report.unresolved++;
        });
    };

    process(geographicData);
    process(treatmentData);
    return report;
}

/**
 * ترمیم رکوردهایی که در نسخه‌های قبلی با نام کامل در فیلد «نام» ذخیره شده‌اند
 * (نام خانوادگی خالی بوده است). خروجی: تعداد رکوردهای ترمیم‌شده.
 */
function repairNames(list) {
    if (!Array.isArray(list)) return 0;
    var fixed = 0;
    list.forEach(function (d) {
        if (!d) return;
        var first = String(d.firstName || '').trim();
        var last = String(d.lastName || '').trim();
        if (!last && first.indexOf(' ') !== -1) {
            var parts = splitFullName(first);
            d.firstName = parts.firstName;
            d.lastName = parts.lastName;
            fixed++;
        }
    });
    return fixed;
}

function esc(v) {
    return String(v === undefined || v === null ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** نرمال‌سازی متن فارسی برای جستجو (ي/ك عربی، ارقام فارسی، فاصله‌های اضافی) */
function norm(v) {
    return String(v === undefined || v === null ? '' : v)
        .replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').replace(/[ۀة]/g, 'ه')
        .replace(/[\u06F0-\u06F9]/g, function (d) { return String(d.charCodeAt(0) - 0x06F0); })
        .replace(/[\u0660-\u0669]/g, function (d) { return String(d.charCodeAt(0) - 0x0660); })
        .replace(/\u200c/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

/** نمایش اعداد با ارقام فارسی */
function faNum(n) {
    try { return Number(n || 0).toLocaleString('fa-IR'); }
    catch (e) { return String(n || 0); }
}

/** تاریخ امروز به تقویم شمسی */
function todayJalali() {
    try {
        return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    } catch (e) {
        var d = new Date();
        return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    }
}

function showDateJalali() {
    try { return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date()); }
    catch (e) { return new Date().toLocaleString(); }
}

/** شهرهای یک رکورد (پشتیبانی از شهرستان مشترک مانند «سنندج-مریوان») */
function cityParts(v) {
    return String(v || '').split(/[-–,،/]/).map(function (s) { return s.trim(); }).filter(Boolean);
}

/** یکسان‌سازی نام شهرستان‌ها (اصلاح غلط‌های املایی رایج در داده مبدأ) */
const CITY_ALIASES = { 'سقر': 'سقز', 'سقز‌': 'سقز' };

/** فهرست استاندارد شهرستان‌های استان (برای منوهای انتخاب) */
const PROVINCE_CITIES = ['سنندج', 'سقز', 'مریوان', 'بانه', 'قروه', 'کامیاران', 'بیجار', 'دیواندره', 'دهگلان', 'سروآباد'];

/** همه شهرهای فعالیت یک پزشک (شهر اول + شهر دوم) به‌صورت یکتا */
function recordCities(doc) {
    if (!doc) return [];
    var out = [];
    [doc.city, doc.city2].forEach(function (v) {
        cityParts(v).forEach(function (c) {
            var cc = canonCity(c);
            if (cc && out.indexOf(cc) === -1) out.push(cc);
        });
    });
    return out;
}

function canonCity(v) {
    var n = norm(v);
    return CITY_ALIASES[n] || n;
}

/** شهرهای دیگرِ همان پزشک (به‌جز شهری که ردیف گزارش برای آن ساخته می‌شود) */
function partnerCitiesOf(doc, cityForRow) {
    var cur = canonCity(cityForRow || '');
    return recordCities(doc).filter(function (c) { return c !== cur; });
}

/** آیا پزشک غیرفعال است؟ (تاریخ خروج دارد یا در ملاحظات «غایب» ثبت شده) */
function isDoctorNonActive(doc) {
    var hasExit = !!(doc.exitDate && String(doc.exitDate).trim());
    var isAbsent = norm(doc.remarks || '').indexOf('غایب') !== -1 || norm(doc.description || '').indexOf('غایب') !== -1;
    return hasExit || isAbsent;
}

function isAbsentOnly(doc) {
    return norm(doc.remarks || '').indexOf('غایب') !== -1;
}

/** برچسب وضعیت */
function statusBadge(doc) {
    var hasExit = !!(doc.exitDate && String(doc.exitDate).trim());
    if (hasExit) {
        return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 font-mono">خروج: ' + esc(doc.exitDate) + '</span>';
    }
    if (isAbsentOnly(doc)) {
        return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300">غیر شاغل (غایب)</span>';
    }
    return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">شاغل فعال</span>';
}

function reEntryBadge(doc) {
    if (doc.reEntryDate && String(doc.reEntryDate).trim()) {
        return '<span class="font-mono text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">' + esc(doc.reEntryDate) + '</span>';
    }
    return '<span class="text-slate-300">-</span>';
}

function alertBox(opts) {
    if (typeof Swal === 'undefined') {
        if (opts && opts.showCancelButton) { if (window.confirm((opts.title || '') + '\n' + (opts.text || ''))) { opts.__ok && opts.__ok(); } return; }
        window.alert(((opts.title || '') + '\n' + (opts.text || '')).trim());
        return;
    }
    return Swal.fire(opts);
}

function isAdmin() { return !!currentUser && currentUser.role === 'admin'; }
function isCityUser() { return !!currentUser && currentUser.role === 'city_user' && currentUser.city && currentUser.city !== 'همه'; }
function canEdit() { return isAdmin(); }

/* ============================ بارگذاری و ذخیره داده ============================ */
function loadLocalData() {
    var savedGeo = null, savedTreat = null, savedUsers = null, savedLogs = null, savedDeleted = null;
    try {
        savedGeo = localStorage.getItem(LS_KEYS.geo);
        savedTreat = localStorage.getItem(LS_KEYS.treat);
        savedUsers = localStorage.getItem(LS_KEYS.users);
        savedLogs = localStorage.getItem(LS_KEYS.logs);
        savedDeleted = localStorage.getItem(LS_KEYS.deleted);
    } catch (e) { console.warn('localStorage unavailable', e); }

    var savedArchived = null;
    try { savedArchived = localStorage.getItem(LS_KEYS.archivedExited); } catch (e) {}

    geographicData = safeParse(savedGeo, INITIAL_GEOGRAPHIC);
    treatmentData = safeParse(savedTreat, INITIAL_TREATMENT);
    usersData = safeParse(savedUsers, INITIAL_USERS);
    deletedData = safeParse(savedDeleted, []);
    archivedExitedData = safeParse(savedArchived, []);
    auditLogsData = safeParse(savedLogs, [{
        id: 1,
        timestamp: todayJalali(),
        user: 'سیستم',
        role: 'system',
        action: 'راه‌اندازی / بارگذاری داده‌ها',
        details: 'بارگذاری ' + (INITIAL_GEOGRAPHIC.length + INITIAL_TREATMENT.length) + ' رکورد پزشکان دانشگاه علوم پزشکی کردستان'
    }]);

    /* پاک‌سازی رکوردهای ناقص کاربران (جلوگیری از خطای ورود) */
    if (Array.isArray(usersData)) {
        usersData = usersData.filter(function (u) { return u && typeof u === 'object'; });
    }
    if (!Array.isArray(usersData) || usersData.length === 0) usersData = INITIAL_USERS.slice();

    /* تضمین وجود حساب مدیر/ناظر پیش‌فرض برای جلوگیری از قفل شدن سامانه */
    ensureDefaultUsers();

    /* ترمیم رکوردهایی که نام خانوادگی آن‌ها در نسخه‌های قبلی در فیلد نام ادغام شده بود */
    var repaired = repairNames(geographicData) + repairNames(treatmentData);

    /* بازیابی نام خانوادگی رکوردهای ناقص از داده مرجع داخلی */
    nameRepairReport = repairMissingNames();

    /* فرآیند انتقال خودکار خارج‌شدگان به بایگانی پس از ۱ ماه */
    processAutoArchival();

    saveAllData();

    if (repaired > 0 || nameRepairReport.filled > 0) {
        console.info('name repair: split=' + repaired + ', filled=' + nameRepairReport.filled +
            ', unresolved=' + nameRepairReport.unresolved);
    }
}

function safeParse(raw, fallback) {
    if (!raw) return Array.isArray(fallback) ? fallback.slice() : fallback;
    try {
        var v = JSON.parse(raw);
        if (Array.isArray(v) && v.length) return v;
        return Array.isArray(fallback) ? fallback.slice() : fallback;
    } catch (e) {
        console.warn('JSON parse failed, fallback used');
        return Array.isArray(fallback) ? fallback.slice() : fallback;
    }
}

/**
 * فرآیند انتقال خودکار پزشکان خارج‌شده از طرح:
 * اگر از تاریخ ثبت خروج بیش از ۱ ماه (۳۰ روز) گذشته باشد، رکورد از لیست فعال
 * حذف شده و به آرشیو «archivedExitedData» منتقل می‌شود تا لیست تمام‌وقت خلوت بماند.
 * مشخصات کامل رکورد و تاریخ بایگانی حفظ می‌شود و در تب گزارش‌ها / بازیابی در دسترس است.
 */
function processAutoArchival() {
    var nowStr = todayJalali();
    var archivedCount = 0;

    var filterAndArchive = function (list, categoryName) {
        var keep = [];
        list.forEach(function (doc) {
            if (isReadyForAutoArchive(doc)) {
                doc._archivedAt = nowStr;
                doc._archiveCategory = categoryName;
                doc._archiveReason = 'گذشت بیش از ۱ ماه از تاریخ ثبت خروج (' + (doc.exitDate || doc._exitRegisteredAt || 'نامشخص') + ')';
                archivedExitedData.push(doc);
                archivedCount++;
            } else {
                keep.push(doc);
            }
        });
        return keep;
    };

    treatmentData = filterAndArchive(treatmentData, 'treatment');
    geographicData = filterAndArchive(geographicData, 'geographic');

    if (archivedCount > 0) {
        addAuditLog('بایگانی خودکار خارج‌شدگان', faNum(archivedCount) + ' پزشک خارج‌شده پس از گذشت ۱ ماه از لیست فعال به بایگانی منتقل شدند.');
    }
    return archivedCount;
}

/** بازگردانی یک پزشک بایگانی‌شده به لیست فعال (مدیر ارشد) */
function restoreArchivedDoctor(id) {
    if (!isAdmin()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'بازگردانی تنها برای مدیر ارشد مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    var idx = -1;
    for (var i = 0; i < archivedExitedData.length; i++) {
        if (Number(archivedExitedData[i].id) === Number(id)) { idx = i; break; }
    }
    if (idx === -1) return;
    var doc = archivedExitedData.splice(idx, 1)[0];
    delete doc._archivedAt;
    delete doc._archiveReason;
    if (doc._archiveCategory === 'geographic') {
        delete doc._archiveCategory;
        geographicData.push(doc);
    } else {
        delete doc._archiveCategory;
        treatmentData.push(doc);
    }
    saveAllData();
    addAuditLog('بازگردانی پزشک از بایگانی', 'بازگردانی ' + nameOf(doc) + ' به لیست فعال.');
    updateKPIs();
    updateBadges();
    applyFilters();
    renderReportsView();
    alertBox({ icon: 'success', title: 'بازگردانی شد', text: nameOf(doc) + ' به لیست فعال بازگردانده شد.', timer: 1500, showConfirmButton: false });
}

function saveAllData() {
    try {
        localStorage.setItem(LS_KEYS.geo, JSON.stringify(geographicData));
        localStorage.setItem(LS_KEYS.treat, JSON.stringify(treatmentData));
        localStorage.setItem(LS_KEYS.users, JSON.stringify(usersData));
        localStorage.setItem(LS_KEYS.logs, JSON.stringify(auditLogsData));
        localStorage.setItem(LS_KEYS.deleted, JSON.stringify(deletedData));
        localStorage.setItem(LS_KEYS.archivedExited, JSON.stringify(archivedExitedData));
    } catch (e) { console.warn('save failed', e); }
}

function addAuditLog(action, details) {
    auditLogsData.unshift({
        id: auditLogsData.length ? Math.max.apply(null, auditLogsData.map(function (l) { return l.id || 0; })) + 1 : 1,
        timestamp: showDateJalali(),
        user: currentUser ? currentUser.fullName : 'سیستم',
        role: currentUser ? currentUser.role : 'system',
        action: action,
        details: details
    });
    if (auditLogsData.length > 500) auditLogsData.length = 500;
    saveAllData();
    if (currentTab === 'audit') renderAuditLogsTable();
}


/** اجرای دستی بازیابی نام‌ها (دکمه نوار ابزار) */
function runNameRepair() {
    var report = repairMissingNames();
    var splitFixed = repairNames(geographicData) + repairNames(treatmentData);
    var filled = report.filled + splitFixed;

    if (filled > 0) {
        saveAllData();
        addAuditLog('بازیابی نام‌ها', 'نام/نام خانوادگی ' + filled + ' مورد از داده مرجع بازیابی شد.');
        renderTable();
        updateKPIs();
        if (currentTab === 'treatment' || currentTab === 'geographic') applyFilters();
    }

    var remaining = countIncompleteNames();

    alertBox({
        icon: remaining ? 'warning' : 'success',
        title: 'بازیابی نام و نام خانوادگی',
        html: '<div class="text-right text-xs leading-relaxed space-y-1">' +
            '<p>موارد بازیابی‌شده: <b>' + faNum(filled) + '</b></p>' +
            '<p>رکوردهای ناقص باقی‌مانده: <b class="' + (remaining ? 'text-rose-600' : 'text-emerald-600') + '">' + faNum(remaining) + '</b></p>' +
            (remaining ? '<p class="text-slate-500">این رکوردها در ستون نام با نشانگر <span class="text-amber-600 font-bold">⚠</span> مشخص شده‌اند. ' +
                'کد ملی یا شماره نظام پزشکی آن‌ها در فایل اکسل رسمی موجود نبود؛ لطفاً از طریق «ورود اطلاعات از اکسل» مجدداً بارگذاری کنید.</p>' : '') +
            '</div>',
        confirmButtonText: 'متوجه شدم', confirmButtonColor: '#059669'
    });
}

/** تعداد رکوردهای دارای نام یا نام خانوادگی ناقص */
function countIncompleteNames() {
    var n = 0;
    geographicData.concat(treatmentData).forEach(function (d) {
        if (!String(d.firstName || '').trim() || !String(d.lastName || '').trim()) n++;
    });
    return n;
}

/* ============================ احراز هویت ============================ */
function checkAuthSession() {
    var session = null;
    try { session = sessionStorage.getItem(SS_AUTH); } catch (e) { /* ignore */ }
    if (session) {
        try { currentUser = JSON.parse(session); } catch (e) { currentUser = null; }
    }
    if (currentUser) {
        hideLoginModal();
        applyAuthUI();
    } else {
        showLoginModal();
    }
}

function showLoginModal() {
    var m = $('loginModal');
    if (m) m.classList.remove('hidden');
}

function hideLoginModal() {
    var m = $('loginModal');
    if (m) m.classList.add('hidden');
}

/**
 * پاک‌سازی ورودی کاربر: حذف فاصله اضافی، نیم‌فاصله و تبدیل ارقام فارسی/عربی به لاتین
 * (کاربران معمولاً رمز را با صفحه‌کلید فارسی وارد می‌کنند)
 */
function normalizeInput(v) {
    return String(v === undefined || v === null ? '' : v)
        .replace(/[\u06F0-\u06F9]/g, function (d) { return String(d.charCodeAt(0) - 0x06F0); })
        .replace(/[\u0660-\u0669]/g, function (d) { return String(d.charCodeAt(0) - 0x0660); })
        .replace(/\u200c|\u200f|\u200e|\u061c/g, '')
        .replace(/[\u0623\u0625\u0622]/g, '\u0627')
        .replace(/\u0649/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .replace(/\s+/g, '')
        .trim();
}

/** مقایسه رمز عبور با تحمل ارقام فارسی/عربی و فاصله‌های اضافی */
function passwordMatches(stored, input) {
    var a = normalizeInput(stored);
    var b = normalizeInput(input);
    if (!b) return false;
    if (a === b) return true;
    /* مقایسه کمکی با نرمال‌سازی کامل فارسی */
    return norm(a) === norm(b);
}

function findUserByCredentials(username, password) {
    var uname = norm(username);
    var candidates = usersData.filter(function (u) {
        if (!u) return false;
        var byUsername = u.username && norm(u.username) === uname;
        var byFullName = u.fullName && norm(u.fullName) === uname;
        var byRole = uname === 'admin' && u.role === 'admin';
        return byUsername || byFullName || byRole;
    });

    var matched = candidates.filter(function (u) { return passwordMatches(u.password, password); })[0];
    if (matched) return matched;

    /* اگر نام کاربری خالی/نامعتبر بود، فقط با رمز جستجو می‌شود */
    return usersData.filter(function (u) { return u && passwordMatches(u.password, password); })[0] || null;
}

/** بازیابی حساب‌های پیش‌فرض در صورت خالی/خراب بودن داده کاربران */
function ensureDefaultUsers() {
    var defaults = [
        { id: 1, username: 'admin', password: '32332555', fullName: 'مدیر ارشد سامانه (معاونت درمان)', role: 'admin', city: 'همه' },
        { id: 2, username: 'readonly', password: '143625', fullName: 'کاربر عمومی نظارت (فقط خواندنی)', role: 'readonly', city: 'همه' }
    ];
    var added = false;
    defaults.forEach(function (d) {
        var exists = false;
        if (d.role === 'admin') {
            exists = usersData.some(function (u) { return u && u.role === 'admin'; });
        } else {
            exists = usersData.some(function (u) { return u && u.username && norm(u.username) === d.username; });
        }
        if (!exists) {
            var newId = usersData.length ? Math.max.apply(null, usersData.map(function (u) { return Number(u.id) || 0; })) + 1 : 1;
            usersData.push({
                id: newId, username: d.username, password: d.password, fullName: d.fullName,
                role: d.role, city: d.city, createdAt: todayJalali()
            });
            added = true;
        }
    });
    if (added) saveAllData();
    return added;
}

function handleLogin(event) {
    if (event) event.preventDefault();
    var usernameEl = $('loginUsername');
    var passwordEl = $('loginPassword');
    var username = usernameEl ? usernameEl.value.trim() : '';
    var password = passwordEl ? passwordEl.value.trim() : '';

    if (!password) {
        alertBox({
            icon: 'warning', title: 'کلمه عبور خالی است',
            text: 'لطفاً کلمه عبور خود را وارد نمایید.',
            confirmButtonText: 'متوجه شدم', confirmButtonColor: '#059669'
        });
        return;
    }

    if (!Array.isArray(usersData) || !usersData.length) {
        ensureDefaultUsers();
    }

    var user = findUserByCredentials(username, password);

    /* آخرین تلاش: اگر رمز با یکی از رمزهای پیش‌فرض برابر بود، حساب مربوطه بازسازی می‌شود */
    if (!user) {
        var fallback = null;
        if (passwordMatches('32332555', password)) fallback = 'admin';
        else if (passwordMatches('143625', password)) fallback = 'readonly';

        if (fallback) {
            ensureDefaultUsers();
            user = usersData.filter(function (u) {
                return fallback === 'admin' ? u.role === 'admin' : norm(u.username) === 'readonly';
            })[0] || null;
            if (user) {
                user.password = fallback === 'admin' ? '32332555' : '143625';
                saveAllData();
            }
        }
    }

    if (!user) {
        var hasUser = usersData.some(function (u) {
            return u && (norm(u.username) === norm(username) || norm(u.fullName) === norm(username));
        });
        var hint = hasUser
            ? 'کاربر یافت شد اما کلمه عبور مطابقت ندارد. دقت کنید زبان صفحه‌کلید روی فارسی نباشد (ارقام فارسی به‌صورت خودکار تبدیل می‌شوند).'
            : 'چنین نام کاربری در سامانه ثبت نشده است. برای ورود مدیر از admin و برای کاربر ناظر از readonly استفاده کنید.';

        alertBox({
            icon: 'error', title: 'خطای ورود',
            html: '<div class="text-right text-xs leading-relaxed space-y-2">' +
                '<p>' + esc(hint) + '</p>' +
                '<p class="text-slate-500">تعداد حساب‌های ثبت‌شده: ' + faNum(usersData.length) + '</p>' +
                '</div>',
            confirmButtonText: 'تلاش مجدد', confirmButtonColor: '#059669'
        });
        return;
    }

    currentUser = {
        id: user.id, username: user.username, fullName: user.fullName,
        role: user.role, city: user.city || 'همه'
    };
    try { sessionStorage.setItem(SS_AUTH, JSON.stringify(currentUser)); } catch (e) { /* ignore */ }
    hideLoginModal();
    applyAuthUI();
    addAuditLog('ورود به سامانه', 'کاربر ' + currentUser.fullName + ' با نقش ' + currentUser.role + ' وارد شد.');
    alertBox({ icon: 'success', title: 'خوش آمدید', text: 'ورود موفق: ' + currentUser.fullName, timer: 1400, showConfirmButton: false });
}

/** سازگاری با نسخه‌های قبلی */
function handleLoginSubmit(event) { handleLogin(event); }

function handleLogout() {
    var doLogout = function () {
        if (currentUser) addAuditLog('خروج از سامانه', 'کاربر ' + currentUser.fullName + ' خارج شد.');
        try { sessionStorage.removeItem(SS_AUTH); } catch (e) { /* ignore */ }
        currentUser = null;
        location.reload();
    };
    if (typeof Swal === 'undefined') { if (window.confirm('از حساب کاربری خارج می‌شوید؟')) doLogout(); return; }
    Swal.fire({
        title: 'خروج از سامانه',
        text: 'آیا برای خروج از حساب کاربری اطمینان دارید؟',
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'بله، خارج شو', cancelButtonText: 'انصراف',
        confirmButtonColor: '#e11d48', cancelButtonColor: '#64748b'
    }).then(function (r) { if (r.isConfirmed) doLogout(); });
}

function applyAuthUI() {
    if (!currentUser) return;

    if ($('userFullName')) $('userFullName').textContent = currentUser.fullName;

    var roleText = currentUser.role === 'admin' ? 'مدیر ارشد سامانه' :
        (currentUser.role === 'readonly' ? 'کاربر ناظر (فقط خواندنی)' : 'کاربر شهرستان ' + currentUser.city);

    if ($('userCityBadge')) $('userCityBadge').textContent = roleText;
    if ($('userRoleBadge')) {
        $('userRoleBadge').className = 'w-2.5 h-2.5 rounded-full ' + (
            currentUser.role === 'admin' ? 'bg-emerald-500' :
                (currentUser.role === 'readonly' ? 'bg-slate-400' : 'bg-sky-500'));
        $('userRoleBadge').title = roleText;
    }

    /* نمایش/پنهان‌سازی بخش‌های مدیریتی */
    var adminOnly = document.querySelectorAll('.admin-only');
    for (var i = 0; i < adminOnly.length; i++) {
        if (isAdmin()) adminOnly[i].classList.remove('hidden');
        else adminOnly[i].classList.add('hidden');
    }

    /* محدودسازی کاربر شهرستان به شهر خود */
    if (isCityUser()) {
        var citySel = $('filterCity');
        if (citySel) {
            if (!citySel.querySelector('option[value="' + currentUser.city + '"]')) {
                var opt = document.createElement('option');
                opt.value = currentUser.city; opt.textContent = currentUser.city;
                citySel.appendChild(opt);
            }
            citySel.value = currentUser.city;
            citySel.disabled = true;
        }
    }

    renderSpecialtiesFilter();
    renderRankFilter();
    renderCityFilter();
    updateKPIs();
    updateBadges();
    applyFilters();
    renderUsersTable();
    if (currentTab === 'users') switchTab('users', true);
}

/* ============================ شاخص‌های کلیدی (KPI) ============================ */
function updateKPIs() {
    var all = geographicData.concat(treatmentData);
    var nonActive = all.filter(isDoctorNonActive).length;

    if ($('kpiTotal')) $('kpiTotal').textContent = faNum(all.length);
    if ($('kpiActive')) $('kpiActive').textContent = faNum(all.length - nonActive);
    if ($('kpiExited')) $('kpiExited').textContent = faNum(nonActive);

    var cities = {};
    treatmentData.forEach(function (d) { cityParts(d.city).forEach(function (c) { cities[canonCity(c)] = c; }); });
    if ($('kpiCities')) $('kpiCities').textContent = faNum(Object.keys(cities).length);

    if ($('lastUpdatedBadge')) $('lastUpdatedBadge').textContent = todayJalali();
}

function updateBadges() {
    if ($('badgeCountGeo')) $('badgeCountGeo').textContent = faNum(geographicData.length);
    if ($('badgeCountTreat')) $('badgeCountTreat').textContent = faNum(treatmentData.length);
    if ($('archivedExitedBadgeCount')) $('archivedExitedBadgeCount').textContent = faNum(archivedExitedData.length);
    if ($('tableTotalCount')) {
        var total = currentTab === 'treatment' ? treatmentData.length : geographicData.length;
        $('tableTotalCount').textContent = faNum(total);
    }
    if ($('tableFilteredCount')) $('tableFilteredCount').textContent = faNum(filteredList.length);
}

/* ============================ تب‌ها ============================ */
function switchTab(tab, silent) {
    currentTab = tab;
    currentPage = 1;

    var tabs = ['geo', 'treat', 'reports', 'stats', 'users', 'audit'];
    var activeMap = { geographic: 'geo', treatment: 'treat', reports: 'reports', stats: 'stats', users: 'users', audit: 'audit' };
    tabs.forEach(function (t) {
        var btn = $('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
        if (!btn) return;
        var isActive = (activeMap[tab] === t);
        btn.classList.toggle('bg-teal-50', isActive);
        btn.classList.toggle('text-teal-700', isActive);
        btn.classList.toggle('border-teal-200', isActive);
        btn.classList.toggle('shadow-xs', isActive);
        btn.classList.toggle('text-slate-600', !isActive);
        btn.classList.toggle('border-transparent', !isActive);
    });

    var viewDoctors = $('viewDoctors'), viewStats = $('viewStats');
    var viewUsers = $('viewUsers'), viewAudit = $('viewAudit'), viewReports = $('viewReports');

    [viewDoctors, viewStats, viewUsers, viewAudit, viewReports].forEach(function (v) { if (v) v.classList.add('hidden'); });

    if (tab === 'geographic' || tab === 'treatment') {
        if (viewDoctors) viewDoctors.classList.remove('hidden');
        if ($('cityFilterContainer')) $('cityFilterContainer').style.display = (tab === 'treatment') ? '' : 'none';
        if ($('rankFilterContainer')) $('rankFilterContainer').style.display = (tab === 'geographic') ? '' : 'none';
        if ($('tableTitle')) {
            $('tableTitle').textContent = tab === 'geographic'
                ? 'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی (شماره ۲)'
                : 'لیست مشخصات پزشکان تمام وقت درمانی شاغل در مراکز درمانی (شماره ۱)';
        }
        if ($('tableSubtitle')) $('tableSubtitle').textContent = 'معاونت درمان دانشگاه علوم پزشکی کردستان';
        if ($('filterCity')) $('filterCity').value = isCityUser() ? currentUser.city : '';
        if ($('filterSpecialty')) $('filterSpecialty').value = '';
        if ($('filterStatus')) $('filterStatus').value = '';
        if ($('filterRank')) $('filterRank').value = '';
        renderSpecialtiesFilter();
        renderRankFilter();
        renderCityFilter();
        applyFilters();
    } else if (tab === 'stats') {
        if (viewStats) viewStats.classList.remove('hidden');
        renderAnalyticsCharts();
    } else if (tab === 'users') {
        if (viewUsers) viewUsers.classList.remove('hidden');
        renderUsersTable();
    } else if (tab === 'reports') {
        if (viewReports) viewReports.classList.remove('hidden');
        renderReportsView();
    } else if (tab === 'audit') {
        if (viewAudit) viewAudit.classList.remove('hidden');
        renderAuditLogsTable();
    }

    updateBadges();
    if (!silent) window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================ فیلترها ============================ */
function renderSpecialtiesFilter() {
    var select = $('filterSpecialty');
    if (!select) return;
    var src = (currentTab === 'treatment') ? treatmentData : geographicData;
    var map = {};
    src.forEach(function (d) { var s = (d.specialty || '').trim(); if (s) map[norm(s)] = s; });
    var currentVal = select.value;
    var html = '<option value="">همه رشته‌های تخصصی</option>';
    Object.keys(map).sort().forEach(function (k) {
        html += '<option value="' + esc(map[k]) + '">' + esc(map[k]) + '</option>';
    });
    select.innerHTML = html;
    if (currentVal) select.value = currentVal;

    var dl = $('specialtiesList');
    if (dl) {
        dl.innerHTML = Object.keys(map).sort().map(function (k) { return '<option value="' + esc(map[k]) + '"></option>'; }).join('');
    }
}

function renderCityFilter() {
    var select = $('filterCity');
    if (!select) return;
    var map = {};
    treatmentData.forEach(function (d) {
        cityParts(d.city).forEach(function (c) { if (c) map[canonCity(c)] = c; });
    });
    var currentVal = select.value;
    var html = '<option value="">همه شهرستان‌ها</option>';
    Object.keys(map).sort().forEach(function (k) {
        var label = CITY_ALIASES[map[k]] || map[k];
        html += '<option value="' + esc(label) + '">' + esc(label) + '</option>';
    });
    select.innerHTML = html;
    if (currentVal) select.value = currentVal;
    if (isCityUser()) { select.value = currentUser.city; select.disabled = true; }
}

function renderRankFilter() {
    var select = $('filterRank');
    if (!select) return;
    var map = {};
    geographicData.forEach(function (d) { var r = (d.academicRank || '').trim(); if (r) map[norm(r)] = r; });
    var currentVal = select.value;
    var html = '<option value="">همه مرتبه‌های علمی</option>';
    Object.keys(map).sort().forEach(function (k) { html += '<option value="' + esc(map[k]) + '">' + esc(map[k]) + '</option>'; });
    select.innerHTML = html;
    if (currentVal) select.value = currentVal;
}

/** هندلر جستجو و فیلترها (متصل به oninput/onchange رابط کاربری) */
function handleSearchFilter() {
    currentPage = 1;
    applyFilters();
}

function applyFilters() {
    var searchEl = $('searchInput');
    var search = searchEl ? norm(searchEl.value) : '';
    var specialtyEl = $('filterSpecialty');
    var specialty = specialtyEl ? norm(specialtyEl.value) : '';
    var statusEl = $('filterStatus');
    var status = statusEl ? statusEl.value : '';
    var rankEl = $('filterRank');
    var rank = rankEl ? norm(rankEl.value) : '';
    var cityEl = $('filterCity');
    var city = cityEl ? norm(cityEl.value) : '';

    var source = (currentTab === 'treatment') ? treatmentData : geographicData;

    filteredList = source.filter(function (item) {
        if (isCityUser()) {
            var allowed = recordCities(item).some(function (c) { return c === canonCity(currentUser.city); });
            if (!allowed) return false;
        }

        if (search) {
            var blob = norm([
                item.firstName, item.lastName, item.specialty, item.nationalCode,
                item.medicalCode, item.city, item.city2, item.remarks, item.academicRank,
                item.serviceType, item.reEntryDate, item.startDate, item.exitDate
            ].join(' '));
            if (blob.indexOf(search) === -1) return false;
        }

        if (specialty && norm(item.specialty) !== specialty) return false;

        if (currentTab === 'treatment' && city) {
            var hit = recordCities(item).some(function (c) { return c === canonCity(city); });
            if (!hit) return false;
        }

        if (currentTab === 'geographic' && rank && norm(item.academicRank) !== rank) return false;

        if (status === 'active' && isDoctorNonActive(item)) return false;
        if (status === 'exited' && !isDoctorNonActive(item)) return false;
        if (status === 'absent' && !isAbsentOnly(item)) return false;

        return true;
    });

    renderTable();
    updateBadges();
}

/* ============================ جدول اصلی ============================ */
function renderTable() {
    var thead = $('tableHead');
    var tbody = $('tableBody');
    if (!thead || !tbody) return;

    var showActions = canEdit();
    var isGeo = currentTab !== 'treatment';

    if (isGeo) {
        thead.innerHTML = '<tr>' +
            '<th class="p-3 w-12 text-center">ردیف</th>' +
            '<th class="p-3">نام و نام خانوادگی</th>' +
            '<th class="p-3">رشته تخصص</th>' +
            '<th class="p-3 font-mono">کد ملی</th>' +
            '<th class="p-3 font-mono">نظام پزشکی</th>' +
            '<th class="p-3">مرتبه علمی</th>' +
            '<th class="p-3">شروع بکار</th>' +
            '<th class="p-3 font-mono">ورود مجدد</th>' +
            '<th class="p-3">وضعیت</th>' +
            '<th class="p-3">ملاحظات</th>' +
            (showActions ? '<th class="p-3 text-center">عملیات</th>' : '') +
            '</tr>';
    } else {
        thead.innerHTML = '<tr>' +
            '<th class="p-3 w-12 text-center">ردیف</th>' +
            '<th class="p-3">نام و نام خانوادگی</th>' +
            '<th class="p-3">تخصص</th>' +
            '<th class="p-3">شهرستان</th>' +
            '<th class="p-3 font-mono">کد ملی</th>' +
            '<th class="p-3 font-mono">نظام پزشکی</th>' +
            '<th class="p-3 font-mono">شروع تمام وقتی</th>' +
            '<th class="p-3 font-mono">ورود مجدد</th>' +
            '<th class="p-3">وضعیت</th>' +
            '<th class="p-3">توضیحات</th>' +
            (showActions ? '<th class="p-3 text-center">عملیات</th>' : '') +
            '</tr>';
    }

    var total = filteredList.length;
    var start = 0, end = total;
    if (pageSize !== 'all') {
        var ps = parseInt(pageSize, 10) || 15;
        var totalPages = Math.max(1, Math.ceil(total / ps));
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;
        start = (currentPage - 1) * ps;
        end = Math.min(start + ps, total);
    }

    var rows = filteredList.slice(start, end);
    var colCount = isGeo ? (showActions ? 11 : 10) : (showActions ? 11 : 10);

    if (rows.length === 0) {
        tbody.innerHTML = '';
        if ($('emptyState')) $('emptyState').classList.remove('hidden');
    } else {
        if ($('emptyState')) $('emptyState').classList.add('hidden');
        var html = '';
        rows.forEach(function (doc, idx) {
            var isEx = isExitedDoc(doc);
            var isRecent = isRecentStatusChange(doc);
            var rowClass = 'transition-colors ' +
                (isEx ? 'bg-rose-50/90 font-bold text-rose-950 border-r-4 border-r-rose-600 hover:bg-rose-100/80 ' :
                 (isRecent ? 'bg-amber-50/80 font-semibold text-slate-900 border-r-4 border-r-amber-500 hover:bg-amber-100/70 ' :
                  'hover:bg-slate-50/80 '));

            var changeBadge = isRecent ? '<span class="mr-1 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white shadow-xs" title="تغییر وضعیت جدید در ۱ ماه اخیر">★ جدید</span>' : '';
            var exitedBadge = isEx ? '<span class="mr-1 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-xs" title="خارج‌شده از طرح تمام وقتی">خارج‌شده</span>' : '';

            var actions = showActions
                ? '<td class="p-3 text-center">' +
                  '<div class="flex items-center justify-center gap-1.5">' +
                  '<button type="button" onclick="openDoctorModal(' + doc.id + ')" class="p-1.5 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="ویرایش">' +
                  '<i class="fa-solid fa-pen-to-square"></i></button>' +
                  '<button type="button" onclick="handleDeleteDoctor(' + doc.id + ')" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="حذف">' +
                  '<i class="fa-solid fa-trash"></i></button>' +
                  '</div></td>'
                : '';

            if (isGeo) {
                html += '<tr class="' + rowClass + '">' +
                    '<td class="p-3 text-center font-mono text-slate-500">' + faNum(start + idx + 1) + '</td>' +
                    '<td class="p-3 font-bold text-slate-800 whitespace-nowrap">' + esc(nameOf(doc)) + changeBadge + exitedBadge + (String(doc.lastName || '').trim() ? '' : ' <span class="text-amber-600 text-[11px]" title="نام خانوادگی ثبت نشده است">⚠</span>') + '</td>' +
                    '<td class="p-3 font-medium text-teal-800">' + esc(doc.specialty || '-') + '</td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.nationalCode || '-') + '</td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.medicalCode || '-') + '</td>' +
                    '<td class="p-3"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">' + esc(doc.academicRank || '-') + '</span></td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.startDate || '-') + '</td>' +
                    '<td class="p-3">' + reEntryBadge(doc) + '</td>' +
                    '<td class="p-3">' + statusBadge(doc) + '</td>' +
                    '<td class="p-3 text-slate-600 max-w-[14rem] truncate" title="' + esc(doc.remarks || '') + '">' + esc(doc.remarks || '-') + '</td>' +
                    actions + '</tr>';
            } else {
                html += '<tr class="' + rowClass + '">' +
                    '<td class="p-3 text-center font-mono text-slate-500">' + faNum(start + idx + 1) + '</td>' +
                    '<td class="p-3 font-bold text-slate-800 whitespace-nowrap">' + esc(nameOf(doc)) + changeBadge + exitedBadge + (String(doc.lastName || '').trim() ? '' : ' <span class="text-amber-600 text-[11px]" title="نام خانوادگی ثبت نشده است">⚠</span>') + '</td>' +
                    '<td class="p-3 font-medium text-teal-800">' + esc(doc.specialty || '-') + '</td>' +
                    '<td class="p-3 font-bold text-indigo-700 whitespace-nowrap">' + esc(doc.city || '-') +
                        (String(doc.city2 || '').trim() ? '<span class="mr-1 px-1.5 py-0.5 rounded text-[10px] bg-teal-50 text-teal-700 border border-teal-200" title="شهرستان دوم فعالیت">+ ' + esc(doc.city2) + '</span>' : '') +
                    '</td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.nationalCode || '-') + '</td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.medicalCode || '-') + '</td>' +
                    '<td class="p-3 font-mono text-slate-600">' + esc(doc.startDate || '-') + '</td>' +
                    '<td class="p-3">' + reEntryBadge(doc) + '</td>' +
                    '<td class="p-3">' + statusBadge(doc) + '</td>' +
                    '<td class="p-3 text-slate-600 max-w-[14rem] truncate" title="' + esc(doc.remarks || '') + '">' + esc(doc.remarks || '-') + '</td>' +
                    actions + '</tr>';
            }
        });
        tbody.innerHTML = html;
        if (colCount === 0) { /* noop */ }
    }

    renderPagination(start, end, total);
    updateBadges();
}

function renderPagination(start, end, total) {
    var container = $('paginationContainer');
    if (!container) return;

    var info = document.createElement('span');
    if (total === 0) {
        container.innerHTML = '<span class="text-xs text-slate-400">موردی برای نمایش وجود ندارد</span>';
        return;
    }
    if (pageSize === 'all') {
        container.innerHTML = '<span class="text-xs text-slate-500">نمایش همه ' + faNum(total) + ' رکورد</span>';
        return;
    }

    var ps = parseInt(pageSize, 10) || 15;
    var totalPages = Math.max(1, Math.ceil(total / ps));
    var html = '<span class="text-[11px] text-slate-500 ml-2">نمایش ' + faNum(start + 1) + ' تا ' + faNum(end) + ' از ' + faNum(total) + '</span>';
    html += '<button type="button" onclick="goToPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + ' class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs disabled:opacity-40 hover:bg-slate-100 transition-colors">قبلی</button>';

    for (var p = 1; p <= totalPages; p++) {
        if (totalPages > 7 && Math.abs(p - currentPage) > 2 && p !== 1 && p !== totalPages) {
            if (p === 2 || p === totalPages - 1) html += '<span class="px-1 text-slate-400">...</span>';
            continue;
        }
        html += '<button type="button" onclick="goToPage(' + p + ')" class="px-3 py-1 rounded-lg text-xs font-mono transition-colors ' +
            (p === currentPage ? 'bg-teal-600 text-white font-bold' : 'border border-slate-200 hover:bg-slate-100') + '">' + faNum(p) + '</button>';
    }

    html += '<button type="button" onclick="goToPage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + ' class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs disabled:opacity-40 hover:bg-slate-100 transition-colors">بعدی</button>';
    container.innerHTML = html;
}

function goToPage(page) {
    if (pageSize === 'all') return;
    var ps = parseInt(pageSize, 10) || 15;
    var totalPages = Math.max(1, Math.ceil(filteredList.length / ps));
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTable();
}

function changePageSize() {
    var el = $('recordsPerPage');
    pageSize = el ? el.value : '15';
    currentPage = 1;
    renderTable();
}

/* ============================ فرم ثبت / ویرایش پزشک ============================ */
function setFieldVisibility(type) {
    var isGeo = (type === 'geographic');
    if ($('fieldCityContainer')) $('fieldCityContainer').style.display = isGeo ? 'none' : '';
    if ($('fieldRankContainer')) $('fieldRankContainer').style.display = isGeo ? '' : 'none';
    if ($('fieldServiceTypeContainer')) $('fieldServiceTypeContainer').style.display = isGeo ? '' : 'none';
}

function openDoctorModal(arg) {
    if (!canEdit()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'ثبت و ویرایش اطلاعات تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }

    var form = $('doctorForm');
    if (form) form.reset();

    var isEdit = (arg !== undefined && arg !== null && arg !== '' && arg !== 'add');
    var record = null;
    var type = (currentTab === 'treatment') ? 'treatment' : 'geographic';

    if (isEdit) {
        var id = parseInt(arg, 10);
        record = geographicData.filter(function (d) { return Number(d.id) === id; })[0];
        if (record) { type = 'geographic'; }
        else {
            record = treatmentData.filter(function (d) { return Number(d.id) === id; })[0];
            if (record) type = 'treatment';
        }
        if (!record) {
            alertBox({ icon: 'error', title: 'یافت نشد', text: 'رکورد مورد نظر پیدا نشد.' });
            return;
        }
    }

    setFieldVisibility(type);

    if ($('docId')) $('docId').value = isEdit ? record.id : '';
    if ($('docType')) $('docType').value = type;

    if (isEdit) {
        if ($('docFirstName')) $('docFirstName').value = record.firstName || '';
        if ($('docLastName')) $('docLastName').value = record.lastName || '';
        if ($('docSpecialty')) $('docSpecialty').value = record.specialty || '';
        if ($('docNationalCode')) $('docNationalCode').value = record.nationalCode || '';
        if ($('docMedicalCode')) $('docMedicalCode').value = record.medicalCode || '';
        if ($('docCity')) $('docCity').value = record.city || 'سنندج';
        if ($('docCity2')) $('docCity2').value = record.city2 || '';
        if ($('docRank')) $('docRank').value = record.academicRank || 'استادیار';
        if ($('docServiceType')) $('docServiceType').value = record.serviceType || 'هیأت علمي ت ج';
        if ($('docStartDate')) $('docStartDate').value = record.startDate || '';
        if ($('docReEntryDate')) $('docReEntryDate').value = record.reEntryDate || '';
        if ($('docExitDate')) $('docExitDate').value = record.exitDate || '';
        if ($('docRemarks')) $('docRemarks').value = record.remarks || '';
    } else {
        if ($('docCity') && isCityUser()) $('docCity').value = currentUser.city;
        if ($('docServiceType') && type === 'geographic') $('docServiceType').value = 'هیأت علمي ت ج';
        if ($('docRank')) $('docRank').value = 'استادیار';
    }

    if ($('doctorModalTitle')) {
        $('doctorModalTitle').innerHTML = '<i class="fa-solid fa-user-doctor text-teal-600"></i>' +
            '<span>' + (isEdit ? 'ویرایش مشخصات پزشک' : (type === 'geographic' ? 'ثبت پزشک هیأت علمی جدید' : 'ثبت پزشک تمام وقت درمانی جدید')) + '</span>';
    }
    if ($('specialtiesList') && !$('specialtiesList').children.length) renderSpecialtiesFilter();

    var modal = $('doctorModal');
    if (modal) modal.classList.remove('hidden');
}

function closeDoctorModal() {
    var modal = $('doctorModal');
    if (modal) modal.classList.add('hidden');
}

function saveDoctorForm(event) {
    if (event) event.preventDefault();
    if (!canEdit()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'ثبت و ویرایش اطلاعات تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }

    var type = ($('docType') ? $('docType').value : '') || 'geographic';
    var idRaw = $('docId') ? $('docId').value : '';
    var isEdit = !!idRaw;

    var firstName = $('docFirstName') ? $('docFirstName').value.trim() : '';
    var lastName = $('docLastName') ? $('docLastName').value.trim() : '';
    var specialty = $('docSpecialty') ? $('docSpecialty').value.trim() : '';
    var nationalCode = $('docNationalCode') ? $('docNationalCode').value.replace(/[^0-9]/g, '') : '';
    var medicalCode = $('docMedicalCode') ? $('docMedicalCode').value.trim() : '';
    var city = $('docCity') ? $('docCity').value : 'سنندج';
    var city2 = $('docCity2') ? $('docCity2').value.trim() : '';
    if (city2 && canonCity(city2) === canonCity(city)) city2 = '';   /* شهر تکراری ذخیره نمی‌شود */
    var rank = $('docRank') ? $('docRank').value : '';
    var serviceType = $('docServiceType') ? $('docServiceType').value.trim() : '';
    var startDate = $('docStartDate') ? $('docStartDate').value.trim() : '';
    var reEntryDate = $('docReEntryDate') ? $('docReEntryDate').value.trim() : '';
    var exitDate = $('docExitDate') ? $('docExitDate').value.trim() : '';
    var remarks = $('docRemarks') ? $('docRemarks').value.trim() : '';

    if (!firstName || !lastName || !specialty) {
        alertBox({ icon: 'warning', title: 'اطلاعات ناقص', text: 'نام، نام خانوادگی و رشته تخصصی الزامی است.', confirmButtonColor: '#059669' });
        return;
    }
    if (nationalCode && nationalCode.length !== 10) {
        alertBox({ icon: 'warning', title: 'کد ملی نامعتبر', text: 'کد ملی باید دقیقاً ۱۰ رقم باشد.', confirmButtonColor: '#059669' });
        return;
    }

    var target = (type === 'geographic') ? geographicData : treatmentData;
    var duplicate = target.filter(function (d) {
        return Number(d.id) !== Number(idRaw) && (
            (nationalCode && String(d.nationalCode || '') === nationalCode) ||
            (medicalCode && String(d.medicalCode || '') === medicalCode && medicalCode !== '')
        );
    });
    if (duplicate.length) {
        alertBox({ icon: 'error', title: 'رکورد تکراری', text: 'پزشکی با این کد ملی یا شماره نظام پزشکی قبلاً در این بخش ثبت شده است.', confirmButtonColor: '#059669' });
        return;
    }

    var payload = {
        firstName: firstName,
        lastName: lastName,
        specialty: specialty,
        nationalCode: nationalCode,
        medicalCode: medicalCode,
        startDate: startDate,
        exitDate: exitDate,
        remarks: remarks,
        reEntryDate: reEntryDate
    };
    if (type === 'geographic') {
        payload.serviceType = serviceType || 'هیأت علمي ت ج';
        payload.academicRank = rank || 'استادیار';
    } else {
        payload.city2 = city2;
        payload.city = city;
    }

    var todayStr = todayJalali();
    if (isEdit) {
        var existing = target.filter(function (d) { return Number(d.id) === Number(idRaw); })[0];
        if (existing) {
            var oldExit = String(existing.exitDate || '').trim();
            var newExit = String(payload.exitDate || '').trim();
            var oldStatus = statusText(existing);
            Object.keys(payload).forEach(function (k) { existing[k] = payload[k]; });
            var newStatus = statusText(existing);

            /* اگر وضعیت یا تاریخ خروج تغییر کرده، تاریخ ثبت تغییر را ثبت کن */
            if (oldExit !== newExit || oldStatus !== newStatus) {
                existing._statusUpdatedAt = todayStr;
                if (!oldExit && newExit) {
                    existing._exitRegisteredAt = todayStr;
                } else if (oldExit && !newExit) {
                    delete existing._exitRegisteredAt;
                }
            }
        }
        addAuditLog('ویرایش پزشک', 'ویرایش اطلاعات ' + firstName + ' ' + lastName + ' در بخش ' +
            (type === 'geographic' ? 'هیأت علمی جغرافیایی' : 'تمام وقت درمانی'));
    } else {
        var newId = 1;
        geographicData.concat(treatmentData).forEach(function (d) { if (Number(d.id) >= newId) newId = Number(d.id) + 1; });
        payload.id = newId;
        payload.radif = String(target.length + 1);
        payload._statusUpdatedAt = todayStr;
        if (payload.exitDate && String(payload.exitDate).trim()) {
            payload._exitRegisteredAt = todayStr;
        }
        target.push(payload);
        addAuditLog('ثبت پزشک جدید', 'ثبت ' + firstName + ' ' + lastName + ' در بخش ' +
            (type === 'geographic' ? 'هیأت علمی جغرافیایی' : 'تمام وقت درمانی'));
    }

    saveAllData();
    closeDoctorModal();
    renderSpecialtiesFilter();
    renderRankFilter();
    renderCityFilter();
    updateKPIs();
    applyFilters();

    alertBox({ icon: 'success', title: 'ذخیره شد', text: 'اطلاعات پزشک با موفقیت ذخیره گردید.', timer: 1500, showConfirmButton: false });
}

function handleDeleteDoctor(id) {
    if (!canEdit()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'حذف رکوردها تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    var docId = parseInt(id, 10);
    var inGeo = geographicData.filter(function (d) { return Number(d.id) === docId; })[0];
    var inTreat = treatmentData.filter(function (d) { return Number(d.id) === docId; })[0];
    var doc = inGeo || inTreat;
    if (!doc) return;

    var doDelete = function () {
        if (inGeo) geographicData = geographicData.filter(function (d) { return Number(d.id) !== docId; });
        if (inTreat) treatmentData = treatmentData.filter(function (d) { return Number(d.id) !== docId; });

        /* ثبت مشخصات کامل در لیست پزشکان حذف‌شده برای گزارش‌گیری */
        var snapshot = Object.assign({}, doc, {
            _deletedAt: todayJalali(),
            _deletedBy: currentUser ? currentUser.fullName : 'مدیر سامانه',
            _deletedCategory: inGeo ? 'تمام وقت جغرافیایی' : 'تمام وقت درمانی'
        });
        deletedData.push(snapshot);

        saveAllData();
        addAuditLog('حذف پزشک', 'حذف ' + doc.firstName + ' ' + doc.lastName);
        renderSpecialtiesFilter();
        renderRankFilter();
        renderCityFilter();
        updateKPIs();
        applyFilters();
        alertBox({ icon: 'success', title: 'حذف شد', text: 'رکورد مورد نظر حذف گردید.', timer: 1400, showConfirmButton: false });
    };

    if (typeof Swal === 'undefined') {
        if (window.confirm('حذف ' + doc.firstName + ' ' + doc.lastName + ' ؟')) doDelete();
        return;
    }
    Swal.fire({
        title: 'حذف رکورد',
        html: 'آیا برای حذف <b>' + esc(doc.firstName) + ' ' + esc(doc.lastName) + '</b> اطمینان دارید؟<br><span class="text-xs text-rose-600">این عملیات قابل بازگشت نیست.</span>',
        icon: 'error', showCancelButton: true,
        confirmButtonText: 'بله، حذف شود', cancelButtonText: 'انصراف',
        confirmButtonColor: '#e11d48', cancelButtonColor: '#64748b'
    }).then(function (r) { if (r.isConfirmed) doDelete(); });
}

/* ============================ مدیریت کاربران ============================ */
function renderUsersTable() {
    var tbody = $('usersTableBody');
    if (!tbody) return;

    if (!usersData.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="p-6 text-center text-slate-400">کاربری ثبت نشده است.</td></tr>';
        return;
    }

    var roleMap = {
        admin: { label: 'مدیر ارشد', cls: 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' },
        readonly: { label: 'فقط خواندنی', cls: 'bg-slate-100 text-slate-700 border border-slate-200' },
        city_user: { label: 'کاربر شهرستان', cls: 'bg-teal-50 text-teal-700 border border-teal-200' }
    };

    var html = '';
    usersData.forEach(function (u, idx) {
        var r = roleMap[u.role] || roleMap.city_user;
        html += '<tr class="hover:bg-slate-50 transition-colors">' +
            '<td class="p-3 font-mono text-slate-500">' + faNum(idx + 1) + '</td>' +
            '<td class="p-3 font-medium text-slate-800">' + esc(u.fullName || '-') + '</td>' +
            '<td class="p-3 font-mono font-bold text-slate-700" dir="ltr">' + esc(u.username || '-') + '</td>' +
            '<td class="p-3 text-slate-600">' + esc(u.city || 'همه') + '</td>' +
            '<td class="p-3"><span class="px-2.5 py-0.5 rounded-full text-[11px] ' + r.cls + '">' + r.label + '</span></td>' +
            '<td class="p-3 font-mono text-slate-500">' + esc(u.createdAt || '-') + '</td>' +
            '<td class="p-3 text-center">' +
            '<div class="flex items-center justify-center gap-1.5">' +
            '<button type="button" onclick="openUserModal(' + u.id + ')" class="p-1.5 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="ویرایش کاربر">' +
            '<i class="fa-solid fa-pen-to-square"></i></button>' +
            '<button type="button" onclick="resetUserPassword(' + u.id + ')" class="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="بازنشانی رمز به 123456">' +
            '<i class="fa-solid fa-rotate-left"></i></button>' +
            (u.role === 'admin' ? '' :
                '<button type="button" onclick="deleteUser(' + u.id + ')" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="حذف کاربر">' +
                '<i class="fa-solid fa-trash"></i></button>') +
            '</div></td></tr>';
    });
    tbody.innerHTML = html;
}

function openUserModal(arg) {
    if (!isAdmin()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'مدیریت کاربران تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    var form = $('userForm');
    if (form) form.reset();

    var isEdit = (arg !== undefined && arg !== null && arg !== '' && arg !== 'add');
    var user = isEdit ? usersData.filter(function (u) { return Number(u.id) === parseInt(arg, 10); })[0] : null;

    if ($('userId')) $('userId').value = user ? user.id : '';
    if ($('userFormFullName')) $('userFormFullName').value = user ? (user.fullName || '') : '';
    if ($('userFormUsername')) $('userFormUsername').value = user ? (user.username || '') : '';
    if ($('userFormCity')) $('userFormCity').value = user ? (user.city || 'همه') : 'سنندج';
    if ($('userFormRole')) $('userFormRole').value = user ? (user.role || 'city_user') : 'city_user';
    if ($('userFormPassword')) $('userFormPassword').value = user ? (user.password || '') : '123456';

    if ($('userModalTitle')) $('userModalTitle').textContent = user ? 'ویرایش کاربر' : 'تعریف کاربر جدید شهرستان';

    var modal = $('userModal');
    if (modal) modal.classList.remove('hidden');
}

function closeUserModal() {
    var modal = $('userModal');
    if (modal) modal.classList.add('hidden');
}

/* سازگاری با نسخه‌های قبلی */
function openAddUserModal() { openUserModal('add'); }

function saveUserForm(event) {
    if (event) event.preventDefault();
    if (!isAdmin()) return;

    var idRaw = $('userId') ? $('userId').value : '';
    var fullName = $('userFormFullName') ? $('userFormFullName').value.trim() : '';
    var username = $('userFormUsername') ? $('userFormUsername').value.trim() : '';
    var city = $('userFormCity') ? $('userFormCity').value : 'همه';
    var role = $('userFormRole') ? $('userFormRole').value : 'city_user';
    var password = $('userFormPassword') ? $('userFormPassword').value.trim() : '';

    if (!fullName || !username || !password) {
        alertBox({ icon: 'warning', title: 'اطلاعات ناقص', text: 'نام کاربری، عنوان کاربری و کلمه عبور الزامی است.', confirmButtonColor: '#059669' });
        return;
    }
    if (password.length < 6) {
        alertBox({ icon: 'warning', title: 'کلمه عبور کوتاه', text: 'کلمه عبور باید حداقل ۶ کاراکتر باشد.', confirmButtonColor: '#059669' });
        return;
    }

    var duplicate = usersData.filter(function (u) {
        return Number(u.id) !== Number(idRaw) && norm(u.username) === norm(username);
    });
    if (duplicate.length) {
        alertBox({ icon: 'error', title: 'نام کاربری تکراری', text: 'این نام کاربری قبلاً ثبت شده است.', confirmButtonColor: '#059669' });
        return;
    }

    if (idRaw) {
        var user = usersData.filter(function (u) { return Number(u.id) === Number(idRaw); })[0];
        if (user) {
            user.fullName = fullName; user.username = username; user.city = city;
            user.role = role; user.password = password;
        }
        addAuditLog('ویرایش کاربر', 'اطلاعات کاربر ' + fullName + ' (' + username + ') ویرایش شد.');
    } else {
        var newId = 1;
        usersData.forEach(function (u) { if (Number(u.id) >= newId) newId = Number(u.id) + 1; });
        usersData.push({
            id: newId, username: username, password: password, fullName: fullName,
            role: role, city: city, createdAt: todayJalali()
        });
        addAuditLog('تعریف کاربر جدید', 'کاربر ' + fullName + ' (' + username + ') با نقش ' + role + ' تعریف شد.');
    }

    saveAllData();
    renderUsersTable();
    closeUserModal();
    alertBox({ icon: 'success', title: 'ذخیره شد', text: 'اطلاعات کاربر با موفقیت ذخیره گردید.', timer: 1500, showConfirmButton: false });
}

/* سازگاری با نسخه‌های قبلی */
function handleSaveUser(event) { saveUserForm(event); }

function resetUserPassword(id) {
    if (!isAdmin()) return;
    var user = usersData.filter(function (u) { return Number(u.id) === parseInt(id, 10); })[0];
    if (!user) return;

    Swal.fire({
        title: 'بازنشانی کلمه عبور',
        html: 'رمز عبور کاربر <b>' + esc(user.fullName) + '</b> به <b class="font-mono">123456</b> تغییر می‌کند. ادامه می‌دهید؟',
        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'بله، بازنشانی شود', cancelButtonText: 'انصراف',
        confirmButtonColor: '#d97706', cancelButtonColor: '#64748b'
    }).then(function (r) {
        if (!r.isConfirmed) return;
        user.password = '123456';
        saveAllData();
        addAuditLog('بازنشانی رمز کاربر', 'رمز عبور ' + user.username + ' بازنشانی شد.');
        alertBox({ icon: 'success', title: 'انجام شد', text: 'کلمه عبور به 123456 تغییر یافت.', timer: 1500, showConfirmButton: false });
    });
}

function deleteUser(id) {
    if (!isAdmin()) return;
    var user = usersData.filter(function (u) { return Number(u.id) === parseInt(id, 10); })[0];
    if (!user) return;
    if (user.role === 'admin') {
        alertBox({ icon: 'warning', title: 'غیرمجاز', text: 'حذف حساب مدیر ارشد مجاز نیست.', confirmButtonColor: '#059669' });
        return;
    }

    Swal.fire({
        title: 'حذف کاربر',
        html: 'آیا برای حذف کاربر <b>' + esc(user.fullName) + '</b> اطمینان دارید؟',
        icon: 'error', showCancelButton: true,
        confirmButtonText: 'بله، حذف شود', cancelButtonText: 'انصراف',
        confirmButtonColor: '#e11d48', cancelButtonColor: '#64748b'
    }).then(function (r) {
        if (!r.isConfirmed) return;
        usersData = usersData.filter(function (u) { return Number(u.id) !== Number(user.id); });
        saveAllData();
        renderUsersTable();
        addAuditLog('حذف کاربر', 'کاربر ' + user.username + ' حذف شد.');
        alertBox({ icon: 'success', title: 'حذف شد', text: 'کاربر حذف گردید.', timer: 1400, showConfirmButton: false });
    });
}

/* ============================ لاگ امنیتی ============================ */
function renderAuditLogsTable() {
    var tbody = $('auditTableBody');
    if (!tbody) return;

    if (!auditLogsData.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="p-6 text-center text-slate-400">رویدادی ثبت نشده است.</td></tr>';
        return;
    }

    var html = '';
    auditLogsData.slice(0, 300).forEach(function (log) {
        html += '<tr class="hover:bg-slate-50 transition-colors">' +
            '<td class="p-3 font-mono text-slate-500 whitespace-nowrap">' + esc(log.timestamp || '-') + '</td>' +
            '<td class="p-3 font-medium text-slate-700">' + esc(log.user || '-') + '</td>' +
            '<td class="p-3"><span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 border border-slate-200">' + esc(log.action || '-') + '</span></td>' +
            '<td class="p-3 text-slate-600">' + esc(log.details || '-') + '</td>' +
            '</tr>';
    });
    tbody.innerHTML = html;
}

function clearAuditLogs() {
    if (!isAdmin()) return;
    Swal.fire({
        title: 'پاکسازی لاگ‌ها',
        text: 'تمام رویدادهای ثبت شده حذف می‌شوند. این عملیات قابل بازگشت نیست.',
        icon: 'warning', showCancelButton: true,
        confirmButtonText: 'بله، پاک شود', cancelButtonText: 'انصراف',
        confirmButtonColor: '#e11d48', cancelButtonColor: '#64748b'
    }).then(function (r) {
        if (!r.isConfirmed) return;
        auditLogsData = [];
        saveAllData();
        renderAuditLogsTable();
        addAuditLog('پاکسازی لاگ‌ها', 'تمام لاگ‌های امنیتی توسط مدیر پاک شد.');
    });
}

/* ============================ تغییر کلمه عبور ============================ */
function openChangePasswordModal() {
    if (!currentUser) return;
    if ($('oldPasswordInput')) $('oldPasswordInput').value = '';
    if ($('newPasswordInput')) $('newPasswordInput').value = '';
    if ($('confirmPasswordInput')) $('confirmPasswordInput').value = '';
    var m = $('changePasswordModal');
    if (m) m.classList.remove('hidden');
}

function closeChangePasswordModal() {
    var m = $('changePasswordModal');
    if (m) m.classList.add('hidden');
}

function submitChangePassword(event) {
    if (event) event.preventDefault();
    if (!currentUser) return;

    var oldPass = $('oldPasswordInput') ? $('oldPasswordInput').value.trim() : '';
    var newPass = $('newPasswordInput') ? $('newPasswordInput').value.trim() : '';
    var confirmPass = $('confirmPasswordInput') ? $('confirmPasswordInput').value.trim() : '';

    var userObj = usersData.filter(function (u) { return norm(u.username) === norm(currentUser.username); })[0];
    if (!userObj || String(userObj.password) !== oldPass) {
        alertBox({ icon: 'error', title: 'خطا', text: 'کلمه عبور فعلی نادرست است.', confirmButtonColor: '#059669' });
        return;
    }
    if (newPass.length < 6) {
        alertBox({ icon: 'warning', title: 'کلمه عبور کوتاه', text: 'کلمه عبور جدید باید حداقل ۶ کاراکتر باشد.', confirmButtonColor: '#059669' });
        return;
    }
    if (newPass !== confirmPass) {
        alertBox({ icon: 'error', title: 'عدم تطابق', text: 'تکرار کلمه عبور جدید مطابقت ندارد.', confirmButtonColor: '#059669' });
        return;
    }
    if (newPass === oldPass) {
        alertBox({ icon: 'warning', title: 'رمز تکراری', text: 'کلمه عبور جدید با رمز فعلی یکسان است.', confirmButtonColor: '#059669' });
        return;
    }

    userObj.password = newPass;
    saveAllData();
    closeChangePasswordModal();
    addAuditLog('تغییر کلمه عبور', 'کلمه عبور کاربر ' + currentUser.fullName + ' تغییر یافت.');
    alertBox({ icon: 'success', title: 'موفقیت‌آمیز', text: 'کلمه عبور جدید ذخیره شد.', timer: 1500, showConfirmButton: false });
}

/* سازگاری با نسخه‌های قبلی */
function handleChangePassword(event) { submitChangePassword(event); }

/* ============================ خروجی اکسل ============================ */
function exportToExcel() {
    var isGeo = (currentTab !== 'treatment');
    var list = filteredList.slice();
    if (!list.length) {
        alertBox({ icon: 'warning', title: 'داده‌ای موجود نیست', text: 'پس از اعمال فیلترها رکوردی برای خروجی وجود ندارد.', confirmButtonColor: '#059669' });
        return;
    }

    var title = isGeo
        ? 'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی - شماره (۲)'
        : 'لیست مشخصات پزشکان تمام وقت درمانی - شماره (۱)';

    var columns, rows;
    if (isGeo) {
        columns = ['ردیف', 'نام', 'نام خانوادگی', 'رشته تخصص', 'کد ملی', 'نظام پزشکی', 'مرتبه علمی', 'نوع خدمت', 'شروع بکار', 'ورود مجدد', 'تاریخ خروج', 'وضعیت', 'ملاحظات'];
        rows = list.map(function (d, idx) {
            return [idx + 1, d.firstName || '', d.lastName || '', d.specialty || '', d.nationalCode || '',
                d.medicalCode || '', d.academicRank || '', d.serviceType || '', d.startDate || '',
                d.reEntryDate || '', d.exitDate || '', statusText(d), d.remarks || ''];
        });
    } else {
        columns = ['ردیف', 'نام', 'نام خانوادگی', 'تخصص', 'شهرستان', 'شهرستان دوم', 'کد ملی', 'نظام پزشکی', 'شروع تمام وقتی', 'ورود مجدد', 'تاریخ خروج', 'وضعیت', 'توضیحات'];
        rows = list.map(function (d, idx) {
            return [idx + 1, d.firstName || '', d.lastName || '', d.specialty || '', d.city || '', d.city2 || '',
                d.nationalCode || '', d.medicalCode || '', d.startDate || '', d.reEntryDate || '',
                d.exitDate || '', statusText(d), d.remarks || ''];
        });
    }

    var fileName = (isGeo ? 'پزشکان_هیات_علمی_جغرافیایی_' : 'پزشکان_تمام_وقت_درمانی_') + todayJalali().replace(/\//g, '') + '.xlsx';

    var fallback = function () {
        if (typeof XLSX === 'undefined') {
            alertBox({ icon: 'error', title: 'خطا', text: 'کتابخانه اکسل بارگذاری نشده است.', confirmButtonColor: '#059669' });
            return;
        }
        var aoa = [[title], ['دانشگاه علوم پزشکی و خدمات بهداشتی درمانی کردستان - معاونت درمان    تاریخ: ' + todayJalali()], [], columns].concat(rows);
        var ws = XLSX.utils.aoa_to_sheet(aoa);
        ws['!views'] = [{ RTL: true }];
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, isGeo ? 'جغرافیایی' : 'درمانی');
        XLSX.writeFile(wb, fileName);
    };

    writeXlsxRtl({
        sheetName: isGeo ? 'جغرافیایی' : 'درمانی',
        title: title,
        subtitle: 'دانشگاه علوم پزشکی و خدمات بهداشتی درمانی کردستان - معاونت درمان',
        columns: columns,
        rows: rows,
        rawDocs: list,
        fileName: fileName,
        footer: 'سامانه جامع پزشکان تمام وقت — معاونت درمان    |    تعداد رکورد: ' + faNum(rows.length)
    }, function () {
        addAuditLog('خروجی اکسل', 'صدور فایل ' + fileName + ' با ' + faNum(list.length) + ' رکورد.');
    }, fallback);
}

/* ============================ چاپ / PDF ============================ */
function printReport() {
    var isGeo = (currentTab !== 'treatment');
    var heading = isGeo
        ? 'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی - شماره (۲)'
        : 'لیست مشخصات پزشکان تمام وقت درمانی - شماره (۱)';

    if ($('printTableHeading')) $('printTableHeading').textContent = heading;
    if ($('printDateSpan')) $('printDateSpan').textContent = 'تاریخ گزارش: ' + todayJalali();
    if ($('printCountSpan')) $('printCountSpan').textContent = 'تعداد کل رکوردها: ' + faNum(filteredList.length);
    if ($('tableTitle')) $('tableTitle').textContent = heading;
    if ($('tableSubtitle')) $('tableSubtitle').textContent = 'معاونت درمان دانشگاه علوم پزشکی کردستان';

    var prevSize = pageSize;
    var prevPage = currentPage;

    /* چاپ کامل تمام رکوردهای فیلترشده */
    pageSize = 'all';
    currentPage = 1;
    renderTable();

    var restore = function () {
        pageSize = prevSize;
        currentPage = prevPage;
        if ($('recordsPerPage')) $('recordsPerPage').value = prevSize;
        renderTable();
        window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);

    addAuditLog('چاپ گزارش', 'تهیه گزارش چاپی با ' + filteredList.length + ' رکورد.');
    setTimeout(function () { window.print(); }, 250);
}

/* سازگاری با نسخه‌های قبلی */
function exportToPDF() { printReport(); }

/* ============================ نمودارها ============================ */
function destroyCharts() {
    Object.keys(charts).forEach(function (k) {
        try { if (charts[k] && charts[k].destroy) charts[k].destroy(); } catch (e) { /* ignore */ }
    });
    charts = {};
}

function renderAnalyticsCharts() {
    if (typeof Chart === 'undefined') {
        var host = $('viewStats');
        if (host && !host.querySelector('.chart-missing')) {
            var div = document.createElement('div');
            div.className = 'chart-missing bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3 rounded-xl';
            div.textContent = 'کتابخانه نمودار (Chart.js) بارگذاری نشده است. برای نمایش نمودارها اتصال به شبکه را بررسی کنید.';
            host.insertBefore(div, host.firstChild);
        }
        return;
    }

    destroyCharts();
    var all = geographicData.concat(treatmentData);

    /* 1) مرتبه علمی */
    var rankCount = {};
    geographicData.forEach(function (d) {
        var r = (d.academicRank || 'نامشخص').trim();
        var key = norm(r).replace('استاديار', 'استادیار').replace('دانشيار', 'دانشیار');
        var label = key === 'استاديار' ? 'استادیار' : (key === 'دانشيار' ? 'دانشیار' : r);
        rankCount[label] = (rankCount[label] || 0) + 1;
    });

    var rankCanvas = $('chartRanks');
    if (rankCanvas) {
        charts.ranks = new Chart(rankCanvas, {
            type: 'bar',
            data: {
                labels: Object.keys(rankCount),
                datasets: [{ label: 'تعداد پزشک', data: Object.keys(rankCount).map(function (k) { return rankCount[k]; }), backgroundColor: 'rgba(13,148,136,0.75)', borderRadius: 6 }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
            }
        });
    }

    /* 2) توزیع شهرستان‌ها */
    var cityCount = {};
    treatmentData.forEach(function (d) {
        var parts = cityParts(d.city);
        if (!parts.length) return;
        var primary = parts[0];
        cityCount[primary] = (cityCount[primary] || 0) + 1;
    });
    var cityLabels = Object.keys(cityCount).sort(function (a, b) { return cityCount[b] - cityCount[a]; });
    var cityCanvas = $('chartCities');
    if (cityCanvas) {
        charts.cities = new Chart(cityCanvas, {
            type: 'bar',
            data: {
                labels: cityLabels,
                datasets: [{ label: 'تعداد پزشک', data: cityLabels.map(function (k) { return cityCount[k]; }), backgroundColor: 'rgba(2,132,199,0.75)', borderRadius: 6 }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
            }
        });
    }

    /* 3) وضعیت اشتغال */
    var active = all.filter(function (d) { return !isDoctorNonActive(d); }).length;
    var exited = all.filter(function (d) { return String(d.exitDate || '').trim(); }).length;
    var absent = all.filter(function (d) { return !String(d.exitDate || '').trim() && isAbsentOnly(d); }).length;
    var statusCanvas = $('chartStatus');
    if (statusCanvas) {
        charts.status = new Chart(statusCanvas, {
            type: 'doughnut',
            data: {
                labels: ['شاغل فعال', 'خارج شده', 'غایب'],
                datasets: [{ data: [active, exited, absent], backgroundColor: ['#10b981', '#f43f5e', '#f59e0b'], borderWidth: 2, borderColor: '#ffffff' }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
        });
    }

    /* 4) تخصص‌ها */
    var specCount = {};
    all.forEach(function (d) {
        var s = (d.specialty || 'نامشخص').trim();
        specCount[s] = (specCount[s] || 0) + 1;
    });
    var specLabels = Object.keys(specCount).sort(function (a, b) { return specCount[b] - specCount[a]; }).slice(0, 10);
    var specCanvas = $('chartSpecialties');
    if (specCanvas) {
        charts.specialties = new Chart(specCanvas, {
            type: 'bar',
            data: {
                labels: specLabels,
                datasets: [{ label: 'تعداد پزشک', data: specLabels.map(function (k) { return specCount[k]; }), backgroundColor: 'rgba(79,70,229,0.75)', borderRadius: 6 }]
            },
            options: {
                indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, ticks: { precision: 0 } } }
            }
        });
    }
}

/* ============================ ورود اطلاعات از اکسل ============================ */
function openImportModal() {
    if (!isAdmin()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'بارگذاری اطلاعات از اکسل تنها برای مدیر ارشد مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    parsedExcelData = [];
    sheetState = null;
    if ($('excelFileInput')) $('excelFileInput').value = '';
    if ($('importFileInfo')) $('importFileInfo').classList.add('hidden');
    if ($('importMappingPanel')) $('importMappingPanel').classList.add('hidden');
    if ($('btnExecuteImport')) $('btnExecuteImport').disabled = true;
    if ($('importTargetType')) $('importTargetType').value = (currentTab === 'geographic') ? 'geographic' : 'treatment';
    var m = $('importModal');
    if (m) m.classList.remove('hidden');
}

function closeImportModal() {
    var m = $('importModal');
    if (m) m.classList.add('hidden');
}

/* ---------- تشخیص و نگاشت ستون‌های فایل اکسل ---------- */

/**
 * کلیدواژه‌های سرستون‌ها برای تشخیص سطر عنوان.
 * سطر عنوان سطری است که بیشترین تطبیق را با این کلیدواژه‌ها دارد
 * (فایل‌های دانشگاه معمولاً ۲ تا ۳ سطر عنوان/سربرگ دارند).
 */
var EXCEL_HEADER_KEYWORDS = ['ردیف', 'نام', 'خانوادگی', 'تخصص', 'رشته', 'شهرستان', 'کد ملی', 'نظام', 'شروع', 'خروج', 'ملاحظات', 'توضیحات', 'مرتبه', 'خدمت'];

var EXCEL_FIELDS = {
    firstName: { label: 'نام', candidates: ['نام کوچک', 'نام'], exclude: ['خانوادگ', 'فامیل', 'کامل'] },
    lastName: { label: 'نام خانوادگی', candidates: ['نام خانوادگی', 'خانوادگی', 'فامیل'], exclude: [] },
    specialty: { label: 'تخصص / رشته', candidates: ['رشته تخصص', 'رشته', 'تخصص'], exclude: [] },
    city: { label: 'شهرستان', candidates: ['شهرستان', 'محل خدمت', 'شهر'], exclude: [] },
    nationalCode: { label: 'کد ملی', candidates: ['کد ملی', 'کدملی', 'شناسه ملی'], exclude: [] },
    medicalCode: { label: 'نظام پزشکی', candidates: ['نظام پزشکی', 'شماره نظام', 'نظام'], exclude: [] },
    academicRank: { label: 'مرتبه علمی', candidates: ['مرتبه علمی', 'مرتبه'], exclude: [] },
    serviceType: { label: 'نوع خدمت', candidates: ['نوع خدمت', 'خدمت'], exclude: [] },
    startDate: { label: 'تاریخ شروع', candidates: ['شروع تمام وقتی', 'شروع بکار', 'شروع'], exclude: [] },
    reEntryDate: { label: 'ورود مجدد', candidates: ['ورود مجدد'], exclude: [] },
    exitDate: { label: 'تاریخ خروج', candidates: ['تاریخ خروج', 'خروج'], exclude: [] },
    remarks: { label: 'ملاحظات', candidates: ['ملاحظات', 'توضیحات', 'توضیح'], exclude: [] },
    radif: { label: 'ردیف', candidates: ['ردیف'], exclude: [] }
};

function cellText(v) { return String(v === undefined || v === null ? '' : v).trim(); }

/** نام ستون از شماره ستون (0 -> A) */
function colLetter(idx) {
    var letters = '';
    var n = idx;
    do {
        letters = String.fromCharCode(65 + (n % 26)) + letters;
        n = Math.floor(n / 26) - 1;
    } while (n >= 0);
    return letters;
}

/** بهترین سطر عنوان در ۱۵ سطر اول */
function detectHeaderRow(rows) {
    var bestIndex = 0, bestScore = -1;
    var limit = Math.min(rows.length, 15);
    for (var i = 0; i < limit; i++) {
        var row = rows[i] || [];
        var nonEmpty = row.filter(function (c) { return cellText(c) !== ''; }).length;
        if (nonEmpty < 2) continue;
        var line = norm(row.map(cellText).join(' '));
        var score = 0;
        EXCEL_HEADER_KEYWORDS.forEach(function (k) { if (line.indexOf(norm(k)) !== -1) score++; });
        /* هرچه سطر عنوان پایین‌تر و پرتر باشد ولی عنوان نباشد، جریمه می‌شود */
        if (score > bestScore) { bestScore = score; bestIndex = i; }
    }
    return { index: bestIndex, score: bestScore };
}

/**
 * یافتن شماره ستون برای یک فیلد.
 * ابتدا تطبیق کامل (exact) و سپس تطبیق جزئی، با احترام به ستون‌های مستثنی.
 * همین منطق باعث می‌شود ستون «نام» هرگز با «نام خانوادگی» اشتباه نشود.
 */
function findColumn(header, field) {
    var candidates = field.candidates || [];
    var exclude = field.exclude || [];
    var isExcluded = function (label) {
        return exclude.some(function (x) { return label.indexOf(norm(x)) !== -1; });
    };

    var c, n;
    for (n = 0; n < candidates.length; n++) {
        var exact = norm(candidates[n]);
        for (c = 0; c < header.length; c++) {
            if (!header[c] || isExcluded(header[c])) continue;
            if (header[c] === exact) return c;
        }
    }
    for (n = 0; n < candidates.length; n++) {
        var key = norm(candidates[n]);
        for (c = 0; c < header.length; c++) {
            if (!header[c] || isExcluded(header[c])) continue;
            if (header[c].indexOf(key) !== -1) return c;
        }
    }
    return -1;
}

function autoMapColumns(header) {
    var map = {};
    Object.keys(EXCEL_FIELDS).forEach(function (k) { map[k] = findColumn(header, EXCEL_FIELDS[k]); });
    return map;
}

/** برچسب نمایشی ستون برای منوها */
function columnLabel(headerLabels, idx) {
    var label = cellText(headerLabels[idx]);
    var letter = colLetter(idx);
    return label ? (label + ' (ستون ' + letter + ')') : ('ستون ' + letter);
}

function columnOptionsHtml(headerLabels, selectedIndex, allowNone) {
    var html = '';
    if (allowNone) {
        html += '<option value="-1"' + (selectedIndex === -1 ? ' selected' : '') + '>— ندارد / تفکیک خودکار از نام کامل —</option>';
    } else if (selectedIndex === undefined || selectedIndex === null || selectedIndex < 0) {
        html += '<option value="-1" selected>— ستون را انتخاب کنید —</option>';
    }
    for (var i = 0; i < headerLabels.length; i++) {
        if (!cellText(headerLabels[i]) && !allowNone && i === 0) continue;
        html += '<option value="' + i + '"' + (i === selectedIndex ? ' selected' : '') + '>' + esc(columnLabel(headerLabels, i)) + '</option>';
    }
    return html;
}

/** ساخت رکوردها بر اساس نگاشت انتخابی کاربر */
function buildRecordsFromSheet() {
    if (!sheetState) return [];

    var header = sheetState.header;
    var rows = sheetState.rows;
    var map = sheetState.mapping;
    var auto = sheetState.autoMap;

    var readByIndex = function (idx, row) {
        if (idx === undefined || idx === null || idx < 0) return '';
        return cellText(row[idx]);
    };

    var out = [];
    rows.slice(sheetState.dataStart).forEach(function (row) {
        if (!row || !row.length) return;
        var hasValue = row.some(function (c) { return cellText(c) !== ''; });
        if (!hasValue) return;

        var fnIdx = Number(map.firstName);
        var lnIdx = Number(map.lastName);

        var firstName = readByIndex(fnIdx, row);
        var lastName = readByIndex(lnIdx, row);

        /* اگر هر دو به یک ستون اشاره کنند یا ستون نام خانوادگی انتخاب نشده باشد،
           نام کامل از یک ستون تفکیک می‌شود: نخستین بخش = نام، بقیه = نام خانوادگی */
        if (fnIdx >= 0 && (lnIdx === fnIdx || lnIdx < 0)) {
            var full = firstName || readByIndex(lnIdx, row);
            var parts = full.split(/\s+/).filter(Boolean);
            firstName = parts[0] || '';
            lastName = parts.slice(1).join(' ');
        } else if (fnIdx < 0 && lnIdx >= 0) {
            var full2 = lastName;
            var parts2 = full2.split(/\s+/).filter(Boolean);
            firstName = parts2[0] || '';
            lastName = parts2.slice(1).join(' ');
        }

        if (!firstName && !lastName) return;

        var rec = {
            radif: readByIndex(auto.radif, row) || String(out.length + 1),
            firstName: firstName,
            lastName: lastName,
            specialty: readByIndex(auto.specialty, row),
            city: readByIndex(auto.city, row) || 'سنندج',
            nationalCode: readByIndex(auto.nationalCode, row).replace(/[^0-9]/g, ''),
            medicalCode: readByIndex(auto.medicalCode, row).replace(/[^0-9]/g, ''),
            academicRank: readByIndex(auto.academicRank, row) || 'استادیار',
            serviceType: readByIndex(auto.serviceType, row) || 'هيأت علمي ت ج',
            startDate: readByIndex(auto.startDate, row),
            reEntryDate: readByIndex(auto.reEntryDate, row),
            exitDate: readByIndex(auto.exitDate, row),
            remarks: readByIndex(auto.remarks, row)
        };

        /* اگر ستون شهرستان وجود نداشت، مقدار پیش‌فرض حذف می‌شود */
        if (auto.city < 0) delete rec.city;

        out.push(rec);
    });

    return out;
}

/** به‌روزرسانی پیش‌نمایش پس از تغییر نگاشت */
function updateImportPreview() {
    if (!sheetState) return;

    var fnSel = $('mapFirstName');
    var lnSel = $('mapLastName');
    if (fnSel) sheetState.mapping.firstName = Number(fnSel.value);
    if (lnSel) sheetState.mapping.lastName = Number(lnSel.value);

    var records = buildRecordsFromSheet();
    parsedExcelData = records;

    var preview = $('importPreview');
    if (preview) {
        var rowsHtml = '';
        records.slice(0, 3).forEach(function (r) {
            rowsHtml += '<tr>' +
                '<td class="p-1.5 font-bold text-slate-800">' + esc(r.firstName || '-') + '</td>' +
                '<td class="p-1.5 font-bold text-slate-800">' + esc(r.lastName || '-') + '</td>' +
                '<td class="p-1.5 text-slate-600">' + esc(r.specialty || '-') + '</td>' +
                '<td class="p-1.5 text-slate-600">' + esc(r.city || '-') + '</td>' +
                '</tr>';
        });
        preview.innerHTML =
            '<p class="font-bold text-slate-700 mb-1">پیش‌نمایش ۳ رکورد اول (بر اساس نگاشت بالا):</p>' +
            '<table class="w-full text-right text-[11px] border border-slate-200 rounded-lg overflow-hidden">' +
            '<thead class="bg-slate-100 text-slate-700"><tr><th class="p-1.5">نام</th><th class="p-1.5">نام خانوادگی</th><th class="p-1.5">تخصص</th><th class="p-1.5">شهرستان</th></tr></thead>' +
            '<tbody class="divide-y divide-slate-100">' + (rowsHtml || '<tr><td colspan="4" class="p-2 text-center text-slate-400">رکورد قابل خواندن یافت نشد</td></tr>') + '</tbody>' +
            '</table>';
    }

    if ($('importFileRowCount')) {
        $('importFileRowCount').textContent = faNum(records.length) + ' رکورد آماده بارگذاری';
    }
    if ($('btnExecuteImport')) $('btnExecuteImport').disabled = (records.length === 0);
}

/** پر کردن پنل نگاشت ستون‌ها داخل مودال ورود اطلاعات */
function renderImportMapping(headerLabels, mapping) {
    var panel = $('importMappingPanel');
    if (!panel) return;

    if ($('mapFirstName')) {
        $('mapFirstName').innerHTML = columnOptionsHtml(headerLabels, mapping.firstName, false);
    }
    if ($('mapLastName')) {
        $('mapLastName').innerHTML = columnOptionsHtml(headerLabels, mapping.lastName, true);
    }
    panel.classList.remove('hidden');

    /* انتخاب مقدار بر اساس نگاشت خودکار (اگر گزینه‌ای انتخاب نشده بود) */
    if ($('mapFirstName') && mapping.firstName >= 0) $('mapFirstName').value = String(mapping.firstName);
    if ($('mapLastName')) $('mapLastName').value = String(mapping.lastName);
}

/** خواندن فایل اکسل و آماده‌سازی نگاشت */
function handleExcelFileSelect(event) {
    var file = event.target.files && event.target.files[0];
    if (!file) return;

    if (typeof XLSX === 'undefined') {
        alertBox({ icon: 'error', title: 'خطا', text: 'کتابخانه خواندن اکسل بارگذاری نشده است.', confirmButtonColor: '#059669' });
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        try {
            var wb = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
            var ws = wb.Sheets[wb.SheetNames[0]];
            var rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
            if (!rows || rows.length < 2) {
                alertBox({ icon: 'warning', title: 'فایل خالی', text: 'فایل انتخابی فاقد رکورد معتبر است.', confirmButtonColor: '#059669' });
                return;
            }

            var headerInfo = detectHeaderRow(rows);
            if (headerInfo.score <= 0) {
                alertBox({ icon: 'error', title: 'سرستون یافت نشد', text: 'سطر عنوان ستون‌ها در فایل شناسایی نشد. ساختار فایل را بررسی کنید.', confirmButtonColor: '#059669' });
                return;
            }

            var headerLabels = (rows[headerInfo.index] || []).map(cellText);
            var header = headerLabels.map(norm);
            var mapping = autoMapColumns(header);

            sheetState = {
                header: header,
                headerLabels: headerLabels,
                rows: rows,
                dataStart: headerInfo.index + 1,
                autoMap: mapping,
                mapping: { firstName: mapping.firstName, lastName: mapping.lastName }
            };

            /* اگر ستون نام شناسایی نشد اما ستون نام خانوادگی پیدا شد، همان را مبنا می‌گذاریم */
            if (sheetState.mapping.firstName < 0 && sheetState.mapping.lastName >= 0) {
                sheetState.mapping.firstName = sheetState.mapping.lastName;
            }

            renderImportMapping(headerLabels, sheetState.mapping);

            if ($('importFileName')) $('importFileName').textContent = file.name;
            if ($('importFileInfo')) $('importFileInfo').classList.remove('hidden');

            updateImportPreview();

            if (!parsedExcelData.length) {
                alertBox({ icon: 'error', title: 'بدون رکورد', text: 'هیچ رکوردی با نگاشت فعلی خوانده نشد.', confirmButtonColor: '#059669' });
            }
        } catch (err) {
            console.error(err);
            alertBox({ icon: 'error', title: 'خطا در خواندن فایل', text: 'ساختار فایل معتبر نیست: ' + err.message, confirmButtonColor: '#059669' });
        }
    };
    reader.readAsArrayBuffer(file);
}

function executeExcelImport() {
    if (!sheetState) return;

    /* خواندن نهایی بر اساس نگاشت جاری کاربر */
    updateImportPreview();
    var records = buildRecordsFromSheet();
    if (!records.length) {
        alertBox({ icon: 'warning', title: 'داده‌ای موجود نیست', text: 'با نگاشت فعلی رکوردی برای بارگذاری وجود ندارد.', confirmButtonColor: '#059669' });
        return;
    }

    var targetType = $('importTargetType') ? $('importTargetType').value : 'treatment';
    var modeEl = document.querySelector('input[name="importMode"]:checked');
    var importMode = modeEl ? modeEl.value : 'merge';

    var target = (targetType === 'geographic') ? geographicData : treatmentData;
    var nextId = 1;
    geographicData.concat(treatmentData).forEach(function (d) { if (Number(d.id) >= nextId) nextId = Number(d.id) + 1; });

    var proceed = function () {
        var added = 0, updated = 0;

        if (importMode === 'replace') {
            var replaced = records.map(function (doc) {
                return {
                    id: nextId++, radif: doc.radif, firstName: doc.firstName, lastName: doc.lastName,
                    specialty: doc.specialty, nationalCode: doc.nationalCode, medicalCode: doc.medicalCode,
                    startDate: doc.startDate, exitDate: doc.exitDate, remarks: doc.remarks, reEntryDate: doc.reEntryDate,
                    serviceType: doc.serviceType, academicRank: doc.academicRank,
                    city: doc.city
                };
            });
            if (targetType === 'geographic') geographicData = replaced;
            else treatmentData = replaced;
            updated = replaced.length;
        } else {
            records.forEach(function (doc) {
                var found = target.filter(function (d) {
                    return (doc.nationalCode && String(d.nationalCode || '') === doc.nationalCode) ||
                        (doc.medicalCode && String(d.medicalCode || '') === doc.medicalCode);
                })[0];
                if (found) {
                    ['firstName', 'lastName', 'specialty', 'nationalCode', 'medicalCode', 'startDate',
                        'exitDate', 'remarks', 'reEntryDate'].forEach(function (k) { if (doc[k]) found[k] = doc[k]; });
                    if (targetType === 'geographic') {
                        found.academicRank = doc.academicRank || found.academicRank;
                        found.serviceType = doc.serviceType || found.serviceType;
                    } else if (doc.city) {
                        found.city = doc.city;
                    }
                    updated++;
                } else {
                    var rec = {
                        id: nextId++, radif: doc.radif, firstName: doc.firstName, lastName: doc.lastName,
                        specialty: doc.specialty, nationalCode: doc.nationalCode, medicalCode: doc.medicalCode,
                        startDate: doc.startDate, exitDate: doc.exitDate, remarks: doc.remarks, reEntryDate: doc.reEntryDate
                    };
                    if (targetType === 'geographic') {
                        rec.academicRank = doc.academicRank;
                        rec.serviceType = doc.serviceType;
                    } else {
                        rec.city = doc.city || 'سنندج';
                    }
                    if (targetType === 'geographic') geographicData.push(rec);
                    else treatmentData.push(rec);
                    added++;
                }
            });
        }

        saveAllData();
        addAuditLog('بارگذاری از اکسل',
            'همگام‌سازی ' + records.length + ' رکورد در بخش ' +
            (targetType === 'geographic' ? 'هیأت علمی جغرافیایی' : 'تمام وقت درمانی') +
            ' (افزوده: ' + added + ' / بروزرسانی: ' + updated + ')');

        closeImportModal();
        parsedExcelData = [];
        sheetState = null;
        renderSpecialtiesFilter();
        renderRankFilter();
        renderCityFilter();
        updateKPIs();
        applyFilters();

        alertBox({
            icon: 'success', title: 'بارگذاری انجام شد',
            html: 'رکوردهای افزوده‌شده: <b>' + faNum(added) + '</b><br>رکوردهای بروزرسانی‌شده: <b>' + faNum(updated) + '</b>',
            confirmButtonColor: '#059669'
        });
    };

    if (typeof Swal === 'undefined') {
        if (window.confirm('بارگذاری ' + records.length + ' رکورد انجام شود؟')) proceed();
        return;
    }

    Swal.fire({
        title: 'تأیید بارگذاری',
        html: 'بارگذاری <b>' + faNum(records.length) + '</b> رکورد در بخش <b>' +
            (targetType === 'geographic' ? 'هیأت علمی جغرافیایی' : 'تمام وقت درمانی') + '</b>' +
            '<br>حالت: <b>' + (importMode === 'replace' ? 'جایگزینی کامل لیست' : 'افزودن و بروزرسانی') + '</b>',
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'بله، بارگذاری شود', cancelButtonText: 'انصراف',
        confirmButtonColor: '#059669', cancelButtonColor: '#64748b'
    }).then(function (r) { if (r.isConfirmed) proceed(); });
}

/* ============================ دانلود نسخه مستقل HTML ============================ */
function downloadUpdatedHtmlPackage() {
    var build = function (appJsText, tailwindCss) {
        var clone = document.documentElement.cloneNode(true);

        /* پاک‌سازی محتوای داینامیک */
        ['tableBody', 'tableHead', 'usersTableBody', 'auditTableBody', 'paginationContainer', 'emptyState'].forEach(function (id) {
            var el = clone.querySelector('#' + id);
            if (el) el.innerHTML = '';
        });
        /* تبدیل مسیرهای محلی vendor به CDN تا فایل مستقل بدون پوشه vendor هم کار کند */
        var CDN_MAP = [
            { match: 'xlsx.full.min.js', url: 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js' },
            { match: 'chart.umd.min.js', url: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js' },
            { match: 'sweetalert2.all.min.js', url: 'https://cdn.jsdelivr.net/npm/sweetalert2@11' },
            { match: 'fontawesome/css/all.min.css', url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
            { match: 'fonts/vazirmatn.css', url: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap' }
        ];
        var libEls = clone.querySelectorAll('script[src], link[href]');
        for (var l = 0; l < libEls.length; l++) {
            var el2 = libEls[l];
            var attr = el2.hasAttribute('src') ? 'src' : 'href';
            var val = el2.getAttribute(attr) || '';
            if (val.toLowerCase().indexOf('vendor/') === -1) continue;
            for (var m = 0; m < CDN_MAP.length; m++) {
                if (val.indexOf(CDN_MAP[m].match) !== -1) {
                    el2.setAttribute(attr, CDN_MAP[m].url);
                    break;
                }
            }
        }

        var loginModal = clone.querySelector('#loginModal');
        if (loginModal) loginModal.classList.remove('hidden');
        ['doctorModal', 'importModal', 'userModal', 'changePasswordModal'].forEach(function (id) {
            var el = clone.querySelector('#' + id);
            if (el) el.classList.add('hidden');
        });

        /* درج CSS تیل‌ویند به‌صورت داخلی (فایل مستقل) */
        if (tailwindCss) {
            var cssLinks = clone.querySelectorAll('link[href*="tailwind"]');
            for (var c = 0; c < cssLinks.length; c++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = tailwindCss;
                cssLinks[c].parentNode.replaceChild(styleEl, cssLinks[c]);
            }
        }

        /* درج app.js به‌صورت داخلی (پشتیبانی از app.js و app.js?v=...) */
        var scripts = clone.querySelectorAll('script[src*="app.js"]');
        if (scripts.length && appJsText) {
            for (var s = 0; s < scripts.length; s++) {
                var inline = document.createElement('script');
                inline.textContent = '\n' + appJsText + '\n';
                scripts[s].parentNode.replaceChild(inline, scripts[s]);
            }
        }

        var html = '<!DOCTYPE html>\n' + clone.outerHTML;
        var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'index.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(function () { URL.revokeObjectURL(link.href); }, 4000);

        alertBox({
            icon: 'success', title: 'فایل index.html دانلود شد',
            html: '<div class="text-right text-xs leading-relaxed space-y-1">' +
                '<p class="font-bold text-slate-800">این فایل مستقل است:</p>' +
                '<ul class="list-disc list-inside text-slate-600 space-y-1">' +
                '<li>استایل (CSS) و کد برنامه (app.js) داخل همان فایل قرار گرفته است.</li>' +
                '<li>داده‌های اولیه نیز در همان فایل جای گرفته‌اند و بدون سرور باز می‌شود.</li>' +
                '<li>آیکون‌ها: از پوشه vendor/ استفاده می‌کند؛ اگر پوشه را آپلود نکنید، آیکون‌ها از اینترنت بارگذاری می‌شوند.</li>' +
                '</ul>' +
                '<p class="mt-2 text-slate-600">برای انتشار در گیت‌هاب، همین فایل را در شاخه اصلی آپلود و Commit کنید.</p>' +
                '</div>',
            confirmButtonText: 'متوجه شدم', confirmButtonColor: '#059669'
        });
    };

    if (typeof Swal !== 'undefined') {
        Swal.fire({ title: 'آماده‌سازی نسخه', text: 'در حال ساخت فایل مستقل index.html...', icon: 'info', showConfirmButton: false, timer: 700 });
    }

    setTimeout(function () {
        var getText = function (url) {
            if (typeof fetch !== 'function') return Promise.resolve('');
            return fetch(url).then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; });
        };

        Promise.all([getText('app.js'), getText('vendor/tailwind/tailwind.css')])
            .then(function (res) { build(res[0] || '', res[1] || ''); })
            .catch(function () { build('', ''); });
    }, 400);
}

/* ============================ گزارش‌گیری (Excel / PDF) ============================ */

/** حالت ترتیب گزارش‌ها: default | city | specialty */
let reportSort = 'default';

/** تغییر ترتیب گزارش‌ها از رابط کاربری */
function setReportSort(mode) {
    reportSort = (['default', 'city', 'specialty'].indexOf(mode) === -1) ? 'default' : mode;

    var labels = { default: 'پیش‌فرض (ردیف)', city: 'به ترتیب شهرستان', specialty: 'به ترتیب رشته تخصصی' };
    var els = { default: $('sortBtnDefault'), city: $('sortBtnCity'), specialty: $('sortBtnSpecialty') };
    Object.keys(els).forEach(function (k) {
        var btn = els[k];
        if (!btn) return;
        var active = (k === reportSort);
        btn.classList.toggle('bg-white', active);
        btn.classList.toggle('text-teal-700', active);
        btn.classList.toggle('shadow-xs', active);
        btn.classList.toggle('text-slate-500', !active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if ($('reportSortLabel')) $('reportSortLabel').textContent = labels[reportSort];

    renderReportsView();
    addAuditLog('ترتیب گزارش', 'ترتیب گزارش‌ها به «' + labels[reportSort] + '» تغییر یافت.');
}

/** متن وضعیت رکورد */
function statusText(doc) {
    if (isDoctorNonActive(doc)) {
        return String(doc.exitDate || '').trim() ? 'خارج شده' : 'غیر شاغل (غایب)';
    }
    return 'شاغل فعال';
}

/** اعمال محدوده دسترسی کاربر شهرستان روی یک فهرست */
function reportScopeFilter(list) {
    if (!isCityUser()) return list.slice();
    return list.filter(function (d) {
        return recordCities(d).some(function (c) { return c === canonCity(currentUser.city); });
    });
}

/** رکوردهای خارج‌شده از طرح تمام وقتی */
function exitedRecords() {
    var out = [];
    var seen = {};
    var addDoc = function (d, cat) {
        if (!d) return;
        var k = (d.nationalCode || '') + '|' + (d.medicalCode || '') + '|' + (d.id || '');
        if (seen[k]) return;
        seen[k] = true;
        var clone = Object.assign({}, d);
        if (cat) clone._archiveCategory = cat;
        out.push(clone);
    };

    reportScopeFilter(treatmentData).forEach(function (d) {
        if (isExitedDoc(d)) addDoc(d, 'treatment');
    });
    reportScopeFilter(geographicData).forEach(function (d) {
        if (isExitedDoc(d)) addDoc(d, 'geographic');
    });
    reportScopeFilter(archivedExitedData).forEach(function (d) {
        addDoc(d, d._archiveCategory || 'treatment');
    });
    return out;
}

/** مقایسه فارسی برای مرتب‌سازی */
function faCompare(a, b) {
    return String(a === undefined || a === null ? '' : a)
        .localeCompare(String(b === undefined || b === null ? '' : b), 'fa');
}

/**
 * ساخت ردیف‌های گزارش با در نظر گرفتن ترتیب انتخابی.
 * در ترتیب «شهرستان»، پزشک دارای شهر دوم در هر دو شهر یک ردیف مستقل دارد.
 */
function buildReportRows(list, columns, mapRow, opts) {
    opts = opts || {};
    var rows = [];

    if (reportSort === 'city' && opts.cityAware) {
        list.forEach(function (d) {
            var cities = recordCities(d);
            if (!cities.length) cities = [''];
            cities.forEach(function (c) {
                var r = mapRow(d, c);
                r.__doc = d;
                rows.push(r);
            });
        });
        var cityIdx = opts.cityColumnIndex;
        rows.sort(function (x, y) {
            var c = faCompare(x[cityIdx], y[cityIdx]);
            return c !== 0 ? c : faCompare(x[1] + ' ' + x[2], y[1] + ' ' + y[2]);
        });
    } else if (reportSort === 'specialty') {
        list.forEach(function (d) {
            var r = mapRow(d, recordCities(d)[0] || d.city || '');
            r.__doc = d;
            rows.push(r);
        });
        var spIdx = opts.specialtyColumnIndex;
        rows.sort(function (x, y) {
            var s = faCompare(x[spIdx], y[spIdx]);
            return s !== 0 ? s : faCompare(x[1] + ' ' + x[2], y[1] + ' ' + y[2]);
        });
    } else {
        list.forEach(function (d) {
            var r = mapRow(d, recordCities(d)[0] || d.city || '');
            r.__doc = d;
            rows.push(r);
        });
    }

    /* استخراج ارجاع اسناد خام و شماره‌گذاری مجدد ردیف‌ها */
    var rawDocs = [];
    rows.forEach(function (r, i) {
        rawDocs.push(r.__doc || null);
        delete r.__doc;
        r[0] = i + 1;
    });
    rows.__rawDocs = rawDocs;
    return rows;
}

/** تعریف ساختار چهار گزارش سامانه */
function getReportData(key) {
    var rep = { key: key, rows: [], columns: [], title: '', subtitle: '', fileBase: '', count: 0 };
    var cityAware = (reportSort === 'city');

    if (key === 'treatment') {
        var treat = reportScopeFilter(treatmentData);
        rep.title = 'گزارش پزشکان تمام وقت درمانی (شماره ۱)';
        rep.fileBase = 'گزارش_پزشکان_تمام_وقت_درمانی' + (cityAware ? '_به_ترتیب_شهرستان' : (reportSort === 'specialty' ? '_به_ترتیب_تخصص' : ''));
        rep.columns = ['ردیف', 'نام', 'نام خانوادگی', 'تخصص', 'شهرستان', 'شهرستان دوم', 'کد ملی', 'نظام پزشکی',
            'شروع تمام وقتی', 'ورود مجدد', 'تاریخ خروج', 'وضعیت', 'توضیحات'];
        rep.rows = buildReportRows(treat, rep.columns, function (d, cityForRow) {
            var partners = partnerCitiesOf(d, cityForRow);
            return [0, d.firstName || '', d.lastName || '', d.specialty || '',
                cityAware ? cityForRow : (d.city || ''), partners.join(' / '), d.nationalCode || '', d.medicalCode || '',
                d.startDate || '', d.reEntryDate || '', d.exitDate || '', statusText(d), d.remarks || ''];
        }, { cityAware: true, cityColumnIndex: 4, specialtyColumnIndex: 3 });

    } else if (key === 'geographic') {
        var geo = geographicData.slice();
        rep.title = 'گزارش پزشکان تمام وقت جغرافیایی (شماره ۲)';
        rep.fileBase = 'گزارش_پزشکان_تمام_وقت_جغرافیایی' + (reportSort === 'specialty' ? '_به_ترتیب_تخصص' : '');
        rep.columns = ['ردیف', 'نام', 'نام خانوادگی', 'رشته تخصص', 'کد ملی', 'نظام پزشکی', 'مرتبه علمی',
            'نوع خدمت', 'شروع بکار', 'ورود مجدد', 'تاریخ خروج', 'وضعیت', 'ملاحظات'];
        rep.rows = buildReportRows(geo, rep.columns, function (d) {
            return [0, d.firstName || '', d.lastName || '', d.specialty || '', d.nationalCode || '',
                d.medicalCode || '', d.academicRank || '', d.serviceType || '', d.startDate || '',
                d.reEntryDate || '', d.exitDate || '', statusText(d), d.remarks || ''];
        }, { cityAware: false, specialtyColumnIndex: 3 });

    } else if (key === 'exited') {
        var ex = exitedRecords();
        rep.title = 'گزارش پزشکان خارج‌شده از طرح تمام وقتی';
        rep.fileBase = 'گزارش_پزشکان_خارج_شده_از_طرح' + (cityAware ? '_به_ترتیب_شهرستان' : (reportSort === 'specialty' ? '_به_ترتیب_تخصص' : ''));
        rep.columns = ['ردیف', 'طرح', 'نام', 'نام خانوادگی', 'تخصص', 'شهرستان', 'شهرستان دوم', 'کد ملی',
            'نظام پزشکی', 'تاریخ خروج', 'وضعیت', 'ملاحظات'];
        rep.rows = buildReportRows(ex, rep.columns, function (d, cityForRow) {
            var isGeo = (d.city === '' || d.city === undefined);
            return [0, isGeo ? 'جغرافیایی' : 'درمانی', d.firstName || '', d.lastName || '', d.specialty || '',
                cityAware ? cityForRow : (d.city || ''), partnerCitiesOf(d, cityForRow).join(' / '), d.nationalCode || '',
                d.medicalCode || '', d.exitDate || '', statusText(d), d.remarks || ''];
        }, { cityAware: true, cityColumnIndex: 5, specialtyColumnIndex: 4 });

    } else if (key === 'deleted') {
        rep.title = 'گزارش پزشکان حذف‌شده از سامانه';
        rep.fileBase = 'گزارش_پزشکان_حذف_شده';
        rep.columns = ['ردیف', 'نام', 'نام خانوادگی', 'تخصص', 'شهرستان', 'شهرستان دوم', 'کد ملی', 'نظام پزشکی',
            'طرح', 'تاریخ حذف', 'حذف‌کننده'];
        rep.rows = buildReportRows(deletedData.slice().reverse(), rep.columns, function (d, cityForRow) {
            return [0, d.firstName || '', d.lastName || '', d.specialty || '', d.city || '',
                recordCities(d).filter(function (c) { return c !== canonCity(d.city || ''); }).join(' / '),
                d.nationalCode || '', d.medicalCode || '', d._deletedCategory || '',
                d._deletedAt || '', d._deletedBy || ''];
        }, { cityAware: false, specialtyColumnIndex: 3 });
    }

    rep.rawDocs = rep.rows.__rawDocs || [];
    rep.subtitle = 'دانشگاه علوم پزشکی و خدمات بهداشتی درمانی کردستان - معاونت درمان';
    rep.count = rep.rows.length;
    rep.sortLabel = { default: 'ردیف', city: 'شهرستان', specialty: 'رشته تخصصی' }[reportSort];
    return rep;
}

/** بروزرسانی شمارنده‌های کارت گزارش‌ها و وضعیت ترتیب */
function renderReportsView() {
    ['treatment', 'geographic', 'exited', 'deleted'].forEach(function (k) {
        var el = $('repCount_' + k);
        if (el) el.textContent = faNum(getReportData(k).count);
    });

    if ($('reportsDateSpan')) $('reportsDateSpan').textContent = 'تاریخ گزارش: ' + todayJalali();
    if ($('reportsUserSpan')) {
        $('reportsUserSpan').textContent = 'کاربر: ' + (currentUser ? currentUser.fullName : '-');
    }
    if ($('reportSortLabel')) {
        $('reportSortLabel').textContent = { default: 'پیش‌فرض (ردیف)', city: 'به ترتیب شهرستان', specialty: 'به ترتیب رشته تخصصی' }[reportSort];
    }
    if ($('reportCityNote')) {
        $('reportCityNote').style.display = (reportSort === 'city') ? '' : 'none';
    }

    var deletedCard = $('reportCardDeleted');
    if (deletedCard) deletedCard.style.display = isAdmin() ? '' : 'none';

    /* دکمه‌های ترتیب در بارگذاری اولیه هم همگام شوند */
    var els = { default: $('sortBtnDefault'), city: $('sortBtnCity'), specialty: $('sortBtnSpecialty') };
    Object.keys(els).forEach(function (k) {
        var btn = els[k];
        if (!btn) return;
        var active = (k === reportSort);
        btn.classList.toggle('bg-white', active);
        btn.classList.toggle('text-teal-700', active);
        btn.classList.toggle('shadow-xs', active);
        btn.classList.toggle('text-slate-500', !active);
    });
}

/* ------------------------- سربرگ استاندارد رسمی ------------------------- */

/** کد سند گزارش (برای درج در سربرگ) */
function reportDocCode(key) {
    var map = { treatment: 'RPT-01', geographic: 'RPT-02', exited: 'RPT-03', deleted: 'RPT-04' };
    return (map[key] || 'RPT-00') + '-' + todayJalali().replace(/\//g, '');
}

/** نشان رسمی (نسخه برداری‌شده به‌صورت SVG ساده، بدون فایل خارجی) */
function reportEmblemSvg() {
    return '<svg viewBox="0 0 64 64" width="46" height="46" aria-hidden="true">' +
        '<circle cx="32" cy="32" r="30" fill="#0f766e" opacity="0.08"/>' +
        '<circle cx="32" cy="32" r="24" fill="none" stroke="#0f766e" stroke-width="1.6"/>' +
        '<path d="M32 16 L34.6 26.4 L45 29 L34.6 31.6 L32 42 L29.4 31.6 L19 29 L29.4 26.4 Z" fill="#0f766e"/>' +
        '<path d="M32 44 v8 M28 48 h8" stroke="#0f766e" stroke-width="2.2" stroke-linecap="round"/>' +
        '</svg>';
}

/** سربرگ رسمی (تکرارشونده در هر صفحه با قرارگیری در thead) */
function reportLetterheadHtml(rep) {
    return '' +
        '<table class="lh"><tbody>' +
        '<tr>' +
        '<td class="lh-right">' +
        '<div class="lh-org">جمهوری اسلامی ایران</div>' +
        '<div class="lh-org">وزارت بهداشت، درمان و آموزش پزشکی</div>' +
        '<div class="lh-univ">دانشگاه علوم پزشکی و خدمات بهداشتی درمانی کردستان</div>' +
        '<div class="lh-dep">معاونت درمان — اداره نظارت بر درمان</div>' +
        '</td>' +
        '<td class="lh-center">' + reportEmblemSvg() + '</td>' +
        '<td class="lh-left">' +
        '<div>شماره نامه: <span class="mono">................</span></div>' +
        '<div>کد سند: <span class="mono">' + esc(reportDocCode(rep.key)) + '</span></div>' +
        '<div>تاریخ: ' + esc(todayJalali()) + '</div>' +
        '<div>پیوست: <span class="mono">—</span> | رکورد: ' + esc(faNum(rep.count)) + '</div>' +
        '</td>' +
        '</tr>' +
        '</tbody></table>' +
        '<div class="lh-title">' + esc(rep.title) + '</div>' +
        '<div class="lh-sub">' + esc(rep.subtitle) + ' — مرتب‌شده بر اساس: ' + esc(rep.sortLabel || 'ردیف') + '</div>';
}

/** ساخت HTML چاپی گزارش با سربرگ استاندارد */
function buildReportPrintHtml(rep) {
    var headCells = rep.columns.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('');

    var bodyRows = rep.rows.map(function (r, ri) {
        var rawDoc = (rep.rawDocs && rep.rawDocs[ri]) ? rep.rawDocs[ri] : null;
        var hasExitedText = r.some(function (c) { return String(c).indexOf('خارج') !== -1 || String(c).indexOf('غیر شاغل') !== -1; });
        var isEx = rawDoc ? isExitedDoc(rawDoc) : (hasExitedText || rep.key === 'exited');
        var isRecent = rawDoc ? isRecentStatusChange(rawDoc) : false;

        var rClass = '';
        if (isEx) rClass = ' class="row-exited"';
        else if (isRecent) rClass = ' class="row-recent"';

        return '<tr' + rClass + '>' + r.map(function (cell, ci) {
            var val = esc(cell === undefined || cell === null ? '' : cell);
            /* افزودن تگ متمایز کننده در ستون نام و خانوادگی */
            if ((ci === 1 || ci === 2) && isEx && String(cell || '').trim()) {
                val = '<b>' + val + '</b>' + (ci === 2 ? ' <span class="tag-ex">[خارج‌شده]</span>' : '');
            } else if ((ci === 1 || ci === 2) && isRecent && String(cell || '').trim()) {
                val = '<b>' + val + '</b>' + (ci === 2 ? ' <span class="tag-rec">[★ جدید]</span>' : '');
            }
            return '<td>' + val + '</td>';
        }).join('') + '</tr>';
    }).join('');

    var letterhead = reportLetterheadHtml(rep);

    return '<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="utf-8">' +
        '<title>' + esc(rep.title) + '</title><style>' +
        '@page { size: A4 landscape; margin: 10mm 8mm 12mm 8mm; }' +
        'body { font-family: Tahoma, "Vazirmatn", sans-serif; font-size: 8.6pt; color: #111; margin: 0; }' +
        '.lh { width: 100%; border-collapse: collapse; margin-bottom: 4px; }' +
        '.lh td { border: 0; vertical-align: middle; padding: 0 5px; }' +
        '.lh-right { text-align: right; line-height: 1.55; }' +
        '.lh-center { text-align: center; width: 60px; }' +
        '.lh-left { text-align: left; line-height: 1.6; font-size: 8.4pt; width: 34%; }' +
        '.lh-org { font-size: 8.6pt; color: #334155; }' +
        '.lh-univ { font-size: 11.4pt; font-weight: bold; color: #0f766e; margin-top: 2px; }' +
        '.lh-dep { font-size: 8.8pt; color: #334155; }' +
        '.lh-title { text-align: center; font-size: 11.6pt; font-weight: bold; border-top: 2px solid #0f766e; border-bottom: 1px solid #94a3b8; padding: 4px 0; margin: 4px 0 2px; }' +
        '.lh-sub { text-align: center; font-size: 8.2pt; color: #475569; margin-bottom: 6px; }' +
        '.mono { font-family: Consolas, monospace; }' +
        'table.data { width: 100%; border-collapse: collapse; }' +
        'table.data thead { display: table-header-group; }' +
        'table.data tr { page-break-inside: avoid; }' +
        'table.data th, table.data td { border: 1px solid #94a3b8; padding: 2.6px 4px; text-align: right; vertical-align: middle; }' +
        'table.data th { background: #e2e8f0; font-weight: bold; font-size: 8.2pt; }' +
        'table.data tbody tr:nth-child(even) { background: #f8fafc; }' +
        'table.data tbody tr.row-exited { font-weight: bold !important; background: #ffe4e6 !important; color: #881337 !important; }' +
        'table.data tbody tr.row-exited td { border-color: #f43f5e !important; }' +
        'table.data tbody tr.row-recent { font-weight: bold !important; background: #fef3c7 !important; color: #78350f !important; }' +
        'table.data tbody tr.row-recent td { border-color: #f59e0b !important; }' +
        '.tag-ex { font-size: 7pt; background: #e11d48; color: #fff; padding: 1px 3px; border-radius: 3px; font-weight: bold; margin-right: 2px; }' +
        '.tag-rec { font-size: 7pt; background: #d97706; color: #fff; padding: 1px 3px; border-radius: 3px; font-weight: bold; margin-right: 2px; }' +
        '.rp-fnote { margin-top: 6px; font-size: 7.8pt; color: #64748b; display: flex; justify-content: space-between; }' +
        '.sign { width: 100%; margin-top: 16px; border-collapse: collapse; page-break-inside: avoid; }' +
        '.sign td { border: 0; text-align: center; font-size: 8.6pt; padding-top: 4px; }' +
        '.sign .box { height: 46px; border: 1px dashed #cbd5e1; margin: 0 8px 4px; }' +
        'table.data th.lh-cell, table.data th.lh-cell:hover { background: #ffffff !important; border: 0 !important; padding: 0 !important; text-align: right !important; font-weight: normal !important; }' +
        'table.data th.lh-cell .lh { margin-bottom: 0; }' +
        'table.data tr.lh-row { page-break-inside: avoid; page-break-after: avoid; }' +
        '</style></head><body>' +
        '<table class="data"><thead>' +
        '<tr class="lh-row"><th colspan="' + rep.columns.length + '" class="lh-cell">' + letterhead + '</th></tr>' +
        '<tr>' + headCells + '</tr>' +
        '</thead><tbody>' + bodyRows + '</tbody></table>' +
        '<div class="rp-fnote">' +
        '<span>* ردیف‌های با زمینه صورتی و نشانگر [خارج‌شده]: پزشکان خارج‌شده از طرح تمام وقتی هستند.</span>' +
        '<span>* ردیف‌های با زمینه زرد و نشانگر [★ جدید]: تغییر وضعیت جدید در ۱ ماه اخیر دارند.</span>' +
        '<span>سامانه جامع پزشکان تمام وقت — معاونت درمان</span>' +
        '</div>' +
        '<table class="sign"><tr>' +
        '<td><div class="box"></div><b>کارشناس تنظیم‌کننده</b><br><span style="font-size:7.8pt;color:#64748b">اداره نظارت بر درمان</span></td>' +
        '<td><div class="box"></div><b>رئیس اداره نظارت بر درمان</b><br><span style="font-size:7.8pt;color:#64748b">معاونت درمان دانشگاه</span></td>' +
        '<td><div class="box"></div><b>معاون درمان دانشگاه</b><br><span style="font-size:7.8pt;color:#64748b">مهر و امضای نهایی</span></td>' +
        '</tr></table></body></html>';
}

function printHtmlDocument(html, onDone) {
    var old = document.getElementById('__printFrame');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    var frame = document.createElement('iframe');
    frame.id = '__printFrame';
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:1100px;height:800px;border:0;';
    document.body.appendChild(frame);

    var doc = frame.contentDocument || frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    setTimeout(function () {
        try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
        } catch (e) {
            alertBox({ icon: 'error', title: 'خطا در چاپ', text: 'مرورگر اجازه چاپ نداد. لطفاً دوباره تلاش کنید.', confirmButtonColor: '#059669' });
        }
    }, 500);

    window.addEventListener('afterprint', function () {
        setTimeout(function () { if (frame.parentNode) frame.parentNode.removeChild(frame); }, 1500);
        if (typeof onDone === 'function') onDone();
    }, { once: true });
}

/** خروجی PDF (از طریق چاپ مرورگر) */
function exportReportPdf(key) {
    var rep = getReportData(key);
    if (!rep.count) {
        alertBox({ icon: 'warning', title: 'داده‌ای موجود نیست', text: 'برای این گزارش رکوردی ثبت نشده است.', confirmButtonColor: '#059669' });
        return;
    }

    var doPrint = function () {
        printHtmlDocument(buildReportPrintHtml(rep));
        addAuditLog('خروجی PDF گزارش', rep.title + ' (ترتیب: ' + rep.sortLabel + ') - ' + faNum(rep.count) + ' رکورد');
    };

    var guideText = 'ذخیره گزارش به‌صورت PDF\n\n' +
        '۱) در پنجره چاپ، قسمت Destination (مقصد) را روی «Save as PDF» بگذارید.\n' +
        '۲) روی Save (ذخیره) کلیک کنید.\n' +
        '۳) فایل در پوشه Downloads (دانلودها) ذخیره می‌شود.\n\n' +
        'نام پیشنهادی: ' + rep.fileBase + '_' + todayJalali().replace(/\//g, '') + '.pdf\n\n' +
        'برای ادامه و باز شدن پنجره چاپ، تأیید کنید.';

    /* اگر کتابخانه پیام‌ها در دسترس نبود، راهنما با پنجره بومی مرورگر نمایش داده می‌شود */
    if (typeof Swal === 'undefined') {
        if (window.confirm(guideText)) doPrint();
        return;
    }

    Swal.fire({
        title: 'ذخیره گزارش به‌صورت PDF',
        html: '<div style="text-align:right;font-size:13px;line-height:2">' +
            '<b>در پنجره‌ای که باز می‌شود:</b>' +
            '<ol style="margin:8px 18px 0;padding:0;list-style:decimal">' +
            '<li>در قسمت <b>Destination / مقصد</b> گزینه <b>Save as PDF</b> را انتخاب کنید.</li>' +
            '<li>روی <b>Save / ذخیره</b> کلیک کنید.</li>' +
            '<li>فایل در پوشه <b>Downloads (دانلودها)</b> ذخیره می‌شود.</li>' +
            '</ol>' +
            '<div style="margin-top:10px;background:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;padding:8px;font-size:12px">' +
            'نام پیشنهادی: <b>' + esc(rep.fileBase) + '_' + esc(todayJalali().replace(/\//g, '')) + '.pdf</b>' +
            '</div></div>',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'ادامه و انتخاب Save as PDF',
        cancelButtonText: 'انصراف',
        confirmButtonColor: '#0f766e',
        cancelButtonColor: '#64748b'
    }).then(function (r) { if (r.isConfirmed) doPrint(); });
}

/** خروجی اکسل هر گزارش (راست‌چین با استایل) */
function exportReportExcel(key) {
    var rep = getReportData(key);
    if (!rep.count) {
        alertBox({ icon: 'warning', title: 'داده‌ای موجود نیست', text: 'برای این گزارش رکوردی ثبت نشده است.', confirmButtonColor: '#059669' });
        return;
    }

    var sheetName = { treatment: 'تمام وقت درمانی', geographic: 'تمام وقت جغرافیایی', exited: 'خارج از طرح', deleted: 'حذف‌شده' }[key] || 'گزارش';
    var fileName = rep.fileBase + '_' + todayJalali().replace(/\//g, '') + '.xlsx';

    var fallback = function () {
        if (typeof XLSX === 'undefined') {
            alertBox({ icon: 'error', title: 'خطا', text: 'کتابخانه اکسل بارگذاری نشده است.', confirmButtonColor: '#059669' });
            return;
        }
        var aoa = [[rep.title], [rep.subtitle + '    تاریخ گزارش: ' + todayJalali()],
            ['تعداد رکوردها: ' + rep.count], [], rep.columns].concat(rep.rows);
        var ws = XLSX.utils.aoa_to_sheet(aoa);
        ws['!views'] = [{ RTL: true }];
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, fileName);
        addAuditLog('خروجی اکسل گزارش', rep.title + ' - ' + faNum(rep.count) + ' رکورد (' + fileName + ')');
    };

    writeXlsxRtl({
        sheetName: sheetName,
        title: rep.title,
        subtitle: rep.subtitle + ' — مرتب‌شده بر اساس: ' + (rep.sortLabel || 'ردیف'),
        columns: rep.columns,
        rows: rep.rows,
        rawDocs: rep.rawDocs,
        fileName: fileName,
        footer: 'سامانه جامع پزشکان تمام وقت — معاونت درمان    |    تعداد رکورد: ' + faNum(rep.count)
    }, function () {
        addAuditLog('خروجی اکسل گزارش', rep.title + ' - ' + faNum(rep.count) + ' رکورد (' + fileName + ')');
    }, fallback);
}

/* ============================ خروجی اکسل راست‌چین (ExcelJS) ============================ */

/** ذخیره Blob در مرورگر */
function saveBlob(buffer, fileName, mime) {
    /* نقطه اتصال تست خودکار (در محیط مرورگر استفاده نمی‌شود) */
    if (typeof window !== 'undefined' && typeof window.__saveBlobOverride === 'function') {
        return window.__saveBlobOverride(buffer, fileName, mime) !== false;
    }
    try {
        var blob = new Blob([buffer], { type: mime || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        if (window.navigator && window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
            return true;
        }
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            if (a.parentNode) a.parentNode.removeChild(a);
            URL.revokeObjectURL(url);
        }, 2000);
        return true;
    } catch (e) {
        console.warn('saveBlob failed', e);
        return false;
    }
}

/** طول نمایشی یک متن (فارسی و لاتین) برای تخمین عرض ستون */
function displayLength(v) {
    var s = String(v === undefined || v === null ? '' : v);
    var w = 0;
    for (var i = 0; i < s.length; i++) {
        var code = s.charCodeAt(i);
        /* ارقام، حروف لاتین و علائم باریک‌تر از حروف فارسی هستند */
        if (code < 128) w += 0.62;
        else w += 1;
    }
    return w;
}

/**
 * محاسبه عرض خودکار ستون‌ها بر اساس بلندترین مقدار هر ستون
 * (حداقل ۸ و حداکثر ۴۵ کاراکتر)
 */
function autoColumnWidths(columns, rows) {
    return columns.map(function (col, idx) {
        var maxLen = displayLength(col);
        for (var r = 0; r < rows.length; r++) {
            var len = displayLength(rows[r][idx]);
            if (len > maxLen) maxLen = len;
        }
        var width = Math.ceil(maxLen * 1.15) + 2;
        if (idx === 0) return 6;                 /* ستون ردیف */
        if (width < 9) width = 9;
        if (width > 45) width = 45;
        return width;
    });
}

/** استایل سلول راست‌چین با کادر */
function xlCellStyle(opts) {
    opts = opts || {};
    return {
        font: { name: 'Tahoma', size: opts.size || 9, bold: !!opts.bold, color: { argb: opts.color || 'FF1E293B' } },
        alignment: { horizontal: opts.align || 'right', vertical: 'middle', wrapText: !!opts.wrap, readingOrder: 'rtl' },
        fill: opts.fill ? { type: 'pattern', pattern: 'solid', fgColor: { argb: opts.fill } } : undefined,
        border: {
            top: { style: 'thin', color: { argb: 'FFB6C2CF' } },
            left: { style: 'thin', color: { argb: 'FFB6C2CF' } },
            bottom: { style: 'thin', color: { argb: 'FFB6C2CF' } },
            right: { style: 'thin', color: { argb: 'FFB6C2CF' } }
        }
    };
}

/**
 * تولید فایل اکسل راست‌چین با سربرگ، استایل و کادر.
 * spec: { sheetName, title, subtitle, columns, rows, fileName, footer, colWidths }
 */
function writeXlsxRtl(spec, onSuccess, onFailure) {
    if (typeof ExcelJS === 'undefined') {
        if (typeof onFailure === 'function') onFailure();
        return;
    }

    var wb = new ExcelJS.Workbook();
    wb.creator = 'سامانه جامع پزشکان تمام وقت';
    wb.created = new Date();

    var colCount = spec.columns.length;
    var ws = wb.addWorksheet(spec.sheetName || 'گزارش', {
        views: [{ rightToLeft: true, state: 'frozen', ySplit: 5, activeCell: 'A1' }],
        pageSetup: { orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0, paperSize: 9, margins: { left: 0.3, right: 0.3, top: 0.4, bottom: 0.4, header: 0.2, footer: 0.2 } }
    });

    /* سطر ۱: عنوان گزارش */
    ws.mergeCells(1, 1, 1, colCount);
    var titleCell = ws.getCell(1, 1);
    titleCell.value = spec.title;
    titleCell.style = xlCellStyle({ bold: true, size: 13, align: 'center', color: 'FF0F766E' });
    ws.getRow(1).height = 26;

    /* سطر ۲: نام دانشگاه/معاونت */
    ws.mergeCells(2, 1, 2, colCount);
    var subCell = ws.getCell(2, 1);
    subCell.value = spec.subtitle || '';
    subCell.style = xlCellStyle({ size: 9, align: 'center', color: 'FF334155' });
    ws.getRow(2).height = 18;

    /* سطر ۳: تاریخ و تعداد */
    ws.mergeCells(3, 1, 3, colCount);
    var metaCell = ws.getCell(3, 1);
    metaCell.value = 'تاریخ گزارش: ' + todayJalali() + '    |    تعداد رکوردها: ' + faNum(spec.rows.length);
    metaCell.style = xlCellStyle({ size: 8.5, align: 'right', color: 'FF475569' });
    ws.getRow(3).height = 16;

    /* سطر ۴ خالی */
    ws.getRow(4).height = 6;

    /* سطر ۵: سرستون‌ها */
    var headerRow = ws.getRow(5);
    spec.columns.forEach(function (c, i) {
        var cell = headerRow.getCell(i + 1);
        cell.value = c;
        cell.style = xlCellStyle({ bold: true, size: 9, align: 'center', fill: 'FFDCFCE7', color: 'FF0F5132' });
    });
    headerRow.height = 22;

    /* سطرهای داده: استایل بولد برای خارج‌شدگان و تغییرات جدید */
    spec.rows.forEach(function (r, ri) {
        var row = ws.getRow(6 + ri);
        var rawDoc = (spec.rawDocs && spec.rawDocs[ri]) ? spec.rawDocs[ri] : null;
        var hasExitedText = r.some(function (c) { return String(c).indexOf('خارج') !== -1 || String(c).indexOf('غیر شاغل') !== -1; });
        var isEx = rawDoc ? isExitedDoc(rawDoc) : (hasExitedText || spec.sheetName === 'خارج از طرح');
        var isRecent = rawDoc ? isRecentStatusChange(rawDoc) : false;

        var rowFill = isEx ? 'FFFFE4E6' : (isRecent ? 'FFFFFBEB' : undefined);
        var rowColor = isEx ? 'FF881337' : (isRecent ? 'FF78350F' : 'FF1E293B');
        var isBold = isEx || isRecent;

        r.forEach(function (val, ci) {
            var cell = row.getCell(ci + 1);
            cell.value = (val === undefined || val === null) ? '' : val;
            cell.style = xlCellStyle({
                size: isBold ? 9 : 8.5,
                bold: isBold,
                align: ci === 0 ? 'center' : 'right',
                fill: rowFill,
                color: rowColor
            });
        });
        row.height = isBold ? 17 : 15;
    });

    /* سطر جمع‌بندی */
    var footerRow = ws.getRow(6 + spec.rows.length);
    ws.mergeCells(6 + spec.rows.length, 1, 6 + spec.rows.length, colCount);
    var footerCell = ws.getCell(6 + spec.rows.length, 1);
    footerCell.value = spec.footer || ('سامانه جامع پزشکان تمام وقت — معاونت درمان دانشگاه علوم پزشکی کردستان    |    تعداد کل: ' + faNum(spec.rows.length));
    footerCell.style = xlCellStyle({ size: 8, align: 'right', color: 'FF475569' });

    /* عرض ستون‌ها: متناسب با محتوا (خودکار) */
    var widths = autoColumnWidths(spec.columns, spec.rows);
    for (var ci = 0; ci < spec.columns.length; ci++) {
        ws.getColumn(ci + 1).width = (spec.colWidths && spec.colWidths[ci]) ? spec.colWidths[ci] : widths[ci];
    }

    wb.xlsx.writeBuffer().then(function (buf) {
        if (saveBlob(buf, spec.fileName)) {
            if (typeof onSuccess === 'function') onSuccess();
        } else if (typeof onFailure === 'function') {
            onFailure();
        }
    }).catch(function (err) {
        console.warn('xlsx write error', err);
        if (typeof onFailure === 'function') onFailure();
    });
}

/* ============================ مودال بایگانی خارج‌شدگان ============================ */

function openArchivedExitedModal() {
    if (!isAdmin()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'مشاهده بایگانی تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    renderArchivedExitedTable();
    if ($('archivedExitedModal')) $('archivedExitedModal').classList.remove('hidden');
}

function closeArchivedExitedModal() {
    if ($('archivedExitedModal')) $('archivedExitedModal').classList.add('hidden');
}

function renderArchivedExitedTable() {
    var tbody = $('archivedExitedTableBody');
    if (!tbody) return;

    var count = archivedExitedData.length;
    if ($('archivedExitedCount')) $('archivedExitedCount').textContent = faNum(count);
    if ($('archivedExitedBadgeCount')) $('archivedExitedBadgeCount').textContent = faNum(count);

    var empty = $('archivedExitedEmptyState');
    if (empty) empty.classList.toggle('hidden', count > 0);

    if (count === 0) { tbody.innerHTML = ''; return; }

    tbody.innerHTML = archivedExitedData.map(function (doc, idx) {
        return '<tr class="hover:bg-slate-50/70">' +
            '<td class="p-2.5 text-center font-mono text-slate-500">' + faNum(idx + 1) + '</td>' +
            '<td class="p-2.5 font-bold text-slate-800">' + esc(nameOf(doc)) + '</td>' +
            '<td class="p-2.5 text-slate-600">' + esc(doc.specialty || '-') + '</td>' +
            '<td class="p-2.5 text-slate-600">' + esc(doc.city || '-') + '</td>' +
            '<td class="p-2.5 font-mono text-slate-600">' + esc(doc.nationalCode || '-') + '</td>' +
            '<td class="p-2.5 font-mono text-slate-600">' + esc(doc.medicalCode || '-') + '</td>' +
            '<td class="p-2.5 font-mono text-rose-700 font-bold">' + esc(doc.exitDate || doc._exitRegisteredAt || '-') + '</td>' +
            '<td class="p-2.5">' + (doc._archiveCategory === 'geographic' ? '<span class="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold">جغرافیایی</span>' : '<span class="px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 text-[10px] font-bold">درمانی</span>') + '</td>' +
            '<td class="p-2.5 text-center">' +
            '<button onclick="restoreArchivedDoctor(' + doc.id + ')" class="px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-bold rounded" title="بازگردانی به لیست پزشکان فعال">بازگردانی</button>' +
            '</td>' +
            '</tr>';
    }).join('');
}

/* ============================ شناسایی و ادغام رکوردهای تکراری ============================ */

let dupGroups = [];   /* [{ key, list, items: [] }] */

/** کلید تشخیص تکرار */
function dupKeyOf(doc, listName) {
    var nc = String(doc.nationalCode || '').replace(/\D/g, '');
    if (nc.length >= 8) return listName + '|n:' + nc;
    var mc = String(doc.medicalCode || '').replace(/\D/g, '');
    if (mc) return listName + '|m:' + mc;
    var nm = norm(String(doc.firstName || '') + ' ' + String(doc.lastName || ''));
    if (nm) return listName + '|x:' + nm;
    return listName + '|id:' + doc.id;
}

/** شمارش فیلدهای پرشده (برای انتخاب کامل‌ترین رکورد) */
function filledCount(doc) {
    var keys = ['firstName', 'lastName', 'specialty', 'city', 'city2', 'nationalCode', 'medicalCode',
        'academicRank', 'serviceType', 'startDate', 'reEntryDate', 'exitDate', 'remarks'];
    var n = 0;
    keys.forEach(function (k) {
        if (String(doc[k] === undefined || doc[k] === null ? '' : doc[k]).trim() !== '') n++;
    });
    return n;
}

/** یافتن گروه‌های تکراری در یک فهرست */
function findDuplicateGroupsIn(list, listName) {
    var map = {};
    list.forEach(function (d) {
        var k = dupKeyOf(d, listName);
        if (!map[k]) map[k] = [];
        map[k].push(d);
    });
    return Object.keys(map).filter(function (k) { return map[k].length > 1; }).map(function (k) {
        return { key: k, list: listName, items: map[k] };
    });
}

/** فهرست کامل گروه‌های تکراری (هر دو بخش) */
function findAllDuplicateGroups() {
    return findDuplicateGroupsIn(treatmentData, 'treatment')
        .concat(findDuplicateGroupsIn(geographicData, 'geographic'));
}

/** تعداد رکوردهای اضافی */
function duplicateExtraCount(groups) {
    return groups.reduce(function (s, g) { return s + (g.items.length - 1); }, 0);
}

/** باز کردن مودال تکراری‌ها */
function openDuplicatesModal() {
    if (!isAdmin()) {
        alertBox({ icon: 'warning', title: 'دسترسی محدود', text: 'این ابزار تنها برای مدیر ارشد سامانه مجاز است.', confirmButtonColor: '#059669' });
        return;
    }
    dupGroups = findAllDuplicateGroups();
    renderDuplicatesTable();
    if ($('duplicatesModal')) $('duplicatesModal').classList.remove('hidden');
}

function closeDuplicatesModal() {
    if ($('duplicatesModal')) $('duplicatesModal').classList.add('hidden');
    dupGroups = [];
}

/** رندر جدول گروه‌های تکراری */
function renderDuplicatesTable() {
    var tbody = $('dupTableBody');
    if (!tbody) return;

    if ($('dupGroupCount')) $('dupGroupCount').textContent = faNum(dupGroups.length);
    if ($('dupExtraCount')) $('dupExtraCount').textContent = faNum(duplicateExtraCount(dupGroups));
    if ($('btnMergeAll')) $('btnMergeAll').disabled = dupGroups.length === 0;

    var empty = $('dupEmptyState');
    if (empty) empty.classList.toggle('hidden', dupGroups.length > 0);

    if (!dupGroups.length) { tbody.innerHTML = ''; return; }

    tbody.innerHTML = dupGroups.map(function (g, idx) {
        var base = g.items.slice().sort(function (a, b) { return filledCount(b) - filledCount(a); })[0];
        return '<tr class="hover:bg-rose-50/40">' +
            '<td class="p-2.5 text-center text-slate-500">' + faNum(idx + 1) + '</td>' +
            '<td class="p-2.5 font-bold text-slate-800">' + esc(nameOf(base)) + '</td>' +
            '<td class="p-2.5 text-slate-600">' + esc(base.specialty || '-') + '</td>' +
            '<td class="p-2.5 text-slate-600">' + esc(base.city || '-') + '</td>' +
            '<td class="p-2.5 text-slate-600 font-mono">' + esc(base.nationalCode || '-') + '</td>' +
            '<td class="p-2.5 text-slate-600 font-mono">' + esc(base.medicalCode || '-') + '</td>' +
            '<td class="p-2.5">' + (g.list === 'geographic' ? '<span class="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold">جغرافیایی</span>' : '<span class="px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 text-[10px] font-bold">درمانی</span>') + '</td>' +
            '<td class="p-2.5 text-center font-black text-rose-700">' + faNum(g.items.length) + '</td>' +
            '<td class="p-2.5 text-center">' +
            '<button onclick="mergeDuplicateGroup(\'' + g.key + '\')" class="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold rounded">ادغام</button>' +
            '</td>' +
            '</tr>';
    }).join('');
}

/** ادغام یک گروه مشخص و حذف رکوردهای اضافی */
function mergeGroupItems(group) {
    var items = group.items.slice();
    if (items.length < 2) return 0;

    /* کامل‌ترین رکورد به‌عنوان پایه */
    items.sort(function (a, b) { return filledCount(b) - filledCount(a); });
    var base = items[0];
    var extras = items.slice(1);

    /* پر کردن فیلدهای خالی پایه از سایر رکوردها */
    var fillKeys = ['firstName', 'lastName', 'specialty', 'city', 'city2', 'nationalCode', 'medicalCode',
        'academicRank', 'serviceType', 'startDate', 'reEntryDate', 'exitDate', 'remarks'];
    extras.forEach(function (ex) {
        fillKeys.forEach(function (k) {
            var cur = String(base[k] === undefined || base[k] === null ? '' : base[k]).trim();
            var val = String(ex[k] === undefined || ex[k] === null ? '' : ex[k]).trim();
            if (!cur && val) base[k] = ex[k];
        });
    });

    var extraIds = extras.map(function (d) { return Number(d.id); });
    if (group.list === 'treatment') {
        treatmentData = treatmentData.filter(function (d) { return extraIds.indexOf(Number(d.id)) === -1; });
    } else {
        geographicData = geographicData.filter(function (d) { return extraIds.indexOf(Number(d.id)) === -1; });
    }
    return extras.length;
}

/** ادغام یک گروه با کلید */
function mergeDuplicateGroup(key) {
    var group = dupGroups.filter(function (g) { return g.key === key; })[0];
    if (!group) return;

    var removed = mergeGroupItems(group);
    saveAllData();
    addAuditLog('ادغام رکورد تکراری', (group.items[0].firstName || '') + ' ' + (group.items[0].lastName || '') +
        ' - ' + faNum(removed) + ' رکورد تکراری حذف و اطلاعات در یک رکورد ادغام شد.');

    dupGroups = findAllDuplicateGroups();
    renderDuplicatesTable();
    renderSpecialtiesFilter();
    renderRankFilter();
    renderCityFilter();
    updateKPIs();
    updateBadges();
    applyFilters();
    renderReportsView();

    alertBox({ icon: 'success', title: 'ادغام شد', text: faNum(removed) + ' رکورد تکراری حذف و اطلاعات ادغام گردید.', timer: 1500, showConfirmButton: false });
}

/** ادغام همه گروه‌ها */
function mergeAllDuplicates() {
    if (!dupGroups.length) return;

    var totalRemoved = 0;
    var groups = dupGroups.slice();
    groups.forEach(function (g) { totalRemoved += mergeGroupItems(g); });

    saveAllData();
    addAuditLog('ادغام رکوردهای تکراری', faNum(groups.length) + ' گروه و حذف ' + faNum(totalRemoved) + ' رکورد تکراری.');

    dupGroups = findAllDuplicateGroups();
    renderDuplicatesTable();
    renderSpecialtiesFilter();
    renderRankFilter();
    renderCityFilter();
    updateKPIs();
    updateBadges();
    applyFilters();
    renderReportsView();

    alertBox({ icon: 'success', title: 'ادغام انجام شد', text: faNum(totalRemoved) + ' رکورد تکراری حذف شد.', timer: 1800, showConfirmButton: false });
}


/* ============================ راه‌اندازی ============================ */
function setupEventListeners() {
    /* ورودی جستجو */
    var search = $('searchInput');
    if (search && !search.dataset.bound) {
        search.addEventListener('input', handleSearchFilter);
        search.dataset.bound = '1';
    }

    /* تغییر تعداد رکورد در صفحه */
    var rpp = $('recordsPerPage');
    if (rpp) pageSize = rpp.value || '15';

    /* درگ و دراپ فایل اکسل */
    var dropZone = document.querySelector('#importModal .border-dashed');
    if (dropZone && !dropZone.dataset.bound) {
        dropZone.addEventListener('dragover', function (ev) { ev.preventDefault(); dropZone.classList.add('border-teal-500'); });
        dropZone.addEventListener('dragleave', function () { dropZone.classList.remove('border-teal-500'); });
        dropZone.addEventListener('drop', function (ev) {
            ev.preventDefault();
            dropZone.classList.remove('border-teal-500');
            var input = $('excelFileInput');
            if (input && ev.dataTransfer.files && ev.dataTransfer.files.length) {
                input.files = ev.dataTransfer.files;
                handleExcelFileSelect({ target: input });
            }
        });
        dropZone.dataset.bound = '1';
    }

    /* بستن مودال‌ها با کلید Escape */
    document.addEventListener('keydown', function (ev) {
        if (ev.key !== 'Escape') return;
        closeDoctorModal(); closeImportModal(); closeUserModal(); closeChangePasswordModal();
    });

    /* بستن مودال با کلیک روی پس‌زمینه */
    ['doctorModal', 'importModal', 'userModal', 'changePasswordModal'].forEach(function (id) {
        var m = $(id);
        if (!m || m.dataset.boundBackdrop) return;
        m.addEventListener('click', function (ev) {
            if (ev.target === m) m.classList.add('hidden');
        });
        m.dataset.boundBackdrop = '1';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadLocalData();
    setupEventListeners();
    renderSpecialtiesFilter();
    renderRankFilter();
    renderCityFilter();
    updateKPIs();
    updateBadges();
    renderTable();
    checkAuthSession();

    /* پرچم آماده‌بودن برنامه (برای تشخیص باز شدن فایل قالب بدون منابع) */
    window.__MUK_APP_READY__ = true;
    try { window.dispatchEvent(new Event('muk:app-ready')); } catch (e) { /* ignore */ }
});
