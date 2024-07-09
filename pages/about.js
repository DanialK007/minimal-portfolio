import Page from "@/components/page";
import Social from "@/components/Social";

export default function About() {
    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 w-full h-screen">
                <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I'm a freelance UI/UX designer and <span className="text-red-500">began my career in web and computer science in 2020.</span> I later transitioned into frontend development field, driven by a passion for web design, UI/UX, branding, and mobile application projects.</div>
                <div className="grid lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Social />
                    </div>
                    <div className="lg:col-span-2 uppercase text-[0.95rem]">
                        <div className="py-5">I was born and raised in a town in Myanmar called Mandalay. After I finished high school in 2020 at the age of 18, I wasn’t sure what I wanted to do with my life. Initially, I thought my profession would be related to business. Before delving into the world of web development and design, I worked as an English teacher.</div>
                        <div className="pb-5">As a junior web developer, I realized that I enjoyed the creative aspect of my work more, and I made a full transition into the field of design. Since then, I have worked as a freelancer on platforms like Upwork and collaborated with companies and clients on a full-time or contract basis. I am currently a Frontend Developer based in Mandalay.</div>
                    </div>
                </div>
            </div>
        </Page>
    )
}