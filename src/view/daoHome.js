
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
        console.log(state.api,state.account)
        contract =await getContractByName("cityzen",state.api)
        console.log(contract)

    }, []);
    const joinCity = ()=>{
        console.log(contract)
        if(contract){
            contract.methods.joinCity().send({
                from: state.account,
                gas: 100000
            }).then(res => {
                console.log(res)
                alert('success')
            }).catch(e=>{
                console.log(e)
                alert(e)
            })
        }
    }
    return (
        <DaoHome className='daoHome daoContentBg'>
            <h1 className="title">
                All Citys
            </h1>

            <div className="content-box">
                <button onClick={()=>{
                    joinCity()
                }}>JOIN</button>
            </div>

        </DaoHome>
    )
}
export default DaoHome
