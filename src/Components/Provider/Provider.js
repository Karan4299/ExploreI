import React,{useState} from 'react';
import MainContent from './providerContext';
import img1 from '../../images/pic1.jpg';
import img2 from '../../images/pic2.jpg';
import img3 from '../../images/pic3.jpg';
import img4 from  '../../images/pic4.jpg';

const MainProvider = ({children})=>{
    
    const [active,setActive] = useState(0);

    const state = [
        {   
            id:0,
            Name:"Leh Ladakh",
            Location:"Ladakh",
            image:img1,
            Description:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure voluptas,
             nisi temporibus velit sunt magni corrupti accusantium quis! Aspernatur ad, nemo deserunt 
             incidunt cum ipsa porro aliquam dolorem.`,
        },
        {
            id:1,
            Name:"The Rohtang",
            Location:"Himachal Pradesh",
            image:img2,
            Description:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure voluptas,
            nisi temporibus velit sunt magni corrupti accusantium quis! Aspernatur ad, nemo deserunt 
            incidunt cum ipsa porro aliquam dolorem.`,
        },
        {
            id:2,
            Name:"Neil Islands",
            Location:"Andaman Nicobar",
            image:img3,
            Description:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure voluptas,
            nisi temporibus velit sunt magni corrupti accusantium quis! Aspernatur ad, nemo deserunt 
            incidunt cum ipsa porro aliquam dolorem.`,
        },
        {
            id:3,
            Name:"Coorg",
            Location:"Karnataka",
            image:img4,
            Description:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure voluptas,
            nisi temporibus velit sunt magni corrupti accusantium quis! Aspernatur ad, nemo deserunt 
            incidunt cum ipsa porro aliquam dolorem.`,
        }
    ]

    const changeActive = () => {
        // console.log("chaneac")
        const nextact = (active+1)%4;
        setActive(nextact);
    }

    return(
        <MainContent.Provider value={{state,active,changeActive}}>
            {children}
        </MainContent.Provider>
    );
}

export default MainProvider;