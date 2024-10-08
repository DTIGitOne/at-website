// gallery photos
export const photos = [
    {
        src: "/images/bg1.jpg",
        alt: "image 0",
        title: "Image 0",
        width: 500,
        height: 400,
    },
    {
        src: "/images/image1.jpg",
        alt: "image 1",
        title: "Image 1",
        width: 350,
        height: 500,
    },
    {
        src: "/images/image2.jpg",
        alt: "image 2",
        title: "Image 2",
        width: 400,
        height: 400,
    },
    {
        src: "/images/image3.jpg",
        alt: "image 3",
        title: "Image 3",
        width: 600,
        height: 800,
    },
    {
        src: "/images/image4.jpg",
        alt: "image 4",
        title: "Image 4",
        width: 300,
        height: 300,
    },
    {
        src: "/images/image5.jpg",
        alt: "image 5",
        title: "Image 5",
        width: 400,
        height: 400,
    },

    {
        src: "/images/image6.jpg",
        alt: "image 6",
        title: "Image 6",
        width: 700,
        height: 500,
    },

    {
        src: "/images/image7.jpg",
        alt: "image 7",
        title: "Image 7",
        width: 400,
        height: 300,
    },
]

// meant for email sending 
export const gmail = process.env.NEXT_PUBLIC_GMAIL
export const subject = "Contact";
export const body = ""; 

// url opener 
export const openURLInNewWindow = (url: string) => {
    window.open(url, '_blank');
  };