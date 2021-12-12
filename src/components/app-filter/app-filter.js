import './app-filter.css';

const AppFilter = () =>{
    return(
        <div className="btn-group">
            <button className="btn btn-light"
                    type="button">
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        На повышение
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                        Оклад свыше 400.000
            </button>
        </div>
    )
}

export default AppFilter;