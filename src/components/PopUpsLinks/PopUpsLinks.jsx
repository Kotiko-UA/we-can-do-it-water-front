export const PopUpsLinks = ({showLogOut, showSetting}) => {
    return (
        <ul>
            <li>
                <button type ='button' onClick={showSetting}>Setting</button>
            </li>
            <li>
                <button type ='button' onClick={showLogOut}>Log out</button> 
            </li>
        </ul>
    )
}