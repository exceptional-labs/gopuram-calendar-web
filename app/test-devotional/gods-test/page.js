import { getDevotionalGods } from "../../../lib/devotional-gods";

export default async function GodsTestPage() {
    const gods = await getDevotionalGods();

    return (
        <div style={{ padding: "40px" }}>
            <h1>இறை வழிபாடு - Gods</h1>

            {gods.map((god) => (
                <div key={god.god_name} style={{ marginBottom: "15px" }}>
                    <h2>{god.god_name}</h2>
                    <p>God Order: {god.god_order}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}