import axios from "axios";
import { useEffect , useState} from "react"
import { NavLink } from "react-router-dom"


const Board = ()=>{
    const [boardlist , setboard]=useState([]);
    useEffect(()=>{
        console.log('mount');
        const token = localStorage.getItem('accessToken')
        if (token ===null){
            alert("로그인을 하셔야 글을 볼 수 있습니다.")
            document.location.href = "/"
        }
        else{
            axios.get("http://localhost:3000/board/get",{
        headers: {
            authorization: token
        }}).then((res)=>{
            if(res.data.data==="need Token"){
                alert("로그인을 해주세요")
                document.location.href = "/";
            }else{
                const boardInfo = res.data.data
                console.log(boardInfo)
                setboard(boardInfo)
            }
        })}
        return ()=>{
            console.log('unmount');
        };
    },[]);
    console.log(boardlist)
    
    return(
        <div className="Board">
            <div className="topTitle">
                분석글 보기
                <NavLink to="/board/write">분석글 작성하기/</NavLink>
            </div>
            <table className="boardTable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                    {
                        boardlist.length !== 0  && (
                            boardlist.map(data =>(
                                <BoardList data ={data} key={data.boardIdx}/>
                                ) 
                        )
                    )}
                    
                </thead>
            </table>
            <div className="paging">
                <NavLink to="/viewBoard">◀</NavLink>
                <NavLink to="/viewBoard">◁</NavLink>
                <NavLink to="/viewBoard">1/</NavLink>
                <NavLink to="/viewBoard">2/</NavLink>
                <NavLink to="/viewBoard">3/</NavLink>
                <NavLink to="/viewBoard">4/</NavLink>
                <NavLink to="/viewBoard">5/</NavLink>
                <NavLink to="/viewBoard">6</NavLink>
                <NavLink to="/viewBoard">▷</NavLink>
                <NavLink to="/viewBoard">▶</NavLink>
                

            </div>
        </div>
    )
}

const BoardList=({data})=>{
    return (
        <tr className="BoardList">
            <td>1</td>
            <td><NavLink to= {`/board/viewBoard/${data.boardIdx}`}>{data.title}</NavLink></td>
            <td>{data.writer}</td>
            <td>1+</td>
        </tr>
    )
}


export default Board