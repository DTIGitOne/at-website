export interface aniProps {
    children: JSX.Element,
    width: any,
    height: string,
    var1: any,
    var2: any,
    position: any,
    classes?: string,
    dur: number,
    del: number
}

export interface aniPropsSlide {
    children: JSX.Element,
    width: any,
    height: string
    var1: any,
    var2: any,
    var3: any,
    var4: any,
    position: any,
    classes?: string
    dur: number,
    del: number
}

export interface Photo {
    src: string;
    alt: string;
    title?: string;
    height: number;
    width: number;
}

export interface workComp {
    innerText: string, 
    firstLetter: string, 
    urlLnk?: string,
    urlText?: string, 
    spanDetails?: string,
    right?: boolean
}