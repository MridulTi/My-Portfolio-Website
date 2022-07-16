import React from "react";
export default function Myself_Image(){
    const [Image,setImage]=React.useState({
        index:0,
        images:['Images/mridul.jpg','Images/1500x500.jpg']
    })
    let i=0;
    React.useEffect(()=>{
                setInterval(()=>{
                    if(Image.index==Image.images.length){
                        setImage(prevContent=>{
                            return{
                                ...prevContent,
                                index:0
                            }
                        })
                    }else{
                        setImage(prevContent=>{
                            return{
                                ...prevContent,
                                index:i++
                            }
                        });
                    }
                },1000)
    },[Image])
    return (
        <div className="my_image">
            <img src="Images/mridul.jpg" placeholder="my"/>
        </div>
    )
}