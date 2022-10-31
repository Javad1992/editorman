import React, { useState, useEffect } from 'react'
import { EditorContainer } from 'editorman'
import 'editorman/dist/index.css'
import 'editorman/dist/index/'

// const object = {
//   farmingStatus: false
// }

// const object = {
//   avatarUrl : "https://agroiranexpert.com/uploads/experts/da6b83d4-b827-421b-95ce-8db36f1f901d.jpeg"
// }

const object = {
    // "farmQuestions": [
    //     {
    //         "is": 0,
    //         "text": "نوع برنامه غذایی را با توجه به توضیحات انتخاب نمائید.",
    //         "helptext": "برنامه غذایی مبتنی بر حداکثر پتانسیل تولید:\\nبرنامه ای که با شناسایی حداکثر پتانسیل تولید در سال، با استفاده از کودهای زیستی (میکروبی) و شیمیایی نوشته می‌شود\\n برنامه غذایی تولید سالم:\\nبرنامه ای که با تکیه بر سلامت محصول، بدون ماندگاری عناصر مازاد در ماده خشک با توجه به کودهای زیستی (میکروبی) و شیمیایی‌های خاص نگارش می‌شود\\nبرنامه غذایی مبتنی بر تولید ارگانیک:\\nبرنامه ای که مبتنی بر کودهای زیستی زنده و غیرزنده و بدون کودهای شیمیایی نگارش می‌شود",
    //         "type": 4,
    //         "list": [
    //             "انتخاب کنید",
    //             "برنامه غذایی مبتنی بر حداکثر پتانسیل تولید",
    //             "برنامه غذایی تولید سالم",
    //             "برنامه غذایی مبتنی بر تولید ارگانیک"
    //         ],
    //         "preconditional": false,
    //         "conditional": false,
    //         "required": false,
    //         "index": 0,
    //         "answer": "برنامه غذایی مبتنی بر حداکثر پتانسیل تولید",
    //         "questionCode": "PC40S1Q01",
    //         "id": "bcf3e1d9-16fc-4f0c-bd93-9984d9860524"
    //     },
    //     {
    //         "is": 0,
    //         "text": "مساحت کل مزرعه",
    //         "type": 7,
    //         "list": [
    //             "هکتار",
    //             "مترمربع"
    //         ],
    //         "preconditional": false,
    //         "conditional": false,
    //         "required": true,
    //         "index": 0,
    //         "answer": "9",
    //         "questionCode": "PC40S1Q02",
    //         "id": "5d891125-c42c-4d99-8850-9186f092dbb0"
    //     },
    //     {
    //         "is": 0,
    //         "text": "مزرعه مورد نظر شامل چند قطعه است؟",
    //         "type": 4,
    //         "list": [
    //             "انتخاب کنید",
    //             "1",
    //             "2",
    //             "3",
    //             "4",
    //             "5",
    //             "6",
    //             "7",
    //             "8",
    //             "9",
    //             "10",
    //             "11",
    //             "12",
    //             "13",
    //             "14",
    //             "15",
    //             "16",
    //             "17",
    //             "18",
    //             "19",
    //             "20"
    //         ],
    //         "preconditional": true,
    //         "conditional": false,
    //         "required": true,
    //         "index": 0,
    //         "answer": "2",
    //         "questionCode": "PC40S1Q03",
    //         "id": "5df8f7a9-5a6d-4991-84ae-cc16e43fbb2c"
    //     },
    //     {
    //         "is": 0,
    //         "text": "آیا قطعات مزرعه از نظر کاشت و سیستم آبیاری با هم متفاوت اند؟",
    //         "helptext": "نکته: قطعات متفاوت، به نگارش برنامه غذایی جداگانه نیاز دارند.",
    //         "type": 3,
    //         "list": [
    //             "بله",
    //             "خیر"
    //         ],
    //         "preconditional": true,
    //         "conditional": true,
    //         "required": true,
    //         "index": 0,
    //         "answer": "خیر",
    //         "id": "50612cb3-2457-40bc-9e93-51d2ee4dde81"
    //     },
    //     {
    //         "is": 0,
    //         "text": "با توجه به متفاوت بودن قطعات، چه تعداد برنامه غذایی مورد نیاز است؟",
    //         "type": 4,
    //         "list": [
    //             "انتخاب کنید",
    //             "1",
    //             "2",
    //             "3",
    //             "4",
    //             "5",
    //             "6",
    //             "7",
    //             "8",
    //             "9",
    //             "10"
    //         ],
    //         "preconditional": false,
    //         "conditional": true,
    //         "required": true,
    //         "index": 0,
    //         "answer": "",
    //         "id": "7072600c-c0d9-4f3b-92da-cb8f87c89a29"
    //     }
    // ],
        plotQuestions: [
            {
                "is": 0,
                "text": "نام قطعه",
                "type": 0,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "A",
                "questionCode": "PC40S1Q04",
                "id": "5bdaff63-5927-430b-89b0-96b1ad60b397"
            },
            {
                "is": 0,
                "text": "مساحت قطعه",
                "type": 7,
                "list": [
                    "هکتار",
                    "مترمربع"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "4",
                "questionCode": "PC40S1Q05",
                "id": "7818f01f-4ab7-4c9d-bdd8-27df9c84bf78"
            },
            {
                "is": 0,
                "text": "نوع گیاه",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "گندم",
                    "جو",
                    "گندم و جو"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "جو",
                "questionCode": "PC40S1Q06",
                "id": "8d650988-31cf-4158-89a4-116c55219715"
            },
            {
                "is": 0,
                "text": "مدل کشت",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "آبی",
                    "دیم",
                    "آبیاری تکمیلی"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "آبی",
                "questionCode": "PC40S1Q07",
                "id": "8e1cc283-18a1-4674-abeb-b65799b5e250"
            },
            {
                "is": 0,
                "text": "نحوه کاشت",
                "type": 3,
                "list": [
                    "دستی",
                    "با دستگاه کارنده"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "با دستگاه کارنده",
                "questionCode": "PC40S1Q08",
                "id": "1e23e206-3d12-4504-9429-334a9e88d30b"
            },
            {
                "is": 0,
                "text": "نوع دستگاه",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "خطی کار",
                    "عمیق کار",
                    "ردیف کار",
                    "سانتریفیوژ"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "خطی کار",
                "questionCode": "PC40S1Q09",
                "id": "026b2314-27fc-47f4-bdf0-0fca2917046d"
            },
            {
                "is": 0,
                "text": "نحوه برداشت",
                "type": 3,
                "list": [
                    "دستی",
                    "کمباین"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "کمباین",
                "questionCode": "PC40S1Q10",
                "id": "4335b36c-f383-4bbc-b5e5-7774ca82bf08"
            },
            {
                "is": 0,
                "text": "رقم",
                "type": 0,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "Cb 74",
                "questionCode": "PC40S1Q11",
                "id": "8aeb971a-3f1b-48a9-9ab3-55502953218f"
            },
            {
                "is": 0,
                "text": "نوع بذر",
                "type": 3,
                "list": [
                    "اصلاح شده",
                    "خود مصرف"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "اصلاح شده",
                "questionCode": "PC40S1Q12",
                "id": "3d77b0dc-5372-4e25-8d91-d39fc1b7a124"
            },
            {
                "is": 0,
                "text": "میزان بذر مصرفی در هکتار (کیلوگرم)",
                "type": 1,
                "preconditional": false,
                "conditional": false,
                "required": true,
                "index": 0,
                "answer": "200",
                "questionCode": "PC40S1Q13",
                "id": "4448899c-7ee4-4713-90c6-8c196b9b06fc"
            },
            {
                "is": 0,
                "text": "تراکم بوته (در مترمربع)",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "200 تا 250",
                    "250 تا 300",
                    "300 تا 350",
                    "350 تا 400",
                    "400 تا 450",
                    "450 تا 500",
                    "500 تا 550",
                    "550 تا 600"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q14",
                "id": "d32f6f8e-a054-4a81-81e6-451b08538393"
            },
            {
                "is": 0,
                "text": "دبی آب (میزان خروجی آب چاه) (لیتر در ثانیه)",
                "type": 1,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "8",
                "questionCode": "PC40S1Q15",
                "id": "6af0ad63-ef4d-47dc-845c-a056d9c40d8d"
            },
            {
                "is": 0,
                "text": "وضعیت شوری آب آبیاری",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "شوری ندارد",
                    "شوری کم (1000 تا 3000 میکروزیمنس)",
                    "شوری متوسط (3000 تا 5000 میکروزیمنس)",
                    "شوری زیاد (5000 تا 8000 میکروزیمنس)",
                    "شوری خیلی زیاد (8000 میکروزیمنس  به بالا)"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "شوری ندارد",
                "questionCode": "PC40S1Q16",
                "id": "7bf982fc-d91d-467c-a882-712596082a01"
            },
            {
                "is": 0,
                "text": "وضعیت سختی آب آبیاری",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "سختی ندارد",
                    "سختی کم (100 تا 200)",
                    "سختی متوسط (200 تا 400)",
                    "سختی زیاد (400 تا 700)",
                    "سختی خیلی زیاد (700 به بالا)"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "سختی ندارد",
                "questionCode": "PC40S1Q17",
                "id": "0520947f-e98f-4469-9a7e-49655f610112"
            },
            {
                "is": 0,
                "text": "سیستم آبیاری",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "قطره ای",
                    "غرقابی",
                    "آبیاری بارانی"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "قطره ای",
                "questionCode": "PC40S1Q18",
                "id": "97324345-802b-45c9-ba8f-23b63b6c116f"
            },
            {
                "is": 0,
                "text": "فواصل بین آبیاری‌ها چند روز است؟",
                "type": 1,
                "preconditional": false,
                "conditional": false,
                "required": true,
                "index": 0,
                "answer": "8",
                "questionCode": "PC40S1Q19",
                "id": "088a5044-af57-4557-a169-10c1d3341d40"
            },
            {
                "is": 0,
                "text": "میزان بارندگی در منطقه (میانگین سالانه)",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "50 تا 100 میلی‌متر",
                    "100 تا 150 میلی‌متر",
                    "150 تا 200 میلی‌متر",
                    "200 تا 300 میلی‌متر",
                    "300 تا 400 میلی‌متر",
                    "400 تا 500 میلی‌متر",
                    "بالای 500 میلی‌متر"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "100 تا 150 میلی‌متر",
                "questionCode": "PC40S1Q20",
                "id": "0ffaee46-e2ac-4be9-b8e9-0ca42f856fb0"
            },
            {
                "is": 0,
                "text": "وضعیت شوری خاک",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "شوری ندارد",
                    "شوری کم (1000 تا 3000 میکروزیمنس",
                    "شوری متوسط (3000 تا 5000 میکروزیمنس",
                    "شوری زیاد (5000 تا 8000 میکروزیمنس)",
                    "شوری خیلی زیاد (8000 میکروزیمنس به بالا)"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "شوری کم (1000 تا 3000 میکروزیمنس",
                "questionCode": "PC40S1Q21",
                "id": "1d9bbd41-ff7d-4b2a-afb7-abfd4bc383c6"
            },
            {
                "is": 0,
                "text": "آیا کود دامی مصرف کرده‌اید؟",
                "type": 3,
                "list": [
                    "بله",
                    "خیر"
                ],
                "preconditional": true,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "خیر",
                "questionCode": "PC40S1Q22",
                "id": "a34e9529-ed2f-4151-a1d4-491a7c6cc18d"
            },
            {
                "is": 0,
                "text": "نوع و میزان کود دامی مصرف شده را بنویسید.  ",
                "type": 1,
                "preconditional": false,
                "conditional": true,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q23",
                "id": "f67b17a4-7614-4a17-8d45-423698812d8b"
            },
            {
                "is": 0,
                "text": "حدود تاریخ کاشت",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": true,
                "index": 0,
                "answer": "1401/شهریور/20",
                "questionCode": "PC40S1Q24",
                "id": "a44ebd21-7fd0-4d4b-b0a4-9a93b5eb687f"
            },
            {
                "is": 0,
                "text": "حدود تاریخ سبز شدن",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q25",
                "id": "fd0da661-1674-4dee-91ab-f73ca78f11cf"
            },
            {
                "is": 0,
                "text": "حدود تاریخ پنجه روی",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q26",
                "id": "1b3667e1-64cf-462a-ba98-4978b8814632"
            },
            {
                "is": 0,
                "text": "حدود تاریخ شروع ساقه روی",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q27",
                "id": "cbf3482e-0ad7-42b0-a4b3-a5c0313f1f61"
            },
            {
                "is": 0,
                "text": "حدود تاریخ ظهور سنبل",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q28",
                "id": "53d54a55-684d-43df-8390-80ab7b783279"
            },
            {
                "is": 0,
                "text": "حدود تاریخ برداشت",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": true,
                "index": 0,
                "answer": "1402/تیر/1",
                "questionCode": "PC40S1Q29",
                "id": "ea006ee4-ccad-4b2d-997b-431c720e340e"
            },
            {
                "is": 0,
                "text": "حدود تاریخ اولین آبیاری پیش رو",
                "helptext": "این سوال مربوط به فصل رشد است. به این معنی که از امروز به بعد اولین آبیاری را در چه تاریخی انجام خواهید داد؟",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q30",
                "id": "7bfcd5ad-3fe4-49df-ae8f-d5e497f1eeb9"
            },
            {
                "is": 0,
                "text": "حدود تاریخ اولین آبیاری در بهار",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q31",
                "id": "0fee5578-f7ea-419b-8e6d-affadaca333a"
            },
            {
                "is": 0,
                "text": "حدود تاریخ آخرین آبیاری قبل از برداشت",
                "type": 2,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q32",
                "id": "eebeecec-7f45-4655-b444-96a654d32da8"
            },
            {
                "is": 0,
                "text": "ظرفیت مخزن سمپاش",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "10 لیتر",
                    "20 لیتر",
                    "100 لیتر",
                    "200 لیتر",
                    "300 لیتر",
                    "400 لیتر",
                    "500 لیتر",
                    "600 لیتر",
                    "700 لیتر",
                    "800 لیتر",
                    "900 لیتر",
                    "1000 لیتر",
                    "1500 لیتر",
                    "2000 لیتر",
                    "3000 لیتر",
                    "4000 لیتر",
                    "5000 لیتر"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q33",
                "id": "cd2eb502-c124-4649-bb8c-8a87bfaf8fd5"
            },
            {
                "is": 0,
                "text": "در هر مرحله محلول پاشی در یک هکتار چند لیتر آب مصرف می کنید؟",
                "helptext": "برای محلول‌پاشی در هر هکتار چند لیتر آب مورد نیاز است؟ این مقدار بسته به نوع سمپاش، نحوه محلول‌پاشی، سرعت عمل و هدف از محلول‌پاشی متفاوت است. (حالت مه‌پاشی را در نظر بگیرید نه شستشو)",
                "type": 4,
                "list": [
                    "انتخاب کنید",
                    "10 لیتر",
                    "20 لیتر",
                    "100 لیتر",
                    "200 لیتر",
                    "300 لیتر",
                    "400 لیتر",
                    "500 لیتر",
                    "600 لیتر",
                    "700 لیتر",
                    "800 لیتر",
                    "900 لیتر",
                    "1000 لیتر",
                    "1500 لیتر",
                    "2000 لیتر",
                    "3000 لیتر",
                    "4000 لیتر",
                    "5000 لیتر"
                ],
                "preconditional": false,
                "conditional": false,
                "required": true,
                "index": 0,
                "answer": "300 لیتر",
                "questionCode": "PC40S1Q34",
                "id": "4ab49116-1bb2-49c5-9c3b-2c361f884725"
            },
            {
                "is": 0,
                "text": "میزان عملکرد دانه یک سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q35",
                "id": "671cc38b-79ca-454a-99b1-f30825739ddf"
            },
            {
                "is": 0,
                "text": "میزان عملکرد دانه دو سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q36",
                "id": "5ad8cf37-6fbc-4071-afdb-d6618019acc4"
            },
            {
                "is": 0,
                "text": "میزان عملکرد دانه سه سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q37",
                "id": "5c618aed-7657-4592-89de-ee7b2b629040"
            },
            {
                "is": 0,
                "text": "میزان عملکرد کاه یک سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q38",
                "id": "ccb46984-d436-4d20-864e-1e6818bef96e"
            },
            {
                "is": 0,
                "text": "میزان عملکرد کاه دو سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q39",
                "id": "5acd3354-396c-4cbc-9ba3-341149433b0a"
            },
            {
                "is": 0,
                "text": "میزان عملکرد کاه سه سال قبل در هکتار",
                "type": 8,
                "list": [
                    "کیلوگرم",
                    "تن"
                ],
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q40",
                "id": "4cb08222-d84e-49bc-bf31-266450b9e0fa"
            },
            {
                "is": 0,
                "text": "مشکلات دو سال گذشته",
                "type": 0,
                "preconditional": false,
                "conditional": false,
                "required": false,
                "index": 0,
                "answer": "",
                "questionCode": "PC40S1Q41",
                "id": "e9cd450e-c6b1-4f06-a8a6-22d629a08ad7"
            }
        ]
    
}

const App = () => {

  // const [staticData, setStaticData] = useState(null)
  //
  const [edited, setEdited] = useState(null)
  const [modal, setModal] = useState(null)
  const handleClick = () => setModal(<EditorContainer toEdit={object} setEdited={setEdited} setModal={setModal} staticData={null} forWhat="QUE"/>)
  //

  // useEffect(() => {
  //   fetch('http://185.81.99.8:5000/api/static/fields/expert')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setStaticData(data.data.result)
  //     });
  // }, [])

  console.log("edited: ", edited)

  return (
    <div className="main">
      <div>{modal}</div>
      <button width="100px" height="50px" onClick={handleClick} />
    </div>
  )
}

export default App
