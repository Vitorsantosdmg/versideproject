import './index.scss'

export const Button2 = ({content, icon, classIcon}) => {
    return(
        <button className="button--2">
            <p>{content}</p>
            <span className={classIcon}>
                {icon}
            </span>
        </button>
    )
}

