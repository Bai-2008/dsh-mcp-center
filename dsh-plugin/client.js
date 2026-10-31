window.__ModuleLoader__.load({
  id: "dsh-mcp-center",
  factory(require) {
    const React = require("react");
    const { useEffect, useMemo, useRef, useState } = React;
    const h = React.createElement;
    const NS = "dsh-mcp-center";
    const DATA = {"generated_at":"2026-10-31T05:49:36.388Z","count":28,"site":{"origin":"https://bai-2008.github.io","base":"/dsh-mcp-center/","repo_url":"https://github.com/Bai-2008/dsh-mcp-center"},"categories":[{"name":"餐饮","count":2},{"name":"出行","count":7},{"name":"生活服务","count":0},{"name":"办公","count":9},{"name":"开发工具","count":6},{"name":"数据库","count":1},{"name":"搜索","count":2},{"name":"AI","count":0},{"name":"其他","count":1}],"entries":[{"name":"com.baidu/map-mcp","display_name":"百度地图","description":"百度地图官方 MCP，提供地理编码、POI 搜索、路径规划、天气、IP 定位和路况查询。","vendor":"百度地图","categories":["出行"],"official":true,"verified":true,"homepage":"https://lbsyun.baidu.com/","repository":"https://github.com/baidu-maps/mcp","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@baidumap/mcp-server-baidu-map"],"env":[{"name":"BAIDU_MAP_API_KEY","description":"百度地图开放平台服务端 AK，需开启 MCP(SSE) 服务","obtain_at":"https://lbsyun.baidu.com/apiconsole/key","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.baidu__map-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-baidu-map-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@baidumap/mcp-server-baidu-map\"\n      ],\n      \"env\": {\n        \"BAIDU_MAP_API_KEY\": \"<YOUR_BAIDU_MAP_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-baidu-map-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@baidumap/mcp-server-baidu-map\"\n      ],\n      \"env\": {\n        \"BAIDU_MAP_API_KEY\": \"<YOUR_BAIDU_MAP_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-baidu-map-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@baidumap/mcp-server-baidu-map\"\n      ],\n      \"env\": {\n        \"BAIDU_MAP_API_KEY\": \"<YOUR_BAIDU_MAP_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-baidu-map-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@baidumap/mcp-server-baidu-map\"\n      ],\n      \"env\": {\n        \"BAIDU_MAP_API_KEY\": \"<YOUR_BAIDU_MAP_API_KEY>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"BAIDU_MAP_API_KEY","placeholder":"<YOUR_BAIDU_MAP_API_KEY>","description":"百度地图开放平台服务端 AK，需开启 MCP(SSE) 服务","required":true,"secret":true,"obtain_at":"https://lbsyun.baidu.com/apiconsole/key"}],"iconData":"data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAADDDgAAww4AAAAAAAAAAAAAAAAAAOrevUz36sXP+fTl+/n27v352YL9+dV2/fnVdv351Xb9+dV2/fnZgv359u796ffv+77w1c+348pMAAAAAOrevUz+8Mn9//HK///xy///+ur///bg///hkf/+3Yr//t2K///hkf//9uD/7f30/8L32//A99r/v/bZ/bfjykz37MzP//HK///xyv//8cr///HK///56P//89L//eWq//zkqv//89L/6/zz/8L32//A99r/wPfa/8D32v/C8NfP8vLx+/367///+uv///jl///45f//+OX///z0/7Co5f+ro+b/9v75/+H77v/g++3/4Pvt/+b88P/r+/L/8fLx+/Dw8P329vb/+vr6///88///+en///np///55/9qZfL/X2H2/+L77v/l+/D/5fvw/+799f/6+vr/9vb2//Dw8P35+fj9///////////////////////////CwP3/MCz3/zAs9/+9vPz////////////////////////////5+fj9+fn4/f/////////////////////X1/3/PDj3/zAs9/8wLPf/Ojf3/9XU/f//////////////////////+fn4/fn5+P3////////////////q6v7/RED4/zAs9/8wLPf/MCz3/zAs9/9CPvj/6Of+//////////////////n5+P35+fj9////////////////hYL6/0E++P+mpPz/lpT7/5OR+/+wr/z/TUr4/4B++v/////////////////5+fj9+fn4/f///////////////1BN+P9/ffr/Xlv5/6Wj/P+lo/z/fHr6/1hV+f9LSPj/////////////////+fn4/fn5+P3///////////////9QTfj/PTn3/6Ce+/+3tfz/e3n6/2Fe+f9KR/j/TEj4//////////////////n5+P35+fj9////////////////hoT6/zAs9/8wLPf/cG35/zAs9/8wLPf/MCz3/4KA+v/////////////////5+fj9+fn4+////////////////+zs/v9JRfj/MCz3/zAs9/8wLPf/MCz3/0dD+P/q6v7/////////////////+fn4+/f39s//////////////////////7Ov+/4OB+v9MSPj/S0f4/4F/+v/q6f7///////////////////////f39s/q6uhM/v79/f////////////////////////////////////////////////////////////////7+/f3q6uhMAAAAAOrq6Ez39/bP+fn4+/n5+P35+fj9+fn4/fn5+P35+fj9+fn4/fn5+P35+fj9+fn4+/f39s/q6uhMAAAAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAADDDgAAww4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAraeYDuLXuHTv48HH8u/l8fPy8fvz8vH78+fH+/PPcPvzz3D7889w+/PPcPvzz3D7889w+/PPcPvzz3D7889w+/PPcPvzz3D7889w+/Pnx/vz8vH78/Lx++3x7vG/6NHHtNvEdJ6onA4AAAAAAAAAAAAAAAAAAAAAAAAAANXLsED058Pl//HK///xyv//8s3///zy/////////////+ir///be///23v//9t7///be///23v//9t7///be///23v//9t7///be///6Kv////////////5/vv/y/jg/8D32v/A99r/u+3S5a7OukAAAAAAAAAAAAAAAADVy7BA+ezG9//xyv//8cr///HK///xyv//8sz///vx/////////fn//+Sb///fif//34n//9+J///fif//34n//9+J///fif//34n//+Sb///9+f//////9/77/8n43//A99r/wPfa/8D32v/A99r/vvHW967OukAAAAAAraeYDvTnw+X/8cr///HK///xyv//8cr///HK///xyv//8cz///vv////////+uv//+Sb///jmP/+3pD//dmI//3ZiP/+3pD//+OY///km///+uv///////b++v/I+N7/wPfa/8D32v/A99r/wPfa/8D32v/A99r/u+zS5Z6onA7i17h0//HK///xyv//8cr///HK///xyv//8cr///HK///xyv//8cv///rt////////9dn//+em///kov/+4Zv//uGb///kov//56b///XZ///////0/vn/xvje/8D32v/A99r/wPfa/8D32v/A99r/wPfa/8D32v/A99r/tNvEdO/o18f/8s////HK///xyv//8cr///HK///xyv//8cr///HK///xyv//8cv///rr////////8cz//+u1//fkt//24rf//+u1///xzP//////8v34/8X43f/A99r/wPfa/8D32v/A99r/wPfa/8D32v/A99r/wPfa/8L32//O6trH8fDw8f/+/f//+ej///bc///23P//9tz///bc///23P//9tz///bc///23P//9tz///32///++///8Mr/e3Pk/3Bp5///8cr///77//z//f/Z+un/1vrn/9b65//W+uf/1vrn/9b65//W+uf/1vrn/9b65//e++v/+f77//Hx8PHl5OP78/Pz//n5+f/+/v7////////88///++7///vu///77v//++7///vu///77v//++7///vx//779P9HQvP/QDv0//z59P/0/vj/6/zz/+v88//r/PP/6/zz/+v88//r/PP/6/zz/+799f/9//7//v7+//n5+f/09PT/5eTj++Tk4/vv7+//7+/v//Dw8P/19fX/+/v6///78f//99////XZ///12f//9dn///XZ///12f//9NP/0crl/zAs9/8wLPf/tsXz/8j43//S+eX/0vnl/9L55f/S+eX/0vnl/9b55//p/PL/+Pv6//X19f/w8PD/7+/v/+/v7//k5OP78fDv+/39/f/9/f3//f39//39/f/9/f3//v7+/////////fn///34///9+P///fj///34///99/92cvX/MCz3/zAs9/9nafb/9f75//f++v/3/vr/9/76//f++v/3/vr//f/+//7+/v/9/f3//f39//39/f/9/f3//f39//Hw7/vz8vH7////////////////////////////////////////////////////////////////zcz9/zEt9/8wLPf/MCz3/zAs9//FxP3/////////////////////////////////////////////////////////////////8/Lx+/Py8fv//////////////////////////////////////////////////////////+/v/v9LR/j/MCz3/zAs9/8wLPf/MCz3/0ZC+P/s6/7////////////////////////////////////////////////////////////z8vH78/Lx+//////////////////////////////////////////////////////39///YF35/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/1pX+f/09P////////////////////////////////////////////////////////Py8fvz8vH7////////////////////////////////////////////////+/v//21q+f8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/2Zj+f/5+f//////////////////////////////////////////////////8/Lx+/Py8fv///////////////////////////////////////////////9/fPr/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/3d0+v/+/v/////////////////////////////////////////////z8vH78/Lx+///////////////////////////////////////////rav8/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/6Si+/////////////////////////////////////////////Py8fvz8vH7//////////////////////////////////////T0//8/O/j/MCz3/zAs9/9XVPn/iIb6/4uJ+/9YVPn/OTX3/4F/+v+KiPv/ioj7/1NQ+P8wLPf/Ojf3//Dv/v//////////////////////////////////////8/Lx+/Py8fv/////////////////////////////////////sK78/zAs9/8wLPf/dXL6//b2///Dwv3/6+v+/4qI+/+jofv/7u7+/7+9/f/u7v7/gX76/zAs9/8wLPf/p6X8///////////////////////////////////////z8vH78/Lx+/////////////////////////////////////97efr/MCz3/zAs9//S0f3/hYL6/zAs9/+/vf3/ioj7/7m4/P+Tkfv/MCz3/8jH/f+Bfvr/MCz3/zAs9/9zcPr///////////////////////////////////////Py8fvz8vH7/////////////////////////////////////2Rh+f8wLPf/MCz3/8vK/f+Ukvv/MCz3/7+9/f+KiPv/ubj8/5CO+/8wLPf/yMf9/4F++v8wLPf/MCz3/1tY+f//////////////////////////////////////8/Lx+/Py8fv/////////////////////////////////////ZGH5/zAs9/8wLPf/Yl/5//T0///h4f7/9PT//4qI+/+5uPz/kI77/zAs9//Ix/3/gX76/zAs9/8wLPf/W1f5///////////////////////////////////////z8vH78/Lx+/////////////////////////////////////99evr/MCz3/zAs9/8wLPf/QT34/2pn+f/R0P3/ioj7/1hV+f9MSPj/MCz3/1xZ+f9HRPj/MCz3/zAs9/90cfr///////////////////////////////////////Py8fvz8vH7/////////////////////////////////////7Kx/P8wLPf/MCz3/zAs9/8wLPf/MCz3/7+9/f+KiPv/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/6mo/P//////////////////////////////////////8/Lx+/Py8fv/////////////////////////////////////9vb//0I++P8wLPf/MCz3/zAs9/8wLPf/PTn3/zg09/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/89Off/8vH+///////////////////////////////////////z8vH78/Lx+///////////////////////////////////////////tLP8/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/6yq/P////////////////////////////////////////////Py8fvy8vHx////////////////////////////////////////////////k5H7/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/+LiPr/////////////////////////////////////////////////8vLx8e/u7cf/////////////////////////////////////////////////////sbD8/z87+P8wLPf/MCz3/zAs9/8wLPf/MCz3/zAs9/88Off/q6n8///////////////////////////////////////////////////////v7u3H4uHfdP//////////////////////////////////////////////////////////8/P//6uq/P90cvr/Wlf5/1lW+f9zcPr/qKf8//Hx/v///////////////////////////////////////////////////////////+Lh33StqqUO9PTz5f/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////09PPlraqlDgAAAADV09BA+fn59///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+fn599XT0EAAAAAAAAAAAAAAAADV09BA9PTz5f////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////T08+XV09BAAAAAAAAAAAAAAAAAAAAAAAAAAACtqqUO4uHfdO/u7cfy8vHx8/Lx+/Py8fvz8vH78/Lx+/Py8fvz8vH78/Lx+/Py8fvz8vH78/Lx+/Py8fvz8vH78/Lx+/Py8fvz8vH78/Lx+/Py8fvz8vH78vLx8e/u7cfi4d90raqlDgAAAAAAAAAAAAAAAOAAAAfAAAADgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAcAAAAPgAAAH"},{"name":"com.dida365/mcp","display_name":"滴答清单","description":"滴答清单官方 MCP，支持任务、清单、习惯、专注记录、日历和纪念日管理。","vendor":"滴答清单","categories":["办公"],"official":true,"verified":true,"homepage":"https://help.dida365.com/articles/7438132116019216384","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.dida365.com","headers":[{"name":"Authorization","description":"Bearer <滴答清单 API 口令>","obtain_at":"https://help.dida365.com/articles/7438132116019216384","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.dida365__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-dida365-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.dida365.com\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-dida365-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.dida365.com\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-dida365-mcp\": {\n      \"url\": \"https://mcp.dida365.com\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-dida365-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.dida365.com\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <滴答清单 API 口令>","required":true,"secret":true,"obtain_at":"https://help.dida365.com/articles/7438132116019216384"}],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI4MSAyNSUgMzUlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPua7tDwvdGV4dD4KPC9zdmc+Cg=="},{"name":"com.didi/mcp","display_name":"滴滴出行","description":"滴滴官方 MCP，提供打车估价、下单、行程状态、取消订单和地图相关能力。","vendor":"滴滴出行","categories":["出行"],"official":true,"verified":true,"homepage":"https://mcp.didichuxing.com/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.didichuxing.com/mcp-servers?key={key}","headers":[],"variables":{"key":{"description":"滴滴 MCP Key","obtain_at":"https://mcp.didichuxing.com/claw","required":true,"secret":true}}},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.didi__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-didi-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.didichuxing.com/mcp-servers?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-didi-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.didichuxing.com/mcp-servers?key=<YOUR_KEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-didi-mcp\": {\n      \"url\": \"https://mcp.didichuxing.com/mcp-servers?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-didi-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.didichuxing.com/mcp-servers?key=<YOUR_KEY>\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"URL 参数","name":"{key}","placeholder":"<YOUR_KEY>","description":"滴滴 MCP Key","required":true,"secret":true,"obtain_at":"https://mcp.didichuxing.com/claw"}],"iconData":"data:image/x-icon;base64,AAABAAEALCwAAAEAIADIHwAAFgAAACgAAAAsAAAAWAAAAAEAIAAAAAAAQB4AAMMOAADDDgAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABi/w0AZP8cAGb/GQBm/w////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABj/x8AZf9lAGT/pQBl/9AAZP/4AGT//wBk//8AZP//AGT//wBk//UAZf/QAGT/pQBl/2UAZP8h////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAG3/BwBj/2IAZP/EAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP/GAGP/ZwBg/wj///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAFX/AwBj/2cAZP/iAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/5wBl/28AgP8E////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABk/y4AZP/KAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/9MAZP84////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAY/9kAGT/9wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//oAY/92AAD/Af///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAP8BAGX/jgBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+gAGb/Bf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/AQBk/5wAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+wAID/BP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZf+GAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+e////AP///wD///8A////AP///wD///8A////AP///wD///8AAGX/WABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/+QAZP+RAGT/UgBi/zQAZP8XAGT/HABk/zMAZP9PAGP/lQBj/98AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZf9t////AP///wD///8A////AP///wD///8A////AABk/yEAZP/wAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/9IAY/9IAID/Av///wD///8A////AP///wD///8A////AP///wD///8A////AABl/0cAZP/NAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//kAY/8x////AP///wD///8A////AP///wD///8AAGP/tgBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//oAZP9uAFX/A////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAAA/wEAY/9kAGT/9wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/8kAgP8C////AP///wD///8A////AABl/0wAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP/vAGT/Qv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAY/82AGT/5ABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/2H///8A////AP///wD///8AAGT/ygBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/9gBk/zP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAYf8qAGX/8QBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/2wCA/wT///8A////AABi/0EAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AY/9d////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZP9KAGT//QBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/VP///wD///8AAGX/ogBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGX/qv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZP+eAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+z////AABx/wkAZP/zAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//sAYv8n////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABo/xsAZP/1AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//oAZv8PAGL/QQBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/pv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABk/5kAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBl/04AZP+AAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP9U////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAGP/SABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/jABk/60AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/+QBi/w3///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAbf8HAGT/9ABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AY/+2AGT/1ABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZf/V////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZP/TAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/9sAZP/rAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/73///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABl/7kAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/7QBk//cAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/pf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAGT/owBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP/6AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZP+gAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/6D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABk/6AAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/oP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAGT/oABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP+g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAZP+gAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBl/6r///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AABk/6AAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/+QBk/5cAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGP/iABj/4gAY/+IAGX/fABl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP9c////AP///wD///8A////AP///wD///8A////AP///wAAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/1z///8A////AP///wD///8A////AP///wD///8A////AABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/XP///wD///8A////AP///wD///8A////AP///wD///8AAGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP9c////AP///wD///8A////AP///wD///8A////AP///wAAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk/1z///8A////AP///wD///8A////AP///wD///8A////AABk//UAZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT/XP///wD///8A////AP///wD///8A////AP///wD///8AAGT/nABk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP//AGT//wBk//8AZP9c////AP///wD///8A////AP///wD///8A////AP///wAAgP8CAGP/UABl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/3cAZf93AGX/dwBl/yv///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////wAAD///////AAAP//////8AAA///w///wAAD//gAH//AAAP/wAAD/8AAA/8AAAD/wAAD/gAAAH/AAAP8AAAAH8AAA/AAAAAPwAAD4AAAAAfAAAPgAAAAB8AAA8AAAAADwAADgAD/gAHAAAOAA//AAMAAAwAP//AAwAADAB//+ABAAAIAP//8AEAAAgB///4AQAAAAH///gAAAAAA////AAAAAAD///8AAAAAAP///wAAAAAB////gAAAAAH///+AAAAAAf///4AAAAAB////gAAAAAH///+AAAAAAf///4AAAAAB////gAAAAAH///+AAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAAAP8AAAAAAAAA/wAAD///////AAAP//////8AAA///////wAAD///////AAAA=="},{"name":"com.variflight/aviation","display_name":"飞常准","description":"飞常准官方航空 MCP，提供航班搜索、航班动态、中转方案、机舱舒适度和机场天气。","vendor":"飞常准","categories":["出行"],"official":true,"verified":true,"homepage":"https://ai.variflight.com/docs/aviation","repository":"https://github.com/variflight/variflight-mcp","license":"ISC","transport":{"type":"streamable_http","url":"https://ai.variflight.com/servers/aviation/mcp","headers":[{"name":"X-API-Key","description":"飞常准 AI 开放平台 API Key","obtain_at":"https://ai.variflight.com/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.variflight__aviation/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-variflight-aviation\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://ai.variflight.com/servers/aviation/mcp\",\n      \"headers\": {\n        \"X-API-Key\": \"<YOUR_X_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-variflight-aviation\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://ai.variflight.com/servers/aviation/mcp\",\n        \"--header\",\n        \"X-API-Key: <YOUR_X_API_KEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-variflight-aviation\": {\n      \"url\": \"https://ai.variflight.com/servers/aviation/mcp\",\n      \"headers\": {\n        \"X-API-Key\": \"<YOUR_X_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-variflight-aviation\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://ai.variflight.com/servers/aviation/mcp\",\n      \"headers\": {\n        \"X-API-Key\": \"<YOUR_X_API_KEY>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"X-API-Key","placeholder":"<YOUR_X_API_KEY>","description":"飞常准 AI 开放平台 API Key","required":true,"secret":true,"obtain_at":"https://ai.variflight.com/"}],"iconData":"data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAABILAAASCwAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v/9//////7////+//////7//P/9///+//////7/+v/+/////////////f/+//////////////////z+/v///v///f/////////////////8///+///9/////f/+/////v///v///f/+/////////v/////+/////v/////////////////9///////+/////////////f/////////9//7///7////+/////////P7//////////v/////+//3///////////7////////9///////////+///8//3////////+///6//7//////////////////f////////////////////3//////v////7//////v/+/f/////+///+/////////////////v///v///f////v//////v////////3////+/f////7//////v///v////7//////v/////////+//v//v////7//////////v///////f/////+//////7////+//////////7///7//////v/7//////7//////v///////P/9///+///////////+///+///6//7////+///+/////////f///////////////f////3////9//////3///Pp3//HkW7/ypZx/8ePZv/YsJf//f/+//////////7////////+///9//////////3///////7//////////////f///////////v////7////+///+/////////f////3+///9///////////+///9/////f/8//3///////////////z+/v////////////7+/v////7///////7//f/9//7//v/9///////9//7///3////////8//3///7//9m3mv/x5dv////////////Nnn7/7NrJ//7+/v///v///f////3//P///////////////v/+/f////7///z+/v////7///////3////9//7///7//+3f0//Uq4v/7NjN///+/v///v//8+be/86ff//SoYH/8tzQ/9Wqj//fw6v/4cGu/+HCrf////7//////9Wwlv/fvqr/9ubg/+jVxv////////7///7//f/7////6tnM//Tr5//s1sT/+/Hq///+///gxbH/zZl1/9Kqjf/kw7P/27mi//Hh2v/16OD///////r//f/w3db/9ejg//Po4P/Nmnn/6NXG///////+/v7//f////3//v///////////86ff/+1aTX/yJRw//3////9////woZc/7dvP//RqIj/vHhL/7JpN//euaP/wYRc/8GDWv/9/////P/9/7hzQv/EjWb/6s/B/9Kqjf///v7///7///3//v///v//2bSa/+zYzf/VrIz/9OPa/97Cqv/PoYL/+/j0//Ln3//AglT/2LaZ/+LHsv/ozsD///7////////cvab/5s+//+C+p//mzLv//Pz8///////9//7//////////v/7//////z7/7lxQv+zajj/tW86//v28//9////vHtP/7+DWf/8/Pz/69XD/7BqNf/fvab/woVZ/8OFXP////7///7//7VyQf/Dj2f/6dDA/9Kqjf/7//7///7////////9////3bWZ/+vZzv/WqY7/9OTY/8OIYf/89/b////+//3////dw6v/2bSa/+DHs//n0MH////+//z+/v/dvqX/6NHB/9y8pf/oz7////3/////+////v///P7+///+//////7/7NXF/7JpNf/Spof/tWk0/+PKtv///v//3b6l/7VqNv+3dEP/xo1m/7RoN//dvqX/wYVb/8GEWP/9/v///////7lzPv/Fjmf/6M+//9aokP////7//f///////v//////2bOb/+rayv/Sqo3/7eLa/8KBVf/9///////////////q2cz/3LOc/+DIsP/n0MD////+/////v/fvab/5NC//+G8qP/k0L7//v/9/////////v/////+//3//v//////0KOC/7RpNf/47+v/uXFB/8mZdf////7/7d/T/+PIs//p1sf/0aOE/7RqNP/fvab/wYVb/7ZxP//48u3//////7Z0Qf/EjmX/6c/B/8OIYP/Ytpn/2rSc/9uzmv/pz8H/2rWb/+zZzP/Xq47/8OTa/8OEWP/9+vz////////////lx7b/2LSc/+LHs//jxbL////+/////v/au6L/6dLD/9y+pf/pz8H//f////3///////7///7///3//v/9/P7/uXVI/8KGXP/7////y5l1/7ltPf/9+fj/1rOZ/7FpM//YsJf/zZd4/7RpNf/hyrr/w4Vc/7NqNv+5cUH/0aOE/7lxQf/EkGj/6M7A/86adv/t2c7/7tjM/+rZzP/y5uD/17Sa/+rayv/Sqo7/8uTY/9evlv/UrY3//fv6//fu6v/CiVz/2bSa/+HGsf/CjGP/+fTz//3+/P/Jk3D/8eTc/9q5n//kybX///z4//3///////7///7////////q2sn/smo0/9aukf///v//38Kt/7BpN//kzb7/+fXw/9CdfP+5e0v/vn1Q/9Oqiv/++/f/zJt7/9Gkg//On3//y5Zx/8mVcf/TqYz/5tHC/9Sri//9/f///P/9/////v////7/27Oa/+/Zzf/jybj/9u3p//37+v/Vs5b/yZBp/8+hgv/s2cr/5tC+/9/Htf/gwK3/06SE/8mVcP/hw7L/8ePX/8KHX//Gj2j/8N3Q/+rdzf+8ekr/uHFF/+HJtf/Tqor/tGg0/+vYy///////9u3k/7RqNP/Mn3r//v3///7+/v/////////+//3+///////////////////+/f/////+/9iwlP/gwKn/6dG//9Sqjf////z//f/////8//////7/2rWb/+vZzv/38+7//fz4///+/////v////7////+/////////f///+HJs//p0MD//v/9/////////v///////9y9qP/n0MD//v7+/8eMZP/OmXj/zJd2/7pzQf+5eEv/tG8+//78+//+/v7//v/9/75/U/+4cED//f33//3//v///P////7////////9///////8/////v////7//P/7/7VxRP/Hj2b/6dDA/717S//EjWj/xo5l/8eOZ//Hj2b/2LSc/+/ay//QoYL/9eLb/////P/8/v7////+/////v////7///7//+HGsv/l0MH////+///////////////+//fq4v/58Oz//f///8OMZf/UrJD/17GT/7ZzQv///v/////8//z+/v/9//////////z+/v/9//////////z+/v///v/////8//v+//////////7////+///+/v7///7///r18v/9+Pf//f/////+/////////f/+//7+/v/8/v///f7//////v///////P7+/////////////v7+//3////9//////7//////////v3////////+/v///v///f/////+/////v/////+/+3d0P+8eEn/tHFA/+LJtf/////////////////+/v7////+///9///9//////79///+///9/////P/9//////////////7////////9/////f/+///+///////////+//////////7//f/////+/////v/////+///////+/v7//f/+//7+/v////////7///79///9/////v7+//3//////v///f///////v////////7//////////v7////////+//////7//v7+///+///////////////+/v///////v/7///+///////////////////8/v7///////7+/v///////f/////+///9//////////79///9//7////+/////////f///f////3//v/////////+//z+/v/9/////v7+/////////v///f///////v///v////////3//P///v/////////////////////////////9/////f///////v/9//7///7///3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},{"name":"com.amap/mcp","display_name":"高德地图","description":"高德地图官方 MCP，提供地理编码、地点搜索、路径规划、天气与出行服务。","vendor":"高德地图","categories":["出行"],"official":true,"verified":true,"homepage":"https://lbs.amap.com/api/mcp-server/summary","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.amap.com/mcp?key={key}","headers":[],"variables":{"key":{"description":"高德开放平台 Web 服务 Key","obtain_at":"https://lbs.amap.com/api/mcp-server/create-project-and-key","required":true,"secret":true}}},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.amap__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"URL 参数","name":"{key}","placeholder":"<YOUR_KEY>","description":"高德开放平台 Web 服务 Key","required":true,"secret":true,"obtain_at":"https://lbs.amap.com/api/mcp-server/create-project-and-key"}],"iconData":"data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAD/gIAC/52AAv/fcQL/mk0D/5hABOvKVAThymYF/rZbBtmjWwfltHMI7bR2CeXBZwrcslgM9LlVDPK4WQ78vV8Q/cBhEPDHWBLrylsU/MZiFfG7XhfqwV8Z9MNgGfW/Yhr2wmIb9r9jHOm3XB/tu1sf8LpfIPW4YCD2vmAg9r9gIPa/YCD2vmAg77hgIO63XiDtuVwf9MFfHem8WxzovV4b9sJhGfO6YBjxvWEW8cZjFfHJYBPxxV0S+79eEPKzVBDrv14N7L9YDPzMZQr823MJ/bh3CP6uXQf9z1gG6LNnBeatVwT8t0sD+6lUA//gcAL/n4EC7cY2Afv+AQH//wAB/52AAvzbcgL2nk8D/5dCBP/WWAT/5nME7a1XBt+aWAjwsmQI7MVrCeXHaArrtFoL9bJIC+WmPw35sToO87BHD/y+WRDwwFES7LVMFPa5Shb4u1IX7sBSGPK/Uhruu1Ic971QHfm+VB71u1Mf9bxWH/S9VyDwuVYh8LlWIfC6WSHwul0h9L1eIPC6XiD3vlof/btdHva8XR7qwVwd8cJZG++6WRrvwF4Y+rlfFumqVRbqu1oT8MVkEe+/WA/5t1YO7qJODeWjUgvppksK48pdCerWcwnzs2kI7aNIB/+7XAb7w3IF2rtYBOiySgP21mwC+qp/AqqFfQLk4R4B//8AAenecALon08D1pc/BP/VTgT85XME97ldBu6lXQfusXEI7sV2CeTFYgrppTcJ96xICvHXqR345MMx9eTEOfTmwz3z4r1A8t25QfXfuULw3bVE896yRfHdr0fz261I8turSfTbrEr4369J+d6vSvjcrEr126tL+NutTPndrEz52ZVN+dJ4TvfSdE761HVN+dV1TPnRdUv71XZK/NZ2SfrVd0n413hH+dZ4RvrXekT92XtC+tV5QvrbfD/73oA++91/PP7ahTv43Io3/OKYMPfgmx7r1IEK6ahUBvyhTwf8u1EG6bNnBeqxUQT/tEoDzalWA+jjcwL/mYAC/t4fAf//AAHApFID1IhABPvHQAT16VME9cNfBeGlWQfxrXMI9sx8COK6Pgfuu2cM9+bKLPPo0kr17+CQ9fHl1fXx5O/08OH58+7e/fPu3v7y7d3+8ezb/vLs2v7z7Nr+8uvZ/vLq2P707Nj8+vLh9v705vT99OX0/fTk9P305PT98+H0/eu4+P3ihf3+4oH+/uGC/v7ggv794IL+/eGB/v3hgv794YL+/eKC/v3jgv7+44P+/uOD/v/khP7+44T+/uSF/v7lhv7/5Yv6/ueQ8v3omN3+6pue/uiSUf7qoC/506MO3GQLBPu8WQX/yFsE8rZOA/irUwP/5HQC/pmAAte+QAH4+gUB/6RSA/+aQwT30VcE4MdkBfezWQb/rmkI/8V+CP/FAgT25cUh9e3cWvTw5L3z7+P68e3i//Hu4P/y7t//8uzc//Ls3P/y7Nv/8eza//Hr2f/y69j/8erW//Hq1v/y6tX/9OvX//vy4f/99OT//fTj//zz4v/98uL//fLf//3ptv/833///d57//zee//+4Hz//uB8//3ffP/9333//d99//3gfP/+4X3//uF9//7hff/+4n7//uF+//3ifv/+43///uJ////jf//+4n7//uR///7mhv7+6ZbO/+mca/zhnSfZr1EF7KpdBNq7VgTusUsD589pAvaSfQKzgH4C7OYZAf/LUgP/20gE/ONyBOiyWgbmmmAI/Lp6CPviUgf37tAs9fHknvPw5PTx7uL/8e3h//Hu4f/y7t//8uzd//Lt3f/x7Nv/8uza//Lr2P/x6tf/8urW//Lq1v/y6tX/8unT//Pq1P/68N7//PPh//zz4P/98uD//vPg//7z3//96rX//d9///3ee//83Xr//d57//zee//93nv//t99//3eff/9333//eB8//7hff/94X3//eF+//7hfv/+4X3//eJ///7jgP/+4n///uJ+//7jf//+5H///+R////nifz/6Ja0/OWcPerNognqlhMD/7JOA9OoVQPvq3UC/4l+Av/mGAH75EwE6+VVBPXHXwXcqlYH8qhwCPrWcQj28dg49fHmufLw5f/x7uL/8e7i//Hu4f/y7t//8uzd//Lt3f/y7Nv/8evZ//Lr2P/x6db/8enW//Lq1f/z6tT/8unS//Ho0P/z6dL/+vDb//3z3//88t7//PLe//zy3v/88tz//Omy//zffv/83nv//t97//3ee//83nv//d17//zee//933z//t99//3fff/94H3//uF9//3hff/+4X7//uJ+//7hfv/943///uOA///jf//+4n///+SA//7kgP//5ID//+SE///njsv/7J9P/+alCv+wCgL/s1cD/+d1Av+VfgL/5RgB+79DBOjIZAX2t18G5attCP+AAwT38tku9PLmu/Lv5P/x7uL/8u7i//Hu4f/y7uD/8uzd//Ls3f/y7Nz/8uza//Lr2P/y6tb/8unV//Lq1f/y6dP/8ejQ//Hnz//x6M//8+nR//nv2v/88t3//PHc//zw2//88dv//PDZ//zosf/93X3//N16//zdev/73Xr//d57//3ee//93nr//d57//7ffP/+333//d99//7gff/+4X3//eB9//7hfv/+4n7//eJ+//7jgP/+43///uJ///7kgP//5ID//uSA///kgP//5YH//+mO0f/roUTn448E9LNFA//mdgL/lX4C/+UYAf/BZAT7yGEF7K1ZB+x9RQX17NIi9fLmpvLw5f/x7uL/8u7i//Hu4v/x7uD/8e3d//Lt3f/x7Nz/8eza//Lr2P/y6db/8unV//Lq1f/y6dP/8efR//Lnz//x587/8efO//Poz//57tf//PDc//3x2//88Nr//O/a//3v2f/96LL//dx9//zcef/93Hn//Nx6//zdev/93nv//d57//3ee//933v//d98//3fff/94X///uJ+//3hff/+4X7//uF+//7ifv/+43///uJ///7if//+43///uR////kgP//5YH//+SA///mg///6JO+/uuiKfz//wD/5nQC/5WBAv/ligH/xW4F+LRfBuGjZQf/1qoN9fLjZvLw5frx7uP/8e7i//Hu4v/x7uH/8u3e//Lt3f/y7Nz/8ezb//Lr2f/y69j/8enW//Pq1f/z6tP/8efQ//Ln0P/y6M//8ebN//Hly//0587/+e3W//zv2f/88Nn/++/Y//vv2P/779f/++ew//vcff/823r//dx6//3cef/93Hr//N56//zee//93nv//N57//3fff/9333//cle//7OZP/933n//eF9//7ifv/+4n7//eJ///7jgP//43///uN///7kgP/+5ID//+WB//7kgP/+5ID//uWG//7qnYr+57AT/9gLAfyUggKtm6EC/MpiBemvVgfvekIF9e7ZLvXy58rx7uP/8e7i//Hu4f/x7eH/8u7f//Lt3v/x7d3/8ezb//Hr2v/x6tf/8erW//Lq1f/y6dP/8ejR//Lnz//y58//8ebN//Hly//x5cv/9OfM//ns1P/879f//O/X//zu1v/87tb//O7V//3nrv/73Hz/+9x5//vcev/83Hr//dx5//zdev/83Xr//N57//zfff/802v//rM///6WF//+sTz//tt0//3hff/+4X7//uF+//3ifv/+44D//+N////jf//+5ID//uSA///kgf/+5ID//uSA//7kgP//6JDp/+qaOf9//wD6j38CjH5+At6xWQbhpFgH/9KjDPXy4l3y8OX/8e7j//Hu4v/x7eH/8u7h//Lt3v/y7d3/8uzc//Hr2v/y69n/8erW//Hq1f/y6dP/8ejR//Hnz//x587/8ebN//Hmy//x5cr/8eXJ//Pnyv/57NP//O7W//zu1f/87tX//O7V//zu0//85q3//Nx7//zceP/73Hn//Nx6//zcev/83Hn//N17//zZdf/9vk///p0h//6KBv/+hAD//qAk///Xb//94X7//eF+//7ifv/94n7//uOA//7jf//+43///uSA//7kgP/+5ID//+SB//7kgP/+5IH//+aD///rnoz367ET3ChCAY6AgAL1qFoG+ZFfB/nr1SD18+et8e7j//Hu4//y7uL/8u7h//Hu3//y7d7/8ezc//Ls3P/x69r/8erY//Hp1v/z6tX/8ejS//Lo0P/y587/8efN//Hly//y5cv/8ubK//Lnyv/wzqz/9dGx//vq0P/77tT/++3T//vs0v/77dL//Oas//zce//823j//Nx4//vcef/83Hr//Nt4//3JX//9pCv//o0L//6FAf/+hAD//oUA//6QD//+0mr//eJ+//7hfv//4n7//eJ+//7jgP/+43///uN///7kgP//5ID//uSA///kgf//5ID//+WB///lgP//6pva+umjKAAAAACOgIAC5bFRB/2IUgbz7dgw9PLo6fLv4//x7uP/8e7i//Lu4f/x7d7/8u3d//Ls3P/y7Nv/8uvZ//Hq1//x6db/8unT//Ho0f/y58//8ufP//HmzP/y5cv/8+bK//LlyP/y6Mv/8bKB/95oN//tup3/++/W//vs0v/77NL/++zR//vkq//72nv//Nt4//vbeP/823j//NJr//2vO//+kRH//ocD//6EAP/+hQD//oUA//6FAP/+hgL//stg//ziff/+4X7//+J+//3hfv/943///uN///7jf//+5ID//+SA//7kgP//5IH//+SA///lgf//5YD//+eJ+vvnkTWhAKYBjH1/AsqkSAj/qkwG9O/XNfPx5vzx7+P/8e7i//Ht4v/x7uH/8u7e//Ht3P/y7Nv/8uza//Hr2P/x6tb/8urW//Lp0v/y6NH/8ebO//Hmzf/y5sz/8ubK//Llyf/x5Mj/8uTG//KZW//WOwH/1GNC//POsv/77tP/++zR//vs0P/75Kv/+9t6//zbd//71nH//b1O//6YGv/+iQX//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//69TP/933n//uF+//7hfv/94X7//eN///7jf//+43///uSA///kgP/+5ID//+SB///kgP//5YH//+WA///lgf/965xZ+dq/B3prdQLhokgI/7heBvTu1zry7+T+8u/j//Lv4v/y7uL/8e7g//Lt3v/x7Nz/8ezc//Lr2v/x6tf/8unW//Pq1v/x6NH/8efP//Hnz//x5sz/8uXL//Llyf/x5cj/8ubK//LOp//yfjf/3EEA/8MsCv/dh2v/+N/E//vt0v/87ND//OWr//vYd//8yV///aIo//6KB//+hgH//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+rTb//dt1//7hfv//4n7//eF+//7jgP/+43///uN///7kgP//5ID//uSA///kgf/+5ID//+WB///lgP//5YH//eyjfvvkuw5gUWkB/Z9dCP7VpQz18eFX8e7j//Hu4//x7uH/8e3h//Ht3//y7d3/8u3c//Hs2//y69r/8erX//Hp1v/y6tT/8ejR//Loz//x5s7/8ubM//Hlyv/y5cj/8uXI//Hnyv/xtIT/8WUV/+JIAf/FLQj/wS0S/+ami//66M7/++rL//vZmP/8rz7//o4M//6HAv/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//p0h//zZcf/+4X7//+J+//3hfv/+44D//uN///7jf//+5ID//+SA///kgf//5IH//uSA//7kgf//5YD//+WB///uppv+6bgTRzdkAf+eXQj32KsO8+/fY/Lu4//x7+P/8e7h//Hu4P/x7d//8u3d//Ls3P/w69r/8erZ//Lq1v/y6dX/8enT//Lo0f/x587/8ubO//LmzP/y5cr/8+XJ//LlyP/x4cP/8Jpe//BTAP/oTwH/yTEI/7wiCv/HPyH/8b6b//zIh//+mCP//ocE//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//+PDP/91W3//eF+///ifv/+43///uOA//7if//+43///uOA//7kgP//5YH//uSA//7kgP/+5IH//uWA///lgf//7qWj/+q1FeCm9gD8plwI7NykD/Lv32Ty7+P/8u/j//Dt4f/x7uD/8u3e//Lt3f/y7Nz/8eva//Hq2P/y6tb/8unW//Lp0//y6NH/8efO//Lmzf/w5cv/8ubJ//LlyP/y5sr/8s2n//B+OP/wUgD/7lMA/80zB//AKQn/zDwH/+53Ff/9hgb//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hgL//ctg//7gfP/+4X3//eN+//7if///437//eN+//7kfv/+5H///+R////kf///5H///uSA//7lf///5YD//+2ko//ptRX/vQAA/MFcCOzooQ708OFh9PHm//Tx5v/y7+T/8/Dj//Tv4f/z7t//9O3e//Ls3f/y7Nr/8+zZ//Pr2P/z6tb/8+nT//Po0f/z6ND/8ufN//PnzP/z5sr/8+jO//K3if/wYhH/8FQA//FWAP/YQQX/3VME//h8Af/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oYC//++Uv/+4on//uSO//7mj//+5o///+aP//7nj///6JD//+iR//7okf//6JD//+mR///pkf//6ZL//+mS///vrp3/6roU/8IAAPzCXgjs5ZEM+/TnVfz58v/8+PL/+/fw//v37v/79u3/+vXr//v06f/59Oj/+fPl//rz4//68eP/+fDg//nw3v/579z/+e7a//ru2P/57db/+e3V//jnzf/0n2j/8FEA//BVAP/wVQD/7lsB//h5Af/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6GAv/+slX//uzG//3z0v//9dT//vTU//701f//9tf///fY//732f/+9tn///fZ///42v//+Nr///jb///42///+d+C/+3XD//MAAD8wl8I6dyGC/z26U///Pf///z3//779f/++/T//vny//758P/++O7//ffs//736//+9+n//fXm//315f/99OP//PPg//zx3v/98d3//PDc//zy3f/617f/8386//BSAP/wVQD/8FUA//BVAP/zZgL/+38B//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQH//qE5//7x4P/9+vT//vr1//769f/9+/b//vz4///9+v///vv///38//79/P///f3///79///+/v/+/v7///7+dvnt6wztzgAB/LFfCOjHhwv8+OpO//z3///89v/++/T//vv0//758v/++fD//vju//337f/+9+z//fbp//315//+9eb//fTj//zy4f/98t///PHe//zy4P/97tX/+byI//FpHP/wUwD/8FUA//BVAP/wVQD/8VcB//dvA//9gwH//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6PFf/969T//frz//779P/++vX//vz3//78+P/+/fn///36///9+v/+/fv//v38//7+/P///v3////+///9/Xb08eoM3uMAAf2eXwjxw40L/PfqTv/79//+/Pb//vv0//769P/++vP//vnx//347//++O7//vfs//z16f/+9uj//vXn//3z4//98+L//PPi//3x3f/92q3//blp//yWLf/2dhn/8V0M//BUAP/wVQD/8FUA//BVAP/xWwL/+XcD//6EAf/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+iAj//t22//768v/++/X//vv2//789////fj//v36//79+v///fr///78///+/P///v3///79/////v///f12//zpC///AAD/oGEI/c6UCv757U7/+/n///z4///79v//+vb///r1///58///+fH///nw///47v//9uz///bq///06P//9ej//vXl//3hvP/+vnT//p0w//6GA//+hAD//YUK//Z4HP/xXQ3/8FQA//BVAP/wVQD/8FUA//NgA//7fQP//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//ogG//7Ii//++O////v2///89////fj///35///9+////fv///37///9/P///v3///79///+/v////7///39dv/86Qv//wAA3J9OCP/Qngrc+NhOxvjV/8f41P/I+NT/yPfT/8j30v/I9tH/yfbP/8n1zv/K9M3/y/PM/8ryy//K88v/1ea1//DCd//9oTr//okJ//6DAP/+hQD//oUA//6FAP/8hgv/8nkb/+5eDP/wVAD/8FUA//BVAP/wVQD/9GcE//2CA//+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6HBP/8sFz/9+/g//fz6v/28+v/9/Xs//f17v/39e//9/Xu//f27//39vD/9/fx//f38f/39/L/9/by//r593/9/OsN//8AANKtRwf/z6UKwvXKTp32vP+e9rz/nvW7/5/1uv+g9Lr/ofO4/6LzuP+i8rf/o/K2/6Lyt/+q6qr/x8du/+OjMv/2jAz//oMA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//uFCv/0eh7/8V4N//BUAP/wVQD/8FUA//BXAf/2bwb//oUC//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hgH/+5su//Hn1v/x7+P/8e/k//Hv5P/x8OX/8e/m//Hv5v/x8Of/8fDo//Hx6P/x8ej/8fHp//Lx6f/39/OG/PzsDv//AAD2xlMG/7+nCsT1zU6g97//oPW9/6H1vv+i9bz/ovS8/6P0u/+k9Lr/pPS6/6bvtP/B0H//46g6//WQEv/+hAH//4QA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//YYK//Z8If/xXgz/8FQA//BVAP/wVQD/8VsC//h3CP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2OEv/y4sj/8u/k//Hv5P/x7+X/8vDn//Hv5v/y8Of/8vHo//Lx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AP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2KDf/1hyn/8GMR//BTAP/0agr/+4QK//6GAf/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9jhP/9c+e//Hx6v/y8er/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8er/8vLr//Ly6//39/WF/Pz9Dfr6+gD3dXYC/8vKBcD40kqe+cH/nvjA/533wP+e+MH/nvjB/574wf+f98D/n/fA/6D3wP+g98D/n/fA/6D3v/+g9r7/ofa+/6D2vv+h9r3/ova9/6H2vv+f98H/qO2u/8LOev/jrkb/+pAU//6DAP/+hAD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//IoO//WHJ//xYxH/8FUC//VxC//9hQb//oYA//6FAP/+hQD//oUA//6FAP/+hQD//YoM//i7dv/y8uv/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8er/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voA/3AwAv/K5QTA+tRKnfnB/574wf+e98D/nvjA/575wf+e+cH/nvjA/5/3wP+f97//n/e//6D3wP+g98D/oPfA/5/2v/+g97//oPe//6D3v/+g9r7/oPW+/6D3v/+e+MH/vOy3//DRl///r1j//o4S//6DAP/+hAD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9ig7/9YYn//BiEv/xWQP/93gM//2GBP/+hQD//oUA//6FAP/+hQD//oUA//6HBP/6qU3/8vLr//Ly6v/y8ur/8vHq//Ly6v/y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP+hAAH/x8UEwPrVSZ35wv+d+MH/nvjB/573wP+e+MD/nvnB/574wf+e98D/n/fA/5/3wP+f98D/n/e//6D3wP+f98D/oPfA/6D3wP+f9r//n/a//6D3v/+g97//nva9/7b5zv/s/fH//+/e///Uov/+r1f//osO//6DAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//yKDv/2hSf/8GER//FcBP/5fQr//oYC//6FAP/+hQD//oUA//6FAP/+hAD//Jsu//Lu4P/y8ur/8vHq//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WF/Pz9Dfr6+gD/9QAB/+PGA8D400md+cL/nfnC/535wv+d+MH/nvfA/573wP+e+cH/nvnB/574wf+e98D/n/fA/5/3v/+f98D/n/jA/5/3v/+f97//oPfA/5/2wP+g98D/oPfA/573v/+3+c7/7fzv///+/v////3//+/d///Vpv//rlb//ooK//6EAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//YkO//aFJ//wYBD/8mIG//uACf/+hgH//oUA//6FAP/+hQD//oQA//yUIP/03sD/8vLr//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voA//8AAf//3QPA+tNJnfjB/535wf+d+cL/nfnC/534wf+d+MH/nvfA/574wP+e+MH/nvjB/574wf+e+MH/n/fA/5/3wP+f97//n/fA/5/3wP+f98D/n/jA/5/4v/+d+L7/tvnN/+z97////vz////7/////v///vz//+7c//3Up//6qEz//okH//6EAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9iQz/9oUp//BhDv/zaAf//IMF//6FAf/+hQD//oUA//6EAP/9jxb/9syZ//Hy7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP8oAAH//94DwPvVSZ35wv+c+MH/nfjC/535wv+d+cL/nfnC/534wf+d98D/nvfA/573wP+e+MD/nvnB/575wf+e+MH/nvjB/573wP+e98D/n/fA/5/3wP+f98D/nfe//7b5zv/s/O////78///++////fv///37//7+/f/8+/j/9OXO//XPnv/6pkf//ogG//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2IC//2hSn/8WIO//VwCP/9gwP//oUA//6FAP/+hQD//YsM//i7c//y8+3/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WF/Pz9Dfr6+gD+AAAB/8jeA8D71Umd+cL/nfnC/535wv+d+MH/nfnC/535wv+d+cL/nfnC/535wv+d98D/nvfA/573wP+e98D/nvfB/574wf+e+MH/nvnB/575wf+e+cH/nvnB/534wP+1+s//7P3x/////v////3////9/////f////3//Pz6//Pz7P/y7+b/8+TO//bNnP/6o0H//ogG//6FAf/+hQD//oUA//6FAP/+hQD//YcK//WGK//xYw3/93cJ//2EAf/+hQD//oUA//6GAv/6qEz/8vPu//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voAAAAAAP+24wPA+NVJnfjC/535wv+d+cL/nfnC/535wv+d+MH/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfjB/533wP+e98D/nvfA/573wP+e98D/nvfA/574wf+c+MD/tfrP/+z98f///f3///38///9/P///fz///38//z7+P/y8en/8fHp//Ly6//y8Ob/8+fS//bNm//7oTz//ogH//6GAv/+hQD//oUA//6FAP/9hwj/9YYs//JkDf/5fAf//oUB//6FAP/+hAD/+50z//Pr3f/y8uz/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP///wD//P8Cv/rXSJ34wv+d+ML/nfnC/535wv+d+cL/nfjB/534wf+d+MH/nfjC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfjB/534wf+e+MH/nPjA/7X6z//s/fH///7+//7+/f/+/v3////+/////v/8/Pr/8/Lr//Ly6v/y8ur/8vLq//Ly6//y7+b/8+fU//bLlv/7njb//okJ//6GAv/+hQD//oUA//2GB//1hi3/8mkN//yCCP/+hQH//oQA//yWJf/13Lv/8vPt//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WE/Pz9Dfr6+gD///8AAOIAALD6zzqd+cP/nfnD/534wv+d+ML/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/5z4wv+d+ML/nfjC/534wv+d+ML/nfjC/535wv+d+cL/nfnC/5v5wf+1+tD/7P7y//////////7///7+///+/v///v7//Pz6//Py6//x8er/8vLr//Ly6v/y8ur/8vLq//Ly6v/y8Ob/8+nW//fJkf/8nDL//YoL//6GAv/+hQD//YYG//WHLv/0bw7//YME//6EAP/9kBj/9suW//Lz7v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/+Pj1df///wr8/PwA////AKD6xQCk+scvofrG/p35w/+d+cP/nPjC/534wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nPjB/5z4wv+d+ML/nfjC/534wv+b+MH/tfrQ/+z98v///v////7+//7+/v/////////+//z8+v/z8+v/8vLq//Ly6v/y8ur/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8Of/8+nX//fGi//8nDD//YsO//6FAf/9hQX/9YYs//Z2D//9hAH//ooL//i5cf/y9O//8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//j481v///8G///7AAAAAACs+s0ArvrNLan6yved+cP/nfnD/535w/+d+cP/nfjC/534wv+d+ML/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/m/nB/7X60P/s/vL//////////v////7////+/////v/8/Pr/8/Pr//Ly6v/y8ur/8vLq//Ly6v/y8er/8vHq//Lx6v/y8uv/8vLr//Ly6//y8er/8+jW//fChf/8mzH//YwP//2FBv/2iCz/+YMX//6GAv/6qU7/8vPt//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly7P/29vFA////Af///wAAAAAAu/vWAL782CSz+9HUnfnD/535w/+d+cP/nfnD/535w/+d+ML/nfjC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/5v5wf+1+tH/7P7z//////////7////+/////v////7//Pz6//Pz6//y8ur/8vLq//Ly6v/y8ur/8vHq//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8+fT//jAgP/7nDL//I0W//eIKP/7iBX/+6A6//Pp1//y8+z/8vLr//Ly6//y8uv/8vLr//Ly6//19e7y9vbwLPX18AAAAAAAAAAAAMf93QDR/uQPtfvShZ75w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uz/8+XQ//i/fP/6njz/+JAy//qcOf/12LP/8vPu//Ly6//y8uv/8vLr//Ly6//y8uv/9vbwvPj49B339/MAAAAAAAAAAADP//YAlfixALD70Tyn+snznPnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7P/y8uz/8+PL//fAgv/2r2v/9c6g//L07v/y8uv/8vLr//Ly6//y8uv/8/Ps//b28WX8/PsH+fn2AAAAAAAAAAAAAAAAAMP82wDK/eAXs/vRm5/5xP+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7f/y8uv/8+TN//PgyP/y8+3/8vLr//Ly6//y8uv/8vLr//X178P39/Mm9/fyAAAAAAAAAAAAAAAAAAAAAADq//8Ap/rGALX70jip+srbnfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7f/y8+3/8vLr//Ly6//y8uv/8vLr//T07fL29vFa/f3+BPj49gAAAAAAAAAAAAAAAAAAAAAAAAAAAMz+3wDc/+gLufzUbKb6ye2c+cL/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7P729vCO+Pj2FPf39AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxfzdAM394hO3+9SEpvrJ85z5w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7f/29vCi+PjzHvf38gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD/NoAyP3dFrn81Hin+snhnfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7fP29vCT9/fyHPb28gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMz+4ADT/uUPuPzUTq/7z7+j+sf8nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLs//T079P29vFn+PjzFvj48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3v/rAOz/9AS+/dghtvvTZbP70cSo+sn4nvnE/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//z8+379fXv1fb28Hv19fEo+vr5Cvn59wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1f3oANf96QnB+9kfrfrNLb/82FnJ/d2By/zemsz84K3N/OGxzfzhsc384bHN/OGxzfzhsc384bHM/OGy2PznrPT++KD///+c////nP///5z///+c////nf7+/qD6+vaw+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWv+Pj1n/f39If39/Rk9fXvM/f38ST7+/UO+vr0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wD9//8G8P/1Den+8BHl/e8V5v3xFub98Rbm/fEW5v3xFub98Rbm/fEW5f3xFuv98xX5/vsS////Ev///xL///8S////Ev///xL///8S/f37Ff39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Ffz8/BL8/PsO////CP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAYAAAAAAAAABwAAAAAAAAAHAAAAAAAAAAcAAAAAAAAABwAAAAAAAAAPAAAAAAAAAA+AAAAAAAAAD4AAAAAAAAAfwAAAAAAAAB/AAAAAAAAAP+AAAAAAAAB/8AAAAAAAAP/4AAAAAAAB//wAAAAAAAP//wAAAAAAD///4AAAAAB////////////8="},{"name":"cn.mcd/mcp","display_name":"麦当劳中国","description":"麦当劳中国官方 MCP，支持门店查询、餐品与优惠券查询、价格计算及外卖下单。","vendor":"麦当劳中国","categories":["餐饮"],"official":true,"verified":true,"homepage":"https://open.mcd.cn/mcp","repository":"https://github.com/M-China/mcd-mcp-server","license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.mcd.cn/","headers":[{"name":"Authorization","description":"Bearer <麦当劳开放平台 MCP Token>","obtain_at":"https://open.mcd.cn/mcp","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/cn.mcd__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.mcd.cn/\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <麦当劳开放平台 MCP Token>","required":true,"secret":true,"obtain_at":"https://open.mcd.cn/mcp"}],"iconData":"data:image/x-icon;base64,AAABAAEAPDwAAAEAIABIOgAAFgAAACgAAAA8AAAAeAAAAAEAIAAAAAAAIDoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIcj/FyXE/6AlxP+gJcT/oCXE/6AlxP+gJcT/oCTD/40AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkw/+NJcT/oCXE/6AlxP+gJcT/oCXE/6AlxP+gIcj/FwAAAAAAAAAAIsT/HiTE//8kxP//JMT//yTE//8kxP//JMT//yTE/+sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/rJMT//yTE//8kxP//JMT//yTE//8kxP//IsT/HgAAAAAAAAAAI8X/FiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/0JMT//yTE//8kxP//JMT//yTE//8kxP//I8X/FgAAAAAAAAAAJMj/DiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7D/xEox/8gKMf/ICjH/yAox/8gKMf/ICjH/yAew/8RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/+JMT//yTE//8kxP//JMT//yTE//8kxP//JMj/DgAAAAAAAAAAK9X/BiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8gv/8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/44kxP//JMT//yTE//8kxP//JMT//yTE//8kxP+OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC//wgkxP//JMT//yTE//8kxP//JMT//yTE//8kxP//K9X/BgAAAAAAAAAAAAAAACTE//4kxP//JMT//yTE//8kxP//JMT//yTE//8rxv8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXF/5kkxP//JMT//yTE//8kxP//JMT//yTE//8lxf+ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvG/xIkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/+AAAAAAAAAAAAAAAAAAAAACTE//YkxP//JMT//yTE//8kxP//JMT//yTE//8kyP8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/6QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP+kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTI/xwkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/2AAAAAAAAAAAAAAAAAAAAACTE/+4kxP//JMT//yTE//8kxP//JMT//yTE//8iw/8mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXE/64kxP//JMT//yTE//8kxP//JMT//yTE//8lxP+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLD/yYkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/uAAAAAAAAAAAAAAAAAAAAACPE/+YkxP//JMT//yTE//8kxP//JMT//yTE//8lxf8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/7kkxP//JMT//yTE//8kxP//JMT//yTE//8kxP+5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXF/zAkxP//JMT//yTE//8kxP//JMT//yTE//8jxP/mAAAAAAAAAAAAAAAAAAAAACTE/94kxP//JMT//yTE//8kxP//JMT//yTE//8jxv86AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/8QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPG/zokxP//JMT//yTE//8kxP//JMT//yTE//8kxP/eAAAAAAAAAAAAAAAAAAAAACXE/9EkxP//JMT//yTE//8kxP//JMT//yTE//8mw/9EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/84kxP//JMT//yTE//8kxP//JMT//yTE//8kxP/OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbD/0QkxP//JMT//yTE//8kxP//JMT//yTE//8lxP/RAAAAAAAAAAAAAAAAAAAAACTD/7gkxP//JMT//yTE//8kxP//JMT//yTE//8kw/9NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/9kkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTD/00kxP//JMT//yTE//8kxP//JMT//yTE//8kw/+4AAAAAAAAAAAAAAAAAAAAACTD/54kxP//JMT//yTE//8kxP//JMT//yTE//8jxP9XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/+QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPE/1ckxP//JMT//yTE//8kxP//JMT//yTE//8kw/+eAAAAAAAAAAAAAAAAAAAAACXD/4QkxP//JMT//yTE//8kxP//JMT//yTE//8lxf9hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/+8kxP//JMT//yTE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AAAAAAAAAAAAAAAAAAAkxP+PJMT//yTE//8kxP//JMT//yTE//8kxP/7AKr/AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMP/YiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMP/YgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKr/AyTE//skxP//JMT//yTE//8kxP//JMT//yTE/48AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkw/9iJMT//yTE//8kxP//JMT//yTE//8kxP//KMf/IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/hiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/hgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMf/ICTE//8kxP//JMT//yTE//8kxP//JMT//yTD/2IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAixf81JMT//yTE//8kxP//JMT//yTE//8kxP//I8X/QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/qSTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8X/QiTE//8kxP//JMT//yTE//8kxP//JMT//yLF/zUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAazP8KJMT//STE//8kxP//JMT//yTE//8kxP//JMT/YwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMX/zSTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMX/zQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/YyTE//8kxP//JMT//yTE//8kxP//JMT//RrM/woAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/3CTE//8kxP//JMT//yTE//8kxP//JMT/hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/8STE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/hSTE//8kxP//JMT//yTE//8kxP//JMT/3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMX/ryTE//8kxP//JMT//yTE//8kxP//JcP/pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkwv8VJMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTC/xUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJcP/pyTE//8kxP//JMT//yTE//8kxP//JMX/rwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8T/giTE//8kxP//JMT//yTE//8kxP//JMT/yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP84JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/yCTE//8kxP//JMT//yTE//8kxP//I8T/ggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMb/RyTE//8kxP//JMT//yTE//8kxP//JMT/6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxf9cJMT//yTE//8kxP//JMT//yTE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//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP/2I8X/QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8X/QiTE//YkxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/pQCq/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AiXE/4skxP/sJMT//yTE//8kxP//JMT//yTE/9cjxP9BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPE/0EkxP/XJMT//yTE//8kxP//JMT//yTE/+wlxP+LAP//AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqv8DJMP/QCXE/4skw/+AJMX/TwD//wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8CJMX/TyTD/4AlxP+LJMP/QACq/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////8P/////////w//////////D/////////8P/////////wgH//////4BCAf//////gEIB//////+AQgH//wD//4BCAP//AP//AEMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//gB//wDDAP/+AH//AMMA//4Af/8AwwD//gB//wDDgP/+AH//AcOA//4Af/8Bw4B//gB//gHDgH/+AH/+AcOAf/4Af/4Bw4B//gB//gHDwH/+AH/+A8PAf/wAP/4Dw8B//AA//gPDwH/8AD/+A8PAP/wAP/wDw+A//AA//AfD4D/8AD/8B8PgP/wAP/wHw+A/+AAf/AfD8D/4AB/8D8PwH/gAH/gPw/Af+Bgf+A/D+B/wGA/4H8P4H/AYD/gfw/wP8DwP8D/D/A/gPAfwP8P8B+B+B+A/w/4H4H4H4H/D/gPA/wPAf8P/A4D/AcD/w/+AAf+AAf/D/4AD/8AB/8P/wAf/4AP/w//gD//wB//D//gf//gf/8P/////////w//////////D/////////8P/////////w//////////A="},{"name":"com.metaso/search-mcp","display_name":"秘塔AI搜索","description":"秘塔官方搜索 MCP，提供多源网页搜索、网页阅读和基于搜索的 RAG 问答。","vendor":"秘塔AI搜索","categories":["搜索"],"official":true,"verified":true,"homepage":"https://metaso.cn/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://metaso.cn/api/mcp","headers":[{"name":"Authorization","description":"Bearer <秘塔 API Key>","obtain_at":"https://metaso.cn/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.metaso__search-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-metaso-search-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://metaso.cn/api/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-metaso-search-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://metaso.cn/api/mcp\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-metaso-search-mcp\": {\n      \"url\": \"https://metaso.cn/api/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-metaso-search-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://metaso.cn/api/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <秘塔 API Key>","required":true,"secret":true,"obtain_at":"https://metaso.cn/"}],"iconData":"data:image/png;base64,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"},{"name":"com.lkcoffee/order-mcp","display_name":"瑞幸咖啡","description":"瑞幸咖啡官方点单 MCP，支持门店查询、菜单浏览、下单、取餐码与订单管理。","vendor":"瑞幸咖啡","categories":["餐饮"],"official":true,"verified":true,"homepage":"https://open.lkcoffee.com/mcp","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://gwmcp.lkcoffee.com/order/user/mcp","headers":[{"name":"Authorization","description":"Bearer <瑞幸开放平台 MCP Token>","obtain_at":"https://open.lkcoffee.com/mcp","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.lkcoffee__order-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <瑞幸开放平台 MCP Token>","required":true,"secret":true,"obtain_at":"https://open.lkcoffee.com/mcp"}],"iconData":"data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Dv///xz///9q////kf///7f////Z////5f////P////z/v7+5////9n+/v63////kf///2r///8c////DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0KaaCtCmmha7h3hk4cvEeP38+43///+1////x////9v////r////8/7+/vn+/v75////8////+v////b////x////7X///+N////bP7+/kz+/v4M/v7+BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0KWZFNCmmiq7h3jL38fA4/38+/3//////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/////9////y////5v///8a/v7+DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1fmyPoVpEx5dGLv/gx8D/7+Lf/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/////z////of///04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvop7KL6LfFKbUTnHmk0145lKMv/v49//9/Hv///////////////////////////////////////////////////////////////////////////////////////+/v75////z////6X///82////HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvot7Ur6LfKWOOB7/lEIq/5tON////////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7//////f////3///9u////NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/j4CBn1dAv5A7If+OOB7/o11I/7mDc////////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/////97N7au8WajXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxpeNDMaXjRihWkS/l0cv3485H/+OOB7/qGdT/8OWiP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////w5eH90Kyh3aVgS7vGl40YxpeNDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxpeNGMaXjTCTQCf/kDwi/444Hv+OOB7/rXBe/86pnv///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/hy8X/vIh4/5VELP/Gl40wxpeNGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsnlpaLN6adGOOB7/jjge/444Hv+OOB7/sXZk/9W1rP///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7/9/Du/+/h3f+ZTDX/lEIp/404Hf+ucV7XrnFeagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrqgWpmFNfqFaReeOOB7/jjge/444Hv+OOB7/snhn/9e5sP/////////////////////////////////////////////////////////////////////////////////9/Pz/+PPy//Pr6P/gyMH/0Kyh/8GRgv+UQin/kT0j/444Hv+eVD7roltGg8uhkhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrqgsnVE6lZRBKP+OOB7/jjge/444Hv+OOB7/s3po/9q9tP///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/7+fj/8ujl/+fX0f/AkoP/qmlV/5JAJv+NOB3/jjge/404Hf+SPCP/m0w1l8uhkjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzemmvnVM81444Hv+OOB7/jjge/444Hv+OOB7/r3Nh/9GupP///////v7+/////////////v7+/////////////v7+///////v5OD/3MG5/8iekP+qalj/pF9K/55SO/+POyH/jzog/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/nlU/07mDdKcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsblvLm1A55Y44Hv+OOB7/jjge/444Hv+OOB7/rW5b/8ylmf//////////////////////////////////////+PPx//Hn5P/ClIb/tn9u/6trV/+cUTv/mUs0/5ZFLf+POiD/jjke/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/nVI847B1Y8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnZVHpmU028444Hv+OOB7/jjge/444Hv+OOB7/qmpW/8ecj////////v7+/////////////v7+////////////8efk/+TQyv+VQir/kT0k/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/m1A586tqWOcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACaTTX7k0Ip/Y44Hv+OOB7/jjge/444Hv+OOB7/oFhD/7R6af///////v7+/////////////v7+////////////1ret/65wXf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/lkYu/Z5UP/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWRS39kj4l/Y44Hv+OOB7/jjge/444Hv+OOB7/m043/6hkUf//////////////////////////////////////0Kyh/6FZQ/+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/lEMq/ZtON/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTPyb/kDsi/444Hv+OOB7/jjge/444Hv+OOB7/lEMr/5xQOf///////v7+/////////////v7+////////////yaCT/5RCKf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/k0An/5hHL/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVQir/kT0k/444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv/v49//9vDu/////////////v7+////////////zaeb/5xQOf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/kkAn/ZhKMv0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZSjP7k0Eo/Y44Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv/cwrr/7eDc////////////////////////////2Lqx/7J2ZP+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/lUUt/Z1TPPkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeVD35lUUt+444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv/Kopb/5NDK/////////////v7+////////////487H/8idkP+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/mEoy+6NdR/cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnY1Hrmk029Y44Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv+fVT//zqme///+/v///////v7+/////////////v7+///////YvLP/xpuO/7N6aP+VRSz/kj8l/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/nFA686xrWecAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACucF7JnFA65Y44Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+WRi7/wZGD/+zc2P/////////////////////////////////s3dn/4svE/9i5sP/BkYL/sXVj/6FaRP+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/nVM94bJ3ZcUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4gnGpnlU/0444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv+OOB7/s3ln/9m7sv///////v7+/////////////v7+///////+/v7//fv7//v4+P/s29f/0Kyh/7R8av+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/n1dB0buIeKMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJmI00mEkxmY85H/+OOB7/jjge/444Hv+OOB7/mEoy/6JcRv/El4n/wpOF/8GRgv/o1dD/8+nn///+/v/////////////////////////////////48/H/7N7a/+HKw/+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+SPST/m043ldW2qioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADImI0aoVdCg5xQOuuOOB7/jjge/444Hv+vcV//v4+A/9Ctov/hy8T/4MnC/+DIwP/z6eb/+fPy///+/v///////v7+///////7+Pf/8+nm/+ra1f/cwrr/1LSq/8ylmf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+eVD7ro1xHgdW2qRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArW1abK1sWtmOOB7/jjge/444Hv/Qq6D/59XP///////////////////////+/f3//v39///////////////////////48fD/59PO/9a2rf/BkoT/vIp6/7iCcf+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+ucV7XrnFeagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx5SKGMeUijKTPyb/kDsi/444Hv+lYEv/sHNh/7uHd/+6hnb/t4Bv/7R6af+8iXn/2byz//fw7v/////////////////gx8D/1rWs/8ykmP+zeWj/o11I/5RCKf+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/kT8l/ZZHLv3QrKAq0KygFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx5SKDMeUihigVkHFlkUt4Y44Hv+ZTDT/pmJO/7N6aP/QraL/1LSr/9m8tP/Wt63/2r61/97Fvv/YurD/17iu/9a2rP/Lopb/yqGV/8mhlP/SsKX/zaeb/8iekP+xdmT/o15J/5VGLf+NOB3/jjge/404Hf+OOB7/l0gv4aJcRsPQq58U0KufCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5g3OLnVI7xY84Hv+OOB7/nVI8/6xtWv/n1c//8+rn///////w5eH/28C3/8abjv+xdWL/r3Fe/61uWv+2fm3/v45//8iekf/y5+T/9/Du//z6+f/Vtav/uYV0/55VPv+OOB7/jjge/444Hv+POR//nVM8w7qEc4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtoBwVLeAcavdw7r96NfR/fTs6f/+/f3/4crE/8WYi/+POiD/jjkf/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+RPST/rW5b/8mfkv///////v39//77+//HnI//q2tY/5A7If+7iHenvIh3UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOOiEenVM9dJ9XQcnUtKq74cvE2+vc1/vYurL/wJGD/6loVP+OOR//jjge/444Hv+OOB7/jTgd/444Hv+NOB3/jjge/404Hf+POiD/nVM8/6trWP/k0Mr/69vX//Ln4//Tsab5uIJx55lLM9W6hXRWuoV0KgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOOyA8jjkfk445H+nDl4l617uxt+HNxvWzeGf/oFhC/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv/Kopb/2Lqx/+bTzf/fx771yZ6Q0ahlTquSSSQGkkkkAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkTsgHJI7IDiOOB7rjjgemZA5IEaPOh5clUMpdplJMZOsbVnbnVI77ZE7Iv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+QOyH/qWZS38uhlb+jWUNmlUQsjY45H7OPOB+njzkfUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQQyEKjjoeTI45Ho+OOB6djjgeYJA5ICKPOR6Vkj4kdphGL1asbVlsoVlDg5pKNJmbTjjbmUsz6ZdHL/ePOiH9jjkf/444Hv+OOB7/kDwj/ZNBKP2YSTH1mk02551SO9eZSjOZqmhVhcGRgnCVRCqVk0AmeI46IF6POB+3jzgefJA5HkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQQyEWjjkefI45HuWPOyFOkDsgJgAAAACOOR/PjzkfdJc5JRoAAAAAyJuRGMibkTKub123pmJO06FZQ++SPiX9jzoh/Y44Hv+POR//k0Ep/ZlLNPujXUftqmhUz7N4ZrHJl400snNhLJE+ISSOOR3DjzkfZplNMwqOOB7Jjzgep5A5HocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOOB+njjgfmY85H4sAAAAAljkmDpc5JRqOOR69jjkfXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqjk5BKo5OQi/QEAEv0BAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOOR/PjjofbpJJJA6ZQCYUjzgeao84HsOPQCAQj0AgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkTsdDJE8HhiOOB7FjjkeiY86IEoAAAAAkTggGJE4IC6OOR+njjkfVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqjk5Aqo4OAS/QEACv0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOOR+PjjofTpVGIw6ZQCYKjzgeNo44HWCPQCAIj0AgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkTweGJA7HTKOOR7ljjkedplNMwoAAAAAjzgeIo83HkSNOR+TjjkeSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNOiBOjzsgLplDIQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjjgfUI44H6OPOR90jzkfOgAAAAAAAAAAkTkfKJE5H1CQOh+FkDkfQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqVVUAjjgfZI44H8mQOh9GkDofIgAAAAAAAAAAkDkfIpA5H0SPOR6TjzkeSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqVVUCjzkfeI85H++VQCAYlUAgDAAAAAAAAAAAjzofHI86HziPOR6hjzkeUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWSy0Qjjogbo45H88AAAAAAAAAAAAAAAAAAAAAqlUrBKpVKwaPOR/ZjzkfbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUPyUWjzkfZo44HrcAAAAAAAAAAAAAAAAAAAAAqlUrAqpVKwKPOR6TjzkeSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUOSAejzgeXo44Hp8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQOR5MkDkeJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRPiIkkDoeVJA5HocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSPyQSkTsgLJE6H0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqVVUCqlU+BKpVOQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//+AH//8AAP//gAH//wAA//4AAH//AAD/8AAAH/8AAP/wAAAP/wAA/+AAAA//AAD/gAAAA/8AAP+AAAAB/wAA/4AAAAH/AAD/AAAAAP8AAP8AAAAAfwAA/gAAAAB/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD+AAAAAH8AAP4AAAAAfwAA/wAAAAD/AAD/gAAAAf8AAP+AAAAB/wAA/4AAAAH/AAD/4AAAB/8AAP/gAAAP/wAA/8gAAA//AAD/nAAAR/8AAP83AAC3/wAA/3fAA7H/AAD8d///vf8AAPz3//+//wAA/ff/////AAD79/////8AAPv3/////wAA+/f/////AAD79/////8AAPv3/////wAA+///////AAD7//////8AAP///////wAA////////AAA="},{"name":"com.tencent/map-mcp","display_name":"腾讯地图","description":"腾讯位置服务官方 MCP，提供地址解析、POI 搜索、路线规划、天气和行政区划查询。","vendor":"腾讯位置服务","categories":["出行"],"official":true,"verified":true,"homepage":"https://lbs.qq.com/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.map.qq.com/mcp?key={key}","headers":[],"variables":{"key":{"description":"腾讯位置服务 WebService API Key","obtain_at":"https://lbs.qq.com/dev/console/application/mine","required":true,"secret":true}}},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tencent__map-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-map-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.map.qq.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-map-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.map.qq.com/mcp?key=<YOUR_KEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-map-mcp\": {\n      \"url\": \"https://mcp.map.qq.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-map-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.map.qq.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"URL 参数","name":"{key}","placeholder":"<YOUR_KEY>","description":"腾讯位置服务 WebService API Key","required":true,"secret":true,"obtain_at":"https://lbs.qq.com/dev/console/application/mine"}],"iconData":"data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAABLLAAASywAAAAAAAAAAAAA+ebiAPnm4x355uCW+ebf7v339f/++/r/+enk//nn4f/56OH/+efb//vetP/659f/+enf7Pnp3pH56t0a+erdAPnm5Rv55uGx+uLI/vrgtv/+8db//vfs//ro4P/56OD/+ejh//nn2v/737T/+efX//np3v/56t3++erdq/nq3Bf55uWO+eXe/f3IXv/+vzn//tJz//7hqP/63rz/+ePR//nn3P/559r/+9+0//rn1v/56t7/+erd//nq3Pz56tyG+efl5Pnn5f/8zHL//6oA//+lCP//qyj//bda//vJj//62Lj/+uLM//vesv/66Nb/+ere//nq3f/569z/+evc3Png1/z54dn/+tiu//6vFf//oQD//5cA//+QBP/+lB///apY//nFkP/10qH/9+PM//rm0//65dT/+uXV//rl1vb60bv++tO5//nWt//9vEr//6EA//+YAP//jgD//4QA//98Av/qhjb/v6mh/+LPuv/527v/+9q///vYxf/71sn4+ebg/vnm3//55+H/+ten//+mDv//mAD//44A//+FAP/ydw3/bU+R/z5j6P+xvOH/7ePc//nq2f/56tn/+erZ+Pnn4v755+H/+ejh//nm2v/9uk///5cA//+PAP/ygQ3/bVWS/wM3+/8GPP7/bI7w/9XW4f/36tv/+eva//ns2vj55+H++efh//no4P/56uP//d+2//+gE//yigz/bV6S/wQ++/8APf//ADz//yle+f+rveb/7eXc//ns2f/57Nn4+urk/vrq5P/66+P/+uvk//738v/3xoL/bmqS/wNI+/8ASf//AEn//wBI//8GTP7/b5jw/9nc4v/47d3/+u7d+P78+/7+/Pv//vz7//78+/////7/9vb5/4Kp+/8XY///AFL//wBT//8AU///AFH//zJ4/f+51fv/9vj7///9+/n99vP7/fbz//338//99/P//vz7///+/f/79/P/yNTx/2KV9P8Wavz/AF3//wBc//8LZv//hbj5/+Xu8v/8+PD1+ejg2vnp3//56d7/+ene//349f/++/n/+uzf//zs3P/26dz/xs/f/3Cc3f8iefj/AGf//1KZ8v/b4dz/9+zX0vnp33n56d/5+ene//nq3v/9+PX//vv5//rs3v/569v/+evb//zr1f/74LH/19jX/4q16v+FtOr/7OjZ9/jt13H56d8P+enelvnp3vn56t7//fn1//77+f/67N7/+evb//nr2//56tX/++Gw//zr0f/87tj/+OzY+Pnt15D57dcN+eneAPnp3g756t1u+erdy/359er++/ns+uzd7Pnr2uz57Nrs+evU7PvhsOz66tHq+e3Yyfrt12n67dcM+u3XAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAABLLAAASywAAAAAAAAAAAAAAAAAAAAAAAD55uYA+ebiAPnm4xP55uNm+ebiwfnm4vT88e/////////////9+Pf/+ejj//nn4v/55+H/+ejh//no4f/56OD/+ejg//no3f/73q///Nyq//nn2P/56d//+enf8vnp3rz56d5e+eneD/np3gD76OEAAAAAAAAAAAAAAAAA+eXjAPPg8AD55uM4+ebhuPnl3vj55d3/+eXd//zw7P////7///////349//56OP/+efh//no4f/56OH/+ejh//no4P/56OD/+ejd//ver//83Kr/+efY//np3//56d7/+ene//np3vb56d6v+erdMPrq3gD56d0AAAAAAPnm5AD55eAA+ebkS/nm4t/55dz/+uTQ//rjx//648j//O7c///89P///vr//fj1//no4v/55+H/+ejh//no4f/56OD/+ejg//no4P/56N3/+96v//zcqv/559j/+enf//np3v/56d7/+ene//nq3f/56t3X+erdP/nq3QD56t0A+ebkAPnm5DT55uTc+ebg//rk0//64bj/+9+m//vdov/85rj///TW///45f/99On/+ebc//nn3v/55+D/+ejg//no4P/56OD/+ejg//no3P/73q///Nyp//nn1//56d//+ene//np3v/56t3/+erd//nq3f/56t3T+ercKvnq3AD55uQN+ebkrvnm5P/55uH/+9WR//3BPf/9yVj//NJy//3cjf//56n//+u9//7qyf/64cf/+ePS//nl2f/5593/+ejf//no3//56N//+ejc//ver//83Kn/+efX//np3//56d7/+erd//nq3f/56t3/+erd//nq3P/56tyg+ercCPnm5FX55uTz+ebk//nm4v/8y2v//68A//+tAv/+sBP//r06///Qa///243//tyd//vVov/62bP/+t7D//ni0P/55dj/+efc//no3v/56Nz/+96v//zcqf/559f/+ene//nq3v/56t3/+erd//nq3f/56tz/+erc//nq3O356ttF+ebkq/nm5P/55uP/+efk//raqf//tA7//60A//+pAP//pAD//6QL//+wLv/+wFr//MZ2//vMi//70J3/+tex//rdwv/54s//+ebY//nn2f/73q7//Nyp//ro1//56t7/+erd//nq3f/56t3/+erc//nq3P/56tz/+erb//nr25j55uTh+ebj//nm4//55+P/+eTX//3AQf//rAD//6kA//+kAP//nwD//5oA//+YBf/+nyD//bBL//y/cf/7x4n/+82c//rVsf/63cP/+eLO//vcqv/826j/+efW//nq3v/56t3/+erd//nq3f/56tz/+erc//nr3P/569v/+evb0fnn5Pn55+T/+efk//nn5P/56OT/+9KN//+uBP//qQD//6QA//+fAP//mwD//5UA//+QAP//jQP//pUc//2oSf/8unH/+8SK//vMoP/51rX/+tWf//rYpf/459b/+ere//nq3v/56t3/+evd//nr3f/569z/+evc//nr3P/569vr+t7U/fne0//539P/+d/S//ng0//627r//rUk//+oAP//pAD//58A//+bAP//lgD//5EA//+MAP//hgD//4MD//6NHf/9pE3/+rhz//XCjf/xxo//8M+g//TfyP/45M//+uXP//rl0P/65NH/+uTR//rj0v/649P/+uPU//rj1fH7xqr9+8ep//rJp//6y6f/+c6m//nRpv/8wFT//6kA//+kAP//nwD//5sA//+WAP//kQD//4wA//+HAP//ggD//3wA//96BP/7iSP/6qRd/9iyiv/XvqL/5syp//XUqv/71qv//NWt//zTsf/80bX/+9C5//vOvf/7zcH/+83E8frTwf361MD/+tW///rWvv/52L7/+dq///rUoP/+rxn//6QA//+fAP//mwD//5YA//+RAP//jAD//4cA//+CAP//fQD//3cA//9xAP/gdC3/nY+i/7Cstv/Kw8P/59TB//bcv//63sD/+93C//vcxP/628f/+trJ//rZy//62c3x+efj/fnn4//55+L/+efi//nn4v/55+H/+ebd//zDYP//pAD//58A//+bAP//lgD//5EA//+MAP//hwD//4IA//99AP//eAD/6m0V/1tKpP8hTO7/fpPQ/6y64v/T0+L/7eTe//fp3P/569z/+evb//nr2//569v/+eva//ns2vH55+L9+efi//nn4v/55+H/+efh//no4f/56OL/+tmv//6qFP//nwD//5sA//+WAP//kQD//4wA//+HAP//ggD//30A/+pyFf9bTKT/ATf+/wA2//84Y+7/kKno/7zF5f/h3N//9Ofc//jq2//569v/+evb//nr2v/569r/+eva8fnn4v355+L/+efi//nn4f/56OH/+ejh//no4P/55tr//b1X//+fAP//mwH//5YA//+RAP//jAD//4cA//+DAP/qeBX/W06k/wE3/v8AN///ADb//wk+/f9jifH/pbjo/8/S4v/s493/9+rb//nr2//569r/+eva//ns2v/57Nnx+efi/fnn4v/55+H/+efh//no4f/56OD/+ejg//no4f/83LL//6cW//+aAP//lgD//5EA//+MAP//iAD/6n0V/1tRpP8BN/7/ADf//wA3//8AN///ADb//yla+f+Kp+v/usXk/+Dc3//z6Nv/+Ova//nr2v/569r/+eza//ns2fH55+L9+efh//no4f/56OH/+ejh//no4P/56OD/+ejf//zw5///xWn//5oA//+WAP//kQD//4wA/+qCFf9bVaT/ATv+/wA7//8AO///ADv//wA7//8AOv//Bj/+/16H8v+kuef/z9Ph/+3k3P/36tr/+eva//ns2v/57Nn/+ezZ8fnn4f355+H/+ejh//no4f/56OD/+ejg//no4P/56N///PLu///t0f//piH//5UA//+RAP/qhxX/W1uk/wFA/v8AQf//AEH//wBA//8AQP//AED//wBA//8AP///KGD5/4uq6/+7yOP/4t7e//Tp2//569r/+ezZ//ns2f/57Nnx+efh/fnn4f/56OD/+ejg//no4P/56OD/+ejf//no3//88u3///7+///QjP//lwP/6osU/1tgpP8BRv7/AEb//wBG//8ARv//AEb//wBG//8ARv//AEb//wBF//8HSv7/Yo/x/6e95v/S1uD/7ubb//jr2f/57Nn/+ezZ//ns2PH66uT9+urk//rq4//66uP/+urj//rr4//66+L/+uri//z07/////////ju/++1af9bZKL/AUv+/wBM//8ATP//AEz//wBL//8AS///AEv//wBL//8AS///AEv//wBJ//8ubfj/kLLr/8DO5f/l4+D/9uzd//nu3f/67tz/+u7c8f78+/3+/Pv//vz7//78+v/+/Pr//vz6//78+v/+/Pr//v38////////////7O72/2KS/P8HVf//AE///wBR//8AUf//AFH//wBR//8AUf//AFH//wBQ//8AUP//AFD//wtY/v9tovz/r8/7/9vo+v/19/r//fz5//78+f/+/Pnx/////f//////////////////////////////////////////////////////////8/f//56+//8udP//Alb//wBV//8AVv//AFb//wBW//8AVv//AFb//wBW//8AVv//AFT//zyC//+bx///yuL//+72///8/v////////////L//v79//7+///+/v///v7///7+///+/v////7///7+//////////////////////////7////+/9/q/v+Brf7/I3H+/wFb//8AWv//AFz//wFb//8AW///AFv//wBb//8AWv//Emj//3u1//+32f7/4fD+//j7/v/+/v7////+8fvv6fP77+n/++/p//vv6P/77+j/++/o//vv6P/77+f//fby/////////////vv4//vw5//78Ob//PHm//rw5v/T2Ob/e6Tu/yV1+v8CYf//AGD//wBh//8AYf//AGH//wBg//8BYP//Tpb4/6TL7f/Q4Oj/7+3l//nx4//78uPl+ejf0/no3//56N//+ejf//np3v/56d7/+ene//np3f/88uz////////////9+fX/+erd//nq3P/56tz/+erb//rr2//46tv/19jg/4at6/8wffH/BWj9/wBk//8AZv//AWb//wBl//8jfPn/l8Pn/8jZ3//p5tr/9+zX//ns1sL56OCQ+ejf//np3//56d//+enf//np3v/56d7/+end//zz7P////////////359f/5693/+erc//nq3P/569z/+evb//nr2//67Nv/+uvX/+LUtv+cscb/RI3y/wxx/f8Aav//AGr//wdv/v+Ctuv/0t7e/+rn2v/37Nj9+e3Xffno3zj56d/k+enf//np3//56d7/+ene//np3v/56d3//PPs/////////////fn1//nr3f/56tz/+evc//nr2//569v/+evb//nr2//569f//OCs//7epv/s49X/tMrk/2Gg8P8cfvv/AHD//3Ss7f/m5tv/8erZ//js19z57dcr+ejgAvnp34X56d/++ene//np3v/56d7/+ene//np3f/88+z////////////9+fX/+evd//nq3P/569v/+evb//nr2//569r/+eva//nr1//736z//N2m//rq0v/77dn/9erZ/8/Y3/+dwOf/0dre//Tr2P/37Nf8+O3Xd+7w2AD56d8A+enfFvnp37T56d7/+ene//np3v/56t3/+end//zz7P////////////359f/5693/+evb//nr2//569v/+evb//nr2v/569r/+evX//vgrP/83ab/+erS//ns2f/57Nj/++3Y//zu1//57df/+O3X//nt16j57dcQ+e3XAPfp3gD56d4A+eneIPnp3q/56d78+erd//nq3f/56tz//PPr/////////////fn1//nr3P/569v/+evb//nr2//569r/+eva//ns2v/569f/++Cs//zdpv/66tL/+ezZ//ns2P/57dj/+e3Y//nt1/r57dek+e3XGvnt1wD/7twAAAAAAPrp3wD56d4A+eneEvnp3nb56t3Y+erd+/nq3P/88+v////////////9+fX/+evc//nr2//569v/+eva//nr2v/57Nr/+eza//nr1//74Kz//N6m//rq0v/57dn/+e3Y//nt2Pr57dfT+e3XbPnt1w757dcA+e3YAAAAAAAAAAAAAAAAAAAAAAD56d0A+OndAfnq3ST56t1u+ercrfzz7M7////W////1v359db569zW+evb1vnr29b569rW+eva1vns2tb57NrW+evW1vvgq9b83qbW+urS1vnt2Mz57dip+e3XaPnt1x/679gB+u7XAAAAAAAAAAAAAAAAAPAAAA/gAAAHwAAAA4AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAABwAAAA+AAAAfwAAAP"},{"name":"com.tencent/meeting-mcp","display_name":"腾讯会议","description":"腾讯会议官方 MCP，支持预约会议、查询参会人、录制和会议纪要等个人会议操作。","vendor":"腾讯会议","categories":["办公"],"official":true,"verified":true,"homepage":"https://meeting.tencent.com/support/articles/14/index.html","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.meeting.tencent.com/mcp/wemeet-open/v1","headers":[{"name":"X-Tencent-Meeting-Token","description":"腾讯会议个人 Token","obtain_at":"https://meeting.tencent.com/support/articles/14/index.html","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tencent__meeting-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-meeting-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.meeting.tencent.com/mcp/wemeet-open/v1\",\n      \"headers\": {\n        \"X-Tencent-Meeting-Token\": \"<YOUR_X_TENCENT_MEETING_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-meeting-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.meeting.tencent.com/mcp/wemeet-open/v1\",\n        \"--header\",\n        \"X-Tencent-Meeting-Token: <YOUR_X_TENCENT_MEETING_TOKEN>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-meeting-mcp\": {\n      \"url\": \"https://mcp.meeting.tencent.com/mcp/wemeet-open/v1\",\n      \"headers\": {\n        \"X-Tencent-Meeting-Token\": \"<YOUR_X_TENCENT_MEETING_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-meeting-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.meeting.tencent.com/mcp/wemeet-open/v1\",\n      \"headers\": {\n        \"X-Tencent-Meeting-Token\": \"<YOUR_X_TENCENT_MEETING_TOKEN>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"X-Tencent-Meeting-Token","placeholder":"<YOUR_X_TENCENT_MEETING_TOKEN>","description":"腾讯会议个人 Token","required":true,"secret":true,"obtain_at":"https://meeting.tencent.com/support/articles/14/index.html"}],"iconData":"data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAD+TQD//k4A//5QAP/+UQD//lIA//5TAP/+VAD//lYA//5XAP/+WAD//lkA//5aAP/+XAD//l0A//5eAP/+XwH//mAB//5iAf/+YwH//mQB//5lAf/+ZgH//mgB//5pAf/+agH//msB//5sAf/+bgH//m8B//5wAf/+cQH//nIC//10Av/9dQL//XYC//13Av/9eAL//XoC//17Av/9fAL//X0C//1/Av/9gAL//YEC//2CAv/9gwL//YQD//2GA//+TgD//08A//5QAP/+UgD//lMA//5UAP/+VQD//lYA//5YAP/+WQD//loA//5bAP/+XAD//l4B//5fAP/+YAH//mEB//5iAf/+YwH//mUB//5mAf/+ZwH//mgB//5qAf/+awH//mwB//5tAf/+bgH//nAB//5xAv/+cgH//nMC//10Av/+dgL//XcC//14Av/9eQL//XoC//18Av/9fQL//X4C//1/Av/9gAL//YIC//2DAv/9hAP//YUC//2GA//+TwD//lAA//5RAP/+UgD//lMA//5VAP/+VgD//lcA//5YAP/+WgD//lsA//5cAP/+XQD//l8B//5gAf/+YQH//mIB//5jAf/+ZAH//mUB//5nAf/+aAH//mkB//5qAf/+awH//m0B//5uAf/+bwH//nAB//5yAv/+cwL//XQC//11Av/9dwL//XgC//15Av/9egL//XsC//18Av/9fgL//X8C//2AAv/9gQL//YIC//2EAv/9hQP//YYD//2HA//+UAD//lEA//5SAP/+UwD//lQA//5WAP/+VwD//lgA//5ZAP/+WgD//lwA//5dAP/+XgH//l8A//5gAf/+YgH//mMB//5kAf/+ZQH//mcB//5oAf/+aQH//moB//5rAf/+bAH//m4B//5vAf/+cAH//nEC//5yAv/9dAL//XUC//12Av/9dwL//XgC//16Av/9ewL//XwC//19Av/9fwL//YAC//2BAv/9ggL//YMC//2EA//9hgP//YcD//2IA//+UAD//lIA//5TAP/+VAD//lUA//5WAP/+WAD//lkA//5aAP/+WwD//lwA//5eAf/+XwD//mAB//5hAf/+YwH//mQB//5lAf/+ZgH//mcB//5oAf/+agH//msB//5sAf/+bQH//m8B//5wAf/+cQL//nIB//1zAv/+dAL//XYC//13Av/9eAL//XkC//17Av/9fAL//X0C//1+Av/9fwL//YEC//2CAv/9gwL//YQD//2FAv/9hwP//YgD//2JA//+UQD//lIA//5TAP/+VQD//lYA//5XAP/+WAD//loA//5bAP/+XAD//l0A//5eAP/+YAH//mEB//5iAf/+YwH//mUB//5mAf/+ZwH//mgB//5pAf/+agH//mwB//5tAf/+bgH//m8B//5wAf/+cgH//nMC//50Av/9dQL//XYC//14Av/9eQL//XoC//17Av/9fQL//X4C//1/Av/9gAL//YEC//2DAv/9hAL//YUC//2GA//9hwP//YgD//2KA//+UgD//lMA//5TAP/+VQD//lcA//5YAP/+WQD//loA//5cAP/+XQD//l4B//5fAP/+YAH//mIB//5jAf/+ZAH//mUB//5nAf/+aAH//mkB//5qAf/+awH//mwB//5uAf/+bwH//nAB//5xAv/+cgH//XQC//11Av/9dgL//XcC//14Av/9egL//XsC//18Av/9fQL//X8C//2AAv/9gQL//YIC//2DAv/9hAP//YYD//2HA//9iAP//YkD//2KA//+UwD//lMA//5UAP/+VQD//lgA//5ZAP/+WgD//lsA//5cAP/+XgD//l8A//5gAf/+YQH//mIB//5kAf/+ZQH//mYB//5nAf/+aAH//moB//5rAf/+bAH//m0B//5vAf/+cAH//nEB//5yAf/9cwL//XQC//12Av/9dwL//XgC//15Av/9ewL//XwC//19Av/9fgL//X8C//2AAv/9ggL//YMC//2EAv/9hQP//YcD//2IA//9iQP//YoD//2LA//+UwD//lQA//5VAP/+VgD//lcA//5aAP/+WwD//lwA//5dAP/+XwD//mAB//5hAf/+YgH//mMB//5kAf/+ZgH//mcB//5oAf/+aQH//msB//5sAf/+bQH//m4B//5vAf/+cQH//nIB//5zAv/+dAL//XUC//13Av/9eAL//XkC//16Av/9ewL//XwC//1+Av/9fwL//YAC//2BAv/9gwL//YQC//2FA//9hgP//YcD//2JA//9igP//YsD//2MA//+VAD//lUA//5WAP/+VgD//lcA//5YAP/+WwD//l0A//5eAP/+XwH//mAB//5iAf/+YwH//mQB//5lAf/+ZgH//mgB//5pAf/+agH//msB//5tAf/+bgH//m8B//5wAf/+cQL//nMC//10Av/9dQL//XYC//13Av/9eAL//XoC//17Av/9fAL//X0C//1/Av/9gAL//YEC//2CAv/9gwL//YUD//2GA//9hwP//YgD//2JA//9iwP//YwD//2NA//+VQD//lYA//5XAP/+VwD//lgA//5ZAP/+WgD//l0A//5fAP/+YAH//mEB//5iAf/+ZAH//mUB//5mAf/+ZwH//mgB//5qAf/+awH//mwB//5tAf/+bwH//nAB//5xAf/+cgL//XMC//50Av/9dgL//XcC//14Av/9eQL//XoC//18Av/9fQL//X4C//1/Av/9gAL//YIC//2DAv/9hAL//YUD//2HA//9iAP//YkD//2KA//9iwP//YwD//2OA//+VgD//lYA//5XAP/+WAD//lkA//5aAP/+WgD//lsA//5fAf/+YQH//mIB//5jAf/+ZAH//mYB//5nAf/+aAH//mkB//5rAf/+bAH//m0B//5uAf/+bwH//nAB//5yAv/+cwL//XQC//11Av/9dwL//XgC//15Av/9egL//XsC//18Av/9fgL//X8C//2AAv/9gQL//YMC//2EAv/9hQP//YYD//2HA//9iQP//YoD//2LA//9jAP//Y0D//2PA//+VwD//lcA//5YAP/+WQD//loA//5bAP/+WwD//lwA//5dAP/+YQH//mMB//5kAf/+ZQH//mcB//5oAf/+aQH//moB//5rAf/+bQH//m4B//5vAf/+cAH//nEC//5zAv/9dAL//XUC//12Av/9dwL//XkC//16Av/9ewL//XwC//19Av/9fwL//YAC//2BAv/9ggL//YMC//2FA//9hgP//YcD//2IA//9iQP//YsD//2MA//9jQP//Y4D//2PA//+VwD//lgA//5ZAP/+WgD//lsA//5bAP/+XAD//l0A//5eAP/+XwH//mMB//5lAf/+ZgH//mcB//5oAf/+agH//msB//5sAf/+bQH//m8B//5wAf/+cQL//nIB//5zAv/9dQL//nYC//13Av/9eAL//XkC//17Av/9fAL//X0C//1+Av/9fwL//YAC//2CAv/9gwL//YQD//2FAv/9hwP//YgD//2JA//9igP//YsD//2NA//9jgP//Y8D//2QA//+WAD//lkA//5aAP/+WgD//lsA//5cAP/+XQD//l0A//5eAP/+XwH//mID//5wEf/+ZwH//mgB//5pAf/+agH//mwB//5tAf/+bgH//m8B//5wAf/+cgL//nMC//17Df/9fQ///XcC//14Av/9eQL//XoC//17Av/9fAL//X4C//1/Av/9gAL//YEC//2CAv/9jRb//YYF//2GA//9hwP//YgD//2KA//9iwP//YwD//2NA//9jwP//ZAD//2RA//+WQD//loA//5aAP/+WwD//lwA//5dAP/+XQD//l8A//5fAf/+YQP//r2V//7YwP/+cxT//mkB//5qAf/+awH//mwB//5uAf/+bwH//nAB//5xAv/+cwL//XoN//7dwf/+4cf//X8P//15Av/9egL//XsC//18Av/9fQL//X8C//2AAv/9gQL//YIC//2PGv/+69f//tWn//2IBf/9iAP//YkD//2LA//9jAP//Y0D//2OA//9jwP//ZED//2SA//+WgD//lsA//5bAP/+XAD//l0A//5eAP/+XgH//l8B//5hA//+vZX//u/m//7v5v/+2L///nUU//5rAf/+bAH//m0B//5vAf/+cAH//nEC//5yAf/9eg3//t3B/////////////uHH//2BD//9ewL//XwC//19Av/9fgL//X8C//2BAv/9ggL//Y4a//7r1/////////////7Vp//9igX//YoD//2LA//9jQP//Y4D//2PA//9kAP//ZED//2TA//+WwD//lsA//5cAP/+XQD//l4A//5eAf/+XwD//mED//69lf/+7+b//u/m//7v5v/+7+b//tjA//52FP/+bQH//m4B//5vAf/+cAH//nIB//55Df/+3cH///////////////////////7ix//9gg///X0C//1+Av/9fwL//YAC//2BAv/9jhr//uvX///////////////////////+1qf//YwF//2MA//9jQP//Y8D//2QA//9kQP//ZID//2TA//+WwD//lwA//5dAP/+XQD//l4A//5fAf/+YQL//r2V//7v5v/+7+b//u/m//7v5v/+7+b//vDm//7ZwP/+eBT//m8B//5wAf/+cQL//nkN//7cwf/////////////////////////////////+4sf//YQP//1/Av/9gAL//YEC//2OGf/+69f//////////////////////////////////ten//2OBf/9jgP//Y8D//2QA//9kgP//ZMD//2UA//+XAD//l0A//5dAP/+XwD//l8B//5gAf/+pnH//u/m//7v5v/+7+b//u/m//7v5v/+8Ob//vDm//7w5v/+2sD//noV//5xAf/+eA3//t3B/////////////////////////////////////////////uLH//2GD//9gQL//Y4a//7r1/////////////////////////////////////////////3GgP/9jwP//ZAD//2RA//9kwP//ZQD//2VA//+XQD//l4A//5eAf/+XwH//mAB//5hAf/+3Mj//u/m//7v5v/+7+b//u/m//7v5v/+8Ob//vDm//7w5v/+8Ob//trA//6CIP/+3MH///////////////////////////////////////////////////////7jx//9lCf//uvX//////////////////////////////////////////////////7x3//9kAP//ZED//2SA//9lAP//ZUD//2WA//+XgD//l4B//5fAP/+YAH//mEB//5iAf/+4tH//u/m//7v5v/+7+b//u/m//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7VwP//8Or////////////////////////////////////////////////////////////+/v3///////////////////////////////////////////////////////726v/9kQP//ZID//2TA//9lAP//ZUD//2XA//+XgD//l8B//5gAf/+YQH//mEB//5jAf/+toj//u/m//7v5v/+8Ob//vDm//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7RvP//qoX///Hr//////////////////////////////////////////////////////////////////////////////////////////////////////////////////3Smf/9kQP//ZMD//2UA//9lQP//ZYD//2XA//+XwH//mAB//5hAf/+YgH//mIB//5jAf/+awz//tK2//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7Tvv//o3z//6yJ///x7P///////////////////////////////////////////////////////////////////////////////////////////////////////ujL//2XEP/9kgP//ZQD//2VA//9lgP//ZcD//2YBP/+YAH//mEB//5iAf/+YgH//mMB//5kAf/+ZQH//m4O//7Ttv/+8Ob//vDm//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7Uv///poD//6aA//+vjf//8uz////////////////////////////////////////////////////////////////////////////////////////////+6Mv//ZgS//2SA//9kwP//ZQD//2WA//9lwP//ZgE//2ZBP/+YQH//mIB//5iAf/+YwH//mQB//5lAf/+ZQH//mYB//5vDv/+07b//vDm//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7Vwf//qYX//6mE//+qhP//spH///Lt//////////////////////////////////////////////////////////////////////////////////7oy//9lxL//ZID//2TA//9lAP//ZUD//2WA//9lwT//ZkE//2ZBP/+YQH//mMB//5jAf/+ZAH//mUB//5mAf/+ZgH//mcB//5oAf/+cQ7//tS2//7w5v/+8Ob//vDm//7w5v/+8Ob//vDm//7Ww///rYn//62J//+tif//rIn//7WV///z7v///////////////////////////////////////////////////////////////////////ujL//2XEv/9kQP//ZID//2UA//9lQP//ZYD//2XA//9mAT//ZkE//2ZBP/+YgH//mMB//5kAf/+ZQH//mYB//5mAf/+ZwH//mgB//5pAf/+aQH//nIO//7Utv/+8Ob//vDm//7w5v/+8Ob//vDm//7Yxf//sI7//7CO//+wjv//sI7//7CO//6vhf/+69r////////////////////////////////////////////////////////////+58v//ZYS//2RA//9kgP//ZMD//2UA//9lQP//ZcD//2YBP/9mQT//ZkE//2ZBP/+YwH//mQB//5lAf/+ZQH//mYB//5nAf/+aAH//mkB//5qAf/+agH//msB//50Dv/+1bb//vDm//7w5v/+8Ob//vDm//7Zxv//s5L//7OS//+zkv//s5L//qp9//18Ef/9hRz//uva//////////////////////////////////////////////////7ny//9lhL//ZAD//2SA//9kwP//ZQD//2VA//9lgP//ZgE//2ZBP/9mQT//ZkE//2ZBP/+ZAH//mUB//5lAf/+ZgH//mcB//5oAf/+aQH//mkB//5qAf/+awH//mwB//5tAf/+dQ7//tW2//7w5v/+8Ob//vHm//7byP//tpf//7aX//+2l//+rIH//XwS//12Av/9dwL//YYc//7r2v///////////////////////////////////////ufL//2WEv/9kAP//ZED//2SA//9lAP//ZUD//2WA//9lwP//ZgE//2ZBP/9mQT//ZkE//2ZBP/+ZQH//mYB//5mAf/+ZwH//mgB//5pAf/+aQH//moB//5rAf/+bAH//m0B//5tAf/+bgH//ncP//7Vtv/+8Ob//vHm//7cyv//uZv//7mb//6whf/9fRL//XYC//13Av/9eAL//XkC//2HHP/+7Nr////////////////////////////+58v//ZUS//2PA//9kQP//ZID//2TA//9lAP//ZUD//2XA//9mAT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+ZgH//mYB//5nAf/+aAH//mkB//5pAf/+agH//msB//5sAf/+bQH//m0B//5uAf/+bwH//nAB//54D//+1rb//vHm//7dy///vaD//rKJ//19E//9dgL//XcC//14Av/9eQL//XkC//16Av/9iRz//uza//////////////////7ny//9lRL//Y8D//2QA//9kQP//ZMD//2UA//9lQP//ZYD//2XA//9mAT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+ZgH//mcB//5oAf/+aQH//moB//5qAf/+awH//mwB//5tAf/+bgH//m4B//5vAf/+cAH//nEB//5xAv/+eg///de2//7ezf/+tY3//X0T//12Av/9dwL//XgC//14Av/9eQL//XoC//17Av/9fAL//Yoc//7s2v///////ufL//2VEv/9jwP//ZAD//2RA//9kgP//ZQD//2VA//9lgP//ZcD//2YBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+ZwH//mgB//5pAf/+aQH//moB//5rAf/+bAH//m0B//5uAf/+bgH//m8B//5wAf/+cQH//nEC//5yAf/+cwL//nsP//66h//9fhP//XYC//13Av/9eAL//XgC//15Av/9egL//XsC//18Av/9fAL//X0C//2MHP/91af//ZQS//2OA//9kAP//ZED//2SA//9kwP//ZQD//2VA//9lwP//ZgE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+aAH//mkB//5pAf/+agH//msB//5sAf/+bQH//m0B//5uAf/+bwH//nAB//5wAf/+cQH//nIC//5zAv/9dAL//XQC//12Av/9dgL//XcC//14Av/9eQL//XkC//16Av/9ewL//XwC//19Av/9fQL//X4C//1/Av/9gQL//YwD//2PA//9kAP//ZED//2TA//9lAP//ZUD//2WA//9lwP//ZgE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+aQH//mkB//5qAf/+awH//mwB//5tAf/+bQH//m4B//5vAf/+cAH//nEB//5yAf/+cgL//nMC//10Av/9dQL//XUC//12Av/9dwL//XgC//15Av/9eQL//XoC//17Av/9fAL//XwC//19Av/9fgL//X8C//2AAv/9gAL//YMC//2OA//9kQP//ZID//2UA//9lQP//ZYD//2XA//9mAT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+agH//moB//5rAf/+bAH//m0B//5uAf/+bgH//m8B//5wAf/+cQH//nEC//5yAv/9cwL//XQC//11Av/9dQL//XYC//13Av/9eAL//XgC//15Av/9egL//XsC//18Av/9fQL//X0C//1+Av/9fwL//YAC//2BAv/9gQL//YIC//2FAv/9kAP//ZMD//2UA//9lgP//ZcD//2YBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+agH//msB//5sAf/+bQH//m4B//5uAf/+bwH//nAB//5xAf/+cQL//nIB//5zAv/9dAL//nUC//11Av/9dgL//XcC//14Av/9eAL//XkC//16Av/9ewL//XwC//18Av/9fQL//X4C//1/Av/9gAL//YEC//2BAv/9ggL//YMC//2EAv/8hgP//ZID//2VA//9lgP//ZgE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+awH//mwB//5tAf/+bQH//m4B//5vAf/+cAH//nAB//5xAf/+cgL//nMC//10Av/9dAL//XYC//12Av/9dwL//XgC//15Av/9eQL//XoC//17Av/9fAL//X0C//19Av/9fgL//X8C//2AAv/9gAL//YEC//2CAv/9gwL//YMC//2EAv/9hQP//IgD//2UA//9lwP//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+bAH//m0B//5tAf/+bgH//m8B//5wAf/+cQH//nIB//5yAv/+cwL//XQC//11Av/9dQL//XYC//13Av/9eAL//XkC//15Av/9egL//XsC//18Av/9fAL//X0C//1+Av/9fwL//YAC//2AAv/9gQL//YIC//2DAv/9gwL//YUC//2FA//9hgP//YcD//2JA//9lgP//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+bQH//m4B//5uAf/+bwH//nAB//5xAf/+cQL//nIC//1zAv/9dAL//XUC//11Av/9dgL//XcC//14Av/9eAL//XkC//16Av/9ewL//XwC//19Av/9fQL//X4C//1/Av/9gAL//YEC//2BAv/9ggL//YMC//2EAv/9hAP//YUD//2GA//9hwP//YgD//2IA//8iwP//JcD//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+bgH//m4B//5vAf/+cAH//nEB//5xAv/+cgH//nMC//10Av/+dQL//XUC//12Av/9dwL//XgC//14Av/9eQL//XoC//17Av/9fAL//XwC//19Av/9fgL//X8C//2AAv/9gQL//YEC//2CAv/9gwL//YQC//2EA//9hQL//YYD//2HA//9iAP//YgD//2JA//9igP//I0D//yXA//9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+bgH//m8B//5wAf/+cAH//nEB//5yAv/+cwL//XQC//10Av/9dgL//XYC//13Av/9eAL//XkC//15Av/9egL//XsC//18Av/9fQL//X0C//1+Av/9fwL//YAC//2AAv/9gQL//YIC//2DAv/9gwL//YQC//2FA//9hgP//YcD//2HA//9iQP//YkD//2KA//9iwP//YwD//yOA//9lwT//ZkE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+bwH//nAB//5xAf/+cgH//nIC//5zAv/9dAL//XUC//11Av/9dgL//XcC//14Av/9eQL//XkC//16Av/9ewL//XwC//18Av/9fQL//X4C//1/Av/9gAL//YAC//2BAv/9ggL//YMC//2DAv/9hQL//YUD//2GA//9hwP//YgD//2IA//9iQP//YoD//2LA//9jAP//YwD//2NA//9jwP//JcE//2ZBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+cAH//nEB//5xAv/+cgL//XMC//10Av/9dQL//XUC//12Av/9dwL//XgC//14Av/9eQL//XoC//17Av/9fAL//X0C//19Av/9fgL//X8C//2AAv/9gQL//YEC//2CAv/9gwL//YQC//2EA//9hQP//YYD//2HA//9iAP//YgD//2JA//9igP//YsD//2LA//9jAP//Y0D//2OA//9jwP//JED//2YBP/9mQT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+cQH//nEC//5yAf/+cwL//XQC//51Av/9dQL//XYC//13Av/9eAL//XgC//15Av/9egL//XsC//18Av/9fAL//X0C//1+Av/9fwL//YAC//2BAv/9gQL//YIC//2DAv/9hAL//YQD//2FAv/9hgP//YcD//2IA//9iAP//YkD//2KA//9iwP//YsD//2MA//9jQP//Y4D//2PA//9jwP//ZAD//ySA//8mAT//ZkE//2ZBP/9mQT//ZkE//2ZBP/+cQH//nIC//5zAv/9dAL//XQC//12Av/9dgL//XcC//14Av/9eQL//XkC//16Av/9ewL//XwC//19Av/9fQL//X4C//1/Av/9gAL//YAC//2BAv/9ggL//YMC//2DAv/9hAL//YUD//2GA//9hwP//YcD//2JA//9iQP//YoD//2LA//9jAP//YwD//2NA//9jgP//Y8D//2PA//9kAP//ZED//2SA//8kwP//ZgE//2ZBP/9mQT//ZkE//2ZBP/+cgL//nMC//10Av/9dQL//XUC//12Av/9dwL//XgC//15Av/9eQL//XoC//17Av/9fAL//XwC//19Av/9fgL//X8C//2AAv/9gAL//YEC//2CAv/9gwL//YMC//2FAv/9hQP//YYD//2HA//9iAP//YgD//2JA//9igP//YsD//2MA//9jAP//Y0D//2OA//9jwP//Y8D//2QA//9kQP//ZID//2TA//9kwP//ZUD//2YBP/9mQT//ZkE//2ZBP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},{"name":"com.tencent/weiyun-mcp","display_name":"腾讯微云","description":"腾讯微云官方 MCP，支持网盘文件列表、上传下载、重命名、移动、删除和分享链接。","vendor":"腾讯微云","categories":["办公"],"official":true,"verified":true,"homepage":"https://www.weiyun.com/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://www.weiyun.com/api/v3/mcpserver","headers":[{"name":"WyHeader","description":"腾讯微云个人 MCP Token（直接填 Token，插件自动拼接 mcp_token=）","obtain_at":"https://www.weiyun.com/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tencent__weiyun-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weiyun-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://www.weiyun.com/api/v3/mcpserver\",\n      \"headers\": {\n        \"WyHeader\": \"<YOUR_WYHEADER>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weiyun-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://www.weiyun.com/api/v3/mcpserver\",\n        \"--header\",\n        \"WyHeader: <YOUR_WYHEADER>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weiyun-mcp\": {\n      \"url\": \"https://www.weiyun.com/api/v3/mcpserver\",\n      \"headers\": {\n        \"WyHeader\": \"<YOUR_WYHEADER>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weiyun-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://www.weiyun.com/api/v3/mcpserver\",\n      \"headers\": {\n        \"WyHeader\": \"<YOUR_WYHEADER>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"WyHeader","placeholder":"<YOUR_WYHEADER>","description":"腾讯微云个人 MCP Token（直接填 Token，插件自动拼接 mcp_token=）","required":true,"secret":true,"obtain_at":"https://www.weiyun.com/"}],"iconData":"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMEQ1NjkwRjMzNjExRTc5REE2ODU5Qjk0QTA1RTVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMEQ1NjkxRjMzNjExRTc5REE2ODU5Qjk0QTA1RTVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkEwRDU2OEVGMzM2MTFFNzlEQTY4NTlCOTRBMDVFNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkEwRDU2OEZGMzM2MTFFNzlEQTY4NTlCOTRBMDVFNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6flS64AAAGm0lEQVR42rRXaWxU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"},{"name":"com.tencent/docs-mcp","display_name":"腾讯文档","description":"腾讯文档官方 MCP，支持创建和编辑文档、表格、幻灯片、思维导图、流程图及智能表格。","vendor":"腾讯文档","categories":["办公"],"official":true,"verified":true,"homepage":"https://docs.qq.com/open/document/saas/mcp.html","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://docs.qq.com/openapi/mcp","headers":[{"name":"Authorization","description":"腾讯文档个人 Token（直接填写 Token，不要加 Bearer 前缀）","obtain_at":"https://docs.qq.com/open/auth/mcp.html","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tencent__docs-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-docs-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://docs.qq.com/openapi/mcp\",\n      \"headers\": {\n        \"Authorization\": \"<YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-docs-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://docs.qq.com/openapi/mcp\",\n        \"--header\",\n        \"Authorization: <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-docs-mcp\": {\n      \"url\": \"https://docs.qq.com/openapi/mcp\",\n      \"headers\": {\n        \"Authorization\": \"<YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-docs-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://docs.qq.com/openapi/mcp\",\n      \"headers\": {\n        \"Authorization\": \"<YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"<YOUR_AUTHORIZATION>","description":"腾讯文档个人 Token（直接填写 Token，不要加 Bearer 前缀）","required":true,"secret":true,"obtain_at":"https://docs.qq.com/open/auth/mcp.html"}],"iconData":"data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD2ZSs09mYrn/ZmK9P2Ziu+9mYrvvZmK772Ziu+9mYrvvZmK772Ziu+9l0fvvZlKr/+6eDC////wP/9/MD//fzA//7+wP///8H5pYPB9EsGvfZmK772Ziu+9mYrvvZmK772Ziu+9mYr0/ZmK532Zy4A9mcuAPZnLgD2Zy4A////APZlKUn1ZSrb9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1YCT/9FcX//zUxP////////////////////////////vAqP/zTwz/9WMo//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VnKyX0ZyoA9GcqAPRnKgD///8A92ovEfZnLJ71ZCn/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VkKf/zSwb/+rmf/////////////////////////////dzP//RZGv/1YCP/9WUq//VlKv/1ZSr/9WUq//VlKv/0ZSj/+GYuUP1mNgD8ZjQA/GY0AP///wD2ZioA9mUqd/VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//NMB//5n3r////////////////////////////+8Ov/9Wox//RaGv/1ZSr/9WUq//VlKv/1ZSr/9WUq//RlKf/4Zi5z/WYzAPxmMgD8ZjIA////APttPQD4aTRI9GMn//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9FAN//eGV//////////////////////////////////3gFD/9FEP//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VmKqP2ZyoA9mcqAPZnKgD///8A92k0APZnLyX1ZCj/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/0Vxf/9nA5//728/////////////////////////////iYcP/zTQn/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WYrx/doLQD3aC0A92gtAP///wD6bCkA+WsqAPVmK9z1ZCr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VfIv/0XR7//eLW////////////////////////////+rSX//NKBf/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSrx+WcsFPtoLAD6aCwA////APhnKgD4ZioA9WUquvVlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WMn//RRDv/7x7P////////////////////////////7zLj/9FIQ//ViJv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/5Zisx+mUpAPllKQD///8A+Hc0APh3NAD2ai2M9WIp//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/80oE//quj/////////////////////////////3m3P/1YCP/9V4g//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WQo//ZnLV/4bDUA+Gs0AP///wD2bS4A9m0uAPZnK2X1ZCn/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/0TQn/+JRr//////////////////////////////n3//ZzPf/0Vxb/9WUq//VlKv/1ZSr/9WUq//VlKv/0ZCj/92guhPpuNQD5bTMA////APttLwD8bzAA+WstN/VkKf/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//RTEf/2fEr/////////////////////////////////94te//ROCv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSq1+GMtAPhjLgD///8A92kqAPdqKgD2aCkY9WUq9fVlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9Fsb//VoLv/+7uf////////////////////////////5pID/80wH//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUp//VmK9j6ZTEA+mQwAP///wD5aToA+Wk7APlqOgD1ZizP9WQo//VlKv/1ZSr/9WUq//VmLP/1XR//9FcX//RZGf/0VRT/80gC//zRwP////////////////////////////q9o//yQAD/9FcX//RZGf/0WRn/9FkZ//RZGf/0Vxf/9V8j/vVrLiH1bC8A////APhdMwD4XTQA+FwzAPViK6n1Zin/9WUq//VlKv/1aC7/9FYV//RfIf/1cjz/9W02//VsNP/0WBj/+7+m/////////////////////////////NrL//RiJ//1aC//9W02//VtNv/1bDX/9Wsz//Z/Tv/2dUH/9WUnQvVtMAD///8A+pktAPqaLQD7ny4A93QsevRdKf/1ZSr/9Wgu//RNCf/1ZSr//ebd///////+8+///vPv//7x6///9vL///////////////////////////////7//vTw//7y7v/+8+///vLu//708P///////eri//V1P//2WBpx+2QuAP///wD3gSwA94EsAPeELAD2bitU9WEq//VoLv/0UAz/9Fwe//3l2/////////////////////////////////////////////////////////////////////////////////////////////7y7v/2eEX/81MQ//dmLZf6ZTEA////APleLQD5Xi0A+l0tAPlkLSj1ai7/9FIQ//RWFv/93dD////////////////////////////////////////////////////////////////////////////////////////////82sz/9Fob//RMB//1Zy3/9WYqxvlqKgD///8A+WUuAPllLgD5ZS4A+GYuCvRaG+b1ajL//eXc////////////////////////////////////////////////////////////////////////////////////////////+8m1//NQDf/0UQ7/9Wgu//VlKv/1Zirl+WkrB////wD3Zi0A92YtAPdmLQD3ZCoA9VYVvfmqiv/++ff//dzP//3ay//9283//dvN//3bzf/9287//drN//3XyP/+9PD///////////////////////////////////////q3m//zSQP/9FcV//VoLv/1ZSr/9WUq//RkKv/2aCwv////APVmKQD1ZikA9WYpAPVlKAD1aC2X9Wsz//RcHf/0Whr/9Fsd//RbHf/0Wx3/9Fsd//RcHf/0Wxz/8kQA//qxk//////////////////////////////////5pIH/80YA//RQIP/0VjT/9FUw//RVMP/0VTD/81Qv//dfMFr///8A/GcyAPxnMgD8ZzIA/Wg0APhmLWj0YCL/9V4h//VfIv/1XyL/9V8i//VfIv/1XyL/9V8i//VfIf/zRAD/+Jdw////////////////////////////+JBm//NDAP/1XSL/9ncn//d/If/3fCL/93wi//d8Iv/3hR//93gihv///wD7ZzAA+2cwAPtnMAD8ZzEA+GctRfRlKf/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//RSEP/2gE////////////////////r4//d/Tf/zRAD/9F4o//ReLv/9yAj///QA///iAP//4wD///EA///aA8/6rBAV////APZpKgD2aSoA9mkqAPZpKgD2aSsZ9WUq+fVlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9Foa//VrMv/+8+////////7u5//1bTb/80cA//VlKv/1Yyz/9Fgu//y7DP//8wD//+QA///sAP//ygaz/5IcAPugFwD///8A9mYrAPZmKwD2ZisA9mYrAPZmKwD1ZSrX9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1XyL/9Fsc//7s5P/+9fH/9F8i//RKBf/1Zy3/9WYr//VlKv/zUDH/+p8V///2AP//6AD//c4Emv2YFgD/fCUA+6cUAP///wD5ZS0A+WUtAPllLQD5ZS0A+WUtAPZlKq70ZSr/9WUq//VlKv/1ZSr/9WUq//VlKv/1ZSr/9WUq//VkKf/1YCL/+Jlx//ZtNf/0Twz/9Wgu//VlKv/1ZSr/9WUq//NRMf/4jhz///IA//27DHn7pxEA/qYRAP+GIQD7phQA////APZmLQD2Zi0A9mYtAPZmLQD2Zi0A9mYsXvVlKuP1ZSrJ9WUqx/VlKsf1ZSrH9WUqx/VlKsf1ZSrH9WYrx/VnLcf0UxLH9Fkax/VoLsf1ZSrH9WUqx/VlKsf1ZSrH9FouyveAH97+sRFg+n0lAPyzDAD+qQ8A/4UhAPumFAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////////////////AAAAHwAAAA8AAAAPgAAAD4AAAA+AAAAPwAAAB8AAAAfAAAAHwAAAB8AAAAfAAAAH4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAB8AAAAfAAAAHwAAAB8AAAAfAAAAf4AAAP+AAAH/gAAD////////////////8="},{"name":"com.tuniu/travel","display_name":"途牛旅游","description":"途牛官方酒店 MCP，提供酒店搜索、详情、房型与预订相关能力；机票和火车票使用途牛其他 MCP 端点。","vendor":"途牛旅游","categories":["出行"],"official":true,"verified":true,"homepage":"https://openapi.tuniu.cn/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://openapi.tuniu.cn/mcp/hotel","headers":[{"name":"apiKey","description":"途牛开放平台 API Key","obtain_at":"https://openapi.tuniu.cn/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tuniu__travel/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-tuniu-travel\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://openapi.tuniu.cn/mcp/hotel\",\n      \"headers\": {\n        \"apiKey\": \"<YOUR_APIKEY>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-tuniu-travel\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://openapi.tuniu.cn/mcp/hotel\",\n        \"--header\",\n        \"apiKey: <YOUR_APIKEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-tuniu-travel\": {\n      \"url\": \"https://openapi.tuniu.cn/mcp/hotel\",\n      \"headers\": {\n        \"apiKey\": \"<YOUR_APIKEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-tuniu-travel\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://openapi.tuniu.cn/mcp/hotel\",\n      \"headers\": {\n        \"apiKey\": \"<YOUR_APIKEY>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"apiKey","placeholder":"<YOUR_APIKEY>","description":"途牛开放平台 API Key","required":true,"secret":true,"obtain_at":"https://openapi.tuniu.cn/"}],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDIwNiAyMyUgMzElKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPumAlDwvdGV4dD4KPC9zdmc+Cg=="},{"name":"com.yuque/mcp","display_name":"语雀","description":"语雀官方 MCP，支持搜索知识库、读取和创建文档、维护目录及小记。","vendor":"语雀","categories":["办公"],"official":true,"verified":true,"homepage":"https://www.yuque.com/","repository":"https://github.com/yuque/yuque-mcp-server","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","yuque-mcp"],"env":[{"name":"YUQUE_TOKEN","description":"语雀个人或团队 API Token","obtain_at":"https://www.yuque.com/settings/tokens","required":true,"secret":true},{"name":"YUQUE_HOST","description":"团队空间或私有部署的语雀地址（可选）","required":false,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.yuque__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yuque-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yuque-mcp\"\n      ],\n      \"env\": {\n        \"YUQUE_TOKEN\": \"<YOUR_YUQUE_TOKEN>\",\n        \"YUQUE_HOST\": \"<YOUR_YUQUE_HOST>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yuque-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yuque-mcp\"\n      ],\n      \"env\": {\n        \"YUQUE_TOKEN\": \"<YOUR_YUQUE_TOKEN>\",\n        \"YUQUE_HOST\": \"<YOUR_YUQUE_HOST>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yuque-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yuque-mcp\"\n      ],\n      \"env\": {\n        \"YUQUE_TOKEN\": \"<YOUR_YUQUE_TOKEN>\",\n        \"YUQUE_HOST\": \"<YOUR_YUQUE_HOST>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yuque-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yuque-mcp\"\n      ],\n      \"env\": {\n        \"YUQUE_TOKEN\": \"<YOUR_YUQUE_TOKEN>\",\n        \"YUQUE_HOST\": \"<YOUR_YUQUE_HOST>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"YUQUE_TOKEN","placeholder":"<YOUR_YUQUE_TOKEN>","description":"语雀个人或团队 API Token","required":true,"secret":true,"obtain_at":"https://www.yuque.com/settings/tokens"},{"kind":"环境变量","name":"YUQUE_HOST","placeholder":"<YOUR_YUQUE_HOST>","description":"团队空间或私有部署的语雀地址（可选）","required":false,"secret":true,"obtain_at":null}],"iconData":"data:image/png;base64,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"},{"name":"io.github.upstash/context7","display_name":"Context7","description":"为模型提供最新、版本感知的官方代码文档、API 参考与示例。","vendor":"Upstash","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://context7.com","repository":"https://github.com/upstash/context7","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@upstash/context7-mcp@4.4.4"],"env":[{"name":"CONTEXT7_API_KEY","description":"可选 API Key，用于提高请求配额。","obtain_at":"https://context7.com/dashboard","required":false,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/io.github.upstash__context7/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"CONTEXT7_API_KEY","placeholder":"<YOUR_CONTEXT7_API_KEY>","description":"可选 API Key，用于提高请求配额。","required":false,"secret":true,"obtain_at":"https://context7.com/dashboard"}],"iconData":"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABLCAYAAADXjBHUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8MSlPPgAABA5JREFUeAHtmzFME2EUgB+GQXCgGCSBpeiICRjERROKoYtG4kANC6kDasLCAgNLO+BcBxgYxIHiZhkgRJcahcgmJB1k1HaBBBLtomHTezXVu/+u9N3de03Q9yUM/cPlb7/+79279/9tap4bfwdKXZqtv2FQ6nIOFBIqioiKIqKiiKgoIiqKiIoioqKIqCgiKoqIiiKioog0Q0hil3th+cEU+GX78z5M5pZ8XZObmIX+7ij4JbGagcJhEcIQWhTS034J/FIKcE2kpTXQXHhdWDT0iKgoIqFDr3BYguK3Y0dIlKzXK7tbp16H/+OX7N4WbFm57TSS12Ou9xJkLpPQoson3+GRlZTzj9N/xqLWGy2f/IDFndfASbaO/NRIwpXDxl5mKl9kWFhCD7/lmc2sY+zZvSTErvRCo+jv7oF0POEYe/o2B4WDInDAlqMWrNVjhsWLxBREzl8AaXCO3MSMY2x9/yPM53PABWsyx7oIQ64KhmAqPgbS4BxmyM1urgAnrKIwaS58cOal6Vt3ob+rB6TALwPnsIMhx5GX7LCXB4s7bxyrCslY+UqK9EjCNVYv6QeBXRTeBbO77x1jmNQlVhWuJiwH7KAk7tWEiBScG1YiNUkODAE3nqtpj381ISKiCgclV/glB4eBmyGP8qNeQRoUEVEYfqWvR46xyPlW1roKuxbmnU5KEiL2rIePNiZ9jHmqzyowTUoCuamKmCivhHqty38vqRa4oihzciEmqlR2v+kgTbdaePWYzuSK8oLzcSYaoIEXhoaKamvhExVpkX+GtNPUPDf+E5S6aIeTiIoioqKIqCgiKooIywaoF1jneFXPXE/3yYGYa2z7y75YdS4mCh+AsWduBytnLlGpuHvHZfLVkiXqDLVZ/kXERLV5PK5whgX2vFxzClbrYqJ62jtcY1x7bEipfOSeM9IBUoiJikY6XWOYbLnw6ndFL3aCFGKivFoqXh8uKBuf3H15zn6XiYgoLA282rScOQrbzWbrtzJvRKb9IiLKqzcusde27rHbM3r1BkggImr65h3Ha876yc6qJd/c7bnfOwgSsIvCarzfaPxzHpawg+FnbuHjapY4RcMuytw+l1pNVXAL38x9KY+N0bCwisLt7UatpirVg2x2cEV5PQuGgU1U5YiP8U3iiTvJ1VQF737m6b7M6MNAJ4hrwSZqbWLGdXZyPr8GjQLnsocg7kwvJ/yff68FiyhcSfaQQ0nx5/OVsGgUONfvOf/eBTEEuY4chd6Fwbtc/kna93UYLvjB/IAHaoPc0QYX5kL/cuG/aLPoLxcaiIoiEroVXCwfB6qVpH65wDWXiW6pE9HQI6KiiKgoIiqKiIoioqKIqCgiKoqIiiKiooioKCIqiojVPWi6DUpdfgE8wFukKedIwQAAAABJRU5ErkJggg=="},{"name":"io.github.modelcontextprotocol/fetch","display_name":"Fetch","description":"抓取网页并转换为 Markdown，让模型读取和整理互联网内容。","vendor":"Model Context Protocol","categories":["搜索"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers","license":"MIT","transport":{"type":"stdio","command":"uvx","args":["mcp-server-fetch@2026.10.28"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__fetch/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="},{"name":"io.github.modelcontextprotocol/filesystem","display_name":"Filesystem","description":"为模型提供受控的本地文件读写、目录遍历与搜索能力。","vendor":"Model Context Protocol","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@modelcontextprotocol/server-filesystem@2.1.0","/path/to/allowed/directory"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__filesystem/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="},{"name":"io.github.github/github-mcp-server","display_name":"GitHub","description":"连接 GitHub，管理仓库、Issue、Pull Request、代码搜索与 Actions 工作流。","vendor":"GitHub","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://github.com/github/github-mcp-server","repository":"https://github.com/github/github-mcp-server","license":"MIT","transport":{"type":"streamable_http","url":"https://api.githubcopilot.com/mcp/","headers":[{"name":"Authorization","description":"Bearer <GitHub PAT 或 App Token>","obtain_at":"https://github.com/settings/tokens","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/io.github.github__github-mcp-server/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://api.githubcopilot.com/mcp/\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <GitHub PAT 或 App Token>","required":true,"secret":true,"obtain_at":"https://github.com/settings/tokens"}],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI3OSAyNyUgMzQlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPkc8L3RleHQ+Cjwvc3ZnPgo="},{"name":"com.mastergo/magic-mcp","display_name":"MasterGo","description":"MasterGo 官方设计 MCP，读取设计 DSL、图层、组件和样式并辅助设计转代码；需要团队版账号。","vendor":"MasterGo","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://mastergo.com/","repository":"https://github.com/mastergo-design/mastergo-magic-mcp","license":"ISC","transport":{"type":"stdio","command":"npx","args":["-y","@mastergo/magic-mcp"],"env":[{"name":"MG_MCP_TOKEN","description":"MasterGo 个人访问 Token","obtain_at":"https://mastergo.com/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.mastergo__magic-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-mastergo-magic-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@mastergo/magic-mcp\"\n      ],\n      \"env\": {\n        \"MG_MCP_TOKEN\": \"<YOUR_MG_MCP_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-mastergo-magic-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@mastergo/magic-mcp\"\n      ],\n      \"env\": {\n        \"MG_MCP_TOKEN\": \"<YOUR_MG_MCP_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-mastergo-magic-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@mastergo/magic-mcp\"\n      ],\n      \"env\": {\n        \"MG_MCP_TOKEN\": \"<YOUR_MG_MCP_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-mastergo-magic-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@mastergo/magic-mcp\"\n      ],\n      \"env\": {\n        \"MG_MCP_TOKEN\": \"<YOUR_MG_MCP_TOKEN>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"MG_MCP_TOKEN","placeholder":"<YOUR_MG_MCP_TOKEN>","description":"MasterGo 个人访问 Token","required":true,"secret":true,"obtain_at":"https://mastergo.com/"}],"iconData":"data:image/x-icon;base64,AAABAAEAgIAAAAEAIAAoCAEAFgAAACgAAACAAAAAAAEAAAEAIAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADibzgC43A5EONwOUribzmB4nA4n+NvOXrjcDlQ43A5GuJvOQThcDgC33BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nA4AONvOALjcDgE4G88FONwODzjcDg843A4PONwOBLjcDgE43A4AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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Of/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwONnibzcoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN+AQATjcDlc43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDhM4nA50eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A41eNvNyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfgEAA4nA3NuNwN3rjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOEbicDmb43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDm1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJzOhDicDdg43A3geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjbzd+5G83KOJvOUjicDnz43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A4++NwOFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcEAE4nA4OuNwOHjjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJvN27ibjcS4W84GOJwOLHjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDjT43A4DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFwORbicDhi43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjbzd+4m84QuBvOwbicDgC4nA4VOJwOO3jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5++NwOGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgczUE4nE3PuJwOH7jcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4283geJvN2LibzgY33BAAAAAAADicDga4nA4peNwOfvjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDix4nA4FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORwOBrjcDhw43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjbzd64m83Ot+AQAIAAAAAAAAAAAAAAADibzhO4nA44eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A55+JwOFDecDgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5HA4SuNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A3geNwN2DjcTcSAAAAAAAAAAAAAAAAAAAAAONwOA7jbzij43A4++NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOfvicDmd4nA6FgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORwOhjjcDh443A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDd65HE3MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwOEDibzjv43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A53+JwOU7ecEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A5UuNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOF7lcjkGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A4AuJvOKPjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwOPnibziP4nA5AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA34BAAONxNyrjcDd043A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDh65W84IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A4NONwOe/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA41eJwOCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiczkM4nA3WONwN4HjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOEzhcDkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjbzgK43A4n+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3nBAAuJwODDjcDd043A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHibzdu4nA5Ht9wQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwOALjcDhE43A55+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A51eNvOBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhbzkS4nA4WuNwN4HjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4283fuJvN0TiczkGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwORDjcDmR4nA5/eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NvOfvicDhe4G84AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4HA9AuJwOTDicDh843A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwN4HjcDdm43E3HN+AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFwODjicDjP43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn94nA5q+JwORoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkcDgQ43A4buNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A3euRwNzoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA33A4COJwOI3icDn343A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOeXicDlU33BAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORvNzzjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOIHicDhg5nM5DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4W84NOJwON3jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDn74nA5oeNvOhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlcjkS43A4buNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4fuNwOC4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcDgE4nA4k+JwOf3jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwOOHhcDhKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORwOUbjcDh+43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDhe53A4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcDgc4nA47+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDj74nA4i+FwOAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN+AQADjcDkg43A4bONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4nA4euFvOiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADicDiL43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOOHibzciAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nM5CuJxN1DjcDd+43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNvN37icDhK4nA4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFwOCzjcDnX43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA4dgAA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Of/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/ibzjl4nA4VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkcDgy43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4nA4YudwOA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN5vQATicDl842859eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5+eJwOKHhcDgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA53A4DONvN2TjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHhcDoqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFwOx7icDnb43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDjn43A4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkcDg84284euNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4XOFwOwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA33BAAOJwOXLicDn943A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwOJHjcDgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A5GONwOGbjbziB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNvN3jicTgk4Hk8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4W84CuJvOMvjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDnn33A4GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwOAbjcDhC43A4fONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDd+43A3SuRyNwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhbzcC4nA4XuJwOffjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+Nw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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJwOGjicDjt43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A44+NwOFIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nE3JuJwN3zjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOGjeb0AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nA4GuJwOLvjcDn943A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NvOf3jcDir43A4EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOdwOArjcDhc43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjbzd+4nA4LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A4UONwOPfjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA48eFvODgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5HA4LuNvN3TjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwN1ricjgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjcDgG43A4u+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+Nw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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43A4HONvOKvjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOfHicDhu4nA4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBwPBDjcDdy43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDhw4HA8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjbzcA43A5VONwOePjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn94m84s+NwOBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcEAC4nA4TuNwN4HjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4283geJwODLecEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkcDoQ4nA5oeJvOfvjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwOOvicDhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwORzjcDh043A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjbzdo4Hk8BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhcDg+4nA45+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA4rd9vNwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADncDgI43A3UONwN37jcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A3euNwNy7kcjcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN9wOAbicDil43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOfXhcDoyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORwOCjjcDhw43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDdY5HE3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBwOCzicDj743A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDn94m85n99wQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADlcjkM43A4UuNwOH7jcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4nA4cuJwOCjmczkCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4W84BOJvOJ3jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwONfhcDosAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5HA5AuNwOC7jcDh643A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJvOH7jcDhM5283CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcDgA4XA4POJwOefjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn14m84eOFwOAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjczoO43A4XONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4nA4bOFwOR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhcDgS4nA4l+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOMPjcDgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJwODTjcDh843A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOH7icDhE33BABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN9wOALicDlA43A51eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDnx43A4duJvNwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfgEAE4nA3bONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4m43cuF0OhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBwPgjibzmJ43A59+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA5/eJwOLngcDgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA33BAAuJwODzicDd+43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwN37jcTc43oBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJwOjTicDnT4m85/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDnt4XA5VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhcDsW4nA4buNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A3ZORwNwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3nBABOJwOY3jcDn543A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JwOa3fcEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA53A4BuJwOEbicDh643A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOHjjcDgu5nM5AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4m87KOJwOefjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDnv4m86PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkcDgg43A4bONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4WORwOBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADfcEAC4m85j+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+JvOJXhcDkKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5nA4CONwOEbjcDh+43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOHDibzgq5nA4AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhcDsg43A54+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDjT43A4LgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAORwOgDjcDgk43A4duNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDh+4nA4Tt9wQAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONvOgjibzl84nA5+eNwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A59eNwOHrjcDgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5G85BuNvOFbjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJvN27icTgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFvOCricDjH43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/ibzjF4nA4LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhcDsQ43A4euNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4283Rt+AQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nA4BuJwOHjicDn343A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA58eJvOHTebzcEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFwOwricDhm43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwN3bkcjcMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nA4LOJvOMXicDj/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDm74HA8EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA33A9AuJwOS7icDh+43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDh+5HE4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nA4eOJvOPPjcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA58+JwOkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4XA5EOJwOFrjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOGDicDgOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADicDgi4nA4z+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDiv33BABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADecEAC4nA4MONwOHTjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHicDh243A4MudwOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADicDh043A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A56+JwOD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADicjkM4m83VuNvN37jcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geJwOFbhcDoOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJwOA7jcDnf43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDiR43A4DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN+AQADibzcu4283dONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDhy4nA4Kt9wQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwOFbjcDn343A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/4nA40+JwODYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN+A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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONwOjTjcDnb43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/icDj34nA5ieJwOQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOdwOAbjcDg843A4eONwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB43A4geNwOIHjcDiB4283buNvNybegEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOJwOVrjcDnh43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A5/+NwOf/jcDn/43A58+JvOaHhcDog33BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAONv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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5////////////////////wA//////////gH/////h/4AB/////////AAf////AH8AAB///////8AAD///+AA+AAAD//////4AAAf//+AAHgAAAH/////gAAAH//4AAAwAAAAH////AAAAA//4AAAMAAAAAP//+AAAAAP/8AAABAAAAAAP/4AAAAAD//AAAAQAAAAAAfgAAAAAA//gAAAEAAAAAAAAAAAAAAP/4AAABAAAAAAAAAAAAAAD/8AAAA4AAAAAAAAAAAAAB//AAAAOAAAAAAAAAAAAAAf/gAAAHwAAAAAAAAAAAAAP/4AAAB8AAAAAAAAAAAAAD/8AAAA/gAAAAAAAAAAAAB/+AAAAP4AAAAAAAAAAAAAf/gAAAH/AAAAAAAAAAAAAP/wAAAB/wAAAAAAAAAAAAD/8AAAA/+AAAAAAAAAAAAB/+AAAAP/gAAAAAAAAAAAA//gAAAH/8AAAAAAAAAAAAP/wAAAD//AAAAAAAAAAAAH/8AAAA//4AAAAAAAAAAAB/+AAAAf/+AAAAAAAAAAAA//AAAAH//wAAAAAAAAAAAP/wAAAD//8AAAAAAAAAAAH/8AAAA///gAAAAAAAAAAB/+AAAAf//4AAAAAAAAAAA//gAAAP///AAAAAAAAAAAf/wAAAD///4AAAAAAAAAAH/8AAAB///+AAAAAAAAAAD/+AAAAf///wAAAAAAAAAA//AAAAP///8AAAAAAAAAAf/gAAAD////gAAAAAAAAAH/4AAAA////4AAAAAAAAAD/+AAAAf////AAAAAAAAAA//AAAAP////wAAAAAAAAAf/wAAAH////+AAAAAAAAAP/4AAAB/////gAAAAAAAAD/+AAAA/////8AAAAAAAAB//AAAAP/////AAAAAAAAAf/gAAAH/////4AAAAAAAAP/4AAAB/////+AAAAAAAAD/8AAAA//////wAAAAAAAB//AAAAP/////8AAAAAAAAf/gAAAH//////gAAAAAAAP/4AAAD//////4AAAAAAAH/8AAAA///////AAAAAAAB//AAAAf//////wAAAAAAA//gAAAH//////+AAAAAAAP/wAAAB///////gAAAAAAH/8AAAA///////8AAAAAAB//AAAAf///////AAAAAAA//gAAAH///////4AAAAAAP/4AAAD///////+AAAAAAH/8AAAB////////wAAAAAD/+AAAAf///////8AAAAAA//gAAAP////////gAAAAAf/wAAAD////////4AAAAAH/8AAAB/////////AAAAAD/+AAAAf////////wAAAAA//gAAAP////////+AAAAAf/wAAAD/////////gAAAAH/8AAAB/////////8AAAAD/+AAAA//////////gAAAB//AAAAP/////////4AAAAf/wAAAD//////////AAAAP/8AAAB//////////wAAAD//gAAA//////////+AAAB//4AAAP//////////gAAAf//AAAH//////////8AAAP//4AAB///////////AAAD//+AAA///////////4AAB///gAAf//////////+AAA///8AAH///////////wAAP///AAB///////////8AAH///4AA////////////gAB///+AAf///////////4AA////wAH////////////AAP///+AD////////////4AH////wB/////////////AD////+A/////////////8H//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8="},{"name":"com.notion/mcp","display_name":"Notion","description":"Notion 官方托管 MCP，支持工作区搜索、页面读取与编辑、数据库查询。","vendor":"Notion","categories":["办公"],"official":true,"verified":true,"homepage":"https://developers.notion.com/guides/mcp/get-started-with-mcp","repository":"https://github.com/makenotion/notion-next","license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.notion.com/mcp","headers":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"该服务使用 OAuth 或客户端登录；首次连接会按客户端提示进入授权流程。","detail_path":"servers/com.notion__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.notion.com/mcp\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACFlBMVEVHcEz19fV9fX2CgoL////z8/P////////////19fWBgYH7+/sAAAD///94eHj8/Px+fn74+Pinp6fv7+/4+Pj8/PyTk5P////39/f+/v5HR0f7+/v7+/tWVlZwcHD////////9/f1iYmJeXl6Ojo7x8fFJSUn39/f////z8/Pz8/Pz8/P////////l5eV9fX3////////8/Pz6+vr7+/vBwcH6+vr7+/vj4+OCgoL////6+vr4+PjPz89bW1v////6+vo4ODj6+vqmpqb5+fn///+NjY3////4+Pj5+fn19fXv7+/////9/f2Hh4fj4+MeHh76+vqZmZn////9/f3////9/f3r6+vv7+////8AAACEhIQFBQUODg7x8fEBAQH29vb5+fn+/v4DAwP8/PwFBQX6+voCAgL9/f3v7+/19fWAgICDg4P4+PgHBwc7OzsJCQk3NzeBgYEXFxcQEBCKioqVlZVQUFAkJCRzc3Pb29swMDCFhYU/Pz+RkZGJiYnm5uZjY2MSEhJFRUXOzs4sLCwdHR3Q0NDCwsLz8/O3t7fi4uJra2udnZ2Hh4cLCwulpaWZmZk0NDS8vLxbW1ufn5+rq6tpaWlubm7t7e1BQUGtra1hYWFMTEyysrJtbW3y8vLKysro6OjZ2dlNTU3c3NyNjY2vr6+0tLQZGRkqKirr6+vS0tK5ubnGxsZ7e3tXV1d+fn6B6Hx5AAAAWXRSTlMAgPv6AQP9Av5++kz+8f61+mj+BCTT/fx4z/5zi/77DcSD/f77CP1J7Vg3Ffn0/P0dQf043fx7+Pz7ybxU+/vXnP3z/WPi+hCVpIf7rrb6+/13/Nm+5tQNQIcsNjsAAAJ9SURBVHjadZPlWxtBEMYXGgMCBCle3KXuRt3dZxLgYndJCHFCggYIkuBSrGhTp0L/w+4dDYQH8n7YDzu/553ZnRlCRISkldWkV1dUpWTlXUsurK/MhMSLWQVETCO8Cp6/evm6rlYGYWkY36IMDp8iYqkAPAIJaAIjG8HUjPj8qznTHheHeP0KnDubJphUwMOSZxa5XI68VM4f1rZl76xNn5EJl9KJmJA4KMWG3rW/3anBjfZNhhWSQHsX9p+HG7dohTGgwIYP9G6PNOC2OG9KII93UKAeF5htRNfCbI78/P1rbuy9FbHYBAnUIRb1HNodSfNbK9aBwYkmDEuLdyBGAFRN3P87i9MzvdRWspbUMzW5uoSKMEDp8Zlhf8jXGGDDZbCgxEM7DtjQuFunBgwt60YGzBgfARgBfKtzU+OfQQetA/bvs7p9DrCCnBbbwGD41oXLrHofoDaNok2PY8BAJ3bScx8AzajSorMdwIHmKIDdhTQJDSkPBJTYOop8Ekd0wNiH6GR6ogIOcFML75eogBJ0XYguOyWjAeCfQE6FzQcCZuF1ZtTqI4A4uLAD8P/DgqkDbRHAZRiyIMcDOpjHjm6TBobpd+0CZdlwjI4G34tej9XuNVBwrn8hBOFukgSQfEK+m6zRxNKwQWPYMw9SUgRHPeiKmAfQqQPrH0P+fsFBJBUlwxkLuv0zXyfdrX+8y0dy6Gi6bFqa+AnEEWpx/DR0I4d7JddP9JU/pVNNV5ecOClLstj6Bjus5VvF+bGlL1KDw0Mji2oJPBa2U0xyQbLoC6gjt0dSW1f5puju9oJLSUp2IsgSb2cXJt+/9yA3pSrhXXV6zds0IiL/AL4HQ7B5sr5fAAAAAElFTkSuQmCC"},{"name":"com.pixso/mcp","display_name":"Pixso","description":"Pixso 官方 MCP，支持读取设计稿图层、组件、变体、设计变量和样式并转换为代码。","vendor":"Pixso","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://pixso.cn/","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://pixso.cn/mcp","headers":[{"name":"Token","description":"Pixso 个人访问 Token","obtain_at":"https://pixso.cn/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.pixso__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-pixso-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://pixso.cn/mcp\",\n      \"headers\": {\n        \"Token\": \"<YOUR_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-pixso-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://pixso.cn/mcp\",\n        \"--header\",\n        \"Token: <YOUR_TOKEN>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-pixso-mcp\": {\n      \"url\": \"https://pixso.cn/mcp\",\n      \"headers\": {\n        \"Token\": \"<YOUR_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-pixso-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://pixso.cn/mcp\",\n      \"headers\": {\n        \"Token\": \"<YOUR_TOKEN>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Token","placeholder":"<YOUR_TOKEN>","description":"Pixso 个人访问 Token","required":true,"secret":true,"obtain_at":"https://pixso.cn/"}],"iconData":"data:image/x-icon;base64,AAABAAEAICAAAAEAIAAoEQAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7s4QP+7Of//uzm//7s6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/r0BA/7E+//+xPv//sT7//7E+//+xPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+nRED/pkP//6ZD//+mQ///pkP//6ZD//+nRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5tIQP+cSP//nEj//5xI//+cSP//nEj//5xI//+bSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/k0xA/5JN//+STf//kk3//5JN//+STf//kk3//5FOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+HVED/h1L//4dS//+HUv//h1L//4dS//+HUv//h1G/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3xYQP99V///fVf//31X//99V///fVf//31X//99V78AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/dFxA/3Nc//9zXP//c1z//3Nc//9zXP//c1z//3NcvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9oYED/aGH//2hh//9oYf//aGH//2hh//9oYf//aGKAx2z/QM9o/0DPaP+Az2j/v89o///PaP//2V/o799a28DZYeyg/0irQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/2BoQP9eZv//Xmb//15m//9eZv//XWW//2BoQMFu/4DHa///zGn//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//32DrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/VGxA/1Nr//9Ta///U2v//1RsgLNw/0C6b/+/v23//8Rs///Kav//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//2GT2799i73AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9IcED/SXD//0lw//9KcICrdP+AsXL//7dw//+9bv//wmz//8hq///Naf//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//9dm98AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/0B0QP8/dP//PnSAo3j/gKp1//+vc///tXH//7pv///Abf//xWv//8tp///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//9Rm+nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/NHhA/zR6gJt6/4Cid///p3X//610//+ycv//uHD//75u///DbP//yWr//85o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//0Gf+7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTfP+Amnr//594//+ldv//q3T//7By//+2cP//u2///8Ft///Ga///zGn//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi4D/gJJ9//+Ye///nXn//6N3//+odf//rnP//7Nx//+5b///v27//8Ns/4DLbP9AAAAAAAAAAADhYO1w32Hv389o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIOA/0CKf///kH3//5V8//+bev//oHj//6Z2//+sdP//sXL//7dw//+7cP9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA12X3wM9o///PaP//z2j//89o///PaP//z2j//89o///PaP+gAAAAAAAAAAAAAAAAAAAAAAAAAAB8g/9AgoL//4iA//+Nfv//k3z//5l6//+eef//pHf//6l1//+vc///tXL/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Wf+389o///PaP//z2j//89o///PaP//z2j//89o/8AAAAAAAAAAAAAAAAAAAAAAdIf/QHqF//+Ag///hYH//4t///+Rff//lnv//5x5//+hd///p3X//610/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRaf1wz2j//89o///PaP//z2j//89o///PaP//z2f/7wAAAAAAAAAAAAAAAAAAAABzh/+/eIX//36D//+Dgv//iYD//45+//+UfP//mnr//594//+ldv+A/0izQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPaP//z2j//89o///PaP//z2j//89o///PaP//AAAAAAAAAAAAAAAAa4r/v3CI//92hv//e4T//4GC//+HgP//jH///5J9//+Xe///nXr/gP9Ks4D/Tb7/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9o///PaP//z2j//89o///PaP//z2j//89o//8AAAAAAAAAAGOM/79oi///bon//3SH//95hf//f4P//4SB//+Kf///j37//5V8/4D/SLGA/0y+//9Qyf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPaP9Az2j//89o///PaP//z2j//89o///PaP//z2j/vwAAAABcj/+AYI3//2aL//9siv//cYj//3eG//98hP//goL//4iA//+Nfv+A/0ixgP9Mvf//UMn/+1TR//VY2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9o/7/PaP//z2j//89o///PaP//z2j//89o///PaP+AWo//gFmQ//9ejv//ZIz//2mK//9viP//dYf//3qF//+Ag///hoL/v/9Is0D/TL3//1DI//tU0f/1V9j/71vf/+lg54AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPaP+Az2j//89o///PaP//z2j//89o///PaP//z2j//89o/0Baj/+AWZD//1yP//9ijf//Z4v//22J//9yh///eIX//32E/7//SK9A/0y8//9QyP/7U9H/9VfY/+9b3//pX+b/42Lt/91k84DXaPdAAAAAAAAAAADPaP9Az2j/gM9o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j/QAAAAAAAAAAAWo//gF+O//9ljP//aor//3CI//92hf+AAAAAAP9MvL//UMf/+1PQ//VX1//vW9//6V/m/+Ni7P/dZPL/12b4/9Bo/v/PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o/4AAAAAAAAAAAAAAAAAAAAAAAAAAAGSL/0Boi/9AAAAAAAAAAAAAAAAAAAAAAPxT0P/2V9f/8Fve/+pf5f/kYuz/3WTy/9dm+P/RZ/7/z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9VjXgPBb3v/qXuX/5GLs/95k8v/XZff/0Wf9/89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA617lgORi7P/eY/H/12X3/9Fn/f/PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA32TzQNdl97/RZ/3/z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP+/z2j/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9o/4DPaP//z2j//89o///PaP//z2j//89o///PaP//z2j//89o///PaP//z2j/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9o/0DPaP9Az2j/gM9o/7/PaP//z2j//89o/7/PaP+Az2j/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},{"name":"io.github.microsoft/playwright-mcp","display_name":"Playwright MCP","description":"基于 Playwright 的浏览器自动化 MCP，支持页面操作、表单填写、截图与测试。","vendor":"Microsoft","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://github.com/microsoft/playwright-mcp","repository":"https://github.com/microsoft/playwright-mcp","license":"Apache-2.0","transport":{"type":"stdio","command":"npx","args":["-y","@playwright/mcp@0.0.83"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.microsoft__playwright-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI2OCAyOSUgMzMlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPlA8L3RleHQ+Cjwvc3ZnPgo="},{"name":"io.github.modelcontextprotocol/sqlite","display_name":"SQLite","description":"查询和管理本地 SQLite 数据库，支持建表、读写、汇总与数据分析。","vendor":"Model Context Protocol","categories":["数据库"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers-archived","license":"MIT","transport":{"type":"stdio","command":"uvx","args":["mcp-server-sqlite@2025.4.25","--db-path","/path/to/database.db"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__sqlite/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="},{"name":"cn.12306/tickets","display_name":"12306","description":"社区维护的 12306 火车票查询 MCP，支持余票、过站和中转方案查询，不直接购票。","vendor":"12306 社区项目","categories":["出行"],"official":false,"verified":true,"homepage":"https://github.com/Joooook/12306-mcp","repository":"https://github.com/Joooook/12306-mcp","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","12306-mcp"]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/cn.12306__tickets/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"cn-12306-tickets\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"12306-mcp\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"cn-12306-tickets\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"12306-mcp\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"cn-12306-tickets\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"12306-mcp\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"cn-12306-tickets\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"12306-mcp\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI5OSAyNCUgMzMlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPjE8L3RleHQ+Cjwvc3ZnPgo="},{"name":"com.weibo/mcp","display_name":"微博","description":"社区维护的微博 MCP，支持用户、微博、热搜、评论、话题和关注关系查询。","vendor":"微博社区项目","categories":["其他"],"official":false,"verified":true,"homepage":"https://github.com/qinyuanpei/mcp-server-weibo","repository":"https://github.com/qinyuanpei/mcp-server-weibo","license":"MIT","transport":{"type":"stdio","command":"uvx","args":["mcp-server-weibo"]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/com.weibo__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-weibo-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-weibo\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-weibo-mcp\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-weibo\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-weibo-mcp\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-weibo\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-weibo-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-weibo\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDE5OCAyOSUgMjklKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPuW+rjwvdGV4dD4KPC9zdmc+Cg=="},{"name":"com.tencent/weread-mcp","display_name":"微信读书","description":"社区维护的微信读书 MCP，支持书架、书籍搜索、笔记划线、热门书评和阅读进度。","vendor":"微信读书社区项目","categories":["办公"],"official":false,"verified":true,"homepage":"https://github.com/freestylefly/mcp-server-weread","repository":"https://github.com/freestylefly/mcp-server-weread","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","mcp-server-weread"],"env":[{"name":"WEREAD_COOKIE","description":"微信读书网页版 Cookie","obtain_at":"https://weread.qq.com/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.tencent__weread-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weread-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-server-weread\"\n      ],\n      \"env\": {\n        \"WEREAD_COOKIE\": \"<YOUR_WEREAD_COOKIE>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weread-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-server-weread\"\n      ],\n      \"env\": {\n        \"WEREAD_COOKIE\": \"<YOUR_WEREAD_COOKIE>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weread-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-server-weread\"\n      ],\n      \"env\": {\n        \"WEREAD_COOKIE\": \"<YOUR_WEREAD_COOKIE>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-tencent-weread-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-server-weread\"\n      ],\n      \"env\": {\n        \"WEREAD_COOKIE\": \"<YOUR_WEREAD_COOKIE>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"WEREAD_COOKIE","placeholder":"<YOUR_WEREAD_COOKIE>","description":"微信读书网页版 Cookie","required":true,"secret":true,"obtain_at":"https://weread.qq.com/"}],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI5NCAyMSUgMjklKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPuW+rjwvdGV4dD4KPC9zdmc+Cg=="},{"name":"com.yinxiang/mcp","display_name":"印象笔记","description":"社区维护的印象笔记 MCP，支持连接测试和把 AI 生成的 Markdown 笔记保存到印象笔记。","vendor":"印象笔记社区项目","categories":["办公"],"official":false,"verified":true,"homepage":"https://www.yinxiang.com/","repository":"https://github.com/yinxiang-team/YXBJ-MCP","license":"ISC","transport":{"type":"stdio","command":"npx","args":["-y","yxbj-mcp"],"env":[{"name":"YINXIANG_AUTH_TOKEN","description":"印象笔记授权 Token","obtain_at":"https://www.yinxiang.com/","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.yinxiang__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yinxiang-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yxbj-mcp\"\n      ],\n      \"env\": {\n        \"YINXIANG_AUTH_TOKEN\": \"<YOUR_YINXIANG_AUTH_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yinxiang-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yxbj-mcp\"\n      ],\n      \"env\": {\n        \"YINXIANG_AUTH_TOKEN\": \"<YOUR_YINXIANG_AUTH_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yinxiang-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yxbj-mcp\"\n      ],\n      \"env\": {\n        \"YINXIANG_AUTH_TOKEN\": \"<YOUR_YINXIANG_AUTH_TOKEN>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-yinxiang-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"yxbj-mcp\"\n      ],\n      \"env\": {\n        \"YINXIANG_AUTH_TOKEN\": \"<YOUR_YINXIANG_AUTH_TOKEN>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"YINXIANG_AUTH_TOKEN","placeholder":"<YOUR_YINXIANG_AUTH_TOKEN>","description":"印象笔记授权 Token","required":true,"secret":true,"obtain_at":"https://www.yinxiang.com/"}],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAABCQklEQVR42u296ZMc15Hg+fMXmVknUEDhvgiAEg9JFG9KIkU2tdPbkmZselY2tl/mw3yb+a96zfYfGLOd7Znp2ZZ6WgdFiRQptngTvEAQJAEQZ6GuPOL5fvAXmZGREZmRWZlVWWCFsazAqqjMyAh3fz/354ewd4zlePbdRyX1v5L9UhUUxP6X9Llo8l1VOy8gar9KvgPgk9+/+sgbunfXt37I3i0YfDz33vdz7pWgmns/I2AWmAdmgBlVZkBqClWQKJxXAZwmOqDEisZByGNB6kADpKHKJrABbAINTSlC7zW0L1Nff/TPew9vwFHZuwVDGQoHVINg1zLfq6l/7wP2AwuqzAPzagpRC+clr1MJ4u8VWnS+mkHgN4B1YE3hLva1ZopBM3xPvurhqwHEmcVl79hbAQYfz7//WMd8qjpFXRBWF4R1BjgEHFOV48DR1NchYAnYbxafSlgNIpBI268jLkims2WE8F/3l0CsSgwSA3FQkEZQihXglirXoP11FfgK5GtgVU1BvFdbUcJrKsAbj/15TzH2FKBb4NP3RFUrwH5FDwPHgSPA4fC1rMoyyIEg8MnXYrD4s0FhUuZXur6nUD+ck3MZmjq/+6dNYEOVVeBOUIY7wG37khsK14EbKF97U4xrwE2xFcJn3+qbrBB7CGRSVg3Mvhi+9it6AjgHfAs4C5wGTqiyAFIJf5esDpL6/wLBlnwZz70g6TjGvddaU6UaMOtYOMWHLw1+wnWULxUuAZ8AnwKfAzcDRq0GlKqncGlvBbi3rf33U59VEhxJsGYZeEBVHwYeBu4P1n9fUIw5YDagTZQrzAqDhF8zHmt2hZCMY52nIKrFjzLlUDcVNrXjR6wBtwUuqfIh8D7wnsIVcHdBWkER2srwl8f/pHsKsMuPFz54JCBN++MGKy0HgBMg5xPrrqpngpU/pejRIPRRr+CVEf5u7NECye1RFJURhR80eZ2UQ5E5Gig3zU/gC4XPQS6DXAK5iK0WX6tqw1aT9ivom0+8vodAu1zBK8GSLwVrfxb4DvB4+H4qCHxF0SiFNQOFP1cIe61yIerknTus8DNY+BGoaXDWFb4bfInrwMfAX4A3w7+vgd4KmNRIodXeCrBLrL50nFmigDhLwIMgT4E8AZw3x1aWVHURi9uL9jznBEm0hOWXnluatvzac9MTLJKBfkEJ7CkUfum7QkkTWAdZUdVbwJemCPo68HZYLdYNkcQDvPnEvYVGco8IffazVMxZ5T7gAeAhkAft33IeOAgyoynp0xzRywrnYOHPRG5UC6yxpF6j/yqxRezpCSGlhD/7HrFZff0c+FjhQ+AC8AEqn4J8rVBPL4xvP/nqHgJNkSInu6v7zLpzNiDOD8L3IyBJfN51y0iR5R98FAr/AJujWgKpto49OVglOQ66Yv6O7gceVvg28KzCBZTXFV4H3gW+Egu7btwraLRrV4AU6oSHxyxwWJVHgWeD4N8XrP0+kFpHuHVk4R8Ve9K2Xwc4uxPGHvLuQ3JWSmFir6yD3AGuCPI28AdBXle4qHA3bM4pwHtPvqp7CrADnB8Y/xTwXVUeAx7BQpnnQRbpJKDlCPD2YU9H+KcKe4qEH9UuBa8LXAE+AnkH5U2FN9Wc5rtAKx3Levep3YNGuxWBJFj8A1jo8gngBeBH2M7tjCWdiRRBwXZjj0wn9pQRfsSMzOlwb7+v8P2AmH/oRI5YDX6E7CY02jUrwE8+eETClmeCO+eBp1X5a+B7wAnDHWrZpd4Ea3qxZ7DibRf2CF7z3PXwOsFZ9ibsN4Lw/x74ncBbmH/QDKuA7inAeATfQpoBd7xt/z8ehP8pzBodMcEf9MCnD3vKrDpZ5Zkc9kjX33YXLUj2vTUI/IcC/wL8SZXXgIvAnXTK9vtPT68yVHaJklaAJW/L8OPAz1R5MizLIfmsd5kfLPzTgT1lbdTksEcC9nTeT3JWoJy8pP0Cj4Zgw0PYRtsrCh8AX2O5RjrtwjWVuJNcn5rwH1J4SuFfAc+rcl/g/5mih90feaYdeyTnGnpfZ/zYkxV+GehvhOuMsbqFK2qrwW+Bf8IS8DaDbzCVK4FMsfA7tfSEBxSeUfhxwJ7zwepL90fofeDax/hML/YkuUO5dIP2xZ4cRS2NPTmWX6WM8KdfPcbSr98NvsHLqrwF3LD6BOHCM69MlRJMKwJVg4X/lsJPgL8GHlXlYPc1D8aeYS3/zmJPr8JoH4ulPcIvA+Foi9hTaDXDeVGIFO0HTqtyHFhUyzW6GlaJqVKAqVkBguUXoBqSth4D/r2Hp4EzquwjlZ15L2KPFkR5pM9raA7yZKNeE8Kews8Z3r6OJdu9o/DfgZdALhgSibfV4A/6jVaAFy88Gp68Ty5mXi28+UPgJwo/VitCmc2/7HLYUyabc1qwR/tYfdU8gesf9doG7Cn8rOHj3ML8gpdAXlLlDZBbgA93Uz/6wSvfWARKF5vvU6vAehH4mcIP1eprKxQ+8LLYU17XdxJ7lGFSI8rch23Bnn7XKdjezI9ADmF10w54S9HrWCrF4Ft8L64AL154NPCIOmAhhDf/BvipmuO7pNqdtDYs9oxu+Xcee/pHegYJv+b4CRPHnj6/F1RZx9KrX1P4b8CvQ6i0GVYB/UYoQAd7NFh+XQaeCY7uX6llIy4W97vZbuwp9icmiT1Z4dcS9yH7KjuEPf38roaaM/wK8KugBEmoVHcChyo7p3RaCUviY8AvgOcVzqs1khphub+3sEdGxh52GnsKX0Ftt/4E8FchyueBl7Hd4012IMV6W1eAFPZUAhu+CPw7LPf8pMLcsA99WOzpjaIUYU/xA98V2BMS2jw7ij1Ff9vCWrm8q8rfA/8D+EyRdRD95IfbFx2SbRL89B2pgB7Dsjd/rvb9ZLHlHx/2FONEb/iwqF/PrsCe9utPBfYUmXSvyl3gz8A/KvIPwCcga8nC+MkP/3DPIFAae46pMf8vQrjzpEJ10tjTp4cmRW1L8sBHdfRbsK3YQ1LJLIXXsk3YU3Q4rHrvaUXmsSozAT5iGyvOou3GnrCz+3+qVW0dxxo9bRv29KYM9BN+KRT+3YA9krl+wx6ZMPbIQD8q9feiVqm3D+RkaAP5NZZu3Tr4n89w6+8u704Eyon2HAm482/V2P9EsfBvD/Z0qqv69+xJC/9Aa1jweZTtxx7JUd7JYE9vh4uiLcOCyJuCrAJ/RvkHbOf4U4UNDe3hL/7o5V2HQIl0OWBZLdrz70JS20m2FXukz+X169vQy7N9Qkm97W2zHysnXWfS2FMG27aOPVnDoiVuV9fnE2AB5fEgk7exxLpPsd5EgwNzU6cAlt7g1Da5ngF+EbBnJOHvxZ6ypYXSY1U1dZIWiH5eiFMTCfM5Ah9bbENiQVoSuugE6nAQRwIVhdAnWlIKIS60blZSvyjGnmyCZz/syVr0QZVko2PPKJY/XUnc9gm+A/wH7G79PbZv0Dj3x+fk4o9e1glZ6fEeSfki1pDqUYX/Q+FfY6kOc1vHnnLCn5ci3E/4u4WmezMMNQF3dwW5I7AisAG6qWgdNHTsFy9GsukH7sJXBagpMivILNaG9wDES0o8r+BS1yr52KNdYZSskueWMBamU0vfSM7EsYd0jXPqiBVuK7wE/FeQX2E7yO2ZB+PEoUmtAALMhdyev1Hb+DiPNZjdIvaUt/yFf5Mr/AWbYd4WYVkVuC3IVUd0ReCGoHdA1xRdB60r2uqweF5isjiQGUEWnDVqOQB6XNETih5VdEnQWQ2hif73QTPClG2zWCTRUhppJo49RZoXqW2SPZNyihtYZqlnzEX3lXFb/vCZqkHgX1T4KdamZGYqsSdYe0MWMY8lI/zRVw73ocN/AHodWhvYpn4yz8UDPkz1GqSy9aA0N4EvgI/BLQnulKCPCK0zit+vaFSMPV4HC38ad2QopNlW7Ml1o8IYqSPAkyi3wo9/i3W5HisGReMU/nBlVbVY/4vA32LO75J2qb9MB/aE/5GGw1130BTbpktS8DYhuhwh7zh4W9DPxHohrIvZpNYI0erEh0jmvaxb0E9WgQ3BRcACaJV2K4Be4e/+jGV2d2Ug0uRb/LzU6wlgT+aaxWTT0uD32ZPgBrCi0Fj6T2fkzv/1+VQikFM4ECI+P8E2upZU+1n9ncUeqQvuhuAuRuiyEs/FZhY8uBXBvefQt8BfJuQtTsBtatjKwrriPFAT/LcUXczKjGQYvr/lHx5phnMbx4g9veFf+8EscC5EDm9h3SYu2jo6ZQjkO9z/LeDfq/JjrDTO9bf87Bz2NMFddUQfOfSS4B9Q/Dn7vdsQ3FWH/0DRL6UTjJvU4W010I9tXZYlYAa0Ztfj+6U1DGn582RwMBJNHHuKzpnFmnHFARo3gC/u+8PzMcClZ1/SHVWAFzp9eypYJ+afqPI0ttFVWL+71X49A6MTg7CnbgIu7zr8x2LWNDUVQO4I8oUYq28q25I25YE7NrKicsFBVWkdV3yFrsZYFHze4SM5ZYR/HNGeQcLf9xxRiyY+jPIz4C7IbdBVcuad7cQKkPTtOUQnr/9M0NxCZ3cwOE8We+S64Y1/S9AbED0ALITZjR4bN3dF0E2294jtvaP3BKomSDKvaPBNJBKINIRWpe0jlN3dHeSe9A9Pbwv2FF3TMpZJcAX0Eta6fX1HFeCFTiH7EvBUwJ5Hg+OSiz2qSnF/zu3DHveeI34d9Cus+cpS2LKToABrgt4RaO1AodIm+EuKNKD2lcBhh+4DDROH/TzEcxDXwt5CsmplU5xSP+9SEiln+Xsd4m3Dnu7rNXmoYKOrnsOG/a14+Oz0yz+OLz/3e90RBQjHDNYC419hHRwOdqJLUpr1tx173hL0y0CUCyZYSXPFZNOrPSBou4/gD/AlyAqwT5G54A/M2JfUwNVCtKgKkozprlkrWw3n6Qz4GTVlSUZ0a/c6rD2El819Giz4Y8aerPAnlzsTMPt5hffCXbp2+uXnPaCXn3tp2xUgotOr8/kQ+68Mwh7tMyB0u7DHf5qKJTjaM9y7WLsTc9yZYxO0oRb/kI48SPhyYcCrzIDMAbNiq9mCwDzovKILQiusHDJn5ycz7bUGvopNRWvfShlpg2wy2NPTBckF1P5uSKy8aV4Tm33993ErQAp9ZtUSmH6G9YecHQV7hrvhY8CeLzOBNKEzGm+k2zjh1aCfiaiH6NEd2nlGRNqeUU+kRBFElfB0FoGDAstCfBSah5XWPvA1+/wqg6JBg9LLe8+R0bGn50S1UPtRrCv4V1jC3NUQpJ78CpAaTjEb2hQ+DTyJbV/LsNgzTPH6WLFn0OKzWzrcJ4l4cbEIBMNu+6uzAfn2qQWpD0J0BPxxiA9Da1HwkfZbYPtY6eLnVRR2leGEP8nNmgPOgTwDfCLwO+D6fb9/Xi79eLiw6KgIJEHgnwaewro0zwyLPcN1bhgz9pSKguz+I51xTwtLJlhXuG65SZUZkMPgzwmt84KcgNYBiGdS/kJh5nheVd1gpMmuINIfe7r/r72MyALwqJj1/xhr1T70bs1IChAmpp8OIc/vm10ZFXvKCX8x9jAa9uQ+JOEenx3eZWolpHDTBLmtVC4p0f2O5oNC/T4lnusoQfr+96zEOsiYSB98Gsryp1+vInBfWAX+qNaA98qJ39sG2VclV4LSCpCauh5hM7mewCazHAl5jmPBnsG5KHnCL11PqTT27B12z+r25daxTb91Wyka90NrqRPTGzSYo/BHWiDwXef0Cr/2Wn66d8JlHrgvhhdCv6EbdNKmx74CtB1fbNL4C8AJC8iNF3v6LbEUWf7klgyJPd8kHBp4pxugV5VoHeSumEyeg/hAZ9Ot/LMb9Tlrjk+QK/xJjOBAKLT6CHgfm1fWKnt1bgjsIfTpPIwlu/0I5GA39jBy/W54/dSHz8EeVXt91e7XD3dLmmb5o7cj4tfBfzac8Gfrdr9pStDGorsgnykzf4LaBSG6K2ZX06WeOQF9n0VJ7caj3P3/rnM08zrJ+0mR8ONhFuUsyuMoj6LsE4VTL70gY1OA59//fvJi+4BHQR4BOd6ZvTs+7CnORdG+plrqgvsqYM+bYglsI2JPttjkG3fElp7tLinV95TqRyBr0i38AxzdcmhUjD15f5Aj/Ekp5ULA8WexlInSht0NcVsqgfefBR4OU9d7nZwtYE9Rr/uBViuFPZpgzxaFX/mGHx50DaKLSvUdqF4DqRcLtg4KaPRxjIuxRwYJf1o2zwk8LZaHNl9WeMoqQAg7yVmQH4CcN9donNiTUx2Wxp7sBalVYG0Ve3Itvw7KrfyG4JC34GJ0WZn7EGrXel1MnxX+vmiUw5l9saeU8INtjO83JZAnBbkPiE699IIMQqFKf/R5LLyzj7CQ0+P2nUWLCI0Le3IKZMJJuZNSkqVzjNEebUeS9gQ/i0PcVqIPleoSxAeFeD4U+cuQ2FPwPyNgT95aEgFHVPkR8Am2QzzQGR60AiT5hDMgDwA/wJLdpD/2pDuESQnB6w406UBEMuEfF/ZkDZfsiX0GMYEvPdHnUL0O0hwBe7TsOTKK8Id/y/4QoHk4VCZWdIsKEFYJWQJ5yFYA2dcfewbP4erGnm7u19RJhRGDMWJP+kkk07j3lCBHSutQ+UqpfQqynonNl8GefDdjK9jTXRWtgipVrB79IfNTWRh5BXj+/ceS158HHgxfR1S1Vg57GBJ7uudw5Qm/JNgzpmjPgBjF3pHxB+Q6yOeKrGmn8ddQ2JN91vnKM6zl7+41yiyWMv0k5hdw4ncvylYQaAnL93mA9mDqfthTlrczYc4BlyETwJ6eOyF7StDPPuiqwnWlsgJuYESoJPawZezJ6loF60f1RIhaVreCQA6Lqz6hqudVtbIT2COTwp7k3Z11MtIo5dhl+3vuHdYpY12pXROqK9Jzf0pjj6Z5X8jb6vIaOt8Nxp7s2zngMMi3LWrJgX5y7gYI/wHgrKqeD86vu7ewx+6oVsHPKzqjHYWNxWIIe4tC9+1qQOUGuLukezMOhz0DYi5e8wvxyna4wLqOH1HlEVVOq2p09LcvyNHfvjC0ApzAmpUeAWbuOewBmBPkAPh9iq8Fw++t16ff1J0piZxW4cciQHI7+AG6NezJc3vb2JPhhAHYkyeT+xUeV/SctRTIj21UipzfgDvnsXLHJe3hgQlOXU8sf8CerpTmxhifZhXkBHC/wGLoCOfBNZxVWa2H3Ji9o3O0gDs2zQuVbvvQB3soHNFabPnzhF61X65Wl0wuKvo94H6sULROjjmr9AquBm9aZ4CzYQVYnBT20A970ptcX9m4BATb8sjspOsQLQolEmTespn0O+AfVHQh3OamEF13Nsu8sYdAPUcMrCm6KR2Wl7LYI0NjTyL8w7RwD6mSNeAolhpxMnDDxmAFsJeuBuf3NJb7P1vW8o8Fe2JBVoXoskO/EPy62tUcscVMMgqgXix3JV3EHhYsad8V6TB/TZEDwDnrBtc66fFVew1ZFaKLAl+DtvakP8+c6wZQV4iTrM98sczp99mDPEXYM5zw507ASVL3z2Ah/CulFCAc8yHseSYsHzJx7EmEXwXZENxtB6uCHAV3FvSAEi94dEZTGbSZLXhNRZ1Cn36X3FmvFjUQsw3xLKFzAib8Cm5diK4I+r5aufUe/+eadGmBqwuVTaFZS3WVKIU9mciRlhf+4paNaeHvOiuk8PAINo3y+tHfvijX/uo3mqsAz73XTntexHbSTgOVYdtkDI096cHTAlQUv8/j71MkAl0EXbQojVayryo9Fke1c2e9Zn4ROkBolLrOFkR3BfeZ4N4FLjOBRtz3lhJEdaiuC60FUKe9zR5KZACXxZ5yLR9zZSsCTqnyMLDfKhe737JSAGWJApyiq8nV5LAnPZXFzwCH1GZKJnwZWopLvd/wB+koQB9HJYkhixerh12D6Irg3gMuhBYje9a/rwK4OlY5FgdgnjD2DLb8+ZFMVZaB+xQOh13ijfTpeQpQMW3hflWOWji0TOH66NiTO3U9aVQbm//uVhxuxSHrVp0kuT1lBEqoHCpojLVTuoPx/hVFbwXLvxf5GYxBDXCb1s7dp2zUpLFHc5973851VZvFw1msbPKLtO5lFcAF4T+hymHjf5GtYQ+DsScvjtwCtypwReAL2wvQVWkHs/pnjBZHPtsekgdtBoFfVbjLEJWke4c0wW2asdAS2JOmUB0Re7rlTcsqiISur/eDvI15d/RTgMNYLsW+EG/ZFuzpOpogK4K76OA9h34EekutaHuQaRr02+x2ZHrq495RfgVogmx2jFE/7Cm6xcNjz0DkyUhCO7V+3lIjOE5mKlJGAcSpchwbcjE/yOr3x57uC8l+8B7s0Q4cujsO95FDXxX082Clm7InpNNi/cH2SDbA+/Tz68WetvBreeEfNLyjzIyDjFGetxWAY0B06DeWHXrjxd9YTOW596zyS1UdlvZwNoQ/CzzuPktdF+9L7s0rXObUbqx8LvCmoBexfl97x9StADQ1tRdQjD2e/pumw2HPKOcIwAzKiSDbiSPsE+RJX33S9uQ0XZtfZdviDQYf1T5VYjG4uw4ugn4IrO7J2tQeTTrt47Vj86UE9sgEsUfzmypUsLT+w8CSWFe5NvMnhecOy/c/jCXBzRRpGHkpzaWEvz+tSx2iLxxy1aFre4loU70CxHSliqRVoMvy6+jYMyjMmU2z17xZyZ0/rgCHBE6LNZInvQKEcBGHsKSDhcRZ6L2IvI2n8sKv/RivAfK1wG1SS+veMZVHS6GZqgzbAvZsnfkH9ysN4xQOSYZu0k7wTHASlpOfa4kkpvxP2j27tvROctOmr7O+F5WZ+hUgTNARXw57Jhftkb5NuVJAlBR3nRIkVwFqIUx0gFQO2VADKehOW80qzqCYLTFonb14/G44YqDRwVRV8LLd0R7pO3Qj428IVtR1PI332RXgKDbY2sGQAyl6LrL/fsBe+51dvgiEtuqJyc8T/slGe6TvrLFsqCXMzlnCshtqAIf++SeSXQGOqrJET/pDuYEUhcpS9hBLV9orxR3xcMGkzaRMW+KsjnvgX5KbFQt46ckIHQ57OiksY8aezvsb1ewLQZ7ZZCBu1woQcn+WQGQY7Env7OpWLf83YEbFRCxyhG1dLgscd7AvVLitgVz1cM36/ss48dIr0gxKFo2KPTJJ7EmnaYjCnDfEXxSbp7lZefbdx0XVt6NAiiySyv8fF/aUye5D6JrWvneUPKrAYaF1HzTvE/Qw6JzdT9lU5JYj+lKpfqzIdR1bTbUoRA1wrXANMiz2dHcXnAD2tF8jOOgRYSp0+N5IRppKQKAlLATqhsEeob/lLyX8ybcKmWyNvaPvEYEuQfyAUP8ubN5n40/VWa2EqOCaSuWkIBWhoh75SsdS6yxeiJrgkuxcGQV7ioV/K9jT6S+bylS1cyrBGV4AVkKxi0Rq5LifVIx0HNgzTF63hEL1nprfvaNYhhbAn3Jsfk+onwGfaQyuCrET/GHgUWW2LtRu63gKfhRcQ3Ct7rLg4bBHx4o9aQqJtbtkKnyvimHQAiBOO+3k9gX3yW0n9mi6jDEZWF3Zk/7STu+SoKeE1hGIu4Q/PBfzUYlnoHFYiE8KHHEhDrLVFQBcE6QlqR3hQZtck8We5NfZGeepcyop0pGEuOeD9a+Uwx7pyfgbTviF3A0yseU7jyf3joJjTmBekJbgGhKEUXoG0yHga4JfdnBsPApgadGKxAG3pgR70gU3OYN7qykfwFXC72eCRkSTxR7JbSCg6UjGLFDd2yQoK4CsKtFVmJ2DaF2J90FrDuIqqIitEi7VEWMOdF/H1G3JznhFWqEsUjW/sm+HsKc3ItR2hqMg67MgklaAeU3czwlhT+Fs3/SSPhdWgb0VoJwC3FHkk5jqLXALhkHVedD9Dr8E8SGhuQ/iWufhqIxnApqEFSDJ2yqWme3Hnp6IUOfvI7UCmZmEh9oKAESTi/ZIl/Dn8lkEuqAwI3sKUFYB1kE3FLlqrlMlsqepBz16zNE6DdERaCxZfV90C2SF8dQ9h5wgifs51FOBPenOOU6RueBtSuj2TA2YRy14Nkns6bfTpxWIF8PlSXdK3d7Rh8PTcb6Qpy8bit6IqX4K0X5hdlngoMPdUeRztYYA43jvFu264PFZ/rFjT8oplwSBZkCkokmXTNWaFjTLHSf29P17B/GcEs2Bq8iY2p9/Aw9PO/1B7kLltvX1ZxG0ociKmqJsMQKr3mqDs120s4mQU4A96TLJ4GlKtb0CoBpZh/y0AkwWe3KXp9C20M0LsiDoJnstSrYopBCUoQmsePvZmHKCRENnjbgTbe+N/08F9qSLZSQIfwTWOCgZjeWy2GNDE0fFnu6duNwc8UzVj12FIPscckjGE6rbO1LmkrEnxElL20Yq/Sx9sPtFlV7dlVwZEe6LPdLGHl+APR25krxKsa5Tg9BLhcwKsG3YQ6bIXsSitEf3FGBXKFWSDJcylIMSIbWtJNuBPRmzaz+soESkmN+ZEoiMZ5NrMPbkCj8Wt9Yl0KOaKlvYO6ZVAbSpXc2xygp/Xi+pcWBPsU/R3hxMksYdIJVspKX/AIKtRXuk8PVTH0UEv6TEx62bS287071jmpzttBNcVvhzh9GOLdojxZa/c7iwRdheAUy5tP+km4lhT1caoeJnFL9fkUMhYLUXDZ1eBGpYdViRbPRrqpC3bEwMe7pPb3mIfUg/I1BcO5i17diTWUVUwM8pHLf5XXsKML0rgDYUWtp3ZnTHEe1TZThZ7OmiNg/NGFpxWAFUlVjVFGBboj05i1h6+jwozCp6WtFD7NUHTLECULf2KFlr3hvlST1zlVyr34U9YQTqcNGegcKPz/TndeFCPdbpRXcCe7r7CoULmoH4uEePmDLsrQJTikCtMDHG98OefEc3X/jJK2LZKvakW7Ykbb26WiPGYW9QdwJ7smcplhbROqD4IyDL0jWEYe+YrlXAxRC1wsYYWeyhkGGz9bs9neUoGpM6NPaQSlcKnosRjwurSB2rFI13FHvo3hWOq4I/Iej9Ys7w3jGVh2sKlYa0u8QV7uwOKF5PZCYmO/wqdf4I2JNJJoiDrDeSFSDRiLYC7BT2dKVEYPUB8WElPkdeuc4ulJR7z58RNesfhS5x3QMw+mNPj/BTPCE+vXs8LPZkfhijrKPUUYsCJQqwDsQ7iT3tD5bKPI33QeuEosfFijZ3sy9gObf3nhK0bGgefnjs0V5Gz43xdwv+0NiTFrU4yHqdEAZVVTZVWVMtSj3bJuxB8Jq5iRHoftCHBE7K7l0FHLBf4LC751I8XAtcIwwrL4k9lMSe7vyifOzRjEzmYE/6OmJgTaAuqX2ADfpMydJUiGti2NODXtJOW/Lz0Dqr+DNYPf8utKAqYdzrsljbknsoEiRNxWU7z/XBnnR8Px6APWmrn2uYtXsF8fnYk37dlsBdgY1EATxWHnGXro7vvbgyOeyxwRnprMCus6vQOqTEZ9VGd8/vRk4IQ7kPAgtiCbn3EAJJnZ5W6f2EPx2L9H2wJ1/4hbwxqbndqXtXoJbAHZA1QdpjpxtYp5gNbERdrdiq5zgnDMKe7AKVxZ5uJcnLA9EqtM6AbEDlZlDZ5u5SgHge9Ai4k1bsoze1Z9zrrlwBWqE22JdJZx40JrWf8Jd0dAuFX8AU4Lb5AdLuDZrUEK1YMR3V9DuX6fNZlORUHntyJsqmkUvA74f4DETftjm1XGH3JMpFpgCto4B3ROset6Jo8x7Y4+tKpBmMPVroFA+w/NpXxgvPyTBFE1OANUDda99/I2yzShPkltpkrsKkuNxducLfDIM9+XkgXepTgfggxN8R9BwWFXK7xAGeBb8oNJdh83zo4XmvbPD5UBusg7EnjSjDY0+vrJfrtSwpV0waIHdA1oNItY+GwjWUOwrH0vXBRVvQvcKfwpatYE+esx36z/tZaJxWaneF6hroJ1mVncKjCnLQwrjxLLRmgQcE13JU3vRwUy2lYLciUPBmJTw0kXLYU07488fjxn1YH7I7zO3vDUxabgeI1krqbxso1xRWilK78zv95vE+48GerDaHwk2/AM2zCg2hsiHwhU73WKUa6FFBlwQfgY+gcQxELQ5R+cgjVxWtszt9Am+tUay2ViaKPbmFN4Xo1YXiGoT/RvB1WyJCzwqgcCc3kqT9fftywi9dhQtlsKdnFQqxq9ZhK7eWFSGKgS8IWxtTZyDRWYhPCK2DYnE3EVoLoKdsddAZR6XmcdcVXQtFJrtEERIBFt8pLs/DnpGEv8/s4f7IAz1z6myX4o7CtSAprPzvv7IVIOBIHbgalgef55XnI0+e8GvPv0bCnsxt6LoOB/EBqD+m1JxQiYErY+p3M86jYuy/cdyaU2mqTWE8A5vHrJVh9YRj9iNwFxW+9rZYx7toRUh1uNcdxJ608Gu3J+sVbnsLnTRSj6d91IGvggJo3kXma6X07Oz2Cv8WsKcw4mSh0fgINB+2PcQIkKuMbQDEOIRC9gt63NFaEuJaJigglvbdOATxHMRzQuUIRFcjatfUVoQVbUdYptFH0ODkq5OuDeCdxJ7e12+L0O0g45t5CtAAvg6MtCkwp9o782Mw9jB+7Cn63BL2B06CVpRaQ4icIleCEuyw9dSKsX98VvAL0huxkqQtvBAvQPMsRMeF2m2BzyG67JGrHrkLblM7s76mrFeSBt9MhSGxRwbMmhsNe/I2yMJL3EjBckcBpLPCrALXgeuqLBKyVkbCnpDQ5hkj9uScoBoE7TD4J5WZeaH6DnB5Zx1jdcA8NE8K9bOCn+t+pNq1zIbbURFiB/UqtBZBzjncXWH2a6heheiaR28ospaq3gjSsWOolIl+e0KfrKGFf7zYk6M0cVCAy3krQPKyTeCGKl8Cx7WdtjUk9mh+NdA4sCc3KhXmCvgjQRCqUJkT5JKiwaPZTnxQgDnwZx3NM0LjQDKOUHvj1xk0VAFftS/dZ+HT+CBUjoG745AVJVqByipEq4pbBdYUXdeuSZDbikvOUte9bMHyTwZ7UnEqNoICfN3jA7zx2J8B9Im/POlV+Rq4BHwH2D8y9rQNW0ES06jYUxiVMsFvHrecG2aFaEaQT73FtRrbuBrMgD8sNB9yNE+JtSYv/DyZiLkk9zjM3q1B6yDIkiJecLGjug61O5YSEt1S5LaHW4pbVdx62MvfTlSKBK2G650u7CFt2IPwr6RnZVYyQuWBqwqfmMZsDXu6A1H906lHsfw9BlQFIqG1D/RBqByA6lFH9LYFeHWTsQyH62v9q8BRwT/k2Dhv1t9aMGmO5ZfcNVLJDJ5OnEy1laFRhdaCIEcUaQo0HK5uSjFzRal+qnDVw6q283snuSJoBL4qNpAjsxG2w9iT/G4dk+mrIPH6T3+l+Qpg730N+BRkbRzY0xb+PnOjRsKenL9u++wVaO1TQ4lZiOahckmIvgS9ZqHScTOzBsvPUaH5sGPzIaF5ELRahD1S+DqePn12gsWNI9CZTnmgeIiXobUsVA5C7ZJQu+SRa94S7yalBBJ8sGpH8KcEe9L3cEPhE5ui0L0uVnIu6SbI5yC3AzjUtoI9g+dGbRF7cl5FQ8wwnoX4OLgDUDsGtU8E+QTkhlomyAYFFRDDW0DmDHv8gyb8m6fB17TA0Enuv3LTeeneBOy+n9J2otVBYx6as+CWYXY5gnmh6sFd9xNtNa8VQWuCuKnCnvTrrivyido+l++jAKIWIpKbwQ/4FshRVXXZCEa3M9sHe/rWcfZutA2FPe2VSXqvTjqf0M9D4wy0DirR/UL1S0f1ksLnanuDzUwkpd/dlO7QHxUsx+eso/ltx+ZZoXVA22OehsKenHtRaup6ugArAu9g/QS0KsI+iai9D+5LPxZlz7sfvmrGRl3vSr6D2JN4v16Ru8DHhkD9VwBCWcNd4EOQh1X1UKDQnuvy2k+r+08Jz9sQKbQw/bAnT/i73iDsGs+Cr0G8aGnVrcOCnAF3G6I7QnQXWA9T1DdNKTRO7VklM4yrQFWQOfALQnwAWkeE1gmhdVxo7leSJPOxYI9mS5J6K+ey90aB1ozVHkQtQTYcM2sKt3UijrGvWYKfRtnnvqPYE5pgyQrwZRD+nrTJLgX4y+Ov62P/8oyEE99X1SeB7xY9NM1Y+0FanhUBLcHhQ2FPoZaFGyICMxAfBjkIcj9UVh3Vm6DXBbmDOY6rim52dmBRMwFSs+gSs6CLgl8WWoeF+mFozYNG2sUAW8aeMP4oalj9g9SBprYV06ZqCn5ObCqk03ZrSRTimrB+XHErQuW2I9qMYW28voA6aNUMvdppHtOBPaiFPK6YMecWOSVURSXma6r6HvC5/ZHOZC3/IOFPX5wMhTRbwJ6+fy+dOKOzB6cVoVmBeAHkmEJLrNFrLDb5MI1EYXSBRmGTKzLHT2tmATWVCaZkm6wOiT2puV+VDZi9AbWrSnRNkZveJucosCjEp4X6OWH9KDRnMguN2HTI+imhsuaYu+aJ1nV84WCx1bA1IzRq0g6DTgH2JPIZh42vdwPVaD0VAeqnAHXTHL2MTZeaCYt/T44HA4Q/JT8DkCbf4g+NPUXCn7cqBIGOI8vYLFxF+nU4Tj5wCeHvsXyaX9HkYqisQ/VrpfqlUruiRDcVdzvsAifbOLOCvw2ypsTi0KPQrGU+o7MxqfVjMLPsiFbi8eVKRcC8oLOCjyRUREohlsj2YE/6eScK8H6gGsquADHo3eAIfwwcBJaymi0lhH84pClrdgZgD0XCn9OoqedHZc6hYM5rvvAXdTzuwR619iLVVZj9Uql95Kl+6pGbqV3edHZXU5H1mGrdM7dcIZ4XWgdAo9RgbIVWFRr7BH/MwU1F676wgH1oBVgUmJW+nRuyhnDC2JMW/juBYi5SkCfcowB/efxPCvDoG0+11P7wL8CDXmWpX0Jb335BJbBnMBLJFiy/DHTCyp1TfPd1oPBLoeVPok+uZbgz96lSeScmuuKR9eL6AFHrze9WofalUjkUxkvl3Id4FlrHhcoVIbrBlmupFaAi6D6Hn3O2CdazUmct8+B49xiwp43xgf0/DYqQGwPrV1EbA5cU3vQqt4rjB8NZfh1a+GWLwk85wZ6o8DNQ+KMGzF6DuQue2lsxlUu+sxOjA6xlS3F31TJGNX/8qK9C45DQWhzfjphWIF4S/Hx7RFhO7Hc8wq/DCT+B+d8KClAvetx9+qxJjJVmfBzCSGctu71rnMvQqQ0DrUruK4wZeyiBPQwOz24Ve5JzXAuqd2D+Y6X6nsd95tucL2XvmUsLYW8kxldgc79QWxBqbjw6oFVoHBRaC6kAQxkjkysr0qdeoB/2SJF/fQt4M2B8nHV+S6wAAioNVK6BvAnyuXStAv2xp0xqg2o/h1hyRmoWW/507LnnKgp7yZQ5J8QVtU8IL1f4M+2+8yy/2q5LbRXmLhv2uMsm/DKEodaa0FoW/GK6KKW70ZiPhMasRYqojEH8xcKsmweExgKdLrODQpy5Y5Gku19oBns091kLvivdvusd1oLR/oCc3d+yCERsf3gLeD04w63twp7uvy0ewTN57JERsEf6Y09aRWOlekWZueCJrvrSEZr2+8+BPyRsnBQaS4KXnP6ZSa5+ZKHf9ozErRw12wupLwitasmWJQOGY0gq5aYc9hSIrXIZ5S2Ur1DZ6Jf5VXgb3nziTxoublXgbTGHYgUknjT2jLJBNhnskcIrHYfwE0NlDSpfeKKL3nqVlbH8DpgBPSjEpx31+x3rJ4X6Iqj0mbquIBFIJFtiIBVgQfAHHPGsdbrI3pt+Mf4ki0RStj9P+IfEnuSXTeAj4DXa5b3FH7YyiMuCG/aVwgXgAspjCvsmE+2RETfI8jrS9Yb9h4v25Av/eCy/XVHUgLkrULsCrGgqS72P8DlgAfxhR3zesXHGsX4cs/5OwmXnf0bXu20x2uHA73f4Y85ynjJRrj6dmYu7NqSEvzjaI4Mc6jg4vx+AvGEGG+o//UcdSQFS17MOfKDK68A5tZ5sA7GHEYV/uLwgKXUNZTdnJi38yXsL4Oqh1PGWlutzGgH7hcY5YfN+R+uEo75sDO5FemlNu30O0RDaaOnWwqACrSWhftTha9LZVGRgZ+YCQ7lF7On8cB34QJAPBK5KqvJrJAV4+8lXAfSRP/+ghfKpmi/wY+AIqTnuO4U9eW0YtQTSZBVRxoQ97YhLH+FPCoNUgYbivva4O5rqrd/nns1CfMax8V3H6rcttu9dwB4pRjtRcAqVJri6WgcoHV34dUZoHBA2lh2+xtCWn8w9L5OE2xd7On9+yyF/EnN+N6TEpyw7bsJj5WTvAm8HBTgtqU7924c95fJMitI1cturjMHy+56IUC/2ZDtpawO4pbBWrkt0vChsPBRSrucTwZe+aJcInmvBzApU10evilOwRl7Ljuayoz6PYdeQ2JO+D34gLUipfQSBhiBfCfwB+FCgtfazXw68q26ID5/0DfpDcDJa44/2DB9NKt0xWAe9TsG0yjEIf899UIhiqNStflcbJR7ADPglYfMINBYt2uOlf7qxJOiDpVjMfK1U7mwtGU5nhNZJR+uQ4Cvhs8so2FNG+Ckr/LEgX4jF/T8i09xtywrw9pOvJkmGKwKvC7xjQwYGzRQbJ/Zki+3KRsqHPWf8wi89Gf3gmkEByrRBFJCaoAtCc1ZoVQZHvbruVgzVVaV62RPd3AL/O6uBqJ90NA86vOtOmu2PPdJzl3WgzEjZTbR6wJ6Xy7L/0CtAODaw/KA3gXdUOxl2o2xyjYY9UngHPZkeRjkTyXMtf8YZ8z1YJCNjTzLxvBu1wmzdJnlVRcU62o7x99/sSyw/agOsa+swd02pfB4jt/xICmA+iBAfdKwfdWwsCnEpyy898+N8QaSnxCZX13O3cKq0BG4Cbwq8Gqw/ZfBnGB8gHRG6C7ypylngrNoAUymHPTIwUtQ/mjTmtAYtnl9AoWCPiD05722hPxlsC4PDLOsWOnWxbWoVDoNIBMRDpa7MfqHMXohxNzq7zCNZ/2WheSZic7/VUQy2/OWQJg9Ny22iCWKhzjfEkja/YAjrP9QK8O5Tr/LuU68q0FLl4+ALfBxirSVyndJJbTIi9hTLh5Y+ZzD2dH4kIwt/HvZ0rVYO4kiKNpp7r78OckeZuaFUV/PncaXvVtSC2poy+5Uy+2FM9aMYGbUaTCwC1TgRsXHW0ZzL7DdsAXt6c36k5NQXQSx4fEXgdyE4s8GQ69soQ0cVuKsm/L/HagUeBWr9Lf+YsCcnPFX+nGLT4gtXhq1He3Lj6NV0HW25ux6tehYueLQm+PNCa8aKlSUn1j+zosx9qcy806Jy2dtGWzzaw6YK/kjE+knHnSNCq5bPlMNGe7IjUAc5j67bvHjgpsB7wCsBzVtl0WcrCkColr2Gad5p4D5VDhHCov2xR3cOewr+Z9uwJ/0ZI6ul1VmB6uCNMAkeWPVSzHwEru5oHnXEC2pP0duwarcG0W1v1WRfeSqXPbI6WjF8ezbbgrBxLmLjRLD+YcbBuLGHUqHU9tEUq/T6DZbyvMYI8a2hFeDdp17Vh1/7QVI4/xbwbeAh4HF6UiRkxGjP4AjO0NijZc/ZGvZoGeEn6QGqNjx7jtwhcz1K0LLJkjOtmOqK0jyttA4Ivia4WInWIbqtVK565Lq3dXqLrdV1DlpHI9bPRdQPuwHCn7/JVQZ7Bgm/677nzWCAXwNewpzgkYK7W5m7HgMrqrwGHMWa6c7T3hzLwx4dKPzbgz1sM/Yk9yHTHrEm6CGBqw5d9aU2w8TuOm4zpnbVU6l2LkTiMOqwrhZe3cqGV4I+JyLqD1VYP2rp1P2Ef1LYk5n3pSHS8woW9blIKHccFn+2ogBJ+KIZLuAVNT9gATgO4qYTezI/7tu6ZQLYkwEvPwPN49aysXJ1CPctNhySDSVivEeX8B9xrJ+PWDnrqC8E9GHnsCf8/SZW5PJrEf4SSMRv6wrw/tOWI/Twaz8A6632AfBbc4hlP8iC6uBVdyqwh0liT/+dbj8D9WNCdFiILoEMMe1you3PK+APOur3V1g9F7F6WPDVIuHfLuyRxPf8IqDPH1W5JDK84ztSGLRAEVQRD/I1yD+B/B7ksmqnE+XI2NN3k2vQOf2xR7umUwh5W11ewx7VsJtchcLfm0DuI2FjPzSOO/R4ZM1u2Zmj/VEr4Jcd9fMRt74bsXrChU532QBnN5QM2uRKY88g4XcILh3pt/usWNuyVxT+3sNnjKHjaWVM968OfA7ysirHgUW1GYiyW7CHrPAPsLrlsUcLQ6EKxDNC/aRQvQOzdzyuoVvu2DAy9tSszmDjfMTqAxHrR8VmGst2Yo8Uvf6Kwr8ovKyWibASZwZd76QCKMimKm8Bi8A5zCE+SOEu8c5jT57bm7Vg+Z1uRseeHsEQobEM6+cdlauOaiPE7LdTCcQag/lDjvq3Ktx9IOLuKWfxfiHX8k8GeyQb7Ul+vanWoeR/qTm+Xwf/k63gz1hR8sE/PSuqWlX0DPBvgF8APwqKsPPRngFdG/Isf97O7rC1zP1XQDtfFKprsO8zZf6tFpULsfUDmrAStIfbzUJ8OmLjgQq3zzk2lx2tmRDx6RPtKWv5y0V78rtCYOU7Fz38Gvi/Q+h9tf7zX47l7lTGekPRJlaF/xJwGDgEPADMTwf2yNDYkw5zDnq7gdhTgAQqQmtOWT8t0IyYA6oXvYUX4vE7vG33Z94a/G6ecmyeiVg/FbFx0Brtbm+0pxB7Ym8x/j8B/xOrSx8iVLCNCnDhmT/ot1/9oWBlaReCEhwCFlU5Qxi0MX7skUL+6T+oT7oeYj/LP1j4h61rSK2AIa7uI2Fzn8J5Z/sDrkX1C49b0REyXPoIfxWoCfE8xEciGqcdq9+K2FgW6rOSSs3Iz+gpjz3Fc+BKYo+G6Q1vAf8MvIx1KBnrxOSxrgAf/eAVBfTbr/5wU5U3QpTpcBD+E9p+v3Fhj4yAPd03bxD2lGvZOCT2FBgBdUJjQfH3Cc3FCvOXPLOfeuSyt6a4odWClO821cnmdmGU0QFHfDxi84ywdsyxccDRWhDiSii4J4s93V0bym1ySbG+DsCe5CW8TWv4EPgvWMrNzWS4Xf3n/6hTqQAZ+bsVeO2/qe0O/xWwDFJJ3ywZC/YMrt3NvciS2FMubVuHrGjL/4w+CuWONfAzEY0lR3TCU72p1G4rbiWMRK1rcfqEgFSBGbH2JQtCa9H6BjWXhMayo3nYsbkIzVpvixTJCROkR2T5EpZ/C9iDt6rldwL2vEy7Tf/AxzE1CpDI13WQX2M7xAdAngiRIZe+J7Il7GFbsGew5Wdky59lbRWIq8L6Ydg4IERnHLM3lblrSnTd21jUNUXqIf0hvUqFmb06K7Ao6JIjPiA0lx3ry8LmHDSrtqvb2dnNd3a7o16DOzeMAXtQi/h8hjm9/4BlGmyA6Dgt/9ijQNnj/leeTe5lNYRF/wr4j6o8irVVcUW9QLM9ffpjj+5O7NF+jma3Yy6xEjWtga5rWOaotJRKQ4iaViCDBsWJLF05rgbkqYilNVSFZhXipIeoyMDmtNnhiJPCntTrJx3J/58g/G9gI478JIR/0itAevr858DLqhzAFu6n1fYLpJ/w97ck2489vc7weLAnK/zpvkKaWPUZiGdSWKJCFIutAG0FECu0qVjBTZZJ+4WM88Oc24o9LbWC9t8Av8QQaIUt5Pns6AqQsxLMqXIO+Fu1PYKHaZdTSq7g9Hp0+Xe2u3i9dwFPRy28jm75sw14R3Z4tb/wKxAXFbinBUc7ewndbyP9hb/wGqRwcKGfBPZ03qfhrZntL4H/GsKeN0AmZvmTI5q0Atz6u8sc/M9nwGIYa2oj61eBk8BScNdk4IyAkbCnM4RuYLOqIfoalVsdtoY9g4RfCZPZ24lM+Z0ytjqHaxDzl8Uel/6UvZb/i+Dw/ncTfrkFEk9a+CeNQNnb4bUzsl6AeZAN1App6LSuHIg9+Q+0uH259h0wIUO1cyzb8nEr2FNK+PuGx8Y/h2vC2PM74H8Y83MjT293LQKlj3N/fE46ws95lH8D/C3wHYUl7VmR8i1/L8vmY4+nNwFudOwp27irYLNvTNhTOH5UGRv2KIMRcAzYs+ltgN0/AX+PpTjf2C7Lv20IlD5u/93nHPhPbRxaxZKabmEVZfuxfqOuSPjzyxeLsWekqetbsPxlWrRvGXt6BL/Xhk1q/OiYsEdDnP8z4P8N2PPn7cSenUCgPDJZx4qZY6CiVub2DNZ3tEq/zsGjTl2fIPaU6Ve627Anm/NDiQEkA7An2eF9J8T5/78Q7bkx6WjPVCBQFodC1VhNbQX4a+DfgjyJ1RTMFmNPianr24Y9MrLwTzv2DJvROQB7YoU73tIb/icW579goc7JR3umTgEA7vvDc+nNsqMoj4H8AngOOAc6q+mNzj5dG3YGewZ3Zu69ySH5je6a9eGwh23DnoIJjMV9SNO1AqmUZg83Q2Lbf8HSGy6GItAdE/6dQqCc2ygNlK9oDwXV62pzCL6vyeTbqcOeEp2Zc64iSfjy5OfGThv2lBV+KX6dTTVn909YVufvsI3RDcoPkbw3V4DOSvB8kE6NgDmB73r4icK/xjbMllGp0LPNMw3YIwOFPz0UI21xJedh7DbsyWlbkryOYmWMl7y1MEkS225iyRy6k5Z/qhQA4NzLz6U7/C16OKnwNMrPQF4IkaIZATde7JH8KNMWsEcygp+c43OEX7bgV0wD9kj+fW5hBez/EsoY/xfwoUV6GHtK825GoOztTZ7TXe1kAd4FrgS/4AGsyMaNB3tkotijqdcosvz9d5B3B/ak7rOGbM4vxLo3vBxqeC/QXcml0yJ0whQep1/+cbvJMcoCcL/Az4HnQb6ncMTDnGbmJQ2HPTJkLv/4sac372a3YE9uRmcTuO2teP01bHPrTeBrkEbyCtNi+adaATqK8LygOGBW4Hhwil/wyl+rpVgvJKvYaNhTLPyjYk/2nCLs6b+J1q2g6b/deezpEX4fhP+aN6v/a+CP2EbXCkhz2oR+WhGo6Eg2zT7DNlFuqs0qewZrx3gfqc4Tw2GPTiTak8461QHYU9QuJCuckifv2449GeE3wb8JvK/wWsCdv2CtC+vThDq7cgXoihT9/nkJk4VmQiv2ZwR+EhThPuCAILOq3dVm24k96d1dX4hG5XKH+lnuKcCelsIKyhXgPYXfKLwU/LZVc3Tt7Gm2/rtKAQBO/P75JNmnIrY/cFKQ7wEvAM+GsU0LWGqFbDf2JDu7mhsRKpE7lFk1ykxIJB9LSmBP6fGj6dePxSz7zdD04HdqIc5PQ/uSTcDXf/5L3S0yVWF3Hekqs+vGmNzAehF9BDyu8D3MP9hPMrBjG7FHiyJCJYU/+dtc4RyQYjE89pQWfgUaYnn7HwTn9i/YWKKLvns4he4mgRJ26XHqpRc6kSJLpVhW5VGFZ4GngxIcAdmvihXdTCv25IQ541LCL5lQpJbEntIZnbGY/3VLzO96E9vMelWVL4ANtTSHEOH5pe42Odq1CpCjCBVV9iksA2eAJ1XlR8BjwDG1vKIKmY7Y04I9ZYU/b9c1K/xbxB4Ng6ebYhNBPxBLY0gGpF/FMncbgN9qb849BBrf0VKrLbhjD0muYdVnf1b0IbVNtHO0G3VNF/YUOrwDriHP8m8Be2KBNUEuiwn7B2EA9QdYFmci+PfMIffShznxuxdSxlciVaqKHlDLJ3oSeAKbaXYE2K/KIlBTRKYde/JHdY8Fe2KUNcza33LIl2JZm6+JlShexRLXWol+7narf88qQLcyvCiqircW8gvBKT6CDfd+JNQif0+RowqzIFHwJ9w0Yk9RZ+YRsCd5u+TrDsqHwFuCvClm9b8Ss/YrweLrvST09yoCFaJRwKI7WE7R5ygXgbcVuV/NXziD7SWcQlkOTrVMI/b0Vmn1j2hlhN8Hob6CpShfxlKTPwX51NkGVmLx9RsgG/fuCpA9jv62jUdOlcgcYplTOAnyILYqPEx7U40FsR3meWAGpDIc9gzO6BwFe8pskIVzvCJNb1GcDez7Xaz/zofAu9ic3Yuo3AHqkfkAbZ25V63+N1IB0seh37zYVgYTbhaARZT9wUk+K5aA922Q+4ETCkuxUlH7Gye2QiRTcyU7/GOcwj9gIEWn9ZEm/5bYW4jyRggEJF8fBwt/KyjDKshm6Lqs9Z/+o37TZKHCN/NIUq99sI4b2MaaE0u8+wjb5DkOHFM4onBYLRX7kMCyWJPfJWCfKnMkm24lhX8r2JNaBBomxNwJEZrbwI0g+DewrhtXM1+r2EaiFl/BN+cQ9o7OqmD5E4lld4JECpGHWQ9LqpwWOC1wKijHUYHDoefpnBomVYNhqYJEaHCsTUEitclHSdTJBdFrB3FCoxMNHT9jgViVGAvztrz5NM2U8N/ApqZfUeUrkC88XFYT/pWUs5uUIdum1U9/pXtPfU8BBh4Hfv2TZGRtBWU2rBCzYuhUA2ZVZTE09joIHLCVQZaABZR5YA5YUFOkqnZW30qIOrWAZhD+GGgIErhd1lV1LRQJ3dGOpU+s/gZQB2mosgnUvRWlNIDWnqDvIdA4Dh8sbiNY1fThsNYuc8GXWABZCEI/G3yMmsBMEP4oGJ5kZXDBMrc67yUtey+pm3BTV2P6teDMJt83U3+3d+ytANuMTf/8v0nC6L5dHy6poUSd3AoJsyx83v3X7j53gmiqn5qqqvru4rKufa+1v/mnPSs/4vH/A06zRRbr7Z96AAAAAElFTkSuQmCC"},{"name":"com.flomoapp/mcp","display_name":"flomo 浮墨","description":"社区维护的 flomo MCP，通过个人 API 地址把 AI 生成的想法、笔记直接写入 flomo。","vendor":"flomo 社区项目","categories":["办公"],"official":false,"verified":true,"homepage":"https://flomoapp.com/","repository":"https://github.com/chatmcp/mcp-server-flomo","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@chatmcp/mcp-server-flomo"],"env":[{"name":"FLOMO_API_URL","description":"flomo 个人 API 地址（webhook）","obtain_at":"https://flomoapp.com/mine/?m=api","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-31","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.flomoapp__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-flomoapp-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@chatmcp/mcp-server-flomo\"\n      ],\n      \"env\": {\n        \"FLOMO_API_URL\": \"<YOUR_FLOMO_API_URL>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-flomoapp-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@chatmcp/mcp-server-flomo\"\n      ],\n      \"env\": {\n        \"FLOMO_API_URL\": \"<YOUR_FLOMO_API_URL>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-flomoapp-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@chatmcp/mcp-server-flomo\"\n      ],\n      \"env\": {\n        \"FLOMO_API_URL\": \"<YOUR_FLOMO_API_URL>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"com-flomoapp-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@chatmcp/mcp-server-flomo\"\n      ],\n      \"env\": {\n        \"FLOMO_API_URL\": \"<YOUR_FLOMO_API_URL>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"FLOMO_API_URL","placeholder":"<YOUR_FLOMO_API_URL>","description":"flomo 个人 API 地址（webhook）","required":true,"secret":true,"obtain_at":"https://flomoapp.com/mine/?m=api"}],"iconData":"data:image/png;base64,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"}]};
    const DICTS = {"zh":{"meta":{"title":"MCP 市场","description":"在 DSH 内浏览 MCP 市场，安装、检查、管理、更新、编辑和卸载 MCP 连接。"},"nav":"MCP 市场","title":"MCP 市场","subtitle":"在 DSH 内安装、检查和管理 MCP 连接。","search":"搜索名称、描述、分类或工具…","all":"全部","entries":"个服务","empty":"没有找到匹配的服务","emptyHint":"换个关键词或分类试试。","emptyDetail":"从左侧选择一个服务查看详情。","official":"官方","verified":"已验证","transportStdio":"stdio","transportRemote":"远程","transportSse":"SSE","installTitle":"安装配置","configHint":"复制后替换 <YOUR_...> 占位符；凭据只保存在本机。","copy":"复制","copied":"已复制","copyFailed":"复制失败","requiredTitle":"必填变量","noRequired":"此条目没有必填环境变量或 Header。","apply":"去申请","docs":"查看文档","homepage":"主页","repository":"源码仓库","online":"在线详情","onlineMarket":"打开线上市场","about":"信息","transport":"传输","license":"许可证","lastChecked":"最近校验","tools":"工具","toolsFound":"已发现","toolList":"工具列表","noTools":"工具清单尚未同步。","sideEffect":"可能产生副作用","sourceOfficial":"官方出品","sourceCommunity":"社区项目","broken":"同步检查连续失败，请先确认服务可用性。","snapshot":"内置数据快照","generated":"构建于","noInstall":"暂无安装配置。","countSuffix":"个","marketTab":"目录","installedTab":"已安装","installedEmpty":"还没有已安装的 MCP 连接。","connectorUnavailable":"未检测到 MCP 连接器","connectorHint":"安装并启用 dsh-mcp-connector 后，可以在这里安装、检查和管理连接。","backendMissing":"请先安装并启用 MCP 连接器（dsh-mcp-connector）。","openConnector":"打开 MCP 连接器","refresh":"刷新","updateCatalog":"刷新目录","updateAll":"刷新并检查","updating":"正在更新…","checkAll":"检查全部","check":"检查","reconnect":"重连","edit":"编辑","rename":"重命名","renameTitle":"重命名连接","renameHint":"只改显示名，不改 serverName、工具前缀或连接身份。","renaming":"正在重命名…","uninstall":"卸载","alwaysMode":"始终注入","sessionMode":"按会话启用","injectionChanged":"注入方式已更新","viewTools":"查看工具","hideTools":"收起工具","backupTitle":"配置备份","backupNote":"导出为脱敏 JSON；Token、Header、环境变量、路径和 OAuth Grant 不会导出。","createSnapshot":"立即创建快照","restoreSnapshot":"恢复","restoring":"正在恢复…","backupCreated":"快照已创建","backupCopied":"已复制脱敏配置","backupCopyFailed":"复制失败","noSnapshots":"还没有本机配置快照。","restoreConfirm":"确定恢复这个配置快照？恢复过程中任一连接失败会整体回滚。","snapshotReason":"原因","restorable":"可恢复","notRestorable":"OAuth 需重新授权","download":"下载","close":"关闭","enable":"启用","disable":"停用","enabled":"已启用","disabled":"已停用","connected":"已连接","notConnected":"未连接","degraded":"部分异常","configured":"已配置","stateUnknown":"状态未知","stateHint":"点「检查」获取实时状态","recovering":"自动重试中","reauthorize":"需重新授权","connectionError":"连接异常","loading":"加载中…","installToConnector":"安装到 MCP 连接器","installNow":"安装","reinstall":"重新安装","installing":"正在安装…","installNativeHint":"填写凭据后，会直接创建并校验本机 MCP 连接。","installHint":"下面是从本站生成的 DSH 配置。请替换 <YOUR_...>，确认后导入。","fillRequired":"请填写必填项","installInvalid":"安装信息不完整","optional":"可选","argsLabel":"启动参数（每行一个）","argsHint":"包含 /path/to/... 的参数请改成实际路径。","cwdLabel":"工作目录（可选）","uninstalling":"正在卸载…","import":"导入并安装","importing":"正在导入…","cancel":"取消","save":"保存并重连","saving":"正在保存…","editTitle":"编辑连接","editHint":"修改标准化 JSON 后保存；敏感值可用 <KEEP_EXISTING> 保留。","confirmUninstall":"确定卸载这个连接？","done":"完成","actionFailed":"操作失败","installJsonInvalid":"JSON 不合法","installSuccess":"MCP 连接已安装","editSuccess":"连接已更新","uninstallSuccess":"连接已卸载","checkSuccess":"连接检查完成","reconnectSuccess":"连接已重连","enableSuccess":"连接状态已更新","refreshSuccess":"已刷新","editLoadFailed":"无法读取连接配置","checking":"正在检查…","connectionKey":"连接","placeholderRemaining":"请先把配置里的 <YOUR_...> 全部替换，或删掉不需要的可选项。","credentialDetails":"查看 Key/Token 详情","hideCredentialDetails":"收起凭据详情","credentialMasked":"连接器不会把明文 Token/Key 返回前端，这里只显示保存位置和掩码；需要替换时直接改下方 JSON。","credentialNone":"没有可识别的凭据字段。","credentialUrlHidden":"URL 含密钥，已隐藏","authMode":"鉴权方式","headerLabel":"Header","envLabel":"环境变量","bearerLabel":"Bearer Token","apiKeyLabel":"API Key","credentialCopyNote":"以下是本插件保存的凭据副本，仅保存在本机。","credentialCopyMissing":"这条连接没有本插件保存的副本（可能安装于该功能之前）。在下面补录一次即可。","credentialCopyFormHint":"仅保存插件自己的副本，不会修改当前连接。","saveCredentialCopy":"保存凭据副本","showPlaintext":"显示明文","hidePlaintext":"隐藏明文","credentialCopySaved":"凭据副本已保存","credentialCopyEmpty":"请先填写至少一项凭据","credentialCopyFailed":"凭据副本保存失败"},"en":{"meta":{"title":"MCP Market","description":"Browse the MCP market inside DSH and install, check, manage, update, edit or remove MCP connections."},"nav":"MCP Market","title":"MCP Market","subtitle":"Install, check and manage MCP connections inside DSH.","search":"Search name, description, category or tool…","all":"All","entries":"servers","empty":"No matching servers","emptyHint":"Try a shorter keyword or another category.","emptyDetail":"Select a server on the left to see details.","official":"Official","verified":"Verified","transportStdio":"stdio","transportRemote":"Remote","transportSse":"SSE","installTitle":"Install config","configHint":"Replace <YOUR_...> placeholders after copying. Credentials stay local.","copy":"Copy","copied":"Copied","copyFailed":"Copy failed","requiredTitle":"Required variables","noRequired":"This server has no required environment variables or headers.","apply":"Get credential","docs":"Docs","homepage":"Homepage","repository":"Repository","online":"Online detail","onlineMarket":"Open web market","about":"Details","transport":"Transport","license":"License","lastChecked":"Last checked","tools":"tools","toolsFound":"Found","toolList":"Tools","noTools":"The tool list has not been synced yet.","sideEffect":"May have side effects","sourceOfficial":"Official","sourceCommunity":"Community","broken":"Remote checks have failed repeatedly. Verify the service before use.","snapshot":"Bundled data snapshot","generated":"Built","noInstall":"No install config yet.","countSuffix":"","marketTab":"Catalog","installedTab":"Installed","installedEmpty":"No MCP connections installed yet.","connectorUnavailable":"MCP Connector not detected","connectorHint":"Install and enable dsh-mcp-connector to install, check and manage connections here.","backendMissing":"Install and enable MCP Connector (dsh-mcp-connector) first.","openConnector":"Open MCP Connector","refresh":"Refresh","updateCatalog":"Refresh catalog","updateAll":"Refresh and check","updating":"Updating…","checkAll":"Check all","check":"Check","reconnect":"Reconnect","edit":"Edit","rename":"Rename","renameTitle":"Rename connection","renameHint":"Changes only the display name, not serverName, tool prefixes or connection identity.","renaming":"Renaming…","uninstall":"Uninstall","alwaysMode":"Always inject","sessionMode":"Session only","injectionChanged":"Injection mode updated","viewTools":"View tools","hideTools":"Hide tools","backupTitle":"Config backup","backupNote":"Exports redacted JSON; tokens, headers, environment, paths and OAuth grants are not exported.","createSnapshot":"Create snapshot","restoreSnapshot":"Restore","restoring":"Restoring…","backupCreated":"Snapshot created","backupCopied":"Redacted config copied","backupCopyFailed":"Copy failed","noSnapshots":"No local snapshots yet.","restoreConfirm":"Restore this snapshot? A failed connection rolls the whole restore back.","snapshotReason":"Reason","restorable":"Restorable","notRestorable":"OAuth reauthorization required","download":"Download","close":"Close","enable":"Enable","disable":"Disable","enabled":"Enabled","disabled":"Disabled","connected":"Connected","notConnected":"Not connected","degraded":"Partly degraded","configured":"Configured","stateUnknown":"Status unknown","stateHint":"Click Check to get the live status","recovering":"Retrying","reauthorize":"Reauthorization needed","connectionError":"Connection error","loading":"Loading…","installToConnector":"Install in MCP Connector","installNow":"Install","reinstall":"Reinstall","installing":"Installing…","installNativeHint":"Enter credentials to create and validate a local MCP connection.","installHint":"This DSH config was generated by the market. Replace <YOUR_...>, then import it.","fillRequired":"Fill in the required fields","installInvalid":"The install details are incomplete","optional":"optional","argsLabel":"Launch arguments (one per line)","argsHint":"Replace any /path/to/... argument with a real path.","cwdLabel":"Working directory (optional)","uninstalling":"Removing…","import":"Import and install","importing":"Importing…","cancel":"Cancel","save":"Save & reconnect","saving":"Saving…","editTitle":"Edit connection","editHint":"Edit the normalized JSON and save. Sensitive values can stay as <KEEP_EXISTING>.","confirmUninstall":"Uninstall this connection?","done":"Done","actionFailed":"Action failed","installJsonInvalid":"Invalid JSON","installSuccess":"MCP connection installed","editSuccess":"Connection updated","uninstallSuccess":"Connection removed","checkSuccess":"Connection check completed","reconnectSuccess":"Connection reconnected","enableSuccess":"Connection state updated","refreshSuccess":"Refreshed","editLoadFailed":"Could not read the connection config","checking":"Checking…","connectionKey":"Connection","placeholderRemaining":"Replace every <YOUR_...> placeholder first, or delete optional entries you do not need.","credentialDetails":"View Key/Token details","hideCredentialDetails":"Hide credential details","credentialMasked":"The connector never returns plaintext tokens or keys to the page. This shows where they are stored and a mask; edit the JSON below to replace them.","credentialNone":"No recognizable credential fields.","credentialUrlHidden":"URL contains a secret, hidden","authMode":"Auth mode","headerLabel":"Header","envLabel":"Environment","bearerLabel":"Bearer Token","apiKeyLabel":"API Key","credentialCopyNote":"This copy is stored by the market plugin on this machine only.","credentialCopyMissing":"This connection has no market copy yet (it may predate this feature). Enter it once below.","credentialCopyFormHint":"This only saves the plugin's copy; it does not change the live connection.","saveCredentialCopy":"Save credential copy","showPlaintext":"Show plaintext","hidePlaintext":"Hide plaintext","credentialCopySaved":"Credential copy saved","credentialCopyEmpty":"Enter at least one credential first","credentialCopyFailed":"Could not save the credential copy"}};
    const ALL = "__all__";

    const CSS = `
      .mc-root {
        --mc-radius: 10px;
        box-sizing: border-box;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 20px 24px 48px;
        color: var(--dsw-alias-label-primary);
        font-size: 14px;
        line-height: 1.6;
        text-align: left;
      }
      .mc-root *, .mc-root *::before, .mc-root *::after { box-sizing: border-box; }
      .mc-root button, .mc-root input { font: inherit; }
      .mc-root button { color: inherit; }
      .mc-root a { color: var(--dsw-alias-link); text-decoration: none; }
      .mc-root a:hover { text-decoration: underline; }
      .mc-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 18px;
      }
      .mc-eyebrow {
        margin: 0 0 4px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10px;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
      .mc-title {
        margin: 0;
        font-size: 24px;
        line-height: 1.2;
        letter-spacing: -.03em;
      }
      .mc-sub {
        max-width: 680px;
        margin: 6px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 12.5px;
      }
      .mc-head-side {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding-top: 4px;
      }
      .mc-count {
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10px;
        white-space: nowrap;
      }
      .mc-open-site {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
      }
      .mc-open-site:hover { color: var(--dsw-alias-label-primary); text-decoration: none; }
      .mc-toolbar {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      .mc-search {
        position: relative;
        flex: 1 1 280px;
        min-width: 0;
      }
      .mc-search svg {
        position: absolute;
        left: 10px;
        top: 50%;
        width: 15px;
        height: 15px;
        transform: translateY(-50%);
        fill: none;
        stroke: var(--dsw-alias-label-tertiary);
        stroke-linecap: round;
        stroke-width: 1.6;
        pointer-events: none;
      }
      .mc-search input {
        width: 100%;
        height: 36px;
        padding: 0 10px 0 33px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        outline: 0;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        font-size: 12.5px;
      }
      .mc-search input:focus { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); }
      .mc-search input::placeholder { color: var(--dsw-alias-label-tertiary); }
      .mc-cats { display: flex; flex-wrap: wrap; gap: 4px; }
      .mc-cat {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 28px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        cursor: pointer;
      }
      .mc-cat:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
      .mc-cat.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 42%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-cat-count { color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-size: 9px; }
      .mc-body {
        display: grid;
        grid-template-columns: minmax(260px, 340px) minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      .mc-list {
        display: grid;
        gap: 7px;
        max-height: 660px;
        overflow: auto;
        padding-right: 3px;
        scrollbar-width: thin;
      }
      .mc-card {
        display: block;
        width: 100%;
        padding: 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: var(--mc-radius);
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        text-align: left;
        cursor: pointer;
      }
      .mc-card:hover { border-color: var(--dsw-alias-border-l2); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-card.active { border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-card-head { display: flex; align-items: flex-start; gap: 9px; }
      .mc-icon {
        flex: none;
        width: 34px;
        height: 34px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        object-fit: contain;
        background: var(--dsw-alias-bg-base);
      }
      .mc-icon-fallback {
        display: inline-grid;
        place-items: center;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
      }
      .mc-card-copy { min-width: 0; flex: 1; }
      .mc-card-title {
        display: block;
        overflow: hidden;
        font-size: 13px;
        font-weight: 650;
        line-height: 1.35;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-card-desc {
        display: -webkit-box;
        overflow: hidden;
        margin: 2px 0 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 11px;
        line-height: 1.5;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .mc-card-meta {
        display: flex;
        align-items: center;
        gap: 5px;
        overflow: hidden;
        margin-top: 7px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        white-space: nowrap;
      }
      .mc-card-meta span { overflow: hidden; text-overflow: ellipsis; }
      .mc-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 3px; }
      .mc-badge {
        display: inline-flex;
        align-items: center;
        min-height: 18px;
        padding: 0 5px;
        border: 1px solid transparent;
        border-radius: 5px;
        font-size: 9.5px;
        font-weight: 600;
        line-height: 1.3;
        white-space: nowrap;
      }
      .mc-badge-official {
        border-color: color-mix(in srgb, var(--dsw-static-amber-400) 35%, transparent);
        background: color-mix(in srgb, var(--dsw-static-amber-400) 12%, transparent);
        color: var(--dsw-static-amber-500);
      }
      .mc-badge-verified {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-badge-transport { border-color: var(--dsw-alias-border-l1); color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-weight: 500; }
      .mc-badge-broken { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent); background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); color: var(--dsw-alias-state-error-primary); }
      .mc-detail {
        min-width: 0;
        padding: 18px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: var(--mc-radius);
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-detail-head { display: flex; align-items: flex-start; gap: 12px; }
      .mc-detail-head .mc-icon { width: 46px; height: 46px; border-radius: 10px; font-size: 19px; }
      .mc-detail-title-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
      .mc-detail-title { margin: 0; font-size: 20px; line-height: 1.25; letter-spacing: -.02em; }
      .mc-detail-desc { max-width: 720px; margin: 7px 0 0; color: var(--dsw-alias-label-secondary); font-size: 12.5px; line-height: 1.65; }
      .mc-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 9px 0 0; font-size: 11px; }
      .mc-broken {
        margin: 0 0 12px;
        padding: 9px 10px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent);
        border-radius: 7px;
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);
        color: var(--dsw-alias-state-error-primary);
        font-size: 11px;
      }
      .mc-section { margin-top: 18px; }
      .mc-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 7px; }
      .mc-section-title { margin: 0; font-size: 12px; font-weight: 650; }
      .mc-section-note { color: var(--dsw-alias-label-tertiary); font-size: 10px; }
      .mc-tabs { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
      .mc-tab {
        min-height: 28px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 10.5px;
        cursor: pointer;
      }
      .mc-tab:hover { color: var(--dsw-alias-label-primary); }
      .mc-tab.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 42%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-code-shell { overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: 7px; background: var(--dsw-alias-markdown-code-block); }
      .mc-code-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 30px;
        padding: 0 9px;
        border-bottom: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 70%, transparent);
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
      }
      .mc-copy {
        min-height: 22px;
        padding: 0 6px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 5px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        cursor: pointer;
      }
      .mc-copy:hover, .mc-copy.copied { border-color: var(--dsw-alias-brand-primary); color: var(--dsw-alias-brand-primary); }
      .mc-code {
        max-height: 330px;
        margin: 0;
        padding: 11px 12px 13px;
        overflow: auto;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10.5px;
        line-height: 1.7;
        tab-size: 2;
      }
      .mc-code code { white-space: pre; }
      .mc-ph {
        padding: 0 2px;
        border-radius: 3px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-hint { margin: 6px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10px; }
      .mc-callout {
        margin-top: 9px;
        padding: 10px;
        border: 1px solid color-mix(in srgb, var(--dsw-static-amber-400) 34%, transparent);
        border-radius: 7px;
        background: color-mix(in srgb, var(--dsw-static-amber-400) 8%, transparent);
        color: var(--dsw-alias-label-secondary);
      }
      .mc-callout-title { display: flex; align-items: center; gap: 5px; color: var(--dsw-static-amber-500); font-size: 10.5px; font-weight: 650; }
      .mc-required { display: grid; gap: 4px; margin: 6px 0 0; padding: 0; list-style: none; }
      .mc-required li { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; font-size: 10.5px; }
      .mc-required code { color: var(--dsw-alias-label-primary); font-size: 10px; }
      .mc-required a { flex: none; font-size: 10px; }
      .mc-required-empty { margin: 5px 0 0; font-size: 10.5px; }
      .mc-info {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 9px 14px;
        margin: 0;
      }
      .mc-info dt { color: var(--dsw-alias-label-tertiary); font-family: ui-monospace, monospace; font-size: 9px; }
      .mc-info dd { margin: 1px 0 0; font-size: 11px; overflow-wrap: anywhere; }
      .mc-tools { border-top: 1px solid var(--dsw-alias-border-l1); padding-top: 10px; }
      .mc-tools summary { cursor: pointer; color: var(--dsw-alias-label-secondary); font-size: 11px; font-weight: 600; }
      .mc-tool-list { display: grid; gap: 7px; margin: 8px 0 0; padding: 0; list-style: none; }
      .mc-tool-list li { padding-top: 7px; border-top: 1px solid var(--dsw-alias-border-l1); }
      .mc-tool-name { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-primary); font-family: ui-monospace, monospace; font-size: 10px; }
      .mc-tool-warn { color: var(--dsw-static-amber-500); cursor: help; }
      .mc-tool-desc { margin: 2px 0 0; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .mc-empty { padding: 32px 16px; color: var(--dsw-alias-label-tertiary); text-align: center; }
      .mc-empty strong { display: block; color: var(--dsw-alias-label-primary); font-size: 14px; }
      .mc-empty p { margin: 4px 0 0; font-size: 11.5px; }
      .mc-foot { margin-top: 12px; color: var(--dsw-alias-label-tertiary); font-size: 9.5px; }
      .mc-foot code { font-family: ui-monospace, monospace; }
      .mc-view-tabs {
        display: flex;
        align-items: center;
        gap: 3px;
        margin: 0 0 14px;
        padding-bottom: 7px;
        border-bottom: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-view-tab {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 9px;
        border: 1px solid transparent;
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 11.5px;
        cursor: pointer;
      }
      .mc-view-tab:hover { color: var(--dsw-alias-label-primary); background: var(--dsw-alias-interactive-bg-hover); }
      .mc-view-tab.active {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 28%, transparent);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
        color: var(--dsw-alias-brand-primary);
      }
      .mc-view-count {
        display: inline-grid;
        place-items: center;
        min-width: 17px;
        height: 16px;
        padding: 0 4px;
        border-radius: 4px;
        background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 14%, transparent);
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 8.5px;
      }
      .mc-toolbar-actions { display: flex; align-items: center; gap: 5px; margin-left: auto; }
      .mc-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        min-height: 30px;
        padding: 0 10px;
        border: 1px solid var(--dsw-alias-brand-primary);
        border-radius: 7px;
        background: var(--dsw-alias-brand-primary);
        color: #fff;
        color: var(--dsw-static-neutral-00);
        font-size: 11px;
        font-weight: 650;
        cursor: pointer;
      }
      .mc-primary:hover { filter: brightness(1.06); }
      .mc-root button.mc-primary {
        color: #fff;
        color: var(--dsw-static-neutral-00);
      }
      .mc-primary:disabled { opacity: .55; cursor: wait; }
      .mc-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        min-height: 27px;
        padding: 0 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        cursor: pointer;
      }
      .mc-secondary:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
      .mc-secondary:disabled { opacity: .45; cursor: default; }
      .mc-secondary.danger { color: var(--dsw-alias-state-error-primary); }
      .mc-secondary.danger:hover { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent); }
      .mc-installed-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .mc-installed-title { margin: 0; font-size: 15px; letter-spacing: -.01em; }
      .mc-installed-sub { margin: 2px 0 0; color: var(--dsw-alias-label-tertiary); font-size: 10.5px; }
      .mc-installed-list { display: grid; gap: 7px; }
      .mc-installed-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 10px 12px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-installed-copy { min-width: 170px; flex: 1; }
      .mc-installed-name { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 650; }
      .mc-installed-key {
        overflow: hidden;
        margin-top: 1px;
        color: var(--dsw-alias-label-tertiary);
        font-family: ui-monospace, monospace;
        font-size: 9px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-installed-status {
        overflow: hidden;
        margin-top: 2px;
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.45;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-installed-status.ok { color: var(--dsw-alias-state-success-primary); }
      .mc-installed-status.bad { color: var(--dsw-alias-state-error-primary); }
      .mc-installed-status.pending { color: var(--dsw-alias-brand-primary); }
      .mc-action-feedback {
        margin: 0 0 9px;
        padding: 7px 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-size: 10px;
        line-height: 1.5;
      }
      .mc-action-feedback.ok {
        border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 30%, transparent);
        color: var(--dsw-alias-state-success-primary);
      }
      .mc-action-feedback.bad {
        border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 30%, transparent);
        color: var(--dsw-alias-state-error-primary);
      }
      .mc-action-feedback.pending { color: var(--dsw-alias-brand-primary); }
      .mc-tool-toggle {
        margin-top: 3px;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--dsw-alias-link);
        font-size: 9px;
        cursor: pointer;
      }
      .mc-tool-toggle:hover { text-decoration: underline; }
      .mc-installed-tools {
        flex-basis: 100%;
        max-height: 220px;
        overflow: auto;
        margin-top: 2px;
        padding: 7px 9px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-installed-tool {
        display: grid;
        grid-template-columns: minmax(140px, 210px) minmax(0, 1fr);
        gap: 8px;
        padding: 3px 0;
        color: var(--dsw-alias-label-secondary);
        font-size: 9.5px;
        line-height: 1.45;
      }
      .mc-installed-tool code {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, monospace;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-installed-badges { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
      .mc-row-actions { display: flex; align-items: center; gap: 3px; flex-wrap: wrap; }
      .mc-loading { padding: 28px 16px; color: var(--dsw-alias-label-tertiary); font-size: 11.5px; text-align: center; }
      .mc-toast {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 120;
        max-width: min(420px, calc(100vw - 40px));
        padding: 9px 12px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 8px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 10px 32px color-mix(in srgb, #000 25%, transparent);
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
      }
      .mc-toast.bad { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent); color: var(--dsw-alias-state-error-primary); }
      .mc-modal-mask {
        position: fixed;
        inset: 0;
        z-index: 110;
        display: grid;
        place-items: center;
        padding: 20px;
        background: color-mix(in srgb, var(--dsw-alias-bg-mask-2) 75%, transparent);
      }
      .mc-modal {
        width: min(640px, 100%);
        max-height: min(720px, 86vh);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 10px;
        background: var(--dsw-alias-bg-overlay);
        box-shadow: 0 24px 64px color-mix(in srgb, #000 30%, transparent);
      }
      .mc-modal-head { padding: 14px 16px 8px; }
      .mc-modal-title { margin: 0; font-size: 16px; letter-spacing: -.01em; }
      .mc-modal-note { margin: 4px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 1.55; }
      .mc-modal-body { padding: 4px 16px 10px; overflow: auto; }
      .mc-textarea {
        width: 100%;
        min-height: 260px;
        padding: 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        outline: 0;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 10.5px;
        line-height: 1.65;
        resize: vertical;
      }
      .mc-textarea:focus { border-color: var(--dsw-alias-brand-primary); }
      .mc-modal-required { margin: 8px 0 0; padding: 0; list-style: none; display: grid; gap: 3px; }
      .mc-modal-required li { color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .mc-modal-required code { color: var(--dsw-alias-label-primary); }
      .mc-form { display: grid; gap: 12px; }
      .mc-field { display: grid; gap: 4px; min-width: 0; }
      .mc-field-head {
        display: flex;
        align-items: baseline;
        gap: 4px;
        flex-wrap: wrap;
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
        font-weight: 600;
      }
      .mc-field-head small {
        color: var(--dsw-alias-label-tertiary);
        font-size: 9px;
        font-weight: 400;
      }
      .mc-required-mark { color: var(--dsw-alias-state-error-primary); font-weight: 700; }
      .mc-input {
        width: 100%;
        min-height: 32px;
        padding: 6px 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        outline: 0;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-size: 11px;
      }
      .mc-input:focus { border-color: var(--dsw-alias-brand-primary); }
      .mc-input::placeholder { color: var(--dsw-alias-label-tertiary); }
      .mc-field-help {
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.5;
      }
      .mc-field-help a { margin-left: 2px; }
      .mc-args { min-height: 88px; font-size: 10.5px; }
      .mc-transport-line {
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 0;
        padding: 7px 9px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
      }
      .mc-transport-line code {
        min-width: 0;
        overflow: hidden;
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, monospace;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-form-note {
        margin: 0;
        padding: 8px 9px;
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-tertiary);
        font-size: 10px;
      }
      .mc-form-error {
        margin: 10px 0 0;
        padding: 8px 9px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 35%, transparent);
        border-radius: 6px;
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);
        color: var(--dsw-alias-state-error-primary);
        font-size: 10.5px;
        line-height: 1.5;
      }
      .mc-credential-toolbar { display: flex; justify-content: flex-start; margin-top: 8px; }
      .mc-credential-panel {
        margin-top: 8px;
        padding: 9px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 7px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .mc-credential-note {
        margin: 0 0 7px;
        color: var(--dsw-alias-label-tertiary);
        font-size: 9.5px;
        line-height: 1.55;
      }
      .mc-credential-panel-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }
      .mc-credential-panel-head .mc-credential-note { margin: 0 0 7px; }
      .mc-credential-panel-head .mc-secondary { flex: none; }
      .mc-credential-copy-form {
        display: grid;
        gap: 10px;
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      .mc-credential-list { display: grid; gap: 4px; }
      .mc-credential-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        min-width: 0;
        font-size: 9.5px;
      }
      .mc-credential-row > span { color: var(--dsw-alias-label-secondary); }
      .mc-credential-row > code {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-family: ui-monospace, monospace;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-backup-actions {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
        margin-bottom: 8px;
      }
      .mc-backup .mc-textarea { min-height: 130px; }
      .mc-backup .mc-section-title { margin: 14px 0 6px; }
      .mc-snapshot-list { display: grid; gap: 5px; }
      .mc-snapshot-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 7px 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
      }
      .mc-snapshot-copy { min-width: 0; display: grid; gap: 2px; }
      .mc-snapshot-copy strong {
        overflow: hidden;
        color: var(--dsw-alias-label-primary);
        font-size: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .mc-snapshot-copy span { color: var(--dsw-alias-label-tertiary); font-size: 9px; }
      .mc-modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        padding: 10px 16px 14px;
        border-top: 1px solid var(--dsw-alias-border-l1);
      }
      @media (max-width: 820px) {
        .mc-root { padding: 16px 14px 36px; }
        .mc-head { flex-direction: column; gap: 8px; }
        .mc-head-side { justify-content: flex-start; }
        .mc-body { grid-template-columns: 1fr; }
        .mc-list { max-height: none; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .mc-info { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 700px) {
        .mc-installed-row { align-items: flex-start; }
        .mc-row-actions { width: 100%; padding-top: 2px; }
        .mc-modal { max-height: 92vh; }
        .mc-textarea { min-height: 220px; }
      }
      @media (max-width: 560px) {
        .mc-list { grid-template-columns: 1fr; }
        .mc-info { grid-template-columns: 1fr 1fr; }
        .mc-detail { padding: 14px; }
        .mc-view-tabs { overflow-x: auto; }
        .mc-view-tab { flex: none; }
      }
    `;

    function transportLabel(t, type) {
      if (type === "sse") return t("transportSse");
      if (type === "streamable_http") return t("transportRemote");
      return t("transportStdio");
    }

    function connectionStateLabel(t, item) {
      if (item.enabled === false) return t("disabled");
      const state = item.connectionState;
      if (state === "unknown" && item.toolsAvailable) return t("connected");
      const labels = {
        healthy: t("connected"),
        connected: t("connected"),
        ready: t("connected"),
        degraded: t("degraded"),
        reauth: t("reauthorize"),
        "needs-auth": t("reauthorize"),
        reauthorize: t("reauthorize"),
        recovering: t("recovering"),
        unavailable: t("connectionError"),
        error: t("connectionError"),
        disconnected: t("notConnected"),
        configured: t("configured"),
        disabled: t("disabled"),
        unknown: t("stateUnknown"),
      };
      return labels[state] ?? labels[state ?? "unknown"];
    }

    function parseConnectionEditorSummary(json) {
      try {
        const document = JSON.parse(json);
        const connection = Array.isArray(document?.connections)
          ? document.connections[0]
          : document?.mcpServers && typeof document.mcpServers === "object"
            ? Object.values(document.mcpServers)[0]
            : null;
        if (!connection || typeof connection !== "object") return null;
        const masked = "••••••";
        const maskUrl = (raw) => {
          if (raw === "<KEEP_EXISTING>") return { value: "", hidden: true };
          try {
            const url = new URL(raw);
            for (const key of [...url.searchParams.keys()]) {
              url.searchParams.set(key, "***");
            }
            if (url.username) url.username = masked;
            if (url.password) url.password = masked;
            return { value: url.toString(), hidden: url.search.length > 0 };
          } catch {
            return { value: String(raw), hidden: false };
          }
        };
        const url = connection.url ? maskUrl(connection.url) : null;
        return {
          authMode: connection.authMode || "none",
          url,
          headers: Object.entries(connection.headers ?? {}).map(([name]) => ({
            name,
            value: masked,
          })),
          env: Object.entries(connection.env ?? {}).map(([name]) => ({
            name,
            value: masked,
          })),
          bearerToken: connection.bearerToken ? masked : "",
          apiKeyHeader: connection.apiKeyHeader || "",
          apiKeyValue: connection.apiKeyValue ? masked : "",
        };
      } catch {
        return null;
      }
    }

    function maskConnectionUrl(raw) {
      try {
        const url = new URL(String(raw));
        for (const key of [...url.searchParams.keys()]) {
          url.searchParams.set(key, "***");
        }
        if (url.username) url.username = "***";
        if (url.password) url.password = "***";
        return url.toString();
      } catch {
        return String(raw ?? "");
      }
    }

    function initials(name) {
      return Array.from(name || "?").slice(0, 1).join("").toUpperCase();
    }

    function fallbackColor(name) {
      let hash = 0;
      for (const char of name || "?") hash = (hash * 31 + char.codePointAt(0)) >>> 0;
      const hue = 190 + (hash % 130);
      const saturation = 22 + (hash % 10);
      const lightness = 28 + (hash % 9);
      return `hsl(${hue} ${saturation}% ${lightness}%)`;
    }

    function EntryIcon({ entry, large }) {
      const size = large ? 46 : 34;
      if (entry.iconData) {
        return h("img", {
          className: "mc-icon",
          src: entry.iconData,
          alt: "",
          width: size,
          height: size,
          loading: "lazy",
          decoding: "async",
        });
      }
      return h(
        "span",
        {
          className: "mc-icon mc-icon-fallback",
          style: { background: fallbackColor(entry.name) },
          "aria-hidden": true,
        },
        initials(entry.display_name),
      );
    }

    function Badge({ tone, children }) {
      return h("span", { className: `mc-badge mc-badge-${tone}` }, children);
    }

    function Code({ code }) {
      const parts = code.split(/(<YOUR_[A-Z0-9_]+>)/g);
      return h(
        "pre",
        { className: "mc-code" },
        h(
          "code",
          null,
          parts.map((part, index) =>
            /^<YOUR_[A-Z0-9_]+>$/.test(part)
              ? h("span", { className: "mc-ph", key: index }, part)
              : part,
          ),
        ),
      );
    }

    async function writeClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const command = document.execCommand;
      command.call(document, "copy");
      area.remove();
    }

    function useCopyState() {
      const [copied, setCopied] = useState("");
      const timer = useRef(null);
      useEffect(() => () => clearTimeout(timer.current), []);
      const copy = async (text, key, t) => {
        try {
          await writeClipboard(text);
          setCopied(key);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(""), 1500);
        } catch {
          setCopied(`${key}:failed`);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(""), 1500);
        }
      };
      return [copied, copy];
    }

    const CONNECTOR_API = "/mcp-connector/api";
    const CREDENTIAL_API = "/dsh-mcp-center/api/credentials";
    const CONNECTOR_TIMEOUTS = {
      status: 20_000,
      catalog: 30_000,
      configure: 145_000,
      importJson: 145_000,
      reconfigureConnection: 145_000,
      setEnabled: 130_000,
      healthCheck: 20_000,
      reconnect: 30_000,
      disconnect: 30_000,
      refreshCatalog: 90_000,
      connect: 310_000,
      editableConnectionConfig: 20_000,
      renameConnection: 20_000,
      setInjectionMode: 30_000,
      listSnapshots: 20_000,
      createSnapshot: 30_000,
      previewSnapshot: 20_000,
      restoreSnapshot: 145_000,
      exportConfig: 20_000,
    };

    function credentialFieldKey(credential) {
      return `${credential.kind}:${credential.name}`;
    }

    function slugServerName(input) {
      const slug = String(input)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^[^a-z0-9]+/, "")
        .replace(/[^a-z0-9]+$/, "")
        .slice(0, 63);
      return slug || "mcp-server";
    }

    function normalizeRemoteUrl(value) {
      try {
        const url = new URL(String(value));
        return `${url.origin}${url.pathname}`.replace(/\/$/, "");
      } catch {
        return String(value ?? "").replace(/\/$/, "");
      }
    }

    function normalizeEndpoint(value) {
      try {
        const url = new URL(String(value));
        return `${url.origin}${url.pathname}`.replace(/\/$/, "");
      } catch {
        return "";
      }
    }

    function findMarketEntryForConnection(item) {
      return (
        DATA.entries.find((entry) => slugServerName(entry.name) === item.serverName) ||
        DATA.entries.find((entry) => entry.display_name === item.name) ||
        DATA.entries.find(
          (entry) =>
            entry.transport?.url &&
            item.url &&
            normalizeEndpoint(entry.transport.url) === normalizeEndpoint(item.url),
        ) ||
        null
      );
    }

    function buildInstallPayload(entry, form) {
      const values = form.values ?? {};
      const get = (credential) => String(values[credentialFieldKey(credential)] ?? "").trim();
      const missing = (entry.credentials ?? [])
        .filter((credential) => credential.required && !get(credential))
        .map((credential) => credential.name);
      if (missing.length > 0) return { ok: false, missing };

      if (entry.transport.type === "stdio") {
        const env = {};
        for (const credential of entry.credentials ?? []) {
          const value = get(credential);
          if (credential.kind === "环境变量" && value) env[credential.name] = value;
        }
        const args = String(form.argsText ?? "")
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        const params = {
          name: entry.display_name,
          serverName: slugServerName(entry.name),
          transport: "stdio",
          command: entry.transport.command,
          args,
          envJson: JSON.stringify(env),
        };
        const cwd = String(form.cwd ?? "").trim();
        if (cwd) params.cwd = cwd;
        return { ok: true, params };
      }

      let url = String(entry.transport.url ?? "");
      for (const key of Object.keys(entry.transport.variables ?? {})) {
        const credential = (entry.credentials ?? []).find(
          (candidate) => candidate.name === `{${key}}` || candidate.name === key,
        );
        if (!credential) continue;
        url = url.split(`{${key}}`).join(encodeURIComponent(get(credential)));
      }
      if (/\{[^}]+\}/.test(url)) return { ok: false, missing: ["URL"] };

      const headers = {};
      for (const header of entry.transport.headers ?? []) {
        const credential = (entry.credentials ?? []).find(
          (candidate) => candidate.kind === "Header" && candidate.name === header.name,
        );
        if (!credential) continue;
        let value = get(credential);
        if (!value) continue;
        if (
          /^authorization$/i.test(header.name) &&
          (/^Bearer\s/i.test(credential.placeholder || "") ||
            /^Bearer\b/i.test(credential.description || "")) &&
          !/^Bearer\s/i.test(value)
        ) {
          value = `Bearer ${value}`;
        }
        if (/^WyHeader$/i.test(header.name) && !/^mcp_token=/i.test(value)) {
          value = `mcp_token=${value}`;
        }
        headers[header.name] = value;
      }

      return {
        ok: true,
        params: {
          name: entry.display_name,
          serverName: slugServerName(entry.name),
          transport: "streamable-http",
          url,
          headersJson: JSON.stringify(headers),
          authMode: "none",
          allowInsecurePrivateNetwork: false,
        },
      };
    }

    async function callCredentialStore(method, body, timeoutMs = 10_000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(CREDENTIAL_API, {
          method,
          headers: { "content-type": "application/json", accept: "application/json" },
          body: body === undefined ? undefined : JSON.stringify(body),
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal,
        });
        let data;
        try {
          data = await response.json();
        } catch {
          return { ok: false, message: `凭据副本服务返回了无效响应（HTTP ${response.status}）` };
        }
        if (!response.ok && data?.ok !== false) {
          return { ok: false, message: `HTTP ${response.status}` };
        }
        return data;
      } catch (error) {
        return {
          ok: false,
          message: controller.signal.aborted
            ? "凭据副本服务超时"
            : `凭据副本服务不可用：${error?.message || error}`,
        };
      } finally {
        clearTimeout(timer);
      }
    }

    async function loadCredentialCopy(serverName) {
      if (!serverName) return null;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10_000);
      try {
        const response = await fetch(
          `${CREDENTIAL_API}?serverName=${encodeURIComponent(serverName)}`,
          {
            headers: { accept: "application/json" },
            credentials: "same-origin",
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (response.status === 404) return null;
        const data = await response.json();
        return data.ok ? data.entry : null;
      } catch {
        return null;
      } finally {
        clearTimeout(timer);
      }
    }

    async function saveCredentialCopy(serverName, label, fields) {
      return callCredentialStore("POST", { serverName, label, fields });
    }

    async function deleteCredentialCopy(serverName) {
      if (!serverName) return;
      await callCredentialStore("DELETE", { serverName });
    }

    function buildCredentialFields(entry, values) {
      return (entry?.credentials ?? [])
        .map((credential) => {
          const key = credentialFieldKey(credential);
          return {
            key,
            label: credential.name,
            kind: credential.kind,
            secret: credential.secret === true,
            value: String(values?.[key] ?? ""),
          };
        })
        .filter((field) => field.value.trim().length > 0);
    }

    async function callConnector(method, params = {}, timeoutMs = 30_000) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(CONNECTOR_API, {
          method: "POST",
          headers: { "content-type": "application/json", accept: "application/json" },
          body: JSON.stringify({ method, params }),
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal,
        });
        let data;
        try {
          data = await response.json();
        } catch {
          return {
            ok: false,
            message:
              response.status === 401
                ? "登录状态已失效，请刷新页面"
                : `MCP 连接器返回了无效响应（HTTP ${response.status}）`,
          };
        }
        if (!response.ok && data?.ok !== false) {
          return { ok: false, message: `HTTP ${response.status}` };
        }
        return data;
      } catch (error) {
        return {
          ok: false,
          message: controller.signal.aborted
            ? "请求超时"
            : `MCP 连接器不可用：${error?.message || error}`,
        };
      } finally {
        clearTimeout(timer);
      }
    }

    function useToast() {
      const [toast, setToast] = useState(null);
      const timer = useRef(null);
      useEffect(() => () => clearTimeout(timer.current), []);
      const notify = (message, bad = false) => {
        setToast({ message, bad });
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setToast(null), 4200);
      };
      return [toast, notify];
    }

    function MarketView({ t, openConnector }) {
      const [view, setView] = useState("catalog");
      const [query, setQuery] = useState("");
      const [category, setCategory] = useState(ALL);
      const [selectedName, setSelectedName] = useState(DATA.entries[0]?.name ?? "");
      const [installId, setInstallId] = useState("");
      const [copied, copy] = useCopyState();
      const [toast, notify] = useToast();
      const [connector, setConnector] = useState({
        available: null,
        loading: true,
        items: [],
        message: "",
      });
      const [modal, setModal] = useState(null);
      const [modalBusy, setModalBusy] = useState(false);
      const [updating, setUpdating] = useState(false);
      const [busy, setBusy] = useState({});
      const [actionResults, setActionResults] = useState({});
      const [expandedTools, setExpandedTools] = useState({});
      const statusSequence = useRef(0);

      const categories = useMemo(
        () => [
          { name: t("all"), value: ALL, count: DATA.entries.length },
          ...DATA.categories.map((item) => ({
            name: item.name,
            value: item.name,
            count: item.count,
          })),
        ],
        [t],
      );

      const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return DATA.entries.filter((entry) => {
          if (category !== ALL && !entry.categories.includes(category)) {
            return false;
          }
          if (!needle) {
            return true;
          }
          return [
            entry.display_name,
            entry.name,
            entry.description,
            entry.vendor,
            ...entry.categories,
            ...entry.tools.map((tool) => `${tool.name} ${tool.description}`),
          ]
            .join(" ")
            .toLowerCase()
            .includes(needle);
        });
      }, [category, query]);

      const selected =
        filtered.find((entry) => entry.name === selectedName) ??
        filtered[0] ??
        null;

      useEffect(() => {
        if (selected) setSelectedName(selected.name);
      }, [selected?.name]);

      const install =
        selected?.install.find((item) => item.id === installId) ??
        selected?.install[0] ??
        null;
      const required =
        selected?.credentials.filter((credential) => credential.required) ?? [];
      const siteUrl = `${DATA.site.origin}${DATA.site.base}`;
      const installedServerNames = useMemo(
        () => new Set(connector.items.map((item) => item.serverName).filter(Boolean)),
        [connector.items],
      );
      const isEntryInstalled = (entry) =>
        installedServerNames.has(slugServerName(entry.name));

      async function refreshConnections() {
        const sequence = ++statusSequence.current;
        setConnector((current) => ({ ...current, loading: true }));
        const result = await callConnector("status", {}, CONNECTOR_TIMEOUTS.status);
        if (sequence !== statusSequence.current) return;
        if (result.ok) {
          const rawItems = Array.isArray(result.detail?.items) ? result.detail.items : [];
          const items = await Promise.all(
            rawItems.map(async (item) => {
              if (item.enabled === false || !item.connectorId) return item;
              const tools = await callConnector(
                "toolsList",
                {
                  connectorId: item.connectorId,
                  connectionKey: item.key,
                  cachedOnly: true,
                },
                10_000,
              );
              const count = Number(tools.detail?.totalTools ?? 0);
              const cachedTools = (tools.detail?.servers ?? []).flatMap((server) =>
                (server.tools ?? []).map((tool) => ({
                  name: tool.name,
                  description: tool.description || "",
                })),
              );
              return {
                ...item,
                cachedToolCount: Number.isFinite(count) ? count : cachedTools.length,
                cachedTools,
                toolsAvailable: count > 0 || cachedTools.length > 0,
              };
            }),
          );
          if (sequence !== statusSequence.current) return;
          setConnector({
            available: true,
            loading: false,
            items,
            message: "",
          });
        } else {
          setConnector({
            available: false,
            loading: false,
            items: [],
            message: result.message || t("connectorUnavailable"),
          });
        }
      }

      useEffect(() => {
        void refreshConnections();
      }, []);

      useEffect(() => {
        if (!modal) return undefined;
        const onKeyDown = (event) => {
          if (event.key === "Escape" && !modalBusy) setModal(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [modal, modalBusy]);

      function requireConnector() {
        if (connector.available === true) return true;
        notify(t("backendMissing"), true);
        return false;
      }

      function openInstall(entry) {
        if (connector.available === null) {
          notify(t("loading"), true);
          return;
        }
        if (!requireConnector()) return;
        const values = {};
        for (const credential of entry.credentials ?? []) {
          values[credentialFieldKey(credential)] = "";
        }
        setModal({
          kind: "install",
          entry,
          title: `${t("installNow")} · ${entry.display_name}`,
          values,
          argsText:
            entry.transport.type === "stdio"
              ? (entry.transport.args ?? []).join("\n")
              : "",
          cwd: "",
          error: "",
        });
      }

      function openUninstall(item) {
        setModal({
          kind: "confirm",
          title: `${t("uninstall")} · ${item.name || item.key}`,
          message: t("confirmUninstall"),
          key: item.key,
          serverName: item.serverName || "",
        });
      }

      async function openEdit(item) {
        if (!requireConnector()) return;
        const result = await callConnector(
          "editableConnectionConfig",
          { key: item.key },
          CONNECTOR_TIMEOUTS.editableConnectionConfig,
        );
        if (!result.ok) {
          notify(result.message || t("editLoadFailed"), true);
          return;
        }
        const serverName = item.serverName || slugServerName(item.name || item.key || "");
        const copyEntry = DATA.entries.find(
          (entry) => slugServerName(entry.name) === serverName,
        );
        const credentialCopy = await loadCredentialCopy(serverName);
        const copyValues = {};
        for (const credential of copyEntry?.credentials ?? []) {
          const fieldKey = credentialFieldKey(credential);
          copyValues[fieldKey] =
            credentialCopy?.fields?.find((field) => field.key === fieldKey)?.value ?? "";
        }
        setModal({
          kind: "edit",
          title: `${t("editTitle")} · ${item.name || item.key}`,
          json: result.detail?.json || "",
          key: item.key,
          itemUrl: item.url || "",
          serverName,
          copyEntry,
          credentialCopy,
          copyValues,
          error: "",
          showCredentials: false,
          showSecrets: false,
        });
      }

      function setModalError(message) {
        setModal((current) => (current ? { ...current, error: message } : current));
      }

      async function saveCopyFromModal() {
        if (!modal?.copyEntry) return;
        const fields = buildCredentialFields(modal.copyEntry, modal.copyValues ?? {});
        if (fields.length === 0) {
          setModalError(t("credentialCopyEmpty"));
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          const result = await saveCredentialCopy(
            modal.serverName,
            modal.copyEntry.display_name,
            fields,
          );
          if (!result.ok) {
            setModalError(result.message || t("credentialCopyFailed"));
            return;
          }
          setModal((current) =>
            current
              ? { ...current, credentialCopy: result.entry, copySaved: true }
              : current,
          );
          notify(t("credentialCopySaved"));
        } finally {
          setModalBusy(false);
        }
      }

      function openRename(item) {
        setModal({
          kind: "rename",
          title: `${t("renameTitle")} · ${item.name || item.key}`,
          key: item.key,
          name: item.name || "",
          error: "",
        });
      }

      async function submitRename() {
        if (!modal?.name?.trim()) {
          setModalError(t("fillRequired"));
          return;
        }
        setModalBusy(true);
        try {
          const result = await callConnector(
            "renameConnection",
            { key: modal.key, name: modal.name.trim() },
            CONNECTOR_TIMEOUTS.renameConnection,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          setModal(null);
          notify(result.message || t("rename"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function changeInjection(item) {
        const mode = item.injectionMode === "session" ? "always" : "session";
        await action(
          "setInjectionMode",
          { key: item.key, mode },
          CONNECTOR_TIMEOUTS.setInjectionMode,
          t("injectionChanged"),
          item.key,
        );
      }

      async function openBackup() {
        if (!requireConnector()) return;
        setModal({
          kind: "backup",
          title: t("backupTitle"),
          loading: true,
          exported: "",
          snapshots: [],
          error: "",
        });
        const [exported, snapshots] = await Promise.all([
          callConnector("exportConfig", {}, CONNECTOR_TIMEOUTS.exportConfig),
          callConnector("listSnapshots", {}, CONNECTOR_TIMEOUTS.listSnapshots),
        ]);
        setModal((current) =>
          current
            ? {
                ...current,
                loading: false,
                exported: exported.ok ? exported.detail?.json || "" : "",
                snapshots: snapshots.ok ? snapshots.detail?.items ?? [] : [],
                error:
                  !exported.ok || !snapshots.ok
                    ? exported.message || snapshots.message || t("actionFailed")
                    : "",
              }
            : current,
        );
      }

      async function createBackup() {
        setModalBusy(true);
        try {
          const result = await callConnector(
            "createSnapshot",
            { label: "MCP Center" },
            CONNECTOR_TIMEOUTS.createSnapshot,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          notify(result.message || t("backupCreated"));
          const snapshots = await callConnector(
            "listSnapshots",
            {},
            CONNECTOR_TIMEOUTS.listSnapshots,
          );
          setModal((current) =>
            current && snapshots.ok
              ? { ...current, snapshots: snapshots.detail?.items ?? [] }
              : current,
          );
        } finally {
          setModalBusy(false);
        }
      }

      async function restoreBackup(snapshotId) {
        if (!window.confirm(t("restoreConfirm"))) return;
        setModalBusy(true);
        try {
          const preview = await callConnector(
            "previewSnapshot",
            { snapshotId },
            CONNECTOR_TIMEOUTS.previewSnapshot,
          );
          if (!preview.ok || preview.detail?.restorable === false) {
            setModalError(preview.message || t("notRestorable"));
            return;
          }
          const result = await callConnector(
            "restoreSnapshot",
            { snapshotId },
            CONNECTOR_TIMEOUTS.restoreSnapshot,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          setModal(null);
          notify(result.message || t("refreshSuccess"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      function downloadBackup() {
        if (!modal?.exported) return;
        const blob = new Blob([modal.exported], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "dsh-mcp-connections.redacted.json";
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }

      async function installFromCatalog(entry) {
        const catalog = await callConnector(
          "catalog",
          {},
          CONNECTOR_TIMEOUTS.catalog,
        );
        if (!catalog.ok) return null;
        const target = normalizeRemoteUrl(entry.transport.url);
        const match = (catalog.detail?.items ?? []).find((item) =>
          (item.servers ?? []).some(
            (server) => normalizeRemoteUrl(server.url) === target,
          ),
        );
        if (!match || !["oauth2-pkce", "none"].includes(match.authMode)) {
          return null;
        }
        return callConnector(
          "connect",
          { connectorId: match.id },
          CONNECTOR_TIMEOUTS.connect,
        );
      }

      async function submitInstall() {
        if (!modal?.entry) return;
        const built = buildInstallPayload(modal.entry, modal);
        if (!built.ok) {
          setModalError(
            built.missing?.length
              ? `${t("fillRequired")}: ${built.missing.join(", ")}`
              : t("installInvalid"),
          );
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          let result = await callConnector(
            "configure",
            built.params,
            CONNECTOR_TIMEOUTS.configure,
          );
          if (
            !result.ok &&
            (modal.entry.credentials ?? []).length === 0 &&
            modal.entry.transport.type !== "stdio"
          ) {
            const fallback = await installFromCatalog(modal.entry);
            if (fallback) result = fallback;
          }
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          const fields = buildCredentialFields(modal.entry, modal.values ?? {});
          const copySaved =
            fields.length === 0 ||
            (await saveCredentialCopy(
              slugServerName(modal.entry.name),
              modal.entry.display_name,
              fields,
            )).ok;
          setModal(null);
          setView("installed");
          notify(
            `${result.message || t("installSuccess")}${
              copySaved ? "" : ` · ${t("credentialCopyFailed")}`
            }`,
            !copySaved,
          );
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitEdit() {
        if (!modal) return;
        let parsed;
        try {
          parsed = JSON.parse(modal.json);
        } catch {
          setModalError(t("installJsonInvalid"));
          return;
        }
        setModalError("");
        setModalBusy(true);
        try {
          const result = await callConnector(
            "reconfigureConnection",
            { key: modal.key, json: JSON.stringify(parsed, null, 2) },
            CONNECTOR_TIMEOUTS.reconfigureConnection,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          const fields = modal.copyEntry
            ? buildCredentialFields(modal.copyEntry, modal.copyValues ?? {})
            : [];
          const copySaved =
            fields.length === 0 ||
            (await saveCredentialCopy(
              modal.serverName,
              modal.copyEntry.display_name,
              fields,
            )).ok;
          setModal(null);
          setView("installed");
          notify(
            `${t("editSuccess")}${
              copySaved ? "" : ` · ${t("credentialCopyFailed")}`
            }`,
            !copySaved,
          );
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitConfirm() {
        if (!modal?.key) return;
        setModalBusy(true);
        try {
          const result = await callConnector(
            "disconnect",
            { key: modal.key },
            CONNECTOR_TIMEOUTS.disconnect,
          );
          if (!result.ok) {
            setModalError(result.message || t("actionFailed"));
            return;
          }
          await deleteCredentialCopy(modal.serverName);
          setModal(null);
          notify(t("uninstallSuccess"));
          await refreshConnections();
        } finally {
          setModalBusy(false);
        }
      }

      async function submitModal() {
        if (!modal) return;
        if (modal.kind === "install") return submitInstall();
        if (modal.kind === "edit") return submitEdit();
        if (modal.kind === "confirm") return submitConfirm();
        if (modal.kind === "rename") return submitRename();
      }

      async function action(method, params, timeout, successText, key) {
        if (!requireConnector()) return;
        if (key && busy[key]) return;
        if (key) {
          setBusy((current) => ({ ...current, [key]: true }));
          setActionResults((current) => ({ ...current, [key]: { pending: true } }));
        } else {
          setActionResults((current) => ({ ...current, __all: { pending: true } }));
        }
        try {
          const result = await callConnector(method, params, timeout);
          const message = result.ok
            ? result.message || successText
            : result.message || t("actionFailed");
          if (key) {
            setActionResults((current) => ({
              ...current,
              [key]: { ok: result.ok, message, at: Date.now() },
            }));
          } else {
            setActionResults((current) => ({
              ...current,
              __all: { ok: result.ok, message, at: Date.now() },
            }));
          }
          notify(message, !result.ok);
          await refreshConnections();
          return result;
        } finally {
          if (key) {
            setBusy((current) => {
              const next = { ...current };
              delete next[key];
              return next;
            });
          }
        }
      }

      async function toggleConnection(item) {
        await action(
          "setEnabled",
          { key: item.key, enabled: item.enabled === false },
          CONNECTOR_TIMEOUTS.setEnabled,
          t("enableSuccess"),
          item.key,
        );
      }

      async function checkConnection(item) {
        await action(
          "healthCheck",
          item.connectorId ? { connectorId: item.connectorId } : {},
          CONNECTOR_TIMEOUTS.healthCheck,
          t("checkSuccess"),
          item.key,
        );
      }

      async function reconnectConnection(item) {
        await action(
          "reconnect",
          { key: item.key },
          CONNECTOR_TIMEOUTS.reconnect,
          t("reconnectSuccess"),
          item.key,
        );
      }

      async function updateAll() {
        if (!requireConnector()) return;
        setUpdating(true);
        const catalog = await callConnector(
          "refreshCatalog",
          {},
          CONNECTOR_TIMEOUTS.refreshCatalog,
        );
        if (!catalog.ok) {
          setUpdating(false);
          setActionResults((current) => ({
            ...current,
            __all: { ok: false, message: catalog.message || t("actionFailed"), at: Date.now() },
          }));
          notify(catalog.message || t("actionFailed"), true);
          return;
        }
        const health = await callConnector(
          "healthCheck",
          {},
          CONNECTOR_TIMEOUTS.healthCheck,
        );
        setUpdating(false);
        setActionResults((current) => ({
          ...current,
          __all: {
            ok: health.ok,
            message: health.ok ? t("refreshSuccess") : health.message || t("actionFailed"),
            at: Date.now(),
          },
        }));
        notify(health.ok ? t("refreshSuccess") : health.message || t("actionFailed"), !health.ok);
        await refreshConnections();
      }

      const renderDetail = () => {
        if (!selected) {
          return h(
            "div",
            { className: "mc-empty" },
            h("strong", null, t("empty")),
            h("p", null, t("emptyHint")),
          );
        }

        const detailUrl = `${siteUrl}${selected.detail_path}`;
        const copyKey = `${selected.name}:${install ? install.id : "none"}`;

        return h(
          "section",
          { className: "mc-detail", "aria-label": selected.display_name },
          selected.possibly_broken &&
            h("p", { className: "mc-broken" }, t("broken")),
          h(
            "div",
            { className: "mc-detail-head" },
            h(EntryIcon, { entry: selected, large: true }),
            h(
              "div",
              { style: { minWidth: 0 } },
              h(
                "div",
                { className: "mc-detail-title-row" },
                h("h3", { className: "mc-detail-title" }, selected.display_name),
                h(
                  "div",
                  { className: "mc-badges" },
                  selected.official && h(Badge, { tone: "official" }, t("official")),
                  selected.verified && h(Badge, { tone: "verified" }, t("verified")),
                  h(
                    Badge,
                    { tone: "transport" },
                    transportLabel(t, selected.transport?.type),
                  ),
                  isEntryInstalled(selected) &&
                    h(Badge, { tone: "verified" }, t("installedTab")),
                ),
              ),
              h("p", { className: "mc-detail-desc" }, selected.description),
              h(
                "div",
                { className: "mc-links" },
                h(
                  "a",
                  { href: selected.homepage, target: "_blank", rel: "noreferrer" },
                  t("homepage"),
                ),
                selected.repository &&
                  h(
                    "a",
                    {
                      href: selected.repository,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    t("repository"),
                  ),
                h(
                  "a",
                  { href: detailUrl, target: "_blank", rel: "noreferrer" },
                  t("online"),
                ),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-primary",
                  style: { marginTop: 10 },
                  onClick: () => openInstall(selected),
                },
                isEntryInstalled(selected) ? t("reinstall") : t("installNow"),
              ),
            ),
          ),
          h(
            "div",
            { className: "mc-section" },
            h(
              "div",
              { className: "mc-section-head" },
              h("h4", { className: "mc-section-title" }, t("installTitle")),
              h("span", { className: "mc-section-note" }, install?.filename || ""),
            ),
            selected.install.length === 0
              ? h("p", { className: "mc-hint" }, t("noInstall"))
              : h(
                  "div",
                  { className: "mc-tabs", role: "tablist" },
                  selected.install.map((item) =>
                    h(
                      "button",
                      {
                        key: item.id,
                        type: "button",
                        className: `mc-tab ${install?.id === item.id ? "active" : ""}`,
                        role: "tab",
                        "aria-selected": install?.id === item.id ? "true" : "false",
                        onClick: () => setInstallId(item.id),
                      },
                      item.label,
                    ),
                  ),
                ),
            install &&
              h(
                "div",
                { className: "mc-code-shell" },
                h(
                  "div",
                  { className: "mc-code-head" },
                  h("span", null, install.filename),
                  h(
                    "button",
                    {
                      type: "button",
                      className: `mc-copy ${copied === copyKey ? "copied" : ""}`,
                      onClick: () => copy(install.code, copyKey, t),
                    },
                    copied === copyKey
                      ? t("copied")
                      : copied === `${copyKey}:failed`
                        ? t("copyFailed")
                        : t("copy"),
                  ),
                ),
                h(Code, { code: install.code }),
              ),
            h("p", { className: "mc-hint" }, t("configHint")),
            h(
              "div",
              { className: "mc-callout" },
              h("div", { className: "mc-callout-title" }, "▲ ", t("requiredTitle")),
              required.length === 0
                ? h("p", { className: "mc-required-empty" }, t("noRequired"))
                : h(
                    "ul",
                    { className: "mc-required" },
                    required.map((credential) =>
                      h(
                        "li",
                        { key: `${credential.kind}:${credential.name}` },
                        h(
                          "div",
                          null,
                          h("code", null, credential.name),
                          ` ${credential.description || ""}`,
                        ),
                        h(
                          "a",
                          {
                            href: credential.obtain_at || selected.homepage,
                            target: "_blank",
                            rel: "noreferrer",
                          },
                          credential.obtain_at ? t("apply") : t("docs"),
                        ),
                      ),
                    ),
                  ),
            ),
          ),
          h(
            "div",
            { className: "mc-section" },
            h("h4", { className: "mc-section-title" }, t("about")),
            h(
              "dl",
              { className: "mc-info" },
              h("div", null, h("dt", null, t("transport")), h("dd", null, transportLabel(t, selected.transport?.type))),
              h("div", null, h("dt", null, t("license")), h("dd", null, selected.license)),
              h("div", null, h("dt", null, t("lastChecked")), h("dd", null, selected.last_checked)),
              h("div", null, h("dt", null, "ID"), h("dd", null, selected.name)),
              h("div", null, h("dt", null, t("sourceOfficial")), h("dd", null, selected.official ? t("sourceOfficial") : t("sourceCommunity"))),
            ),
          ),
          selected.tools.length > 0 &&
            h(
              "div",
              { className: "mc-tools", style: { marginTop: 14 } },
              h(
                "details",
                null,
                h("summary", null, `${t("toolList")} (${selected.tools.length})`),
                h(
                  "ul",
                  { className: "mc-tool-list" },
                  selected.tools.map((tool) =>
                    h(
                      "li",
                      { key: tool.name },
                      h(
                        "div",
                        { className: "mc-tool-name" },
                        h("code", null, tool.name),
                        tool.side_effect &&
                          h("span", { className: "mc-tool-warn", title: t("sideEffect") }, "⚠"),
                      ),
                      h("p", { className: "mc-tool-desc" }, tool.description),
                    ),
                  ),
                ),
              ),
            ),
          h("p", { className: "mc-foot" }, `${t("snapshot")} · ${DATA.generated_at}`),
        );
      };

      const renderInstalled = () => {
        const items = connector.items;
        const available = connector.available === true;
        const overallFeedback = actionResults.__all;
        return h(
          "div",
          null,
          h(
            "div",
            { className: "mc-installed-head" },
            h(
              "div",
              null,
              h(
                "h3",
                { className: "mc-installed-title" },
                `${t("installedTab")} (${items.length})`,
              ),
              h("p", { className: "mc-installed-sub" }, t("connectorHint")),
            ),
            h(
              "div",
              { className: "mc-toolbar-actions" },
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: () => refreshConnections(),
                  disabled: connector.loading,
                },
                connector.loading ? t("loading") : t("refresh"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: updateAll,
                  disabled: updating || !available,
                },
                updating ? t("updating") : t("updateAll"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: () =>
                    action(
                      "healthCheck",
                      {},
                      CONNECTOR_TIMEOUTS.healthCheck,
                      t("checkSuccess"),
                    ),
                  disabled: !available,
                },
                t("checkAll"),
              ),
              h(
                "button",
                {
                  type: "button",
                  className: "mc-secondary",
                  onClick: openBackup,
                  disabled: !available,
                },
                t("backupTitle"),
              ),
            ),
          ),
          overallFeedback &&
            h(
              "div",
              {
                className: `mc-action-feedback ${
                  overallFeedback.pending
                    ? "pending"
                    : overallFeedback.ok
                      ? "ok"
                      : "bad"
                }`,
              },
              overallFeedback.pending ? t("checking") : overallFeedback.message,
            ),
          connector.available === false
            ? h(
                "div",
                { className: "mc-callout" },
                h("div", { className: "mc-callout-title" }, t("connectorUnavailable")),
                h("p", { className: "mc-required-empty" }, connector.message || t("connectorHint")),
                typeof openConnector === "function" &&
                  h(
                    "button",
                    {
                      type: "button",
                      className: "mc-secondary",
                      style: { marginTop: 7 },
                      onClick: () => {
                        if (!openConnector()) notify(t("connectorUnavailable"), true);
                      },
                    },
                    t("openConnector"),
                  ),
              )
            : connector.loading && items.length === 0
              ? h("div", { className: "mc-loading" }, t("loading"))
              : items.length === 0
                ? h(
                    "div",
                    { className: "mc-empty" },
                    h("strong", null, t("installedEmpty")),
                    h("p", null, t("connectorHint")),
                  )
                : h(
                    "div",
                    { className: "mc-installed-list" },
                    items.map((item, index) => {
                      const enabled = item.enabled !== false;
                      const displayName = item.name || item.key || `#${index + 1}`;
                      const referenceEntry = findMarketEntryForConnection(item);
                      const feedback = actionResults[item.key];
                      const feedbackMessage = feedback?.pending
                        ? t("checking")
                        : feedback?.message ||
                          (item.toolsAvailable
                            ? `${t("toolsFound")} ${item.cachedToolCount} ${t("tools")}`
                            : item.diagnostic?.message ||
                              item.healthMessage ||
                              item.lastError ||
                              t("stateHint"));
                      const feedbackTone = feedback?.pending
                        ? "pending"
                        : feedback
                          ? feedback.ok
                            ? "ok"
                            : "bad"
                          : "muted";
                      return h(
                        "article",
                        { className: "mc-installed-row", key: item.key || `${displayName}:${index}` },
                        h(
                          "div",
                          { className: "mc-installed-copy" },
                          h(
                            "div",
                            { className: "mc-installed-name" },
                            h(EntryIcon, {
                              entry:
                                referenceEntry ?? {
                                  name: displayName,
                                  display_name: displayName,
                                },
                            }),
                            h("span", null, displayName),
                          ),
                          h("div", { className: "mc-installed-key" }, item.key || ""),
                          h(
                            "div",
                            {
                              className: `mc-installed-status ${feedbackTone}`,
                              title: feedbackMessage,
                            },
                            feedbackMessage,
                          ),
                          item.cachedToolCount > 0 &&
                            h(
                              "button",
                              {
                                type: "button",
                                className: "mc-tool-toggle",
                                onClick: () =>
                                  setExpandedTools((current) => ({
                                    ...current,
                                    [item.key]: !current[item.key],
                                  })),
                              },
                              expandedTools[item.key]
                                ? t("hideTools")
                                : t("viewTools"),
                              ` (${item.cachedToolCount})`,
                            ),
                        ),
                        h(
                          "div",
                          { className: "mc-installed-badges" },
                          h(
                            "span",
                            { className: `mc-badge ${enabled ? "mc-badge-verified" : "mc-badge-transport"}` },
                            enabled ? t("enabled") : t("disabled"),
                          ),
                          h(
                            "span",
                            { className: "mc-badge mc-badge-transport" },
                            connectionStateLabel(t, item),
                          ),
                        ),
                        h(
                          "div",
                          { className: "mc-row-actions" },
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => toggleConnection(item),
                            },
                            enabled ? t("disable") : t("enable"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              title: t("injectionChanged"),
                              onClick: () => changeInjection(item),
                            },
                            item.injectionMode === "session"
                              ? t("sessionMode")
                              : t("alwaysMode"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => checkConnection(item),
                            },
                            t("check"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => reconnectConnection(item),
                            },
                            t("reconnect"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled:
                                item.canEditConfiguration === false ||
                                Boolean(busy[item.key]),
                              title:
                                item.canEditConfiguration === false
                                  ? t("editLoadFailed")
                                  : undefined,
                              onClick: () => openEdit(item),
                            },
                            t("edit"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled:
                                item.canRename === false || Boolean(busy[item.key]),
                              onClick: () => openRename(item),
                            },
                            t("rename"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary danger",
                              disabled: Boolean(busy[item.key]),
                              onClick: () => openUninstall(item),
                            },
                            t("uninstall"),
                          ),
                        ),
                        expandedTools[item.key] &&
                          h(
                            "div",
                            { className: "mc-installed-tools" },
                            (item.cachedTools ?? []).length === 0
                              ? h("p", { className: "mc-form-note" }, t("noTools"))
                              : (item.cachedTools ?? []).slice(0, 80).map((tool) =>
                                  h(
                                    "div",
                                    { className: "mc-installed-tool", key: tool.name },
                                    h("code", null, tool.name),
                                    h("span", null, tool.description || ""),
                                  ),
                                ),
                          ),
                      );
                    }),
                  ),
        );
      };

      const renderModal = () => {
        if (!modal) return null;
        const isInstall = modal.kind === "install";
        const isConfirm = modal.kind === "confirm";
        const isRename = modal.kind === "rename";
        const isBackup = modal.kind === "backup";
        const credentialSummary =
          modal.kind === "edit" ? parseConnectionEditorSummary(modal.json ?? "") : null;
        const updateValue = (key, value) =>
          setModal((current) =>
            current
              ? { ...current, values: { ...(current.values ?? {}), [key]: value } }
              : current,
          );
        return h(
          "div",
          {
            className: "mc-modal-mask",
            onMouseDown: (event) => {
              if (event.target === event.currentTarget && !modalBusy) setModal(null);
            },
          },
          h(
            "div",
            {
              className: "mc-modal",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": modal.title,
            },
            h(
              "div",
              { className: "mc-modal-head" },
              h("h3", { className: "mc-modal-title" }, modal.title),
              h(
                "p",
                { className: "mc-modal-note" },
                isInstall
                  ? t("installNativeHint")
                  : isConfirm
                    ? modal.message
                    : isBackup
                      ? t("backupNote")
                      : isRename
                        ? t("renameHint")
                        : t("editHint"),
              ),
            ),
            h(
              "div",
              { className: "mc-modal-body" },
              isBackup &&
                h(
                  "div",
                  { className: "mc-backup" },
                  modal.loading
                    ? h("p", { className: "mc-loading" }, t("loading"))
                    : h(
                        "div",
                        null,
                        h(
                          "div",
                          { className: "mc-backup-actions" },
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () => copy(modal.exported || "", "backup", t),
                            },
                            copied === "backup" ? t("backupCopied") : t("copy"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: downloadBackup,
                            },
                            t("download"),
                          ),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              disabled: modalBusy,
                              onClick: createBackup,
                            },
                            modalBusy ? t("saving") : t("createSnapshot"),
                          ),
                        ),
                        h("textarea", {
                          className: "mc-textarea",
                          readOnly: true,
                          spellCheck: false,
                          value: modal.exported || "",
                        }),
                        h("h4", { className: "mc-section-title" }, t("backupTitle")),
                        (modal.snapshots ?? []).length === 0
                          ? h("p", { className: "mc-form-note" }, t("noSnapshots"))
                          : h(
                              "div",
                              { className: "mc-snapshot-list" },
                              (modal.snapshots ?? []).map((snapshot) =>
                                h(
                                  "div",
                                  { className: "mc-snapshot-row", key: snapshot.id },
                                  h(
                                    "div",
                                    { className: "mc-snapshot-copy" },
                                    h(
                                      "strong",
                                      null,
                                      `${snapshot.reason || t("snapshotReason")} · ${new Date(snapshot.createdAt).toLocaleString()}`,
                                    ),
                                    h(
                                      "span",
                                      null,
                                      `${snapshot.existingCount ?? 0} 条连接${
                                        snapshot.absentCount
                                          ? ` · 可移除 ${snapshot.absentCount} 条`
                                          : ""
                                      }${snapshot.restorable ? "" : ` · ${t("notRestorable")}`}`,
                                    ),
                                  ),
                                  h(
                                    "button",
                                    {
                                      type: "button",
                                      className: "mc-secondary",
                                      disabled: modalBusy || snapshot.restorable === false,
                                      onClick: () => restoreBackup(snapshot.id),
                                    },
                                    modalBusy ? t("restoring") : t("restoreSnapshot"),
                                  ),
                                ),
                              ),
                            ),
                      ),
                ),
              isInstall &&
                h(
                  "div",
                  { className: "mc-form" },
                  h(
                    "div",
                    { className: "mc-transport-line" },
                    h("span", null, t("transport")),
                    h("code", null, transportLabel(t, modal.entry?.transport?.type)),
                    h("span", null, "·"),
                    h(
                      "code",
                      { title: modal.entry?.transport?.url || "" },
                      modal.entry?.transport?.type === "stdio"
                        ? `${modal.entry?.transport?.command || ""} ${(modal.entry?.transport?.args ?? []).join(" ")}`
                        : modal.entry?.transport?.url || "",
                    ),
                  ),
                  (modal.entry?.credentials ?? []).map((credential) => {
                    const key = credentialFieldKey(credential);
                    return h(
                      "label",
                      { className: "mc-field", key },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, credential.name),
                        credential.required && h("b", { className: "mc-required-mark" }, " *"),
                        h(
                          "small",
                          null,
                          credential.kind,
                          credential.required ? "" : ` · ${t("optional")}`,
                        ),
                      ),
                      h("input", {
                        className: "mc-input",
                        type: credential.secret ? "password" : "text",
                        autoComplete: "off",
                        spellCheck: false,
                        placeholder: credential.placeholder || "",
                        value: modal.values?.[key] ?? "",
                        onChange: (event) => updateValue(key, event.target.value),
                      }),
                      h(
                        "span",
                        { className: "mc-field-help" },
                        credential.description || "",
                        credential.obtain_at &&
                          h(
                            "a",
                            {
                              href: credential.obtain_at,
                              target: "_blank",
                              rel: "noreferrer",
                            },
                            ` ${t("apply")} ↗`,
                          ),
                      ),
                    );
                  }),
                  modal.entry?.transport?.type === "stdio" &&
                    h(
                      "label",
                      { className: "mc-field" },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, t("argsLabel")),
                      ),
                      h("textarea", {
                        className: "mc-textarea mc-args",
                        spellCheck: false,
                        value: modal.argsText ?? "",
                        onChange: (event) =>
                          setModal((current) =>
                            current ? { ...current, argsText: event.target.value } : current,
                          ),
                      }),
                      h("span", { className: "mc-field-help" }, t("argsHint")),
                    ),
                  modal.entry?.transport?.type === "stdio" &&
                    h(
                      "label",
                      { className: "mc-field" },
                      h(
                        "span",
                        { className: "mc-field-head" },
                        h("span", null, t("cwdLabel")),
                      ),
                      h("input", {
                        className: "mc-input",
                        type: "text",
                        spellCheck: false,
                        value: modal.cwd ?? "",
                        placeholder: "/path/to/project",
                        onChange: (event) =>
                          setModal((current) =>
                            current ? { ...current, cwd: event.target.value } : current,
                          ),
                      }),
                    ),
                  !(modal.entry?.credentials ?? []).length &&
                    modal.entry?.transport?.type !== "stdio" &&
                    h("p", { className: "mc-form-note" }, t("noRequired")),
                ),
              isRename &&
                h(
                  "label",
                  { className: "mc-field" },
                  h(
                    "span",
                    { className: "mc-field-head" },
                    h("span", null, t("renameTitle")),
                  ),
                  h("input", {
                    className: "mc-input",
                    type: "text",
                    autoComplete: "off",
                    spellCheck: false,
                    value: modal.name ?? "",
                    onChange: (event) =>
                      setModal((current) =>
                        current ? { ...current, name: event.target.value } : current,
                      ),
                  }),
                ),
              !isInstall &&
                !isConfirm &&
                !isRename &&
                h("textarea", {
                  className: "mc-textarea",
                  value: modal.json ?? "",
                  spellCheck: false,
                  onChange: (event) =>
                    setModal((current) =>
                      current ? { ...current, json: event.target.value } : current,
                    ),
                }),
              modal.kind === "edit" &&
                h(
                  "div",
                  { className: "mc-credential-toolbar" },
                  h(
                    "button",
                    {
                      type: "button",
                      className: "mc-secondary",
                      onClick: () =>
                        setModal((current) =>
                          current
                            ? { ...current, showCredentials: !current.showCredentials }
                            : current,
                        ),
                    },
                    modal.showCredentials
                      ? t("hideCredentialDetails")
                      : t("credentialDetails"),
                  ),
                ),
              modal.kind === "edit" &&
                modal.showCredentials &&
                h(
                  "div",
                  { className: "mc-credential-panel" },
                  modal.credentialCopy?.fields?.length
                    ? h(
                        "div",
                        null,
                        h(
                          "div",
                          { className: "mc-credential-panel-head" },
                          h("p", { className: "mc-credential-note" }, t("credentialCopyNote")),
                          h(
                            "button",
                            {
                              type: "button",
                              className: "mc-secondary",
                              onClick: () =>
                                setModal((current) =>
                                  current
                                    ? { ...current, showSecrets: !current.showSecrets }
                                    : current,
                                ),
                            },
                            modal.showSecrets
                              ? t("hidePlaintext")
                              : t("showPlaintext"),
                          ),
                        ),
                        h(
                          "div",
                          { className: "mc-credential-list" },
                          modal.credentialCopy.fields.map((field) =>
                            h(
                              "div",
                              { className: "mc-credential-row", key: field.key },
                              h("span", null, `${field.kind || "Field"} · ${field.label}`),
                              h(
                                "code",
                                { title: field.secret ? undefined : field.value },
                                field.secret && !modal.showSecrets
                                  ? "••••••"
                                  : field.value,
                              ),
                            ),
                          ),
                        ),
                      )
                    : h(
                        "p",
                        { className: "mc-credential-note" },
                        modal.copyEntry
                          ? t("credentialCopyMissing")
                          : t("credentialMasked"),
                      ),
                  modal.copyEntry &&
                    h(
                      "div",
                      { className: "mc-credential-copy-form" },
                      h(
                        "div",
                        { className: "mc-credential-panel-head" },
                        h(
                          "p",
                          { className: "mc-credential-note" },
                          t("credentialCopyFormHint"),
                        ),
                        h(
                          "button",
                          {
                            type: "button",
                            className: "mc-secondary",
                            disabled: modalBusy,
                            onClick: saveCopyFromModal,
                          },
                          modalBusy ? t("saving") : t("saveCredentialCopy"),
                        ),
                      ),
                      modal.copyEntry.credentials.map((credential) => {
                        const fieldKey = credentialFieldKey(credential);
                        return h(
                          "label",
                          { className: "mc-field", key: `copy:${fieldKey}` },
                          h(
                            "span",
                            { className: "mc-field-head" },
                            h("span", null, credential.name),
                            credential.required && h("b", { className: "mc-required-mark" }, " *"),
                            h("small", null, credential.kind),
                          ),
                          h("input", {
                            className: "mc-input",
                            type: credential.secret ? "password" : "text",
                            autoComplete: "off",
                            spellCheck: false,
                            placeholder: credential.placeholder || "",
                            value: modal.copyValues?.[fieldKey] ?? "",
                            onChange: (event) =>
                              setModal((current) =>
                                current
                                  ? {
                                      ...current,
                                      copyValues: {
                                        ...(current.copyValues ?? {}),
                                        [fieldKey]: event.target.value,
                                      },
                                    }
                                  : current,
                              ),
                          }),
                        );
                      }),
                    ),
                  !modal.copyEntry &&
                    credentialSummary &&
                    h(
                      "div",
                      { className: "mc-credential-list" },
                      h(
                        "div",
                        { className: "mc-credential-row", key: "auth-mode" },
                        h("span", null, t("authMode")),
                        h("code", null, credentialSummary.authMode),
                      ),
                      credentialSummary.url &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "url" },
                          h("span", null, "URL"),
                          h(
                            "code",
                            { title: credentialSummary.url.value },
                            credentialSummary.url.hidden
                              ? credentialSummary.url.value ||
                                  (modal.itemUrl
                                    ? maskConnectionUrl(modal.itemUrl)
                                    : t("credentialUrlHidden"))
                              : credentialSummary.url.value,
                          ),
                        ),
                      credentialSummary.headers.map((header) =>
                        h(
                          "div",
                          { className: "mc-credential-row", key: `header:${header.name}` },
                          h("span", null, `${t("headerLabel")} · ${header.name}`),
                          h("code", null, header.value),
                        ),
                      ),
                      credentialSummary.env.map((entry) =>
                        h(
                          "div",
                          { className: "mc-credential-row", key: `env:${entry.name}` },
                          h("span", null, `${t("envLabel")} · ${entry.name}`),
                          h("code", null, entry.value),
                        ),
                      ),
                      credentialSummary.bearerToken &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "bearer" },
                          h("span", null, t("bearerLabel")),
                          h("code", null, credentialSummary.bearerToken),
                        ),
                      credentialSummary.apiKeyValue &&
                        h(
                          "div",
                          { className: "mc-credential-row", key: "api-key" },
                          h(
                            "span",
                            null,
                            `${t("apiKeyLabel")}${credentialSummary.apiKeyHeader ? ` · ${credentialSummary.apiKeyHeader}` : ""}`,
                          ),
                          h("code", null, credentialSummary.apiKeyValue),
                        ),
                      !credentialSummary.url &&
                        credentialSummary.headers.length === 0 &&
                        credentialSummary.env.length === 0 &&
                        !credentialSummary.bearerToken &&
                        !credentialSummary.apiKeyValue &&
                        h("p", { className: "mc-form-note" }, t("credentialNone")),
                    ),
                ),
              modal.error && h("p", { className: "mc-form-error" }, modal.error),
            ),
            h(
              "div",
              { className: "mc-modal-actions" },
              isBackup
                ? h(
                    "button",
                    {
                      type: "button",
                      className: "mc-primary",
                      onClick: () => setModal(null),
                    },
                    t("close"),
                  )
                : [
                    h(
                      "button",
                      {
                        type: "button",
                        className: "mc-secondary",
                        disabled: modalBusy,
                        onClick: () => setModal(null),
                      },
                      t("cancel"),
                    ),
                    h(
                      "button",
                      {
                        type: "button",
                        className: isConfirm ? "mc-secondary danger" : "mc-primary",
                        disabled: modalBusy,
                        onClick: submitModal,
                      },
                      modalBusy
                        ? isInstall
                          ? t("installing")
                          : isConfirm
                            ? t("uninstalling")
                            : isRename
                              ? t("renaming")
                              : t("saving")
                        : isInstall
                          ? t("installNow")
                          : isConfirm
                            ? t("uninstall")
                            : isRename
                              ? t("rename")
                              : t("save"),
                    ),
                  ],
            ),
          ),
        );
      };

      return h(
        "div",
        { className: "mc-root" },
        h("style", null, CSS),
        h(
          "header",
          { className: "mc-head" },
          h(
            "div",
            null,
            h("p", { className: "mc-eyebrow" }, "DSH · MCP CENTER"),
            h("h2", { className: "mc-title" }, t("title")),
            h("p", { className: "mc-sub" }, t("subtitle")),
          ),
          h(
            "div",
            { className: "mc-head-side" },
            h("span", { className: "mc-count" }, `${DATA.entries.length} ${t("entries")}`),
            h(
              "a",
              { className: "mc-open-site", href: siteUrl, target: "_blank", rel: "noreferrer" },
              t("onlineMarket"),
              " ↗",
            ),
          ),
        ),
        h(
          "div",
          { className: "mc-view-tabs", role: "tablist" },
          h(
            "button",
            {
              type: "button",
              role: "tab",
              className: `mc-view-tab ${view === "catalog" ? "active" : ""}`,
              "aria-selected": view === "catalog" ? "true" : "false",
              onClick: () => setView("catalog"),
            },
            t("marketTab"),
          ),
          h(
            "button",
            {
              type: "button",
              role: "tab",
              className: `mc-view-tab ${view === "installed" ? "active" : ""}`,
              "aria-selected": view === "installed" ? "true" : "false",
              onClick: () => setView("installed"),
            },
            t("installedTab"),
            h("span", { className: "mc-view-count" }, connector.items.length),
          ),
        ),
        view === "catalog" &&
          h(
            React.Fragment,
            null,
            h(
              "div",
              { className: "mc-toolbar" },
              h(
                "label",
                { className: "mc-search" },
            h(
              "svg",
              { viewBox: "0 0 20 20", "aria-hidden": true },
              h("circle", { cx: 8.5, cy: 8.5, r: 5.5 }),
              h("path", { d: "m13 13 4 4" }),
            ),
            h("input", {
              value: query,
              onChange: (event) => setQuery(event.target.value),
              placeholder: t("search"),
              "aria-label": t("search"),
              type: "search",
              spellCheck: false,
            }),
          ),
          h(
            "div",
            { className: "mc-cats", role: "group", "aria-label": t("all") },
            categories.map((item) =>
              h(
                "button",
                {
                  key: item.value,
                  type: "button",
                  className: `mc-cat ${category === item.value ? "active" : ""}`,
                  "aria-pressed": category === item.value,
                  onClick: () => setCategory(item.value),
                },
                item.name,
                h("span", { className: "mc-cat-count" }, item.count),
              ),
            ),
          ),
        ),
        h(
          "div",
          { className: "mc-body" },
          h(
            "div",
            { className: "mc-list" },
            filtered.length === 0
              ? h(
                  "div",
                  { className: "mc-empty" },
                  h("strong", null, t("empty")),
                  h("p", null, t("emptyHint")),
                )
              : filtered.map((entry) =>
                  h(
                    "button",
                    {
                      key: entry.name,
                      type: "button",
                      className: `mc-card ${selected?.name === entry.name ? "active" : ""}`,
                      onClick: () => {
                        setSelectedName(entry.name);
                        setInstallId("");
                      },
                    },
                    h(
                      "div",
                      { className: "mc-card-head" },
                      h(EntryIcon, { entry }),
                      h(
                        "div",
                        { className: "mc-card-copy" },
                        h("span", { className: "mc-card-title" }, entry.display_name),
                        h("p", { className: "mc-card-desc" }, entry.description),
                        h(
                          "div",
                          { className: "mc-card-meta" },
                          h("span", null, entry.categories.join(" · ")),
                          h("span", null, "·"),
                          h("span", null, entry.last_checked),
                        ),
                      ),
                    ),
                    h(
                      "div",
                      { className: "mc-badges", style: { marginTop: 7 } },
                      entry.official && h(Badge, { tone: "official" }, t("official")),
                      entry.verified && h(Badge, { tone: "verified" }, t("verified")),
                      h(Badge, { tone: "transport" }, transportLabel(t, entry.transport?.type)),
                      isEntryInstalled(entry) && h(Badge, { tone: "verified" }, t("installedTab")),
                      entry.possibly_broken && h(Badge, { tone: "broken" }, "⚠"),
                    ),
                  ),
                ),
          ),
              renderDetail(),
            ),
          ),
        view === "installed" && renderInstalled(),
        renderModal(),
        toast &&
          h(
            "div",
            { className: `mc-toast ${toast.bad ? "bad" : ""}` },
            toast.message,
          ),
      );
    }

    return {
      inject: ["slots", "locale"],
      apply(ctx) {
        ctx.effect(
          () => ctx.locale.register(NS, DICTS),
          "dsh-mcp-center: dictionaries",
        );
        const t = ctx.locale.bind(NS);
        let layout;
        ctx.inject(["layout"], (scoped) => {
          layout = scoped.layout;
        });
        const openConnector = () => {
          try {
            if (layout?.selectPanel) {
              layout.selectPanel("mcp-connector");
              return true;
            }
          } catch {
            // The connector plugin may not be installed.
          }
          return false;
        };
        ctx.slots.inject("plugins.tab", () =>
          ctx.slots.register(
            {
              name: "plugins.tab",
              id: NS,
              order: 10,
              label: () => t("nav"),
              locale: NS,
            },
            (ownerProps) => h(MarketView, { ...ownerProps, t, openConnector }),
          ),
        );
      },
    };
  },
});
