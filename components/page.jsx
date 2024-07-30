import Header from "./header";
import Inner from "./Layout/Inner";
import Stairs from "./Layout/Stairs";

export default function Page({children}) {
    return (
        <>
            <Inner>
                {/* <Header /> */}
                <main>{children}</main>
            </Inner>
        </>
    )
}