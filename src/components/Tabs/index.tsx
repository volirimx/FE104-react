
export interface Tab {
    name: string;
    active: boolean;
}
export const Tabs = (props: { items: Tab[] }) => {
    return (
        <div>
            {props.items.map((tab) => (
                <button>
                    {tab.name}
                </button>
            ))}
        </div>
    )
}