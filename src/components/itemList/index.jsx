import ItemCard from "../item";
export default function ItemList({productos}){

    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid-rows-[repeat(auto-fit,minmax(0,max-content))] mx-4 mt-4 xs:mx-none gap-3">
            {productos.map((prod)=>{
                return(
                <ItemCard datos={prod} key={prod.id}/>
                )
            })}
        </div>
    )
} 