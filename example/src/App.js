import React, { useState } from 'react'
import { EditorContainer } from 'editorman'
import 'editorman/dist/index.css'
import 'editorman/dist/index/'

const staticData = {
  EXPERTISES: [
    {
      id: 1,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'گندم و جو'
    },
    {
      id: 2,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'برنج'
    },
    {
      id: 3,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'سیب زمینی'
    },
    {
      id: 4,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'گوجه فرنگی'
    },
    {
      id: 5,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'چغندرقند'
    },
    {
      id: 6,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'ذرت'
    },
    {
      id: 7,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'زعفران'
    },
    {
      id: 8,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'کلزا'
    },
    {
      id: 9,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'یونجه'
    },
    {
      id: 10,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'کنجد'
    },
    {
      id: 11,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'پنبه'
    },
    {
      id: 12,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'نخود و عدس'
    },
    {
      id: 13,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'لوبیا، باقلا و ماش'
    },
    {
      id: 14,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'گیاهان جالیزی'
    },
    {
      id: 15,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'آفتابگردان'
    },
    {
      id: 16,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'بادام زمینی'
    },
    {
      id: 17,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'گیاهان دارویی'
    },
    {
      id: 18,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'زیره سبز'
    },
    {
      id: 19,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'سیر'
    },
    {
      id: 20,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'پیاز'
    },
    {
      id: 21,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'سبزیجات برگی'
    },
    {
      id: 22,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'سبزیجات غده ای'
    },
    {
      id: 23,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'کاهو'
    },
    {
      id: 24,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'هویچ'
    },
    {
      id: 25,
      categoryEN: 'EXPERTISES_FARMS',
      categoryFA: 'مزارع',
      name: 'توتون'
    },
    {
      id: 26,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'گاو'
    },
    {
      id: 27,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'گوسفند'
    },
    {
      id: 28,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'شتر'
    },
    {
      id: 29,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'اسب'
    },
    {
      id: 30,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'گاومیش'
    },
    {
      id: 31,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'شترمرغ'
    },
    {
      id: 32,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'مرغ بومی'
    },
    {
      id: 33,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'مرغ گوشتی'
    },
    {
      id: 34,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'مرغ تخمگذار'
    },
    {
      id: 35,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'بلدرچین'
    },
    {
      id: 36,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'سایر ماکیان'
    },
    {
      id: 37,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'زنبور عسل'
    },
    {
      id: 38,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'کرم ابریشم'
    },
    {
      id: 39,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'ماهیان سرد ‌آبی'
    },
    {
      id: 40,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'ماهیان گرم‌آبی'
    },
    {
      id: 41,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'ماهیان زینتی'
    },
    {
      id: 42,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'زالو'
    },
    {
      id: 43,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'حشرات صنعتی'
    },
    {
      id: 44,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'کروکودیل'
    },
    {
      id: 45,
      categoryEN: 'EXPERTISES_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'سگ نگهبان'
    },
    {
      id: 46,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'توت فرنگی'
    },
    {
      id: 47,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'خیار'
    },
    {
      id: 48,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'گوجه فرنگی'
    },
    {
      id: 49,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'فلفل'
    },
    {
      id: 50,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'بادمجان'
    },
    {
      id: 51,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'گیاهان آپارتمانی'
    },
    {
      id: 52,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'سبزیجات'
    },
    {
      id: 53,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'گیاهان زینتی'
    },
    {
      id: 54,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'گیاهان دارویی'
    },
    {
      id: 55,
      categoryEN: 'EXPERTISES_EARTHEN_GREENHOUSE',
      categoryFA: 'گلخانه خاکی',
      name: 'گل‌های شاخه بریده'
    },
    {
      id: 56,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'آناتومی'
    },
    {
      id: 57,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'بافت شناسی'
    },
    {
      id: 58,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'فیزیولوژی'
    },
    {
      id: 59,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'بیوشیمی'
    },
    {
      id: 60,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'فارماکولوژی'
    },
    {
      id: 61,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'سم شناسی'
    },
    {
      id: 62,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'پاتولوژی'
    },
    {
      id: 63,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'انگل شناسی'
    },
    {
      id: 64,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'ویروس شناسی'
    },
    {
      id: 65,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'باکتری شناسی'
    },
    {
      id: 66,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'بهداشت مواد غذایی'
    },
    {
      id: 67,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'ایمنی شناسی'
    },
    {
      id: 68,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'بیماری‌های داخلی'
    },
    {
      id: 69,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'رادیولوژی'
    },
    {
      id: 70,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'جراحی'
    },
    {
      id: 71,
      categoryEN: 'EXPERTISES_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'مامایی و تولید مثل دام'
    },
    {
      id: 72,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'توت فرنگی'
    },
    {
      id: 73,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'خیار'
    },
    {
      id: 74,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'گوجه فرنگی'
    },
    {
      id: 75,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'فلفل'
    },
    {
      id: 76,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'گل‌های شاخه بریده'
    },
    {
      id: 77,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'گل‌های زینتی'
    },
    {
      id: 78,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'مینی‌تیوبر سیب زمینی'
    },
    {
      id: 79,
      categoryEN: 'EXPERTISES_HYDROPONIC_GREENHOUSE',
      categoryFA: 'گلخانه غیر خاکی',
      name: 'زعفران'
    },
    {
      id: 80,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'پسته'
    },
    {
      id: 81,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'سیب، گلابی و به'
    },
    {
      id: 82,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'هلو و شلیل'
    },
    {
      id: 83,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'آلبالو و گیلاس'
    },
    {
      id: 84,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'آلو و زردآلو'
    },
    {
      id: 85,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'بادام'
    },
    {
      id: 86,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'باغ تلفیقی'
    },
    {
      id: 87,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'انار'
    },
    {
      id: 88,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'انگور'
    },
    {
      id: 89,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'انجیر'
    },
    {
      id: 90,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'گل محمدی'
    },
    {
      id: 91,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'زیتون'
    },
    {
      id: 92,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'زرشک'
    },
    {
      id: 93,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'پرتقال و نارنگی'
    },
    {
      id: 94,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'تمشک'
    },
    {
      id: 95,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'لیمو'
    },
    {
      id: 96,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'نخلستان خرما'
    },
    {
      id: 97,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'گردو'
    },
    {
      id: 98,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'چای'
    },
    {
      id: 99,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'کیوی'
    },
    {
      id: 100,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'فندق'
    },
    {
      id: 101,
      categoryEN: 'EXPERTISES_GARDENS',
      categoryFA: 'باغات',
      name: 'خرمالو'
    }
  ],
  PROFESSIONS: [
    {
      id: 1,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'راهبر پهپاد'
    },
    {
      id: 2,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حر ف جامع',
      name: 'سازنده ماشین آلات کشاورزی'
    },
    {
      id: 3,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'عرضه کننده خدمات سیستم‌های آبیاری'
    },
    {
      id: 4,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'طراح و مجری فضای سبز'
    },
    {
      id: 5,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'نهالستان'
    },
    {
      id: 6,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'ارائه کننده خدمات مکانیزاسیون'
    },
    {
      id: 7,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'فروشگاه نهادهای کشاورزی'
    },
    {
      id: 8,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'کلینیک گیاه پزشکی'
    },
    {
      id: 9,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'آزمایشگاه آب، خاک، گیاه و کود'
    },
    {
      id: 10,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'کارگزاری دولتی نهادهای کشاورزی'
    },
    {
      id: 11,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'تعمیرکار ادوات کشاورزی'
    },
    {
      id: 12,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'عرضه کننده ادوات کشاورزی'
    },
    {
      id: 13,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'خدمات فنی مهندسی'
    },
    {
      id: 14,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'تولیدکننده بذر'
    },
    {
      id: 15,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'عرضه کننده بذر'
    },
    {
      id: 16,
      categoryEN: 'PROFESSIONS_COMPREHENSIVE_PROFESSIONS',
      categoryFA: 'حرف جامع',
      name: 'عرضه کننده پهپاد'
    },
    {
      id: 17,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'واکسیناسیون'
    },
    {
      id: 18,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'کارشناس تغذیه دام سبک'
    },
    {
      id: 19,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'کارشناس تغذیه دام سنگین'
    },
    {
      id: 20,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'مدیریت دام'
    },
    {
      id: 21,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'کارشناس تغذیه طیور'
    },
    {
      id: 22,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'مدیریت طیور'
    },
    {
      id: 23,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده خوراک دام'
    },
    {
      id: 24,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده آبزیان'
    },
    {
      id: 25,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده دام سبک'
    },
    {
      id: 26,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده دام سنگین'
    },
    {
      id: 27,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده طیور گوشتی'
    },
    {
      id: 28,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده طیور تخمگذار'
    },
    {
      id: 29,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'تولیدکننده زنبورعسل'
    },
    {
      id: 30,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'فروشنده خوراک دام'
    },
    {
      id: 31,
      categoryEN: 'PROFESSIONS_LIVESTOCK_POULTRY',
      categoryFA: 'دام و طیور',
      name: 'ارائه‌دهنده تجهیزات دامپروری'
    },
    {
      id: 32,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'ارائه خدمات نصب گلخانه'
    },
    {
      id: 33,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولید و فروش گیاهان آپارتمانی'
    },
    {
      id: 34,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولیدکننده نشاء'
    },
    {
      id: 35,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولیدکننده گل‌های شاخه بریده'
    },
    {
      id: 36,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولیدکننده محصولات گلخانه‌ای'
    },
    {
      id: 37,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'کارشناس گلخانه'
    },
    {
      id: 38,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولیدکننده قارچ خوراکی و دارویی'
    },
    {
      id: 39,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'تولیدکننده تجهیزات کشت قارچ'
    },
    {
      id: 40,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'عرضه کننده تجهیزات گلخانه'
    },
    {
      id: 41,
      categoryEN: 'PROFESSIONS_GREENHOUSE',
      categoryFA: 'گلخانه',
      name: 'سازنده گلخانه'
    },
    {
      id: 42,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'احداث باغ'
    },
    {
      id: 43,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'خدمات باغبانی'
    },
    {
      id: 44,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'پیوند زن'
    },
    {
      id: 45,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'هرس کار'
    },
    {
      id: 46,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'تولید بذر سیب زمینی'
    },
    {
      id: 47,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'تولیدکننده گیاهان دارویی'
    },
    {
      id: 48,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'کارشناس باغبانی'
    },
    {
      id: 49,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'کارشناس زراعت'
    },
    {
      id: 50,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'کارشناس آبیاری'
    },
    {
      id: 51,
      categoryEN: 'PROFESSIONS_FARMS_AND_GARDENS',
      categoryFA: 'زراعت و باغ',
      name: 'کارشناس علف هرز'
    },
    {
      id: 52,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'داروخانه دامپزشکی'
    },
    {
      id: 53,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'دامپزشک'
    },
    {
      id: 54,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'آزمایشگاه دامپزشکی'
    },
    {
      id: 55,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'آزمایشگاه کنترل مواد غذایی'
    },
    {
      id: 56,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'مراکز واکسیناسیون دام'
    },
    {
      id: 57,
      categoryEN: 'PROFESSIONS_VETERINARY_MEDICINE',
      categoryFA: 'دامپزشکی',
      name: 'بیمارستان دامپزشکی'
    }
  ],
  EXPERTS_SORTS: [
    {
      id: 1,
      categoryEN: 'EXPERTS_SORTS',
      categoryFA: 'ترتیب کارشناسان',
      name: 'بیشترین امتیاز'
    },
    {
      id: 2,
      categoryEN: 'EXPERTS_SORTS',
      categoryFA: 'ترتیب کارشناسان',
      name: 'جدیدترین کارشناسان'
    },
    {
      id: 3,
      categoryEN: 'EXPERTS_SORTS',
      categoryFA: 'ترتیب کارشناسان',
      name: 'بیشترین برنامه غذایی'
    },
    {
      id: 4,
      categoryEN: 'EXPERTS_SORTS',
      categoryFA: 'ترتیب کارشناسان',
      name: 'بیشترین تعداد بازدید'
    }
  ],
  EXPERTS_BADGES: [
    {
      id: 1,
      categoryEN: 'EXPERTS_BADGES',
      categoryFA: 'نشان‌های کارشناسان',
      name: 'کارآمد',
      iconURL: 'https://agrodayan.s3.ir-thr-at1.arvanstorage.com/efficient.png'
    },
    {
      id: 2,
      categoryEN: 'EXPERTS_BADGES',
      categoryFA: 'نشان‌های کارشناسان',
      name: 'محقق',
      iconURL: 'https://agrodayan.s3.ir-thr-at1.arvanstorage.com/researcher.png'
    },
    {
      id: 3,
      categoryEN: 'EXPERTS_BADGES',
      categoryFA: 'نشان‌های کارشناسان',
      name: 'شایسته',
      iconURL: 'https://agrodayan.s3.ir-thr-at1.arvanstorage.com/worthy.png'
    },
    {
      id: 4,
      categoryEN: 'EXPERTS_BADGES',
      categoryFA: 'نشان‌های کارشناسان',
      name: 'متخصص',
      iconURL: 'https://agrodayan.s3.ir-thr-at1.arvanstorage.com/proficient.png'
    },
    {
      id: 5,
      categoryEN: 'EXPERTS_BADGES',
      categoryFA: 'نشان‌های کارشناسان',
      name: 'خبره',
      iconURL:
        'https://agrodayan.s3.ir-thr-at1.arvanstorage.com/connoisseur.png'
    }
  ],
  ACADEMIC_RANKS: [
    {
      id: 1,
      categoryEN: 'ACADEMIC_RANKS',
      categoryFA: 'مرتبه علمی',
      name: 'استاد'
    },
    {
      id: 2,
      categoryEN: 'ACADEMIC_RANKS',
      categoryFA: 'مرتبه علمی',
      name: 'دانشیار'
    },
    {
      id: 3,
      categoryEN: 'ACADEMIC_RANKS',
      categoryFA: 'مرتبه علمی',
      name: 'استادیار'
    },
    {
      id: 4,
      categoryEN: 'ACADEMIC_RANKS',
      categoryFA: 'مرتبه علمی',
      name: 'مربی'
    },
    {
      id: 5,
      categoryEN: 'ACADEMIC_RANKS',
      categoryFA: 'مرتبه علمی',
      name: 'محقق'
    }
  ],
  ACADEMIC_FIELDS: [
    {
      id: 1,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'رشته غیر کشاورزی'
    },
    {
      id: 2,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'زراعت و اصلاح نباتات'
    },
    {
      id: 3,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'زراعت'
    },
    {
      id: 4,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'فیزیولوژی گیاهی'
    },
    {
      id: 5,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'علوم علف‌های هرز'
    },
    {
      id: 6,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'علوم و تکنولوژی بذر'
    },
    {
      id: 7,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'اگرواکولوژی'
    },
    {
      id: 8,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'تولیدات گیاهی'
    },
    {
      id: 9,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'اصلاح نباتات'
    },
    {
      id: 10,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'ژنتیک گیاهی'
    },
    {
      id: 11,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'بیوتکنولوژی کشاورزی'
    },
    {
      id: 12,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'زیست شناسی گیاهی'
    },
    {
      id: 13,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'علوم باغبانی'
    },
    {
      id: 14,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'علوم خاک'
    },
    {
      id: 15,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'گیاهپزشکی'
    },
    {
      id: 16,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'بیماری شناسی کشاورزی'
    },
    {
      id: 17,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'حشره‌شناسی کشاورزی'
    },
    {
      id: 18,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مهندسی آب (آبیاری)'
    },
    {
      id: 19,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'آبیاری و زهکشی'
    },
    {
      id: 20,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'سازه‌های آبی'
    },
    {
      id: 21,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مهندسی منابع آب'
    },
    {
      id: 22,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'هواشناسی کشاورزی'
    },
    {
      id: 23,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'اقتصاد کشاورزی'
    },
    {
      id: 24,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مدیریت کشاورزی'
    },
    {
      id: 25,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'علوم دامی'
    },
    {
      id: 26,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'تولید و پرورش طیور'
    },
    {
      id: 27,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'تولیدات دامی'
    },
    {
      id: 28,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'دامپزشکی'
    },
    {
      id: 29,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مهندسی شیلات'
    },
    {
      id: 30,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مهندسی منابع طبیعی'
    },
    {
      id: 31,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'محیط زیست'
    },
    {
      id: 32,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'طراحی فضای سبز'
    },
    {
      id: 33,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مکانیزاسیون کشاورزی'
    },
    {
      id: 34,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'مکانیک بیوسیستم'
    },
    {
      id: 35,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'صنایع غذایی'
    },
    {
      id: 36,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'ترویج و آموزش کشاورزی'
    },
    {
      id: 37,
      categoryEN: 'ACADEMIC_FIELD',
      categoryFA: 'رشته تحصیلی',
      name: 'توسعه روستایی'
    }
  ],
  ACADEMIC_DEGREE: [
    {
      id: 1,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'دکتری'
    },
    {
      id: 2,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'کارشناسی ارشد'
    },
    {
      id: 3,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'کارشناسی'
    },
    {
      id: 4,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'دانشجوی دکتری'
    },
    {
      id: 5,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'دانشجوی کارشناسی ارشد'
    },
    {
      id: 6,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'دانشجوی کارشناسی'
    },
    {
      id: 7,
      categoryEN: 'ACADEMIC_DEGREE',
      categoryFA: 'مدرک تحصیلی',
      name: 'فاقد تحصیلات دانشگاهی'
    }
  ],
  EXPERTS_SYMBOLS: [
    {
      id: 1,
      categoryEN: 'EXPERTS_SYMBOLS',
      categoryFA: 'نمادهای کارشناسان',
      name: 'هیئت علمی دانشگاه',
      iconURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/science-committee.png',
      iconLargeURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/science-committee-large.png'
    },
    {
      id: 2,
      categoryEN: 'EXPERTS_SYMBOLS',
      categoryFA: 'نمادهای کارشناسان',
      name: 'هیئت علمی مرکز تحقیقات',
      iconURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/research-center.png',
      iconLargeURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/research-center-large.png'
    },
    {
      id: 3,
      categoryEN: 'EXPERTS_SYMBOLS',
      categoryFA: 'نمادهای کارشناسان',
      name: 'دانشجو',
      iconURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/student.png',
      iconLargeURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/student-large.png'
    },
    {
      id: 4,
      categoryEN: 'EXPERTS_SYMBOLS',
      categoryFA: 'نمادهای کارشناسان',
      name: 'خبره',
      iconURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/connoisseur.png',
      iconLargeURL:
        'https://agroiranexpert.s3.ir-thr-at1.arvanstorage.ir/statics/symbols/connoisseur-large.png'
    }
  ],
  EXECUTIVE_SKILLS: [
    {
      id: 1,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره تغذیه و کوددهی'
    },
    {
      id: 2,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره زراعت'
    },
    {
      id: 3,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره باغبانی'
    },
    {
      id: 4,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره گلخانه'
    },
    {
      id: 5,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره گیاهپزشکی'
    },
    {
      id: 6,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره خاکشناسی'
    },
    {
      id: 7,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره آب و آبیاری'
    },
    {
      id: 8,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره حوزه بذر'
    },
    {
      id: 9,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره علف‌های هرز'
    },
    {
      id: 10,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره مکانیزاسیون'
    },
    {
      id: 11,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره علوم دام'
    },
    {
      id: 12,
      categoryEN: 'EXECUTIVE_SKILLS_CONSULTING',
      categoryFA: 'زمینه مشاوره',
      name: 'مشاوره تولید قارچ'
    },
    {
      id: 13,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'زراعت'
    },
    {
      id: 14,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'باغبانی'
    },
    {
      id: 15,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'گلخانه'
    },
    {
      id: 16,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'گیاهان دارویی'
    },
    {
      id: 17,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'علوم دام'
    },
    {
      id: 18,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'آزمایشگاه'
    },
    {
      id: 19,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'عرضه نهادها'
    },
    {
      id: 20,
      categoryEN: 'EXECUTIVE_SKILLS_ACTIVITY',
      categoryFA: 'زمینه فعالیت',
      name: 'مکانیزاسیون'
    }
  ],
  EXPERTS_SURVEY_OPTIONS: [
    {
      id: 1,
      categoryEN: 'EXPERTS_SURVEY_OPTIONS',
      categoryFA: 'گزینه‌های نظرسنجی',
      name: 'عالی'
    },
    {
      id: 2,
      categoryEN: 'EXPERTS_SURVEY_OPTIONS',
      categoryFA: 'گزینه‌های نظرسنجی',
      name: 'خوب'
    },
    {
      id: 3,
      categoryEN: 'EXPERTS_SURVEY_OPTIONS',
      categoryFA: 'گزینه‌های نظرسنجی',
      name: 'متوسط'
    },
    {
      id: 4,
      categoryEN: 'EXPERTS_SURVEY_OPTIONS',
      categoryFA: 'گزینه‌های نظرسنجی',
      name: 'ضعیف'
    },
    {
      id: 5,
      categoryEN: 'EXPERTS_SURVEY_OPTIONS',
      categoryFA: 'گزینه‌های نظرسنجی',
      name: 'بد'
    }
  ],
  WORKPLACE_ORGANIZATIONS: [
    {
      id: 1,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'جهاد کشاورزی',
      positionsIds: [1, 2, 3, 4]
    },
    {
      id: 2,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'دانشگاه',
      positionsIds: [5, 6]
    },
    {
      id: 3,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'مرکز تحقیقات کشاورزی',
      positionsIds: [5, 6]
    },
    {
      id: 4,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'سایر ارگان‌های دولتی',
      positionsIds: []
    },
    {
      id: 5,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'شرکت خصوصی',
      positionsIds: []
    },
    {
      id: 6,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'شغل آزاد',
      positionsIds: []
    },
    {
      id: 7,
      categoryEN: 'WORKPLACE_ORGANIZATIONS',
      categoryFA: 'سازمان محل کار',
      name: 'سایر',
      positionsIds: []
    }
  ],
  WORKPLACE_ORGANIZATIONS_POSITIONS: [
    {
      id: 1,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'ریاست',
      academicRanksIds: null
    },
    {
      id: 2,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'معاونت',
      academicRanksIds: null
    },
    {
      id: 3,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'کارمند',
      academicRanksIds: null
    },
    {
      id: 4,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'کارشناس',
      academicRanksIds: null
    },
    {
      id: 5,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'هیئت علمی',
      academicRanksIds: {
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4, 5]
      }
    },
    {
      id: 6,
      categoryEN: 'WORKPLACE_ORGANIZATIONS_POSITIONS',
      categoryFA: 'سمت',
      name: 'اداری',
      academicRanksIds: null
    }
  ]
}
// const object = {
//     "expertises": [
//         {
//           "id": 1,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "گندم و جو"
//         },
//         {
//           "id": 2,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "برنج"
//         },
//         {
//           "id": 3,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "سیب زمینی"
//         },
//         {
//           "id": 4,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "گوجه فرنگی"
//         },
//         {
//           "id": 5,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "چغندرقند"
//         },
//         {
//           "id": 6,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "ذرت"
//         },
//         {
//           "id": 7,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "زعفران"
//         },
//         {
//           "id": 8,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "کلزا"
//         },
//         {
//           "id": 10,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "کنجد"
//         },
//         {
//           "id": 11,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "پنبه"
//         },
//         {
//           "id": 18,
//           "categoryEN": "EXPERTISES_FARMS",
//           "categoryFA": "مزارع",
//           "name": "زیره سبز"
//         },
//         {
//           "id": 48,
//           "categoryEN": "EXPERTISES_EARTHEN_GREENHOUSE",
//           "categoryFA": "گلخانه خاکی",
//           "name": "گوجه فرنگی"
//         },
//         {
//           "id": 74,
//           "categoryEN": "EXPERTISES_HYDROPONIC_GREENHOUSE",
//           "categoryFA": "گلخانه غیر خاکی",
//           "name": "گوجه فرنگی"
//         },
//         {
//           "id": 79,
//           "categoryEN": "EXPERTISES_HYDROPONIC_GREENHOUSE",
//           "categoryFA": "گلخانه غیر خاکی",
//           "name": "زعفران"
//         },
//         {
//           "id": 80,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "پسته"
//         },
//         {
//           "id": 81,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "سیب، گلابی و به"
//         },
//         {
//           "id": 82,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "هلو و شلیل"
//         },
//         {
//           "id": 86,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "باغ تلفیقی"
//         },
//         {
//           "id": 87,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "انار"
//         },
//         {
//           "id": 90,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "گل محمدی"
//         },
//         {
//           "id": 95,
//           "categoryEN": "EXPERTISES_GARDENS",
//           "categoryFA": "باغات",
//           "name": "لیمو"
//         }
//       ]
// }

// const object = {
//   "professions": [
//     {
//       "id": 3,
//       "categoryEN": "PROFESSIONS_COMPREHENSIVE_PROFESSIONS",
//       "categoryFA": "حرف جامع",
//       "name": "عرضه کننده خدمات سیستم‌های آبیاری"
//     },
//     {
//       "id": 9,
//       "categoryEN": "PROFESSIONS_COMPREHENSIVE_PROFESSIONS",
//       "categoryFA": "حرف جامع",
//       "name": "آزمایشگاه آب، خاک، گیاه و کود"
//     },
//     {
//       "id": 22,
//       "categoryEN": "PROFESSIONS_LIVESTOCK_POULTRY",
//       "categoryFA": "دام و طیور",
//       "name": "مدیریت طیور"
//     },
//     {
//       "id": 23,
//       "categoryEN": "PROFESSIONS_LIVESTOCK_POULTRY",
//       "categoryFA": "دام و طیور",
//       "name": "تولیدکننده خوراک دام"
//     },
//     {
//       "id": 24,
//       "categoryEN": "PROFESSIONS_LIVESTOCK_POULTRY",
//       "categoryFA": "دام و طیور",
//       "name": "تولیدکننده آبزیان"
//     },
//     {
//       "id": 34,
//       "categoryEN": "PROFESSIONS_GREENHOUSE",
//       "categoryFA": "گلخانه",
//       "name": "تولیدکننده نشاء"
//     },
//     {
//       "id": 37,
//       "categoryEN": "PROFESSIONS_GREENHOUSE",
//       "categoryFA": "گلخانه",
//       "name": "کارشناس گلخانه"
//     },
//     {
//       "id": 46,
//       "categoryEN": "PROFESSIONS_FARMS_AND_GARDENS",
//       "categoryFA": "زراعت و باغ",
//       "name": "تولید بذر سیب زمینی"
//     },
//     {
//       "id": 48,
//       "categoryEN": "PROFESSIONS_FARMS_AND_GARDENS",
//       "categoryFA": "زراعت و باغ",
//       "name": "کارشناس باغبانی"
//     },
//     {
//       "id": 49,
//       "categoryEN": "PROFESSIONS_FARMS_AND_GARDENS",
//       "categoryFA": "زراعت و باغ",
//       "name": "کارشناس زراعت"
//     },
//     {
//       "id": 53,
//       "categoryEN": "PROFESSIONS_VETERINARY_MEDICINE",
//       "categoryFA": "دامپزشکی",
//       "name": "دامپزشک"
//     },
//     {
//       "id": 54,
//       "categoryEN": "PROFESSIONS_VETERINARY_MEDICINE",
//       "categoryFA": "دامپزشکی",
//       "name": "آزمایشگاه دامپزشکی"
//     }
//   ]
// }

// const object = {
//   "activityFields": [
//     {
//       "id": 13,
//       "categoryEN": "EXECUTIVE_SKILLS_ACTIVITY",
//       "categoryFA": "زمینه فعالیت",
//       "name": "زراعت"
//     },
//     {
//       "id": 14,
//       "categoryEN": "EXECUTIVE_SKILLS_ACTIVITY",
//       "categoryFA": "زمینه فعالیت",
//       "name": "باغبانی"
//     }
//   ]
// }

// const object = {
//   "consultingFields": [
//     {
//       "id": 1,
//       "categoryEN": "EXECUTIVE_SKILLS_CONSULTING",
//       "categoryFA": "زمینه مشاوره",
//       "name": "مشاوره تغذیه و کوددهی"
//     },
//     {
//       "id": 6,
//       "categoryEN": "EXECUTIVE_SKILLS_CONSULTING",
//       "categoryFA": "زمینه مشاوره",
//       "name": "مشاوره خاکشناسی"
//     },
//     {
//       "id": 7,
//       "categoryEN": "EXECUTIVE_SKILLS_CONSULTING",
//       "categoryFA": "زمینه مشاوره",
//       "name": "مشاوره آب و آبیاری"
//     },
//     {
//       "id": 8,
//       "categoryEN": "EXECUTIVE_SKILLS_CONSULTING",
//       "categoryFA": "زمینه مشاوره",
//       "name": "مشاوره حوزه بذر"
//     }
//   ]
// }

// const object = {
//   "academicDegree": {
//     "id": 1,
//     "categoryEN": "ACADEMIC_DEGREE",
//     "categoryFA": "مدرک تحصیلی",
//     "name": "دکتری"
//   },
// }
// const object = {
//   "academicField": {
//     "id": 4,
//     "categoryEN": "ACADEMIC_FIELD",
//     "categoryFA": "رشته تحصیلی",
//     "name": "فیزیولوژی گیاهی"
//   },
// }

const object = {
  cover: "iranexpert/696c1bf1-6f83-4ad5-b7f8-146239b1e785.jpg",
  // resume: "iranexpert/a46a681c-13d5-4411-9612-5876a2cd2924.pdf",
  // studentCard: "iranexpert/1.png",
  // identityDocument: "iranexpert/69b28b74-6f8e-4017-87d7-3b2fc08c3e53.jpg",
  // avatar: "iranexpert/experts/934f2fd8-4827-41bb-8bd4-599362aeea3b/1693820946653-doctor.png",
  engineeringSystemCard: "iranexpert/1690761600000/9ca93ed1c6824628bdd5fc428d7135c7/FSEMA807138-YR366812193307_1_4_0.jpg",
  academicDegreeDocument: "iranexpert/1.png",
}

const App = () => {
  const [edited, setEdited] = useState(null)
  const [modal, setModal] = useState(null)
  const handleClick = () =>
    setModal(
      <EditorContainer
        toEdit={object}
        setEdited={setEdited}
        setModal={setModal}
        staticData={staticData}
        forWhat='EXP'
      />
    )

  console.log('edited: ', edited)

  return (
    <div className='main'>
      <div>{modal}</div>
      <button width='100px' height='50px' onClick={handleClick} />
    </div>
  )
}

export default App
