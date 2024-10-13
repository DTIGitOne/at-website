'use client'
import LinkIcon from '@/svg/link';
import '../../../styles/background.css';
import '../../../styles/works.css';
import { openURLInNewWindow } from '@/constants/constants';
import Reveal from '@/components/animation/reveal';
import RevealAnimation from '@/components/animation/revealAnimation';
import WorkComponent from '@/components/workComponent';
import ScrollToTopButton from '@/components/goToTop';

const Works = () => {
    return (
        <div id="worksBackground">
            <div id='worksLayer'>
                <div className=' h-32'></div>
                <div className='eleBox'>
                    <div id='box1'>
                        <div>
                          <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: -110}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <h2 className='headingClass'>
                                Books
                             </h2>
                          </Reveal>
                          <Reveal dur={0.5} del={0.6} position={"relative"} height='auto' var1={{opacity: 0, x: -1500}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <div className='divLine2'></div>
                          </Reveal>
                        </div>
                        <div id='inner1'>
                            <ul className=' flex flex-col gap-9'>
                                <WorkComponent
                                 spanDetails='ISBN 978-9926-8718-1-9, ' 
                                 right={false} 
                                 urlText='COBISS.BH-ID 54724102' 
                                 urlLnk='https://plus.cobiss.net/cobiss/bh/bs/bib/nubbih/54724102' 
                                 firstLetter='T' 
                                 innerText=' aljanović,A.(2023). Suicidologija sociološki diskurs,
                                  Udruženje kriminalistika kriminologa i menadžera sigurnosti,Sarajevo.'
                                />
                                <WorkComponent
                                 spanDetails='978-99976-22-83-9, ' 
                                 right={false} 
                                 urlText='COBISS.RS-ID 139410433' 
                                 urlLnk='https://plus.cobiss.net/cobiss/rs/sr/bib/139410433' 
                                 firstLetter='A' 
                                 innerText=' džajlić-Dedović,A.,Simović,M,M.,Čekić,E.,Taljanović,A.(2023).Feministička
                                            viktimologija i psihologija, Evropski defendologija centar, Banja Luka.'
                                />
                                <WorkComponent
                                 spanDetails='COBISS.BH-ID 18215942, ' 
                                 right={false} 
                                 urlText='COBISS.RS-ID 139410433' 
                                 urlLnk='https://plus.cobiss.net/cobiss/bh/bs/bib/nubbih/18215942' 
                                 firstLetter='T' 
                                 innerText='aljanović, A. (2010). Žena u politici Bosne i Hercegovine, Autor, Sarajevo.'
                                />
                                <WorkComponent
                                 spanDetails='ISBN 978-9958-681-29-3, COBBIS.BH-ID 21801234' 
                                 right={false} 
                                 firstLetter='A' 
                                 innerText='džajlić Dedović,A.,Numanović,S.,Turković,S.,Hadžikadunić,A.,Klinčević,N.,
                                            Taljanović,A.,Karahasanović,S.,Brzac,J.(2015). Samoodbrana kao viktimološka mjera
                                            prevencije nasilja, Autori, Sarajevo.'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='eleBox'>
                <div id='papers1Box'>
                        <div>
                        <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: 110}} var2={{opacity: 1,x: 0}} width='100%'>
                        <h2 className='headingClass2'>
                            Scientific 
                            <br/>
                            Papers
                          </h2>
                        </Reveal>
                        <Reveal dur={0.5} del={0.6} position={"relative"} height='auto' var1={{opacity: 0, x: 1500}} var2={{opacity: 1,x: 0}} width='fit-content'>
                        <div className='divLine2'></div>
                          </Reveal>
                        </div>
                        <div id='papers'>
                            <ul className=' flex flex-col gap-9'>
                            <WorkComponent
                                 spanDetails='ISNN 2313-2272 (Print)' 
                                 right={true} 
                                 firstLetter='M' 
                                 innerText='ilošević Šošo,B., Taljanović,A.,(2023). Social-cultural features of the suicidal behaviour
                                            in Bosnia and Herzegovina, Peoples Friendship University of Russia ( RUDN University)
                                            Journal History, RUDN Journal of Sociology, Vol 23,No.4 839-850.'
                            />
                            <WorkComponent
                                 spanDetails='ISSN:2744-2403' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A. Smailhodžić,A. (2023). Zatvoreničko društvo u kontekstu ljudskih prava,
                                            Zaštita i sigurnost, Sarajevo, godina 3.,broj 1/2023.str. 116-126.'
                            />
                            <WorkComponent
                                 spanDetails='ISSN:2303-8462.' 
                                 right={true} 
                                 firstLetter='S' 
                                 innerText='mailhodžić,A.,Taljanović, A.(2022). Trgovina ljudima u Bosni i Hercegovini, Časopis
                                            Društvena i tehnička istraživanja, CEPS, Kiseljak, br.2/2022., str.47-63.'
                            />
                            <WorkComponent
                                 spanDetails='UDK: 37, ISSN:1857-923X(Printed)' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A. Smailhodžić,A.(2022). Savremena žena i politička karijera, International
                                            Journal, KNOWLEDGE, Institute of Knowledge management, Skoplje, Makedonia,Vol.
                                            55.No.1. str.129-135.'
                            />
                            <WorkComponent
                                 spanDetails='ISSN:2744-2403' 
                                 right={true} 
                                 firstLetter='S' 
                                 innerText='mailhodžić,A.,Taljanović,A.(2022). Uloga prikrivenog istražitelja i informatora, Zaštita i
                                            sigurnost, Sarajevo, godina 2.,broj 2/2022.str. 73-83.'
                            /> 
                            <WorkComponent
                                 spanDetails='UDK: 37, ISSN:1857-923X(Printed)' 
                                 right={true} 
                                 firstLetter='S' 
                                 innerText='mailhodžić.,A.,Taljanović,A.(2022). Razvoj terorizma u Bosni i Hercegovini,
                                            International Journal, KNOWLEDGE, Institute of Knowledge management, Skoplje,
                                            Makedonia,Vol. 53.No.1. str. 195-198.'
                            />
                            <WorkComponent
                                 spanDetails='UDK: 37, ISSN:1857-923X(Printed)' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović, A.,Smailhodžić,A.(2022). Socio-ekonomski status savremene porodice kao
                                            indikator društveno (ne)prihvatljivog ponašanja maloljetnika u Bosni i Hercegovini, 
                                            International Journal, KNOWLEDGE, Institute of Knowledge management, Skoplje,
                                            Makedonia,Vol. 52.No.1. str. 145-151.'
                            />
                            <WorkComponent
                                 spanDetails='UDK 316.346.32-053.6:179.7(497.6), ISSN 1840-1538' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A.(2020). Faktori suicidalnosti mladih u Bosni i Hercegovini, Sociološki
                                            godišnjak, Časopis Sociološkog društva Republike Srpske, br.16/2020., str.33-53.'
                            /> 
                            <WorkComponent
                                 spanDetails='ISSN:2303-8462' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A.(2020). Analiza i interpretacija podataka o stopi suicida u Bosni i
                                            Hercegovini u periodu od 2005. do 2015. godine, Časopis Društvena i tehnička istraživanja,
                                            CEPS, Kiseljak, br.2/2020., str.107-121.'
                            />   
                            <WorkComponent
                                 spanDetails='ISSN:2303-8462' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović, A.(2020). Sucidalno društveni mentalitet u post-ratnom društvu Bosne i
                                            Hercegovine, Časopis Društvena i tehnička istraživanja, CEPS, Kiseljak, br.1/2020., str. 26-38.'
                            />    
                            <WorkComponent
                                 spanDetails='UDK 316, ISSN 1840-1538' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A.(2019). Sociološki teorijski pristupi fenomenu suicida, 
                                            Sociološki godišnjak, Časopis sociološkog društva Republike Srpske,br. 14/2019.str.49-61.'
                            />    
                            <WorkComponent
                                 spanDetails='ISBN 2303-7768' 
                                 right={true} 
                                 firstLetter='T' 
                                 innerText='aljanović,A.(2015). Ženska prava u Bosni i Hercegovini, Sarajevo, Prva viktimološka
                                            konferencija u Bosni i Hercegovini, pod nazivom: Ambasadori mira u Bosni i Hercegovini,
                                            Zbornik radova, Vol:1, str. 205-212.'
                            />    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='eleBox'>
                <div id='box1'>
                        <div>
                          <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: -110}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <h2 className='headingClass3'>
                                Professional Papers
                             </h2>
                          </Reveal>
                          <Reveal dur={0.5} del={0.6} position={"relative"} height='auto' var1={{opacity: 0, x: -1500}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <div className='divLine2'></div>
                          </Reveal>
                        </div>
                        <div id='inner1'>
                            <ul className=' flex flex-col gap-9'>
                                <WorkComponent
                                 spanDetails='ISSN 2303-6389' 
                                 right={false} 
                                 firstLetter='T' 
                                 innerText=' aljanović, A.,Humačkić,T.(2021). Eutanazija sa sociološkog i pravnog aspekta, Visoka
                                             škola „Logos Centar“,Mostar, br.4./2021., str. 14-21.'
                                />
                                <WorkComponent
                                 spanDetails='ISSN 2303-6389' 
                                 right={false} 
                                 firstLetter='T' 
                                 innerText='aljanović, A.(2021). Socio-psihološka obilježja suicidalnih osoba, Visoka škola „Logos
                                            Centar“,Mostar, br. 4./2021.,str. 30-36.'
                                />
                                <WorkComponent
                                 spanDetails='ISSN:2303-8462' 
                                 right={false} 
                                 firstLetter='T' 
                                 innerText='aljanović,A.(2021). Zaštitni i rizični faktori suicida, Časopis Društvena i tehnička
                                            istraživanja, CEPS, Kiseljak, br.2/2021., str. 188-202.'
                                />
                                <WorkComponent
                                 spanDetails='ISSN:1857-6508, UDK:32-055.2 (497.6), 351.74-055.2 (497.6)' 
                                 right={false} 
                                 firstLetter='A' 
                                 innerText='džajlić-Dedović,A.,Sofradžija,H.,Taljanović,A.,Medžitovski,A.(2015). Women in politics
                                            and police in Bosnia and Herzegovina, International yearbook, Faculty of Security-Skopje,
                                            Skopje, 2/2015, str. 80-86.'
                                />
                                <WorkComponent
                                 spanDetails='ISBN 978-608-65653-8-1 COBISS.MK-ID 97384202.' 
                                 right={false} 
                                 firstLetter='S' 
                                 innerText='točanin,S.,Taljanović,A.,Kaljanac,A.(2014). Uloga i značaj kriminalistike u sprječavanju
                                            i suzbijanju zločina, Internacional journal Knowledge, Institute of Knowledge
                                            management,Skoplje, Makedonia, Zbornik radova:Vol: 4, str. 333-340.'
                                />
                                <WorkComponent
                                 spanDetails='ISBN 978–99938–43–31–3, UDK 323.285: 351.74/75' 
                                 right={false} 
                                 firstLetter='E' 
                                 innerText='mkić,H.,Taljanović,A.,Stevanović,D.(2011). Policijsko informisanje javnosti u slučaju
                                            terorističkog djela, Zbornik radova Međunarodne naučnostručne konferencije pod nazivom:
                                            Suprostavljanje terorizmu-međunarodni standardi i pravna regulativa, Visoka škola
                                            unutrašnjih poslova, Banja Luka, str. 687-699.'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='eleBox'>
                <div id='papers1Box'>
                        <div>
                        <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: 110}} var2={{opacity: 1,x: 0}} width='100%'>
                        <h2 className='headingClass4'>
                            Scientific Research <span className=' font-extralight'>&</span>
                            <br/>
                            Professional Projects
                          </h2>
                        </Reveal>
                        <Reveal dur={0.5} del={0.6} position={"relative"} height='auto' var1={{opacity: 0, x: 1500}} var2={{opacity: 1,x: 0}} width='fit-content'>
                        <div className='divLine2'></div>
                          </Reveal>
                        </div>
                        <div id='papers'>
                            <ul className=' flex flex-col gap-9'>
                            <WorkComponent
                                 right={true} 
                                 firstLetter='S' 
                                 innerText='tručna saradnica/ekspertkinja na naučno-istraživačkom projektu pod nazivom
                                            „Autonomija Univerziteta u Sarajevu“, Centar za ljudska prava Univerziteta u
                                            Sarajevu, Sarajevo, 2024. godine.'
                            />
                            <WorkComponent
                                 right={true} 
                                 firstLetter='I' 
                                 innerText='straživačica (članica radne grupe) u okviru projekta Ministarstva za ljudska prava i
                                            izbjeglice Bosne i Hercegovine (uz podršku UNICEF-a): Smjernice za poboljšanje
                                            položaja romske djece u Bosni i Hercegovini-socijalna uključenost, Sarajevo, 2013.
                                            godine.'
                            />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='eleBox'>
                    <div id='box1'>
                        <div>
                          <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: -110}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <h2 className='headingClass5'>
                                 Participation
                             </h2>
                          </Reveal>
                          <Reveal dur={0.5} del={0.6} position={"relative"} height='auto' var1={{opacity: 0, x: -1500}} var2={{opacity: 1,x: 0}} width='fit-content'>
                             <div className='divLine2'></div>
                          </Reveal>
                        </div>
                        <div id='inner1'>
                            <ul className=' flex flex-col gap-9'>
                                <WorkComponent
                                 right={false} 
                                 firstLetter='C' 
                                 innerText='rimen, Forensis, Securitas- 30 godina u Bosni i Hercegovini, XX Dani kriminalističkih
                                            nauka,Fakultet za kriminalistiku, kriminologiju i sigurnosne studije Univerziteta u Sarajevu,
                                            Sarajevo, 04.10.-05.10.2023. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='X' 
                                 innerText='XXIX International Scientific Conference KNOWLEDGE IN PRACTICE, which will be
                                             held in Bansko, Bulgaria, in the period of 16-18.12.2022. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='M' 
                                 innerText='eđunarodna naučna konferencija pod nazivom: Političko-pravni i zakonski položaj Grada
                                             Sarajeva u sistemu lokalne samouprave u Bosni i Hercegovini, Akademija nauka i umjetnosti
                                             Bosne i Hercegovine, Sarajevo, 30.11.2022. godine.'
                                />
                                 <WorkComponent
                                 right={false} 
                                 firstLetter='N' 
                                 innerText='aučni skup pod nazivom: „Evropska i euroatlanska perspektiva Bosne i Hercegovine u
                                            kontekstu novih geopolitičkih odnosa, Univerzitet u Sarajevu-Fakultet za kriminalistiku,
                                            kriminologiju i sigurnosne studije, 23.11.2022. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='X' 
                                 innerText='XXVII Internatioanal scientific conference: „Knowledge for development“,
                                            Struga/Ohrid,R.S.Makedonija, 18 – 21.08.2022. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='X' 
                                 innerText='XXVI Internatioanal scientific conference: „The teacher of the future“, Budva, Crna Gora,
                                            03 – 05.06.2022. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='O' 
                                 innerText='nline Konferencija Viktimološkog društva Srbije pod nazivom: COVID-19 na Balkanu:
                                             obrasci viktimizacije i prava žrtava koja se se održala 26.- 27. 11. 2020. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='L' 
                                 innerText='jetna škola „Djeca u riziku digitalnog okruženja“,Fakultet za kriminalistiku, kriminologiju
                                             i sigurnosne studije Univerzitet u Sarajevu, Sarajevo, 2020. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='L' 
                                 innerText='jetna škola „Smjernice za postupanje u slučaju nasilja nad djecom“, Fakultet za
                                             kriminalistiku, kriminologiju i sigurnosne studije Univerzitet u Sarajevu, Sarajevo,26.06.
                                             2016. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='D' 
                                 innerText='ruga međunarodna naučna Viktimološka konferencija u Bosni i Hercegovini, pod
                                            nazivom:„Ambasadori mira u Bosni i Hercegovini“, Sarajevo, 22.11.2017. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='N' 
                                 innerText='aučna konferencija povodom XV Dana kriminalističkih nauka na temu: „Aplikativna
                                            kriminologija i institucionalna kriminologija na Balkanu“, Sarajevo, 02.10.2015. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='P' 
                                 innerText='rva međunarodna naučna Viktimološka konferencija u Bosni i Hercegovini, pod
                                            nazivom:„Ambasadori mira u Bosni i Hercegovini“, Sarajevo, 05.03.2015. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='P' 
                                 innerText='eta godišnja konferencija viktimološkog društva Srbije, pod nazivom: „Zaštita žrtvama;
                                            međunarodno pravo, nacionalna zakonodavstva i praksa“, Beograd, 27-28.11.2014. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='I' 
                                 innerText='nternational scientific conference:„Knowledge-Capital of the future“, Bansko R, Bulgaria,
                                            27-29.11.2014.godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='M' 
                                 innerText='eđunarodna naučna konferencija pod nazivom:“Criminalistic education,situation and
                                             perspectives-20 years after Vodinelic“, University „St.Kliment Ohridski“ Bitola, Faculty of
                                             Security, Skopje, Macedonia, 24-25.10.2014. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='M' 
                                 innerText='eđunarodna naučno-stručna konferencija pod nazivom:„Suprostavljanje terorizmu-
                                            međunarodni standardi i pravna regulativa“, Visoka škola unutrašnjih poslova, Banja Luka,
                                            29-30.03.2011. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='S' 
                                 innerText='avjetovanje, Reforma visokog obrazovanja-Primjena bolonjskih principa na Univerzitetu u
                                            Sarajevu, Sarajevo, 11 - 12.04.2008. godine.'
                                />
                                <WorkComponent
                                 right={false} 
                                 firstLetter='S' 
                                 innerText='avjetovanje, Reforma visokog obrazovanja-Implementacija bolonjskog procesa na
                                            Univerzitetu u Sarajevu, Sarajevo, 23 - 24.02.2007. godine.'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' h-20'>
                    <ScrollToTopButton />
                </div>
            </div>
        </div>
    );
}

export default Works;