
import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../api/contracts";
import {getContractByName} from "../api/connectContract"
function MyCity (props){

    const MyCity = styled.div`
    `

    return (
        <MyCity className='MyCity'>
            <div className="content-box">

            </div>
        </MyCity>
    )
}
export default MyCity
