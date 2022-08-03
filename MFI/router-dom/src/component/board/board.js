// import { useEffect } from "react"
import { NavLink } from "react-router-dom"


const Board = ()=>{
    // useEffect 매번 렌더링할때마다 시행되기보단 마운트시에만 실행 혹은 의존성 나열해서 특정상황에서만 코드 실행
    
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
                    <BoardList />
                    <BoardList />
                    <BoardList />
                    <BoardList />
                    <BoardList />
                    <BoardList />
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