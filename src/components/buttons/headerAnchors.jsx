import './index.scss'

export const HeaderAnchors = ({content, link, target}) => {
    return(
        <a className="header__anchors" href={link} target={target}>{content}</a>
    )
}