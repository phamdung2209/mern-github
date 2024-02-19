const SortRepos = ({ onSort, sortType }) => {
    const BUTTONS = [
        { type: 'recent', text: 'Most Recent' },
        { type: 'stars', text: 'Most Stars' },
        { type: 'forks', text: 'Most Forks' },
    ]

    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            {BUTTONS.map((button, idx) => (
                <button
                    key={idx}
                    type="button"
                    className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass hover:scale-95 active:scale-90 transition-all duration-100 ${
                        sortType === button.type ? 'bg-gradient-to-r from-cyan-900 to-blue-900' : ''
                    }`}
                    onClick={() => onSort(button.type)}
                >
                    {button.text}
                </button>
            ))}
        </div>
    )
}

export default SortRepos
