// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
// export default function Home() {
//   const [activeSSS, setActiveSSS] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   interface FAQ {
//     question: string;
//     answer: string;
//     type: string;
//   }

//   const toggleFAQ = (index: number) => {
//     if (activeSSS === index) {
//       setActiveSSS(null);
//     } else {
//       setActiveSSS(index);
//     }
//   };

//   const selectCategory = (category: string) => {
//     setSelectedCategory(category);
//     setActiveSSS(null); // %%%%
//   };

//   const SSS: FAQ[] = [
//     {
//       question: 'isbul.net’e üye olmak ücretli mi?',
//       answer: 'isbul.net’e üye olmak tamamen ücretsizdir.',
//       type: 'Genel',
//     },
//     {
//       question: 'isbul.net’e üye olmadan uygulamayı kullanabilir miyim?',
//       answer:
//         'Uygulamanın bütün özelliklerini kullanmak için üyelik yapmanız gerekir. Ama üye olmadanda uygulamamızı kullanabilirsiniz.',
//       type: 'Genel',
//     },
//     {
//       question: 'Hesabımı siler ve üyeliğimi iptal edersem ne olur?',
//       answer:
//         'Hesabınızı istediğiniz zaman silebilir ve üyeliğinizi iptal edebilirsiniz. Sonrasında dilediğiniz zaman yeniden üye olmanız gerekir.',
//       type: 'Genel',
//     },

//     //----------------------------------------------

//     {
//       question: 'Ücretsiz ilan hakkı ne zaman tanımlanır ? ',
//       answer:
//         'Kurumsal üyelerimize her ay 1 adet ücretsiz ilan hakkı tanımlanır. ',
//       type: 'Kurumsal',
//     },
//     {
//       question: 'isbul.net’e üye olmak ücretli mi?',
//       answer: 'isbul.net’e üye olmak tamamen ücretsizdir.',
//       type: 'Kurumsal',
//     },
//     {
//       question: 'İlanım yayınlanmadı ne yapmam gerekiyor?',
//       answer:
//         'İlanlar editörlerimiz tarafından kontrol edildikten sonra onaylanır. İçerik ile ilgili sakıncalı bir durum varsa sizlere mail yoluyla bilgi verilir.',
//       type: 'Kurumsal',
//     },

//     // --------------------------------------------------

//     {
//       question: 'isbul.net’e üye olmak ücretli mi?',
//       answer: 'isbul.net’e üye olmak tamamen ücretsizdir.',
//       type: 'Bireysel',
//     },
//     {
//       question: 'isbul.net’e üye olmak ücretli mi?',
//       answer: 'isbul.net’e üye olmak tamamen ücretsizdir.',
//       type: 'Bireysel',
//     },
//     {
//       question: 'isbul.net’e üye olmak ücretli mi?',
//       answer: 'isbul.net’e üye olmak tamamen ücretsizdir.',
//       type: 'Bireysel',
//     },
//     //---------------------------------------------------

//     {
//       question: 'Uygulamayı nasıl indirebilirim?',
//       answer:
//         'Uygulamamızı Google Play Store veya App Storedan kolayca indirebilirsiniz.',
//       type: 'Mobil',
//     },
//     {
//       question: 'Uygulamadan özgeçmiş oluşturabilir miyim?',
//       answer:
//         'Evet, isbul.net uygulamamızdan da kolaylıkla özgeçmiş oluşturabilir ve başvuru gerçekleştirebilirsiniz.',
//       type: 'Mobil',
//     },
//     {
//       question: 'Uygulamayı kullanarak ilan verebilir miyim?',
//       answer: 'Evet, uygulamamız ile kolayca ilan oluşturabilirsiniz..',
//       type: 'Mobil',
//     },
//   ];

//   const filteredSSS = selectedCategory
//     ? SSS.filter((faq) => faq.type === selectedCategory)
//     : [];

//   return (
//     <div className='container min-h-screen w-full flex items-center justify-center'>
//       <div className='row'>
//         <div className='col-12'>
//           <div className='faq-help-wrapper'>
//             <div className='row flex justify-between items-center'>
//               <div className='col-3 p-2 '>
//                 <h3 className='mt-6'>YARDIM</h3>
//                 <ul className='mt-24'>
//                   <li className='my-2'>
//                     <button
//                       onClick={() => selectCategory('Genel')}
//                       className={
//                         selectedCategory === 'Genel'
//                           ? 'bg-blue-500 text-white rounded p-2'
//                           : 'p-2'
//                       }
//                     >
//                       Genel
//                     </button>
//                   </li>
//                   <li className='my-2'>
//                     <button
//                       className={
//                         selectedCategory === 'Kurumsal'
//                           ? 'bg-blue-500 text-white rounded p-2'
//                           : 'p-2'
//                       }
//                       onClick={() => selectCategory('Kurumsal')}
//                     >
//                       Kurumsal
//                     </button>
//                   </li>
//                   <li className='my-2'>
//                     <button
//                       className={
//                         selectedCategory === 'Bireysel'
//                           ? 'bg-blue-500 text-white rounded p-2'
//                           : 'p-2'
//                       }
//                       onClick={() => selectCategory('Bireysel')}
//                     >
//                       Bireysel
//                     </button>
//                   </li>
//                   <li className='my-2'>
//                     <button
//                       className={
//                         selectedCategory === 'Mobil'
//                           ? 'bg-blue-500 text-white rounded p-2'
//                           : 'p-2'
//                       }
//                       onClick={() => selectCategory('Mobil')}
//                     >
//                       Mobil
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               <div className='col-9 ml-5'>
//                 {filteredSSS.map((faq, index) => {
//                   return (
//                     <div key={index} className=''>
//                       <button
//                         className='text-left w-full border-b border-gray-300 py-2 focus:outline-none'
//                         onClick={() => toggleFAQ(index)}
//                       >
//                         {faq.question}{' '}
//                       </button>
//                       {activeSSS === index && (
//                         <div
//                           className={
//                             activeSSS === index
//                               ? 'transition-all duration-300 ease-in-out opacity-100 p-5 bg-gray-100'
//                               : 'transition-all duration-300 ease-in-out opacity-0 p-5 bg-gray-100 h-0 overflow-hidden'
//                           }
//                         >
//                           {faq.answer}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/ssss.tsx
'use client';
import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

type FAQ = {
  question: string;
  answer: string;
};

type FAQCategory = {
  category: string;
  faqs: FAQ[];
};

const faqs: FAQCategory[] = [
  {
    category: 'Genel',
    faqs: [
      {
        question: 'isbul.net’e üye olmak ücretli mi?',
        answer: 'isbul.net’e üye olmak tamamen ücretsizdir. ',
      },
      {
        question: 'isbul.net’e üye olmadan uygulamayı kullanabilir miyim?',
        answer:
          'Uygulamanın bütün özelliklerini kullanmak için üyelik yapmanız gerekir. Ama üye olmadanda uygulamamızı kullanabilirsiniz.',
      },
      {
        question: 'Hesabımı siler ve üyeliğimi iptal edersem ne olur?',
        answer:
          'Hesabınızı istediğiniz zaman silebilir ve üyeliğinizi iptal edebilirsiniz. Sonrasında dilediğiniz zaman yeniden üye olmanız gerekir.',
      },
      {
        question: 'Mail adresimi ve şifremi değiştirebilir miyim?',
        answer:
          'Evet mail adresinizi ve şifrenizi hesabınızın ayarlar sayfasından değiştirebilirsiniz. ',
      },
      {
        question:
          'isbul.net’ten herhangi bir e-posta almak istemiyorum ne yapamam gerekiyor ?',
        answer:
          'Hesap ayarlarım veya ayarlarım sayfasından görmek istemediğiniz bildirimleri kapatabilirsiniz.',
      },
      {
        question: 'Telefon doğrulaması neden gereklidir?',
        answer:
          'İşverenlerin veya iş arayan adayların size güvenli bir şekilde ulaşabilmesi için telefon doğrulaması gereklidir.',
      },
      {
        question: 'Şifre sıfırlama maili gelmiyor ne yapmam gerekir?',
        answer:
          'Spam kutunuzu kontrol edebilir veya yardım formumuzu doldurarak bize ulaşabilirsiniz. ',
      },
      {
        question: 'isbul.net güvenilir mi ?',
        answer:
          'Sitemizde yazılımsal güvenlik kurallarına uyulmaktadir. KVKK kuralları gereği tüm bilgileriniz saklanmaktadır. ',
      },
    ],
  },
  {
    category: 'Kurumsal',
    faqs: [
      {
        question: 'isbul.net kurumsal üyelik ücretli mi?',
        answer:
          'Sitemizden ücretsiz şekilde kurumsal üyelik oluşturabilirsiniz. ',
      },
      {
        question: 'Ücretsiz ilan hakkı ne zaman tanımlanır ?',
        answer:
          'Kurumsal üyelerimize her ay 1 adet ücretsiz ilan hakkı tanımlanır. ',
      },
      {
        question: 'İlanım yayınlanmadı ne yapmam gerekiyor?',
        answer:
          'İlanlar editörlerimiz tarafından kontrol edildikten sonra onaylanır. İçerik ile ilgili sakıncalı bir durum varsa sizlere mail yoluyla bilgi verilir.',
      },
      {
        question: 'İlanlar neden onay işleminden geçiyor?',
        answer:
          'İlanların güvenilirliğini ve ilandaki hataları tespit edebilmemiz için bütün ilanlar editörlerimizinonayından geçmektedir.',
      },
      {
        question: 'İlan nasıl verilir?',
        answer:
          'isbul.net’te ilan vermek ücretsizdir. Hemen kurumsal isbul.net sayfasına girip üyelikişlemlerinizi tamamladıktan sonra, “İlan Yayınla” başlığı adı altında dilediğiniz ilanı ücretsiz olarak yayınlayabilirsiniz. İlanınızı yayına alırken, İlan Bilgilerini, ve tercihen BaşvuruSoruları alanlarını doldurmanız yeterlidir.',
      },
      {
        question: 'İlan yayınlanma süresi ne kadardır?',
        answer:
          'İlanınızın yayında kalma süresi 30 gündür. İstediğiniz takdirde ilanınızı daha erken pasif hale getirebilirsiniz.',
      },
      {
        question: 'Engelli iş ilanı nasıl verilir?',
        answer:
          'Firma anasayfasında yer alan ilan veya ilanlarınızın tarihini tek tek sağ taraflarında bulunantakvim işaretine tıklayarak iki günde bir güncelleyebilirsiniz. Ayrıca birden fazla ilanınızıntarihini güncellemek istiyorsanız ilan listenizin en altında bulunan “Tüm İlan TarihleriniGüncelle” sekmesine tıklayarak gerçekleştirebilirsiniz.',
      },
      {
        question: 'Şirket bilgileri nasıl gizlenir?',
        answer:
          'İlan yayınlama “İlan Bilgileri” aşamasında, “Şirket Adı ve Bilgilerini Gizle” kutucuğunuişaretleyebilirsiniz. Bu seçeneği tercih ettiğinizde ilanınızda firma ünvanınız ve logonuz yeralmayacaktır.',
      },
      {
        question: 'Şifremi unuttum?',
        answer:
          'Şifre işlemleriniz için, işveren giriş sayfasında bulunan “Şifremi Unuttum” butonunatıklayarak yeni şifrenizi talep edebilirsiniz. Mailinize gelen e-postada yer alan "ŞifremiSıfırla" butonuna tıklayarak açılan sayfada yeni şifrenizi hemen belirleyebilirsiniz.',
      },
      {
        question: 'Firma telefon ve mail doğrulaması nasıl yapılır?',
        answer:
          'isbul.net adresinden “Üyelik Formu” alanını eksiksiz bir şekilde doldurup, üyeliğinizigerçekleştirdikten sonra hesap ayarlarım kısmından, cep telefonunuza ve mail adresinize doğrulama kodu gönderip doğrulama yapabilirsiniz.',
      },
    ],
  },
  {
    category: 'Bireysel',
    faqs: [
      {
        question: 'Özgeçmiş ne demek?',
        answer:
          'Özgeçmiş, bir kişinin eğitim, iş deneyimi, beceriler, ilgi alanları ve kişisel bilgiler gibi önemli bilgilerini içeren bir belge veya dokümandır. Bu belge, genellikle bir iş başvurusu veya akademik başvuru sırasında sunulur ve kişinin yeteneklerini, deneyimlerini ve niteliklerini potansiyel işverenlere veya eğitim kurumlarına tanıtmak amacıyla kullanılır.',
      },
      {
        question: 'İşverenler özgeçmiş adını görebilir mi?',
        answer:
          'Hayır, işverenler gönderdiğiniz özgeçmişlere verdiğiniz isimleri göremezler. ',
      },
      {
        question: 'Kaç tane özgeçmiş oluşturabilirim?',
        answer:
          'Türkçe ve ingilizce olmak üzere sitemizden iki adet cv oluşturabilirsiniz. ',
      },
      {
        question: 'Özgeçmişim olmadan iş başvurusu yapabilir miyim?',
        answer:
          'Sitemizden özgeçmiş olmadan başvuru yapamazsınız. Başvuru yapmadan önce ücretsiz ve hızlı bir şekilde özgeçmiş oluşturabilirsiniz.',
      },
      {
        question: 'Önyazı nedir?',
        answer:
          'İş başvurusu veya başka bir türdeki başvurunun ekinde sunulan yazılı bir mektuptur. Özgeçmişin yanında sunulan bu mektup, başvuru sahibinin işverene veya ilgili kuruluşa daha detaylı bir şekilde kendini tanıttığı ve neden bu pozisyon veya fırsat için uygun olduğunu açıkladığı bir belgedir.',
      },
      {
        question: 'Cv nasıl indiriliyor?',
        answer:
          'Cv indirmek için özgeçmişlerim sayfasındaki işlemler menüsünden cv indir seçeneğinetıklayıp cvnizi kolayca indirebilirsiniz.',
      },
      {
        question: 'Referans eklemek neden önemlidir ?',
        answer:
          'Özgeçmişe referans eklemek, iş başvurularında veya diğer profesyonel fırsatlarda başvuru sahibinin yeteneklerini ve geçmiş performansını doğrulamak amacıyla önemlidir. Referanslar, başvuru sahibinin daha önceki işverenleri, yöneticileri veya akademik danışmanları gibi kişilerden gelen olumlu geri bildirimleri içerebilir.',
      },
      {
        question: 'Stajlarımı özgeçmişime nasıl ekleyebilirim?',
        answer:
          'İş deneyimleri bölümden ekleyip pozisyonlar seçenekleri arasında stajyer pozisoynunu seçebilirsiniz.',
      },
      {
        question: 'Engellilere yönelik ilanlara nasıl ulaşabilirim ?',
        answer:
          'Filtreleme seçeneklerimizden engelli ilanı filtreleme seçeneğine gelip “sadece engelli ilanlarını göster” filresini seçebilirsiniz.',
      },
      {
        question: 'Geçersiz ilanları nereye bildirebilirim?',
        answer:
          'İlanın içindeki şikayet et butonundan ekibimiz ile şikayetinizi ve sebebini paylaşabilirsiniz. ',
      },
      {
        question: 'Şikayet ettiğim firma kim olduğumu bilecek mi?',
        answer:
          'Şikayet ettiğiniz ilanlar veya firmalarda işveren ile adınız paylaşılmaz.',
      },
      {
        question: 'Neden özgeçmiş tarihimi güncellemeliyim?',
        answer:
          'Özgeçmiş tarihini sıkça güncellemeniz sitemizin aday veri tabanında pozisyon, yaş, aranılanözellikler çerçevesinde arama yapan firmaların listelerinde yer almanızı sağlayacaktır. Busayede siz başvurmasanız bile firmalar size ulaşabilecektir. Firmalar genel olarak aday veritabanında arama yaparken yakın tarihlerde güncellenmiş özgeçmişlere erişmek isterler.Sıkça özgeçmişinizi güncelleyerek iş bulma şansınızı daha da artırabilirsiniz.',
      },

      {
        question: 'İş ilanına başvuru nasıl yapılır?',
        answer:
          'İş ilanları sekmesinden yeni ve güncel ilanların sıralamasına ulaşabilirsiniz. İlanların üzerinetıklayarak ilan detaylarına gidebilirsiniz. İlana başvurmak için ilanın yanında bulunan “Başvur” butonuna tıklamanız yeterlidir.',
      },
    ],
  },
  {
    category: 'Mobil',
    faqs: [
      {
        question: 'Uygulamayı nasıl indirebilirim?',
        answer:
          'Uygulamamızı Google Play Store veya App Storedan kolayca indirebilirsiniz.',
      },
      {
        question: 'Uygulamadan özgeçmiş oluşturabilir miyim?',
        answer:
          'Evet, isbul.net uygulamamızdan da kolaylıkla özgeçmiş oluşturabilir ve başvuru gerçekleştirebilirsiniz.',
      },
      {
        question: 'Uygulamayı kullanarak ilan verebilir miyim?',
        answer: 'Evet, uygulamamız ile kolayca ilan oluşturabilirsiniz. ',
      },
      {
        question: 'Uygulama ücretsiz mi?',
        answer: 'Uygulamamız tamamen ücretsizdir.',
      },
    ],
  },
];

const SSSS = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Genel');
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const togglePopup = (question: string) => {
    if (selectedQuestion === question) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(question);
    }
  };

  return (
    <div className='min-h-screen bg-[#f2f2f2] mx-auto w-auto px-12 flex justify-center items-center poppins'>
      <div className='container mx-auto flex flex-col md:flex-row'>
        <div className='w-full md:w-1/4'>
          <h3 className='text-2xl font-bold mb-4 text-center'>YARDIM</h3>
          <div className=''>
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`relative text-base font-medium w-11/12 h-full border bg-white border-gray-600 px-4 py-5 focus:outline-none ${
                  selectedCategory === category.category
                    ? 'bg-blue-800 text-white'
                    : 'hover:bg-gray-200 text-black'
                }`}
              >
                <span className='inline-block'>{category.category}</span>
                {selectedCategory === category.category && (
                  <span
                    className='absolute right-4 top-1/2 transform -translate-y-1/2'
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      borderLeft: '6px solid currentColor',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className='w-full md:w-3/4 mt-8 p-4'>
          <div className='space-y-4'>
            {faqs
              .find((category) => category.category === selectedCategory)
              ?.faqs.map((faq, index) => (
                <div key={index} className=' bg-white py-5 px-6'>
                  <div
                    className='text-lg font-bold cursor-pointer mb-2 flex justify-between'
                    onClick={() => togglePopup(faq.question)}
                  >
                    <span className='text-[#2253af] m-0 text-lg font-medium'>
                      {faq.question}
                    </span>
                    {selectedQuestion === faq.question ? (
                      <HiOutlineChevronUp />
                    ) : (
                      <HiOutlineChevronDown />
                    )}
                  </div>
                  <div
                    className={`bg-transparent ${
                      selectedQuestion === faq.question ? 'block' : 'hidden'
                    }`}
                  >
                    <p className='text-sm leading-5 text-[#63636c] py-5 px-7'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSSS;
