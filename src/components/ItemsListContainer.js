import ItemCount from "./ItemCount"
const ItemListContainer =({saludo})=>{
    return <>
    <h1>{saludo}</h1>
    <ItemCount initial={1} stock={5}/>
    </>
}
export default ItemListContainer;