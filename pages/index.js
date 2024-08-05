import Page from "@/components/page";
import Image from "next/image";
import profile from "@/components/image/MyProfile.png";
import project from "@/components/image/leigaMockup.png";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import Work from "@/components/Work";

export default function Home() {
    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 h-screen flex flex-col lg:flex-row justify-between">
                <div className="flex h-full flex-col justify-between">
                    <TextAnimate>
                        <div className="text-2xl lg:text-6xl lg:leading-[4rem] lg:p-1"><span className="w-20 lg:w-28 inline-block"></span> My name is Kaung Khant Kyaw. I'm a <span className="text-red-500">Freelance Frontend Developer</span> based in Mandalay (MM).</div>

                        <a href="" className="block w-fit pt-10">
                            <FloatBtn className="text-lg">kaungkhantkyawdk@gmail.com</FloatBtn>
                        </a>
                    </TextAnimate>
                    <div className="hidden lg:block">
                        <TextAnimate>
                        <div className="text-lg pb-2">Latest Project</div>
                            <a href="https://santonio.vercel.app" target="_blank" className="p-5 group cursor-pointer flex border border-black w-fit">
                                <div className="relative h-[150px] w-[240px]">
                                    <Image alt="image" src={project} fill objectFit="cover" placeholder="blur" />
                                </div>
                                <div className="ps-5">
                                    <div className="text-sm text-zinc-600">React App, Web Design, 2024</div>
                                    <div className="pt-2 uppercase text-lg">Leiga</div>

                                    <div className="mt-5">
                                        <FloatBtn className="text-sm group-hover:bg-black group-hover:text-white">View Case</FloatBtn>
                                    </div>
                                </div>
                            </a>
                        </TextAnimate>
                    </div>
                </div>
                <div className="w-full lg:w-[450px] lg:ps-10 h-full relative">
                    <TextAnimate>
                        <div className="relative w-[200px] lg:w-[400px] h-[240px] lg:h-[450px]">
                            <Image alt="image" src={profile} fill objectFit="cover"/>
                        </div>
                    </TextAnimate>

                    <div className="absolute -top-5 left-0 lg:top-auto lg:left-auto lg:bottom-0 lg:right-5 text-xs lg:text-sm text-zinc-500">Use menu to explore</div>
                </div>
            </div>
        </Page>
    )
}