export async function copyToClipboard(str: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(str)
        console.log("Copied to clipboard ✅")
    } catch (err) {
        console.error("Clipboard copy failed ❌", err)
    }
}