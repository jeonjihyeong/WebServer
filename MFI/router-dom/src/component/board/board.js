import { NavLink } from "react-router-dom"


const Board = ()=>{
    return(
        <div className="Board">
            <div className="topTitle">
                분석글 보기
                <NavLink to="/writeBoard">분석글 작성하기/</NavLink>
            </div>
            <table className="boardTable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
                    <BoardList></BoardList>
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

const BoardList=()=>{
    return (
        <tr className="BoardList">
            <td>3</td>
            <td>삼성전자 주식 종목 분석글</td>
            <td>글쓴이</td>
            <td>2022-08-01</td>
        </tr>
    )
}


export default Board
