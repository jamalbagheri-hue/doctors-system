/**
 * Medical Full-Time Doctors Management Application
 * سامانه پزشکان تمام وقت دانشگاه علوم پزشکی کردستان
 * معاونت درمان
 * 
 * Features:
 * - Dual Mode: Geographic Faculty (شماره ۲) & Treatment Doctors (شماره ۱)
 * - Offline-First with Embedded Initial Dataset & Auto-Sync to REST API backend
 * - Dual Authentication: Admin (32332555) & Read-Only (143625)
 * - Exact Excel layout, columns and formulas
 * - Excel (.xlsx) & PDF Export with official letterhead
 * - Interactive Dashboard Analytics & Audit Trail
 */

// Embedded initial datasets (Version 1405/08/07)
const EMBEDDED_GEOGRAPHIC_DATA = [{"id": 1, "radif": "1", "firstName": "بهزاد", "lastName": "احسن", "specialty": "بيهوشي", "nationalCode": "3730219723", "medicalCode": "59883", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشيار", "exitDate": "", "remarks": ""}, {"id": 2, "radif": "2", "firstName": "بهزاد", "lastName": "محسن پور", "specialty": "بیماریهای عفونی", "nationalCode": "0043982131", "medicalCode": "54415", "startDate": "1393/2/11", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": ""}, {"id": 3, "radif": "3", "firstName": "نرگس", "lastName": "شمس عليزاده", "specialty": "روانپزشکی", "nationalCode": "3257604998", "medicalCode": "59315", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": ""}, {"id": 4, "radif": "4", "firstName": "كريم", "lastName": "ناصري", "specialty": "بيهوشي", "nationalCode": "2928802126", "medicalCode": "53035", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": ""}, {"id": 5, "radif": "5", "firstName": "مرضيه", "lastName": "مقدم", "specialty": "روانپزشکی", "nationalCode": "4284228951", "medicalCode": "40349", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 6, "radif": "6", "firstName": "فرزاد", "lastName": "سرشيوي", "specialty": "بيهوشي", "nationalCode": "3848894726", "medicalCode": "61682", "startDate": "1393/6/25", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 7, "radif": "7", "firstName": "ليلا", "lastName": "عزيزخاني", "specialty": "طب اورژانس", "nationalCode": "3874487423", "medicalCode": "93359", "startDate": "1393/9/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 8, "radif": "8", "firstName": "برهان", "lastName": "مرادویسی", "specialty": "فوق تخصص خون و انکولوژی", "nationalCode": "3838698843", "medicalCode": "95490", "startDate": "1394/2/1", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": ""}, {"id": 9, "radif": "9", "firstName": "فايق", "lastName": "يوسفي", "specialty": "روانشناسي باليني", "nationalCode": "3859670131", "medicalCode": "1717", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "استاد", "exitDate": "", "remarks": ""}, {"id": 10, "radif": "10", "firstName": "مهران", "lastName": "يار احمدي", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "3849678709", "medicalCode": "0", "startDate": "از قبل", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": ""}, {"id": 11, "radif": "11", "firstName": "فرزانه", "lastName": "الله ويسي", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "3732101444", "medicalCode": "0", "startDate": "1393/6/30", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 12, "radif": "12", "firstName": "ناهید", "lastName": "زمانی مهر", "specialty": "طب اورژانس", "nationalCode": "1374022373", "medicalCode": "111285", "startDate": "1395/1/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 13, "radif": "13", "firstName": "انور", "lastName": "محمدی بانه", "specialty": "فوق نفرولوژی", "nationalCode": "3761930232", "medicalCode": "34395", "startDate": "1395/2/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استاديار", "exitDate": "", "remarks": ""}, {"id": 14, "radif": "14", "firstName": "غلامرضا", "lastName": "شيبت زاده", "specialty": "فوق تخصص جراحي قلب وعروق", "nationalCode": "2091860417", "medicalCode": "33974", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 15, "radif": "15", "firstName": "کوروش", "lastName": "اخباری", "specialty": "طب اورژانس", "nationalCode": "3961829772", "medicalCode": "96467", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 16, "radif": "16", "firstName": "سارا", "lastName": "کمالی اردکانی", "specialty": "فلوشیپ سایکوسوماتیک", "nationalCode": "0064644588", "medicalCode": "108418", "startDate": "1396/8/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ  1403/01/01عنوان فلوشیپ سایکوسوماتیک"}, {"id": 17, "radif": "17", "firstName": "شوبو", "lastName": "شیخ احمدی", "specialty": "فوق تخصص نوزادان", "nationalCode": "3732315241", "medicalCode": "64166", "startDate": "1396/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 18, "radif": "18", "firstName": "بهار", "lastName": "اردلانی", "specialty": "طب اورژانس", "nationalCode": "3781947629", "medicalCode": "90767", "startDate": "1395/8/10", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 19, "radif": "19", "firstName": "فرهنگ", "lastName": "صفرنژاد", "specialty": "فلوشیپ سوختگی", "nationalCode": "2709760576", "medicalCode": "63988", "startDate": "1399/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 20, "radif": "20", "firstName": "گوهر", "lastName": "لطفی", "specialty": "بیماریهای عفونی", "nationalCode": "3859072951", "medicalCode": "112936", "startDate": "1394/8/19", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 21, "radif": "21", "firstName": "سولماز", "lastName": "درخشان", "specialty": "داخلی", "nationalCode": "3762099677", "medicalCode": "130125", "startDate": "1399/11/21", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 22, "radif": "22", "firstName": "شاهرخ", "lastName": "ابن رسولی", "specialty": "متخصص بیهوشی فلوشیپ درد", "nationalCode": "3730474502", "medicalCode": "75652", "startDate": "1400/1/15", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 23, "radif": "23", "firstName": "آزاد", "lastName": "ماجدی", "specialty": "فوق تخصص مراقبتهای ویژه( ICU)", "nationalCode": "3732411249", "medicalCode": "102048", "startDate": "1400/7/1", "serviceType": "هیأت علمي ت ج", "academicRank": "دانشیار", "exitDate": "", "remarks": ""}, {"id": 24, "radif": "24", "firstName": "عرفان", "lastName": "آزادپور", "specialty": "آسیب شناسی", "nationalCode": "3720126579", "medicalCode": "155100", "startDate": "1400/11/3", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 25, "radif": "25", "firstName": "حکیم", "lastName": "خدایی", "specialty": "فوق تخصص گوارش وکبد بالغین", "nationalCode": "3760247210", "medicalCode": "121458", "startDate": "1400/12/27", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 26, "radif": "26", "firstName": "فرزاد", "lastName": "پرویزپور", "specialty": "علوم سلولی کاربردیph.d", "nationalCode": "3731528037", "medicalCode": "", "startDate": "1401/07/13", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 27, "radif": "27", "firstName": "آروین", "lastName": "رحیمی", "specialty": "جراح مغزو اعصاب", "nationalCode": "3720075291", "medicalCode": "156104", "startDate": "1401/11/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 28, "radif": "28", "firstName": "پیام", "lastName": "وکیلی تجره", "specialty": "ارتوپدی", "nationalCode": "3720290425", "medicalCode": "169042", "startDate": "1401/11/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 29, "radif": "29", "firstName": "جلال", "lastName": "منوچهری", "specialty": "جراحی عمومی", "nationalCode": "3230096118", "medicalCode": "92021", "startDate": "1395/04/06", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/01/17از درمانی تبدیل  به هیأت علمی تمام وقت جغرافیایی"}, {"id": 30, "radif": "30", "firstName": "وحید", "lastName": "نوریان", "specialty": "فوق تخصص جراحی عروق", "nationalCode": "0068271417", "medicalCode": "117292", "startDate": "1402/02/11", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 31, "radif": "31", "firstName": "شيما", "lastName": "عظيمي اوليايي", "specialty": "راديوتراپي", "nationalCode": "0083993002", "medicalCode": "143549", "startDate": "1399/06/13", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/22 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 32, "radif": "32", "firstName": "تارا", "lastName": "مولانایی کمانگر", "specialty": "رادیوانکولوژی", "nationalCode": "3733067411", "medicalCode": "149201", "startDate": "1402/09/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/22 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 33, "radif": "33", "firstName": "معصومه", "lastName": "مریوانی", "specialty": "طب اورژانس", "nationalCode": "4621534467", "medicalCode": "118443", "startDate": "1400/10/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/09/28 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 34, "radif": "34", "firstName": "آرش", "lastName": "امینی", "specialty": "فوق تخصص مراقبت های ویژه", "nationalCode": "1376554763", "medicalCode": "87414", "startDate": "1401/11/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1402/010/04 ازتمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 35, "radif": "35", "firstName": "محسن", "lastName": "قاضی سلطانی", "specialty": "رادیولوژی", "nationalCode": "3750211558", "medicalCode": "174107", "startDate": "1402/11/12", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 36, "radif": "36", "firstName": "محمد", "lastName": "کریمی", "specialty": "قلب وعروق", "nationalCode": "3850077586", "medicalCode": "162151", "startDate": "1402/11/08", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 37, "radif": "37", "firstName": "سمیرا", "lastName": "حیدری", "specialty": "فيزيك پزشكي ph.d", "nationalCode": "", "medicalCode": "", "startDate": "1402/12/07", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 38, "radif": "38", "firstName": "فواد", "lastName": "مجیدی", "specialty": "فوق تخصص جراحي قلب وعروق", "nationalCode": "3859754653", "medicalCode": "117184", "startDate": "1403/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 39, "radif": "39", "firstName": "فاتح", "lastName": "سهرابی", "specialty": "ph.d روانشناسی بالینی", "nationalCode": "3230903307", "medicalCode": "19154", "startDate": "1403/03/20", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 40, "radif": "40", "firstName": "محمد سعد", "lastName": "فرقانی", "specialty": "فوق تخصص نفرولوژی بزرگسالان", "nationalCode": "3760186238", "medicalCode": "101384", "startDate": "1403/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 41, "radif": "41", "firstName": "گلناز", "lastName": "فهیمی", "specialty": "فوق تخصص خون وسرطان کودکان", "nationalCode": "3732410961", "medicalCode": "102163", "startDate": "1403/10/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 42, "radif": "42", "firstName": "امیر", "lastName": "امینی", "specialty": "جراحی عمومی", "nationalCode": "3840195977", "medicalCode": "187419", "startDate": "1404/01/17", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 43, "radif": "43", "firstName": "حمزه", "lastName": "بابایی", "specialty": "چشم", "nationalCode": "3720460193", "medicalCode": "185947", "startDate": "1404/01/23", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 44, "radif": "44", "firstName": "تورج", "lastName": "خالدیان", "specialty": "گوش و حلق وبینی", "nationalCode": "3790240461", "medicalCode": "184943", "startDate": "1404/01/18", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 45, "radif": "45", "firstName": "اقبال", "lastName": "فتاحي", "specialty": "فوق تخصص هماتولوژی وانکولوژی بزرگسالان", "nationalCode": "3732297551", "medicalCode": "58075", "startDate": "1398/06/27", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/01/25"}, {"id": 46, "radif": "46", "firstName": "داراب", "lastName": "ظهری", "specialty": "طب اورژانس", "nationalCode": "3761994818", "medicalCode": "106415", "startDate": "1398/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/03/05"}, {"id": 47, "radif": "47", "firstName": "آوات", "lastName": "کریمی", "specialty": "کودکان", "nationalCode": "3732605744", "medicalCode": "128363", "startDate": "1404/03/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 48, "radif": "48", "firstName": "دینا", "lastName": "معتمدی", "specialty": "نورولوژی", "nationalCode": "1757458425", "medicalCode": "137982", "startDate": "1404/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 49, "radif": "49", "firstName": "اسعد", "lastName": "فتحی پور", "specialty": "طب اورژانس", "nationalCode": "3732621693", "medicalCode": "130643", "startDate": "1396/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ1404/04/01 از تمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 50, "radif": "50", "firstName": "سمیره", "lastName": "احمدپور", "specialty": "رادیولوژی", "nationalCode": "3840036933", "medicalCode": "157548", "startDate": "1403/07/15", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ1404/04/01 از تمام وقت درمانی تبدیل به تمام وقت جغرافیایی"}, {"id": 51, "radif": "51", "firstName": "شیرزاد", "lastName": "بابایی", "specialty": "ph.d روانشناسی بالینی", "nationalCode": "3830016662", "medicalCode": "ر-42209", "startDate": "1404/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 52, "radif": "52", "firstName": "هوشمند", "lastName": "صوفی مجیدپور", "specialty": "فلوشیپ اندویورولوژی", "nationalCode": "1289768897", "medicalCode": "132626", "startDate": "1404/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 53, "radif": "53", "firstName": "نرمین", "lastName": "باغی", "specialty": "داخلی", "nationalCode": "3840063736", "medicalCode": "161306", "startDate": "1404/09/04", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "1405/06/31", "remarks": "قبولی در مقطع فوق تخصصی"}, {"id": 54, "radif": "54", "firstName": "محسن", "lastName": "محمدی", "specialty": "فوق تخصص گوارش وکبد بالغین", "nationalCode": "3761992841", "medicalCode": "105061", "startDate": "1404/10/21", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ازتاریخ 1405/06/01 تمام وقت جغرافیایی تبدیل به تمام وقت درمانی"}, {"id": 55, "radif": "55", "firstName": "امیر", "lastName": "شکوهی ثابت", "specialty": "فوق تخصص ریه بالغین", "nationalCode": "1465816763", "medicalCode": "110862", "startDate": "1404/11/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}, {"id": 56, "radif": "56", "firstName": "طیبه", "lastName": "محمدی", "specialty": "فوق تخصص بیماریهای مغزواعصاب کودکان", "nationalCode": "3762050872", "medicalCode": "116641", "startDate": "1405/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 57, "radif": "57", "firstName": "کتایون", "lastName": "حسن زاده", "specialty": "فوق تخصص نفرولوژِی بالغین", "nationalCode": "68790392", "medicalCode": "80102", "startDate": "1405/01/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 58, "radif": "58", "firstName": "آرام", "lastName": "خالدیان", "specialty": "بیهوشی", "nationalCode": "3732054993", "medicalCode": "102155", "startDate": "1401/07/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1404/12/01"}, {"id": 59, "radif": "59", "firstName": "پوریا", "lastName": "تیموری", "specialty": "جراحی فک وصورت", "nationalCode": "6410031440", "medicalCode": "185998", "startDate": "1405/01/29", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "1405/07/15", "remarks": "انتقال به دانشگاه همدان"}, {"id": 60, "radif": "60", "firstName": "علاالدین", "lastName": "هوشمند", "specialty": "فلوشیپ اکوکاردیوگرافی", "nationalCode": "3760115217", "medicalCode": "65792", "startDate": "1403/08/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "تبدیل وضعیت از تمام وقت درمانی به تمام وقت جغرافیایی ازتاریخ1405/01/22"}, {"id": 61, "radif": "61", "firstName": "لقمان", "lastName": "قادری", "specialty": "فوق تخصص توراکس", "nationalCode": "3848932458", "medicalCode": "96131", "startDate": "1405/04/01", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 62, "radif": "62", "firstName": "سمیه", "lastName": "معتمد", "specialty": "فوق تخصص روماتولوژی", "nationalCode": "3309770788", "medicalCode": "116227", "startDate": "1405/04/09", "serviceType": "هیأت علمي ت ج", "academicRank": "استادیار", "exitDate": "", "remarks": ""}];
const EMBEDDED_TREATMENT_DATA = [{"id": 1, "radif": "1", "firstName": "محمد", "lastName": "مهرآسا", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "0047386622", "medicalCode": "48193", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 2, "radif": "2", "firstName": "منوچهر", "lastName": "احمدي", "specialty": "راديوتراپي", "city": "سنندج", "nationalCode": "3760821618", "medicalCode": "32015", "startDate": "1393/09/03", "exitDate": "", "remarks": ""}, {"id": 3, "radif": "3", "firstName": "امیر", "lastName": "شیخ الاسلامی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "0040306305", "medicalCode": "50906", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 4, "radif": "4", "firstName": "سهیلا", "lastName": "ناهدی", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "1373747587", "medicalCode": "33141", "startDate": "1396/06/01", "exitDate": "", "remarks": ""}, {"id": 5, "radif": "5", "firstName": "صدیق", "lastName": "جدیدالاسلامی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3731147165", "medicalCode": "100664", "startDate": "1396/07/01", "exitDate": "", "remarks": ""}, {"id": 6, "radif": "6", "firstName": "محمود", "lastName": "مرادی", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "2150634163", "medicalCode": "55297", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 7, "radif": "7", "firstName": "اکبر", "lastName": "سنگری", "specialty": "ارتوپدی", "city": "سنندج-مریوان", "nationalCode": "3732596362", "medicalCode": "135705", "startDate": "1395/09/01", "exitDate": "", "remarks": ""}, {"id": 8, "radif": "8", "firstName": "ئازاده", "lastName": "فتحی", "specialty": "بیهوشی", "city": "سنندج-دیواندره", "nationalCode": "3733090713", "medicalCode": "134896", "startDate": "1398/09/01", "exitDate": "", "remarks": "از تاریخ 99/4/1درسنندج مشترکا\" با دیواندره"}, {"id": 9, "radif": "9", "firstName": "سبا", "lastName": "قادرخانی", "specialty": "پاتولوژی", "city": "سنندج-دهگلان", "nationalCode": "3732935353", "medicalCode": "147004", "startDate": "1399/09/02", "exitDate": "", "remarks": ""}, {"id": 10, "radif": "10", "firstName": "سيد مسعود", "lastName": "موسوي جم", "specialty": "بیهوشی", "city": "سنندج - مریوان", "nationalCode": "3801199398", "medicalCode": "75970", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ1400/10/1 مشترکا\" با مراکز سنندج فعالیت دارند"}, {"id": 11, "radif": "11", "firstName": "فرزاد", "lastName": "بیگلری", "specialty": "جراح عمومی", "city": "سنندج-بانه", "nationalCode": "4949786253", "medicalCode": "132625", "startDate": "1400/10/18", "exitDate": "", "remarks": "غائب"}, {"id": 12, "radif": "12", "firstName": "علی", "lastName": "ولیزاده", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "3730514679", "medicalCode": "91018", "startDate": "1400/11/19", "exitDate": "", "remarks": ""}, {"id": 13, "radif": "13", "firstName": "علیرضا", "lastName": "حشمتی", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "3256997872", "medicalCode": "48227", "startDate": "1397/07/23", "exitDate": "", "remarks": ""}, {"id": 14, "radif": "14", "firstName": "سعیده", "lastName": "سیفی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "0450149978", "medicalCode": "110870", "startDate": "1401/07/01", "exitDate": "", "remarks": ""}, {"id": 15, "radif": "15", "firstName": "سعید", "lastName": "بیگلری", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "3379813508", "medicalCode": "80900", "startDate": "1401/07/01", "exitDate": "", "remarks": ""}, {"id": 16, "radif": "16", "firstName": "زیبا", "lastName": "خدایاری", "specialty": "زنان وزایمان", "city": "سنندج- دیواندره", "nationalCode": "3781972445", "medicalCode": "117455", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ 1401/07/06 مشترکا\" با مراکز سنندج"}, {"id": 17, "radif": "17", "firstName": "محمدیحیی", "lastName": "فریدی سقزلو", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "3750093962", "medicalCode": "163802", "startDate": "1401/07/04", "exitDate": "", "remarks": ""}, {"id": 18, "radif": "18", "firstName": "آرمان", "lastName": "حبیبی", "specialty": "بیماریهای مغز واعصاب", "city": "سنندج-مریوان", "nationalCode": "3811792842", "medicalCode": "140879", "startDate": "1401/10/14", "exitDate": "", "remarks": ""}, {"id": 19, "radif": "19", "firstName": "احسان", "lastName": "یزدی", "specialty": "پزشکی هسته ای", "city": "سنندج", "nationalCode": "0451659971", "medicalCode": "135840", "startDate": "1401/10/25", "exitDate": "", "remarks": ""}, {"id": 20, "radif": "20", "firstName": "بابك", "lastName": "پرتوي", "specialty": "داخلی", "city": "سنندج-کامیاران", "nationalCode": "3732435792", "medicalCode": "128360", "startDate": "1400/10/01", "exitDate": "", "remarks": "ازتاریخ1405/03/01 غایب"}, {"id": 21, "radif": "21", "firstName": "سارا", "lastName": "زندسلیمی", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "3720027759", "medicalCode": "150332", "startDate": "1402/07/01", "exitDate": "", "remarks": ""}, {"id": 22, "radif": "22", "firstName": "ژیلا", "lastName": "شریفی", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3230285565", "medicalCode": "130533", "startDate": "1402/07/09", "exitDate": "", "remarks": ""}, {"id": 23, "radif": "23", "firstName": "سارا", "lastName": "باتمانی", "specialty": "پاتولوژی", "city": "سنندج-کامیاران", "nationalCode": "3830075537", "medicalCode": "158251", "startDate": "1402/07/01", "exitDate": "", "remarks": ""}, {"id": 24, "radif": "24", "firstName": "عبدالرضا", "lastName": "نریمان", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3780928930", "medicalCode": "36123", "startDate": "1402/09/01", "exitDate": "", "remarks": ""}, {"id": 25, "radif": "25", "firstName": "عبدالله", "lastName": "ارشدی", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "3730577476", "medicalCode": "118302", "startDate": "1402/08/15", "exitDate": "", "remarks": ""}, {"id": 26, "radif": "26", "firstName": "سپیده", "lastName": "رادور", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3770097157", "medicalCode": "165590", "startDate": "1402/11/05", "exitDate": "", "remarks": ""}, {"id": 27, "radif": "27", "firstName": "یسرا", "lastName": "مظهری", "specialty": "داخلی", "city": "سنندج", "nationalCode": "3720093964", "medicalCode": "147991", "startDate": "1402/11/01", "exitDate": "", "remarks": ""}, {"id": 28, "radif": "28", "firstName": "سروه", "lastName": "حیدری", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "0068990588", "medicalCode": "84278", "startDate": "1403/02/01", "exitDate": "", "remarks": ""}, {"id": 29, "radif": "29", "firstName": "دریا", "lastName": "خسروی", "specialty": "پوست", "city": "سنندج-کامیاران", "nationalCode": "3733183312", "medicalCode": "151532", "startDate": "1402/12/20", "exitDate": "", "remarks": "غایب"}, {"id": 30, "radif": "30", "firstName": "لیلا", "lastName": "برنا", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3732979318", "medicalCode": "186194", "startDate": "1403/07/07", "exitDate": "", "remarks": ""}, {"id": 31, "radif": "31", "firstName": "علی", "lastName": "پارسامهر", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "3329914017", "medicalCode": "149352", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 32, "radif": "32", "firstName": "مهدي", "lastName": "گلچين", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "0061924911", "medicalCode": "107197", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 33, "radif": "33", "firstName": "سوزان", "lastName": "ستوده", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "2210048176", "medicalCode": "159146", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 34, "radif": "34", "firstName": "منیره", "lastName": "اميني", "specialty": "جراحي مغز و اعصاب", "city": "سنندج", "nationalCode": "1590298942", "medicalCode": "172091", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 35, "radif": "35", "firstName": "بهنام", "lastName": "احمدی", "specialty": "رادیولوژی", "city": "سنندج", "nationalCode": "6460008744", "medicalCode": "164791", "startDate": "1403/07/07", "exitDate": "", "remarks": ""}, {"id": 36, "radif": "36", "firstName": "علی", "lastName": "خمودی قاضیانی", "specialty": "طب اورژانس", "city": "سنندج", "nationalCode": "0051359677", "medicalCode": "57578", "startDate": "1400/01/01", "exitDate": "", "remarks": "ازتاریخ 1403/11/09 تبدیل وضعیت از تمام وقت جغرافیایی به تمام وقت درمانی"}, {"id": 37, "radif": "37", "firstName": "محمد", "lastName": "فتحی", "specialty": "فوق تخصص جراحی پلاستیک", "city": "سنندج", "nationalCode": "3733125312", "medicalCode": "139319", "startDate": "1403/10/12", "exitDate": "", "remarks": ""}, {"id": 38, "radif": "38", "firstName": "سلام", "lastName": "قمری", "specialty": "ارتوپدی", "city": "سنندج", "nationalCode": "6469952879", "medicalCode": "152256", "startDate": "1403/11/01", "exitDate": "", "remarks": ""}, {"id": 39, "radif": "39", "firstName": "پریوش", "lastName": "نعمتی", "specialty": "بیماریهای مغز واعصاب", "city": "سنندج", "nationalCode": "2920059718", "medicalCode": "157708", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 40, "radif": "40", "firstName": "بختیار", "lastName": "عبدالله زاده", "specialty": "ارتوپدی", "city": "سنندج", "nationalCode": "3750304467", "medicalCode": "186804", "startDate": "1403/12/01", "exitDate": "", "remarks": ""}, {"id": 41, "radif": "41", "firstName": "صادق", "lastName": "جاهد جوشاتو", "specialty": "قلب و عروق", "city": "سنندج", "nationalCode": "2939888035", "medicalCode": "143487", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 42, "radif": "42", "firstName": "محمد", "lastName": "مرادی", "specialty": "روانپزشکی", "city": "سنندج-دهگلان", "nationalCode": "3732330664", "medicalCode": "88044", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ 1404/01/01مشترک با مراکز سنندج"}, {"id": 43, "radif": "43", "firstName": "پرویز", "lastName": "احمدی", "specialty": "فوق تخصص ریه کودکان", "city": "سنندج", "nationalCode": "5589221234", "medicalCode": "76178", "startDate": "1399/08/25", "exitDate": "", "remarks": "ازتاریخ1402/09/22 ازتمام وقت جغرافیایی تبدیل به تمام وقت درمانی"}, {"id": 44, "radif": "44", "firstName": "شاهپور", "lastName": "شجاع", "specialty": "بیهوشی", "city": "سنندج", "nationalCode": "1820448649", "medicalCode": "52629", "startDate": "1401/04/01", "exitDate": "", "remarks": "از تاریخ 1403/08/21 از تمام وقت جغرافیایی تبدیل به تمام وقت درمانی"}, {"id": 45, "radif": "45", "firstName": "سید محسن", "lastName": "حسینی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "سنندج", "nationalCode": "3720080188", "medicalCode": "152777", "startDate": "1404/03/12", "exitDate": "", "remarks": ""}, {"id": 46, "radif": "46", "firstName": "الهه", "lastName": "فتحی", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3730266117", "medicalCode": "169043", "startDate": "1403/11/01", "exitDate": "", "remarks": ""}, {"id": 47, "radif": "47", "firstName": "اردلان", "lastName": "معمار", "specialty": "داخلی", "city": "سنندج", "nationalCode": "1271380366", "medicalCode": "170196", "startDate": "1403/12/01", "exitDate": "", "remarks": ""}, {"id": 48, "radif": "48", "firstName": "فائزه", "lastName": "رشیدی", "specialty": "کودکان", "city": "سنندج", "nationalCode": "2880104564", "medicalCode": "173766", "startDate": "1403/12/25", "exitDate": "", "remarks": ""}, {"id": 49, "radif": "49", "firstName": "ندا", "lastName": "زارعی", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "3733043200", "medicalCode": "145787", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 50, "radif": "50", "firstName": "شینا", "lastName": "کریمی", "specialty": "زنان وزایمان", "city": "سنندج", "nationalCode": "3733190289", "medicalCode": "155593", "startDate": "1404/08/13", "exitDate": "", "remarks": ""}, {"id": 51, "radif": "51", "firstName": "علی اشرف", "lastName": "رادور", "specialty": "کودکان", "city": "سنندج", "nationalCode": "3770344073", "medicalCode": "85724", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 52, "radif": "52", "firstName": "فرید", "lastName": "عبدی", "specialty": "ارتوپدی", "city": "سنندج-سقز", "nationalCode": "3720272559", "medicalCode": "163944", "startDate": "1403/07/01", "exitDate": "", "remarks": "ازتاریخ 1404/08/01 فعالیت مشترک مراکز سقز وسنندج"}, {"id": 53, "radif": "53", "firstName": "سرور", "lastName": "خاطری", "specialty": "طب فیزیکی وتوانبخشی", "city": "سنندج-مریوان", "nationalCode": "3830123353", "medicalCode": "170481", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 54, "radif": "54", "firstName": "غزل", "lastName": "جلالی", "specialty": "قلب و عروق", "city": "سنندج-دیواندره", "nationalCode": "3240361051", "medicalCode": "164902", "startDate": "1404/09/01", "exitDate": "", "remarks": "مشترک با مراکز سنندج ودیواندره"}, {"id": 55, "radif": "55", "firstName": "علیرضا", "lastName": "مرزبان", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "2420535332", "medicalCode": "165690", "startDate": "1404/08/18", "exitDate": "", "remarks": ""}, {"id": 56, "radif": "56", "firstName": "صبا", "lastName": "فقری", "specialty": "پاتولوژی", "city": "سنندج", "nationalCode": "1570278814", "medicalCode": "170878", "startDate": "1404/08/18", "exitDate": "", "remarks": ""}, {"id": 57, "radif": "57", "firstName": "روزبه", "lastName": "محمدی", "specialty": "جراحي مغز و اعصاب", "city": "سنندج", "nationalCode": "3732216705", "medicalCode": "151973", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 58, "radif": "58", "firstName": "احسان", "lastName": "پرواس", "specialty": "فوق تخصص جراحی قلب وعروق", "city": "سنندج", "nationalCode": "0079735487", "medicalCode": "142639", "startDate": "1404/10/01", "exitDate": "", "remarks": ""}, {"id": 59, "radif": "59", "firstName": "ربابه", "lastName": "محمد بیگی", "specialty": "فلوشیپ نازایی", "city": "سنندج", "nationalCode": "4410114298", "medicalCode": "26318", "startDate": "1404/11/01", "exitDate": "", "remarks": ""}, {"id": 60, "radif": "60", "firstName": "مسعود", "lastName": "حسن زاده", "specialty": "جراحی دهان،فک وصورت", "city": "سنندج", "nationalCode": "2880155071", "medicalCode": "163260", "startDate": "1405/01/01", "exitDate": "", "remarks": ""}, {"id": 61, "radif": "61", "firstName": "میلاد", "lastName": "سعادت", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "سنندج-قروه", "nationalCode": "3750312702", "medicalCode": "192465", "startDate": "1405/03/16", "exitDate": "", "remarks": "ازتاریخ1405/07/01 مشترکا\" مراکز سنندج ومرکز قروه"}, {"id": 62, "radif": "62", "firstName": "محمد مهدی", "lastName": "زیرک ساز", "specialty": "جراح عمومی", "city": "سنندج", "nationalCode": "0064390047", "medicalCode": "121727", "startDate": "1403/07/08", "exitDate": "", "remarks": ""}, {"id": 63, "radif": "63", "firstName": "محسن", "lastName": "محمدی", "specialty": "فوق تخصص گوارش وکبد بالغین", "city": "سنندج", "nationalCode": "3761992841", "medicalCode": "105061", "startDate": "1404/10/21", "exitDate": "", "remarks": "از تاریخ 1405/06/01 ازتمام وقت جغرافیایی تبدیل به تمام وقت درمانی"}, {"id": 64, "radif": "64", "firstName": "زینب", "lastName": "فرسنگی", "specialty": "پزشکی هسته ای", "city": "سنندج", "nationalCode": "3701771995", "medicalCode": "153134", "startDate": "1405/02/07", "exitDate": "", "remarks": ""}, {"id": 65, "radif": "65", "firstName": "مهدی", "lastName": "زند", "specialty": "فلوشیپ اینترونشن قلب", "city": "سنندج", "nationalCode": "3801683125", "medicalCode": "138111", "startDate": "1405/06/14", "exitDate": "", "remarks": ""}, {"id": 66, "radif": "66", "firstName": "احمد رضا", "lastName": "الهي واحد", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "2181108153", "medicalCode": "47521", "startDate": "1394/8/19", "exitDate": "", "remarks": ""}, {"id": 67, "radif": "67", "firstName": "سارا", "lastName": "محمدزاده خواجوی", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "3732910865", "medicalCode": "139348", "startDate": "1397/09/01", "exitDate": "", "remarks": ""}, {"id": 68, "radif": "68", "firstName": "زیبا", "lastName": "خدایاری", "specialty": "زنان وزایمان", "city": "دیواندره- سنندج", "nationalCode": "3781972445", "medicalCode": "117455", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ 1401/07/06 مشترکا\" با مراکز سنندج"}, {"id": 69, "radif": "69", "firstName": "ئازاده", "lastName": "فتحی", "specialty": "بیهوشی", "city": "دیواندره-سنندج", "nationalCode": "3733090713", "medicalCode": "134896", "startDate": "1398/09/01", "exitDate": "", "remarks": "از تاریخ 99/4/1درسنندج مشترکا\" با دیواندره"}, {"id": 70, "radif": "70", "firstName": "محمد علي", "lastName": "اژدري", "specialty": "روانپزشکی", "city": "ديواندره‌", "nationalCode": "2062864000", "medicalCode": "57023", "startDate": "1400/10/01", "exitDate": "", "remarks": "ازتاریخ1402/10/01 غایب"}, {"id": 71, "radif": "71", "firstName": "سميه", "lastName": "فتاحيان", "specialty": "داخلی", "city": "دیواندره", "nationalCode": "3750072566", "medicalCode": "151809", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 72, "radif": "72", "firstName": "موسي", "lastName": "لطفي وند", "specialty": "روانپزشکی", "city": "دیواندره", "nationalCode": "1377248046", "medicalCode": "75005", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 73, "radif": "73", "firstName": "اوین", "lastName": "جویا", "specialty": "بیماریهای مغز واعصاب", "city": "دیواندره", "nationalCode": "3750193614", "medicalCode": "163330", "startDate": "1404/01/01", "exitDate": "", "remarks": ""}, {"id": 74, "radif": "74", "firstName": "مرتضی", "lastName": "علیزاده فروتن", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "2200497229", "medicalCode": "113780", "startDate": "1404/01/01", "exitDate": "", "remarks": ""}, {"id": 75, "radif": "75", "firstName": "شاهین", "lastName": "صارمی", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "1540200167", "medicalCode": "167470", "startDate": "1403/07/04", "exitDate": "", "remarks": ""}, {"id": 76, "radif": "76", "firstName": "غزل", "lastName": "جلالی", "specialty": "قلب و عروق", "city": "دیواندره-سنندج", "nationalCode": "3240361051", "medicalCode": "164902", "startDate": "1404/09/01", "exitDate": "", "remarks": "مشترک با مراکز سنندج ودیواندره"}, {"id": 77, "radif": "77", "firstName": "افسانه", "lastName": "رحمه", "specialty": "زنان وزایمان", "city": "دیواندره", "nationalCode": "2920187770", "medicalCode": "184969", "startDate": "1404/08/27", "exitDate": "", "remarks": ""}, {"id": 78, "radif": "78", "firstName": "مریم", "lastName": "مرادپور", "specialty": "کودکان", "city": "دیواندره", "nationalCode": "0013376624", "medicalCode": "170274", "startDate": "1404/08/01", "exitDate": "1405/07/30", "remarks": "انتقال به دانشگاه تهران"}, {"id": 79, "radif": "79", "firstName": "حانیه", "lastName": "مالمیر", "specialty": "کودکان", "city": "دیواندره", "nationalCode": "0018961061", "medicalCode": "180719", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 80, "radif": "80", "firstName": "فاطمه", "lastName": "کریمخانی چیانه", "specialty": "بیهوشی", "city": "دیواندره", "nationalCode": "2909681122", "medicalCode": "113850", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 81, "radif": "81", "firstName": "محمد", "lastName": "فرهادی مسترخانی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "دیواندره- بیجار", "nationalCode": "3240523027", "medicalCode": "159093", "startDate": "1404/09/01", "exitDate": "", "remarks": "ارتاریخ 1404/10/01 مشترکا\" با مرکز دیواندره"}, {"id": 82, "radif": "82", "firstName": "سعید", "lastName": "چوپانی", "specialty": "کودکان", "city": "دیواندره-سقز", "nationalCode": "2920245694", "medicalCode": "199529", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 83, "radif": "83", "firstName": "زانیار", "lastName": "رحمانی", "specialty": "جراح عمومی", "city": "دیواندره", "nationalCode": "3720401251", "medicalCode": "187712", "startDate": "1405/05/01", "exitDate": "", "remarks": ""}, {"id": 84, "radif": "84", "firstName": "ژاله", "lastName": "آسانی", "specialty": "رادیولوژی", "city": "دیواندره", "nationalCode": "3830148275", "medicalCode": "170962", "startDate": "1405/05/01", "exitDate": "", "remarks": ""}, {"id": 85, "radif": "85", "firstName": "سالار", "lastName": "باغبانی", "specialty": "ارتوپدی", "city": "دیواندره", "nationalCode": "3720365247", "medicalCode": "169554", "startDate": "1405/07/01", "exitDate": "", "remarks": ""}, {"id": 86, "radif": "86", "firstName": "دلیر", "lastName": "حمزه ئی", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3849828107", "medicalCode": "133130", "startDate": "1397/10/01", "exitDate": "", "remarks": ""}, {"id": 87, "radif": "87", "firstName": "چنور", "lastName": "لیموئی", "specialty": "زنان وزایمان", "city": "بانه", "nationalCode": "3762019703", "medicalCode": "125005", "startDate": "1398/7/1", "exitDate": "", "remarks": ""}, {"id": 88, "radif": "88", "firstName": "ویدا", "lastName": "علوی", "specialty": "داخلی", "city": "بانه", "nationalCode": "3781957081", "medicalCode": "109051", "startDate": "1400/08/01", "exitDate": "", "remarks": ""}, {"id": 89, "radif": "89", "firstName": "فرزاد", "lastName": "بیگلری", "specialty": "جراح عمومی", "city": "بانه-سنندج", "nationalCode": "4949786253", "medicalCode": "132625", "startDate": "1400/10/18", "exitDate": "", "remarks": "غائب"}, {"id": 90, "radif": "90", "firstName": "سیده یاسمن", "lastName": "حسینی", "specialty": "کودکان", "city": "بانه- سقز", "nationalCode": "3720115887", "medicalCode": "155815", "startDate": "1401/06/22", "exitDate": "", "remarks": "ازتاریخ 1402/02/01 مشترکا\" بامراکز سقز"}, {"id": 91, "radif": "91", "firstName": "ناصح", "lastName": "طاهربانه", "specialty": "بیهوشی", "city": "بانه", "nationalCode": "3849685683", "medicalCode": "108129", "startDate": "1402/10/06", "exitDate": "", "remarks": ""}, {"id": 92, "radif": "92", "firstName": "شهریار", "lastName": "شجیعی", "specialty": "بیهوشی", "city": "بانه", "nationalCode": "3721055713", "medicalCode": "61349", "startDate": "1402/11/01", "exitDate": "", "remarks": ""}, {"id": 93, "radif": "93", "firstName": "امید", "lastName": "قادری", "specialty": "فوق تخصص نفرولوژی کودکان", "city": "بانه-سقز", "nationalCode": "3849662705", "medicalCode": "71976", "startDate": "1403/05/01", "exitDate": "1405/05/05", "remarks": "تاسیس مطب"}, {"id": 94, "radif": "94", "firstName": "سميرا", "lastName": "جمشيدي", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3240117568", "medicalCode": "156328", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 95, "radif": "95", "firstName": "هاوری", "lastName": "مروتی", "specialty": "طب فیزیکی وتوانبخشی", "city": "بانه", "nationalCode": "3849822941", "medicalCode": "134137", "startDate": "1404/05/29", "exitDate": "", "remarks": ""}, {"id": 96, "radif": "96", "firstName": "فائزه السادات", "lastName": "هاشمی مفرد", "specialty": "زنان وزایمان", "city": "بانه", "nationalCode": "1271354489", "medicalCode": "171238", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 97, "radif": "97", "firstName": "پویا", "lastName": "حسنی شایان", "specialty": "کودکان", "city": "بانه", "nationalCode": "1382193882", "medicalCode": "144277", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 98, "radif": "98", "firstName": "ژیوار", "lastName": "رشیدپور", "specialty": "رادیولوژی", "city": "بانه", "nationalCode": "3762344124", "medicalCode": "147540", "startDate": "1405/02/08", "exitDate": "", "remarks": ""}, {"id": 99, "radif": "99", "firstName": "مهران", "lastName": "آخوندی", "specialty": "جراح عمومی", "city": "بانه", "nationalCode": "3750199906", "medicalCode": "163371", "startDate": "1405/01/15", "exitDate": "", "remarks": ""}, {"id": 100, "radif": "100", "firstName": "محبوبه", "lastName": "بهروز گله کلایی", "specialty": "پاتولوژی", "city": "بانه", "nationalCode": "2080148001", "medicalCode": "158951", "startDate": "1405/02/01", "exitDate": "", "remarks": ""}, {"id": 101, "radif": "101", "firstName": "عیسی", "lastName": "خالدی", "specialty": "اورولوژی", "city": "بانه", "nationalCode": "3810005363", "medicalCode": "151491", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید"}, {"id": 102, "radif": "102", "firstName": "بهزاد", "lastName": "اسماعيلي ايوكي", "specialty": "بیهوشی", "city": "بيجار", "nationalCode": "2161584138", "medicalCode": "61683", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 103, "radif": "103", "firstName": "سیده معصومه", "lastName": "سبحانی", "specialty": "کودکان", "city": "بیجار", "nationalCode": "3782424344", "medicalCode": "133686", "startDate": "1398/10/1", "exitDate": "", "remarks": "از تاریخ 1402/01/01 غایب"}, {"id": 104, "radif": "104", "firstName": "نیلوفر", "lastName": "مرادی", "specialty": "داخلی", "city": "بیجار", "nationalCode": "0310886260", "medicalCode": "172495", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 105, "radif": "105", "firstName": "الهه", "lastName": "نوروز بیگی", "specialty": "داخلی", "city": "بیجار", "nationalCode": "1490292081", "medicalCode": "163583", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 106, "radif": "106", "firstName": "رويا", "lastName": "نعمتي", "specialty": "زنان وزایمان", "city": "بیجار", "nationalCode": "1520248891", "medicalCode": "187972", "startDate": "1403/09/24", "exitDate": "", "remarks": ""}, {"id": 107, "radif": "107", "firstName": "راضیه", "lastName": "صفری", "specialty": "روانپزشکی", "city": "بیجار", "nationalCode": "4360023189", "medicalCode": "151144", "startDate": "1404/03/27", "exitDate": "", "remarks": ""}, {"id": 108, "radif": "108", "firstName": "کورش", "lastName": "ارژنگ پور", "specialty": "بیهوشی", "city": "بیجار", "nationalCode": "2909808335", "medicalCode": "95289", "startDate": "1403/12/20", "exitDate": "", "remarks": ""}, {"id": 109, "radif": "109", "firstName": "سیده بهاره", "lastName": "موسوی افشار", "specialty": "زنان وزایمان", "city": "بیجار", "nationalCode": "1450172911", "medicalCode": "168143", "startDate": "1404/10/01", "exitDate": "1405/07/30", "remarks": "انتقال به دانشگاه اردبیل"}, {"id": 110, "radif": "110", "firstName": "نسا", "lastName": "مفاخری", "specialty": "کودکان", "city": "بیجار", "nationalCode": "3790349399", "medicalCode": "200161", "startDate": "1404/11/15", "exitDate": "", "remarks": ""}, {"id": 111, "radif": "111", "firstName": "امین", "lastName": "صادقی عدل", "specialty": "بیماریهای مغز واعصاب", "city": "بیجار", "nationalCode": "1360737464", "medicalCode": "168547", "startDate": "1404/10/01", "exitDate": "", "remarks": ""}, {"id": 112, "radif": "112", "firstName": "محمد", "lastName": "فرهادی مسترخانی", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "بیجار-دیواندره", "nationalCode": "3240523027", "medicalCode": "159093", "startDate": "1404/09/01", "exitDate": "", "remarks": "ارتاریخ 1404/10/01 مشترکا\" با مرکز دیواندره"}, {"id": 113, "radif": "113", "firstName": "بابك", "lastName": "پرتوي", "specialty": "داخلی", "city": "كامياران‌-سنندج", "nationalCode": "3732435792", "medicalCode": "128360", "startDate": "1400/10/01", "exitDate": "", "remarks": "از تاریخ1405/03/01 غایب"}, {"id": 114, "radif": "114", "firstName": "عزیز", "lastName": "شریفی", "specialty": "روانپزشکی", "city": "کامیاران", "nationalCode": "3849902498", "medicalCode": "122968", "startDate": "1400/10/01", "exitDate": "", "remarks": ""}, {"id": 115, "radif": "115", "firstName": "سارا", "lastName": "باتمانی", "specialty": "پاتولوژی", "city": "کامیاران-سنندج", "nationalCode": "3830075537", "medicalCode": "158251", "startDate": "1402/07/01", "exitDate": "", "remarks": ""}, {"id": 116, "radif": "116", "firstName": "سارا", "lastName": "كاسب", "specialty": "بیهوشی", "city": "کامیاران", "nationalCode": "3732910989", "medicalCode": "142563", "startDate": "1400/10/01", "exitDate": "", "remarks": "غایب"}, {"id": 117, "radif": "117", "firstName": "لیلا", "lastName": "الفتی", "specialty": "قلب و عروق", "city": "کامیاران", "nationalCode": "3379851906", "medicalCode": "108969", "startDate": "1402/10/01", "exitDate": "", "remarks": "تا تاریخ 1405/04/01 مرخصی بدون حقوق"}, {"id": 118, "radif": "118", "firstName": "دریا", "lastName": "خسروی", "specialty": "پوست", "city": "کامیاران-سنندج", "nationalCode": "3733183312", "medicalCode": "151532", "startDate": "1402/12/20", "exitDate": "", "remarks": "غایب"}, {"id": 119, "radif": "119", "firstName": "مسعود", "lastName": "نادری", "specialty": "بیهوشی", "city": "کامیاران-مریوان", "nationalCode": "3230220455", "medicalCode": "89455", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 120, "radif": "120", "firstName": "مارال", "lastName": "روزبهانی", "specialty": "زنان وزایمان", "city": "کامیاران", "nationalCode": "4120176894", "medicalCode": "164217", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 121, "radif": "121", "firstName": "آزاد", "lastName": "عبدی", "specialty": "داخلی", "city": "کامیاران", "nationalCode": "3840032946", "medicalCode": "154000", "startDate": "1404/08/11", "exitDate": "", "remarks": ""}, {"id": 122, "radif": "122", "firstName": "میثاق", "lastName": "رستمی", "specialty": "بیهوشی", "city": "کامیاران", "nationalCode": "0078578752", "medicalCode": "158503", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 123, "radif": "123", "firstName": "رامین", "lastName": "کرمی", "specialty": "جراح عمومی", "city": "کامیاران", "nationalCode": "3241063089", "medicalCode": "173466", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 124, "radif": "124", "firstName": "تلمان", "lastName": "سینا", "specialty": "کودکان", "city": "کامیاران", "nationalCode": "2753759189", "medicalCode": "117707", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 125, "radif": "125", "firstName": "پریا", "lastName": "صولتی", "specialty": "زنان وزایمان", "city": "کامیاران", "nationalCode": "1381749100", "medicalCode": "142607", "startDate": "1404/07/01", "exitDate": "", "remarks": ""}, {"id": 126, "radif": "126", "firstName": "کیانا", "lastName": "کوتی", "specialty": "روانپزشکی", "city": "کامیاران", "nationalCode": "3240477221", "medicalCode": "165821", "startDate": "1405/05/19", "exitDate": "", "remarks": ""}, {"id": 127, "radif": "127", "firstName": "حجت", "lastName": "بهرام آبادی", "specialty": "جراح عمومی", "city": "کامیاران", "nationalCode": "3253302768", "medicalCode": "83030", "startDate": "1404/08/01", "exitDate": "", "remarks": "ازتاریخ 1405/08/01 انتقال از سقز به مرکز کامیاران"}, {"id": 128, "radif": "128", "firstName": "آرش", "lastName": "رشیدی", "specialty": "ارتوپدی", "city": "کامیاران", "nationalCode": "3840001943", "medicalCode": "149207", "startDate": "1405/07/14", "exitDate": "", "remarks": ""}, {"id": 129, "radif": "129", "firstName": "نشمیل", "lastName": "اندیشه", "specialty": "داخلی", "city": "کامیاران", "nationalCode": "3760225217", "medicalCode": "128361", "startDate": "1405/07/01", "exitDate": "", "remarks": "ورود مجدد به طرح تمام وقتی"}, {"id": 130, "radif": "130", "firstName": "محمد فايق", "lastName": "يوسفي", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "3732325652", "medicalCode": "63565", "startDate": "1393/7/1", "exitDate": "", "remarks": ""}, {"id": 131, "radif": "131", "firstName": "ماجد", "lastName": "مشهوري", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "3761940149", "medicalCode": "49502", "startDate": "1394/8/19", "exitDate": "", "remarks": ""}, {"id": 132, "radif": "132", "firstName": "زهرا", "lastName": "محمدی", "specialty": "بیهوشی", "city": "سقر", "nationalCode": "0054802180", "medicalCode": "113976", "startDate": "1397/10/1", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سنندج طبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی"}, {"id": 133, "radif": "133", "firstName": "فواد", "lastName": "فتحی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3762064903", "medicalCode": "135069", "startDate": "1401/04/01", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سقزطبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی"}, {"id": 134, "radif": "134", "firstName": "سیده یاسمن", "lastName": "حسینی", "specialty": "کودکان", "city": "سقز-بانه", "nationalCode": "3720115887", "medicalCode": "155815", "startDate": "1401/06/22", "exitDate": "", "remarks": "ازتاریخ 1402/02/01 مشترکا\" بامراکز سقز"}, {"id": 135, "radif": "135", "firstName": "ئه وین", "lastName": "خورشیدی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3762010889", "medicalCode": "124002", "startDate": "1402/02/01", "exitDate": "", "remarks": "همکاری با بیمارستان تأمین اجتماعی سقزطبق تفاهم نامه فی مابین وزارت بهداشت ودرمان تأمین اجتماعی"}, {"id": 136, "radif": "136", "firstName": "بیان", "lastName": "محمودی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3850001407", "medicalCode": "146643", "startDate": "1401/08/01", "exitDate": "", "remarks": ""}, {"id": 137, "radif": "137", "firstName": "مصطفی", "lastName": "دارابی", "specialty": "چشم", "city": "سقز", "nationalCode": "5819975472", "medicalCode": "141604", "startDate": "1402/12/01", "exitDate": "", "remarks": ""}, {"id": 138, "radif": "138", "firstName": "امید", "lastName": "قادری", "specialty": "فوق تخصص نفرولوژی کودکان", "city": "سقز-بانه", "nationalCode": "3849662705", "medicalCode": "71976", "startDate": "1403/05/01", "exitDate": "1405/05/05", "remarks": "تاسیس مطب"}, {"id": 139, "radif": "139", "firstName": "علیرضا", "lastName": "قبادی", "specialty": "داخلی", "city": "سقز", "nationalCode": "3961909385", "medicalCode": "129223", "startDate": "1403/02/01", "exitDate": "", "remarks": ""}, {"id": 140, "radif": "140", "firstName": "فرید", "lastName": "عبدی", "specialty": "ارتوپدی", "city": "سقز-سنندج", "nationalCode": "3720272559", "medicalCode": "163944", "startDate": "1403/07/01", "exitDate": "", "remarks": "ازتاریخ 1404/08/01 فعالیت مشترک مراکز سقز وسنندج"}, {"id": 141, "radif": "141", "firstName": "رویا", "lastName": "محمدی", "specialty": "روانپزشکی", "city": "سقز", "nationalCode": "3762349886", "medicalCode": "149221", "startDate": "1403/07/07", "exitDate": "", "remarks": ""}, {"id": 142, "radif": "142", "firstName": "پريناز", "lastName": "پرتوي", "specialty": "داخلی", "city": "سقز", "nationalCode": "0011569573", "medicalCode": "151575", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 143, "radif": "143", "firstName": "مازيار", "lastName": "بني بشر", "specialty": "جراح عمومی", "city": "سقز", "nationalCode": "3732985806", "medicalCode": "144564", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 144, "radif": "144", "firstName": "عماد", "lastName": "فخروئیان", "specialty": "بیماریهای مغز واعصاب", "city": "سقز", "nationalCode": "1375665774", "medicalCode": "35431", "startDate": "1404/05/01", "exitDate": "", "remarks": ""}, {"id": 145, "radif": "145", "firstName": "محمد ظهیر", "lastName": "شفیعی", "specialty": "رادیولوژی", "city": "سقز", "nationalCode": "3720444570", "medicalCode": "180930", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 146, "radif": "146", "firstName": "حجت", "lastName": "بهرام آبادی", "specialty": "جراح عمومی", "city": "سقز", "nationalCode": "3253302768", "medicalCode": "83030", "startDate": "1404/08/01", "exitDate": "", "remarks": "ازتاریخ 1405/08/01 انتقال به مرکز کامیاران"}, {"id": 147, "radif": "147", "firstName": "عاطفه", "lastName": "خیراله یان", "specialty": "قلب و عروق", "city": "سقز", "nationalCode": "2960331621", "medicalCode": "196388", "startDate": "1404/08/15", "exitDate": "", "remarks": ""}, {"id": 148, "radif": "148", "firstName": "شب ناز", "lastName": "نوایی فر", "specialty": "کودکان", "city": "سقز", "nationalCode": "3258273014", "medicalCode": "161284", "startDate": "1404/08/24", "exitDate": "", "remarks": ""}, {"id": 149, "radif": "149", "firstName": "سعید", "lastName": "چوپانی", "specialty": "کودکان", "city": "سقز-دیواندره", "nationalCode": "2920245694", "medicalCode": "199529", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 150, "radif": "150", "firstName": "سارا", "lastName": "شاه ویسی", "specialty": "پاتولوژی", "city": "سقز", "nationalCode": "3733032365", "medicalCode": "147291", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 151, "radif": "151", "firstName": "ترانه", "lastName": "ضیایی ضیاالدینی", "specialty": "رادیوانکولوژی", "city": "سقز", "nationalCode": "2080015540", "medicalCode": "149683", "startDate": "1404/09/08", "exitDate": "", "remarks": ""}, {"id": 152, "radif": "152", "firstName": "سحر", "lastName": "باقری چیمه", "specialty": "زنان وزایمان", "city": "سقز", "nationalCode": "0012738018", "medicalCode": "167539", "startDate": "1404/10/01", "exitDate": "", "remarks": ""}, {"id": 153, "radif": "153", "firstName": "فرخ", "lastName": "ایرجی", "specialty": "بیماریهای مغز واعصاب", "city": "سقز", "nationalCode": "2802641451", "medicalCode": "83735", "startDate": "1404/10/01", "exitDate": "", "remarks": ""}, {"id": 154, "radif": "154", "firstName": "آرمین", "lastName": "شهلایی", "specialty": "بیهوشی", "city": "سقز", "nationalCode": "12384674", "medicalCode": "169641", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 155, "radif": "155", "firstName": "پریسا", "lastName": "رنجبر", "specialty": "زنان وزایمان", "city": "سقز-سروآباد", "nationalCode": "3750257299", "medicalCode": "178918", "startDate": "1404/08/11", "exitDate": "", "remarks": "از تاریخ1405/03/15 مشترک با مراکز سقز"}, {"id": 156, "radif": "156", "firstName": "حسین", "lastName": "منصوری", "specialty": "فوق تخصص نوزادان", "city": "سقز", "nationalCode": "1550814168", "medicalCode": "90488", "startDate": "1405/03/28", "exitDate": "", "remarks": ""}, {"id": 157, "radif": "157", "firstName": "ثریا", "lastName": "رشیدزاده", "specialty": "زنان وزایمان", "city": "سقز", "nationalCode": "3762117098", "medicalCode": "132793", "startDate": "1405/01/01", "exitDate": "", "remarks": ""}, {"id": 158, "radif": "158", "firstName": "نسرین", "lastName": "حیدری", "specialty": "فوق تخصص نوزادان", "city": "سقز", "nationalCode": "3820080112", "medicalCode": "112289", "startDate": "1405/07/01", "exitDate": "", "remarks": ""}, {"id": 159, "radif": "159", "firstName": "هیوا", "lastName": "شادمانی", "specialty": "طب فیزیکی وتوانبخشی", "city": "سقز", "nationalCode": "3750031355", "medicalCode": "155020", "startDate": "1405/07/19", "exitDate": "", "remarks": ""}, {"id": 160, "radif": "160", "firstName": "فواد", "lastName": "یزدانی", "specialty": "پوست", "city": "سقز", "nationalCode": "3760211453", "medicalCode": "114364", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید"}, {"id": 161, "radif": "161", "firstName": "سبحان", "lastName": "حسن زاده", "specialty": "بیماریهای مغز واعصاب", "city": "مریوان", "nationalCode": "3230683234", "medicalCode": "78307", "startDate": "1394/09/01", "exitDate": "", "remarks": ""}, {"id": 162, "radif": "162", "firstName": "فرهاد", "lastName": "سوري", "specialty": "عفونی", "city": "مريوان", "nationalCode": "3251779451", "medicalCode": "59300", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 163, "radif": "163", "firstName": "پرويز", "lastName": "شبرندي", "specialty": "بیهوشی", "city": "مريوان", "nationalCode": "3230641787", "medicalCode": "61523", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 164, "radif": "164", "firstName": "اکبر", "lastName": "سنگری", "specialty": "ارتوپدی", "city": "مریوان-سنندج", "nationalCode": "3732596362", "medicalCode": "135705", "startDate": "1395/09/01", "exitDate": "", "remarks": ""}, {"id": 165, "radif": "165", "firstName": "شرمین", "lastName": "صدیقی", "specialty": "قلب و عروق", "city": "مریوان", "nationalCode": "6469964729", "medicalCode": "132794", "startDate": "1397/09/01", "exitDate": "", "remarks": "ازتاریخ1401/10/06 غایب می باشد."}, {"id": 166, "radif": "166", "firstName": "سيد مسعود", "lastName": "موسوي جم", "specialty": "بیهوشی", "city": "مریوان - سنندج", "nationalCode": "3801199398", "medicalCode": "75970", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ1400/10/1 مشترکا\" با مراکز سنندج فعالیت دارند"}, {"id": 167, "radif": "167", "firstName": "صدیق", "lastName": "رستمیان", "specialty": "كودكان", "city": "مریوان", "nationalCode": "3230646045", "medicalCode": "51221", "startDate": "1399/10/1", "exitDate": "", "remarks": ""}, {"id": 168, "radif": "168", "firstName": "زاهد", "lastName": "مقصودی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "3733224191", "medicalCode": "147700", "startDate": "1401/07/01", "exitDate": "", "remarks": ""}, {"id": 169, "radif": "169", "firstName": "شیوا", "lastName": "امینی", "specialty": "روانپزشکی", "city": "مریوان", "nationalCode": "1740125177", "medicalCode": "154981", "startDate": "1401/10/01", "exitDate": "", "remarks": ""}, {"id": 170, "radif": "170", "firstName": "آرمان", "lastName": "حبیبی", "specialty": "بیماریهای مغز واعصاب", "city": "مریوان-سنندج", "nationalCode": "3811792842", "medicalCode": "140879", "startDate": "1401/10/14", "exitDate": "", "remarks": ""}, {"id": 171, "radif": "171", "firstName": "خالد", "lastName": "مینویی", "specialty": "داخلی", "city": "مریوان", "nationalCode": "3820028412", "medicalCode": "76309", "startDate": "1401/10/01", "exitDate": "", "remarks": ""}, {"id": 172, "radif": "172", "firstName": "مسعود", "lastName": "نادری", "specialty": "بیهوشی", "city": "مریوان-کامیاران", "nationalCode": "3230220455", "medicalCode": "89455", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 173, "radif": "173", "firstName": "نیکا", "lastName": "شاه جمالی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "0015001237", "medicalCode": "173634", "startDate": "1403/12/01", "exitDate": "", "remarks": "غائب"}, {"id": 174, "radif": "174", "firstName": "لایق", "lastName": "احمدی", "specialty": "پاتولوژی", "city": "مریوان", "nationalCode": "3230805658", "medicalCode": "112605", "startDate": "1403/07/15", "exitDate": "", "remarks": ""}, {"id": 175, "radif": "175", "firstName": "سرور", "lastName": "خاطری", "specialty": "طب فیزیکی وتوانبخشی", "city": "مریوان-سنندج", "nationalCode": "3830123353", "medicalCode": "170481", "startDate": "1404/08/01", "exitDate": "", "remarks": ""}, {"id": 176, "radif": "176", "firstName": "مسعود", "lastName": "ملکی", "specialty": "جراح عمومی", "city": "مریوان", "nationalCode": "4160204023", "medicalCode": "1650023", "startDate": "1404/08/15", "exitDate": "", "remarks": ""}, {"id": 177, "radif": "177", "firstName": "عادل", "lastName": "سجادی", "specialty": "ارتوپدی", "city": "مریوان- سروآباد", "nationalCode": "6460020620", "medicalCode": "164298", "startDate": "1404/07/13", "exitDate": "", "remarks": "ازتاریخ 1404/09/01 مشترک با مراکزمریوان وسروآباد"}, {"id": 178, "radif": "178", "firstName": "مهستی", "lastName": "قسمتی", "specialty": "زنان وزایمان", "city": "مریوان-سروآباد", "nationalCode": "1360081631", "medicalCode": "172027", "startDate": "1404/08/15", "exitDate": "", "remarks": ""}, {"id": 179, "radif": "179", "firstName": "نگار", "lastName": "ویسی", "specialty": "رادیولوژی", "city": "مریوان", "nationalCode": "3830163657", "medicalCode": "170975", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 180, "radif": "180", "firstName": "نیما", "lastName": "فتح الله زاده", "specialty": "ارتوپدی", "city": "مریوان-سروآباد", "nationalCode": "3750078440", "medicalCode": "160709", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 181, "radif": "181", "firstName": "نگار", "lastName": "قره پاشا", "specialty": "داخلی", "city": "مریوان", "nationalCode": "1360337792", "medicalCode": "159970", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 182, "radif": "182", "firstName": "الهام", "lastName": "فتحی", "specialty": "کودکان", "city": "مریوان", "nationalCode": "3720500853", "medicalCode": "179282", "startDate": "1402/08/01", "exitDate": "", "remarks": ""}, {"id": 183, "radif": "183", "firstName": "فاطمه", "lastName": "اسدي كوه پاد", "specialty": "زنان وزایمان", "city": "مریوان", "nationalCode": "1830222589", "medicalCode": "171450", "startDate": "1403/10/01", "exitDate": "", "remarks": ""}, {"id": 184, "radif": "184", "firstName": "ابوبکر", "lastName": "افراره", "specialty": "اورولوژی", "city": "مریوان", "nationalCode": "3821338113", "medicalCode": "138258", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید"}, {"id": 185, "radif": "185", "firstName": "مهدی", "lastName": "بهرامی", "specialty": "داخلی", "city": "مریوان", "nationalCode": "3820671706", "medicalCode": "104197", "startDate": "1405/08/01", "exitDate": "", "remarks": "جدید"}, {"id": 186, "radif": "186", "firstName": "کاوه", "lastName": "میرمظفری", "specialty": "بیهوشی", "city": "سروآباد", "nationalCode": "2721530877", "medicalCode": "86627", "startDate": "1396/9/29", "exitDate": "", "remarks": ""}, {"id": 187, "radif": "187", "firstName": "علی", "lastName": "بهشتی", "specialty": "داخلی", "city": "سروآباد", "nationalCode": "1262011781", "medicalCode": "121289", "startDate": "1401/10/01", "exitDate": "", "remarks": ""}, {"id": 188, "radif": "188", "firstName": "عادل", "lastName": "سجادی", "specialty": "ارتوپدی", "city": "سروآباد-مریوان", "nationalCode": "6460020620", "medicalCode": "164298", "startDate": "1404/07/13", "exitDate": "", "remarks": "ازتاریخ 1404/09/01 مشترک با مراکزمریوان وسروآباد"}, {"id": 189, "radif": "189", "firstName": "نیما", "lastName": "فتح الله زاده", "specialty": "ارتوپدی", "city": "سروآباد-مریوان", "nationalCode": "3750078440", "medicalCode": "160709", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 190, "radif": "190", "firstName": "پریسا", "lastName": "رنجبر", "specialty": "زنان وزایمان", "city": "سروآباد-سقز", "nationalCode": "3750257299", "medicalCode": "178918", "startDate": "1404/08/11", "exitDate": "", "remarks": "از تاریخ1405/03/15 مشترک با مراکز سقز"}, {"id": 191, "radif": "191", "firstName": "مهشید", "lastName": "ملکیان", "specialty": "داخلی", "city": "سروآباد", "nationalCode": "1190008513", "medicalCode": "154796", "startDate": "1404/08/17", "exitDate": "", "remarks": ""}, {"id": 192, "radif": "192", "firstName": "توحید", "lastName": "عبادی", "specialty": "کودکان", "city": "سروآباد", "nationalCode": "4939926966", "medicalCode": "202718", "startDate": "1404/09/01", "exitDate": "1405/07/30", "remarks": "اتمام تعهدات"}, {"id": 193, "radif": "193", "firstName": "ویدا", "lastName": "دهقان", "specialty": "رادیولوژی", "city": "سروآباد", "nationalCode": "3810155322", "medicalCode": "163542", "startDate": "1405/04/01", "exitDate": "", "remarks": ""}, {"id": 194, "radif": "194", "firstName": "اقبال", "lastName": "نوازكزي", "specialty": "گوش وحلق وبيني", "city": "قروه", "nationalCode": "خارجي", "medicalCode": "8987", "startDate": "1393/07/01", "exitDate": "", "remarks": ""}, {"id": 195, "radif": "195", "firstName": "مجيد", "lastName": "مومني", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3874613585", "medicalCode": "72148", "startDate": "1393/07/01", "exitDate": "", "remarks": "از تاریخ 1401/07/01 غایب می باشند."}, {"id": 196, "radif": "196", "firstName": "صبا", "lastName": "کاوه مجد", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3801285030", "medicalCode": "135179", "startDate": "1397/10/01", "exitDate": "", "remarks": "ازتاریخ1400/06/01 غایب می باشند"}, {"id": 197, "radif": "197", "firstName": "محمد مهدی", "lastName": "افتخاریان", "specialty": "رادیولوژی", "city": "قروه", "nationalCode": "3875442881", "medicalCode": "130268", "startDate": "1400/09/01", "exitDate": "", "remarks": ""}, {"id": 198, "radif": "198", "firstName": "فریبا", "lastName": "محمد جانی", "specialty": "پاتولوژی", "city": "قروه", "nationalCode": "2949529305", "medicalCode": "131221", "startDate": "1401/10/01", "exitDate": "", "remarks": "ازتاریخ 1402/06/01 غایب"}, {"id": 199, "radif": "199", "firstName": "علی", "lastName": "مرتضی زاده", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "0044555393", "medicalCode": "56090", "startDate": "1402/09/01", "exitDate": "", "remarks": ""}, {"id": 200, "radif": "200", "firstName": "مائده", "lastName": "یاوری", "specialty": "کودکان", "city": "قروه", "nationalCode": "3240839067", "medicalCode": "164219", "startDate": "1403/02/01", "exitDate": "", "remarks": ""}, {"id": 201, "radif": "201", "firstName": "نوید", "lastName": "شیروانی", "specialty": "داخلی", "city": "قروه", "nationalCode": "3801798951", "medicalCode": "148292", "startDate": "1403/07/01", "exitDate": "", "remarks": ""}, {"id": 202, "radif": "202", "firstName": "سیده مائده", "lastName": "حسینی", "specialty": "پاتولوژی", "city": "قروه", "nationalCode": "3801794148", "medicalCode": "152055", "startDate": "1402/07/03", "exitDate": "", "remarks": ""}, {"id": 203, "radif": "203", "firstName": "شکوفه", "lastName": "حیدری فرح", "specialty": "زنان وزایمان", "city": "قروه-دهگلان", "nationalCode": "3860106368", "medicalCode": "166193", "startDate": "1404/08/14", "exitDate": "", "remarks": ""}, {"id": 204, "radif": "204", "firstName": "افرا", "lastName": "محمدی", "specialty": "رادیولوژی", "city": "قروه", "nationalCode": "3720526331", "medicalCode": "194871", "startDate": "1404/08/10", "exitDate": "", "remarks": ""}, {"id": 205, "radif": "205", "firstName": "مائده", "lastName": "اصحابی", "specialty": "روانپزشکی", "city": "قروه", "nationalCode": "3790302600", "medicalCode": "195460", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 206, "radif": "206", "firstName": "الهام", "lastName": "صالح", "specialty": "کودکان", "city": "قروه", "nationalCode": "3810300985", "medicalCode": "178703", "startDate": "1404/09/10", "exitDate": "", "remarks": ""}, {"id": 207, "radif": "207", "firstName": "ایمان", "lastName": "رضانیا", "specialty": "قلب و عروق", "city": "قروه", "nationalCode": "", "medicalCode": "186545", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 208, "radif": "208", "firstName": "حمیده", "lastName": "تاج نسائی", "specialty": "بیماریهای مغز واعصاب", "city": "قروه", "nationalCode": "3782448928", "medicalCode": "150269", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 209, "radif": "209", "firstName": "بشیر", "lastName": "فرح پور", "specialty": "چشم", "city": "قروه", "nationalCode": "3800561824", "medicalCode": "161505", "startDate": "1405/03/16", "exitDate": "", "remarks": ""}, {"id": 210, "radif": "210", "firstName": "امیرحسین", "lastName": "فریدونیان", "specialty": "بیهوشی", "city": "قروه", "nationalCode": "3801773736", "medicalCode": "137437", "startDate": "1405/05/28", "exitDate": "", "remarks": ""}, {"id": 211, "radif": "211", "firstName": "میلاد", "lastName": "سعادت", "specialty": "جراحی کلیه و مجاری ادراری و تناسلی", "city": "قروه-سنندج", "nationalCode": "3750312702", "medicalCode": "192465", "startDate": "1405/03/16", "exitDate": "", "remarks": "ازتاریخ1405/07/01 مشترکا\" مراکز سنندج ومرکز قروه"}, {"id": 212, "radif": "212", "firstName": "محمد", "lastName": "مرادی", "specialty": "روانپزشکی", "city": "دهگلان-سنندج", "nationalCode": "3732330664", "medicalCode": "88044", "startDate": "1399/06/15", "exitDate": "", "remarks": "از تاریخ 1404/01/01مشترک با مراکز سنندج"}, {"id": 213, "radif": "213", "firstName": "سبا", "lastName": "قادرخانی", "specialty": "پاتولوژی", "city": "دهگلان- سنندج", "nationalCode": "3732935353", "medicalCode": "147004", "startDate": "1399/09/02", "exitDate": "", "remarks": ""}, {"id": 214, "radif": "214", "firstName": "ابوالفضل", "lastName": "خدامرادی فیروز", "specialty": "کودکان", "city": "دهگلان", "nationalCode": "0043984827", "medicalCode": "85392", "startDate": "1398/07/30", "exitDate": "", "remarks": ""}, {"id": 215, "radif": "215", "firstName": "شکوفه", "lastName": "حیدری فرح", "specialty": "زنان وزایمان", "city": "دهگلان- قروه", "nationalCode": "3860106368", "medicalCode": "166193", "startDate": "1404/08/14", "exitDate": "", "remarks": ""}, {"id": 216, "radif": "216", "firstName": "بشری", "lastName": "رحمانی", "specialty": "داخلی", "city": "دهگلان", "nationalCode": "5960003821", "medicalCode": "163491", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}, {"id": 217, "radif": "217", "firstName": "سپیده", "lastName": "آذری اسکویی", "specialty": "داخلی", "city": "دهگلان", "nationalCode": "1700047876", "medicalCode": "165177", "startDate": "1404/09/01", "exitDate": "", "remarks": ""}];

// Global State
const STATE = {
    currentTab: 'geographic', // 'geographic', 'treatment', 'analytics', 'audit'
    user: null, // { name, role, permissions, token }
    geographicData: [],
    treatmentData: [],
    auditLogs: [],
    filteredData: [],
    currentPage: 1,
    pageSize: 25,
    searchQuery: '',
    selectedSpecialty: '',
    selectedSecondary: '',
    selectedStatus: '',
    charts: {}
};

// Passwords
const PASSWORDS = {
    ADMIN: '32332555',
    READONLY: '143625'
};

// Initialize Application on Page Load
document.addEventListener('DOMContentLoaded', async () => {
    checkSavedSession();
    await loadInitialData();
    setupEventListeners();
    updateUIForCurrentMode();
});

// Check if user has an active session
function checkSavedSession() {
    const savedUser = sessionStorage.getItem('med_user');
    if (savedUser) {
        try {
            STATE.user = JSON.parse(savedUser);
            hideLoginModal();
            updateRoleBadge();
        } catch (e) {
            sessionStorage.removeItem('med_user');
        }
    }
}

// Load data from API or fallback to localStorage / embedded data
async function loadInitialData() {
    let loadedFromApi = false;
    
    // Try API first
    if (STATE.user && STATE.user.token && STATE.user.token.startsWith('session_')) {
        try {
            const [resGeo, resTreat] = await Promise.all([
                fetch('/api/doctors?type=geographic&limit=1000', { headers: { 'Authorization': `Bearer ${STATE.user.token}` } }),
                fetch('/api/doctors?type=treatment&limit=1000', { headers: { 'Authorization': `Bearer ${STATE.user.token}` } })
            ]);
            
            if (resGeo.ok && resTreat.ok) {
                const geoJson = await resGeo.json();
                const treatJson = await resTreat.json();
                if (geoJson.success && treatJson.success) {
                    STATE.geographicData = geoJson.data || [];
                    STATE.treatmentData = treatJson.data || [];
                    loadedFromApi = true;
                }
            }
        } catch (err) {
            console.log('Running in offline/local mode.');
        }
    }

    // Offline / LocalStorage / Embedded Fallback
    if (!loadedFromApi) {
        const localGeo = localStorage.getItem('med_geo_data_v2');
        const localTreat = localStorage.getItem('med_treat_data_v2');
        
        if (localGeo && localTreat) {
            try {
                STATE.geographicData = JSON.parse(localGeo);
                STATE.treatmentData = JSON.parse(localTreat);
            } catch(e) {
                STATE.geographicData = [...EMBEDDED_GEOGRAPHIC_DATA];
                STATE.treatmentData = [...EMBEDDED_TREATMENT_DATA];
            }
        } else {
            STATE.geographicData = [...EMBEDDED_GEOGRAPHIC_DATA];
            STATE.treatmentData = [...EMBEDDED_TREATMENT_DATA];
            saveToLocalStorage();
        }
    }

    updateCounters();
    populateFilterDropdowns();
    applyFilters();
}

function saveToLocalStorage() {
    localStorage.setItem('med_geo_data_v2', JSON.stringify(STATE.geographicData));
    localStorage.setItem('med_treat_data_v2', JSON.stringify(STATE.treatmentData));
}

// ================= AUTHENTICATION =================

async function handleLogin(e) {
    if (e) e.preventDefault();
    const passwordInput = document.getElementById('loginPassword');
    const errorEl = document.getElementById('loginError');
    const password = (passwordInput.value || '').trim();

    errorEl.classList.add('hidden');
    errorEl.textContent = '';

    // Check online API
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });
        const data = await response.json();
        
        if (response.ok && data.success) {
            STATE.user = {
                name: data.user.name,
                role: data.user.role,
                permissions: data.user.permissions,
                token: data.token
            };
            sessionStorage.setItem('med_user', JSON.stringify(STATE.user));
            hideLoginModal();
            updateRoleBadge();
            await loadInitialData();
            Swal.fire({
                icon: 'success',
                title: 'ورود موفقیت‌آمیز',
                text: data.message,
                timer: 1500,
                showConfirmButton: false
            });
            return;
        } else if (response.status === 429) {
            errorEl.textContent = data.message;
            errorEl.classList.remove('hidden');
            return;
        }
    } catch (err) {
        console.log('Offline auth fallback');
    }

    // Client-side Offline Auth
    if (password === PASSWORDS.ADMIN) {
        STATE.user = {
            name: 'مدیر ارشد سیستم',
            role: 'admin',
            permissions: ['read', 'create', 'update', 'delete', 'export', 'import', 'logs'],
            token: 'offline_admin_token'
        };
        sessionStorage.setItem('med_user', JSON.stringify(STATE.user));
        hideLoginModal();
        updateRoleBadge();
        addLocalAuditLog('ورود مدیر', 'admin', 'ورود موفق مدیر سیستم به سامانه با دسترسی کامل');
        Swal.fire({
            icon: 'success',
            title: 'ورود موفق مدیر ارشد',
            text: 'دسترسی کامل ویرایش، حذف، افزودن و گزارش‌گیری فعال شد.',
            timer: 1500,
            showConfirmButton: false
        });
    } else if (password === PASSWORDS.READONLY) {
        STATE.user = {
            name: 'کاربر مشاهده‌کننده',
            role: 'readonly',
            permissions: ['read', 'export'],
            token: 'offline_readonly_token'
        };
        sessionStorage.setItem('med_user', JSON.stringify(STATE.user));
        hideLoginModal();
        updateRoleBadge();
        addLocalAuditLog('ورود کاربر', 'readonly', 'ورود به سامانه با دسترسی فقط خواندنی و گزارش‌گیری');
        Swal.fire({
            icon: 'info',
            title: 'ورود با دسترسی فقط خواندنی',
            text: 'دسترسی مشاهده، جستجو، فیلتر و خروجی اکسل و PDF فعال است.',
            timer: 1500,
            showConfirmButton: false
        });
    } else {
        errorEl.textContent = 'رمز عبور وارد شده نادرست است. لطفاً مجدداً بررسی فرمایید.';
        errorEl.classList.remove('hidden');
    }
}

function handleLogout() {
    Swal.fire({
        title: 'خروج از سامانه',
        text: 'آیا برای خروج از سامانه اطمینان دارید؟',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'بله، خروج',
        cancelButtonText: 'انصراف',
        confirmButtonColor: '#0d9488'
    }).then(async (result) => {
        if (result.isConfirmed) {
            if (STATE.user && STATE.user.token) {
                try {
                    await fetch('/api/auth/logout', {
                        method: 'POST',
                        headers: { 'Authorization': `Bearer ${STATE.user.token}` }
                    });
                } catch (e) {}
            }
            STATE.user = null;
            sessionStorage.removeItem('med_user');
            showLoginModal();
        }
    });
}

function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').classList.add('hidden');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

function togglePasswordVisibility() {
    const input = document.getElementById('loginPassword');
    const icon = document.getElementById('eyeIcon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function updateRoleBadge() {
    const badge = document.getElementById('userRoleBadge');
    const label = document.getElementById('userRoleLabel');
    const addBtn = document.getElementById('addDoctorBtn');

    if (!STATE.user) {
        badge.classList.add('hidden');
        return;
    }

    badge.classList.remove('hidden');
    if (STATE.user.role === 'admin') {
        label.textContent = '👑 مدیر ارشد (دسترسی کامل)';
        badge.className = 'flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold';
        if (addBtn) addBtn.style.display = 'flex';
    } else {
        label.textContent = '👁️ کاربر فقط خواندنی (Read-Only)';
        badge.className = 'flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold';
        if (addBtn) addBtn.style.display = 'none';
    }
    renderTable();
}

// ================= NAVIGATION & TABS =================

function switchTab(tab) {
    STATE.currentTab = tab;
    
    // Update Button Styles
    const tabs = ['geographic', 'treatment', 'analytics', 'audit'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
        const mobBtn = document.getElementById(`mobTab${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (btn) {
            if (t === tab) {
                btn.className = 'tab-btn px-4 py-2 rounded-lg transition-all flex items-center gap-2 bg-white text-slate-800 shadow-sm font-extrabold';
            } else {
                btn.className = 'tab-btn px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold';
            }
        }
        if (mobBtn) {
            if (t === tab) {
                mobBtn.className = 'px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-bold whitespace-nowrap';
            } else {
                mobBtn.className = 'px-3 py-1.5 rounded-lg text-slate-600 font-bold whitespace-nowrap';
            }
        }
    });

    const tableSec = document.getElementById('tableSection');
    const analyticsSec = document.getElementById('analyticsSection');
    const auditSec = document.getElementById('auditSection');

    tableSec.classList.add('hidden');
    analyticsSec.classList.add('hidden');
    auditSec.classList.add('hidden');

    if (tab === 'geographic' || tab === 'treatment') {
        tableSec.classList.remove('hidden');
        updateUIForCurrentMode();
        populateFilterDropdowns();
        applyFilters();
    } else if (tab === 'analytics') {
        analyticsSec.classList.remove('hidden');
        renderAnalyticsCharts();
    } else if (tab === 'audit') {
        auditSec.classList.remove('hidden');
        loadAuditLogs();
    }
}

function updateUIForCurrentMode() {
    const isGeo = STATE.currentTab === 'geographic';
    const titleEl = document.getElementById('tableTitle');
    const subtitleEl = document.getElementById('tableSubtitle');
    const iconEl = document.getElementById('tableIcon');

    if (isGeo) {
        titleEl.textContent = 'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی شاغل در مراکز درمانی دانشگاه (شماره ۲)';
        subtitleEl.textContent = 'معاونت درمان دانشگاه علوم پزشکی کردستان (نسخه به‌روز شده: ۱۴۰۵/۰۸/۰۷)';
        iconEl.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
        iconEl.className = 'w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center text-sm shadow-sm';
    } else {
        titleEl.textContent = 'لیست مشخصات پزشکان تمام وقت درمانی شاغل در مراکز درمانی دانشگاه (شماره ۱)';
        subtitleEl.textContent = 'معاونت درمان دانشگاه علوم پزشکی کردستان (نسخه به‌روز شده: ۱۴۰۵/۰۸/۰۷)';
        iconEl.innerHTML = '<i class="fa-solid fa-stethoscope"></i>';
        iconEl.className = 'w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm shadow-sm';
    }
}

// ================= COUNTERS & STATS =================

function updateCounters() {
    const geo = STATE.geographicData;
    const treat = STATE.treatmentData;

    const geoActive = geo.filter(d => !d.exitDate || d.exitDate.trim() === '').length;
    const treatActive = treat.filter(d => !d.exitDate || d.exitDate.trim() === '').length;
    const geoExited = geo.length - geoActive;
    const treatExited = treat.length - treatActive;

    document.getElementById('badgeGeoCount').textContent = geo.length.toLocaleString('fa-IR');
    document.getElementById('badgeTreatCount').textContent = treat.length.toLocaleString('fa-IR');

    document.getElementById('statTotalAll').textContent = (geo.length + treat.length).toLocaleString('fa-IR');
    document.getElementById('statGeoTotal').textContent = geo.length.toLocaleString('fa-IR');
    document.getElementById('statGeoActive').textContent = `${geoActive.toLocaleString('fa-IR')} پزشک شاغل فعال`;
    document.getElementById('statTreatTotal').textContent = treat.length.toLocaleString('fa-IR');
    document.getElementById('statTreatActive').textContent = `${treatActive.toLocaleString('fa-IR')} پزشک شاغل فعال`;
    document.getElementById('statTotalExited').textContent = (geoExited + treatExited).toLocaleString('fa-IR');
}

// ================= FILTERS & SEARCH =================

function populateFilterDropdowns() {
    const isGeo = STATE.currentTab === 'geographic';
    const data = isGeo ? STATE.geographicData : STATE.treatmentData;

    // 1. Specialties
    const specialties = [...new Set(data.map(d => (d.specialty || '').trim()).filter(Boolean))].sort();
    const specSelect = document.getElementById('filterSpecialty');
    const currentSpec = STATE.selectedSpecialty;
    specSelect.innerHTML = '<option value="">همه رشته‌های تخصصی</option>';
    specialties.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        if (s === currentSpec) opt.selected = true;
        specSelect.appendChild(opt);
    });

    // 2. Secondary Filter (Rank for Geographic / City for Treatment)
    const secSelect = document.getElementById('filterSecondary');
    const currentSec = STATE.selectedSecondary;
    if (isGeo) {
        secSelect.innerHTML = '<option value="">همه مرتبه‌های علمی</option>';
        const ranks = [...new Set(data.map(d => (d.academicRank || '').trim()).filter(Boolean))].sort();
        ranks.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r;
            opt.textContent = `مرتبه: ${r}`;
            if (r === currentSec) opt.selected = true;
            secSelect.appendChild(opt);
        });
    } else {
        secSelect.innerHTML = '<option value="">همه شهرستان‌ها</option>';
        const cities = [...new Set(data.map(d => (d.city || '').trim()).filter(Boolean))].sort();
        cities.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = `شهرستان: ${c}`;
            if (c === currentSec) opt.selected = true;
            secSelect.appendChild(opt);
        });
    }
}

let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        STATE.searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
        STATE.currentPage = 1;
        applyFilters();
    }, 250);
}

function applyFilters() {
    const isGeo = STATE.currentTab === 'geographic';
    const rawData = isGeo ? STATE.geographicData : STATE.treatmentData;
    
    STATE.selectedSpecialty = document.getElementById('filterSpecialty').value;
    STATE.selectedSecondary = document.getElementById('filterSecondary').value;
    STATE.selectedStatus = document.getElementById('filterStatus').value;

    let result = rawData.filter(item => {
        // Search
        if (STATE.searchQuery) {
            const fullText = Object.values(item).join(' ').toLowerCase();
            if (!fullText.includes(STATE.searchQuery)) return false;
        }
        // Specialty
        if (STATE.selectedSpecialty && (item.specialty || '').trim() !== STATE.selectedSpecialty) {
            return false;
        }
        // Secondary Filter
        if (isGeo && STATE.selectedSecondary && (item.academicRank || '').trim() !== STATE.selectedSecondary) {
            return false;
        }
        if (!isGeo && STATE.selectedSecondary && !(item.city || '').includes(STATE.selectedSecondary)) {
            return false;
        }
        // Status
        if (STATE.selectedStatus === 'active') {
            if (item.exitDate && item.exitDate.trim() !== '') return false;
        } else if (STATE.selectedStatus === 'exited') {
            if (!item.exitDate || item.exitDate.trim() === '') return false;
        }
        return true;
    });

    STATE.filteredData = result;
    renderTable();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterSpecialty').value = '';
    document.getElementById('filterSecondary').value = '';
    document.getElementById('filterStatus').value = '';
    STATE.searchQuery = '';
    STATE.selectedSpecialty = '';
    STATE.selectedSecondary = '';
    STATE.selectedStatus = '';
    STATE.currentPage = 1;
    applyFilters();
}

// ================= TABLE RENDERING =================

function renderTable() {
    const isGeo = STATE.currentTab === 'geographic';
    const thead = document.getElementById('tableHead');
    const tbody = document.getElementById('tableBody');
    const emptyState = document.getElementById('emptyState');
    const paginationBar = document.getElementById('paginationBar');
    const isAdmin = STATE.user && STATE.user.role === 'admin';

    // 1. Table Headers
    if (isGeo) {
        thead.innerHTML = `
            <tr>
                <th class="py-3 px-3 text-center w-12">ردیف</th>
                <th class="py-3 px-3">نام و نام خانوادگی</th>
                <th class="py-3 px-3">رشته تخصص</th>
                <th class="py-3 px-3 font-mono text-center">کد ملی</th>
                <th class="py-3 px-3 font-mono text-center">نظام پزشکی</th>
                <th class="py-3 px-3 text-center">شروع بکار</th>
                <th class="py-3 px-3 text-center">نوع خدمت</th>
                <th class="py-3 px-3 text-center">مرتبه</th>
                <th class="py-3 px-3 text-center">خروج</th>
                <th class="py-3 px-3">ملاحظات</th>
                ${isAdmin ? '<th class="py-3 px-3 text-center w-24 no-print">عملیات</th>' : ''}
            </tr>
        `;
    } else {
        thead.innerHTML = `
            <tr>
                <th class="py-3 px-3 text-center w-12">ردیف</th>
                <th class="py-3 px-3">نام پزشک</th>
                <th class="py-3 px-3">تخصص</th>
                <th class="py-3 px-3 text-center">شهرستان</th>
                <th class="py-3 px-3 font-mono text-center">کد ملی</th>
                <th class="py-3 px-3 font-mono text-center">نظام پزشکی</th>
                <th class="py-3 px-3 text-center">تاریخ شروع تمام وقتی</th>
                <th class="py-3 px-3 text-center">تاریخ خروج</th>
                <th class="py-3 px-3">توضیحات</th>
                ${isAdmin ? '<th class="py-3 px-3 text-center w-24 no-print">عملیات</th>' : ''}
            </tr>
        `;
    }

    // 2. Pagination Calculation
    const total = STATE.filteredData.length;
    if (total === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        paginationBar.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    paginationBar.classList.remove('hidden');

    const limit = STATE.pageSize;
    let paginated = STATE.filteredData;
    let totalPages = 1;

    if (limit > 0) {
        totalPages = Math.ceil(total / limit);
        if (STATE.currentPage > totalPages) STATE.currentPage = totalPages;
        const start = (STATE.currentPage - 1) * limit;
        paginated = STATE.filteredData.slice(start, start + limit);
    }

    // 3. Populate Rows
    let html = '';
    paginated.forEach((doc, idx) => {
        const isExited = doc.exitDate && doc.exitDate.trim() !== '';
        const rowBg = isExited ? 'bg-rose-50/40 hover:bg-rose-50/70' : 'hover:bg-teal-50/30';
        
        if (isGeo) {
            let rankBadge = 'bg-slate-100 text-slate-700';
            if (doc.academicRank === 'استاد') rankBadge = 'bg-purple-100 text-purple-800 border border-purple-200';
            else if (doc.academicRank === 'دانشیار') rankBadge = 'bg-blue-100 text-blue-800 border border-blue-200';
            else if (doc.academicRank === 'استادیار') rankBadge = 'bg-teal-100 text-teal-800 border border-teal-200';

            html += `
                <tr class="transition-colors ${rowBg}">
                    <td class="py-2.5 px-3 text-center font-bold text-slate-500">${doc.radif || (idx + 1)}</td>
                    <td class="py-2.5 px-3 font-bold text-slate-900">${doc.firstName || ''} ${doc.lastName || ''}</td>
                    <td class="py-2.5 px-3 font-bold text-teal-800">${doc.specialty || '-'}</td>
                    <td class="py-2.5 px-3 text-center font-mono text-slate-600">${doc.nationalCode || '-'}</td>
                    <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-800">${doc.medicalCode || '-'}</td>
                    <td class="py-2.5 px-3 text-center text-slate-600">${doc.startDate || '-'}</td>
                    <td class="py-2.5 px-3 text-center text-slate-600">${doc.serviceType || '-'}</td>
                    <td class="py-2.5 px-3 text-center">
                        <span class="px-2 py-0.5 rounded-md text-[11px] font-bold ${rankBadge}">${doc.academicRank || '-'}</span>
                    </td>
                    <td class="py-2.5 px-3 text-center">
                        ${isExited ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[11px]">${doc.exitDate}</span>` : '<span class="text-emerald-600 font-bold">شاغل</span>'}
                    </td>
                    <td class="py-2.5 px-3 text-slate-600 text-[11px] max-w-xs truncate" title="${doc.remarks || ''}">${doc.remarks || '-'}</td>
                    ${isAdmin ? `
                        <td class="py-2.5 px-3 text-center no-print">
                            <div class="flex items-center justify-center gap-1">
                                <button onclick="openEditDoctorModal(${doc.id})" title="ویرایش" class="p-1.5 text-teal-600 hover:bg-teal-100 rounded-lg transition-all">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onclick="deleteDoctor(${doc.id})" title="حذف" class="p-1.5 text-rose-600 hover:bg-rose-100 rounded-lg transition-all">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </td>
                    ` : ''}
                </tr>
            `;
        } else {
            html += `
                <tr class="transition-colors ${rowBg}">
                    <td class="py-2.5 px-3 text-center font-bold text-slate-500">${doc.radif || (idx + 1)}</td>
                    <td class="py-2.5 px-3 font-bold text-slate-900">${doc.firstName || ''} ${doc.lastName || ''}</td>
                    <td class="py-2.5 px-3 font-bold text-blue-800">${doc.specialty || '-'}</td>
                    <td class="py-2.5 px-3 text-center font-bold text-slate-700">
                        <span class="px-2 py-0.5 bg-slate-100 rounded text-[11px]">${doc.city || '-'}</span>
                    </td>
                    <td class="py-2.5 px-3 text-center font-mono text-slate-600">${doc.nationalCode || '-'}</td>
                    <td class="py-2.5 px-3 text-center font-mono font-bold text-slate-800">${doc.medicalCode || '-'}</td>
                    <td class="py-2.5 px-3 text-center text-slate-600">${doc.startDate || '-'}</td>
                    <td class="py-2.5 px-3 text-center">
                        ${isExited ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[11px]">${doc.exitDate}</span>` : '<span class="text-emerald-600 font-bold">شاغل</span>'}
                    </td>
                    <td class="py-2.5 px-3 text-slate-600 text-[11px] max-w-xs truncate" title="${doc.remarks || ''}">${doc.remarks || '-'}</td>
                    ${isAdmin ? `
                        <td class="py-2.5 px-3 text-center no-print">
                            <div class="flex items-center justify-center gap-1">
                                <button onclick="openEditDoctorModal(${doc.id})" title="ویرایش" class="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-all">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onclick="deleteDoctor(${doc.id})" title="حذف" class="p-1.5 text-rose-600 hover:bg-rose-100 rounded-lg transition-all">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </td>
                    ` : ''}
                </tr>
            `;
        }
    });

    tbody.innerHTML = html;

    const startIdx = limit > 0 ? (STATE.currentPage - 1) * limit + 1 : 1;
    const endIdx = limit > 0 ? Math.min(startIdx + limit - 1, total) : total;

    document.getElementById('pageRangeStart').textContent = startIdx.toLocaleString('fa-IR');
    document.getElementById('pageRangeEnd').textContent = endIdx.toLocaleString('fa-IR');
    document.getElementById('totalRecordsCount').textContent = total.toLocaleString('fa-IR');

    renderPageNumbers(totalPages);
}

function renderPageNumbers(totalPages) {
    const container = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');

    prevBtn.disabled = STATE.currentPage <= 1;
    nextBtn.disabled = STATE.currentPage >= totalPages || totalPages === 0;

    let html = '';
    const current = STATE.currentPage;
    for (let p = 1; p <= totalPages; p++) {
        if (p === 1 || p === totalPages || (p >= current - 1 && p <= current + 1)) {
            const active = p === current ? 'bg-teal-600 text-white font-black' : 'border border-slate-200 hover:bg-slate-100';
            html += `<button onclick="goToPage(${p})" class="w-7 h-7 rounded-lg text-xs font-bold transition-all ${active}">${p}</button>`;
        } else if (p === current - 2 || p === current + 2) {
            html += `<span class="px-1 text-slate-400">...</span>`;
        }
    }
    container.innerHTML = html;
}

function goToPage(page) {
    STATE.currentPage = page;
    renderTable();
}

function prevPage() {
    if (STATE.currentPage > 1) {
        STATE.currentPage--;
        renderTable();
    }
}

function nextPage() {
    const totalPages = STATE.pageSize > 0 ? Math.ceil(STATE.filteredData.length / STATE.pageSize) : 1;
    if (STATE.currentPage < totalPages) {
        STATE.currentPage++;
        renderTable();
    }
}

function changePageSize() {
    STATE.pageSize = parseInt(document.getElementById('recordsPerPage').value, 10);
    STATE.currentPage = 1;
    renderTable();
}

// ================= CRUD (ADD / EDIT / DELETE) =================

function openAddDoctorModal() {
    if (!STATE.user || STATE.user.role !== 'admin') {
        Swal.fire('دسترسی غیرمجاز', 'ثبت اطلاعات تنها برای مدیر سیستم امکان‌پذیر است.', 'error');
        return;
    }

    const isGeo = STATE.currentTab === 'geographic';
    document.getElementById('doctorForm').reset();
    document.getElementById('docFormId').value = '';
    document.getElementById('docFormMode').value = isGeo ? 'geographic' : 'treatment';
    
    document.getElementById('doctorModalTitle').textContent = `ثبت پزشک جدید (${isGeo ? 'هیأت علمی جغرافیایی' : 'تمام وقت درمانی'})`;
    document.getElementById('doctorModalSubtitle').textContent = isGeo ? 'پزشکان عضو هیأت علمی تمام وقت جغرافیایی - شماره ۲' : 'پزشکان تمام وقت درمانی - شماره ۱';
    document.getElementById('doctorModalIcon').className = isGeo ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-stethoscope';

    document.getElementById('fieldCityContainer').style.display = isGeo ? 'none' : 'block';
    document.getElementById('fieldRankContainer').style.display = isGeo ? 'block' : 'none';
    document.getElementById('fieldServiceTypeContainer').style.display = isGeo ? 'block' : 'none';

    document.getElementById('doctorModal').classList.remove('hidden');
}

function openEditDoctorModal(id) {
    if (!STATE.user || STATE.user.role !== 'admin') {
        Swal.fire('دسترسی غیرمجاز', 'ویرایش اطلاعات تنها برای مدیر سیستم امکان‌پذیر است.', 'error');
        return;
    }

    const isGeo = STATE.currentTab === 'geographic';
    const list = isGeo ? STATE.geographicData : STATE.treatmentData;
    const doc = list.find(d => d.id === id);
    if (!doc) return;

    document.getElementById('docFormId').value = doc.id;
    document.getElementById('docFormMode').value = isGeo ? 'geographic' : 'treatment';
    document.getElementById('docFormFirstName').value = doc.firstName || '';
    document.getElementById('docFormLastName').value = doc.lastName || '';
    document.getElementById('docFormSpecialty').value = doc.specialty || '';
    document.getElementById('docFormNationalCode').value = doc.nationalCode || '';
    document.getElementById('docFormMedicalCode').value = doc.medicalCode || '';
    document.getElementById('docFormStartDate').value = doc.startDate || '';
    document.getElementById('docFormExitDate').value = doc.exitDate || '';
    document.getElementById('docFormRemarks').value = doc.remarks || '';

    if (isGeo) {
        document.getElementById('docFormRank').value = doc.academicRank || 'استادیار';
        document.getElementById('docFormServiceType').value = doc.serviceType || 'هیأت علمي ت ج';
    } else {
        document.getElementById('docFormCity').value = doc.city || 'سنندج';
    }

    document.getElementById('doctorModalTitle').textContent = `ویرایش اطلاعات دکتر ${doc.firstName} ${doc.lastName}`;
    document.getElementById('doctorModalSubtitle').textContent = isGeo ? 'پزشکان هیأت علمی تمام وقت جغرافیایی' : 'پزشکان تمام وقت درمانی';

    document.getElementById('fieldCityContainer').style.display = isGeo ? 'none' : 'block';
    document.getElementById('fieldRankContainer').style.display = isGeo ? 'block' : 'none';
    document.getElementById('fieldServiceTypeContainer').style.display = isGeo ? 'block' : 'none';

    document.getElementById('doctorModal').classList.remove('hidden');
}

function closeDoctorModal() {
    document.getElementById('doctorModal').classList.add('hidden');
}

async function saveDoctorForm(e) {
    e.preventDefault();
    const id = document.getElementById('docFormId').value;
    const mode = document.getElementById('docFormMode').value;
    const isGeo = mode === 'geographic';

    const payload = {
        firstName: document.getElementById('docFormFirstName').value.trim(),
        lastName: document.getElementById('docFormLastName').value.trim(),
        specialty: document.getElementById('docFormSpecialty').value.trim(),
        nationalCode: document.getElementById('docFormNationalCode').value.trim(),
        medicalCode: document.getElementById('docFormMedicalCode').value.trim(),
        startDate: document.getElementById('docFormStartDate').value.trim(),
        exitDate: document.getElementById('docFormExitDate').value.trim(),
        remarks: document.getElementById('docFormRemarks').value.trim(),
    };

    if (isGeo) {
        payload.academicRank = document.getElementById('docFormRank').value;
        payload.serviceType = document.getElementById('docFormServiceType').value.trim() || 'هیأت علمي ت ج';
    } else {
        payload.city = document.getElementById('docFormCity').value.trim();
    }

    // Try API call
    if (STATE.user && STATE.user.token && STATE.user.token !== 'offline_admin_token') {
        try {
            const url = id ? `/api/doctors/${mode}/${id}` : `/api/doctors/${mode}`;
            const method = id ? 'PUT' : 'POST';
            await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${STATE.user.token}`
                },
                body: JSON.stringify(payload)
            });
        } catch (err) {}
    }

    // Local Update
    const list = isGeo ? STATE.geographicData : STATE.treatmentData;
    if (id) {
        const numId = parseInt(id, 10);
        const idx = list.findIndex(d => d.id === numId);
        if (idx !== -1) {
            list[idx] = { ...list[idx], ...payload };
            addLocalAuditLog('ویرایش پزشک', 'admin', `ویرایش مشخصات دکتر ${payload.firstName} ${payload.lastName}`);
        }
    } else {
        const newId = list.length ? Math.max(...list.map(d => d.id || 0)) + 1 : 1;
        const newDoc = {
            id: newId,
            radif: String(newId),
            ...payload
        };
        list.push(newDoc);
        addLocalAuditLog('افزودن پزشک', 'admin', `ثبت پزشک جدید: دکتر ${payload.firstName} ${payload.lastName} (${payload.specialty})`);
    }

    saveToLocalStorage();
    closeDoctorModal();
    updateCounters();
    populateFilterDropdowns();
    applyFilters();

    Swal.fire({
        icon: 'success',
        title: 'ذخیره شد',
        text: 'اطلاعات پزشک با موفقیت ذخیره گردید.',
        timer: 1500,
        showConfirmButton: false
    });
}

async function deleteDoctor(id) {
    if (!STATE.user || STATE.user.role !== 'admin') return;

    const isGeo = STATE.currentTab === 'geographic';
    const list = isGeo ? STATE.geographicData : STATE.treatmentData;
    const doc = list.find(d => d.id === id);
    if (!doc) return;

    Swal.fire({
        title: 'حذف رکورد پزشک',
        text: `آیا از حذف اطلاعات دکتر ${doc.firstName} ${doc.lastName} اطمینان دارید؟`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e11d48',
        cancelButtonColor: '#64748b',
        confirmButtonText: 'بله، حذف شود',
        cancelButtonText: 'انصراف'
    }).then(async (result) => {
        if (result.isConfirmed) {
            if (STATE.user && STATE.user.token && STATE.user.token !== 'offline_admin_token') {
                try {
                    await fetch(`/api/doctors/${isGeo ? 'geographic' : 'treatment'}/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${STATE.user.token}` }
                    });
                } catch (e) {}
            }

            const idx = list.findIndex(d => d.id === id);
            if (idx !== -1) {
                list.splice(idx, 1);
                addLocalAuditLog('حذف پزشک', 'admin', `حذف رکورد دکتر ${doc.firstName} ${doc.lastName} (کد ملی: ${doc.nationalCode})`);
            }

            saveToLocalStorage();
            updateCounters();
            populateFilterDropdowns();
            applyFilters();

            Swal.fire({
                icon: 'success',
                title: 'حذف شد',
                text: 'رکورد پزشک با موفقیت حذف گردید.',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

// ================= EXPORT: EXCEL (.xlsx) =================

function exportToExcel() {
    const isGeo = STATE.currentTab === 'geographic';
    const dataToExport = STATE.filteredData.length > 0 ? STATE.filteredData : (isGeo ? STATE.geographicData : STATE.treatmentData);

    const title = isGeo ?
        'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی شاغل در مراکز درمانی دانشگاه علوم پزشکی کردستان - شماره (۲)' :
        'لیست مشخصات پزشکان تمام وقت درمانی شاغل در مراکز درمانی دانشگاه علوم پزشکی کردستان - شماره (۱)';

    const subtitle = 'معاونت درمان دانشگاه علوم پزشکی کردستان (نسخه به‌روز شده: ۱۴۰۵/۰۸/۰۷)';

    const wsData = [];
    wsData.push([title]);
    wsData.push([subtitle]);

    if (isGeo) {
        wsData.push(['رديف', 'نام', 'نام خانوادگي', 'رشته تخصص', 'كد ملي', 'نظام پزشكي', 'شروع بكار', 'نوع خدمت', 'مرتبه', 'خروج', 'ملاحضات']);
        dataToExport.forEach((d, idx) => {
            wsData.push([
                d.radif || (idx + 1),
                d.firstName || '',
                d.lastName || '',
                d.specialty || '',
                d.nationalCode || '',
                d.medicalCode || '',
                d.startDate || '',
                d.serviceType || 'هیأت علمي ت ج',
                d.academicRank || '',
                d.exitDate || '',
                d.remarks || ''
            ]);
        });
    } else {
        wsData.push(['رديف', 'نام پزشك', 'نام خانوادگي', 'تخصص', 'شهرستان', 'كد ملي', 'نظام پزشكي', 'تاریخ شروع تمام وقتی', 'تاريخ خروج', 'توضيحات']);
        dataToExport.forEach((d, idx) => {
            wsData.push([
                d.radif || (idx + 1),
                d.firstName || '',
                d.lastName || '',
                d.specialty || '',
                d.city || '',
                d.nationalCode || '',
                d.medicalCode || '',
                d.startDate || '',
                d.exitDate || '',
                d.remarks || ''
            ]);
        });
    }

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    if (!ws['!views']) ws['!views'] = [];
    ws['!views'].push({ RTL: true });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, isGeo ? 'پزشکان جغرافیایی' : 'پزشکان درمانی');

    const fileName = isGeo ? 'گزارش_پزشکان_هیات_علمی_جغرافیایی_کردستان.xlsx' : 'گزارش_پزشکان_تمام_وقت_درمانی_کردستان.xlsx';
    XLSX.writeFile(wb, fileName);

    addLocalAuditLog('خروجی اکسل', STATE.user ? STATE.user.role : 'guest', `صدور فایل اکسل حاوی ${dataToExport.length} رکورد`);

    Swal.fire({
        icon: 'success',
        title: 'صدور فایل اکسل',
        text: `فایل اکسل با موفقیت دانلود شد (${dataToExport.length} رکورد).`,
        timer: 1500,
        showConfirmButton: false
    });
}

// ================= EXPORT: PDF & PRINT =================

function exportToPDF() {
    const isGeo = STATE.currentTab === 'geographic';
    const dataToExport = STATE.filteredData.length > 0 ? STATE.filteredData : (isGeo ? STATE.geographicData : STATE.treatmentData);

    const title = isGeo ?
        'لیست مشخصات پزشکان عضو هیأت علمی تمام وقت جغرافیایی شاغل در مراکز درمانی دانشگاه (شماره ۲)' :
        'لیست مشخصات پزشکان تمام وقت درمانی شاغل در مراکز درمانی دانشگاه (شماره ۱)';

    document.getElementById('printReportTitle').textContent = title;
    document.getElementById('printReportDate').textContent = `تاریخ گزارش: ۱۴۰۵/۰۸/۰۷ - ساعت ${new Date().toLocaleTimeString('fa-IR')}`;
    document.getElementById('printReportCount').textContent = `تعداد کل: ${dataToExport.length.toLocaleString('fa-IR')} نفر`;

    const thead = document.getElementById('printTableHead');
    const tbody = document.getElementById('printTableBody');

    if (isGeo) {
        thead.innerHTML = `
            <tr class="bg-slate-200">
                <th class="p-1 border text-center">ردیف</th>
                <th class="p-1 border">نام و نام خانوادگی</th>
                <th class="p-1 border">رشته تخصص</th>
                <th class="p-1 border text-center">کد ملی</th>
                <th class="p-1 border text-center">نظام پزشکی</th>
                <th class="p-1 border text-center">شروع بکار</th>
                <th class="p-1 border text-center">مرتبه</th>
                <th class="p-1 border text-center">تاریخ خروج</th>
                <th class="p-1 border">ملاحظات</th>
            </tr>
        `;
        let rows = '';
        dataToExport.forEach((d, idx) => {
            rows += `
                <tr>
                    <td class="p-1 border text-center">${d.radif || (idx + 1)}</td>
                    <td class="p-1 border font-bold">${d.firstName} ${d.lastName}</td>
                    <td class="p-1 border">${d.specialty}</td>
                    <td class="p-1 border text-center font-mono">${d.nationalCode}</td>
                    <td class="p-1 border text-center font-mono">${d.medicalCode}</td>
                    <td class="p-1 border text-center">${d.startDate}</td>
                    <td class="p-1 border text-center">${d.academicRank}</td>
                    <td class="p-1 border text-center">${d.exitDate || '-'}</td>
                    <td class="p-1 border text-[10px]">${d.remarks || '-'}</td>
                </tr>
            `;
        });
        tbody.innerHTML = rows;
    } else {
        thead.innerHTML = `
            <tr class="bg-slate-200">
                <th class="p-1 border text-center">ردیف</th>
                <th class="p-1 border">نام پزشک</th>
                <th class="p-1 border">تخصص</th>
                <th class="p-1 border text-center">شهرستان</th>
                <th class="p-1 border text-center">کد ملی</th>
                <th class="p-1 border text-center">نظام پزشکی</th>
                <th class="p-1 border text-center">شروع تمام وقتی</th>
                <th class="p-1 border text-center">تاریخ خروج</th>
                <th class="p-1 border">توضیحات</th>
            </tr>
        `;
        let rows = '';
        dataToExport.forEach((d, idx) => {
            rows += `
                <tr>
                    <td class="p-1 border text-center">${d.radif || (idx + 1)}</td>
                    <td class="p-1 border font-bold">${d.firstName} ${d.lastName}</td>
                    <td class="p-1 border">${d.specialty}</td>
                    <td class="p-1 border text-center">${d.city}</td>
                    <td class="p-1 border text-center font-mono">${d.nationalCode}</td>
                    <td class="p-1 border text-center font-mono">${d.medicalCode}</td>
                    <td class="p-1 border text-center">${d.startDate}</td>
                    <td class="p-1 border text-center">${d.exitDate || '-'}</td>
                    <td class="p-1 border text-[10px]">${d.remarks || '-'}</td>
                </tr>
            `;
        });
        tbody.innerHTML = rows;
    }

    addLocalAuditLog('خروجی PDF / چاپ', STATE.user ? STATE.user.role : 'guest', `صدور گزارش چاپی PDF حاوی ${dataToExport.length} پزشک`);

    window.print();
}

// ================= ANALYTICS CHARTS (CHART.JS) =================

function renderAnalyticsCharts() {
    const geo = STATE.geographicData;
    const treat = STATE.treatmentData;

    // 1. Academic Ranks Chart
    const rankCounts = {};
    geo.forEach(d => {
        const r = d.academicRank || 'نامشخص';
        rankCounts[r] = (rankCounts[r] || 0) + 1;
    });

    const ctxRanks = document.getElementById('chartRanks').getContext('2d');
    if (STATE.charts.ranks) STATE.charts.ranks.destroy();
    STATE.charts.ranks = new Chart(ctxRanks, {
        type: 'doughnut',
        data: {
            labels: Object.keys(rankCounts),
            datasets: [{
                data: Object.values(rankCounts),
                backgroundColor: ['#0d9488', '#3b82f6', '#8b5cf6', '#f59e0b', '#64748b']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: { family: 'Vazirmatn' } } }
            }
        }
    });

    // 2. Status Chart (Active vs Exited)
    const geoActive = geo.filter(d => !d.exitDate || d.exitDate.trim() === '').length;
    const geoExited = geo.length - geoActive;
    const treatActive = treat.filter(d => !d.exitDate || d.exitDate.trim() === '').length;
    const treatExited = treat.length - treatActive;

    const ctxStatus = document.getElementById('chartStatus').getContext('2d');
    if (STATE.charts.status) STATE.charts.status.destroy();
    STATE.charts.status = new Chart(ctxStatus, {
        type: 'bar',
        data: {
            labels: ['هیأت علمی جغرافیایی', 'تمام وقت درمانی'],
            datasets: [
                {
                    label: 'شاغل فعال',
                    data: [geoActive, treatActive],
                    backgroundColor: '#10b981'
                },
                {
                    label: 'خارج شده / انتقالی',
                    data: [geoExited, treatExited],
                    backgroundColor: '#f43f5e'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: { family: 'Vazirmatn' } } }
            },
            scales: {
                x: { stacked: true },
                y: { stacked: true, beginAtZero: true }
            }
        }
    });

    // 3. Treatment Cities Chart
    const cityCounts = {};
    treat.forEach(d => {
        const c = d.city || 'نامشخص';
        cityCounts[c] = (cityCounts[c] || 0) + 1;
    });
    const sortedCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]);

    const ctxCities = document.getElementById('chartCities').getContext('2d');
    if (STATE.charts.cities) STATE.charts.cities.destroy();
    STATE.charts.cities = new Chart(ctxCities, {
        type: 'bar',
        data: {
            labels: sortedCities.map(c => c[0]),
            datasets: [{
                label: 'تعداد پزشکان درمانی',
                data: sortedCities.map(c => c[1]),
                backgroundColor: '#0284c7'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // 4. Top Specialties
    const allSpecs = {};
    [...geo, ...treat].forEach(d => {
        const s = (d.specialty || 'سایر').trim();
        allSpecs[s] = (allSpecs[s] || 0) + 1;
    });
    const topSpecs = Object.entries(allSpecs).sort((a, b) => b[1] - a[1]).slice(0, 10);

    const ctxSpecs = document.getElementById('chartSpecialties').getContext('2d');
    if (STATE.charts.specs) STATE.charts.specs.destroy();
    STATE.charts.specs = new Chart(ctxSpecs, {
        type: 'bar',
        data: {
            labels: topSpecs.map(s => s[0]),
            datasets: [{
                label: 'تعداد پزشک',
                data: topSpecs.map(s => s[1]),
                backgroundColor: '#6366f1'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { beginAtZero: true }
            }
        }
    });
}

// ================= AUDIT LOGS =================

async function loadAuditLogs() {
    const tbody = document.getElementById('auditLogsBody');
    let logs = [];

    if (STATE.user && STATE.user.token) {
        try {
            const res = await fetch('/api/audit-logs', {
                headers: { 'Authorization': `Bearer ${STATE.user.token}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.success) logs = data.logs;
            }
        } catch (e) {}
    }

    if (logs.length === 0) {
        logs = JSON.parse(localStorage.getItem('med_audit_logs') || '[]');
    }

    if (logs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">هیچ لاگ رویدادی ثبت نشده است.</td></tr>`;
        return;
    }

    tbody.innerHTML = logs.map(l => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="p-3 font-mono font-bold text-slate-400">${l.id}</td>
            <td class="p-3 text-slate-600 font-mono text-[11px]">${l.timestamp}</td>
            <td class="p-3 font-bold text-slate-800">${l.user}</td>
            <td class="p-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${l.role === 'admin' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}">${l.role}</span>
            </td>
            <td class="p-3 font-bold text-teal-700">${l.action}</td>
            <td class="p-3 text-slate-600 text-xs">${l.details}</td>
        </tr>
    `).join('');
}

function addLocalAuditLog(action, role, details) {
    const logs = JSON.parse(localStorage.getItem('med_audit_logs') || '[]');
    const newLog = {
        id: logs.length ? Math.max(...logs.map(l => l.id || 0)) + 1 : 1,
        timestamp: new Date().toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' }),
        user: STATE.user ? STATE.user.name : 'کاربر',
        role: role || (STATE.user ? STATE.user.role : 'guest'),
        action: action,
        details: details
    };
    logs.unshift(newLog);
    if (logs.length > 200) logs.length = 200;
    localStorage.setItem('med_audit_logs', JSON.stringify(logs));
}

// Setup Event Listeners
function setupEventListeners() {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDoctorModal();
        }
    });
}
