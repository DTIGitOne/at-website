import LinkIcon from "@/svg/link"
import Reveal from "./animation/reveal"
import '../styles/works.css'
import { openURLInNewWindow } from "@/constants/constants"
import { workComp } from "@/ts/interface"

const WorkComponent = ({innerText, firstLetter, urlLnk, urlText, spanDetails, right}: workComp) => {
    return (
        <li className=' flex h-auto gap-3'>
        {right ? (
            null
        ) : (
        <Reveal del={0.4} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: -110}} var2={{opacity: 1,y: 0}} width='fit-content'>
            <div className='textLine'></div>
        </Reveal>
        )}
        <Reveal del={0.35} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, x: right ? 110 : -110}} var2={{opacity: 1,x: 0}} width='fit-content'>
             <div>
                <div id="innerText">
                    <span id="innerTextLetter" style={{fontWeight: 600}}>{firstLetter}</span>
                    {innerText}
                </div>
                <div className='  flex items-center gap-2' style={{justifyContent: right ? "end" : "start"}}>
                    <span className='linkSpan'>
                        {spanDetails}
                        {urlLnk ? (
                            <button onClick={() => openURLInNewWindow(urlLnk)}>{urlText}</button>
                        ) : (
                            null
                        )}
                    </span>
                    {urlLnk ? (
                        <LinkIcon />
                    ) : (
                        null
                    )}
                </div>
            </div>
        </Reveal>
        {right ? (
            <Reveal del={0.4} dur={0.7} position={"relative"} height='auto' var1={{opacity: 0, y: -110}} var2={{opacity: 1,y: 0}} width='fit-content'>
            <div className='textLine'></div>
        </Reveal>
        ) : (
            null
        )}
        </li>
    )
}

export default WorkComponent;