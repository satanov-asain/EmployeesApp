import './app-filter.css';

const AppFilter = (props) =>{
    
    const buttonsData=[
        {nameFilter:'all', label:'Все сотрудники'},
        {nameFilter:'like', label:'На повышение'},
        {nameFilter:'moreThan300k', label:'Оклад свыше 300.000'}
    ]

    const buttons =buttonsData.map(({nameFilter,label})=>{
        const isActive =props.filter===nameFilter;
        const btnClass = isActive?"btn-light":"btn-outline-light";
        return(
            <button className={`btn ${btnClass}`}
                    type="button"
                    key={nameFilter}
                    onClick={()=>props.onSelectFilter(nameFilter)}>
                        {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;