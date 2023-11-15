import React from "react";
import { BigHead } from "@bigheads/core";
import { getRandomBighead} from "../utils/bigHeadDataRandomizer";


export default function Bheads({ head, deletefunc ,moveleft , moveright , changeCloth }) {

  

    return (
      <>
        <BigHead {...head}></BigHead>
        <button onClick={() => deletefunc(head.id)}>Delete Head</button>
        <button onClick={() => moveleft(head.id)}>Move Left</button>
        <button onClick={() => moveright(head.id)}>Move Right</button>

        <button onClick={() => changeCloth(head.id)}>change cloth</button>



      </>
    );
  }