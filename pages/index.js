import Page from "@/components/page";
import Image from "next/image";
import profile from "@/components/image/MyProfile.png";
import project from "@/components/image/santonio.png";
import FloatBtn from "@/components/FloatBtn";
import Link from "next/link";

export default function Home() {
    return (
        <Page>
            <div className="pt-32 lg:pt-32 p-4 lg:p-5 h-screen flex flex-col lg:flex-row justify-between">
                <div className="flex h-full flex-col justify-between">
                    <div>
                        <div className="text-2xl lg:text-6xl lg:leading-[4rem] py-1 ps- lg:ps-24">My name is Kaung Khant Kyaw.</div>
                        <div className="text-2xl lg:text-6xl lg:leading-[4rem] py-1">I'm a <span className="text-red-500">Freelance Frontend Developer</span> based in Mandalay (MM).</div>

                        <a href="" className="block w-fit">
                            <FloatBtn className="text-lg">kaungkhantkyawdk@gmail.com</FloatBtn>
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <div className="text-lg pb-2">Latest Project</div>
                        <a href="https://santonio.vercel.app" target="_blank" className="p-5 group cursor-pointer flex border border-black w-fit">
                            <div className="relative h-[150px] w-[240px]">
                                <Image alt="image" src={project} fill objectFit="cover" />
                            </div>
                            <div className="ps-5">
                                <div className="text-sm text-zinc-600">Reat App, Web Design, 2024</div>
                                <div className="pt-2 uppercase text-lg">Santonio</div>

                                <div className="mt-5">
                                    <FloatBtn className="text-sm group-hover:bg-black group-hover:text-white">View Case</FloatBtn>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-[400px] h-full relative">
                    <div className="relative w-[200px] lg:w-[400px] h-[240px] lg:h-[450px]">
                        <Image alt="image" src={profile} fill objectFit="cover"/>
                    </div>

                    <div className="absolute bottom-full left-0 lg:bottom-0 lg:right-5 text-xs lg:text-sm text-zinc-500">Use menu to explore</div>
                </div>
            </div>
        </Page>
    )
}