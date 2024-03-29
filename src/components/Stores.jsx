import { storesList } from "../constants";

const Stores = () => {
    return (
        <section
            id="stores"
            className="flex md:flex-row flex-col items-center md:my-[5rem] my-4">
            {/* Title */}
            <h2 className="left-r font-manrope text-[40px] text-dark md:text-left text-center font-[600] md:mb-0 mb-5 flex-1">
                Download Metawork <br className="sm:block hidden" /> From Stores
            </h2>

            {/* Links */}
            <div className="flex justify-center items-center flex-wrap gap-[1rem]">
                {storesList.map((store) => (
                    <a href={store.link} key={store.id} className="right-r">
                        <img
                            src={store.img}
                            alt="store"
                            className="object-contain w-[215px] h-[64px]"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Stores;
