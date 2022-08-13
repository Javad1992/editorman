import React, { useState, useEffect } from 'react'
import { EditorContainer } from 'editorman'
import 'editorman/dist/index.css'
import 'editorman/dist/index/'

// const object = {
//   farmingStatus: false
// }

// const object = {
//   avatarUrl : "http://agroiranexpert.ir/uploads/experts/d5161306-78e5-4d7f-a32e-cc19378a0055.jpg"

// }

// const object = {
//   jobFiled : ['زراعت']
// }

// const object = {
//   profession: [ {
//     "parentName": "زراعت و باغ",
//     "id": "613",
//     "name": "کارشناس باغ"
// },
// {
//     "parentName": "زراعت و باغ",
//     "id": "614",
//     "name": "کارشناس زراعت"
// }]
// }

// const object = {
//   consultingField: ["گیاه پزشکی"]
// }

const object = {
  expertise: [
    {
      "parentName": "مزارع",
      "id": "21",
      "name": "گندم و جو"
    },
    {
      "parentName": "مزارع",
      "id": "22",
      "name": "برنج"
    },
    {
      "parentName": "مزارع",
      "id": "23",
      "name": "سیب زمینی"
    },
    {
      "parentName": "مزارع",
      "id": "24",
      "name": "گوجه فرنگی"
    },
    {
      "parentName": "مزارع",
      "id": "25",
      "name": "چغندرقند"
    },
    {
      "parentName": "مزارع",
      "id": "26",
      "name": "ذرت"
    },
    {
      "parentName": "مزارع",
      "id": "27",
      "name": "زعفران"
    },
    {
      "parentName": "مزارع",
      "id": "210",
      "name": "کنجد"
    },
    {
      "parentName": "مزارع",
      "id": "211",
      "name": "پنبه"
    },
    {
      "parentName": "مزارع",
      "id": "218",
      "name": "زیره سبز"
    },
    {
      "parentName": "باغات",
      "id": "11",
      "name": "پسته"
    },
    {
      "parentName": "باغات",
      "id": "12",
      "name": "سیب، گلابی و به"
    },
    {
      "parentName": "باغات",
      "id": "13",
      "name": "هلو و شلیل"
    },
    {
      "parentName": "باغات",
      "id": "14",
      "name": "آلبالو و گیلاس"
    },
    {
      "parentName": "باغات",
      "id": "16",
      "name": "بادام"
    },
    {
      "parentName": "باغات",
      "id": "17",
      "name": "باغ تلفیقی"
    },
    {
      "parentName": "باغات",
      "id": "18",
      "name": "انار"
    },
    {
      "parentName": "باغات",
      "id": "110",
      "name": "انجیر"
    },
    {
      "parentName": "باغات",
      "id": "112",
      "name": "زرشک"
    }
  ]
}




// const object = {
//   communicationWays:   [
//   //   {
//   //     title: "landingNumber",
//   //     value: "09395493963",
//   //     logoUrl: "https: //agrodayan.ir/uploads/images/officialphoneNumber.webp",
//   //     publicationStatus: true
//   // },
//     {
//     title: "officialPhoneNumber",
//     value: "09155599612",
//     logoUrl: "https: //agrodayan.ir/uploads/images/officialphoneNumber.webp",
//     publicationStatus: true
// },
// {
//     title: "Tak",
//     value: "JRnd872ZpXBWC6E",
//     logoUrl: "https://agrodayan.ir/uploads/images/tak_logo.png",
//     publicationStatus: true
// },
// {
//     title: "Whatsapp",
//     value: "09155599612",
//     logoUrl: "https: //agrodayan.ir/uploads/images/whasapp.jpg",
//     publicationStatus: true
// },
// {
//     title: "instagram",
//     value: "mojtaba_hosseinian",
//     logoUrl: "https: //agrodayan.ir/uploads/images/instagram.webp",
//     publicationStatus: true
// },
// {
//     title: "Telegram",
//     value: "agrodayan_com",
//     logoUrl: "https://agrodayan.ir/uploads/images/instagram.webp",
//     publicationStatus: true
// },
// {
//     title: "Linkedin",
//     value: "https://www.linkedin.com/in/mojtaba-hosseinian-4a50b0150/",
//     logoUrl: "https://agrodayan.ir/uploads/images/linkedin.png",
//     publicationStatus: true
// },
// {
//     title: "GoogleScholar",
//     value: "https://scholar.google.com/citations?user=v8RbnkgAAAAJ&hl=en",
//     logoUrl: "https: //agrodayan.ir/uploads/images/googleScholar.png",
//     publicationStatus: true
// },
// {
//     title: "email",
//     value: "hosseinian13@gmail.com",
//     logoUrl: "https: //agrodayan.ir/uploads/images/email.webp",
//     publicationStatus: true
// }]
// }

const App = () => {

  const [staticData, setStaticData] = useState(null)
  //
  const [edited, setEdited] = useState(null)
  const [modal, setModal] = useState(null)
  const handleClick = () => setModal(staticData && <EditorContainer toEdit={object} setEdited={setEdited} setModal={setModal} staticData={staticData} />)
  //

  useEffect(() => {
    fetch('http://185.81.99.8:5000/api/static/fields/expert')
      .then((response) => response.json())
      .then((data) => {
        setStaticData(data.data.result)
      });
  }, [])

  console.log("staticData: ", staticData)

  console.log("edited: ", edited)

  return (
    <div className="main">
      <div>{modal}</div>
      <button width="100px" height="50px" onClick={handleClick} />
    </div>
  )
}

export default App
