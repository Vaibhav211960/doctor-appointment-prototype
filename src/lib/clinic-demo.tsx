import { createContext, useContext, useState, type ReactNode } from 'react';
import hero from '@/assets/hero-doctor.jpg';
import portrait from '@/assets/doctor-portrait.jpg';
export const clinic = { name:'CarePlus Clinic', address:'Ghod Dod Road, Surat 395007', hours:'Mon–Sat, 9:00 AM–8:00 PM', fee:500, followUp:300 };
export const specialties = [
 {name:'General Medicine', description:'Everyday wellness, diabetes, thyroid & preventive care.', price:500, icon:'medicine'},
 {name:'Dental Care', description:'Healthy teeth, brighter smiles & gentle dental treatments.', price:500, icon:'dental'},
 {name:'Skin & Hair', description:'Personalised care for healthy skin and confident you.', price:600, icon:'skin'},
 {name:'Physiotherapy', description:'Move better with pain relief, rehabilitation & recovery.', price:400, icon:'physio'},
 {name:'Child Care', description:'Growing up healthy, from newborn care to vaccinations.', price:500, icon:'child'},
 {name:'Diagnostics & Lab', description:'Reliable tests, health packages & timely reports.', price:300, icon:'lab'},
];
export const doctors = [
 {id:'meera', name:'Dr. Meera Shah', degree:'MBBS, MD · General Physician', specialty:'General Medicine', experience:'12 years', image:hero, languages:'English, ગુજરાતી, हिंदी', hours:'9:00 AM–1:00 PM'},
 {id:'verma', name:'Dr. A. Verma', degree:'BDS, MDS · Dental Surgeon', specialty:'Dental Care', experience:'15 years', image:portrait, languages:'English, ગુજરાતી, हिंदी', hours:'10:00 AM–2:00 PM'},
 {id:'meera-skin', name:'Dr. Nisha Patel', degree:'MBBS, MD · Dermatologist', specialty:'Skin & Hair', experience:'8 years', image:hero, languages:'English, ગુજરાતી', hours:'4:00 PM–8:00 PM'},
] as const;
export type Booking = { ticket:string; patient:string; phone:string; specialty:string; doctor:string; date:string; time:string; reason:string; status:string };
export function localDate(offset=0) { const d=new Date(); d.setDate(d.getDate()+offset); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
const initialBookings:Booking[] = [
 {ticket:'CP-1041',patient:'Riya Desai',phone:'Demo patient',specialty:'General Medicine',doctor:'Dr. Meera Shah',date:localDate(),time:'10:00 AM',reason:'Routine check-up',status:'Confirmed'},
 {ticket:'CP-1040',patient:'Harsh Patel',phone:'Demo patient',specialty:'Dental Care',doctor:'Dr. A. Verma',date:localDate(),time:'11:30 AM',reason:'Dental consultation',status:'Pending'},
 {ticket:'CP-1039',patient:'Aarav Shah',phone:'Demo patient',specialty:'Skin & Hair',doctor:'Dr. Nisha Patel',date:localDate(1),time:'04:30 PM',reason:'Skin consultation',status:'Confirmed'},
];
export type Language = 'en'|'gu'|'hi';
export const copy = {
 en:{greeting:'Namaste, Surat',headline:'Your family’s health.',highlight:'Our everyday priority.',intro:'Compassionate doctors. Thoughtful care. All your family’s healthcare needs, right here in Surat.',book:'Book an appointment',doctors:'Meet our doctors',specialties:'Care for every generation',navDoctors:'Doctors',navServices:'Services',navAbout:'About us',navTips:'Health tips',navContact:'Contact'},
 gu:{greeting:'નમસ્તે, સુરત',headline:'તમારા પરિવારનું સ્વાસ્થ્ય.',highlight:'અમારી રોજની પ્રાથમિકતા.',intro:'અનુભવી ડૉક્ટરો અને સંવેદનશીલ સંભાળ. સુરતમાં તમારા સમગ્ર પરિવાર માટે આરોગ્ય સેવાઓ.',book:'મુલાકાત બુક કરો',doctors:'અમારા ડૉક્ટરોને મળો',specialties:'દરેક પેઢી માટે સંભાળ',navDoctors:'ડૉક્ટરો',navServices:'સેવાઓ',navAbout:'અમારા વિશે',navTips:'સ્વાસ્થ્ય સૂચનો',navContact:'સંપર્ક'},
 hi:{greeting:'नमस्ते, सूरत',headline:'आपके परिवार का स्वास्थ्य.',highlight:'हमारी हर दिन की प्राथमिकता.',intro:'अनुभवी डॉक्टर और संवेदनशील देखभाल। सूरत में आपके पूरे परिवार की स्वास्थ्य सेवाएँ।',book:'अपॉइंटमेंट बुक करें',doctors:'हमारे डॉक्टरों से मिलें',specialties:'हर पीढ़ी के लिए देखभाल',navDoctors:'डॉक्टर',navServices:'सेवाएँ',navAbout:'हमारे बारे में',navTips:'स्वास्थ्य सुझाव',navContact:'संपर्क'},
};
const DemoContext = createContext<{language:Language;setLanguage:(l:Language)=>void;bookings:Booking[];addBooking:(b:Omit<Booking,'ticket'|'status'>)=>Booking;updateStatus:(ticket:string,status:string)=>void}|null>(null);
export function DemoProvider({children}:{children:ReactNode}) { const [language,setLanguage]=useState<Language>('en'); const [bookings,setBookings]=useState(initialBookings); function addBooking(b:Omit<Booking,'ticket'|'status'>) { const booking={...b,ticket:`CP-${1042+bookings.filter(x=>Number(x.ticket.slice(3))>=1042).length}`,status:'Pending'}; setBookings(prev=>[booking,...prev]); return booking; } return <DemoContext.Provider value={{language,setLanguage,bookings,addBooking,updateStatus:(ticket,status)=>setBookings(prev=>prev.map(b=>b.ticket===ticket?{...b,status}:b))}}>{children}</DemoContext.Provider>; }
export function useDemo() { const context=useContext(DemoContext); if(!context) throw new Error('Clinic context is missing'); return context; }
export function pageHead(title:string,description:string,path:string) { return {meta:[{title:`${title} — CarePlus Clinic, Surat`},{name:'description',content:description},{property:'og:title',content:`${title} — CarePlus Clinic, Surat`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:path}]}; }
