import React,{useRef,useEffect,useContext} from 'react';
import {MainFrame,MainBack,Card,MainCntnt,Slide,SlideBlock,
    Nextbtn,Btn,Bar,Current,SlideCard,NavBar,NavBlank,
    BlankSpace,Detail,Test,Hbar,State,Name,Descrip,Tags} from './mainStyle';
import MainContent from './Provider/providerContext';
import gsap from 'gsap';


const Main = () => {
    const db = useContext(MainContent); 
    let card = useRef(null);
    let mainback = useRef(null);
    
    const loc = db.state;
    const rot = Array(loc.length+2).fill(0);
    const active = db.active;
    let first = false;

    useEffect(()=>{
        first = true;
        // console.log("hhh")
        gsap.from(".drawUp",{delay:.2,duration:.3,y:30,opacity:0,stagger:.1});
        gsap.to(".drawUpB",{delay:.6,duration:1,opacity:1})
    },[]);

    useEffect(()=>{
        
        var tc=gsap.timeline({});
        tc.to(".crd:first-child",{duration:0,opacity:1});
        console.log(first)
        first?
        gsap.from(".crd",{delay:.5,duration:.8,x:220,stagger:.05,ease:"expo.inOut"}):
        gsap.from(".crd",{duration:.8,x:220,stagger:.05,ease:"expo.inOut"});
        // gsap.from(".drawUpB",{delay:2,duration:1,opacity:0})
    });




    const FullWall = () => {
        
        // tc.to(".crd:first-child",{duration:0,opacity:0});
        // tc.to(".crd:not(:first-child)",{delay:.2,duration:.5,x:-220,stagger:.05,ease:"expo.inOut"});
        // tc.to(".crd:first-child",{duration:0,opacity:0});
        var tc=gsap.timeline();
        var tl = gsap.timeline();
        tl.to(card,{duration:0,opacity:1})
        tc.to(".crd:first-child",{duration:0,opacity:0});
        gsap.from(".drawUp",{delay:1.05,duration:.1,opacity:0,y:20,stagger:.1});
        gsap.to(".drawUpB",{delay:.5,duration:0,opacity:0});

        tl.to(card,{duration:.8, width:'100vw',height:'100vh',top:0,left:0,ease:"expo.inOut",borderRadius:0});
        gsap.to(".drawUpB",{delay:1.5,duration:0,opacity:1})
        tl.to(mainback,{duration:0,backgroundImage:`url(${loc[(active+1)%loc.length].image})`})
        // tl.to(card,{duration:0.1,opacity:0})
        tl.to(card,{duration:.2,opacity:0,borderRadius:10})
        tl.to(card,{duration:0,width:200,height:287,marginBottom:15,marginRight:15,top:'50%',left:'45%'})
        

        setTimeout(()=>{
            // gsap.from(".drawUpB",{delay:1.5,duration:.1,opacity:0});
            change()
        },1080);
        // change();
        // db.changeActive();
    }

    const change = () => {
        db.changeActive();
    } 

    return (
        <MainFrame className="main_back">
            <NavBar>
                <div className="LOGO">
                    <p><i class="fal fa-globe"></i></p>
                    <p>Explore<span>I</span></p>
                </div>
                <div className="Nav_Ele">
                    <p>Home</p>
                    <p>Offers</p>
                    <p>Contact</p>
                    <p><i class="fas fa-search"></i></p>
                    <p><i class="fas fa-user"></i></p>
                </div>
            </NavBar>
            <MainBack ref={el=>(mainback=el)} bccimg={loc[(active)%loc.length].image}> 
                
                <Card  ref={el=>(card=el)} color="#F0F0F0" bcimage={loc[(active+1)%loc.length].image}> 
                </Card> 
                <Test>
                    <Hbar className="drawUpB" style={{opacity:0}}></Hbar>
                    <State className="drawUpB" style={{opacity:0}}> 
                        <p>{loc[active].Location}</p>
                    </State>
                    <Name className="drawUpB" style={{opacity:0}}>
                        <p className="first">{loc[active].Name.split(" ")[0]}</p>
                        <p className="sec">{loc[active].Name.split(" ")[1]}</p>

                    </Name >
                    <Descrip className="drawUpB" style={{opacity:0}}>
                        <p>{loc[active].Description}</p>
                    </Descrip>
                    <Tags className="drawUpB" style={{opacity:0}}>
                        <p className="save"><i class="fas fa-bookmark"></i></p>
                        <p>Discover Location</p>
                    </Tags>
                </Test>
            </MainBack>
            <MainCntnt>
                <NavBlank></NavBlank>
                <BlankSpace></BlankSpace>
                <Detail>
                    <Hbar className="drawUp"></Hbar>
                    <State className="drawUp"> 
                        <p>{loc[active].Location}</p>
                    </State>
                    <Name className="drawUp">
                        <p className="first">{loc[active].Name.split(" ")[0]}</p>
                        <p className="sec">{loc[active].Name.split(" ")[1]}</p>

                    </Name >
                    <Descrip className="drawUp">
                        <p>{loc[active].Description}</p>
                    </Descrip>
                    <Tags className="drawUp">
                        <p className="save"><i class="fas fa-bookmark"></i></p>
                        <p>Discover Location</p>
                    </Tags>
                    {/* <div style={{backgroundColor:"blue"}}></div> */}
                    {/* <div style={{backgroundColor:"blue"}}></div> */}

                    {/* <div style={{backgroundColor:"blue"}}></div> */}
                    {/* <div style={{backgroundColor:"green"}}></div> */}
                    {/* <div style={{backgroundColor:"yellow"}}></div> */}
                </Detail>
                <Slide>
                    <SlideBlock >
                        {   
                            rot.map((item,i)=>{
                                return(
                                    <SlideCard  bcimg={loc[(i+active+1)%loc.length].image} className="crd">
                                        {/* {loc[(i+active+1)%loc.length].Name} */}
                                    </SlideCard>
                                )
                            })
                        }
                    </SlideBlock>
                </Slide>
                <Nextbtn>
                    <Btn>
                        <p ><i className="fas fa-angle-left"></i></p>
                        <p onClick = {FullWall}><i className="fas fa-angle-right"></i></p>
                    </Btn>
                    <Bar></Bar>
                    <Current></Current>
                </Nextbtn>
            </MainCntnt>
            
        </MainFrame>
    )
}

export default Main;