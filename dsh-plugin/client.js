window.__ModuleLoader__.load({
  id: "dsh-mcp-center",
  factory(require) {
    const React = require("react");
    const { useEffect, useMemo, useRef, useState } = React;
    const h = React.createElement;
    const NS = "dsh-mcp-center";
    const DATA = {"generated_at":"2026-10-30T13:02:32.645Z","count":10,"site":{"origin":"https://bai-2008.github.io","base":"/dsh-mcp-center/","repo_url":"https://github.com/Bai-2008/dsh-mcp-center"},"categories":[{"name":"餐饮","count":2},{"name":"出行","count":1},{"name":"生活服务","count":0},{"name":"办公","count":1},{"name":"开发工具","count":4},{"name":"数据库","count":1},{"name":"搜索","count":1},{"name":"AI","count":0},{"name":"其他","count":0}],"entries":[{"name":"com.amap/mcp","display_name":"高德地图","description":"高德地图官方 MCP，提供地理编码、地点搜索、路径规划、天气与出行服务。","vendor":"高德地图","categories":["出行"],"official":true,"verified":true,"homepage":"https://lbs.amap.com/api/mcp-server/summary","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.amap.com/mcp?key={key}","headers":[],"variables":{"key":{"description":"高德开放平台 Web 服务 Key","obtain_at":"https://lbs.amap.com/api/mcp-server/create-project-and-key","required":true,"secret":true}}},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.amap__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-amap-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.amap.com/mcp?key=<YOUR_KEY>\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"URL 参数","name":"{key}","placeholder":"<YOUR_KEY>","description":"高德开放平台 Web 服务 Key","required":true,"secret":true,"obtain_at":"https://lbs.amap.com/api/mcp-server/create-project-and-key"}],"iconData":"data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAD/gIAC/52AAv/fcQL/mk0D/5hABOvKVAThymYF/rZbBtmjWwfltHMI7bR2CeXBZwrcslgM9LlVDPK4WQ78vV8Q/cBhEPDHWBLrylsU/MZiFfG7XhfqwV8Z9MNgGfW/Yhr2wmIb9r9jHOm3XB/tu1sf8LpfIPW4YCD2vmAg9r9gIPa/YCD2vmAg77hgIO63XiDtuVwf9MFfHem8WxzovV4b9sJhGfO6YBjxvWEW8cZjFfHJYBPxxV0S+79eEPKzVBDrv14N7L9YDPzMZQr823MJ/bh3CP6uXQf9z1gG6LNnBeatVwT8t0sD+6lUA//gcAL/n4EC7cY2Afv+AQH//wAB/52AAvzbcgL2nk8D/5dCBP/WWAT/5nME7a1XBt+aWAjwsmQI7MVrCeXHaArrtFoL9bJIC+WmPw35sToO87BHD/y+WRDwwFES7LVMFPa5Shb4u1IX7sBSGPK/Uhruu1Ic971QHfm+VB71u1Mf9bxWH/S9VyDwuVYh8LlWIfC6WSHwul0h9L1eIPC6XiD3vlof/btdHva8XR7qwVwd8cJZG++6WRrvwF4Y+rlfFumqVRbqu1oT8MVkEe+/WA/5t1YO7qJODeWjUgvppksK48pdCerWcwnzs2kI7aNIB/+7XAb7w3IF2rtYBOiySgP21mwC+qp/AqqFfQLk4R4B//8AAenecALon08D1pc/BP/VTgT85XME97ldBu6lXQfusXEI7sV2CeTFYgrppTcJ96xICvHXqR345MMx9eTEOfTmwz3z4r1A8t25QfXfuULw3bVE896yRfHdr0fz261I8turSfTbrEr4369J+d6vSvjcrEr126tL+NutTPndrEz52ZVN+dJ4TvfSdE761HVN+dV1TPnRdUv71XZK/NZ2SfrVd0n413hH+dZ4RvrXekT92XtC+tV5QvrbfD/73oA++91/PP7ahTv43Io3/OKYMPfgmx7r1IEK6ahUBvyhTwf8u1EG6bNnBeqxUQT/tEoDzalWA+jjcwL/mYAC/t4fAf//AAHApFID1IhABPvHQAT16VME9cNfBeGlWQfxrXMI9sx8COK6Pgfuu2cM9+bKLPPo0kr17+CQ9fHl1fXx5O/08OH58+7e/fPu3v7y7d3+8ezb/vLs2v7z7Nr+8uvZ/vLq2P707Nj8+vLh9v705vT99OX0/fTk9P305PT98+H0/eu4+P3ihf3+4oH+/uGC/v7ggv794IL+/eGB/v3hgv794YL+/eKC/v3jgv7+44P+/uOD/v/khP7+44T+/uSF/v7lhv7/5Yv6/ueQ8v3omN3+6pue/uiSUf7qoC/506MO3GQLBPu8WQX/yFsE8rZOA/irUwP/5HQC/pmAAte+QAH4+gUB/6RSA/+aQwT30VcE4MdkBfezWQb/rmkI/8V+CP/FAgT25cUh9e3cWvTw5L3z7+P68e3i//Hu4P/y7t//8uzc//Ls3P/y7Nv/8eza//Hr2f/y69j/8erW//Hq1v/y6tX/9OvX//vy4f/99OT//fTj//zz4v/98uL//fLf//3ptv/833///d57//zee//+4Hz//uB8//3ffP/9333//d99//3gfP/+4X3//uF9//7hff/+4n7//uF+//3ifv/+43///uJ////jf//+4n7//uR///7mhv7+6ZbO/+mca/zhnSfZr1EF7KpdBNq7VgTusUsD589pAvaSfQKzgH4C7OYZAf/LUgP/20gE/ONyBOiyWgbmmmAI/Lp6CPviUgf37tAs9fHknvPw5PTx7uL/8e3h//Hu4f/y7t//8uzd//Lt3f/x7Nv/8uza//Lr2P/x6tf/8urW//Lq1v/y6tX/8unT//Pq1P/68N7//PPh//zz4P/98uD//vPg//7z3//96rX//d9///3ee//83Xr//d57//zee//93nv//t99//3eff/9333//eB8//7hff/94X3//eF+//7hfv/+4X3//eJ///7jgP/+4n///uJ+//7jf//+5H///+R////nifz/6Ja0/OWcPerNognqlhMD/7JOA9OoVQPvq3UC/4l+Av/mGAH75EwE6+VVBPXHXwXcqlYH8qhwCPrWcQj28dg49fHmufLw5f/x7uL/8e7i//Hu4f/y7t//8uzd//Lt3f/y7Nv/8evZ//Lr2P/x6db/8enW//Lq1f/z6tT/8unS//Ho0P/z6dL/+vDb//3z3//88t7//PLe//zy3v/88tz//Omy//zffv/83nv//t97//3ee//83nv//d17//zee//933z//t99//3fff/94H3//uF9//3hff/+4X7//uJ+//7hfv/943///uOA///jf//+4n///+SA//7kgP//5ID//+SE///njsv/7J9P/+alCv+wCgL/s1cD/+d1Av+VfgL/5RgB+79DBOjIZAX2t18G5attCP+AAwT38tku9PLmu/Lv5P/x7uL/8u7i//Hu4f/y7uD/8uzd//Ls3f/y7Nz/8uza//Lr2P/y6tb/8unV//Lq1f/y6dP/8ejQ//Hnz//x6M//8+nR//nv2v/88t3//PHc//zw2//88dv//PDZ//zosf/93X3//N16//zdev/73Xr//d57//3ee//93nr//d57//7ffP/+333//d99//7gff/+4X3//eB9//7hfv/+4n7//eJ+//7jgP/+43///uJ///7kgP//5ID//uSA///kgP//5YH//+mO0f/roUTn448E9LNFA//mdgL/lX4C/+UYAf/BZAT7yGEF7K1ZB+x9RQX17NIi9fLmpvLw5f/x7uL/8u7i//Hu4v/x7uD/8e3d//Lt3f/x7Nz/8eza//Lr2P/y6db/8unV//Lq1f/y6dP/8efR//Lnz//x587/8efO//Poz//57tf//PDc//3x2//88Nr//O/a//3v2f/96LL//dx9//zcef/93Hn//Nx6//zdev/93nv//d57//3ee//933v//d98//3fff/94X///uJ+//3hff/+4X7//uF+//7ifv/+43///uJ///7if//+43///uR////kgP//5YH//+SA///mg///6JO+/uuiKfz//wD/5nQC/5WBAv/ligH/xW4F+LRfBuGjZQf/1qoN9fLjZvLw5frx7uP/8e7i//Hu4v/x7uH/8u3e//Lt3f/y7Nz/8ezb//Lr2f/y69j/8enW//Pq1f/z6tP/8efQ//Ln0P/y6M//8ebN//Hly//0587/+e3W//zv2f/88Nn/++/Y//vv2P/779f/++ew//vcff/823r//dx6//3cef/93Hr//N56//zee//93nv//N57//3fff/9333//cle//7OZP/933n//eF9//7ifv/+4n7//eJ///7jgP//43///uN///7kgP/+5ID//+WB//7kgP/+5ID//uWG//7qnYr+57AT/9gLAfyUggKtm6EC/MpiBemvVgfvekIF9e7ZLvXy58rx7uP/8e7i//Hu4f/x7eH/8u7f//Lt3v/x7d3/8ezb//Hr2v/x6tf/8erW//Lq1f/y6dP/8ejR//Lnz//y58//8ebN//Hly//x5cv/9OfM//ns1P/879f//O/X//zu1v/87tb//O7V//3nrv/73Hz/+9x5//vcev/83Hr//dx5//zdev/83Xr//N57//zfff/802v//rM///6WF//+sTz//tt0//3hff/+4X7//uF+//3ifv/+44D//+N////jf//+5ID//uSA///kgf/+5ID//uSA//7kgP//6JDp/+qaOf9//wD6j38CjH5+At6xWQbhpFgH/9KjDPXy4l3y8OX/8e7j//Hu4v/x7eH/8u7h//Lt3v/y7d3/8uzc//Hr2v/y69n/8erW//Hq1f/y6dP/8ejR//Hnz//x587/8ebN//Hmy//x5cr/8eXJ//Pnyv/57NP//O7W//zu1f/87tX//O7V//zu0//85q3//Nx7//zceP/73Hn//Nx6//zcev/83Hn//N17//zZdf/9vk///p0h//6KBv/+hAD//qAk///Xb//94X7//eF+//7ifv/94n7//uOA//7jf//+43///uSA//7kgP/+5ID//+SB//7kgP/+5IH//+aD///rnoz367ET3ChCAY6AgAL1qFoG+ZFfB/nr1SD18+et8e7j//Hu4//y7uL/8u7h//Hu3//y7d7/8ezc//Ls3P/x69r/8erY//Hp1v/z6tX/8ejS//Lo0P/y587/8efN//Hly//y5cv/8ubK//Lnyv/wzqz/9dGx//vq0P/77tT/++3T//vs0v/77dL//Oas//zce//823j//Nx4//vcef/83Hr//Nt4//3JX//9pCv//o0L//6FAf/+hAD//oUA//6QD//+0mr//eJ+//7hfv//4n7//eJ+//7jgP/+43///uN///7kgP//5ID//uSA///kgf//5ID//+WB///lgP//6pva+umjKAAAAACOgIAC5bFRB/2IUgbz7dgw9PLo6fLv4//x7uP/8e7i//Lu4f/x7d7/8u3d//Ls3P/y7Nv/8uvZ//Hq1//x6db/8unT//Ho0f/y58//8ufP//HmzP/y5cv/8+bK//LlyP/y6Mv/8bKB/95oN//tup3/++/W//vs0v/77NL/++zR//vkq//72nv//Nt4//vbeP/823j//NJr//2vO//+kRH//ocD//6EAP/+hQD//oUA//6FAP/+hgL//stg//ziff/+4X7//+J+//3hfv/943///uN///7jf//+5ID//+SA//7kgP//5IH//+SA///lgf//5YD//+eJ+vvnkTWhAKYBjH1/AsqkSAj/qkwG9O/XNfPx5vzx7+P/8e7i//Ht4v/x7uH/8u7e//Ht3P/y7Nv/8uza//Hr2P/x6tb/8urW//Lp0v/y6NH/8ebO//Hmzf/y5sz/8ubK//Llyf/x5Mj/8uTG//KZW//WOwH/1GNC//POsv/77tP/++zR//vs0P/75Kv/+9t6//zbd//71nH//b1O//6YGv/+iQX//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//69TP/933n//uF+//7hfv/94X7//eN///7jf//+43///uSA///kgP/+5ID//+SB///kgP//5YH//+WA///lgf/965xZ+dq/B3prdQLhokgI/7heBvTu1zry7+T+8u/j//Lv4v/y7uL/8e7g//Lt3v/x7Nz/8ezc//Lr2v/x6tf/8unW//Pq1v/x6NH/8efP//Hnz//x5sz/8uXL//Llyf/x5cj/8ubK//LOp//yfjf/3EEA/8MsCv/dh2v/+N/E//vt0v/87ND//OWr//vYd//8yV///aIo//6KB//+hgH//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+rTb//dt1//7hfv//4n7//eF+//7jgP/+43///uN///7kgP//5ID//uSA///kgf/+5ID//+WB///lgP//5YH//eyjfvvkuw5gUWkB/Z9dCP7VpQz18eFX8e7j//Hu4//x7uH/8e3h//Ht3//y7d3/8u3c//Hs2//y69r/8erX//Hp1v/y6tT/8ejR//Loz//x5s7/8ubM//Hlyv/y5cj/8uXI//Hnyv/xtIT/8WUV/+JIAf/FLQj/wS0S/+ami//66M7/++rL//vZmP/8rz7//o4M//6HAv/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//p0h//zZcf/+4X7//+J+//3hfv/+44D//uN///7jf//+5ID//+SA///kgf//5IH//uSA//7kgf//5YD//+WB///uppv+6bgTRzdkAf+eXQj32KsO8+/fY/Lu4//x7+P/8e7h//Hu4P/x7d//8u3d//Ls3P/w69r/8erZ//Lq1v/y6dX/8enT//Lo0f/x587/8ubO//LmzP/y5cr/8+XJ//LlyP/x4cP/8Jpe//BTAP/oTwH/yTEI/7wiCv/HPyH/8b6b//zIh//+mCP//ocE//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//+PDP/91W3//eF+///ifv/+43///uOA//7if//+43///uOA//7kgP//5YH//uSA//7kgP/+5IH//uWA///lgf//7qWj/+q1FeCm9gD8plwI7NykD/Lv32Ty7+P/8u/j//Dt4f/x7uD/8u3e//Lt3f/y7Nz/8eva//Hq2P/y6tb/8unW//Lp0//y6NH/8efO//Lmzf/w5cv/8ubJ//LlyP/y5sr/8s2n//B+OP/wUgD/7lMA/80zB//AKQn/zDwH/+53Ff/9hgb//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hgL//ctg//7gfP/+4X3//eN+//7if///437//eN+//7kfv/+5H///+R////kf///5H///uSA//7lf///5YD//+2ko//ptRX/vQAA/MFcCOzooQ708OFh9PHm//Tx5v/y7+T/8/Dj//Tv4f/z7t//9O3e//Ls3f/y7Nr/8+zZ//Pr2P/z6tb/8+nT//Po0f/z6ND/8ufN//PnzP/z5sr/8+jO//K3if/wYhH/8FQA//FWAP/YQQX/3VME//h8Af/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oYC//++Uv/+4on//uSO//7mj//+5o///+aP//7nj///6JD//+iR//7okf//6JD//+mR///pkf//6ZL//+mS///vrp3/6roU/8IAAPzCXgjs5ZEM+/TnVfz58v/8+PL/+/fw//v37v/79u3/+vXr//v06f/59Oj/+fPl//rz4//68eP/+fDg//nw3v/579z/+e7a//ru2P/57db/+e3V//jnzf/0n2j/8FEA//BVAP/wVQD/7lsB//h5Af/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6GAv/+slX//uzG//3z0v//9dT//vTU//701f//9tf///fY//732f/+9tn///fZ///42v//+Nr///jb///42///+d+C/+3XD//MAAD8wl8I6dyGC/z26U///Pf///z3//779f/++/T//vny//758P/++O7//ffs//736//+9+n//fXm//315f/99OP//PPg//zx3v/98d3//PDc//zy3f/617f/8386//BSAP/wVQD/8FUA//BVAP/zZgL/+38B//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQH//qE5//7x4P/9+vT//vr1//769f/9+/b//vz4///9+v///vv///38//79/P///f3///79///+/v/+/v7///7+dvnt6wztzgAB/LFfCOjHhwv8+OpO//z3///89v/++/T//vv0//758v/++fD//vju//337f/+9+z//fbp//315//+9eb//fTj//zy4f/98t///PHe//zy4P/97tX/+byI//FpHP/wUwD/8FUA//BVAP/wVQD/8VcB//dvA//9gwH//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6PFf/969T//frz//779P/++vX//vz3//78+P/+/fn///36///9+v/+/fv//v38//7+/P///v3////+///9/Xb08eoM3uMAAf2eXwjxw40L/PfqTv/79//+/Pb//vv0//769P/++vP//vnx//347//++O7//vfs//z16f/+9uj//vXn//3z4//98+L//PPi//3x3f/92q3//blp//yWLf/2dhn/8V0M//BUAP/wVQD/8FUA//BVAP/xWwL/+XcD//6EAf/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+iAj//t22//768v/++/X//vv2//789////fj//v36//79+v///fr///78///+/P///v3///79/////v///f12//zpC///AAD/oGEI/c6UCv757U7/+/n///z4///79v//+vb///r1///58///+fH///nw///47v//9uz///bq///06P//9ej//vXl//3hvP/+vnT//p0w//6GA//+hAD//YUK//Z4HP/xXQ3/8FQA//BVAP/wVQD/8FUA//NgA//7fQP//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//ogG//7Ii//++O////v2///89////fj///35///9+////fv///37///9/P///v3///79///+/v////7///39dv/86Qv//wAA3J9OCP/Qngrc+NhOxvjV/8f41P/I+NT/yPfT/8j30v/I9tH/yfbP/8n1zv/K9M3/y/PM/8ryy//K88v/1ea1//DCd//9oTr//okJ//6DAP/+hQD//oUA//6FAP/8hgv/8nkb/+5eDP/wVAD/8FUA//BVAP/wVQD/9GcE//2CA//+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6HBP/8sFz/9+/g//fz6v/28+v/9/Xs//f17v/39e//9/Xu//f27//39vD/9/fx//f38f/39/L/9/by//r593/9/OsN//8AANKtRwf/z6UKwvXKTp32vP+e9rz/nvW7/5/1uv+g9Lr/ofO4/6LzuP+i8rf/o/K2/6Lyt/+q6qr/x8du/+OjMv/2jAz//oMA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//uFCv/0eh7/8V4N//BUAP/wVQD/8FUA//BXAf/2bwb//oUC//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hgH/+5su//Hn1v/x7+P/8e/k//Hv5P/x8OX/8e/m//Hv5v/x8Of/8fDo//Hx6P/x8ej/8fHp//Lx6f/39/OG/PzsDv//AAD2xlMG/7+nCsT1zU6g97//oPW9/6H1vv+i9bz/ovS8/6P0u/+k9Lr/pPS6/6bvtP/B0H//46g6//WQEv/+hAH//4QA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//YYK//Z8If/xXgz/8FQA//BVAP/wVQD/8VsC//h3CP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2OEv/y4sj/8u/k//Hv5P/x7+X/8vDn//Hv5v/y8Of/8vHo//Lx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AP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2KDf/1hyn/8GMR//BTAP/0agr/+4QK//6GAf/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9jhP/9c+e//Hx6v/y8er/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8er/8vLr//Ly6//39/WF/Pz9Dfr6+gD3dXYC/8vKBcD40kqe+cH/nvjA/533wP+e+MH/nvjB/574wf+f98D/n/fA/6D3wP+g98D/n/fA/6D3v/+g9r7/ofa+/6D2vv+h9r3/ova9/6H2vv+f98H/qO2u/8LOev/jrkb/+pAU//6DAP/+hAD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//IoO//WHJ//xYxH/8FUC//VxC//9hQb//oYA//6FAP/+hQD//oUA//6FAP/+hQD//YoM//i7dv/y8uv/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8er/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voA/3AwAv/K5QTA+tRKnfnB/574wf+e98D/nvjA/575wf+e+cH/nvjA/5/3wP+f97//n/e//6D3wP+g98D/oPfA/5/2v/+g97//oPe//6D3v/+g9r7/oPW+/6D3v/+e+MH/vOy3//DRl///r1j//o4S//6DAP/+hAD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9ig7/9YYn//BiEv/xWQP/93gM//2GBP/+hQD//oUA//6FAP/+hQD//oUA//6HBP/6qU3/8vLr//Ly6v/y8ur/8vHq//Ly6v/y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP+hAAH/x8UEwPrVSZ35wv+d+MH/nvjB/573wP+e+MD/nvnB/574wf+e98D/n/fA/5/3wP+f98D/n/e//6D3wP+f98D/oPfA/6D3wP+f9r//n/a//6D3v/+g97//nva9/7b5zv/s/fH//+/e///Uov/+r1f//osO//6DAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//oUA//yKDv/2hSf/8GER//FcBP/5fQr//oYC//6FAP/+hQD//oUA//6FAP/+hAD//Jsu//Lu4P/y8ur/8vHq//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WF/Pz9Dfr6+gD/9QAB/+PGA8D400md+cL/nfnC/535wv+d+MH/nvfA/573wP+e+cH/nvnB/574wf+e98D/n/fA/5/3v/+f98D/n/jA/5/3v/+f97//oPfA/5/2wP+g98D/oPfA/573v/+3+c7/7fzv///+/v////3//+/d///Vpv//rlb//ooK//6EAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/+hQD//YkO//aFJ//wYBD/8mIG//uACf/+hgH//oUA//6FAP/+hQD//oQA//yUIP/03sD/8vLr//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voA//8AAf//3QPA+tNJnfjB/535wf+d+cL/nfnC/534wf+d+MH/nvfA/574wP+e+MH/nvjB/574wf+e+MH/n/fA/5/3wP+f97//n/fA/5/3wP+f98D/n/jA/5/4v/+d+L7/tvnN/+z97////vz////7/////v///vz//+7c//3Up//6qEz//okH//6EAP/+hQD//oUA//6FAP/+hQD//oUA//6FAP/9iQz/9oUp//BhDv/zaAf//IMF//6FAf/+hQD//oUA//6EAP/9jxb/9syZ//Hy7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP8oAAH//94DwPvVSZ35wv+c+MH/nfjC/535wv+d+cL/nfnC/534wf+d98D/nvfA/573wP+e+MD/nvnB/575wf+e+MH/nvjB/573wP+e98D/n/fA/5/3wP+f98D/nfe//7b5zv/s/O////78///++////fv///37//7+/f/8+/j/9OXO//XPnv/6pkf//ogG//6FAP/+hQD//oUA//6FAP/+hQD//oUA//2IC//2hSn/8WIO//VwCP/9gwP//oUA//6FAP/+hQD//YsM//i7c//y8+3/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WF/Pz9Dfr6+gD+AAAB/8jeA8D71Umd+cL/nfnC/535wv+d+MH/nfnC/535wv+d+cL/nfnC/535wv+d98D/nvfA/573wP+e98D/nvfB/574wf+e+MH/nvnB/575wf+e+cH/nvnB/534wP+1+s//7P3x/////v////3////9/////f////3//Pz6//Pz7P/y7+b/8+TO//bNnP/6o0H//ogG//6FAf/+hQD//oUA//6FAP/+hQD//YcK//WGK//xYw3/93cJ//2EAf/+hQD//oUA//6GAv/6qEz/8vPu//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/9/f1hfz8/Q36+voAAAAAAP+24wPA+NVJnfjC/535wv+d+cL/nfnC/535wv+d+MH/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfjB/533wP+e98D/nvfA/573wP+e98D/nvfA/574wf+c+MD/tfrP/+z98f///f3///38///9/P///fz///38//z7+P/y8en/8fHp//Ly6//y8Ob/8+fS//bNm//7oTz//ogH//6GAv/+hQD//oUA//6FAP/9hwj/9YYs//JkDf/5fAf//oUB//6FAP/+hAD/+50z//Pr3f/y8uz/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//f39YX8/P0N+vr6AP///wD//P8Cv/rXSJ34wv+d+ML/nfnC/535wv+d+cL/nfjB/534wf+d+MH/nfjC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfjB/534wf+e+MH/nPjA/7X6z//s/fH///7+//7+/f/+/v3////+/////v/8/Pr/8/Lr//Ly6v/y8ur/8vLq//Ly6//y7+b/8+fU//bLlv/7njb//okJ//6GAv/+hQD//oUA//2GB//1hi3/8mkN//yCCP/+hQH//oQA//yWJf/13Lv/8vPt//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//39/WE/Pz9Dfr6+gD///8AAOIAALD6zzqd+cP/nfnD/534wv+d+ML/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/5z4wv+d+ML/nfjC/534wv+d+ML/nfjC/535wv+d+cL/nfnC/5v5wf+1+tD/7P7y//////////7///7+///+/v///v7//Pz6//Py6//x8er/8vLr//Ly6v/y8ur/8vLq//Ly6v/y8Ob/8+nW//fJkf/8nDL//YoL//6GAv/+hQD//YYG//WHLv/0bw7//YME//6EAP/9kBj/9suW//Lz7v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/+Pj1df///wr8/PwA////AKD6xQCk+scvofrG/p35w/+d+cP/nPjC/534wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nPjB/5z4wv+d+ML/nfjC/534wv+b+MH/tfrQ/+z98v///v////7+//7+/v/////////+//z8+v/z8+v/8vLq//Ly6v/y8ur/8vLq//Ly6v/y8ur/8vLq//Lx6v/y8Of/8+nX//fGi//8nDD//YsO//6FAf/9hQX/9YYs//Z2D//9hAH//ooL//i5cf/y9O//8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//j481v///8G///7AAAAAACs+s0ArvrNLan6yved+cP/nfnD/535w/+d+cP/nfjC/534wv+d+ML/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/m/nB/7X60P/s/vL//////////v////7////+/////v/8/Pr/8/Pr//Ly6v/y8ur/8vLq//Ly6v/y8er/8vHq//Lx6v/y8uv/8vLr//Ly6//y8er/8+jW//fChf/8mzH//YwP//2FBv/2iCz/+YMX//6GAv/6qU7/8vPt//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly7P/29vFA////Af///wAAAAAAu/vWAL782CSz+9HUnfnD/535w/+d+cP/nfnD/535w/+d+ML/nfjC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/535wv+d+cL/nfnC/5v5wf+1+tH/7P7z//////////7////+/////v////7//Pz6//Pz6//y8ur/8vLq//Ly6v/y8ur/8vHq//Lx6v/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8+fT//jAgP/7nDL//I0W//eIKP/7iBX/+6A6//Pp1//y8+z/8vLr//Ly6//y8uv/8vLr//Ly6//19e7y9vbwLPX18AAAAAAAAAAAAMf93QDR/uQPtfvShZ75w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uz/8+XQ//i/fP/6njz/+JAy//qcOf/12LP/8vPu//Ly6//y8uv/8vLr//Ly6//y8uv/9vbwvPj49B339/MAAAAAAAAAAADP//YAlfixALD70Tyn+snznPnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7P/y8uz/8+PL//fAgv/2r2v/9c6g//L07v/y8uv/8vLr//Ly6//y8uv/8/Ps//b28WX8/PsH+fn2AAAAAAAAAAAAAAAAAMP82wDK/eAXs/vRm5/5xP+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7f/y8uv/8+TN//PgyP/y8+3/8vLr//Ly6//y8uv/8vLr//X178P39/Mm9/fyAAAAAAAAAAAAAAAAAAAAAADq//8Ap/rGALX70jip+srbnfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Lz7f/y8+3/8vLr//Ly6//y8uv/8vLr//T07fL29vFa/f3+BPj49gAAAAAAAAAAAAAAAAAAAAAAAAAAAMz+3wDc/+gLufzUbKb6ye2c+cL/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7P729vCO+Pj2FPf39AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxfzdAM394hO3+9SEpvrJ85z5w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7f/29vCi+PjzHvf38gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD/NoAyP3dFrn81Hin+snhnfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+b+cL/tfrR/+z+8/////////////////////////////z8+//z8+z/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Pz7fP29vCT9/fyHPb28gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMz+4ADT/uUPuPzUTq/7z7+j+sf8nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/m/nC/7X60f/s/vP////////////////////////////8/Pv/8/Ps//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLs//T079P29vFn+PjzFvj48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3v/rAOz/9AS+/dghtvvTZbP70cSo+sn4nvnE/535w/+d+cP/nfnD/535w/+d+cP/nfnD/535w/+d+cP/nfnD/5v5wv+1+tH/7P7z/////////////////////////////Pz7//Pz7P/y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//y8uv/8vLr//Ly6//z8+379fXv1fb28Hv19fEo+vr5Cvn59wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1f3oANf96QnB+9kfrfrNLb/82FnJ/d2By/zemsz84K3N/OGxzfzhsc384bHN/OGxzfzhsc384bHM/OGy2PznrPT++KD///+c////nP///5z///+c////nf7+/qD6+vaw+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWx+fn1sfn59bH5+fWv+Pj1n/f39If39/Rk9fXvM/f38ST7+/UO+vr0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP3//wD9//8G8P/1Den+8BHl/e8V5v3xFub98Rbm/fEW5v3xFub98Rbm/fEW5f3xFuv98xX5/vsS////Ev///xL///8S////Ev///xL///8S/f37Ff39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Fv39+xb9/fsW/f37Ffz8/BL8/PsO////CP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAYAAAAAAAAABwAAAAAAAAAHAAAAAAAAAAcAAAAAAAAABwAAAAAAAAAPAAAAAAAAAA+AAAAAAAAAD4AAAAAAAAAfwAAAAAAAAB/AAAAAAAAAP+AAAAAAAAB/8AAAAAAAAP/4AAAAAAAB//wAAAAAAAP//wAAAAAAD///4AAAAAB////////////8="},{"name":"cn.mcd/mcp","display_name":"麦当劳中国","description":"麦当劳中国官方 MCP，支持门店查询、餐品与优惠券查询、价格计算及外卖下单。","vendor":"麦当劳中国","categories":["餐饮"],"official":true,"verified":true,"homepage":"https://open.mcd.cn/mcp","repository":"https://github.com/M-China/mcd-mcp-server","license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.mcd.cn/","headers":[{"name":"Authorization","description":"Bearer <麦当劳开放平台 MCP Token>","obtain_at":"https://open.mcd.cn/mcp","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/cn.mcd__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.mcd.cn/\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"cn-mcd-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.mcd.cn/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <麦当劳开放平台 MCP Token>","required":true,"secret":true,"obtain_at":"https://open.mcd.cn/mcp"}],"iconData":"data:image/x-icon;base64,AAABAAEAPDwAAAEAIABIOgAAFgAAACgAAAA8AAAAeAAAAAEAIAAAAAAAIDoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIcj/FyXE/6AlxP+gJcT/oCXE/6AlxP+gJcT/oCTD/40AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkw/+NJcT/oCXE/6AlxP+gJcT/oCXE/6AlxP+gIcj/FwAAAAAAAAAAIsT/HiTE//8kxP//JMT//yTE//8kxP//JMT//yTE/+sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/rJMT//yTE//8kxP//JMT//yTE//8kxP//IsT/HgAAAAAAAAAAI8X/FiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/0JMT//yTE//8kxP//JMT//yTE//8kxP//I8X/FgAAAAAAAAAAJMj/DiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7D/xEox/8gKMf/ICjH/yAox/8gKMf/ICjH/yAew/8RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP/+JMT//yTE//8kxP//JMT//yTE//8kxP//JMj/DgAAAAAAAAAAK9X/BiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8gv/8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/44kxP//JMT//yTE//8kxP//JMT//yTE//8kxP+OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC//wgkxP//JMT//yTE//8kxP//JMT//yTE//8kxP//K9X/BgAAAAAAAAAAAAAAACTE//4kxP//JMT//yTE//8kxP//JMT//yTE//8rxv8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXF/5kkxP//JMT//yTE//8kxP//JMT//yTE//8lxf+ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvG/xIkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/+AAAAAAAAAAAAAAAAAAAAACTE//YkxP//JMT//yTE//8kxP//JMT//yTE//8kyP8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/6QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP+kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTI/xwkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/2AAAAAAAAAAAAAAAAAAAAACTE/+4kxP//JMT//yTE//8kxP//JMT//yTE//8iw/8mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXE/64kxP//JMT//yTE//8kxP//JMT//yTE//8lxP+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLD/yYkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/uAAAAAAAAAAAAAAAAAAAAACPE/+YkxP//JMT//yTE//8kxP//JMT//yTE//8lxf8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/7kkxP//JMT//yTE//8kxP//JMT//yTE//8kxP+5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXF/zAkxP//JMT//yTE//8kxP//JMT//yTE//8jxP/mAAAAAAAAAAAAAAAAAAAAACTE/94kxP//JMT//yTE//8kxP//JMT//yTE//8jxv86AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/8QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPG/zokxP//JMT//yTE//8kxP//JMT//yTE//8kxP/eAAAAAAAAAAAAAAAAAAAAACXE/9EkxP//JMT//yTE//8kxP//JMT//yTE//8mw/9EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/84kxP//JMT//yTE//8kxP//JMT//yTE//8kxP/OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbD/0QkxP//JMT//yTE//8kxP//JMT//yTE//8lxP/RAAAAAAAAAAAAAAAAAAAAACTD/7gkxP//JMT//yTE//8kxP//JMT//yTE//8kw/9NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/9kkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTD/00kxP//JMT//yTE//8kxP//JMT//yTE//8kw/+4AAAAAAAAAAAAAAAAAAAAACTD/54kxP//JMT//yTE//8kxP//JMT//yTE//8jxP9XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/+QkxP//JMT//yTE//8kxP//JMT//yTE//8kxP/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPE/1ckxP//JMT//yTE//8kxP//JMT//yTE//8kw/+eAAAAAAAAAAAAAAAAAAAAACXD/4QkxP//JMT//yTE//8kxP//JMT//yTE//8lxf9hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTE/+8kxP//JMT//yTE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AAAAAAAAAAAAAAAAAAAkxP+PJMT//yTE//8kxP//JMT//yTE//8kxP/7AKr/AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMP/YiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMP/YgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKr/AyTE//skxP//JMT//yTE//8kxP//JMT//yTE/48AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkw/9iJMT//yTE//8kxP//JMT//yTE//8kxP//KMf/IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/hiTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/hgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKMf/ICTE//8kxP//JMT//yTE//8kxP//JMT//yTD/2IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAixf81JMT//yTE//8kxP//JMT//yTE//8kxP//I8X/QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/qSTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8X/QiTE//8kxP//JMT//yTE//8kxP//JMT//yLF/zUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAazP8KJMT//STE//8kxP//JMT//yTE//8kxP//JMT/YwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMX/zSTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMX/zQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/YyTE//8kxP//JMT//yTE//8kxP//JMT//RrM/woAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/3CTE//8kxP//JMT//yTE//8kxP//JMT/hQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/8STE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/hSTE//8kxP//JMT//yTE//8kxP//JMT/3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMX/ryTE//8kxP//JMT//yTE//8kxP//JcP/pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkwv8VJMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTC/xUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJcP/pyTE//8kxP//JMT//yTE//8kxP//JMX/rwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8T/giTE//8kxP//JMT//yTE//8kxP//JMT/yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxP84JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT//yTE/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMT/yCTE//8kxP//JMT//yTE//8kxP//I8T/ggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMb/RyTE//8kxP//JMT//yTE//8kxP//JMT/6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxf9cJMT//yTE//8kxP//JMT//yTE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//8kxP//JMT//yTE//8kxP//JMT//yTE//8kxP/2I8X/QgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI8X/QiTE//YkxP//JMT//yTE//8kxP//JMT//yTE//8kxP//JMT/pQCq/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AiXE/4skxP/sJMT//yTE//8kxP//JMT//yTE/9cjxP9BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPE/0EkxP/XJMT//yTE//8kxP//JMT//yTE/+wlxP+LAP//AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqv8DJMP/QCXE/4skw/+AJMX/TwD//wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8CJMX/TyTD/4AlxP+LJMP/QACq/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////8P/////////w//////////D/////////8P/////////wgH//////4BCAf//////gEIB//////+AQgH//wD//4BCAP//AP//AEMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//wD//wDDAP//AP//AMMA//8A//8AwwD//gB//wDDAP/+AH//AMMA//4Af/8AwwD//gB//wDDgP/+AH//AcOA//4Af/8Bw4B//gB//gHDgH/+AH/+AcOAf/4Af/4Bw4B//gB//gHDwH/+AH/+A8PAf/wAP/4Dw8B//AA//gPDwH/8AD/+A8PAP/wAP/wDw+A//AA//AfD4D/8AD/8B8PgP/wAP/wHw+A/+AAf/AfD8D/4AB/8D8PwH/gAH/gPw/Af+Bgf+A/D+B/wGA/4H8P4H/AYD/gfw/wP8DwP8D/D/A/gPAfwP8P8B+B+B+A/w/4H4H4H4H/D/gPA/wPAf8P/A4D/AcD/w/+AAf+AAf/D/4AD/8AB/8P/wAf/4AP/w//gD//wB//D//gf//gf/8P/////////w//////////D/////////8P/////////w//////////A="},{"name":"com.lkcoffee/order-mcp","display_name":"瑞幸咖啡","description":"瑞幸咖啡官方点单 MCP，支持门店查询、菜单浏览、下单、取餐码与订单管理。","vendor":"瑞幸咖啡","categories":["餐饮"],"official":true,"verified":true,"homepage":"https://open.lkcoffee.com/mcp","repository":null,"license":"Proprietary","transport":{"type":"streamable_http","url":"https://gwmcp.lkcoffee.com/order/user/mcp","headers":[{"name":"Authorization","description":"Bearer <瑞幸开放平台 MCP Token>","obtain_at":"https://open.lkcoffee.com/mcp","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/com.lkcoffee__order-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-lkcoffee-order-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://gwmcp.lkcoffee.com/order/user/mcp\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <瑞幸开放平台 MCP Token>","required":true,"secret":true,"obtain_at":"https://open.lkcoffee.com/mcp"}],"iconData":"data:image/x-icon;base64,AAABAAEAMDAAAAEAIACoJQAAFgAAACgAAAAwAAAAYAAAAAEAIAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Dv///xz///9q////kf///7f////Z////5f////P////z/v7+5////9n+/v63////kf///2r///8c////DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0KaaCtCmmha7h3hk4cvEeP38+43///+1////x////9v////r////8/7+/vn+/v75////8////+v////b////x////7X///+N////bP7+/kz+/v4M/v7+BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0KWZFNCmmiq7h3jL38fA4/38+/3//////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/////9////y////5v///8a/v7+DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1fmyPoVpEx5dGLv/gx8D/7+Lf/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/////z////of///04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvop7KL6LfFKbUTnHmk0145lKMv/v49//9/Hv///////////////////////////////////////////////////////////////////////////////////////+/v75////z////6X///82////HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvot7Ur6LfKWOOB7/lEIq/5tON////////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7//////f////3///9u////NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/j4CBn1dAv5A7If+OOB7/o11I/7mDc////////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/////97N7au8WajXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxpeNDMaXjRihWkS/l0cv3485H/+OOB7/qGdT/8OWiP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////w5eH90Kyh3aVgS7vGl40YxpeNDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxpeNGMaXjTCTQCf/kDwi/444Hv+OOB7/rXBe/86pnv///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/hy8X/vIh4/5VELP/Gl40wxpeNGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsnlpaLN6adGOOB7/jjge/444Hv+OOB7/sXZk/9W1rP///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/+/v7///////7+/v/+/v7/9/Du/+/h3f+ZTDX/lEIp/404Hf+ucV7XrnFeagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrqgWpmFNfqFaReeOOB7/jjge/444Hv+OOB7/snhn/9e5sP/////////////////////////////////////////////////////////////////////////////////9/Pz/+PPy//Pr6P/gyMH/0Kyh/8GRgv+UQin/kT0j/444Hv+eVD7roltGg8uhkhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWrqgsnVE6lZRBKP+OOB7/jjge/444Hv+OOB7/s3po/9q9tP///////v7+/////////////v7+/////////////v7+///////+/v7///////7+/v/+/v7///////7+/v/7+fj/8ujl/+fX0f/AkoP/qmlV/5JAJv+NOB3/jjge/404Hf+SPCP/m0w1l8uhkjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzemmvnVM81444Hv+OOB7/jjge/444Hv+OOB7/r3Nh/9GupP///////v7+/////////////v7+/////////////v7+///////v5OD/3MG5/8iekP+qalj/pF9K/55SO/+POyH/jzog/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/nlU/07mDdKcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsblvLm1A55Y44Hv+OOB7/jjge/444Hv+OOB7/rW5b/8ylmf//////////////////////////////////////+PPx//Hn5P/ClIb/tn9u/6trV/+cUTv/mUs0/5ZFLf+POiD/jjke/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/nVI847B1Y8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnZVHpmU028444Hv+OOB7/jjge/444Hv+OOB7/qmpW/8ecj////////v7+/////////////v7+////////////8efk/+TQyv+VQir/kT0k/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/m1A586tqWOcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACaTTX7k0Ip/Y44Hv+OOB7/jjge/444Hv+OOB7/oFhD/7R6af///////v7+/////////////v7+////////////1ret/65wXf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/lkYu/Z5UP/kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWRS39kj4l/Y44Hv+OOB7/jjge/444Hv+OOB7/m043/6hkUf//////////////////////////////////////0Kyh/6FZQ/+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/lEMq/ZtON/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTPyb/kDsi/444Hv+OOB7/jjge/444Hv+OOB7/lEMr/5xQOf///////v7+/////////////v7+////////////yaCT/5RCKf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/k0An/5hHL/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVQir/kT0k/444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv/v49//9vDu/////////////v7+////////////zaeb/5xQOf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/kkAn/ZhKMv0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZSjP7k0Eo/Y44Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv/cwrr/7eDc////////////////////////////2Lqx/7J2ZP+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/lUUt/Z1TPPkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeVD35lUUt+444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv/Kopb/5NDK/////////////v7+////////////487H/8idkP+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/mEoy+6NdR/cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnY1Hrmk029Y44Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv+fVT//zqme///+/v///////v7+/////////////v7+///////YvLP/xpuO/7N6aP+VRSz/kj8l/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/nFA686xrWecAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACucF7JnFA65Y44Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+WRi7/wZGD/+zc2P/////////////////////////////////s3dn/4svE/9i5sP/BkYL/sXVj/6FaRP+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/nVM94bJ3ZcUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4gnGpnlU/0444Hv+OOB7/jjge/444Hv+OOB7/jTgd/444Hv+OOB7/s3ln/9m7sv///////v7+/////////////v7+///////+/v7//fv7//v4+P/s29f/0Kyh/7R8av+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/n1dB0buIeKMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJmI00mEkxmY85H/+OOB7/jjge/444Hv+OOB7/mEoy/6JcRv/El4n/wpOF/8GRgv/o1dD/8+nn///+/v/////////////////////////////////48/H/7N7a/+HKw/+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+SPST/m043ldW2qioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADImI0aoVdCg5xQOuuOOB7/jjge/444Hv+vcV//v4+A/9Ctov/hy8T/4MnC/+DIwP/z6eb/+fPy///+/v///////v7+///////7+Pf/8+nm/+ra1f/cwrr/1LSq/8ylmf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+NOB3/jjge/404Hf+eVD7ro1xHgdW2qRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArW1abK1sWtmOOB7/jjge/444Hv/Qq6D/59XP///////////////////////+/f3//v39///////////////////////48fD/59PO/9a2rf/BkoT/vIp6/7iCcf+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/jjge/444Hv+ucV7XrnFeagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx5SKGMeUijKTPyb/kDsi/444Hv+lYEv/sHNh/7uHd/+6hnb/t4Bv/7R6af+8iXn/2byz//fw7v/////////////////gx8D/1rWs/8ykmP+zeWj/o11I/5RCKf+OOB7/jjge/444Hv+OOB7/jjge/444Hv+OOB7/kT8l/ZZH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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqVVUCqlU+BKpVOQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//+AH//8AAP//gAH//wAA//4AAH//AAD/8AAAH/8AAP/wAAAP/wAA/+AAAA//AAD/gAAAA/8AAP+AAAAB/wAA/4AAAAH/AAD/AAAAAP8AAP8AAAAAfwAA/gAAAAB/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD8AAAAAD8AAPwAAAAAPwAA/AAAAAA/AAD+AAAAAH8AAP4AAAAAfwAA/wAAAAD/AAD/gAAAAf8AAP+AAAAB/wAA/4AAAAH/AAD/4AAAB/8AAP/gAAAP/wAA/8gAAA//AAD/nAAAR/8AAP83AAC3/wAA/3fAA7H/AAD8d///vf8AAPz3//+//wAA/ff/////AAD79/////8AAPv3/////wAA+/f/////AAD79/////8AAPv3/////wAA+///////AAD7//////8AAP///////wAA////////AAA="},{"name":"io.github.upstash/context7","display_name":"Context7","description":"为模型提供最新、版本感知的官方代码文档、API 参考与示例。","vendor":"Upstash","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://context7.com","repository":"https://github.com/upstash/context7","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@upstash/context7-mcp@4.4.4"],"env":[{"name":"CONTEXT7_API_KEY","description":"可选 API Key，用于提高请求配额。","obtain_at":"https://context7.com/dashboard","required":false,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 环境变量的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/io.github.upstash__context7/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-upstash-context7\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@upstash/context7-mcp@4.4.4\"\n      ],\n      \"env\": {\n        \"CONTEXT7_API_KEY\": \"<YOUR_CONTEXT7_API_KEY>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"环境变量","name":"CONTEXT7_API_KEY","placeholder":"<YOUR_CONTEXT7_API_KEY>","description":"可选 API Key，用于提高请求配额。","required":false,"secret":true,"obtain_at":"https://context7.com/dashboard"}],"iconData":"data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABLCAYAAADXjBHUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaWlDQ1BEaXNwbGF5IFAzAAB4nHWQvUvDUBTFT6tS0DqIDh0cMolD1NIKdnFoKxRFMFQFq1OafgltfCQpUnETVyn4H1jBWXCwiFRwcXAQRAcR3Zw6KbhoeN6XVNoi3sfl/Ticc7lcwBtQGSv2AijplpFMxKS11Lrke4OHnlOqZrKooiwK/v276/PR9d5PiFlNu3YQ2U9cl84ul3aeAlN//V3Vn8maGv3f1EGNGRbgkYmVbYsJ3iUeMWgp4qrgvMvHgtMunzuelWSc+JZY0gpqhrhJLKc79HwHl4plrbWD2N6f1VeXxRzqUcxhEyYYilBRgQQF4X/8044/ji1yV2BQLo8CLMpESRETssTz0KFhEjJxCEHqkLhz634PrfvJbW3vFZhtcM4v2tpCAzidoZPV29p4BBgaAG7qTDVUR+qh9uZywPsJMJgChu8os2HmwiF3e38M6Hvh/GMM8B0CdpXzryPO7RqFn4Er/QcXKWq8MSlPPgAABA5JREFUeAHtmzFME2EUgB+GQXCgGCSBpeiICRjERROKoYtG4kANC6kDasLCAgNLO+BcBxgYxIHiZhkgRJcahcgmJB1k1HaBBBLtomHTezXVu/+u9N3de03Q9yUM/cPlb7/+79279/9tap4bfwdKXZqtv2FQ6nIOFBIqioiKIqKiiKgoIiqKiIoioqKIqCgiKoqIiiKioog0Q0hil3th+cEU+GX78z5M5pZ8XZObmIX+7ij4JbGagcJhEcIQWhTS034J/FIKcE2kpTXQXHhdWDT0iKgoIqFDr3BYguK3Y0dIlKzXK7tbp16H/+OX7N4WbFm57TSS12Ou9xJkLpPQoson3+GRlZTzj9N/xqLWGy2f/IDFndfASbaO/NRIwpXDxl5mKl9kWFhCD7/lmc2sY+zZvSTErvRCo+jv7oF0POEYe/o2B4WDInDAlqMWrNVjhsWLxBREzl8AaXCO3MSMY2x9/yPM53PABWsyx7oIQ64KhmAqPgbS4BxmyM1urgAnrKIwaS58cOal6Vt3ob+rB6TALwPnsIMhx5GX7LCXB4s7bxyrCslY+UqK9EjCNVYv6QeBXRTeBbO77x1jmNQlVhWuJiwH7KAk7tWEiBScG1YiNUkODAE3nqtpj381ISKiCgclV/glB4eBmyGP8qNeQRoUEVEYfqWvR46xyPlW1roKuxbmnU5KEiL2rIePNiZ9jHmqzyowTUoCuamKmCivhHqty38vqRa4oihzciEmqlR2v+kgTbdaePWYzuSK8oLzcSYaoIEXhoaKamvhExVpkX+GtNPUPDf+E5S6aIeTiIoioqKIqCgiKooIywaoF1jneFXPXE/3yYGYa2z7y75YdS4mCh+AsWduBytnLlGpuHvHZfLVkiXqDLVZ/kXERLV5PK5whgX2vFxzClbrYqJ62jtcY1x7bEipfOSeM9IBUoiJikY6XWOYbLnw6ndFL3aCFGKivFoqXh8uKBuf3H15zn6XiYgoLA282rScOQrbzWbrtzJvRKb9IiLKqzcusde27rHbM3r1BkggImr65h3Ha876yc6qJd/c7bnfOwgSsIvCarzfaPxzHpawg+FnbuHjapY4RcMuytw+l1pNVXAL38x9KY+N0bCwisLt7UatpirVg2x2cEV5PQuGgU1U5YiP8U3iiTvJ1VQF737m6b7M6MNAJ4hrwSZqbWLGdXZyPr8GjQLnsocg7kwvJ/yff68FiyhcSfaQQ0nx5/OVsGgUONfvOf/eBTEEuY4chd6Fwbtc/kna93UYLvjB/IAHaoPc0QYX5kL/cuG/aLPoLxcaiIoiEroVXCwfB6qVpH65wDWXiW6pE9HQI6KiiKgoIiqKiIoioqKIqCgiKoqIiiKiooioKCIqiojVPWi6DUpdfgE8wFukKedIwQAAAABJRU5ErkJggg=="},{"name":"io.github.modelcontextprotocol/fetch","display_name":"Fetch","description":"抓取网页并转换为 Markdown，让模型读取和整理互联网内容。","vendor":"Model Context Protocol","categories":["搜索"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers","license":"MIT","transport":{"type":"stdio","command":"uvx","args":["mcp-server-fetch@2026.10.28"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__fetch/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-fetch\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-fetch@2026.10.28\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="},{"name":"io.github.modelcontextprotocol/filesystem","display_name":"Filesystem","description":"为模型提供受控的本地文件读写、目录遍历与搜索能力。","vendor":"Model Context Protocol","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers","license":"MIT","transport":{"type":"stdio","command":"npx","args":["-y","@modelcontextprotocol/server-filesystem@2.1.0","/path/to/allowed/directory"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__filesystem/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-filesystem\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-filesystem@2.1.0\",\n        \"/path/to/allowed/directory\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="},{"name":"io.github.github/github-mcp-server","display_name":"GitHub","description":"连接 GitHub，管理仓库、Issue、Pull Request、代码搜索与 Actions 工作流。","vendor":"GitHub","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://github.com/github/github-mcp-server","repository":"https://github.com/github/github-mcp-server","license":"MIT","transport":{"type":"streamable_http","url":"https://api.githubcopilot.com/mcp/","headers":[{"name":"Authorization","description":"Bearer <GitHub PAT 或 App Token>","obtain_at":"https://github.com/settings/tokens","required":true,"secret":true}]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"将 Header 与 URL 参数的占位符替换为真实值；申请入口见下方凭据表。","detail_path":"servers/io.github.github__github-mcp-server/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://api.githubcopilot.com/mcp/\",\n        \"--header\",\n        \"Authorization: Bearer <YOUR_AUTHORIZATION>\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      }\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"io-github-github-github-mcp-server\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"headers\": {\n        \"Authorization\": \"Bearer <YOUR_AUTHORIZATION>\"\n      },\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[{"kind":"Header","name":"Authorization","placeholder":"Bearer <YOUR_AUTHORIZATION>","description":"Bearer <GitHub PAT 或 App Token>","required":true,"secret":true,"obtain_at":"https://github.com/settings/tokens"}],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI3OSAyNyUgMzQlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPkc8L3RleHQ+Cjwvc3ZnPgo="},{"name":"com.notion/mcp","display_name":"Notion","description":"Notion 官方托管 MCP，支持工作区搜索、页面读取与编辑、数据库查询。","vendor":"Notion","categories":["办公"],"official":true,"verified":true,"homepage":"https://developers.notion.com/guides/mcp/get-started-with-mcp","repository":"https://github.com/makenotion/notion-next","license":"Proprietary","transport":{"type":"streamable_http","url":"https://mcp.notion.com/mcp","headers":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"该服务使用 OAuth 或客户端登录；首次连接会按客户端提示进入授权流程。","detail_path":"servers/com.notion__mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；当前传输：Streamable HTTP。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"type\": \"streamable-http\",\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"mcp-remote 桥接","filename":"claude_desktop_config.json","hint":"Claude Desktop 的 JSON 配置只支持 stdio；这里用 mcp-remote 桥接远程 URL，也可在 Settings → Connectors 直接添加 URL。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"mcp-remote\",\n        \"https://mcp.notion.com/mcp\"\n      ]\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。OAuth 服务可在客户端弹窗中完成授权。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴；type 已按 streamableHttp / sse 设置。","code":"{\n  \"mcpServers\": {\n    \"com-notion-mcp\": {\n      \"type\": \"streamableHttp\",\n      \"url\": \"https://mcp.notion.com/mcp\",\n      \"headers\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACFlBMVEVHcEz19fV9fX2CgoL////z8/P////////////19fWBgYH7+/sAAAD///94eHj8/Px+fn74+Pinp6fv7+/4+Pj8/PyTk5P////39/f+/v5HR0f7+/v7+/tWVlZwcHD////////9/f1iYmJeXl6Ojo7x8fFJSUn39/f////z8/Pz8/Pz8/P////////l5eV9fX3////////8/Pz6+vr7+/vBwcH6+vr7+/vj4+OCgoL////6+vr4+PjPz89bW1v////6+vo4ODj6+vqmpqb5+fn///+NjY3////4+Pj5+fn19fXv7+/////9/f2Hh4fj4+MeHh76+vqZmZn////9/f3////9/f3r6+vv7+////8AAACEhIQFBQUODg7x8fEBAQH29vb5+fn+/v4DAwP8/PwFBQX6+voCAgL9/f3v7+/19fWAgICDg4P4+PgHBwc7OzsJCQk3NzeBgYEXFxcQEBCKioqVlZVQUFAkJCRzc3Pb29swMDCFhYU/Pz+RkZGJiYnm5uZjY2MSEhJFRUXOzs4sLCwdHR3Q0NDCwsLz8/O3t7fi4uJra2udnZ2Hh4cLCwulpaWZmZk0NDS8vLxbW1ufn5+rq6tpaWlubm7t7e1BQUGtra1hYWFMTEyysrJtbW3y8vLKysro6OjZ2dlNTU3c3NyNjY2vr6+0tLQZGRkqKirr6+vS0tK5ubnGxsZ7e3tXV1d+fn6B6Hx5AAAAWXRSTlMAgPv6AQP9Av5++kz+8f61+mj+BCTT/fx4z/5zi/77DcSD/f77CP1J7Vg3Ffn0/P0dQf043fx7+Pz7ybxU+/vXnP3z/WPi+hCVpIf7rrb6+/13/Nm+5tQNQIcsNjsAAAJ9SURBVHjadZPlWxtBEMYXGgMCBCle3KXuRt3dZxLgYndJCHFCggYIkuBSrGhTp0L/w+4dDYQH8n7YDzu/553ZnRlCRISkldWkV1dUpWTlXUsurK/MhMSLWQVETCO8Cp6/evm6rlYGYWkY36IMDp8iYqkAPAIJaAIjG8HUjPj8qznTHheHeP0KnDubJphUwMOSZxa5XI68VM4f1rZl76xNn5EJl9KJmJA4KMWG3rW/3anBjfZNhhWSQHsX9p+HG7dohTGgwIYP9G6PNOC2OG9KII93UKAeF5htRNfCbI78/P1rbuy9FbHYBAnUIRb1HNodSfNbK9aBwYkmDEuLdyBGAFRN3P87i9MzvdRWspbUMzW5uoSKMEDp8Zlhf8jXGGDDZbCgxEM7DtjQuFunBgwt60YGzBgfARgBfKtzU+OfQQetA/bvs7p9DrCCnBbbwGD41oXLrHofoDaNok2PY8BAJ3bScx8AzajSorMdwIHmKIDdhTQJDSkPBJTYOop8Ekd0wNiH6GR6ogIOcFML75eogBJ0XYguOyWjAeCfQE6FzQcCZuF1ZtTqI4A4uLAD8P/DgqkDbRHAZRiyIMcDOpjHjm6TBobpd+0CZdlwjI4G34tej9XuNVBwrn8hBOFukgSQfEK+m6zRxNKwQWPYMw9SUgRHPeiKmAfQqQPrH0P+fsFBJBUlwxkLuv0zXyfdrX+8y0dy6Gi6bFqa+AnEEWpx/DR0I4d7JddP9JU/pVNNV5ecOClLstj6Bjus5VvF+bGlL1KDw0Mji2oJPBa2U0xyQbLoC6gjt0dSW1f5puju9oJLSUp2IsgSb2cXJt+/9yA3pSrhXXV6zds0IiL/AL4HQ7B5sr5fAAAAAElFTkSuQmCC"},{"name":"io.github.microsoft/playwright-mcp","display_name":"Playwright MCP","description":"基于 Playwright 的浏览器自动化 MCP，支持页面操作、表单填写、截图与测试。","vendor":"Microsoft","categories":["开发工具"],"official":true,"verified":true,"homepage":"https://github.com/microsoft/playwright-mcp","repository":"https://github.com/microsoft/playwright-mcp","license":"Apache-2.0","transport":{"type":"stdio","command":"npx","args":["-y","@playwright/mcp@0.0.83"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.microsoft__playwright-mcp/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-microsoft-playwright-mcp\": {\n      \"type\": \"stdio\",\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@playwright/mcp@0.0.83\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iaHNsKDI2OCAyOSUgMzMlKSIvPgogIDx0ZXh0IHg9IjMyIiB5PSIzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1BpbmdGYW5nIFNDJywgJ01pY3Jvc29mdCBZYUhlaScsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNmNWY1ZjciPlA8L3RleHQ+Cjwvc3ZnPgo="},{"name":"io.github.modelcontextprotocol/sqlite","display_name":"SQLite","description":"查询和管理本地 SQLite 数据库，支持建表、读写、汇总与数据分析。","vendor":"Model Context Protocol","categories":["数据库"],"official":true,"verified":true,"homepage":"https://modelcontextprotocol.io","repository":"https://github.com/modelcontextprotocol/servers-archived","license":"MIT","transport":{"type":"stdio","command":"uvx","args":["mcp-server-sqlite@2025.4.25","--db-path","/path/to/database.db"],"env":[]},"tools":[],"last_checked":"2026-10-30","possibly_broken":false,"auth_note":"无需额外凭据。","detail_path":"servers/io.github.modelcontextprotocol__sqlite/","install":[{"id":"dsh","label":"DSH","subtitle":"mcp.json","filename":"mcp.json","hint":"DSH → MCP连接器 → 导入 JSON；也可写入项目 .mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"claude","label":"Claude Desktop","subtitle":"claude_desktop_config.json","filename":"claude_desktop_config.json","hint":"写入 claude_desktop_config.json 后完全重启。macOS：~/Library/Application Support/Claude/；Windows：%APPDATA%\\Claude\\。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cursor","label":"Cursor","subtitle":"mcp.json","filename":"mcp.json","hint":"写入项目 .cursor/mcp.json 或全局 ~/.cursor/mcp.json。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"},{"id":"cline","label":"Cline","subtitle":"MCP Servers","filename":"cline_mcp_settings.json","hint":"在 Cline 的 MCP Servers 配置中粘贴。将示例路径和 <YOUR_...> 占位符替换为本机真实值，不要把真实凭据提交回仓库。","code":"{\n  \"mcpServers\": {\n    \"io-github-modelcontextprotocol-sqlite\": {\n      \"type\": \"stdio\",\n      \"command\": \"uvx\",\n      \"args\": [\n        \"mcp-server-sqlite@2025.4.25\",\n        \"--db-path\",\n        \"/path/to/database.db\"\n      ],\n      \"env\": {},\n      \"disabled\": false,\n      \"autoApprove\": []\n    }\n  }\n}\n"}],"credentials":[],"iconData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAAAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8CAgKdnZ0PDw/39/eJiYkBAQEYGBjX19fIyMhGRkbc3NwdHR3u7u4zMzPx8fGcnJyoqKjCwsIDAwMMDAylpaWhoaF2dnbExMQxMTGFhYUICAj19fWTk5M4ODj09PT4+PhLS0tvb28EBAQNDQ0VFRV5eXnb29v9/f1WVlbW1tawsLD6+vrt7e0HBwdiYmIyMjI/Pz9FRUWmpqYSEhI2NjYqKiqIiIiDg4OOjo43Nzf29vZ3d3chISGZmZnq6uqvr68oKCikpKSSkpJra2tjY2P+/v6BgYF+fn5JSUlERERnZ2cnJyeWlpaEhITr6+uQkJDZ2dnz8/PHx8deXl7GxsZkZGQ5OTmamprKysqGhobl5eXBwcGVlZX5+fk9PT1ISEj7+/sXFxcUFBQWFhbDw8MRERFdXV0KCgrv7+++vr7klK9jAAAAD3RSTlP+lgDm5xQWmNwTlN3oFdujjFkvAAABaUlEQVR42nWTZ1vCMBCAU8p23IFQFAcKKiAoCrLBvffee++9f72Uh5YkhfvS3r1vkl7SEJ3RpIcqoRcMOmKs4aqxEJWYDcTE4vTtUyrj96m5QGoZfocYziNmVUMkhOZOdHz74PkeN5SKhrvh5wteMKDWCM9bmn9DQ69nUgWhxPFPiuPxzuYqLyg8MAhZLMSWPcQIFO9AfEgcenCNFlhuL1QO8jhXFnqwf0Dm3k7oQuyGBmcQjnBBFTS8CR/hApcUoQJvfIMTjJaEhLz+e1LmxfVl7oJrR2qqJIzPu6GAPhne58FppYvYBMBQLvxRnt8Fba1ot9FtBvES/Mz4dhuzk4uYgavcjYargrSMe4UHNz+91VEMb+/un/K8LEiz8gnhOcfp456cWVlP+zjO/DDF4LhGCJa/v7Lg5bhGSOIYWyCc4cfIKMu5iyn1YmSEykUigMYYplIrqTPzjcap93oL0RkEsdr1F60W3T94v1tC8N60LgAAAABJRU5ErkJggg=="}]};
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
        if (/^authorization$/i.test(header.name) && !/^Bearer\s/i.test(value)) {
          value = `Bearer ${value}`;
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
                            h(EntryIcon, { entry: { name: displayName, display_name: displayName } }),
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
