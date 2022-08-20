import axios from "axios";
import { useEffect , useState} from "react"
import { NavLink} from "react-router-dom"
import deleteEvent from "../../api/board/deleteEvent"
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
            if(res.data.data==="need Token"){
                alert("로그인을 해주세요")
                document.location.href = "/";
            }else{
                const boardInfo = res.data.data
                // console.log(boardInfo)
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
                    {boardlist.length !==0 &&(
                        boardlist.slice(offset, offset + limit).map(({ boardIdx, user, title, created}) => (
                            <BoardList boardIdx={boardIdx} title={title} user={user} created={created} key={boardIdx}/>
                        )))}


                    {/* {boardlist.length !== 0  && (
                            boardlist.map(data =>(
                                <BoardList data ={data} key={data.boardIdx}/>
                                ) 
                        )
                    )} */}
                    
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


// <NavLink to="/viewBoard">◀</NavLink>
//                 <NavLink to="/viewBoard">◁</NavLink>
//                 <NavLink to={`/board/page?${boardlist.boardidx}=10&${boardlist.user}`}>1/</NavLink>
//                 <NavLink to="/viewBoard">2/</NavLink>
//                 <NavLink to="/viewBoard">3/</NavLink>
//                 <NavLink to="/viewBoard">4/</NavLink>
//                 <NavLink to="/viewBoard">5/</NavLink>
//                 <NavLink to="/viewBoard">6</NavLink>
//                 <NavLink to="/viewBoard">▷</NavLink>
//                 <NavLink to="/viewBoard">▶</NavLink>

const BoardList=({boardIdx, user, title, created})=>{
    return (
        <>
        <tr className="BoardList">
            <td>{boardIdx}</td>
            <td><NavLink to= {`/board/viewBoard/${boardIdx}`}>{title}</NavLink></td>
            <td>{user.name}</td>
            <td>{created}</td>
            <button onClick={deleteEvent()}>x</button>
        </tr>
        </>
    )
}


export default Board