import ItemCard from "../item";
export default function ItemList({productos}){

    return(
        <>
        
        <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mx-4 mt-4 xs:mx-none gap-7">
            {productos.map((prod)=>{
                return(
                <ItemCard datos={prod} key={prod.id}/>
                )
            })}
        </div>
        </>
        
    )
} 