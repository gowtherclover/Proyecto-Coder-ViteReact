import ItemCard from "../item";
export default function ItemList({productos}){

    return(
        <>
        {/* grid justify-items-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mx-4 mt-4 xs:mx-none gap-7 */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-[repeat(auto-fit,minmax(0,max-content))] mx-4 mt-4 xs:mx-none gap-3">
            {productos.map((prod)=>{
                return(
                <ItemCard datos={prod} key={prod.id}/>
                )
            })}
        </div>
        </>
        
    )
} 