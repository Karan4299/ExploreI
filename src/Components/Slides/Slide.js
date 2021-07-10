
import React,{useEffect,useRef,useContext} from 'react';
import {gsap} from 'gsap';
import MainContent from '../Provider/providerContext';
const Slideee = () => {
    const db = useContext(MainContent);
    let cards = useRef(null);
    // const gsap = db.gsap;
    // useEffect(() => {
    //     console.log(props.gg);
    //     props.gg.to(test,{duration:1,opacity:0})
    // }, [])

    useEffect(()=>{
        gsap.to(cards,{duration:.7, width:'100vw',height:'100vh',delay:1,fontSize:30});
    },[]);

    return(
        <h1 ref = {el=>(cards=el)} >karnas</h1>
    )
} 
export default Slideee;