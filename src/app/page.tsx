'use client'
import Signiture from '@/svg/signiture';
import '../styles/background.css';
import '../styles/home.css';
import ScrollFadeComponent from '@/components/scroll';
import RevealAnimation from '@/components/animation/revealAnimation';
import Reveal from '@/components/animation/reveal';
import ScrollToTopButton from '@/components/goToTop';
import LinkedInIcon from '@/svg/linkedin';
import ScholarIcon from '@/svg/scholar';
import CobissIcon from '@/svg/cobiss';
import KnjigaIcon from '@/svg/knjiga';
import { openURLInNewWindow } from '@/constants/constants';

const Home = () => {
    return (
        <div id='homeBackground'>
            <div id='homeLayer'>
                <div id='eleBox'>
                    <div id='signBox'>
                        <Signiture />
                        <ScrollFadeComponent />
                    </div>
                    <div id='bioDetails'>
                    <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                         <div className=' flex flex-col m-10 mb-40 justify-center items-center'>
                              <h1 id='bioText' className='font-light'>Biography</h1>
                              <RevealAnimation dur={1} del={0.1} position={"relative"} height='auto' var1={{opacity: 0, x: -1500}} var2={{opacity: 1,x: 0}} var3={{left: 0}} var4={{left: "100%"}} width='fit-content'>
                                  <div className='divLine'></div>
                              </RevealAnimation>
                         </div>
                    </Reveal>
                       <h2 className=' w-full gap-5' id='secondHeading'>
                         <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='fit-content'>
                            <div className=' select-none font-light text-red-700'>Dr.sc</div>
                         </Reveal>
                         <RevealAnimation dur={1} del={0.1} position={"relative"} height='auto' var1={{opacity: 0, x: -300}} var2={{opacity: 1,x: 0}} var3={{left: 0}} var4={{left: "100%"}} width='fit-content'>
                            <div>Amila Taljanović</div>  
                         </RevealAnimation>
                       </h2>
                        <div className='h-auto mt-20 flex' id='textBoxBox' style={{width: "100%",fontSize: "0.95rem"}}>
                            <div className=' textBoxes drop-cap'>
                            <div className=' p-2 alignText' style={{lineHeight: 1.5,clear: "both"}}>
                            <Reveal del={0.15} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                      <span className=' letter font-medium text-red-700'>A</span>
                                         mila (Podrug) Taljanović was born in Foča, where she completed her primary and secondary education.
                                         Graduated in 2001 at the University of Sarajevo - Faculty of Political Sciences, department
                                         of Sociology, and thereby earned the title of Professor of Sociology. Master's degree at the same Faculty in 2009.
                                         year at the post-graduate study under the title: "Bosnia and Herzegovina in modern times
                                         to the world" with the topic of the paper: "The role of women in the political life of Bosnia and Herzegovina in the second
                                         half of the 20th century", and thereby earned the title of Master of Sociological Sciences.
                                      </p>
                            </Reveal>
                            <Reveal del={0.15} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                        Doctoral dissertation entitled: "Socio-cultural aspects of suicide in Bosnia and Herzegovina."
                                        in the period from 2005 to 2015", successfully defended in 2019 at the University of East
                                        Sarajevo - Faculty of Philosophy, Department of Sociology, and earned the title of Doctor of Sociology
                                        science.
                                      </p>
                            </Reveal>
                            <Reveal del={0.15} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                        From 23.12.2005 has been working for an indefinite period at the University of
                                        Sarajevo - Faculty of Criminology, Criminology and Security Studies, performing duties
                                        for which a higher professional education is provided, namely:
                                      <br/>
                                        - in the period from 23.12.2005. until August 31, 2006. year -Head of student services;
                                      <br/>
                                        - in the period from September 1, 2006. until 09.01.2013. year - Postgraduate Secretary
                                        study;
                                      <br/>
                                        - in the period from 10.01.2013. until 30.06.2021. year - Head of the teaching department i
                                      <br/>
                                        - in the period from 01.07.2021. performs the duties of -Senior professional associate for
                                        teaching.
                                      </p>
                            </Reveal>
                            </div>
                            </div>
                            <div className=' textBoxes'>
                             <div className=' p-2 alignText'>
                              <Reveal del={0.35} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                        At the same Faculty, as an expert in practice, she was entrusted with participation in the implementation of the part
                                        teaching in the scope of up to 30% of teaching hours with students of the first cycle of study (Syllabus i
                                        program 2013/2014) in the following subjects:
                                      <br/>
                                        - In the winter semester of the academic year 2015/2016. in the subject "Sociology"
                                        first cycle of study;
                                      <br/>
                                        - In the summer semester of the academic year 2016/2017. years in the following subjects:
                                        "Sociology" and "Social pathology" of the first cycle of studies;
                                      <br/>
                                        - In the winter semester of the academic year 2017/2018. years in the following subjects:
                                        "Sociology" and "Social Anthropology" of the first cycle of studies;
                                      <br/>
                                        - In the winter semester of the academic year 2018/2019. years in the following subjects:
                                        "Sociology" and "Social Anthropology" of the first cycle of study;
                                      <br/>
                                        - In the summer semester of the academic year 2018/2019. year on the subject "Social
                                        pathology" of the first study cycle.
                                      </p>
                               </Reveal>
                               <Reveal del={0.35} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                       So far, she has published three (3) monographs/books, co-authored one (1) manual for lifelong
                                       learning and eighteen (18) authored and co-authored scientific and professional papers. She participated in
                                       numerous scientific and professional conferences and consultations in Bosnia and Herzegovina and
                                       abroad in the field of her scientific interest, which, among other things, include:
                                       applied sociology, social pathology, victimology and gender studies.
                                      </p>
                               </Reveal>
                             </div>
                            </div>
                            <div className=' textBoxes'>
                            <div>
                              <Reveal del={0.55} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                        In addition to being involved in the higher education sector, she also served as a member of the school board
                                        of the board of the Elementary School "Aleksa Šantić" in Sarajevo, in the period from 2013 to 2017,
                                        The Board of Directors of the Sarajevo Canton Public Institution "Sarajevo Library" in the period from
                                        2021 to 2023, and the Management Board of the Sarajevo Canton Public Institution "Institute for
                                        health care for employees of MUPA Sarajevo Canton" in the period from 2021 to 2024.
                                        year. She was then appointed to the position of member of the Board of Directors of the Public Institution of the Canton
                                        Sarajevo "Institute for Health Care of Students of the University of Sarajevo" for the period from 2024 to 2028.
                                      </p>
                               </Reveal>
                               <Reveal del={0.55} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                        Hired as an expert for the selection of management and other civil servants of the Agency for
                                        civil service of the Federation of Bosnia and Herzegovina, for the period from 2021 to 2023, and on
                                        the period from 2023 to 2025.
                                      </p>
                               </Reveal>
                               <Reveal del={0.55} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                      She is a member of the Association of Criminologists, Criminologists and Security Managers.
                                      </p>
                               </Reveal>
                               <Reveal del={0.55} dur={0.5} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='100%'>
                                      <p className=' p-2 alignText'>
                                      She is the mother of one child.
                                      </p>
                               </Reveal>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: -75}} var2={{opacity: 1,y: 0}} width='fit-content'>
                         <div className=' flex flex-col mt-24 mb-16 justify-center items-center'>
                              <h1 id='bioText' className='font-light text-9xl text-white'>Links</h1>
                              <RevealAnimation dur={1} del={0.1} position={"relative"} height='auto' var1={{opacity: 0, x: -1500}} var2={{opacity: 1,x: 0}} var3={{left: 0}} var4={{left: "100%"}} width='fit-content'>
                                  <div className='divLine'></div>
                              </RevealAnimation>
                         </div>
                    </Reveal>
                    <div id='linksBox' className=' flex'>
                    <Reveal del={0.15} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: 110}} var2={{opacity: 1,y: 0}} width='fit-content'>
                        <button onClick={() => openURLInNewWindow("https://www.linkedin.com/in/amila-taljanovic-52448289/?originalSubdomain=ba")}>
                            <LinkedInIcon />
                        </button>
                    </Reveal> 
                    <Reveal del={0.25} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: 110}} var2={{opacity: 1,y: 0}} width='fit-content'>
                        <button onClick={() => openURLInNewWindow("https://scholar.google.com/citations?user=a0B3ARoAAAAJ&hl=en&oi=ao")}>
                          <ScholarIcon />
                        </button>
                    </Reveal>
                    <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: 110}} var2={{opacity: 1,y: 0}} width='fit-content'>
                        <button onClick={() => openURLInNewWindow("https://plus.cobiss.net/cobiss/rs/sr/bib/search?q=amila+taljanovic&db=cobib&mat=allmaterials")}>
                          <CobissIcon />
                        </button>
                    </Reveal>
                    <Reveal del={0.45} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: 110}} var2={{opacity: 1,y: 0}} width='fit-content'>
                       <button onClick={() => openURLInNewWindow("https://plus.cobiss.net/cobiss/bh/bs/bib/search?q=amila+taljanovic&db=cobib&mat=allmaterials")}>
                          <CobissIcon />
                        </button>
                    </Reveal>
                    <Reveal del={0.55} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: 110}} var2={{opacity: 1,y: 0}} width='fit-content'>
                        <button onClick={() => openURLInNewWindow("https://www.knjiga.ba/catalogsearch/result/?q=amila+taljanovic&dir=desc&order=created_at")}>
                          <KnjigaIcon />
                        </button>
                    </Reveal>
                    </div>
                    <div className=' h-32'>
                      <ScrollToTopButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;