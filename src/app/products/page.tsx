import CategoryCard from "@/components/ui/categoryCard";

export default function Product() {
    return (
        <>
            <div className="flex relative sm:w-full px-4 flex-col my-24 items-center">
                <div className="flex flex-col mb-8 ">
                    <div className="w-full mx-auto items-center rounded-xl px-20 py-4">
                        <h3 className=" normal-case text-xl font-normal tracking-widest leading-snug">EXPLORE BY CATEGORY</h3>
                    </div>
                </div>

                <div className=" relative max-w-none w-full grid px-4 sm:grid-cols-1 md:grid-cols-2">
                    <CategoryCard imageUrl="/category1.png" slug="/where-it-routes" title="DINING" />
                    <CategoryCard imageUrl="/category2.png" slug="/where-it-routes" title="DECOR" />
                    <CategoryCard imageUrl="/category2.png" slug="/where-it-routes" title="FURNITURE" />
                    <CategoryCard imageUrl="/category1.png" slug="/where-it-routes" title="GARDEN" />
                </div>
            </div>
        </>
    )
}