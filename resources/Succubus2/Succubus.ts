/**
 * emmmm
 * 一些乱七八糟的东西，反正没人看就对了（
 * 我没有写分号的习惯
 */

/* 获取JSON数据 */
async function FetchJSON(json_url: string): Promise<any> {
    const response = await fetch(json_url)
    if (!response.ok) {
        throw new ReferenceError('[Succubus] FetchJSON: Failed to fetch resource. ' +
            String(response.status) + ' ' + response.statusText
        )
    }
    return response.json()
}

/* 获取文本数据 */
async function FetchText(text_url: string): Promise<string> {
    const response = await fetch(text_url)
    if (!response.ok) {
        throw new ReferenceError('[Succubus] FetchJSON: Failed to fetch resource. ' +
            String(response.status) + ' ' + response.statusText
        )
    }
    return response.text()
}

/* 深拷贝，适用于能够被JSON序列化的对象 */
function JsonDeepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj))
}

export {FetchJSON, FetchText, JsonDeepCopy}
