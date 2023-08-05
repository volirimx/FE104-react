
export interface Tab {
    name: string;
    active: boolean;
}
export const Tabs = (items: Tab[]) => {
    console.log(items)
    return (
        <div>
            {items.map((tab) => (
                <button>
                    {tab.name}
                </button>
            ))}
        </div>
    )
}