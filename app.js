// 2027 岡山進・關西出 9天8夜親子之旅 (6/26 ~ 7/4) 核心資料與互動邏輯
// 岡山住 4 晚 (6/26~6/30) ＋ 大阪新今宮住 4 晚 (6/30~7/4)

const STORAGE_KEY = "okayama_kansai_2027_v8";

const defaultTripData = {
  selectedDay: 1,
  activeTab: "itinerary", // itinerary | pass | flightHotel | checklist
  day8Option: "A", // A: 阿倍野 Q's Mall | B: 京都河原町/京都站晚餐
  hotelNames: {
    okayama: "岡山車站周邊飯店（6/26~6/30 共 4 晚，待填寫飯店名稱與訂房代號）",
    osaka: "大阪新今宮周邊飯店（6/30~7/4 共 4 晚，待填寫飯店名稱與訂房代號）"
  },
  days: [
    {
      day: 1,
      date: "6/26 (六)",
      fullDate: "2027-06-26",
      city: "岡山",
      title: "航班抵達、出關接駁與市區採買",
      passBadge: "🚌 機場利木津巴士（現場購票/刷卡）",
      passType: "bus",
      transportSummary: "IT 214 (11:30 桃園 T1 起飛 ➔ 15:05 抵達岡山)。預計 15:50~16:10 出關搭利木津巴士（約 30 分鐘）直達 JR 岡山站。",
      hotelArea: "岡山車站周邊 (第 1/4 晚)",
      notes: "抵達 JR 岡山站約 16:40，建議一人帶孩子先去飯店 Check-in，一人去岡山站綠色窗口兌換隔天要啟用的「JR 關西&廣島地區周遊券 (5日券)」及領取明日（週日限定！）麵包超人小火車指定席券！",
      items: [
        {
          id: "d1-0",
          time: "09:00 – 11:30",
          category: "🛫 桃園出發",
          title: "桃園機場第一航廈 (T1) 報到 ➔ 11:30 搭乘 IT 214 起飛",
          desc: "建議 09:00 抵達桃園機場第一航廈台灣虎航櫃檯辦理託運（起飛前 2.5 小時）。11:30 準時起飛前往日本岡山（飛行時間約 2 小時 35 分）。",
          highlight: "✈️ 航班：台灣虎航 IT 214｜11:30 TPE (T1) ➔ 15:05 OKJ",
          mapQuery: "Taoyuan International Airport Terminal 1",
          done: false
        },
        {
          id: "d1-1",
          time: "15:05 – 16:00",
          category: "🛬 抵達與出關",
          title: "15:05 抵達岡山桃太郎機場 & 入境通關（預計約 45~55 分鐘）",
          desc: "岡山機場規模小巧、國際線同時間僅一班飛機，但因全機旅客同時排隊審查，2大3小加上領行李預計約 15:50 ～ 16:05 完成出關。",
          highlight: "💡 出發前填妥 Visit Japan Web (VJW) 並截圖 QR Code，下機走快步可大幅縮短排隊時間！",
          mapQuery: "Okayama Momotaro Airport",
          done: false
        },
        {
          id: "d1-2",
          time: "16:10 – 16:40",
          category: "🚌 機場交通",
          title: "搭乘利木津巴士直達 JR 岡山車站（車程約 30 分鐘）",
          desc: "出關大廳左轉出門就是「2號乘車處（往岡山站西口）」。巴士會配合 IT 214 航班加開臨時加班車（客滿即發車，約 15:55、16:10 陸續發車），約 16:40 抵達岡山站西口，前往飯店 Check-in。",
          highlight: "🎫 成人 ¥780 / 兒童 ¥390，可現場售票機買票或直接刷 ICOCA / 感應信用卡",
          mapQuery: "JR Okayama Station",
          done: false
        },
        {
          id: "d1-3",
          time: "17:30 – 20:30",
          category: "🛍️ 用餐與採買",
          title: "岡山車站共構商場 / AEON MALL 岡山晚餐與採買",
          desc: "放好行李、換好 JR 周遊券與明日麵包超人車票後，經由地下連通道步行 5 分鐘直達 AEON MALL 岡山享用晚餐，順便在 1F 超市採買兒童零食、牛奶、岡山白桃與日用品。",
          highlight: "🍑 AEON 1樓超市與 6-7樓餐廳街選擇非常豐富，推車友善！",
          mapQuery: "AEON MALL Okayama",
          done: false
        }
      ]
    },
    {
      day: 2,
      date: "6/27 (日)",
      fullDate: "2027-06-27",
      city: "四國香川",
      title: "四國特色體驗：週日限定麵包超人小火車、踩烏龍麵與水族館",
      passBadge: "🎫 JR 關西&廣島周遊券 Day 1 / 5（今日起啟用！）",
      passType: "jr",
      transportSummary: "岡山 ➔ 琴平 ➔ 宇多津 ➔ 岡山。今日為週日，完美搭上假日行駛的「麵包超人小火車」！持周遊券需另備妥小火車綠色車廂指定席券與四國段補票。",
      hotelArea: "岡山車站周邊 (第 2/4 晚)",
      notes: "瀨戶大橋麵包超人小火車僅週末假日行駛，排在 6/27 (週日) 剛剛好！11:17 發車絕對不能遲到，中野烏龍麵學校預約場次也請再次確認。",
      items: [
        {
          id: "d2-1",
          time: "10:00",
          category: "📸 鐵道攝影",
          title: "JR 岡山站月台鐵道攝影（啟用 JR 周遊券 Day 1）",
          desc: "提早進站到月台欣賞各式四國特急列車（南風號麵包超人列車、潮風號、Marine Liner 雙層列車）與彩繪列車進站。",
          highlight: "📷 鐵道迷小孩最愛時光！順便在車站買鐵路便當上車吃",
          mapQuery: "JR Okayama Station",
          done: false
        },
        {
          id: "d2-2",
          time: "11:17 – 12:43",
          category: "🚂 假日限定觀光列車",
          title: "搭乘「瀨戶大橋麵包超人小火車 1號」(岡山 ➔ 琴平)",
          desc: "週六日限定行駛！全車開放式木質吹風景觀車廂，行經壯觀的瀨戶大橋跨海前往四國琴平！車上有麵包超人紀念章、拍照區與地板透明觀景窗。",
          highlight: "⚠️ 全車綠色車廂指定席，務必備妥「周遊券＋兒島至琴平段乘車券＋綠色車廂指定席券」",
          mapQuery: "Kotohira Station",
          done: false
        },
        {
          id: "d2-3",
          time: "下午",
          category: "🍜 親子手作",
          title: "中野烏龍麵學校（琴平校）踩麵團體驗",
          desc: "跟著熱情的老師邊放動感音樂邊用腳踩烏龍麵團、桿麵、切麵，最後現場煮熟自己做的烏龍麵當午餐，結業還可領取秘傳卷軸畢業證書與擀麵棍！",
          highlight: "👨‍👩‍👧‍👦 報名配置：3 小體驗 ＋ 2 大陪同拍照協助",
          mapQuery: "Nakano Udon School Kotohira",
          done: false
        },
        {
          id: "d2-4",
          time: "下午～傍晚",
          category: "🐬 海景水族館",
          title: "四國水族館（宇多津）看海豚與瀨戶內海夕陽",
          desc: "自琴平搭車前往宇多津站，步行前往緊鄰瀨戶內海的「四國水族館」。必看以瀨戶內海與夕陽為背景的無邊際海豚跳躍秀！",
          highlight: "🌅 夕陽時段的海豚池背光剪影超美，館內動線平緩好走",
          mapQuery: "Shikoku Aquarium",
          done: false
        },
        {
          id: "d2-5",
          time: "晚上",
          category: "🚄 特急返程",
          title: "宇多津 ➔ 岡山（搭乘快速 Marine Liner 或特急返回岡山站）",
          desc: "再次跨越瀨戶大橋返回岡山車站，於車站周邊享用晚餐回飯店休息。",
          highlight: "",
          mapQuery: "Utazu Station",
          done: false
        }
      ]
    },
    {
      day: 3,
      date: "6/28 (一)",
      fullDate: "2027-06-28",
      city: "倉敷",
      title: "倉敷一日遊：美觀地區遊船與 Outlet 採買",
      passBadge: "🎫 JR 關西&廣島周遊券 Day 2 / 5",
      passType: "jr",
      transportSummary: "持 JR 周遊券搭乘 JR 山陽本線（或伯備線）往返「岡山站 ⇄ 倉敷站」，車程僅約 17 分鐘。",
      hotelArea: "岡山車站周邊 (第 3/4 晚)",
      notes: "倉敷川遊船名額有限，抵達美觀地區後建議第一件事先去「倉敷館觀光案內所」購買當日船票！",
      items: [
        {
          id: "d3-1",
          time: "09:00",
          category: "🚆 鐵道移動",
          title: "JR 岡山站 ➔ JR 倉敷站（車程 17 分鐘）",
          desc: "持 JR 周遊券走自動改札機進站，搭乘 JR 山陽本線前往倉敷站，從南口步行約 10-15 分鐘進入美觀地區。",
          highlight: "🎫 使用 JR 周遊券 (第 2 天) 免費搭乘",
          mapQuery: "Kurashiki Station",
          done: false
        },
        {
          id: "d3-2",
          time: "上午",
          category: "🛶 散策與遊船",
          title: "倉敷美觀地區散策、川舟遊船與午餐",
          desc: "漫步白壁宅邸與柳樹沿岸，搭乘傳統小舟遊覽倉敷川。午餐可品嚐倉敷名物「ぶっかけ亭本舗 ふるいち」烏龍麵、Kappa 炸豬排或町家定食、白桃聖代。",
          highlight: "🛶 先衝倉敷館買船票，再慢慢逛牛仔褲街、史努比巧克力店與桃太郎機關博物館！",
          mapQuery: "Kurashiki Bikan Historical Quarter",
          done: false
        },
        {
          id: "d3-3",
          time: "下午",
          category: "🛍️ 商場採買",
          title: "MITSUI OUTLET PARK 倉敷 & Ario 倉敷",
          desc: "從美觀地區走回倉敷站北口即可直通 Ario 商場與三井 Outlet！Ario 有美食街與童裝雜貨，中間還有「倉敷未來公園」綠意草皮廣場與小溪讓孩子放電。",
          highlight: "👶 Ario 2樓餐飲與親子設施齊全，逛累了隨時可休息",
          mapQuery: "MITSUI OUTLET PARK Kurashiki",
          done: false
        },
        {
          id: "d3-4",
          time: "傍晚",
          category: "🚆 返回岡山",
          title: "搭乘 JR 山陽本線返回岡山站",
          desc: "提著戰利品輕鬆搭 JR 回到岡山車站（免搬行李連住超輕鬆！）。",
          highlight: "",
          mapQuery: "Okayama Station",
          done: false
        }
      ]
    },
    {
      day: 4,
      date: "6/29 (二)",
      fullDate: "2027-06-29",
      city: "廣島・宮島",
      title: "廣島一日遊：宮島海上大鳥居、野生鹿群與紙鶴塔溜滑梯",
      passBadge: "🎫 JR 關西&廣島周遊券 Day 3 / 5（新幹線＋渡輪全包！）",
      passType: "jr",
      transportSummary: "自岡山搭 JR 山陽新幹線至「廣島站」（約 38 分鐘），轉 JR 山陽本線至「宮島口站」搭乘「JR 西日本宮島渡輪」登島；下午返回市區前往「廣島紙鶴塔」。",
      hotelArea: "岡山車站周邊 (第 4/4 晚)",
      notes: "持「JR 關西&廣島地區周遊券」不僅可無限搭岡山⇄廣島新幹線，連「JR 宮島渡輪」與廣島市內「JR 觀光循環巴士 Meipuru-pu」都免費包辦！（登宮島僅需每人另付 ¥100 宮島訪問稅）。",
      items: [
        {
          id: "d4-1",
          time: "08:15 – 09:30",
          category: "🚄 新幹線＆渡輪",
          title: "JR 岡山站 ➔ 廣島站（新幹線 38分）➔ 宮島口站 ➔ JR 宮島渡輪",
          desc: "持周遊券搭乘山陽新幹線（Sakura/Nozomi 皆可）38 分鐘飆抵廣島站，轉乘 JR 山陽本線（約 28 分鐘）至「宮島口站」，出站走地下道至碼頭搭乘「JR 西日本宮島渡輪」（航程 10 分鐘，船隻會特地繞近大鳥居讓大家拍照！）。",
          highlight: "⛴️ 務必選擇右邊的「JR 西日本宮島渡輪」，出示 JR 關西&廣島周遊券免船票（僅需投 ¥100 訪問稅）！",
          mapQuery: "JR West Miyajima Ferry Terminal",
          done: false
        },
        {
          id: "d4-2",
          time: "09:40 – 13:30",
          category: "⛩️ 世界遺產與小鹿",
          title: "宮島・嚴島神社：觀賞海上大鳥居、野生鹿群 & 表參道美食午餐",
          desc: "登島後沿著海濱步道與溫馴的野生小鹿互動拍照，參觀世界文化遺產「嚴島神社」與震撼的朱紅色海上大鳥居！中午在熱鬧的表參道商店街品嚐現烤牡蠣、星鰻飯（あなごめし）、炸紅葉饅頭（紅葉堂）與宮島冰淇淋。",
          highlight: "🦌 宮島不賣鹿仙貝，記得提醒小朋友把紙張、地圖與塑膠袋收好，避免小鹿誤食喔！",
          mapQuery: "Itsukushima Jinja",
          done: false
        },
        {
          id: "d4-3",
          time: "13:30 – 14:30",
          category: "🚋 返回廣島市區",
          title: "搭船返回宮島口 ➔ 前往廣島市區「紙鶴塔 / 原爆圓頂館前」",
          desc: "搭渡輪回宮島口站，可搭 JR 回廣島站轉乘免費的「廣島觀光循環巴士 Meipuru-pu（楓葉巴士）」直達原爆圓頂館前，或直接從廣島路面電車「廣電宮島口站」搭路面電車直達「原爆ドーム前站」（下車即達紙鶴塔！）。",
          highlight: "🚌 若回廣島站轉搭紅色的「Meipuru-pu 觀光巴士」，出示 JR 周遊券全家人免費搭乘！",
          mapQuery: "Hiroshima Orizuru Tower",
          done: false
        },
        {
          id: "d4-4",
          time: "14:40 – 17:30",
          category: "🛝 展望台＆螺旋溜滑梯",
          title: "廣島紙鶴塔 (Hiroshima Orizuru Tower)：體驗 12 層樓高螺旋溜滑梯！",
          desc: "登上木質微風吹拂的頂樓展望台「廣島之丘」俯瞰和平紀念公園與原爆圓頂館，體驗互動數位折紙鶴並投入巨大的「紙鶴牆」；接著讓孩子與大人一起挑戰從 12 樓一路滑到 1 樓的超刺激「SPIRAL SLIDE 螺旋溜滑梯」（分為每層可停靠與直達滑梯）！",
          highlight: "🛝 螺旋溜滑梯免費包含在紙鶴塔門票內（建議穿長褲與球鞋體驗最順暢）！",
          mapQuery: "Hiroshima Orizuru Tower",
          done: false
        },
        {
          id: "d4-5",
          time: "18:00 – 20:00",
          category: "🥞 廣島燒晚餐＆返程",
          title: "廣島車站 ekie 美食街吃「廣島燒」➔ 搭新幹線 38 分鐘回岡山",
          desc: "返回廣島車站，在車站共構商場 ekie 1F「廣島燒一條街（麗ちゃん、みっちゃん總本店等）」品嚐正宗鐵板廣島燒，吃飽買楓葉饅頭伴手禮，搭山陽新幹線 38 分鐘輕鬆回岡山飯店！",
          highlight: "🚄 新幹線班次極多，吃飽隨時有車回岡山，完全不趕時間！",
          mapQuery: "ekie Hiroshima",
          done: false
        }
      ]
    },
    {
      day: 5,
      date: "6/30 (三)",
      fullDate: "2027-06-30",
      city: "岡山 ➔ 大阪",
      title: "歷史巡禮（岡山城・後樂園）與新幹線跨城至大阪",
      passBadge: "🎫 JR 關西&廣島周遊券 Day 4 / 5（搭新幹線往大阪！）",
      passType: "jr",
      transportSummary: "上午搭市區公車或路面電車往返後樂園。中午回飯店領行李，自岡山搭 JR 山陽新幹線至「新大阪站」，轉乘 JR 至「新今宮站」。",
      hotelArea: "大阪新今宮周邊 (第 1/4 晚)",
      notes: "今日換飯店日！早上退房後行李先寄放岡山飯店，中午回飯店拿行李直接搭新幹線去大阪新今宮。",
      items: [
        {
          id: "d5-1",
          time: "09:00",
          category: "🏯 歷史巡禮",
          title: "岡山後樂園 & 岡山城（烏城）武士體驗",
          desc: "從岡山站搭乘市區公車直達日本三大名園「岡山後樂園」漫步大草坪，隨後走過月見橋前往全新翻修的「岡山城」，體驗免費試穿城主/公主服飾與武士刀拍照！",
          highlight: "⚔️ 岡山城內有電梯無障礙設施，2樓可換裝拍照、1樓可吃烏城白桃聖代",
          mapQuery: "Okayama Castle",
          done: false
        },
        {
          id: "d5-2",
          time: "中午",
          category: "🚄 新幹線跨城",
          title: "JR 岡山站 ➔ 新大阪站 ➔ 新今宮站（飯店入住）",
          desc: "回飯店領取大型行李，使用 JR 周遊券搭乘「山陽新幹線 (Nozomi/Mizuho/Sakura 皆可搭)」約 45 分鐘飆速抵達新大阪，再轉 JR 前往新今宮站飯店寄放行李或 Check-in。",
          highlight: "🧳 若攜帶特大行李（三邊總和 160~250cm），記得事先用周遊券劃位「特大行李放置處附帶席」",
          mapQuery: "Shin-Imamiya Station",
          done: false
        },
        {
          id: "d5-3",
          time: "傍晚～晚上",
          category: "🏙️ 商圈逛街",
          title: "大阪梅田商圈逛街（LUCUA osaka / 大丸梅田 13F）",
          desc: "從新今宮搭 JR 大阪環狀線直達「大阪站（梅田）」。逛 LUCUA 購物中心、大丸梅田店（13樓有寶可夢中心、任天堂大阪旗艦店、トミカ小汽車與樂高專賣店！）。",
          highlight: "🎮 大丸梅田 13F 是小孩天堂，一次逛齊任天堂與寶可夢！",
          mapQuery: "LUCUA osaka",
          done: false
        }
      ]
    },
    {
      day: 6,
      date: "7/1 (四)",
      fullDate: "2027-07-01",
      city: "大阪 USJ",
      title: "日本環球影城 (USJ) 狂歡一日遊（平日週四入園！）",
      passBadge: "🎫 JR 關西&廣島周遊券 Day 5 / 5（最後一日！）",
      passType: "jr",
      transportSummary: "自 JR 新今宮站搭乘「大阪環狀線」於「西九條站」轉乘「JR 夢咲線（櫻島線）」至「環球城站 (Universal-City)」。",
      hotelArea: "大阪新今宮周邊 (第 2/4 晚)",
      notes: "排在週四入園避開週末人潮！務必事先下載「USJ 官方 App」並綁定全家人門票，入園第一時間抽「超級任天堂世界」整理券（或使用快通）！",
      items: [
        {
          id: "d6-1",
          time: "07:30",
          category: "🚆 出發入園",
          title: "新今宮 ➔ 西九條 ➔ 環球城站（使用 JR 周遊券最後一日）",
          desc: "持 JR 周遊券直接進站，在西九條站同月台轉乘往櫻島方向的列車，約 20 分鐘即可抵達環球影城大門口！",
          highlight: "🎫 全程屬於 JR 路線，直接用 JR 周遊券免費搭乘",
          mapQuery: "Universal Studios Japan",
          done: false
        },
        {
          id: "d6-2",
          time: "上午",
          category: "🍄 主題園區 1",
          title: "主攻：超級任天堂世界 (Super Nintendo World)",
          desc: "戴上能量手環敲磚塊收集金幣、挑戰「瑪利歐賽車～庫巴的挑戰書～」、搭乘親子友善的「耀西冒險」俯瞰整個蘑菇王國，以及全新「咚奇剛國度」！",
          highlight: "🌟 奇諾比奧咖啡廳記得掃碼預約用餐時段",
          mapQuery: "Super Nintendo World Osaka",
          done: false
        },
        {
          id: "d6-3",
          time: "下午",
          category: "🪄 主題園區 2",
          title: "主攻：哈利波特魔法世界 & 小小兵樂園 / 環球奇境",
          desc: "走進活米村喝冰涼奶油啤酒（無酒精兒童可喝）、看霍格華茲城堡與魔杖互動魔法；下午可帶小朋友去「環球奇境 (Universal Wonderland)」或小小兵園區玩溫和設施。",
          highlight: "🍺 奶油啤酒冰沙版在 7 月初超消暑！",
          mapQuery: "The Wizarding World of Harry Potter Osaka",
          done: false
        },
        {
          id: "d6-4",
          time: "晚上",
          category: "🚆 賦歸休息",
          title: "環球城市步行街晚餐 ➔ 返回新今宮飯店",
          desc: "出園後在 Universal CityWalk 用餐或買消夜，趁午夜前持周遊券搭 JR 回到新今宮站好好泡澡休息。",
          highlight: "",
          mapQuery: "Universal CityWalk Osaka",
          done: false
        }
      ]
    },
    {
      day: 7,
      date: "7/2 (五)",
      fullDate: "2027-07-02",
      city: "神戶",
      title: "神戶生態互動（神戶動物王國）與神戶港浪漫夜景",
      passBadge: "💳 ICOCA 刷卡日 ＋ Port Liner 動物王國套票",
      passType: "icoca",
      transportSummary: "今日起全程使用 ICOCA 刷卡！自新今宮搭 JR 至「三ノ宮站」，轉乘神戶新交通 Port Liner 至「計算科學中心站」。",
      hotelArea: "大阪新今宮周邊 (第 3/4 晚)",
      notes: "在三ノ宮轉乘 Port Liner 前，記得在 Port Liner 三宮站售票窗口購買「神戶動物王國＋Port Liner 來回電車優惠套票」（等於送電車車資）！",
      items: [
        {
          id: "d7-1",
          time: "09:00",
          category: "🚆 跨城交通",
          title: "JR 新今宮 ➔ 大阪站 ➔ JR 三ノ宮站 ➔ 計算科學中心站",
          desc: "刷 ICOCA 搭乘 JR 新快速列車前往神戶三ノ宮站，再轉乘高架無人駕駛的 Port Liner（孩子最愛坐第一排看風景！）前往神戶動物王國。",
          highlight: "🎫 推薦在 Port Liner 三宮站購買「動物王國門票＋電車來回套票」超划算！",
          mapQuery: "Sannomiya Station",
          done: false
        },
        {
          id: "d7-2",
          time: "全日",
          category: "🦙 親子生態",
          title: "神戶動物王國（室內無障礙・水豚零距離互動）",
          desc: "全區幾乎為室內溫室與平坦無障礙步道，大晴天或下雨都不怕！可以親手餵食水豚、袋鼠、象龜，近距離看鯨頭鸛、兔猻，還有超震撼的飛鳥飛行秀與牧羊犬表演。",
          highlight: "🥕 水豚互動區超熱門，記得準備零錢買飼料讓 3 小餵個過癮！",
          mapQuery: "Kobe Animal Kingdom",
          done: false
        },
        {
          id: "d7-3",
          time: "傍晚",
          category: "🌃 港灣夜景",
          title: "神戶港 (Kobe Harborland / 美利堅公園) 欣賞夜景",
          desc: "傍晚前往神戶港邊，在 umie 商場或馬賽克廣場 (MOSAIC) 享用晚餐（旁邊還有神戶麵包超人博物館 1 樓免費商店區可逛），欣賞神戶塔、海洋博物館與摩天輪點燈夜景。",
          highlight: "🚢 海風徐徐、步道寬敞，拍全家福夜景絕佳地點",
          mapQuery: "Kobe Harborland umie",
          done: false
        },
        {
          id: "d7-4",
          time: "晚上",
          category: "🚆 返回大阪",
          title: "自 JR 神戶站（或三ノ宮站）刷 ICOCA 搭 JR 返回新今宮",
          desc: "從馬賽克廣場走地下街直通「JR 神戶站」只要約 8 分鐘（比回三宮更近！），搭 JR 新快速＋環狀線返回大阪新今宮。",
          highlight: "",
          mapQuery: "JR Kobe Station",
          done: false
        }
      ]
    },
    {
      day: 8,
      date: "7/3 (六)",
      fullDate: "2027-07-03",
      city: "京都 ➔ 大阪",
      title: "京都鐵道博物館、鴨川散步 & 晚餐二擇一",
      passBadge: "💳 ICOCA 刷卡日（JR / 京阪或阪急電車）",
      passType: "icoca",
      transportSummary: "去程：自新今宮搭 JR 至大阪轉京都線至「梅小路京都西站」。傍晚可選「回大阪阿倍野 Q's Mall / 心齋橋」或「留在京都吃完晚餐再回新今宮」！",
      hotelArea: "大阪新今宮周邊 (第 4/4 晚)",
      notes: "想體驗京都鐵道博物館的「駕駛模擬器」，記得先下載官方抽選 App 並在入館後立刻登記抽選，同時先買 SL 蒸汽火車乘車券！傍晚可視孩子體力在下方切換「阿倍野 Q's Mall」或「京都晚餐」。",
      hasOptions: true,
      optionKey: "day8Option",
      optionTitle: "🔀 Day 8 傍晚晚餐＆採買方案切換（依當天體力二擇一）：",
      optionLabels: {
        A: "🛍️ 選項 A：阿倍野 Q's Mall 親子採買晚餐",
        B: "🍵 選項 B：留在京都吃晚餐＋伴手禮"
      },
      optionsData: {
        A: [
          {
            id: "d8-a1",
            time: "08:30",
            category: "🚆 鐵道出發",
            title: "JR 新今宮 ➔ 大阪 ➔ 京都 ➔ 梅小路京都西站",
            desc: "全程刷 ICOCA 搭乘 JR 前往京都。在京都站轉搭嵯峨野線（32/33號月台）只要 1 站（約 3 分鐘）就到梅小路京都西站，出站過馬路就是博物館大門！",
            highlight: "💳 刷 ICOCA 免買票，轉乘順暢",
            mapQuery: "Umekoji-Kyotonishi Station",
            done: false
          },
          {
            id: "d8-a2",
            time: "上午～中午",
            category: "🚂 鐵道聖地",
            title: "京都鐵道博物館：扇形車庫、實體 SL 蒸汽火車、模擬器",
            desc: "鐵道迷終極聖地！參觀壯觀的木造「扇形車庫」與轉車台、實際搭乘冒著白煙與汽笛聲的「SL Steam 號」蒸汽火車、體驗新幹線/在來線駕駛模擬器，還能在 2F 景觀餐廳邊看窗外新幹線與 HARUKA 呼嘯而過邊吃火車便當！",
            highlight: "🚂 SL 蒸汽火車每班次固定，進館建議先到本館後方月台購票",
            mapQuery: "Kyoto Railway Museum",
            done: false
          },
          {
            id: "d8-a3",
            time: "下午",
            category: "🐢 河岸散策",
            title: "京都鴨川散步 & 跳烏龜石（三條～四條河原町 / 鴨川三角洲）",
            desc: "從梅小路搭公車或計程車前往鴨川河畔！沿著清澈河岸散步、帶 3 小踩水跳烏龜石（飛び石）、看水鳥與河岸風光，順便喝杯京都咖啡或抹茶下午茶。",
            highlight: "🚇 逛完可從鴨川旁搭「京阪電車（祇園四條/三條 ➔ 京橋）」轉 JR 環狀線直達天王寺站（阿倍野）！",
            mapQuery: "Kamogawa River Kyoto",
            done: false
          },
          {
            id: "d8-a4",
            time: "傍晚～晚上",
            category: "🛍️ 選項 A：大阪阿倍野商圈",
            title: "阿倍野 Q's Mall 晚餐與最後採買（天王寺站・距新今宮僅 1 站）",
            desc: "返回大阪天王寺站直通「阿倍野 Q's Mall」！這裡空間寬敞現代、推車與親子極度友善，有超好買的「阿卡將本鋪 (Akachan)」、大型超市 Ito Yokado（買水果零食伴手禮超便宜）、Uniqlo、Bic Camera 與 3F/4F 豐富親子餐廳美食街。吃飽散步或搭 1 站就回新今宮飯店！",
            highlight: "👶 大阪最強親子購物中心！若想看夜景還可順遊隔壁棟「阿倍野 Harukas 300 展望台」",
            mapQuery: "Abeno Q's Mall",
            done: false
          }
        ],
        B: [
          {
            id: "d8-b1",
            time: "08:30",
            category: "🚆 鐵道出發",
            title: "JR 新今宮 ➔ 大阪 ➔ 京都 ➔ 梅小路京都西站",
            desc: "全程刷 ICOCA 搭乘 JR 前往京都。在京都站轉搭嵯峨野線（32/33號月台）只要 1 站（約 3 分鐘）就到梅小路京都西站，出站過馬路就是博物館大門！",
            highlight: "💳 刷 ICOCA 免買票，轉乘順暢",
            mapQuery: "Umekoji-Kyotonishi Station",
            done: false
          },
          {
            id: "d8-b2",
            time: "上午～中午",
            category: "🚂 鐵道聖地",
            title: "京都鐵道博物館：扇形車庫、實體 SL 蒸汽火車、模擬器",
            desc: "鐵道迷終極聖地！參觀壯觀的木造「扇形車庫」與轉車台、實際搭乘冒著白煙與汽笛聲的「SL Steam 號」蒸汽火車、體驗新幹線/在來線駕駛模擬器，還能在 2F 景觀餐廳邊看窗外新幹線與 HARUKA 呼嘯而過邊吃火車便當！",
            highlight: "🚂 SL 蒸汽火車每班次固定，進館建議先到本館後方月台購票",
            mapQuery: "Kyoto Railway Museum",
            done: false
          },
          {
            id: "d8-b3",
            time: "下午",
            category: "🐢 河岸散策",
            title: "京都鴨川散步 & 跳烏龜石（三條～四條河原町 / 鴨川三角洲）",
            desc: "從梅小路搭公車或計程車前往鴨川河畔！在鴨川三角洲或三條～四條大橋散步、帶 3 小踩水跳烏龜石（飛び石），享受悠閒的京都午後。",
            highlight: "🐢 不用趕回大阪，下午可以慢慢在鴨川與河原町散策",
            mapQuery: "Kamogawa River Kyoto",
            done: false
          },
          {
            id: "d8-b4",
            time: "傍晚～晚上",
            category: "🍵 選項 B：京都美食與伴手禮",
            title: "京都晚餐（四條河原町商圈 或 京都車站伊勢丹/Porta）➔ 搭車返新今宮",
            desc: "直接在四條河原町百貨餐廳街（高島屋 S.C. 有任天堂京都店！）或回到京都車站（拉麵小路、名代豬排、壽喜燒、中村藤吉抹茶）悠閒享用晚餐，一次買齊京都限定伴手禮（Malebranche 茶之菓、生八橋等），吃飽後再搭車返回新今宮飯店打包行李！",
            highlight: "🚆 從河原町搭「阪急直通堺筋線」或從京都站搭「JR 新快速」都能輕鬆回新今宮",
            mapQuery: "Kyoto Station",
            done: false
          }
        ]
      }
    },
    {
      day: 9,
      date: "7/4 (日)",
      fullDate: "2027-07-04",
      city: "關西機場 ➔ 返台",
      title: "整理行李、直達關西機場搭 JX 823 返台",
      passBadge: "🚆 機場直達車（南海電鐵 / JR Haruka）",
      passType: "bus",
      transportSummary: "JX 823 (15:10 關西 T1 起飛 ➔ 約 17:15 抵達桃園 T1)。建議 10:30~11:00 從新今宮搭直達車，約 11:45~12:10 抵達關西機場。",
      hotelArea: "溫暖的家 🏠",
      notes: "星宇 JX 823 為下午 15:10 起飛！早上不用趕早起，可以睡飽吃完早餐，10:30 退房去新今宮站搭車時間非常充裕！",
      items: [
        {
          id: "d9-1",
          time: "10:30 – 11:45",
          category: "🧳 退房與機場電車",
          title: "新今宮飯店退房 ➔ 搭南海電鐵或 JR 直達關西國際機場",
          desc: "10:30 辦理退房後步行至新今宮站，搭乘「南海電鐵（Rapi:t 特急 36 分鐘 / 空港急行 42 分鐘）」或「JR 關空快速/Haruka」一班車直達關西機場車站（約 11:30~11:50 抵達）。",
          highlight: "🚆 建議搭乘 10:45 ~ 11:15 之間的班次，12:00 前抵達機場最從容！",
          mapQuery: "Kansai International Airport",
          done: false
        },
        {
          id: "d9-2",
          time: "12:00 – 14:30",
          category: "✈️ 報到、出境與免稅店",
          title: "關西國際機場第一航廈 (T1) 報到託運 & 免稅店最後採買",
          desc: "於起飛前 3 小時（約 12:10）至星宇航空櫃檯辦理行李託運。關西機場隨身行李安檢與出境審查建議預留 40~50 分鐘，通關後在全新改裝的 KIX 免稅店享用午餐與採買伴手禮。",
          highlight: "🛍️ 預計 13:15 前完成出境審查，還有整整 1 小時可以悠閒逛免稅店！",
          mapQuery: "Kansai International Airport Terminal 1",
          done: false
        },
        {
          id: "d9-3",
          time: "15:10 – 17:15",
          category: "🛫 平安返台",
          title: "15:10 搭乘星宇航空 JX 823 起飛 ➔ 約 17:15 抵達桃園機場",
          desc: "14:30 前往登機門準備登機，15:10 準時起飛（飛行時間約 3 小時）。預計台灣時間 17:05～17:20 抵達桃園國際機場第一航廈 (T1)，領行李出關約 18:00～18:15。",
          highlight: "✈️ 航班：星宇航空 JX 823｜15:10 KIX (T1) ➔ 17:15 TPE (T1)",
          mapQuery: "Taoyuan International Airport",
          done: false
        }
      ]
    }
  ],
  checklist: [
    { id: "c1", text: "護照效期確認（2大3小，需滿 6 個月以上）", done: false },
    { id: "c2", text: "台灣虎航 IT 214 (去程) & 星宇航空 JX 823 (回程) 電子機票確認", done: false },
    { id: "c3", text: "購買「JR 關西&廣島地區周遊券 5日券」(6/27~7/1 連續使用，含廣島新幹線與宮島渡輪)", done: false },
    { id: "c4", text: "預訂 6/27 (週日)「瀨戶大橋麵包超人小火車 1號 (11:17)」綠色車廂指定席券", done: false },
    { id: "c5", text: "預約 6/27「中野烏龍麵學校（琴平校）」(3小體驗＋2大陪同)", done: false },
    { id: "c6", text: "購買 7/1 (週四)「日本環球影城 USJ」門票 & 下載官方 App 綁定", done: false },
    { id: "c7", text: "準備全員 ICOCA 卡（含兒童 ICOCA，Day 7~9 使用）", done: false },
    { id: "c8", text: "出發前填寫 Visit Japan Web (VJW) 入境與海關申報 QR Code", done: false },
    { id: "c9", text: "日本網卡 / eSIM / 漫遊開通 & 行動電源隨身攜帶", done: false }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultTripData, ...parsed };
    }
  } catch (e) {
    console.warn("讀取儲存資料失敗，使用預設行程", e);
  }
  return JSON.parse(JSON.stringify(defaultTripData));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("儲存失敗", e);
  }
}

function updateCountdown() {
  const badge = document.getElementById("countdownBadge");
  if (!badge) return;
  const target = new Date("2027-06-26T00:00:00+08:00");
  const now = new Date();
  const diffDays = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    badge.textContent = `⏳ 距離出發還有 ${diffDays} 天`;
  } else if (diffDays >= -8) {
    badge.textContent = `🎉 旅途進行中！Day ${Math.abs(diffDays) + 1}`;
  } else {
    badge.textContent = `✨ 美好旅程回憶`;
  }
}

function renderDayPills() {
  const container = document.getElementById("daySelector");
  if (!container) return;
  container.innerHTML = state.days
    .map((d) => {
      const isActive = d.day === state.selectedDay ? "active" : "";
      const isJr = d.passType === "jr" ? "jr-pass-day" : "";
      const shortDate = d.date.split(" ")[0];
      return `
        <button class="day-pill ${isActive} ${isJr}" onclick="selectDay(${d.day})">
          <span class="d-num">Day ${d.day}</span>
          <span class="d-date">${shortDate}</span>
          <span class="d-city">${d.city.split(" ")[0]}</span>
        </button>
      `;
    })
    .join("");
}

function selectDay(dayNum) {
  state.selectedDay = dayNum;
  state.activeTab = "itinerary";
  saveState();
  renderAll();
}

function switchTab(tabName) {
  state.activeTab = tabName;
  saveState();
  renderAll();
}

function switchDayOption(optionKey, opt) {
  state[optionKey] = opt;
  saveState();
  renderMainContent();
}

function toggleItemDone(dayNum, itemId) {
  const dayObj = state.days.find((d) => d.day === dayNum);
  if (!dayObj) return;

  if (dayObj.hasOptions) {
    const key = dayObj.optionKey || "day8Option";
    const currentOpt = state[key] || "A";
    const list = dayObj.optionsData[currentOpt] || [];
    const item = list.find((i) => i.id === itemId);
    if (item) item.done = !item.done;
  } else {
    const item = dayObj.items.find((i) => i.id === itemId);
    if (item) item.done = !item.done;
  }
  saveState();
  renderMainContent();
}

function updateDayNote(dayNum, val) {
  const dayObj = state.days.find((d) => d.day === dayNum);
  if (!dayObj) return;
  dayObj.notes = val;
  saveState();
}

function toggleChecklist(id) {
  const item = state.checklist.find((c) => c.id === id);
  if (item) {
    item.done = !item.done;
    saveState();
    renderMainContent();
  }
}

function addChecklistItem() {
  const input = document.getElementById("newChecklistInput");
  if (!input || !input.value.trim()) return;
  state.checklist.push({
    id: "c-" + Date.now(),
    text: input.value.trim(),
    done: false
  });
  input.value = "";
  saveState();
  renderMainContent();
}

function updateHotelInfo(key, val) {
  state.hotelNames[key] = val;
  saveState();
}

function openAddEventModal() {
  document.getElementById("addEventModal").classList.add("open");
}

function closeAddEventModal() {
  document.getElementById("addEventModal").classList.remove("open");
}

function saveNewEvent() {
  const time = document.getElementById("evtTime").value.trim() || "自訂時段";
  const title = document.getElementById("evtTitle").value.trim();
  const desc = document.getElementById("evtDesc").value.trim();
  const mapQuery = document.getElementById("evtMap").value.trim() || title;

  if (!title) {
    alert("請輸入行程標題！");
    return;
  }

  const dayObj = state.days.find((d) => d.day === state.selectedDay);
  const newItem = {
    id: "custom-" + Date.now(),
    time,
    category: "📌 自訂行程",
    title,
    desc: desc || "自訂補充行程項目",
    highlight: "",
    mapQuery,
    done: false
  };

  if (dayObj.hasOptions) {
    const key = dayObj.optionKey || "day8Option";
    const currentOpt = state[key] || "A";
    dayObj.optionsData[currentOpt].push(newItem);
  } else {
    dayObj.items.push(newItem);
  }

  document.getElementById("evtTime").value = "";
  document.getElementById("evtTitle").value = "";
  document.getElementById("evtDesc").value = "";
  document.getElementById("evtMap").value = "";

  closeAddEventModal();
  saveState();
  renderMainContent();
}

function resetDefaultData() {
  if (confirm("確定要重置所有自訂修改與勾選狀態，恢復預設行程嗎？")) {
    localStorage.removeItem(STORAGE_KEY);
    state = JSON.parse(JSON.stringify(defaultTripData));
    renderAll();
  }
}

function renderItineraryView() {
  const d = state.days.find((x) => x.day === state.selectedDay);
  if (!d) return "";

  const transportClass =
    d.passType === "jr"
      ? "transport-jr"
      : d.passType === "icoca"
      ? "transport-icoca"
      : "transport-bus";

  const optKey = d.optionKey || "day8Option";
  const currentOpt = state[optKey] || "A";
  const currentItems = d.hasOptions ? d.optionsData[currentOpt] : d.items;

  const optTitle =
    d.optionTitle || "🔀 二擇一彈性方案切換（點擊切換當日行程）：";
  const labelA =
    (d.optionLabels && d.optionLabels.A) || "選項 A";
  const labelB =
    (d.optionLabels && d.optionLabels.B) || "選項 B";

  const optionSwitcherHtml = d.hasOptions
    ? `
      <div class="option-switcher">
        <div class="option-switcher-title">${optTitle}</div>
        <div class="option-buttons">
          <button class="opt-btn ${currentOpt === "A" ? "active" : ""}" onclick="switchDayOption('${optKey}', 'A')">
            ${labelA}
          </button>
          <button class="opt-btn ${currentOpt === "B" ? "active" : ""}" onclick="switchDayOption('${optKey}', 'B')">
            ${labelB}
          </button>
        </div>
      </div>
    `
    : "";

  const itemsHtml = currentItems
    .map((item) => {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        item.mapQuery || item.title
      )}`;
      return `
        <div class="timeline-item ${item.done ? "completed" : ""}">
          <div class="timeline-dot"></div>
          <div class="item-top-row">
            <span class="item-time">${item.time}</span>
            <span class="item-category">${item.category}</span>
          </div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-desc">${item.desc}</p>
          ${
            item.highlight
              ? `<div class="item-highlight">${item.highlight}</div>`
              : ""
          }
          <div class="item-actions">
            <a class="action-btn map-btn" href="${mapUrl}" target="_blank" rel="noopener">
              📍 Google 地圖導航
            </a>
            <button class="action-btn check-btn" onclick="toggleItemDone(${d.day}, '${item.id}')">
              ${item.done ? "✅ 已完成 (點擊取消)" : "⬜ 標記完成"}
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="day-summary-card">
      <div class="day-header-row">
        <div class="day-title-group">
          <span class="day-date-chip">Day ${d.day} ・ 2027/${d.date}</span>
          <h2>${d.title}</h2>
        </div>
        <span class="city-badge">📍 ${d.city}</span>
      </div>

      <div class="info-grid">
        <div class="info-box ${transportClass}">
          <span class="info-box-icon">🚆</span>
          <div class="info-box-content">
            <span class="info-box-label">${d.passBadge}</span>
            <div>${d.transportSummary}</div>
          </div>
        </div>
        <div class="info-box hotel-box">
          <span class="info-box-icon">🏨</span>
          <div class="info-box-content">
            <span class="info-box-label">當晚住宿地點</span>
            <div><strong>${d.hotelArea}</strong></div>
          </div>
        </div>
      </div>
    </div>

    ${optionSwitcherHtml}

    <div class="timeline-list">
      ${itemsHtml}
    </div>

    <button class="add-event-btn" onclick="openAddEventModal()">
      ＋ 在 Day ${d.day} 新增自訂行程或餐廳
    </button>

    <div class="day-notes-card">
      <h4>
        <span>📝 Day ${d.day} 隨手備註（自動儲存）</span>
      </h4>
      <textarea
        class="notes-textarea"
        placeholder="輸入訂位代號、乘車班次、或是注意事項..."
        oninput="updateDayNote(${d.day}, this.value)"
      >${d.notes || ""}</textarea>
    </div>
  `;
}

function renderPassView() {
  return `
    <div class="section-card">
      <h3>🎫 9天8夜 交通票券作戰總覽</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0;">
        配合新增廣島・宮島一日遊，本行程使用超划算的 <strong>「JR 關西&廣島地區周遊券 (5日券)」</strong>，於 <strong>Day 2 (6/27) ～ Day 6 (7/1)</strong> 連續使用，一張票包辦<strong>岡山⇄廣島新幹線、JR宮島渡輪、倉敷、岡山➔新大阪新幹線與 USJ</strong>！
      </p>
      <div class="pass-timeline-bar">
        <div class="pass-cell bus">D1<br>6/26<br>巴士</div>
        <div class="pass-cell jr">D2<br>6/27<br>JR 1</div>
        <div class="pass-cell jr">D3<br>6/28<br>JR 2</div>
        <div class="pass-cell jr">D4<br>6/29<br>JR 3</div>
        <div class="pass-cell jr">D5<br>6/30<br>JR 4</div>
        <div class="pass-cell jr">D6<br>7/1<br>JR 5</div>
        <div class="pass-cell icoca">D7<br>7/2<br>ICOCA</div>
        <div class="pass-cell icoca">D8<br>7/3<br>ICOCA</div>
        <div class="pass-cell bus">D9<br>7/4<br>機場車</div>
      </div>
    </div>

    <div class="section-card">
      <h3>🟢 Day 2 ~ Day 6：JR 關西&廣島地區周遊券 (5日)</h3>
      <ul style="font-size:0.86rem;padding-left:18px;margin:0;line-height:1.7;">
        <li><strong>Day 2 四國週日限定小火車 (6/27)：</strong>周遊券涵蓋「岡山 ⇄ 兒島」。兒島至琴平/宇多津屬 JR 四國區間，且<strong>「麵包超人小火車 1號」為全車綠色車廂指定席</strong>，需另外加購四國段乘車券＋綠色車廂指定席券！</li>
        <li><strong>Day 3 倉敷一日遊 (6/28)：</strong>岡山 ⇄ 倉敷 JR 山陽本線直接刷周遊券進站。</li>
        <li><strong>Day 4 廣島・宮島一日遊 (6/29)：</strong>全行程回本王牌！<strong>岡山 ⇄ 廣島 山陽新幹線 (Nozomi/Sakura/Mizuho)、廣島 ⇄ 宮島口 JR、JR 西日本宮島渡輪、以及廣島觀光循環巴士 Meipuru-pu 全部免費包含在周遊券內</strong>！（登島僅需投 ¥100 宮島訪問稅）。</li>
        <li><strong>Day 5 新幹線跨城大阪 (6/30)：</strong>岡山 ➔ 新大阪 搭乘山陽新幹線，再轉 JR 至新今宮與梅田。若有特大行李記得事先劃位「特大行李放置處附帶席」。</li>
        <li><strong>Day 6 大阪環球影城 (7/1)：</strong>新今宮 ➔ 西九條 ➔ 環球城站 全程為 JR 路線，直接刷周遊券進站（第 5 天到期日）。</li>
      </ul>
    </div>

    <div class="section-card">
      <h3>🟣 Day 7 ~ Day 9：ICOCA 與關西機場交通</h3>
      <ul style="font-size:0.86rem;padding-left:18px;margin:0;line-height:1.7;">
        <li><strong>Day 7 神戶動物王國＆神戶港 (7/2)：</strong>刷 ICOCA 搭 JR 至「三ノ宮站」，在 Port Liner 三宮站購買「神戶動物王國＋電車來回優惠套票」最划算！</li>
        <li><strong>Day 8 京都鐵道博物館＋鴨川＋晚餐二擇一 (7/3)：</strong>去程刷 ICOCA 搭 JR 至「梅小路京都西站」；傍晚可選搭車回「天王寺站（阿倍野 Q's Mall）」或留在京都吃完晚餐再搭車回新今宮。</li>
        <li><strong>Day 9 新今宮 ➔ 關西機場 (7/4)：</strong>新今宮站可搭乘<strong>「南海電鐵（空港急行 / 特急 Rapi:t）」</strong>或<strong>「JR 關空快速 / 特急 Haruka」</strong>一班車直達關西機場第一航廈。</li>
      </ul>
    </div>
  `;
}

function renderFlightHotelView() {
  return `
    <div class="section-card">
      <h3>✈️ 航班確切時間與出關預估</h3>
      <div class="info-box transport-bus" style="margin-bottom:10px;">
        <span class="info-box-icon">🛫</span>
        <div class="info-box-content">
          <span class="info-box-label">去程：2027/6/26 (六) Day 1</span>
          <div><strong>台灣虎航 IT 214</strong>｜桃園 T1 (<strong>11:30</strong>) ➔ 岡山 OKJ (<strong>15:05</strong>)</div>
          <div style="font-size:0.8rem;opacity:0.9;margin-top:4px;line-height:1.5;">
            • <strong>建議到場：</strong>09:00 抵達桃園機場第一航廈報到<br>
            • <strong>預計出關：</strong>約 <strong>15:50 ～ 16:05</strong> 完成入境與領行李<br>
            • <strong>市區接駁：</strong>搭 16:00~16:15 利木津巴士（配合航班加開），約 <strong>16:40</strong> 抵達 JR 岡山站西口
          </div>
        </div>
      </div>

      <div class="info-box transport-icoca">
        <span class="info-box-icon">🛬</span>
        <div class="info-box-content">
          <span class="info-box-label">回程：2027/7/4 (日) Day 9</span>
          <div><strong>星宇航空 JX 823</strong>｜關西 T1 (<strong>15:10</strong>) ➔ 桃園 T1 (<strong>17:15</strong>)</div>
          <div style="font-size:0.8rem;opacity:0.9;margin-top:4px;line-height:1.5;">
            • <strong>退房搭車：</strong>10:30 退房，自新今宮搭直達車，約 <strong>11:45 ～ 12:10</strong> 抵達關西機場 T1<br>
            • <strong>報到出境：</strong>12:10 報到託運，預計 <strong>13:15</strong> 前完成安檢與出境審查（留 1 小時逛免稅店）<br>
            • <strong>返抵台灣：</strong>17:15 降落桃園 T1，預計 <strong>18:00 ～ 18:15</strong> 領完行李出關
          </div>
        </div>
      </div>
    </div>

    <div class="section-card">
      <h3>🏨 住宿安排（岡山 4 晚 ＋ 大阪 4 晚，僅換 1 次飯店！）</h3>
      <div class="form-group">
        <label>🍑 第一階段：6/26 ~ 6/30（4 晚）- 岡山車站周邊</label>
        <textarea
          rows="2"
          oninput="updateHotelInfo('okayama', this.value)"
          placeholder="點擊輸入岡山飯店名稱、電話與訂房代號..."
        >${state.hotelNames.okayama}</textarea>
        <div style="margin-top:6px;">
          <a class="action-btn map-btn" href="https://www.google.com/maps/search/?api=1&query=Okayama+Station+Hotels" target="_blank">📍 查看岡山站周邊地圖</a>
        </div>
      </div>

      <div class="form-group" style="margin-top:16px;">
        <label>🐙 第二階段：6/30 ~ 7/4（4 晚）- 大阪新今宮周邊</label>
        <textarea
          rows="2"
          oninput="updateHotelInfo('osaka', this.value)"
          placeholder="點擊輸入大阪新今宮飯店名稱、電話與訂房代號..."
        >${state.hotelNames.osaka}</textarea>
        <div style="margin-top:6px;">
          <a class="action-btn map-btn" href="https://www.google.com/maps/search/?api=1&query=Shin-Imamiya+Station" target="_blank">📍 查看新今宮站周邊地圖</a>
        </div>
      </div>
    </div>
  `;
}

function renderChecklistView() {
  const itemsHtml = state.checklist
    .map(
      (c) => `
      <label class="checklist-item ${c.done ? "done" : ""}">
        <input type="checkbox" ${c.done ? "checked" : ""} onchange="toggleChecklist('${c.id}')" />
        <span>${c.text}</span>
      </label>
    `
    )
    .join("");

  return `
    <div class="section-card">
      <h3>✅ 行前待辦與必備票券清單（2大3小）</h3>
      <div>${itemsHtml}</div>
      <div style="display:flex;gap:8px;margin-top:14px;">
        <input
          id="newChecklistInput"
          type="text"
          placeholder="新增待辦事項或行李清單..."
          style="flex:1;padding:9px 12px;border:1px solid var(--border-color);border-radius:10px;font-size:0.88rem;"
        />
        <button class="btn-primary" onclick="addChecklistItem()">新增</button>
      </div>
    </div>

    <div class="section-card">
      <h3>⚙️ 旅遊手冊設定</h3>
      <p style="font-size:0.82rem;color:var(--text-muted);margin-top:0;">
        所有打勾進度、Day 8 方案選擇、飯店備註與新增行程皆會自動儲存在您的手機瀏覽器中。
      </p>
      <button class="btn-secondary" onclick="resetDefaultData()" style="width:100%;">
        🔄 重置所有狀態回預設行程
      </button>
    </div>
  `;
}

function renderMainContent() {
  const main = document.getElementById("mainContainer");
  const daySelectorWrap = document.getElementById("daySelectorWrap");
  if (!main) return;

  if (state.activeTab === "itinerary") {
    daySelectorWrap.style.display = "block";
    main.innerHTML = renderItineraryView();
  } else {
    daySelectorWrap.style.display = "none";
    if (state.activeTab === "pass") {
      main.innerHTML = renderPassView();
    } else if (state.activeTab === "flightHotel") {
      main.innerHTML = renderFlightHotelView();
    } else if (state.activeTab === "checklist") {
      main.innerHTML = renderChecklistView();
    }
  }

  // 更新底部導覽列 Active 狀態
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === state.activeTab);
  });
}

function renderAll() {
  updateCountdown();
  renderDayPills();
  renderMainContent();
}

window.addEventListener("DOMContentLoaded", () => {
  renderAll();
});
