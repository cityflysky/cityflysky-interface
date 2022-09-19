
import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../api/contracts";
import {getContractByName} from "../api/connectContract"
function DaoHome (props){

    const DaoHome = styled.div`
      padding: 3em 10%;
        .title{
          
        }
    `
    const { state, dispatch } = useConnect();
    let contract
    useEffect(async () => {
        console.log(state.api)

        contract =await getContractByName("erc20",state.api,)
        console.log(contract)

    }, []);
    const transfer = ()=>{
        console.log(contract)
        if(contract){
            contract.methods.transfer("0x931f176Bee590f13ca2B9D163C135F065c7A22cC", 22330000).send({
                from: state.account,
                gas: 100000
            }).then(res => {
                console.log(res)
            })
        }
    }
    return (
        <DaoHome className='daoHome daoContentBg'>
            <h1 className="title">
                All Citys
            </h1>

            <div className="content-box">

            </div>

        </DaoHome>
    )
}
export default DaoHome
