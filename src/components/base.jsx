// eslint-disable-next-line react/display-name, react-refresh/only-export-components
export default function base({question,clickedVariant,percentage}) {
    
    return(
        <div className="gameBody">
            <div className="progress">
                <div className="progressBar" style={{width: `${percentage}%`}}></div>
            </div>
            <h1 className="question">{question.title}</h1>
            <div className="answersList">
                <ul>
                    {
                        question.variants.map((variant, index) => <li onClick={() =>clickedVariant(index)} key={index}>{variant}</li>) 
                    }
                </ul>
            </div>
        </div>
    )
}