import { Link } from 'react-router-dom'
import styled from "styled-components";
function MineDaos (props){
    const toPage1 = ()=>{
        props.history.push("/")
    }
    const MineDaosContent = styled.div`

    `

    const getBalance=()=>{

    }
    return (
        <MineDaosContent className="daoContentBg">
            <div className="content-box">
                <div className="box-nav">
                    <div className="item" onClick={()=>{getBalance()}}>
                        My Mother Dao
                    </div>
                    <div className="item">
                        My Alliance Dao
                    </div>
                    <div className="item">
                        My Child Dao
                    </div>
                </div>
                <div className='Cont'>
                    <Link
                        to={{
                            pathname: '/',
                            state: {
                                // 页面跳转要传递的数据，如下
                                data1: {},
                                data2: []
                            },
                        }}
                    >
                        <button>
                            点击跳转
                        </button>
                    </Link>
                </div>
            </div>
        </MineDaosContent>
    )
}
export default MineDaos
