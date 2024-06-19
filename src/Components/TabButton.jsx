// export default function TabButton(props,onSelect){
    
//     return <button onClick={onSelect}>{props.label}</button>
// }
// this is also used children funcion to get data
export default function TabButton({children,onSelect,isSelected}){
    return <button className={isSelected?'active':""} onClick={onSelect}>{children}</button>
}