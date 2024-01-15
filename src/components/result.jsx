import xlop from'./assets/xlop.png'
// eslint-disable-next-line react/prop-types
export default function Result ({correct, length}) {
    return (
    <div className="gameBody">
        <img src={xlop} style={{height:"100px", justifySelf:"center"}}/>
        <h2 style={{marginTop: "130px", justifySelf: "center", fontWeight: "500"}}>Вы ответили правильно на {correct} вопроса из {length}</h2>
        
        <button style={{height: "45px",
                        width: "200px",
                        borderRadius: "22px",
                        border: "none",
                        justifySelf: "center",
                        backgroundColor: "rgba(225, 32, 148, 0.699)",
                        marginTop: "120px",
                        cursor: "pointer",
                        fontSize: "16px"}}><a href="/" style={{color: "white",textDecoration: "none"}}>Попробовать снова</a></button>
        
    </div>
    )
}