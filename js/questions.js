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
    question:
      "Who is responsible if a student commits a traffic offense?(15-Öğrenci trafik suçu işlerse sorumlu kimdir?)",
    answer:
      "Both the student and the accompanying instructor or licensed driver(Hem öğrenci hem de beraberindeki eğitmen veya lisanslı sürücü)",
    options: [
      "instructor (Egitmen)",
      "Student (Ogrenci)",
      "Both the student and the accompanying instructor or licensed driver(Hem öğrenci hem de beraberindeki eğitmen veya lisanslı sürücü)",
      "Parents (Veliler)",
    ],
  },

   //Question 15
  {
    numb: 15,
    question:
      "What is the proper lane to turn into when making a left turn? (Sola dönüş yapılırken gidilecek doğru şerit nedir?)",
    answer:
      "The lane nearest the center in the direction you are heading(Gittiğiniz yönde merkeze en yakın şerit)",
    options: [
      "The Right Lane (Sag Serit)",
      "The lane nearest the center in the direction you are heading(Gittiğiniz yönde merkeze en yakın şerit)",
      "The Left Lane ( Sol Serit)",
      "It doesn't matter (Fark Etmez)",
    ],
  },
  
   //Question 16
  {
    numb: 16,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 17,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 18,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 19,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 20,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 21,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 13,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
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
