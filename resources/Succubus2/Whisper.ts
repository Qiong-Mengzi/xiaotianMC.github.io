/**
 * 简单的字符串处理
 */

/* 目前想出来的宏替换格式
    使用 `${宏名}` 来表示宏
    另外，不支持非ASCII可显示字符
*/

// 宏格式
const MacroFmt: RegExp = /\$\{\w+\}/

// 获取宏列表
function MacroNameListGet(text: string): Array<string> {
    let match_table = text.match(MacroFmt)
    if (match_table == null) return []
    for (var i = 0; i < match_table.length; ++i)
        match_table[i] = match_table[i].slice(2, -1)
    return match_table
}

// KMP算法


function MacroReplace(text: string, )

export { MacroFmt, MacroNameListGet }
