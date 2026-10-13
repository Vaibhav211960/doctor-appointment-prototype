import { createFileRoute, Link } from '@tanstack/react-router';
import { PageHeading } from '@/components/ClinicShell';
import { SpecialtyCards } from '@/components/ClinicCards';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/clinic-demo';
export const Route=createFileRoute('/services')({head:()=>pageHead('Our specialties & fees','Browse six CarePlus Clinic specialties for families in Surat, with illustrative consultation fees and treatment options.','/services'),component:ServicesPage});
function ServicesPage(){return <><PageHeading eyebrow="COMPLETE CARE, CLOSE TO HOME" title="The right care for every need." description="From a routine health check to specialist advice, a healthier family starts here."/><section className="section"><div className="shell"><SpecialtyCards prices/><div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8"><div><h2 className="text-xl font-bold">Simple fees. No surprises.</h2><p className="mt-2 text-sm text-muted-foreground">First general consultation ₹500 · Follow-up ₹300 · Demo prices</p></div><Button asChild><Link to="/book">Book a consultation</Link></Button></div></div></section></>;}
