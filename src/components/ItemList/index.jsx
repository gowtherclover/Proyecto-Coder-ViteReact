import Item from "../Item";
export default function ItemCard({productos}){

    return(
        <>
        <div>
        <h1 className="text-blue-500">chauu</h1>
            {productos.map((prod)=>{
                return(
                //console.log(prod.tipo);
                <Item datos={prod} key={prod.id}/>
                )
            })}
        </div>
        <h1>aaa</h1>
        </>
        
    )
} 