// creating an array and passing the number, questions, options, and answers

/*

setting {
  lankey: tr
}


{
  tr {}
  en{}


  answerOptionIndex - 
  quen_en
  quen_tr
  options_en
  options_tr

  question: {
    tr: "aaa"
    en: "bbbb"
  }
  answer: 0
  options: {
    tr: [

    ]
    en: [
      
    ]
  }
}

*/

let questions = [
  //Question 1
  {
    numb: 1,
    question: {
      en: "When must you signal before making a turn?",
      tr: "Dönüş yapmadan önce ne zaman sinyal vermelisiniz?",
    },
    answer: 0,
    options: {
      en: [
        "At least 100 feet before the intersection",
        "At least 50 feet before the intersection",
        "At least 25 feet before the intersection",
        "At least 10 feet before the intersection",
      ],
      tr: [
        "Kavşaktan en az 100 fit önce",
        "Kavşaktan en az 50 fit önce",
        "Kavşaktan en az 25 fit önce",
        "Kavşaktan en az 10 fit önce",
      ],
    },
  },

  //Question 2
  {
    numb: 2,
    question: {
      en: "How close may you park to a stop sign?",
      tr: "Dur işaretine ne kadar yakın park edebilirsiniz?",
    },
    answer: 3,
    options: {
      en: ["25 Feet", "100 Feet", "10 Feet", "50 Feet"],
      tr: ["25 Feet", "100 Feet", "10 Feet", "50 Feet"],
    },
  },

  //Question 3
  {
    numb: 3,
    question: {
      en: "How close may you park to a corner? ",
      tr: "Bir köşeye ne kadar yakın park edebilirsiniz?",
    },
    answer: 2,
    options: {
      en: ["15 Feet", "150 Feet", "25 Feet", "50 Feet"],
      tr: ["15 Feet", "150 Feet", "25 Feet", "50 Feet"],
    },
  },

  //Question 4
  {
    numb: 4,
    question: {
      en: "How close may you park to a fire hydrant? ",
      tr: "Yangın musluğuna ne kadar yakına park edebilirsiniz?",
    },
    answer: 0,
    options: {
      en: ["10 Feet", "20 Feet", "25 Feet", "50 Feet"],
      tr: ["10 Feet", "20 Feet", "25 Feet", "50 Feet"],
    },
  },

  //Question 5
  {
    numb: 5,
    question: {
      en: "What is the stopping distance on a dry road at 50 m.p.h.? ",
      tr: "Kuru bir yolda 50 m.p.h.'de durma mesafesi nedir?",
    },
    answer: 2,
    options: {
      en: ["242 Feet", "253 Feet", "243 Feet", "262 Feet"],
      tr: ["242 Feet", "253 Feet", "243 Feet", "262 Feet"],
    },
  },

  //Question 6
  {
    numb: 6,
    question: {
      en: "What is the proper distance you may park from the curb?  ",
      tr: "Kaldırımdan park edebileceğiniz uygun mesafe nedir?",
    },
    answer: 0,
    options: {
      en: [
        "6 inches or less",
        "5 inches or less",
        "3 inches or less",
        "7 inches or less",
      ],
      tr: [
        "6 inç veya daha az",
        "5 inç veya daha az",
        "3 inç veya daha az",
        "7 inç veya daha az",
      ],
    },
  },

  //Question 7
  {
    numb: 7,
    question: {
      en: "What are the penalties for driving without insurance? ",
      tr: "Sigortasız araç kullanmanın cezası nedir?",
    },
    answer: 0,
    options: {
      en: [
        "Suspension of driver's license",
        "Suspension of registration",
        "fines",
        "All of them",
      ],
      tr: [
        "Sürücü belgesinin askiya alinmasi",
        "Kayitin askiya alinmasi",
        "Para cezalari",
        "Hepsi",
      ],
    },
  },

  //Question 8
  {
    numb: 8,
    question: {
      en: "Serious accidents causing death, injury or $200 damage must be reported within 5 days to?  ",
      tr: "Ölüm, yaralanma veya 200 $ hasara neden olan ciddi kazalar 5 gün içinde nereye bildirilmelidir?",
    },
    answer: 0,
    options: {
      en: [
        "A Division of motor Vehicles office",
        "Post Office ",
        "Police ",
        "Firefighting ",
      ],
      tr: [
        "Motorlu Taşıtlar Şube Müdürlüğü",
        "Posta ofisi",
        "Polis",
        "Itfaiye",
      ],
    },
  },

  //Question 9
  {
    numb: 9,
    question: {
      en: "When will you be given a proposed License Suspension Notice? ",
      tr: "Size önerilen bir Lisans Askıya Alma Bildirimi ne zaman verilecek?",
    },
    answer: 3,
    options: {
      en: [
        "After receiving 8 points",
        "After receiving 4 points",
        "After receiving 2 points",
        "After receiving 12 points ",
      ],
      tr: [
        "8 puan aldıktan sonra",
        "4 puan aldıktan sonra",
        "2 puan aldıktan sonra)",
        "12 puan aldıktan sonra",
      ],
    },
  },

  //Question 10
  {
    numb: 10,
    question: {
      en: "What is the penalty for driving with a suspended license-first offense?  ",
      tr: "Ehliyet-ilk suç ile araç kullanmanın cezası nedir?",
    },
    answer: 1,
    options: {
      en: [
        "Fine of $700 and up to 8 months additional license suspension",
        ,
        "Fine of $500 and up to 6 months additional license suspension",
        "Fine of $600 and up to 12 months additional license suspension, ",
        "Fine of $200 and up to 3 months additional license suspension",
      ],
      tr: [
        "700$ para cezası ve 8 aya kadar ek lisans askıya alma",
        "500$ para cezası ve 6 aya kadar ek lisans askıya alma",
        "600$ para cezası ve 12 aya kadar ek lisans askıya alma",
        "200$ para cezası ve 3 aya kadar ek lisans askıya alma",
      ],
    },
  },

  //Question 11
  {
    numb: 11,
    question: {
      en: "What is the penalty for not telling the truth when applying for a license? ",
      tr: "Ehliyet başvurusunda bulunurken doğruyu söylememenin cezası nedir?",
    },
    answer: 0,
    options: {
      en: [
         "No less than a $200 fine and up to 6 months imprisonment",
      "No less than a $400 fine and up to 8 months imprisonment",
      "No less than a $900 fine and up to 3 months imprisonment",
      "No less than a $800 fine and up to 6 months imprisonment",
      ],
      tr: [
        "En az 200 $ para cezası ve 6 aya kadar hapis cezası",
        "En az 400 $ para cezası ve 8 aya kadar hapis cezası",
        "En az 900 $ para cezası ve 3 aya kadar hapis cezası",
        "En az 800 $ para cezası ve 6 aya kadar hapis cezası",
      ],
    },
  },
  
  //Question 12
  {
    numb: 12,
    question: {
      en: "Up to 3 points may be subtracted from your record if you receive no moving violations for how long? ",
      tr: "Ne kadar süre hareket ihlali almazsanız rekorunuzdan 3 puan düşebilir?",
    },
    answer: 1,
    options: {
      en: [
      "3 Year",
      "1 Year",
      "5 Year",
      "2 Year",
      ],
      tr: [
        "(3 Yil)",
        "(1 Yil)",
        "(5 Yil)",
        "(2 Yil)",
      ],
    },
  },

 //Question 13
 {
    numb: 13,
    question: {
      en: "What is the penalty for refusing the breath test? ",
      tr: "Nefes testini reddetmenin cezası nedir?",
    },
    answer: 0,
    options: {
      en: [
      "6 months suspension (first offense)",
      "8 months suspension (first offense)",
      "4 months suspension (first offense)",
      "2 months suspension (first offense)",
      ],
      tr: [
        "6 ay uzaklaştırma (ilk suç)",
        "8 ay uzaklaştırma (ilk suç)",
        "4 ay uzaklaştırma (ilk suç)",
        "2 ay uzaklaştırma (ilk suç)",
      ],
    },
  },
  
   //Question 14
   {
    numb: 14,
    question: {
      en: "Who is responsible if a student commits a traffic offense?",
      tr: "Öğrenci trafik suçu işlerse sorumlu kimdir?",
    },
    answer: 2,
    options: {
      en: [
      "instructor ",
      "Student ",
      "Both the student and the accompanying instructor or licensed driver",
      "Parents ",
      ],
      tr: [
        "Egitmen",
        "Ogrenci",
        "Hem öğrenci hem de beraberindeki eğitmen veya lisanslı sürücü",
        "Veliler",
      ],
    },
  },

   //Question 15
   {
    numb: 15,
    question: {
      en: "Who is responsible if a student commits a traffic offense?",
      tr: "Öğrenci trafik suçu işlerse sorumlu kimdir?",
    },
    answer: 1,
    options: {
      en: [
      "The Right Lane ",
      "The lane nearest the center in the direction you are heading",
      "The Left Lane ",
      "It doesn't matter ",
      ],
      tr: [
        "Sag Serit",
        "Gittiğiniz yönde merkeze en yakın şerit",
        "Sol Serit",
        "Fark Etmez",
      ],
    },
  },

   //Question 16
 {
    numb: 16,
    question: {
      en: "Driving can be affected by: ?",
      tr: "Sürüş, aşağıdakilerden etkilenebilir: ?",
    },
    answer: 3,
    options: {
      en: [
      "prescription drugs",
      "illegal drugs",
      "no drugs, only alcohol",
      "both a and b  ",
      ],
      tr: [
        "reçeteli ilaçlar",
        "yasadışı ilaçlar",
        "Uyuşturucu yok, sadece alkol",
        "hem a hem de b",
      ],
    },
  },

   //Question 17
  {
    numb: 17,
    question: {
      en: "If you turn the steering wheel to the right while in reverse, the rear of the car will",
      tr: "Direksiyon simidini geri viteste iken saga çevirirseniz, aracın arkası.",
    },
    answer: 0,
    options: {
      en: [
      
      "go to the right",
      "go to the left",
      "go straight",
      "none of the above",
      ],
      tr: [
        "Sağa gider",
        "Sola gider",
        "düz gider",
        "Yukarıdakilerin hiçbiri",
      ],
    },
  },

  //Question 18
  {
    numb: 18,
    question: {
      en: "The purpose of a deceleration lane is:",
      tr: "Bir yavaşlama şeridinin amacı şöyledir:",
    },
    answer: 2,
    options: {
      en: [
      "to allow the driver to slow down when approaching a highway",
      "to allow the driver to speed up when approaching a highway",
      "to allow the driver to slow down when leaving a highway/expressway",
      "all of the above",
      ],
      tr: [
        "otobana yaklaşırken sürücünün yavaşlamasına izin vermek",
        "sürücünün bir karayoluna yaklaşırken hız kazanmasına izin vermek",
        "bir otoyol / otoyoldan ayrılırken sürücünün yavaşlamasına izin vermek",
        "Yukarıdakilerin hepsi",
      ],
    },
  },

  //Question 19
  {
    numb: 19,
    question: {
      en: "If the brakes fail to stop your car, you should:",
      tr: "Frenler aracınızı durdurmazsa, şunları yapmalısınız:",
    },
    answer: 1,
    options: {
      en: [
      "put the car into park",
      "turn the car off",
      "turn quickly off the road way",
      "put your car into a lower gear and pump your brakes",
      ],
      tr: [
        "arabayı parka koy",
        "arabayı kapat",
        "yol yolundan hızlıca dön",
        "arabanızı daha düşük bir vitese koyun ve frenlerinizi pompalayın",
      ],
    },
  },

  //Question 20
  {
    numb: 20,
    question: {
      en: "You have to notify MVC of a name change within",
      tr: "MVC'ye bir isim değişikliği bildirmek zorundasınız.",
    },
    answer: 2,
    options: {
      en: [
      "60 days",
      "one week",
      "two weeks",
      "none of the above",
      ],
      tr: [
        "60 gün",
        "bir hafta",
        "iki hafta",
        "Yukarıdakilerin hiçbiri",
      ],
    },
  },
  //Question 21
  {
    numb: 21,
    question: {
      en: "The fastest way to get sober is :",
      tr: "Ayıkmak için en hızlı yol şu şekildedir:",
    },
    answer: 3,
    options: {
      en: [
      "eat a large meal",
      "drink a lot of water",
      "drink coffee",
      "time",
      ],
      tr: [
        "büyük bir yemek ye",
        "Çok su iç",
        "kahve içmek",
        "zaman",
      ],
    },
  },
 //Question 22
  {
    numb: 22,
    question: {
      en: "It is the law to yield",
      tr: "Yol Verilmesi yasadır.",
    },
    answer: 3,
    options: {
      en: [
      "when pedestrians are in a cross walk",
      "when behind a vehicle yielding to pedestrians",
      "when there is a stop sign",
      "all of the above",
      ],
      tr: [
        "yayalar yaya olarak yürürken",
        "yayalara yol açan bir araç",
        "Bir dur işareti olduğunda",
        "Yukarıdakilerin hepsi",
      ],
    },
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
