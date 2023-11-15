import React from "react";
import { useState } from "react";
import { getRandomBighead ,getRandomClothing ,getRandomClothingColor ,getRandomGraphic } from "../utils/bigHeadDataRandomizer";
import { BigHead } from "@bigheads/core";
import Bheads from "../components/bhead";


let initarr = [];
let nextId=0;

export default function App(){
    const [heads , headstate] = useState(initarr);

    
    function addBighead() {
        const newBighead = getRandomBighead();
        const newHead = { id: nextId++, ...newBighead };
        initarr = [...initarr, newHead];
        headstate(initarr);
    };
    

    function deletehead(idToDelete) {
        initarr = initarr.filter((head) => head.id !== idToDelete);
        headstate(initarr);
    }




    function moveleft(idtomove) {
        const indexToMove = initarr.findIndex((head) => head.id === idtomove);

        if (indexToMove !== -1) {
            const movedItem = initarr[indexToMove];
            const newArr = [
                movedItem,
                ...initarr.slice(0, indexToMove),
                ...initarr.slice(indexToMove + 1)
            ];
            initarr=newArr;

            // Update the state with the modified array
            headstate(newArr);
        }
        
    }


    function moveRight(idToMove) {
        const indexToMove = initarr.findIndex((head) => head.id === idToMove);
    
        if (indexToMove !== -1 && indexToMove < initarr.length - 1) {
            const movedItem = initarr[indexToMove];
            const newArr = [
                ...initarr.slice(0, indexToMove),
                ...initarr.slice(indexToMove + 1),
                movedItem
            ];
            initarr=newArr;
            headstate(newArr);
        }
    }


    
    function changeCloth (idtomove) {
        const newClothing = getRandomClothing();
        const grafics=getRandomGraphic();
        const newcolor = getRandomClothingColor();

        const index = initarr.findIndex((head) => head.id == idtomove);
        initarr[index] = { ...initarr[index], clothing: newClothing , graphic:grafics , clothingColor: newcolor  };

        headstate([...initarr]); 
    };




    return (<>  

        <button onClick={addBighead}>Add Big Head</button>
            <div style={{ display: 'flex' }}>
            {heads.map((head) => (
                <div style={{ marginRight: '50px' }}>
                <Bheads
                    head={head}
                    deletefunc={deletehead} 
                    moveleft={moveleft}
                    moveright={moveRight}
                    changeCloth={changeCloth}

                />
                </div>
            ))}
        </div>   
  
    </>);
}