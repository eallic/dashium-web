export async function getLevelCount(): Promise<string> {
    try {
        const res = await fetch("/api/level/count");

        const data = await res.text();
        return data || "0";
    } catch (error) {
        console.log(error);
        return "0";
    }
}