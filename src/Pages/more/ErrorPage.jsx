// import Page404 from "../../assets/avatar/sad_me.png"
import Page404 from "../../assets/avatar/404Error.png"

export default function Error(){
    return(
        <div className="grid place-items-center py-24">
            <h1 className="text-9xl font-bold stroke-black text-tertiary outline">! Error 404 !</h1>
            <h2 className="text-5xl font-extrabold text-secondary-dark">Page Not Found</h2>
            <img src={Page404} alt="404 Page" className="py-10"/>
            <p className="w-1/2 text-2xl text-center font-semibold text-tertiary">Oops! Looks like you've wandered off the digital path. The page you're searching for seems to have gone on an adventure of its own. Let's navigate back together and find what you're looking for!</p>
        </div>
    )
}