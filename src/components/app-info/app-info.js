import './app-info.css'

const AppInfo = ({total,premia}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании KazSale</h1>
            <h2>Общее количество штата: {total}</h2>
            <h2>Премию получат: {premia}</h2>
        </div>
    )
}

export default AppInfo;