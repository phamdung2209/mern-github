import { Javascript, Typescript, CPlusPlus, Csharp, Python, Java } from '../../assets/icons'

function Explore() {
    return (
        <div className="px-4">
            <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
                <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
                <div className="flex flex-wrap gap-2 my-2 justify-center">
                    <Javascript className="h-11 sm:h-20 cursor-pointer" />
                    <Typescript className="h-11 sm:h-20 cursor-pointer" />
                    <CPlusPlus className="h-11 sm:h-20 cursor-pointer" />
                    <Python className="h-11 sm:h-20 cursor-pointer" />
                    <Java className="h-11 sm:h-20 cursor-pointer" />
                    <Csharp className="h-11 sm:h-20 cursor-pointer" />
                </div>
                <h2 className="text-lg font-semibold text-center my-4">
                    <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full "></span>
                    Repositories
                </h2>
            </div>
        </div>
    )
}

export default Explore
