import "./TicTacToe.css"

const TicTacToe = () => {
    const Cell = ()=>{
        return <td>-</td>
    }

    return (
        <div className="Container">
        <table>
            <tbody>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                </tr>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                </tr>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TicTacToe
