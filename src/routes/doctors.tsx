import { createFileRoute } from '@tanstack/react-router';
import { PageHeading } from '@/components/ClinicShell';
import { DoctorCards } from '@/components/ClinicCards';
import { pageHead } from '@/lib/clinic-demo';
export const Route=createFileRoute('/doctors')({head:()=>pageHead('Meet our doctors','Explore sample CarePlus doctor profiles in Surat, including specialties, languages, qualifications and consultation timings.','/doctors'),component:DoctorsPage});
function DoctorsPage(){return <><PageHeading eyebrow="EXPERTISE WITH EMPATHY" title="People behind your care." description="Specialists who listen, explain and care. Meet the team in our sample Surat clinic."/><section className="section"><div className="shell"><DoctorCards/><p className="mt-6 text-xs text-muted-foreground">All doctor profiles and qualifications shown are illustrative, not verified clinical listings.</p></div></section></>;}
