export async function getUserCount(): Promise<string> {
    try {
        const res = await fetch("/api/user/count");

        const data = await res.text()
        return data || "0";
    } catch (error) {
        console.log(error);
        return "0";
    }
}