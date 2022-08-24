/* eslint-disable */
import axios from "axios";
import { useEffect , useState} from "react";
import { NavLink} from "react-router-dom";
import Pagination from "./paginations";

const Board = ()=>{
    const [boardlist , setboard]=useState([]);
    const [limit, setLimit]=useState(10);
    const [page, setPage]=useState(1);
    const offset = (page-1)*10;

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
            console.log(res.data)
            if(res.data.message==="expired token"){
                localStorage.removeItem('accessToken');
                alert("로그인을 해주세요")
                document.location.href = "/";
            }else{
                const boardInfo = res.data.data
                setboard(boardInfo)
            }
        })}
        return ()=>{
            console.log('unmount');
        };
    },[]);
    
    console.log(boardlist[0])
    return(
        <div className="Board">
            
            <div className="topTitle">
                분석글 보기/
                <NavLink to="/board/write">분석글 작성하기</NavLink>
            </div>
            <table className="boardTable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                    {boardlist.length !==0 &&(
                        boardlist.slice(offset, offset + limit).map(({ boardIdx, user, title, created}) => (
                            <BoardList boardIdx={boardIdx} title={title} user={user} created={created} key={boardIdx}/>
                        )))}
                </thead>
            </table>
            <footer className="paging">
                <Pagination
                    total={boardlist.length}
                    limit = {limit}
                    page = {page}
                    setPage ={setPage}
                />
            </footer>
        </div>
    )
}

const BoardList=({boardIdx, user, title, created})=>{
    return (
        <>
        <tr className="BoardList">
            <td>{boardIdx}</td>
            <td><NavLink to= {`/board/viewBoard/${boardIdx}`}>{title}</NavLink></td>
            <td>{user.name}</td>
            <td>{created}</td>
        </tr>
        </>
    )
}


export default Board