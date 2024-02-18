const SortRepos = () => {
    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            <button
                type="button"
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${'border-blue-500'}`}
            >
                Most Recent
            </button>

            <button
                type="button"
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${'border-blue-500'}`}
            >
                Most Stars
            </button>

            <button
                type="button"
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${'border-blue-500'}`}
            >
                Most Forks
            </button>
        </div>
    )
}

export default SortRepos
