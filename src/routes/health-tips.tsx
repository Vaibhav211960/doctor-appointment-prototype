import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/ClinicShell';
import { pageHead } from '@/lib/clinic-demo';
import { articles } from '@/lib/health-articles';
import patient from '@/assets/patient-smile.jpg';
import interior from '@/assets/clinic-interior.jpg';
import hero from '@/assets/hero-doctor.jpg';
export const Route=createFileRoute('/health-tips')({head:()=>pageHead('Health tips for your family','Read sample CarePlus health articles on everyday wellness, dental health and skin care for families in Surat.','/health-tips'),component:HealthPage});
function HealthPage(){return <><PageHeading eyebrow="SMALL STEPS. HEALTHIER DAYS." title="A little knowledge. A lot of care." description="Everyday health reads for your whole family. General information, not personal medical advice."/><section className="section"><div className="shell grid gap-6 md:grid-cols-3">{articles.map((a,i)=><Link className="doctor-card" to="/articles/$slug" params={{slug:a.slug}} key={a.slug}><img className="h-52 w-full object-cover" src={[interior,patient,hero][i]||hero} alt={a.category}/><div className="p-6"><p className="eyebrow">{a.category}</p><h2 className="mt-4 text-xl font-bold leading-8">{a.title}</h2><p className="section-description">{a.description}</p><span className="mt-5 inline-flex items-center gap-2 text-xs text-primary">Read article <ArrowUpRight size={14}/></span></div></Link>)}</div></section></>;}
