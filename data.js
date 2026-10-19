// 美食雷达 · 每日精选数据
// 每天一条记录：{ date, items: [...] }
// 每条 item：title 标题 / summary 简介 / reason 推荐理由 / source 信源 / heat 热度(0-100) / cat 分类 / url 链接
window.FOOD_RADAR = [
{
  date: "2026-10-19",
  weekday: "周一",
  items: [
    {
      title: "加拿大首家自助河粉店 Renso Pho-Potle 10月24日开业",
      summary: "位于 506 Queen St W，顾客自选汤底（12小时慢熬或干拌）、蛋白质、香草和配料，每碗都不一样。9月26日已试营业，10月24日正式开业。",
      reason: "多伦多第一家「自己组装河粉」的店，形式新鲜，Queen West 位置方便。但试营业延期过一次，正式开业当天大概率排队，建议错峰。",
      source: "blogTO",
      heat: 92, cat: "新店开业",
      url: "https://58.ca/thread-63943-1-1.html"
    },
    {
      title: "蒙特利尔名店 Casa Donato 进军多伦多，Harbord Village 已开",
      summary: "蒙特利尔 Ristorante Donato 团队在 660 Spadina Ave 开全日意式咖啡馆：三明治、糕点、沙拉、自制冰淇淋和完整咖啡吧；10月15日首阶段（柜台咖啡）已开，大餐厅和酒吧随后开。",
      reason: "蒙特利尔老字号第一次出魁北克，Harbord Village 靠近多大，学生和上班族都方便。注意现在只有咖啡柜台，想吃正餐得等第二阶段。",
      source: "Toronto Life",
      heat: 88, cat: "新店开业",
      url: "https://whatnow.com/toronto/restaurants/montreal-based-casa-donato-to-open-in-toronto/"
    },
    {
      title: "Rosedale 新贵 Shay Ristorante：前 Buca 主厨的意大利餐厅",
      summary: "1055 Yonge St，10月1日开业。主厨 Justin Friedlich 在 Buca Yorkville 做了近十年，主打 Tajarin al Pomodoro、Supplì al Tonno、桌边 crudo 车和 Tiramisù Nero。",
      reason: "Rosedale 新晋「街区热点」，家族故事包装得很动人，橄榄油还是西西里独家。但价格带偏高，适合纪念日，不适合日常。",
      source: "Retail Insider",
      heat: 85, cat: "新店开业",
      url: "https://retail-insider.com/retail-insider/2026/10/lunaro-hospitality-opens-first-restaurant-with-chef-justin-friedlich-in-toronto/"
    },
    {
      title: "Eggslut 多伦多第二家店 11月5日开，10 Dundas St E",
      summary: "洛杉矶早餐连锁，第一家店在 545 King St W。第二家店定于11月5日在 Dundas St E 10号开业，以鸡蛋为主的菜单。",
      reason: "第一家店开业时争议不小（价格偏高），但人气确实旺。Dundas 店离 Eaton Centre 近，逛街顺路可以试。预算敏感的话，本地早餐店性价比更高。",
      source: "blogTO",
      heat: 80, cat: "新店开业",
      url: "https://58.ca/thread-63942-1-1.html"
    },
    {
      title: "列治文山「三明治疗法」：波斯大脑舌头三明治成招牌",
      summary: "10087 Yonge St 的波斯三明治店，把伊朗街头小吃 Maghz va Zaban（大脑+舌头三明治）做成招牌，配招牌酱、生菜番茄泡菜，$25；还有辣炖香肠、Olivieh 沙拉。",
      reason: "猎奇指数拉满，但其实是伊朗国民街头小吃，不是噱头。敢尝试的话这是多伦多少见的正宗波斯味；不敢的话店里也有常规冷盘可选。",
      source: "blogTO",
      heat: 78, cat: "本地美食",
      url: "https://58.ca/thread-63897-1-1.html"
    },
    {
      title: "Mamakas 今秋在 Summerhill 开第二家店",
      summary: "Ossington 的希腊 taverna 十多年后终于开分店，选址 Tricon The James（Price St），保留招牌菜，新增私人包间。原店照常营业。",
      reason: "Mamakas 一直是多伦多希腊菜天花板，分店对北边居民是好消息。不过新店刚开磨合期，追求稳定体验还是去 Ossington 老店。",
      source: "TasteT",
      heat: 72, cat: "本地美食",
      url: "https://tastet.ca/en/reviews/mamakas-the-ossington-taverna-that-brought-the-aegean-to-toronto/"
    },
    {
      title: "列治文山 Northern Cafe：$7.99 台式饭团走红",
      summary: "1 Spadina Rd Unit 5，主打北方/台式早餐：饭团、煎饼果子、豆腐脑、豆浆。猪肉松加蛋饭团 $7.99，有7种口味，被评价「比 T&T 的煎饼好吃」。",
      reason: "价格实在，早餐$10以内搞定，华人早餐选择又多一家。位置在列治文山，开车顺路可以试；店面不大，别指望堂食环境。",
      source: "网友评价",
      heat: 70, cat: "中餐",
      url: "https://safegateok.com/northerncafeca"
    },
    {
      title: "Sunset Grill 秋季在 Keele & Lawrence 开新店",
      summary: "1985年创立的多伦多早餐连锁，all-day breakfast，以现点现做为卖点。新店在 Keele St 和 Lawrence Ave 附近，具体地址和日期未公布。",
      reason: "经典连锁，早餐品质稳定，适合周末 family breakfast。但「秋季开业」目前只有意向，开业前别白跑一趟。",
      source: "WhatNow Toronto",
      heat: 68, cat: "新店开业",
      url: "https://whatnow.com/toronto/restaurants/sunset-grill-plans-new-toronto-location-for-fall-2026-opening/"
    },
    {
      title: "列治文山 Steamy's：蒸汤+蒸饭的健康中式快餐",
      summary: "1550 16th Ave，主打炖汤、蒸饭、点心甜品，胡椒猪肚汤和黑椒南瓜排骨蒸饭被点名好评，开业有套餐优惠。",
      reason: "「蒸」出来的健康中餐，汤料足，适合不想吃太油的时候。新店开业期服务可能跟不上，避开饭点高峰。",
      source: "网友评价",
      heat: 66, cat: "中餐",
      url: "https://steamys.ca/"
    },
    {
      title: "爆款食谱：4种食材的烤山羊奶酪番茄意面",
      summary: "烤盘里放樱桃番茄+一整块山羊奶酪+橄榄油，200°C烤25分钟，拌入煮好的螺旋面。酸香浓郁，被称为「秋天最治愈的懒人晚餐」。",
      reason: "食材简单到离谱，味道却像下过功夫，Costco 都能买齐。山羊奶酪风味比较特别，不喜欢酸味的可以换成菲达奶酪。",
      source: "Cooktop Cove",
      heat: 62, cat: "食谱",
      url: "https://cooktopcove.com/2026/10/16/my-sister-showed-me-this-viral-4-ingredient-dinner-hack-and-it-has-become-my-absolute-favorite-meal"
    },
    {
      title: "TikTok 爆火：蔓越莓酱意面，130万播放",
      summary: "博主 Sabrina Burke 在肉酱意面里加了一罐蔓越莓酱，酸甜解腻，评论区都在问「到底是什么味道」，视频播放超130万。",
      reason: "感恩节剩蔓越莓酱的终极去处，酸甜口确实开胃。但这是「猎奇好吃」不是「经典好吃」，第一次做别宴客。",
      source: "TikTok",
      heat: 58, cat: "趋势",
      url: "http://ryansdistrict.com/boards/index.php?topic=655223.0"
    },
    {
      title: "香肠芝士酥皮卷：派对小食的新顶流",
      summary: "冷冻酥皮铺香肠碎+芝士卷起来切片，200°C烤20分钟，金黄酥脆。准备15分钟，被称为「聚会零失败小食」。",
      reason: "感恩节/圣诞聚会季快到了，这道菜提前收藏。酥皮一定要保持冰凉再烤，否则不出层。Costco 酥皮+普通香肠就能做。",
      source: "Family Fresh Recipes",
      heat: 55, cat: "食谱",
      url: "https://cookingwithalice.familyfreshrecipes.com/2026/10/13/viral-sausage-and-cheese-puff-pastry-pinwheels/"
    },
    {
      title: "葱油方便面在 TikTok 爆红：方便面的「第二春」",
      summary: "大量葱花+鸡蛋+肉末，把速食面升级成「一人食大餐」，相关视频获数万点赞，被视为方便面从应急食品向创意食材的转变。",
      reason: "深夜食堂感拉满，成本不到$3。葱花要最后放，香气才完整。注意钠含量别太放飞自我。",
      source: "TikTok",
      heat: 52, cat: "趋势",
      url: "https://pattaya.localplus.city/2026/10/13/green-onion-instant-noodles-trend-goes-viral-online/"
    }
  ]
}
];
