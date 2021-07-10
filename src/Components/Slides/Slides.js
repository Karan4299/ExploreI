import React, { useContext,useEffect } from 'react';
import MainContent from '../Provider/providerContext';
import gsap from 'gsap';
import  {Slide,SlideBlock,SlideCard} from './SlidesStyle'




// const Cards = (props,ref) => {
//     console.log(ref+"Cards")
//     return(
//         <SlideCard ref={el=>(ref=el)} >
//             karn
//         </SlideCard>
//     )
// }

// const Card = React.forwardRef(Cards);

const Slides = () => {
    const db = useContext(MainContent);
    const loc = db.state;
    const rot = Array(loc.length+2).fill(0);
    const active = db.active;
    let first = false;

    useEffect(()=>{
        // let tl = gsap.timeline({delay:1});
        // tl.from(".crd",{duration:.8,x:220,stagger:.05,ease:"expo.inOut"});
        // tl.to(".crd:first-child",{delay:.1,duration:1,opacity:0});
        // tl.to(".crd:not(:first-child)",{duration:.5,x:-220,stagger:.05,ease:"expo.inOut"})
        first=true;
    },[]);

    useEffect(()=>{
        // let tl = gsap.timeline({delay:1});

        if(first){
            console.log("secf");
            let tm = gsap.timeline({delay:2});
            tm.from(".crd",{duration:.8,x:220,stagger:.05,ease:"expo.inOut"});
            // console.log(first)
        }else{
            console.log("seccc")
            let tm = gsap.timeline();
            tm.to(".crd:first-child",{duration:0,opacity:0.5});
            // tl.from(".crd:not(:first-child)",{duration:.8,x:220,stagger:.05,ease:"expo.inOut"});
        }
        // tl.to(".crd:first-child",{duration:.5,opacity:0});
        // tl.from(".crd",{duration:.8,x:220,stagger:.05,ease:"expo.inOut"});
        // tl.to(".crd:first-child",{delay:.1,duration:1,opacity:0});
        // tl.to(".crd:not(:first-child)",{duration:.5,x:-220,stagger:.05,ease:"expo.inOut"})
    },[db.active]);
    

    // useEffect(()=>{
    //     changes();
    // },[]);

    
    return(
        <Slide>
            <SlideBlock >
                {/* <SlideCard ></SlideCard> */}
                {   
                    rot.map((item,i)=>{
                        return(
                            <SlideCard  bcimg={loc[(i+active)%loc.length].image} className="crd">
                                {loc[(i+active)%loc.length].Name}
                            </SlideCard>
                        )
                    })
                }
            </SlideBlock>
        </Slide>
    )
}

export default Slides;